import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock3, MessageCircle, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";
import { PreviewRequestForm } from "@/components/PreviewRequestForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Get your free website preview",
  description: "Tell us about your business and get a custom website preview in 48 hours. No card, no commitment.",
};

const whatsappLink = `https://wa.me/923124915599?text=${encodeURIComponent("Hi NexaFlow team, I'm interested in the free 48-hour preview for my business.")}`;

export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-44 top-28 -z-10 h-[400px] w-[400px] rounded-full bg-violet-500/[0.08] blur-[110px] dark:hidden" />
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-24">
        <Reveal>
          <div className="max-w-3xl"><div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/75 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-violet-700 dark:border-violet-400/20 dark:bg-white/[0.04] dark:text-violet-300"><Clock3 size={13} /> Your preview, in 48 hours</div><h1 className="mt-7 text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-.07em] text-slate-950 dark:text-white">A better website starts<br /><span className="text-violet-600 dark:text-violet-400">with a conversation.</span></h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">Tell us where customers find you. We’ll make a custom first look at what your business could be — with no card, no commitment, and no pressure.</p></div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-14 lg:pb-32">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <div className="rounded-[26px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl p-6 sm:p-7 dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]">
              <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300"><WandSparkles size={18} /></span><div><p className="text-xs font-semibold text-slate-950 dark:text-white">What happens next</p><p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">A clear, human-first process.</p></div></div>
              <div className="mt-7 space-y-6">
                {[{ n: "01", title: "Tell us the basics", text: "Share your business details and where we can learn about you." }, { n: "02", title: "We shape a first look", text: "Our team creates a tailored preview with your customers in mind." }, { n: "03", title: "Choose what feels right", text: "Review it together. Move ahead only if it feels like a fit." }].map((step, index) => <div key={step.n} className="flex gap-3.5"><div className="flex flex-col items-center"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-[10px] font-semibold ${index === 0 ? "bg-[#09091B] text-white dark:bg-white dark:text-[#09091B]" : "bg-slate-100 text-slate-500 dark:bg-white/[0.06] dark:text-slate-400"}`}>{step.n}</span>{index < 2 && <span className="mt-2 h-7 w-px bg-violet-200 dark:bg-white/10" />}</div><div className="pt-0.5"><h3 className="text-xs font-semibold text-slate-900 dark:text-white">{step.title}</h3><p className="mt-1.5 text-[10px] leading-5 text-slate-500 dark:text-slate-400">{step.text}</p></div></div>)}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-4 rounded-[24px] border border-violet-500/20 bg-violet-500/[0.04] p-5 dark:border-violet-500/20 dark:bg-white/[0.03]">
              <div className="flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-300"><ShieldCheck size={16} /></span><div><h3 className="text-xs font-semibold text-slate-950 dark:text-white">Your information stays yours.</h3><p className="mt-1.5 text-[10px] leading-5 text-slate-600 dark:text-slate-400">We use your details to prepare a preview and follow up about your request — never to add you to a spam list.</p></div></div>
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-violet-500/15 pt-4 dark:border-violet-500/20"><div><p className="text-lg font-semibold tracking-[-.05em] text-slate-950 dark:text-white">48h</p><p className="mt-0.5 text-[8px] text-slate-500">preview turnaround</p></div><div><p className="text-lg font-semibold tracking-[-.05em] text-slate-950 dark:text-white">$0</p><p className="mt-0.5 text-[8px] text-slate-500">to get started</p></div><div><p className="text-lg font-semibold tracking-[-.05em] text-slate-950 dark:text-white">100%</p><p className="mt-0.5 text-[8px] text-slate-500">your decision</p></div></div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-between gap-3 rounded-[22px] border border-violet-200/70 bg-white/90 p-4 transition-all hover:border-violet-500/30 hover:bg-violet-50/50 dark:border-violet-500/20 dark:bg-[#0B091B]/85 dark:hover:border-violet-400/25"><span className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600 text-white"><MessageCircle size={18} /></span><span><span className="block text-xs font-semibold text-slate-950 dark:text-white">Want the priority lane?</span><span className="mt-1 block text-[9px] text-slate-500 dark:text-slate-400">Message us directly on WhatsApp</span></span></span><ArrowUpRight size={15} className="shrink-0 text-violet-700 dark:text-violet-300" /></a>
          </Reveal>
        </div>

        <Reveal delay={0.06} y={16} className="w-full max-w-full min-w-0 box-border"><PreviewRequestForm /></Reveal>
      </section>
    </div>
  );
}
