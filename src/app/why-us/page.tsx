import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Bot, Check, Clock3, DollarSign, HandCoins, MessageCircle, RefreshCw, ShieldCheck, Sparkles, X, Zap } from "lucide-react";
import { BeforeAfterSwitcher } from "@/components/BeforeAfterSwitcher";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why Shiftline",
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
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-16 -z-10 h-[420px] w-[420px] rounded-full bg-violet-500/[0.08] blur-[110px] dark:hidden" />
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-20 sm:px-8 sm:pt-24 lg:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/70 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-violet-700 dark:border-violet-400/20 dark:bg-white/[0.04] dark:text-violet-300"><Sparkles size={13} /> A better way to launch</div>
            <h1 className="mt-7 text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.01] tracking-[-.07em] text-slate-950 dark:text-white">Big-agency quality.<br /><span className="text-violet-600 dark:text-violet-400">Small-business sensible.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">We replaced the bloated project with a clear monthly partnership: a custom-built website, ready fast, cared for continuously.</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
        <Reveal>
          <div className="grid gap-6 overflow-hidden rounded-[30px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl p-6 sm:p-9 lg:grid-cols-[.7fr_1.3fr] lg:items-center dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-400">The speed difference</p>
              <h2 className="mt-3 max-w-sm text-3xl font-semibold leading-tight tracking-[-.055em] text-slate-950 dark:text-white">The first second is the whole story.</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">Slow sites spend a customer’s patience before the page has said hello. We build for a quick, confident first impression.</p>
              <Link href="/themes" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-700 dark:text-violet-300">Explore live themes <ArrowUpRight size={14} /></Link>
            </div>
            <div className="rounded-2xl border border-violet-200/60 bg-white p-5 sm:p-7 dark:border-violet-500/20 dark:bg-[#0F0C24]">
              <div className="flex items-end justify-between gap-4"><div><p className="text-[10px] font-semibold uppercase tracking-[.14em] text-slate-400">Time to useful page</p><div className="mt-3 flex items-baseline gap-2"><span className="text-5xl font-semibold tracking-[-.08em] text-slate-950 dark:text-white">0.7</span><span className="text-sm font-semibold text-violet-700 dark:text-violet-300">seconds</span></div></div><span className="mb-1 rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-3 py-2 text-[10px] font-semibold text-violet-700 dark:text-violet-300">6× faster*</span></div>
              <div className="mt-7 space-y-5">
                <div><div className="mb-2 flex items-center justify-between text-[11px]"><span className="font-medium text-slate-600 dark:text-slate-300">Traditional small-business site</span><span className="font-mono font-semibold text-slate-500">4.2s</span></div><div className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/[0.06]"><div className="h-full w-[88%] rounded-full bg-slate-300 dark:bg-slate-600" /></div></div>
                <div><div className="mb-2 flex items-center justify-between text-[11px]"><span className="font-medium text-slate-600 dark:text-slate-300">Shiftline edge build</span><span className="font-mono font-semibold text-violet-700 dark:text-violet-300">0.7s</span></div><div className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/[0.06]"><div className="h-full w-[18%] rounded-full bg-violet-600 shadow-[0_0_14px_rgba(124,58,237,.4)]" /></div></div>
              </div>
              <p className="mt-5 text-[9px] leading-4 text-slate-400">*Illustrative page-load comparison. Actual results vary by content, network and device.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-400">The comparison</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.055em] text-slate-950 dark:text-white">A website shouldn’t be a $3,000+ headache.</h2></div><p className="max-w-xs text-xs leading-5 text-slate-500 dark:text-slate-400">Everything essential, without the agency overhead.</p></div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[26px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-violet-200/60 bg-violet-50/50 px-4 py-4 sm:px-7 dark:border-violet-500/20 dark:bg-white/[0.025]">
              <span className="text-[9px] font-bold uppercase tracking-[.16em] text-slate-400">What matters</span><span className="text-[9px] font-bold uppercase tracking-[.16em] text-slate-400">Traditional agency</span><span className="text-[9px] font-bold uppercase tracking-[.16em] text-violet-700 dark:text-violet-300">The Shiftline model</span>
            </div>
            {comparison.map((row, index) => {
              const Icon = row.icon;
              return <div key={row.label} className={`grid grid-cols-[1.1fr_1fr_1fr] items-center px-4 py-5 sm:px-7 ${index < comparison.length - 1 ? "border-b border-violet-200/60 dark:border-violet-500/15" : ""}`}>
                <div className="flex items-center gap-2.5"><span className="hidden h-8 w-8 place-items-center rounded-lg bg-slate-100 text-slate-500 sm:grid dark:bg-white/[0.04] dark:text-slate-400"><Icon size={14} /></span><span className="text-[11px] font-semibold text-slate-800 sm:text-xs dark:text-slate-200">{row.label}</span></div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 sm:text-xs dark:text-slate-400"><X size={13} className="shrink-0 text-rose-400" />{row.traditional}</div>
                <div className="flex items-center gap-2 text-[10px] font-semibold text-violet-700 sm:text-xs dark:text-violet-300"><Check size={14} className="shrink-0" />{row.ours}</div>
              </div>;
            })}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
        <Reveal><div className="mb-8 max-w-xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-400">See the difference</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.055em] text-slate-950 dark:text-white">Not just a prettier page. A better path.</h2></div></Reveal>
        <Reveal delay={0.06}><BeforeAfterSwitcher /></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((item, index) => { const Icon = item.icon; return <Reveal key={item.title} delay={index * 0.07}>
            <div className="h-full rounded-[24px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl p-6 transition-all duration-300 hover:border-violet-500/40 dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)] dark:hover:border-violet-400/40"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300"><Icon size={18} /></span><h3 className="mt-6 text-lg font-semibold tracking-[-.035em] text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400">{item.text}</p></div>
          </Reveal>; })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-2 sm:px-8 lg:pb-32">
        <Reveal><div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-violet-200/80 bg-violet-50/70 p-7 sm:flex-row sm:items-center sm:p-10 dark:border-violet-500/20 dark:bg-white/[0.03]"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-700 dark:text-violet-300">A low-risk first step</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.05em] text-slate-950 dark:text-white">Your first preview costs nothing.</h2><p className="mt-2 text-xs text-slate-600 dark:text-slate-400">Let’s make your business look as good online as it is in real life.</p></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#09091B] px-5 py-3.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#181832] dark:bg-white dark:text-[#09091B] dark:shadow-lg dark:shadow-white/10 dark:hover:bg-violet-50">Get a free preview <ArrowUpRight size={14} /></Link></div></Reveal>
      </section>
    </div>
  );
}
