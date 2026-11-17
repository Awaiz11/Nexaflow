import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock3, Mail, MessageCircle, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";
import { PreviewRequestForm } from "@/components/PreviewRequestForm";
import { Reveal } from "@/components/Reveal";
import { getWhatsAppUrl, DEFAULT_PREVIEW_MESSAGE, WHATSAPP_DISPLAY_NUMBER, CONTACT_EMAIL, getGmailUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get your free website preview",
  description: "Tell us about your business and get a custom website preview in 48 hours. No card, no commitment.",
  alternates: { canonical: "/contact" },
};

const whatsappLink = getWhatsAppUrl(DEFAULT_PREVIEW_MESSAGE);

export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-24">
        <Reveal>
          <div className="max-w-3xl"><h1 className="mt-7 text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-.07em] text-ink">A better website starts<br /><span>with a conversation.</span></h1><p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft">Tell us where customers find you. We’ll make a custom first look at what your business could be — with no card, no commitment, and no pressure.</p></div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-14 lg:pb-32">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <div className="rounded-[26px] bg-[var(--surface)] border border-line p-6 sm:p-7">
              <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-violet-500/20 dark:text-brass"><WandSparkles size={18} /></span><div><p className="text-xs font-semibold text-ink">What happens next</p><p className="mt-0.5 text-xs text-muted">A clear, human-first process.</p></div></div>
              <div className="mt-7 space-y-6">
                {[{ n: "01", title: "Tell us the basics", text: "Share your business details and where we can learn about you." }, { n: "02", title: "We shape a first look", text: "Our team creates a tailored preview with your customers in mind." }, { n: "03", title: "Choose what feels right", text: "Review it together. Move ahead only if it feels like a fit." }].map((step, index) => <div key={step.n} className="flex gap-3.5"><div className="flex flex-col items-center"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-xs font-semibold ${index === 0 ? "bg-brand text-brand-ink" : "bg-paper-deep text-muted"}`}>{step.n}</span>{index < 2 && <span className="mt-2 h-7 w-px bg-violet-200" />}</div><div className="pt-0.5"><h3 className="text-xs font-semibold text-ink">{step.title}</h3><p className="mt-1.5 text-xs leading-5 text-muted">{step.text}</p></div></div>)}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-4 rounded-[24px] border border-violet-500/20 bg-violet-500/[0.04] p-5">
              <div className="flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:text-brass"><ShieldCheck size={16} /></span><div><h3 className="text-xs font-semibold text-ink">Your information stays yours.</h3><p className="mt-1.5 text-xs leading-5 text-ink-soft">We use your details to prepare a preview and follow up about your request — never to add you to a spam list.</p></div></div>
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-violet-500/15 pt-4"><div><p className="text-lg font-semibold tracking-[-.05em] text-ink">48h</p><p className="mt-0.5 text-[11px] text-muted">preview turnaround</p></div><div><p className="text-lg font-semibold tracking-[-.05em] text-ink">$0</p><p className="mt-0.5 text-[11px] text-muted">to get started</p></div><div><p className="text-lg font-semibold tracking-[-.05em] text-ink">100%</p><p className="mt-0.5 text-[11px] text-muted">your decision</p></div></div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-between gap-3 rounded-[22px] border border-line bg-[var(--surface)] p-4 transition-all hover:border-violet-500/30 hover:bg-paper-deep"><span className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600 text-white"><MessageCircle size={18} /></span><span><span className="block text-xs font-semibold text-ink">Want the priority lane?</span><span className="mt-1 block text-xs text-muted">Message us directly on WhatsApp ({WHATSAPP_DISPLAY_NUMBER})</span></span></span><ArrowUpRight size={15} className="shrink-0 text-violet-700 dark:text-brass" /></a>
          </Reveal>

          <Reveal delay={0.18}>
            <a
              href={getGmailUrl("Website Preview Request", "Hi NexaFlow team, I'm interested in getting a 48-hour website preview for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-between gap-3 rounded-[22px] border border-line bg-[var(--surface)] p-4 transition-all hover:border-violet-500/30 hover:bg-paper-deep"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-violet-500/20 dark:text-brass">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-ink">Email via Gmail</span>
                  <span className="mt-1 block text-xs text-muted">{CONTACT_EMAIL}</span>
                </span>
              </span>
              <ArrowUpRight size={15} className="shrink-0 text-violet-700 dark:text-brass" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.06} y={16} className="w-full max-w-full min-w-0 box-border"><PreviewRequestForm /></Reveal>
      </section>
    </div>
  );
}
