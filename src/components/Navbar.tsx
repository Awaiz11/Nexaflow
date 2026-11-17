"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 w-full z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div>
          <Link href="/" className="group flex shrink-0 items-center" aria-label="NexaFlow home">
            <NexaFlowLogo size={40} textSize="text-xl sm:text-2xl" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-1 py-2 text-[15px] font-medium transition-colors ${active
                    ? "text-ink underline decoration-brand decoration-2 underline-offset-[10px]"
                    : "text-ink-soft hover:text-ink"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center rounded-full bg-brand px-5 py-2.5 text-[15px] font-medium text-brand-ink transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Get free preview
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-paper-deep md:hidden"
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
            className="overflow-hidden border-t border-line bg-paper px-6 pb-6 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto max-w-7xl grid gap-1 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${pathname === link.href
                      ? "bg-paper-deep text-ink"
                      : "text-ink-soft hover:bg-paper-deep"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-4 py-3.5 text-sm font-medium text-brand-ink"
              >
                Get free preview
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
