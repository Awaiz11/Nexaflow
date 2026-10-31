import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { NexaFlowLogo } from "@/components/NexaFlowLogo";
import { getWhatsAppUrl, DEFAULT_INQUIRY_MESSAGE, CONTACT_EMAIL, WHATSAPP_DISPLAY_NUMBER } from "@/lib/constants";

const footerLinks = [
  { label: "Why NexaFlow", href: "/why-us" },
  { label: "Website themes", href: "/themes" },
  { label: "ROI tools", href: "/tools" },
  { label: "Simple pricing", href: "/pricing" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-violet-200/50 bg-white/70 backdrop-blur-xl dark:border-violet-500/15 dark:bg-[#070613]/80">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.65fr_0.75fr_0.85fr]">
          <div className="max-w-md">
            <Link href="/" className="group inline-flex items-center" aria-label="NexaFlow home">
              <NexaFlowLogo size={36} textSize="text-xl" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              A better website shouldn’t take a quarter, a big deposit, or a technical team. We build, launch and look after it — so you can focus on your next customer.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-600/15 bg-violet-600/[0.06] px-3 py-2 text-[11px] font-semibold text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/[0.06] dark:text-violet-300">
                <span className="relative h-2 w-2 rounded-full bg-violet-600 dark:bg-violet-400"><span className="absolute inset-0 animate-ping rounded-full bg-violet-500 opacity-40" /></span>
                &lt;0.7s Global Edge Active
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/60 bg-white/80 px-3 py-2 text-[11px] font-semibold text-slate-600 dark:border-violet-500/20 dark:bg-white/[0.04] dark:text-slate-300"><ShieldCheck size={13} className="text-violet-600 dark:text-violet-400" /> 100% ownership guarantee</span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Explore</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}><Link className="text-sm text-slate-600 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-300" href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Direct Contact</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-300">
                  <Mail size={13} className="shrink-0 text-slate-400" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(DEFAULT_INQUIRY_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-300"
                >
                  <MessageCircle size={13} className="shrink-0 text-violet-600 dark:text-violet-400" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Your next step</p>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">Let’s make your<br />first impression count.</h3>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200">Request a free preview <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-violet-200/50 pt-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-violet-500/15 dark:text-slate-500">
          <span>© {new Date().getFullYear()} NexaFlow Studio. Built for businesses that move.</span>
          <span>48-hour preview · $0 down · Cancel anytime</span>
        </div>
      </div>
    </footer>
  );
}
