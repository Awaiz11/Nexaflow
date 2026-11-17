"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, BadgeCheck, CalendarDays, Check, CircleDollarSign, Clock3, MapPinned, MessageCircle, Search, ShieldCheck, Sparkles, TrendingUp, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";

const addOns = [
  { id: "booking", title: "Smart booking flow", description: "Availability, confirmations and less back-and-forth.", price: 15, icon: CalendarDays },
  { id: "reviews", title: "Review & reputation care", description: "Keep your best word-of-mouth visible and current.", price: 12, icon: BadgeCheck },
  { id: "seo", title: "Local search boost", description: "A stronger foundation for maps and local discovery.", price: 19, icon: Search },
  { id: "location", title: "Additional location", description: "A tailored landing page for one more storefront.", price: 45, icon: MapPinned },
] as const;

type AddOnId = (typeof addOns)[number]["id"];
const currency = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export default function ToolsPage() {
  const [inquiries, setInquiries] = useState(5);
  const [customerValue, setCustomerValue] = useState(65);
  const [selected, setSelected] = useState<Record<AddOnId, boolean>>({ booking: false, reviews: false, seo: false, location: false });
  const monthlyOpportunity = Math.round(inquiries * customerValue * 4.33);
  const monthlyInquiries = Math.round(inquiries * 4.33);
  const monthlyFee = 49;
  const coverage = monthlyOpportunity > 0 ? Math.max(1, Math.ceil(monthlyFee / customerValue)) : 0;
  const monthlyEstimate = useMemo(() => monthlyFee + addOns.reduce((total, item) => total + (selected[item.id] ? item.price : 0), 0), [selected]);

  const growthBundleSelected = selected.booking && selected.reviews && selected.seo;

  const toggleAddOn =(id: AddOnId) => setSelected((current) => ({ ...current, [id]: !current[id] }));

  return (
    <div className="relative isolate overflow-hidden">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-24">
        <Reveal><div className="max-w-3xl"><h1 className="mt-7 text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-.07em] text-ink">Know the upside.<br /><span>Keep the numbers simple.</span></h1><p className="mt-5 max-w-xl text-base leading-7 text-ink-soft">A quick way to see what a missed inquiry might be costing — and what a managed website would look like on your monthly budget.</p></div></Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 sm:px-8 lg:grid-cols-2 lg:pb-32">
        <Reveal>
          <div className="flex h-full flex-col overflow-hidden rounded-[28px] bg-[var(--surface)] border border-line">
            <div className="border-b border-line p-6 sm:p-8">
              <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-500/10 text-violet-700 dark:text-brass"><TrendingUp size={19} /></span></div>
              <h2 className="mt-6 text-2xl font-semibold tracking-[-.05em] text-ink">Missed revenue calculator</h2><p className="mt-2 max-w-md text-xs leading-6 text-ink-soft">A few inquiries can add up. Estimate the monthly value you might be leaving on the table when customers can’t reach you.</p>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="space-y-7">
                <div><div className="flex items-center justify-between gap-3"><label htmlFor="inquiries" className="text-xs font-semibold text-ink-soft">Missed inquiries per week</label><span className="rounded-lg bg-paper-deep px-2.5 py-1.5 font-mono text-xs font-bold text-ink">{inquiries}</span></div><input id="inquiries" type="range" min="1" max="40" step="1" value={inquiries} onChange={(event) => setInquiries(Number(event.target.value))} className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-violet-600 dark:accent-violet-400" /><div className="mt-2 flex justify-between text-xs text-muted"><span>1 inquiry</span><span>40 inquiries</span></div></div>
                <div><div className="flex items-center justify-between gap-3"><label htmlFor="customer-value" className="text-xs font-semibold text-ink-soft">Average customer value</label><span className="rounded-lg bg-paper-deep px-2.5 py-1.5 font-mono text-xs font-bold text-ink">{currency(customerValue)}</span></div><input id="customer-value" type="range" min="50" max="2500" step="50" value={customerValue} onChange={(event) => setCustomerValue(Number(event.target.value))} className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-violet-600 dark:accent-violet-400" /><div className="mt-2 flex justify-between text-xs text-muted"><span>$50</span><span>$2,500+</span></div></div>
              </div>
              <div className="mt-8 rounded-2xl bg-[#1f4d3b] p-5 text-white sm:p-6">
                <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold text-muted">Potential monthly opportunity</p><p className="mt-2 text-4xl font-semibold tracking-[-.07em] text-white">{currency(monthlyOpportunity)}</p><p className="mt-1 text-xs text-muted">Based on about {monthlyInquiries} missed inquiries / month</p></div><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/20 text-violet-300"><ArrowDownRight size={19} /></span></div>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-xs text-muted">NexaFlow Starter Care</span><span className="text-xs font-semibold text-violet-300">$49 / month</span></div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-white/[0.05] px-3 py-2.5 text-xs leading-4 text-slate-300"><Zap size={13} className="shrink-0 text-violet-300" />{coverage} recovered {coverage === 1 ? "customer" : "customers"} {coverage === 1 ? "can" : "could"} cover the base monthly plan.</div>
              </div>
              <p className="mt-4 text-xs leading-4 text-muted">Illustrative potential only — assumes every missed inquiry would become a customer. Actual conversion and revenue will vary.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col overflow-hidden rounded-[28px] bg-[var(--surface)] border border-line">
            <div className="border-b border-line p-6 sm:p-8">
              <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-500/10 text-violet-700 dark:text-brass"><Sparkles size={19} /></span></div>
              <h2 className="mt-6 text-2xl font-semibold tracking-[-.05em] text-ink">Custom retainer estimator</h2><p className="mt-2 max-w-md text-xs leading-6 text-ink-soft">Start with a managed website, then add only the capabilities that match how you run your business.</p>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="divide-y divide-line">
                <div className="flex items-center justify-between gap-4 py-4 first:pt-0"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-paper-deep text-violet-600 dark:text-brass"><ShieldCheck size={16} /></span><div><p className="text-xs font-semibold text-ink">Managed website care</p><p className="mt-1 text-xs text-muted">Design, hosting, updates & support</p></div></div><span className="text-xs font-semibold text-ink">$49<span className="text-xs font-medium text-muted"> / mo</span></span></div>
                {addOns.map((item) => { const Icon = item.icon; const isSelected = selected[item.id]; return <div key={item.id} className="flex items-center justify-between gap-3 py-4"><div className="flex min-w-0 items-center gap-3"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${isSelected ? "bg-violet-500/10 text-violet-700 dark:bg-violet-500/20 dark:text-brass" : "bg-paper-deep text-muted"}`}>{Icon ? <Icon size={15} /> : null}</span><div className="min-w-0"><p className="text-[13px] font-semibold text-ink">{item.title}</p><p className="mt-0.5 text-xs leading-4 text-muted">{item.description}</p></div></div><div className="flex shrink-0 items-center gap-3"><span className="text-xs font-semibold text-ink-soft">+${item.price}<span className="text-[11px] font-normal text-muted"> / mo</span></span><button type="button" role="switch" aria-checked={isSelected} aria-label={`${isSelected ? "Remove" : "Add"} ${item.title}`} onClick={() => toggleAddOn(item.id)} className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${isSelected ? "bg-violet-600 dark:bg-violet-500" : "bg-line"}`}><span className={`absolute top-1 grid h-4 w-4 place-items-center rounded-full bg-[var(--surface)] shadow-sm transition-transform duration-300 ${isSelected ? "translate-x-6" : "translate-x-1"}`}>{isSelected && <Check size={10} className="text-violet-700 dark:text-brass" />}</span></button></div></div>; })}
              </div>
              <div className="mt-auto rounded-2xl border border-line bg-paper-deep p-5"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-ink-soft">Estimated monthly total</span><span className="text-xs font-semibold text-violet-700 dark:text-brass">$0 upfront</span></div><div className="mt-2 flex items-end justify-between"><p className="text-4xl font-semibold tracking-[-.07em] text-ink">{currency(monthlyEstimate)}<span className="ml-1 text-xs font-medium tracking-normal text-muted">/ month</span></p><span className="mb-1 inline-flex items-center gap-1 text-xs font-semibold text-muted"><Check size={11} className="text-violet-600 dark:text-brass" /> Cancel anytime</span></div></div>
              {growthBundleSelected && <p className="mt-3 flex items-start gap-2 rounded-xl bg-violet-500/10 px-3.5 py-2.5 text-xs leading-4 text-violet-800 dark:text-brass"><Sparkles size={13} className="mt-px shrink-0" />These add-ons come bundled in Growth Pro for $79 / month — save {currency(monthlyEstimate - (selected.location ? 45 : 0) - 79)} a month. <Link href="/pricing" className="font-semibold underline underline-offset-2">Compare plans</Link></p>}
              <Link href="/contact" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-4 text-xs font-semibold transition-all text-brand-ink hover:opacity-90">Build my plan <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32"><Reveal><div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-[var(--surface)] border border-line p-5 sm:flex-row sm:items-center"><div className="flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:text-brass"><Clock3 size={16} /></span><div><h3 className="text-sm font-semibold text-ink">Need a hand with the numbers?</h3><p className="mt-1 text-xs text-muted">We’ll help you choose a setup that fits your business and your budget.</p></div></div><Link href="/contact" className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700 dark:text-brass">Talk through your options <MessageCircle size={14} /></Link></div></Reveal></section>
    </div>
  );
}
