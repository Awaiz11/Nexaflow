import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Bot, Check, Clock3, DollarSign, HandCoins, MessageCircle, RefreshCw, ShieldCheck, Sparkles, X, Zap } from "lucide-react";
import { BeforeAfterSwitcher } from "@/components/BeforeAfterSwitcher";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why NexaFlow",
  alternates: { canonical: "/why-us" },
  description: "See why a managed, edge-fast website is a better fit for local business than a slow, expensive agency project.",
};

const comparison = [
  { label: "Upfront investment", traditional: "$3,000+", ours: "$0 down", icon: DollarSign },
  { label: "First preview", traditional: "4–8 weeks", ours: "48 hours", icon: Clock3 },
  { label: "Site maintenance", traditional: "Extra fees", ours: "Fully managed", icon: RefreshCw },
  { label: "Contract", traditional: "Lock-in", ours: "Cancel anytime", icon: ShieldCheck },
  { label: "24/7 Smart Booking Capture", traditional: "Not included", ours: "Always-on", icon: Bot },
  { label: "Instant WhatsApp Lead Routing", traditional: "Manual only", ours: "< 3 seconds", icon: MessageCircle },
  { label: "100% Domain & Asset Ownership", traditional: "Agency holds", ours: "You own it all", icon: ShieldCheck },
];

const capabilities = [
  { title: "Built for the edge", text: "A lean, modern stack keeps your pages fast and dependable wherever a customer finds you.", icon: Zap },
  { title: "Designed around action", text: "Every screen guides visitors toward the next right move — book, call, message or visit.", icon: ArrowRight },
  { title: "Managed by real people", text: "We handle updates, small changes and the technical care so your site stays current.", icon: HandCoins },
];

export default function WhyUsPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-20 sm:px-8 sm:pt-24 lg:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            
            <h1 className="mt-7 text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.01] tracking-[-.07em] text-ink">Big-agency quality.<br /><span>Small-business sensible.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">We replaced the bloated project with a clear monthly partnership: a custom-built website, ready fast, cared for continuously.</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
        <Reveal>
          <div className="grid gap-6 overflow-hidden rounded-[30px] bg-[var(--surface)] border border-line p-6 sm:p-9 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div>
              
              <h2 className="mt-3 max-w-sm text-3xl font-semibold leading-tight tracking-[-.055em] text-ink">The first second is the whole story.</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-ink-soft">Slow sites spend a customer’s patience before the page has said hello. We build for a quick, confident first impression.</p>
              <Link href="/themes" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-700 dark:text-brass">Explore live themes <ArrowUpRight size={14} /></Link>
            </div>
            <div className="rounded-2xl border border-line bg-[var(--surface)] p-5 sm:p-7">
              <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-semibold text-muted">Time to useful page</p><div className="mt-3 flex items-baseline gap-2"><span className="text-5xl font-semibold tracking-[-.08em] text-ink">0.7</span><span className="text-sm font-semibold text-violet-700 dark:text-brass">seconds</span></div></div><span className="mb-1 rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-3 py-2 text-xs font-semibold text-violet-700 dark:text-brass">6× faster*</span></div>
              <div className="mt-7 space-y-5">
                <div><div className="mb-2 flex items-center justify-between text-[13px]"><span className="font-medium text-ink-soft">Traditional small-business site</span><span className="font-mono font-semibold text-muted">4.2s</span></div><div className="h-2.5 overflow-hidden rounded-full bg-paper-deep"><div className="h-full w-[88%] rounded-full bg-line dark:bg-slate-600" /></div></div>
                <div><div className="mb-2 flex items-center justify-between text-[13px]"><span className="font-medium text-ink-soft">NexaFlow edge build</span><span className="font-mono font-semibold text-violet-700 dark:text-brass">0.7s</span></div><div className="h-2.5 overflow-hidden rounded-full bg-paper-deep"><div className="h-full w-[18%] rounded-full bg-violet-600 shadow-[0_0_14px_rgba(124,58,237,.4)]" /></div></div>
              </div>
              <p className="mt-5 text-xs leading-4 text-muted">*Illustrative page-load comparison. Actual results vary by content, network and device.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="mt-3 text-3xl font-semibold tracking-[-.055em] text-ink">A website shouldn’t be a $3,000+ headache.</h2></div><p className="max-w-xs text-xs leading-5 text-muted">Everything essential, without the agency overhead.</p></div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[26px] bg-[var(--surface)] border border-line">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-line bg-paper-deep px-4 py-4 sm:px-7">
              <span className="text-xs font-bold text-muted">What matters</span><span className="text-xs font-bold text-muted">Traditional agency</span><span className="text-xs font-bold text-violet-700 dark:text-brass">The NexaFlow model</span>
            </div>
            {comparison.map((row, index) => {
              const Icon = row.icon;
              return <div key={row.label} className={`grid grid-cols-[1.1fr_1fr_1fr] items-center px-4 py-5 sm:px-7 ${index < comparison.length - 1 ? "border-b border-line" : ""}`}>
                <div className="flex items-center gap-2.5"><span className="hidden h-8 w-8 place-items-center rounded-lg bg-paper-deep text-muted sm:grid"><Icon size={14} /></span><span className="text-[13px] font-semibold text-ink-soft sm:text-xs">{row.label}</span></div>
                <div className="flex items-center gap-2 text-xs text-muted sm:text-xs"><X size={13} className="shrink-0 text-rose-400" />{row.traditional}</div>
                <div className="flex items-center gap-2 text-xs font-semibold text-violet-700 sm:text-xs dark:text-brass"><Check size={14} className="shrink-0" />{row.ours}</div>
              </div>;
            })}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
        <Reveal><div className="mb-8 max-w-xl"><h2 className="mt-3 text-3xl font-semibold tracking-[-.055em] text-ink">Not just a prettier page. A better path.</h2></div></Reveal>
        <Reveal delay={0.06}><BeforeAfterSwitcher /></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((item, index) => { const Icon = item.icon; return <Reveal key={item.title} delay={index * 0.07}>
            <div className="h-full rounded-[24px] bg-[var(--surface)] border border-line p-6 transition-all duration-300 hover:border-violet-500/40"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-violet-500/20 dark:text-brass"><Icon size={18} /></span><h3 className="mt-6 text-lg font-semibold tracking-[-.035em] text-ink">{item.title}</h3><p className="mt-2 text-xs leading-6 text-ink-soft">{item.text}</p></div>
          </Reveal>; })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-2 sm:px-8 lg:pb-32">
        <Reveal><div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-line bg-paper-deep p-7 sm:flex-row sm:items-center sm:p-10"><div><p className="text-xs font-bold text-violet-700 dark:text-brass">A low-risk first step</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.05em] text-ink">Your first preview costs nothing.</h2><p className="mt-2 text-xs text-ink-soft">Let’s make your business look as good online as it is in real life.</p></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-xs font-semibold transition-all text-brand-ink hover:opacity-90">Get a free preview <ArrowUpRight size={14} /></Link></div></Reveal>
      </section>
    </div>
  );
}
