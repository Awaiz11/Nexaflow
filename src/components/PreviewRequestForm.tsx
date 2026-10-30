"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, CircleCheck, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const industries = [
  "Hospitality & dining",
  "Salons & services",
  "Wellness & clinics",
  "Finance & B2B",
  "Retail & local services",
  "Other",
];

type FormStatus = "idle" | "success";

export function PreviewRequestForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [businessName, setBusinessName] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const formUserName = String(data.get("userName") ?? "").trim();
    const formBusinessName = String(data.get("businessName") ?? "").trim();
    const formIndustry = String(data.get("industry") ?? "").trim();
    const formDiscoveryUrl = String(data.get("discoveryUrl") ?? "").trim();
    const formWhatsappNumber = String(data.get("whatsappNumber") ?? "").trim();

    setBusinessName(formBusinessName);
    setUserName(formUserName);

    let message = `Hi NexaFlow team, I'm interested in the free 48-hour preview for my business.`;
    message += `\n\nName: ${formUserName}`;
    message += `\nBusiness Name: ${formBusinessName}`;
    message += `\nIndustry: ${formIndustry}`;
    if (formDiscoveryUrl) {
      message += `\nLink: ${formDiscoveryUrl}`;
    }
    if (formWhatsappNumber) {
      message += `\nWhatsApp: ${formWhatsappNumber}`;
    }

    const whatsappUrl = `https://wa.me/923124915599?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    setStatus("success");
    form.reset();
  };

  if (status === "success") {
    const whatsappText = encodeURIComponent(`Hi NexaFlow team, I'm ${userName || "reaching out"} and I just requested a free preview for ${businessName}. Can we chat about next steps?`);
    const whatsappFallbackLink = `https://wa.me/923124915599?text=${whatsappText}`;
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-[28px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl p-7 sm:p-9 dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/10 text-violet-700 dark:text-violet-300"><CircleCheck size={27} /></span>
        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Request received</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">We’re on it, {businessName.split(" ")[0] || "there"}.</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">Your free preview is in the queue. We’ll review your business and send a first look within 48 hours. Want to jump the queue? Message us directly.</p>
        <a href={whatsappFallbackLink} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#09091B] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#181832] dark:bg-white dark:text-[#09091B] dark:shadow-lg dark:shadow-white/10 dark:hover:bg-violet-50"><MessageCircle size={16} /> Open WhatsApp priority chat <ArrowUpRight size={15} /></a>
        <button type="button" onClick={() => setStatus("idle")} className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"><ArrowLeft size={13} /> Submit another business</button>
      </motion.div>
    );
  }

  const fieldClass = "mt-2 w-full rounded-xl border border-violet-200/60 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-[#070514] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-violet-400/70 dark:focus:ring-violet-400/10";
  const labelClass = "text-xs font-semibold text-slate-700 dark:text-slate-300";

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl p-6 sm:p-8 dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">The first look is on us</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white">Tell us a little about you.</h2></div>
        <span className="hidden rounded-full bg-violet-50 px-3 py-1.5 text-[10px] font-semibold text-violet-700 sm:inline-flex dark:bg-white/[0.05] dark:text-violet-300">~ 60 sec</span>
      </div>

      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="userName">Your name <span className="text-rose-500">*</span></label>
            <input className={fieldClass} id="userName" name="userName" placeholder="e.g. Sarah" autoComplete="given-name" required minLength={2} maxLength={80} />
          </div>
          <div>
            <label className={labelClass} htmlFor="businessName">Business name <span className="text-rose-500">*</span></label>
            <input className={fieldClass} id="businessName" name="businessName" placeholder="e.g. The Good Table" autoComplete="organization" required minLength={2} maxLength={160} />
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="industry">What do you do? <span className="text-rose-500">*</span></label>
          <select className={fieldClass} id="industry" name="industry" defaultValue="" required>
            <option value="" disabled>Select your industry</option>
            {industries.map((industry) => <option value={industry} key={industry}>{industry}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="discoveryUrl">Google Maps or Instagram link <span className="font-normal text-slate-400">(optional)</span></label>
          <input className={fieldClass} id="discoveryUrl" name="discoveryUrl" type="url" placeholder="https://maps.app.goo.gl/..." maxLength={2048} />
        </div>
        <div>
          <label className={labelClass} htmlFor="whatsappNumber">WhatsApp number <span className="text-rose-500">*</span></label>
          <input className={fieldClass} id="whatsappNumber" name="whatsappNumber" type="tel" autoComplete="tel" placeholder="+1 555 010 2048" required minLength={7} maxLength={40} />
          <p className="mt-2 text-[10px] leading-5 text-slate-500 dark:text-slate-500">We’ll only use this to share your preview and discuss your site.</p>
        </div>
      </div>

      <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#09091B] px-5 py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#181832] dark:bg-white dark:text-[#09091B] dark:shadow-lg dark:shadow-white/10 dark:hover:bg-violet-50">
        Request my free preview <Send size={15} />
      </button>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-500"><Check size={12} className="text-violet-600 dark:text-violet-400" /> No card, no commitment, no sales pressure.</p>
    </form>
  );
}
