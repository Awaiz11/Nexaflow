"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { NexaFlowLogo } from "@/components/NexaFlowLogo";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { label: "Home", href: "/" },
  { label: "Why us", href: "/why-us" },
  { label: "Themes", href: "/themes" },
  { label: "Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 border-b border-violet-200/40 bg-white/75 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#05050B]/80">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div>
          <Link href="/" className="group flex shrink-0 items-center" aria-label="NexaFlow home">
            <NexaFlowLogo size={42} />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${active
                    ? "bg-violet-50 text-violet-700 dark:bg-white/[0.08] dark:text-white"
                    : "text-[#4a4a6a] hover:text-[#09091B] dark:text-[#9494b8] dark:hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-4 py-1.5 lg:flex dark:border-violet-400/20 dark:bg-violet-400/[0.06]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-50 dark:bg-violet-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600 dark:bg-violet-400" />
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-violet-700 dark:text-violet-300">48-Hr Previews Open</span>
          </div>
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#09091B] px-6 py-2.5 text-base font-semibold text-white shadow-md transition-all hover:bg-[#181832] sm:inline-flex dark:bg-white dark:text-[#09091B] dark:shadow-lg dark:shadow-white/10 dark:hover:bg-violet-50"
          >
            Get free preview <ArrowUpRight size={18} />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 md:hidden dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-200/80 bg-white/95 px-6 pb-6 backdrop-blur-2xl md:hidden dark:border-white/5 dark:bg-[#090A0F]/95"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto max-w-7xl grid gap-1 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${pathname === link.href
                      ? "bg-violet-50 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.06]"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#09091B] px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#181832] dark:bg-white dark:text-[#09091B] dark:shadow-lg dark:shadow-white/10 dark:hover:bg-violet-50"
              >
                Get free preview <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
