"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";
type ThemeContextValue = {
  theme: Theme;
  toggleTheme: (x?: number, y?: number) => void | Promise<void>;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
};

export function ThemeProvider({
  children,
  defaultTheme = "light",
  enableSystem = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const saved = window.localStorage.getItem("shiftline-theme");
    let initialTheme: Theme = defaultTheme;

    if (saved === "dark" || saved === "light") {
      initialTheme = saved;
    } else if (enableSystem && typeof window !== "undefined") {
      initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.style.colorScheme = initialTheme;
    setTheme(initialTheme);
  }, [defaultTheme, enableSystem]);

  const toggleTheme = useCallback(
    async () => {
      const nextTheme: Theme = theme === "dark" ? "light" : "dark";

      const applyTheme = () => {
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        document.documentElement.style.colorScheme = nextTheme;
        window.localStorage.setItem("shiftline-theme", nextTheme);
        setTheme(nextTheme);
      };

      // Reduced motion or unsupported browser — skip animation
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !document.startViewTransition
      ) {
        applyTheme();
        return;
      }

      const transition = document.startViewTransition(() => {
        applyTheme();
      });

      await transition.ready;

      document.documentElement.animate(
        {
          clipPath: [
            "circle(0% at 0% 50%)", // Start from the middle left edge
            "circle(150% at 0% 50%)", // Sweep across the entire screen
          ],
        },
        {
          duration: 800,
          easing: "cubic-bezier(0.8, 0, 0.2, 1)", // Cinematic slow-in, fast-mid, slow-out
          pseudoElement: "::view-transition-new(root)",
        },
      );
    },
    [theme],
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
