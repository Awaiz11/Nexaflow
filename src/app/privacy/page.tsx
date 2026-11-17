import type { Metadata } from "next";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How NexaFlow collects, uses and protects the details you share when you request a website preview.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "What we collect",
    body: "When you request a preview, you share your name, business name, industry, an optional Google Maps or social profile link, and a WhatsApp number. If you email or message us, we also receive whatever you include in that message.",
  },
  {
    heading: "How we use it",
    body: "We use these details only to prepare your website preview, contact you about it, and — if you choose a plan — build, launch and maintain your site. We never sell your information or add you to marketing lists.",
  },
  {
    heading: "WhatsApp and email",
    body: "Our preview form opens WhatsApp with your details pre-filled so you can send them to us directly. Messages sent through WhatsApp or Gmail are also handled under those services’ own privacy policies.",
  },
  {
    heading: "How long we keep it",
    body: "We keep preview requests for as long as needed to follow up with you. If you don’t become a client, you can ask us to delete your details at any time.",
  },
  {
    heading: "Your choices",
    body: "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Just get in touch using the details below.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-20 sm:px-8 sm:pt-24">
      <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-400">Privacy</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-.06em] text-slate-950 dark:text-white">Your information stays yours.</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">This page explains what NexaFlow collects when you contact us or request a free preview, and how we use it.</p>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-lg font-semibold tracking-[-.03em] text-slate-950 dark:text-white">{section.heading}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{section.body}</p>
          </div>
        ))}
        <div>
          <h2 className="text-lg font-semibold tracking-[-.03em] text-slate-950 dark:text-white">Contact</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Email <a className="font-medium text-violet-700 underline underline-offset-2 dark:text-violet-300" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or message us on WhatsApp at {WHATSAPP_DISPLAY_NUMBER}.
          </p>
        </div>
      </div>
    </section>
  );
}
