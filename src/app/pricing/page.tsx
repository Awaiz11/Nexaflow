"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, HelpCircle, Minus, Plus, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const plans = [
  {
    name: "Starter Care",
    price: "$49",
    description: "A polished, fast home for a business ready to look the part.",
    features: ["Custom, mobile-first website", "Fast edge hosting & SSL", "Core service and contact pages", "Managed updates & support", "Booking or inquiry capture", "Instant WhatsApp lead forwarding"],
    cta: "Start with Starter",
  },
  {
    name: "Growth Pro",
    price: "$79",
    description: "For teams ready to turn more attention into confirmed visits.",
    features: ["Everything in Starter Care", "Advanced booking flow", "WhatsApp lead notifications", "Local search foundations", "Review & reputation section", "Priority small updates", "24/7 Autonomous AI Booking Concierge", "Google Maps Local SEO Boost"],
    cta: "Choose Growth Pro",
    highlighted: true,
  },
  {
    name: "Multi-Location",
    price: "$149",
    description: "A consistent, easy-to-manage experience across locations.",
    features: ["Everything in Growth Pro", "Up to 3 location pages", "Location-specific contact paths", "Shared brand system", "Centralized management", "Additional location options"],
    cta: "Plan for locations",
  },
];

const faqs = [
  { question: "Is there really no upfront cost?", answer: "Yes. The preview is free, and the listed monthly plan has no setup payment. You only start paying once you decide to move ahead with a plan and launch." },
  { question: "Who owns my website and content?", answer: "Your business owns the content and assets we create for you. If you decide to leave, we’ll provide a handoff of the materials and help make the transition clear." },
  { question: "How does the 48-hour preview work?", answer: "Share your business name, industry and a public profile or Maps link. We use that context to create a first visual direction within two days. It’s a preview, not a commitment." },
  { question: "Can I cancel whenever I want?", answer: "There’s no long-term lock-in. If your needs change, you can cancel your monthly service. We’ll explain any handoff details before you make that choice." },
  { question: "What if I already have a website?", answer: "That’s completely fine. We can start with a fresh direction, help improve your current experience, or talk through the best migration path during your preview conversation." },
  { question: "Are integrations and add-ons included?", answer: "The core plans show what’s included at each level. Optional tools can be added when useful, and we’ll confirm every price with you before anything is activated." },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-28 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[110px] dark:hidden" />
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-20 text-center sm:px-8 sm:pt-24">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/75 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-violet-700 dark:border-violet-400/20 dark:bg-white/[0.04] dark:text-violet-300"><Sparkles size={13} /> Straightforward by design</div>
          <h1 className="mx-auto mt-7 max-w-4xl text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-.07em] text-slate-950 dark:text-white">Your next website.<br /><span className="text-violet-600 dark:text-violet-400">No giant invoice attached.</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">A complete website partnership, for less than a daily coffee run. Choose a plan that fits where your business is going.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[10px] font-medium text-slate-500 dark:text-slate-400"><span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/60 bg-white/70 px-3 py-2 dark:border-violet-500/20 dark:bg-white/[0.03]"><Check size={12} className="text-violet-600 dark:text-violet-400" />$0 down</span><span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/60 bg-white/70 px-3 py-2 dark:border-violet-500/20 dark:bg-white/[0.03]"><Check size={12} className="text-violet-600 dark:text-violet-400" />No long contracts</span><span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/60 bg-white/70 px-3 py-2 dark:border-violet-500/20 dark:bg-white/[0.03]"><Check size={12} className="text-violet-600 dark:text-violet-400" />Hosting & care included</span></div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => <Reveal key={plan.name} delay={index * 0.07} className="h-full">
            <article className={`relative flex h-full flex-col rounded-[27px] p-[1px] ${plan.highlighted ? "pricing-featured" : "border border-violet-200/70 bg-white/90 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl dark:border-violet-500/20 dark:bg-[#0B091B]/85 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]"}`}>
              {plan.highlighted && <motion.div aria-hidden="true" className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-400 opacity-80 blur-[1px] dark:from-violet-500 dark:via-indigo-500 dark:to-purple-400" animate={{ opacity: [0.5, 0.95, 0.5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />}
              <div className={`relative flex h-full flex-col rounded-[26px] p-6 sm:p-7 ${plan.highlighted ? "bg-white/95 dark:bg-[#0B091B]/95" : ""}`}>
                <div className="flex items-start justify-between gap-3"><div><p className={`text-[10px] font-bold uppercase tracking-[.16em] ${plan.highlighted ? "text-violet-700 dark:text-violet-300" : "text-slate-500 dark:text-slate-400"}`}>{plan.name}</p><p className="mt-2 max-w-[270px] text-xs leading-5 text-slate-600 dark:text-slate-400">{plan.description}</p></div>{plan.highlighted && <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-violet-600 px-2.5 py-1.5 text-[8px] font-bold text-white dark:bg-violet-600 dark:text-white"><Star size={10} fill="currentColor" /> Most popular</span>}</div>
                <div className="mt-7 flex items-end gap-1"><span className="text-5xl font-semibold tracking-[-.08em] text-slate-950 dark:text-white">{plan.price}</span><span className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">/ month</span></div>
                <div className="mt-4 h-px bg-violet-200/60 dark:bg-violet-500/20" />
                <p className="mt-5 text-[9px] font-bold uppercase tracking-[.15em] text-slate-400">Included in your plan</p>
                <ul className="mt-4 flex-1 space-y-3.5">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-2.5 text-[11px] text-slate-700 dark:text-slate-300"><span className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${plan.highlighted ? "bg-violet-500/10 text-violet-700 dark:text-violet-300" : "bg-slate-100 text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"}`}><Check size={10} /></span>{feature}</li>)}</ul>
                <Link href="/contact" className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3.5 text-xs font-semibold shadow-md transition-all ${plan.highlighted ? "bg-[#09091B] text-white hover:bg-[#181832] dark:bg-white dark:text-[#09091B] dark:shadow-lg dark:shadow-white/10 dark:hover:bg-violet-50" : "border border-violet-200/70 bg-white text-slate-800 hover:border-violet-300 hover:bg-violet-50/50 dark:border-violet-500/20 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-violet-400/30 dark:hover:bg-white/[0.06]"}`}>{plan.cta} <ArrowRight size={14} /></Link>
                <p className="mt-3 text-center text-[9px] text-slate-400">$0 upfront · Cancel anytime</p>
              </div>
            </article>
          </Reveal>)}
        </div>
        <p className="mt-5 text-center text-[9px] leading-5 text-slate-400">All prices in USD. Third-party services, payment processing and custom scopes may be quoted separately before you commit.</p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8 lg:py-20">
        <Reveal>
          <div className="mb-7 text-center"><div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300"><HelpCircle size={18} /></div><h2 className="mt-4 text-3xl font-semibold tracking-[-.055em] text-slate-950 dark:text-white">Good questions. Clear answers.</h2><p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Everything you need to know before you say yes.</p></div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="overflow-hidden rounded-[24px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const triggerId = `faq-trigger-${index}`;
              const panelId = `faq-panel-${index}`;
              return <div key={faq.question} className={index < faqs.length - 1 ? "border-b border-violet-200/60 dark:border-violet-500/15" : ""}>
                <h3><button id={triggerId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"><span className="text-xs font-semibold text-slate-900 dark:text-white">{faq.question}</span><span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-violet-600 text-white dark:bg-violet-600 dark:text-white" : "bg-slate-100 text-slate-500 dark:bg-white/[0.05] dark:text-slate-400"}`}>{isOpen ? <Minus size={13} /> : <Plus size={13} />}</span></button></h3>
                <AnimatePresence initial={false}>
                  {isOpen && <motion.div id={panelId} role="region" aria-labelledby={triggerId} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} className="overflow-hidden"><p className="max-w-3xl px-5 pb-5 pr-14 text-xs leading-6 text-slate-600 sm:px-6 sm:pr-20 dark:text-slate-400">{faq.answer}</p></motion.div>}
                </AnimatePresence>
              </div>;
            })}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:pb-32"><Reveal><div className="relative overflow-hidden rounded-[28px] bg-[#09091B] px-7 py-9 text-white sm:px-10 sm:py-10 border border-violet-500/20 shadow-2xl shadow-violet-950/30 dark:bg-[#070514] dark:border dark:border-violet-500/25"><div className="absolute -right-12 -top-28 h-72 w-72 rounded-full bg-violet-600/25 blur-[80px]" /><div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-violet-300">Start with a preview</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.05em]">See your business in a new light.</h2><p className="mt-2 text-xs text-slate-300">No payment details. Just a thoughtful first look.</p></div><Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-xs font-semibold text-[#09091B] shadow-lg shadow-white/10 transition-colors hover:bg-violet-50">Get my free preview <ArrowUpRight size={14} /></Link></div></div></Reveal></section>
    </div>
  );
}
