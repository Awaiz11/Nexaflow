"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      onClick={(e) => toggleTheme(e.clientX, e.clientY)}
      className="theme-toggle group relative inline-flex h-10 w-[76px] shrink-0 items-center rounded-full border border-line bg-transparent p-1 hover:border-ink-soft"
    >
      <motion.span
        aria-hidden="true"
        className="absolute left-1 top-1 z-10 grid h-8 w-8 place-items-center rounded-full bg-ink text-paper"
        animate={{ x: theme === "dark" ? 0 : 36 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -180, scale: 0.55 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.55 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
      <span aria-hidden="true" className="pointer-events-none absolute left-[10px] top-1/2 -translate-y-1/2 text-muted">
        <Moon size={13} />
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-muted">
        <Sun size={13} />
      </span>
    </button>
  );
}
