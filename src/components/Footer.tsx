import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { NexaFlowLogo } from "@/components/NexaFlowLogo";
import { getWhatsAppUrl, DEFAULT_INQUIRY_MESSAGE, CONTACT_EMAIL, WHATSAPP_DISPLAY_NUMBER, getGmailUrl } from "@/lib/constants";

const footerLinks = [
  { label: "Why NexaFlow", href: "/why-us" },
  { label: "Website themes", href: "/themes" },
  { label: "ROI tools", href: "/tools" },
  { label: "Simple pricing", href: "/pricing" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-paper-deep/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.65fr_0.75fr_0.85fr]">
          <div className="max-w-md">
            <Link href="/" className="group inline-flex items-center" aria-label="NexaFlow home">
              <NexaFlowLogo size={36} textSize="text-xl" />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-ink-soft">
              A better website shouldn’t take a quarter, a big deposit, or a technical team. We build, launch and look after it — so you can focus on your next customer.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Explore</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}><Link className="text-[15px] text-ink-soft transition-colors hover:text-ink" href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Contact</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={getGmailUrl("Website Inquiry - NexaFlow", "Hi NexaFlow team, I'm interested in getting a website preview for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-ink-soft transition-colors hover:text-ink"
                >
                  <Mail size={14} className="shrink-0 text-muted" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(DEFAULT_INQUIRY_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-ink-soft transition-colors hover:text-ink"
                >
                  <MessageCircle size={14} className="shrink-0 text-muted" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
                        <h3 className="font-display text-2xl leading-tight text-ink">Let’s make your<br />first impression count.</h3>
            <Link href="/contact" className="mt-5 inline-flex text-[15px] font-medium text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-brand">Request a free preview</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} NexaFlow. Built for businesses that move.</span>
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1"><span>Free 48-hour preview, $0 down, cancel anytime.</span><Link href="/privacy" className="underline underline-offset-4 hover:text-ink">Privacy</Link></span>
        </div>
      </div>
    </footer>
  );
}
