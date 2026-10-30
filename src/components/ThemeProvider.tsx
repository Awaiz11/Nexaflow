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

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("shiftline-theme");
    const nextTheme: Theme = saved === "light" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    setTheme(nextTheme);
  }, []);

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
