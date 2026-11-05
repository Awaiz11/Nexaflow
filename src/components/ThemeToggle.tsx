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
      className="theme-toggle group relative inline-flex h-10 w-[76px] shrink-0 items-center rounded-full border border-violet-200/60 bg-white/80 p-1 backdrop-blur-md hover:border-violet-400/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <motion.span
        aria-hidden="true"
        className="absolute left-1 top-1 grid h-8 w-8 place-items-center rounded-full bg-[#09091B] text-white shadow-md shadow-black/20 dark:bg-white dark:text-[#09091B] dark:shadow-white/10"
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
      <span aria-hidden="true" className="pointer-events-none absolute left-[10px] top-1/2 -translate-y-1/2 text-violet-300 dark:text-white/20">
        <Moon size={13} />
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-violet-300 dark:text-white/20">
        <Sun size={13} />
      </span>
    </button>
  );
}
