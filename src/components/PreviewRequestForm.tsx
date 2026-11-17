"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, CircleCheck, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER } from "@/lib/constants";

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

    const whatsappUrl = getWhatsAppUrl(message);

    window.open(whatsappUrl, "_blank");
    setStatus("success");
    form.reset();
  };

  if (status === "success") {
    const whatsappFallbackLink = getWhatsAppUrl(
      `Hi NexaFlow team, I'm ${userName || "reaching out"} and I just requested a free preview for ${businessName}. Can we chat about next steps?`
    );
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-[28px] bg-[var(--surface)] border border-line p-7 sm:p-9">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/10 text-violet-700 dark:text-brass"><CircleCheck size={27} /></span>
        <p className="mt-7 text-xs font-bold text-violet-700 dark:text-brass">Request received</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">We’re on it, {businessName.split(" ")[0] || "there"}.</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-ink-soft">Your free preview is in the queue. We’ll review your business and send a first look within 48 hours. Want to jump the queue? Message us directly.</p>
        <a href={whatsappFallbackLink} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold transition-all text-brand-ink hover:opacity-90"><MessageCircle size={16} /> Open WhatsApp priority chat ({WHATSAPP_DISPLAY_NUMBER}) <ArrowUpRight size={15} /></a>
        <button type="button" onClick={() => setStatus("idle")} className="mt-5 flex items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-ink"><ArrowLeft size={13} /> Submit another business</button>
      </motion.div>
    );
  }

  const fieldClass = "mt-2 block w-full max-w-full box-border min-w-0 rounded-xl border border-line bg-[var(--surface)] px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-muted focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:placeholder:text-slate-500 dark:focus:border-violet-400/70 dark:focus:ring-violet-400/10";
  const labelClass = "text-xs font-semibold text-ink-soft";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-full box-border min-w-0 overflow-hidden rounded-[28px] bg-[var(--surface)] border border-line p-5 sm:p-8">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div><h2 className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-ink">Tell us a little about you.</h2></div>
        <span className="hidden rounded-full bg-paper-deep px-3 py-1.5 text-xs font-semibold text-violet-700 sm:inline-flex dark:text-brass">~ 60 sec</span>
      </div>

      <div className="w-full max-w-full box-border min-w-0 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2 w-full max-w-full box-border min-w-0">
          <div className="w-full max-w-full box-border min-w-0">
            <label className={labelClass} htmlFor="userName">Your name <span className="text-rose-500">*</span></label>
            <input className={fieldClass} id="userName" name="userName" placeholder="e.g. Sarah" autoComplete="given-name" required minLength={2} maxLength={80} />
          </div>
          <div className="w-full max-w-full box-border min-w-0">
            <label className={labelClass} htmlFor="businessName">Business name <span className="text-rose-500">*</span></label>
            <input className={fieldClass} id="businessName" name="businessName" placeholder="e.g. The Good Table" autoComplete="organization" required minLength={2} maxLength={160} />
          </div>
        </div>
        <div className="w-full max-w-full box-border min-w-0">
          <label className={labelClass} htmlFor="industry">What do you do? <span className="text-rose-500">*</span></label>
          <div className="relative mt-2 w-full max-w-full box-border min-w-0">
            <select
              className="block w-full max-w-full box-border min-w-0 appearance-none rounded-xl border border-line bg-[var(--surface)] pl-4 pr-10 py-3.5 text-sm text-ink outline-none transition placeholder:text-muted focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 truncate cursor-pointer dark:focus:border-violet-400/70 dark:focus:ring-violet-400/10"
              id="industry"
              name="industry"
              defaultValue=""
              required
            >
              <option value="" disabled>Select your industry</option>
              {industries.map((industry) => (
                <option value={industry} key={industry} className="text-ink">
                  {industry}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </div>
        <div className="w-full max-w-full box-border min-w-0">
          <label className={labelClass} htmlFor="discoveryUrl">Google Maps or Instagram link <span className="font-normal text-muted">(optional)</span></label>
          <input className={fieldClass} id="discoveryUrl" name="discoveryUrl" type="url" placeholder="https://maps.app.goo.gl/..." maxLength={2048} />
        </div>
        <div className="w-full max-w-full box-border min-w-0">
          <label className={labelClass} htmlFor="whatsappNumber">WhatsApp number <span className="text-rose-500">*</span></label>
          <input className={fieldClass} id="whatsappNumber" name="whatsappNumber" type="tel" autoComplete="tel" placeholder="+1 555 010 2048" required minLength={7} maxLength={40} />
          <p className="mt-2 text-xs leading-5 text-muted">We’ll only use this to share your preview and discuss your site.</p>
        </div>
      </div>

      <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-4 text-sm font-semibold transition-all text-brand-ink hover:opacity-90">
        Request my free preview <Send size={15} />
      </button>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted"><Check size={12} className="text-violet-600 dark:text-brass" /> No card, no commitment, no sales pressure.</p>
    </form>
  );
}
