"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Check, Clock3, Globe2, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function BeforeAfterSwitcher() {
  const [mode, setMode] = useState<"traditional" | "shiftline">("traditional");
  const isShiftline = mode === "shiftline";

  return (
    <div className="overflow-hidden rounded-[28px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]">
      <div className="flex flex-col justify-between gap-4 border-b border-violet-200/60 px-5 py-5 sm:flex-row sm:items-center sm:px-7 dark:border-violet-500/20">
        <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-violet-600 dark:text-violet-400">Experience switcher</p><p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">Same business. A very different first impression.</p></div>
        <div className="inline-flex rounded-full border border-violet-200/60 bg-violet-50/60 p-1 dark:border-violet-500/20 dark:bg-white/[0.04]" role="tablist" aria-label="Compare website experiences">
          <button type="button" role="tab" aria-selected={!isShiftline} onClick={() => setMode("traditional")} className={`rounded-full px-4 py-2 text-[11px] font-semibold transition-colors ${!isShiftline ? "bg-white text-slate-900 shadow-sm dark:bg-[#262b37] dark:text-white" : "text-slate-500 dark:text-slate-400"}`}>Before</button>
          <button type="button" role="tab" aria-selected={isShiftline} onClick={() => setMode("shiftline")} className={`rounded-full px-4 py-2 text-[11px] font-semibold transition-colors ${isShiftline ? "bg-[#09091B] text-white shadow-sm dark:bg-violet-600 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}>After · NexaFlow</button>
        </div>
      </div>

      <div className="grid min-h-[340px] lg:grid-cols-[1.2fr_.8fr]">
        <div className="relative overflow-hidden bg-violet-50/30 p-5 sm:p-8 dark:bg-[#070514]/70">
          <AnimatePresence mode="wait">
            <motion.div key={mode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.24 }} className="relative mx-auto max-w-[540px]">
              <div className={`overflow-hidden rounded-2xl border bg-white shadow-lg shadow-violet-950/10 dark:bg-[#0F0C24] ${isShiftline ? "border-violet-500/30 dark:border-violet-500/30" : "border-slate-200 dark:border-white/10"}`}>
                <div className="flex items-center gap-1.5 border-b border-violet-200/60 px-3 py-2.5 dark:border-violet-500/20"><span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-amber-400" /><span className="h-2 w-2 rounded-full bg-violet-400" /><div className="mx-auto flex w-[54%] items-center justify-center gap-1.5 rounded-md bg-violet-50/70 py-1 text-[8px] text-slate-500 dark:bg-white/[0.04] dark:text-slate-400"><Globe2 size={9} /> juniperandoak.com</div></div>
                <div className="p-4 sm:p-5">
                  {isShiftline ? <div className="mb-4 flex items-center justify-between"><span className="flex items-center gap-2 text-[10px] font-bold tracking-tight text-slate-900 dark:text-white"><span className="grid h-6 w-6 place-items-center rounded-lg bg-violet-500/10 text-violet-700 dark:text-violet-300">J</span> JUNIPER &amp; OAK</span><span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-[8px] font-semibold text-violet-700 dark:text-violet-300">OPEN TODAY</span></div> : <div className="mb-5 flex items-center justify-between"><span className="text-[10px] font-semibold text-slate-500">JUNIPER &amp; OAK</span><span className="text-[8px] text-slate-400">HOME · MENU · ABOUT</span></div>}
                  <div className={`rounded-xl ${isShiftline ? "bg-gradient-to-br from-[#f1eeff] to-[#fbf8ff] p-5 dark:from-violet-950/40 dark:to-[#17122b]" : "bg-slate-200/70 p-5 dark:bg-white/[0.04]"}`}>
                    <p className={`text-[8px] font-bold uppercase tracking-[.15em] ${isShiftline ? "text-violet-800 dark:text-violet-300" : "text-slate-400"}`}>{isShiftline ? "A neighborhood favorite" : "Welcome to our website"}</p>
                    <h3 className={`mt-2 max-w-xs font-serif text-2xl leading-[1.05] tracking-[-.04em] ${isShiftline ? "text-slate-950 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}>{isShiftline ? "Good food. Good company. Right around the corner." : "A title that might explain our business."}</h3>
                    <p className={`mt-2 max-w-xs text-[9px] leading-4 ${isShiftline ? "text-slate-700 dark:text-slate-300" : "text-slate-400"}`}>{isShiftline ? "Seasonal plates, a thoughtful pour, and a table waiting when you are." : "Please wait while this site loads. The menu is available as a PDF."}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[8px] font-bold ${isShiftline ? "bg-violet-700 text-white dark:bg-violet-600 dark:text-white" : "bg-slate-300 text-slate-500 dark:bg-white/[0.1] dark:text-slate-400"}`}>{isShiftline ? <>Book your table <ArrowRight size={10} /></> : "More information"}</span>
                      {isShiftline && <span className="inline-flex items-center gap-1 rounded-full border border-violet-200/60 px-3 py-2 text-[8px] font-semibold text-slate-700 dark:border-violet-500/20 dark:text-slate-300"><MessageCircle size={10} /> Message us</span>}
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2"><div className="h-11 rounded-lg bg-slate-100 dark:bg-white/[0.035]" /><div className="h-11 rounded-lg bg-slate-100 dark:bg-white/[0.035]" /><div className="h-11 rounded-lg bg-slate-100 dark:bg-white/[0.035]" /></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={mode + "-metrics"} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.22 }} className="flex flex-col justify-center p-6 sm:p-8">
            <div className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-[9px] font-bold uppercase tracking-[.14em] ${isShiftline ? "bg-violet-500/10 text-violet-700 dark:text-violet-300" : "bg-rose-500/10 text-rose-600 dark:text-rose-300"}`}><span className={`h-1.5 w-1.5 rounded-full ${isShiftline ? "bg-violet-500" : "bg-rose-500"}`} />{isShiftline ? "NexaFlow experience" : "Traditional experience"}</div>
            <p className="mt-5 text-4xl font-semibold tracking-[-.07em] text-slate-950 dark:text-white">{isShiftline ? "0.7s" : "4.2s"}<span className="ml-2 text-sm font-medium tracking-normal text-slate-500">to load</span></p>
            <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">{isShiftline ? "Fast pages keep attention on the choice: book, call, or get directions." : "A slow first impression gives a motivated customer time to bounce."}</p>
            <div className="mt-5 space-y-3">
              {[{ icon: isShiftline ? Check : X, label: "Mobile-first experience", yes: isShiftline }, { icon: isShiftline ? CalendarCheck : Clock3, label: "Booking-ready actions", yes: isShiftline }, { icon: isShiftline ? MessageCircle : X, label: "Instant lead handoff", yes: isShiftline }].map((item) => {
                const Icon = item.icon;
                return <div key={item.label} className="flex items-center gap-2.5 text-[11px]"><span className={`grid h-6 w-6 place-items-center rounded-lg ${item.yes ? "bg-violet-500/10 text-violet-700 dark:text-violet-300" : "bg-slate-100 text-slate-400 dark:bg-white/[0.05] dark:text-slate-500"}`}><Icon size={12} /></span><span className={item.yes ? "text-slate-700 dark:text-slate-200" : "text-slate-400 dark:text-slate-500"}>{item.label}</span></div>;
              })}
            </div>
            <button type="button" onClick={() => setMode(isShiftline ? "traditional" : "shiftline")} className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold text-violet-700 transition-colors hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200">{isShiftline ? "View the before" : "See the NexaFlow version"} <ArrowRight size={13} /></button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
