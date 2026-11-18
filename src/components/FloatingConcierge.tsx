"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import { getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER } from "@/lib/constants";

// Common first questions; each opens WhatsApp with the text ready to send.
const quickQuestions = [
  "I’d like a free preview of my website",
  "How much does a website cost?",
  "Can I see sites you’ve built?",
];

function openWhatsApp(text: string) {
  window.open(getWhatsAppUrl(`Hi NexaFlow team! ${text}`), "_blank", "noopener,noreferrer");
}

export function FloatingConcierge() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const submitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = input.trim();
    if (!message) return;
    openWhatsApp(message);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 flex w-[min(360px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-[24px] border border-line bg-[var(--surface)] shadow-2xl"
            aria-label="Message NexaFlow on WhatsApp"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#1f4d3b] text-[#f5f1e9]">
                  <MessageCircle size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Message NexaFlow</p>
                  <p className="mt-0.5 text-[13px] text-muted">We reply on WhatsApp</p>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="grid h-8 w-8 place-items-center rounded-full text-muted hover:bg-paper-deep">
                <X size={16} />
              </button>
            </div>

            <div className="px-4 pb-2 pt-4">
              <p className="text-[13px] leading-6 text-ink-soft">
                Ask anything about a website for your business. Pick a question or write your own, and it opens in WhatsApp ready to send.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => openWhatsApp(question)}
                    className="rounded-xl border border-line px-3.5 py-2.5 text-left text-[13px] font-medium text-ink transition-colors hover:border-ink-soft hover:bg-paper-deep"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-4 pb-4 pt-2">
              <form onSubmit={submitMessage} className="flex items-center gap-2 rounded-xl border border-line bg-paper-deep p-1 focus-within:border-ink-soft">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Write your own message"
                  aria-label="Your message"
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 text-[13px] text-ink outline-none placeholder:text-muted"
                />
                <button type="submit" aria-label="Send on WhatsApp" className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand text-brand-ink transition-opacity hover:opacity-90 active:scale-95">
                  <Send size={15} />
                </button>
              </form>
              <p className="mt-3 text-center text-xs text-muted">Or message {WHATSAPP_DISPLAY_NUMBER} directly</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close message panel" : "Message us on WhatsApp"}
        aria-expanded={open}
        className="grid h-14 w-14 place-items-center rounded-2xl bg-[#1f4d3b] text-[#f5f1e9] shadow-lg transition-transform hover:-translate-y-1"
      >
        {open ? <X size={21} /> : <MessageCircle size={21} />}
      </button>
    </div>
  );
}
