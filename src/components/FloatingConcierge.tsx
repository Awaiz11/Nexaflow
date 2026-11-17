"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Check, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";

type ChatMessage = { from: "visitor" | "concierge"; text: string; kind?: "route" };

export function FloatingConcierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "concierge", text: "Hi there — want to see how a faster website turns a visit into a booking?" },
  ]);
  const [input, setInput] = useState("");

  const addMessage = (text: string, response: string, kind?: "route") => {
    setMessages((current) => [...current, { from: "visitor", text }, { from: "concierge", text: response, kind }]);
  };

  const submitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = input.trim();
    if (!message) return;
    addMessage(message, "Got it. A NexaFlow specialist will follow up shortly — or request your free preview to get started.");
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
            className="glass-card mb-3 flex w-[min(365px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-[24px] border border-line bg-[var(--surface)] shadow-2xl"
            aria-label="NexaFlow concierge chat"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-4">
              <div className="flex items-center gap-3">
                <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white"><Sparkles size={17} /><span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-violet-500" /></span>
                <div><p className="text-sm font-semibold text-ink">NexaFlow concierge</p><p className="mt-0.5 text-[13px] text-muted">Online · typically replies instantly</p></div>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="grid h-8 w-8 place-items-center rounded-full text-muted hover:bg-paper-deep"><X size={16} /></button>
            </div>

            <div className="flex max-h-[290px] min-h-[178px] flex-col gap-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${index}-${message.text}`}
                  className={`max-w-[88%] rounded-2xl px-3.5 py-3 text-xs leading-5 ${
                    message.from === "visitor"
                      ? "self-end rounded-br-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md"
                      : "self-start rounded-bl-md border border-line bg-paper-deep text-ink-soft dark:text-zinc-200"
                  }`}
                >
                  {message.text}
                  {message.kind === "route" && <span className="mt-2 flex items-center gap-1.5 border-t border-violet-500/20 pt-2 font-semibold text-violet-700 dark:text-orange-400"><Check size={13} /> Lead routed to WhatsApp queue</span>}
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-line px-4 py-3">
              {messages.length === 1 && (
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={() => addMessage("I’d like to test booking", "Perfect. A visitor can choose a time in seconds, then your team receives the details immediately.")} className="flex items-center justify-center gap-1.5 rounded-xl border border-line px-2 py-2.5 text-xs font-semibold text-ink-soft transition-colors hover:border-ink-soft hover:bg-paper-deep"><CalendarDays size={13} /> Test instant booking</button>
                  <button type="button" onClick={() => addMessage("Send a test WhatsApp lead", "Your lead is captured and routed to the business WhatsApp inbox in seconds.", "route")} className="flex items-center justify-center gap-1.5 rounded-xl border border-violet-500/20 bg-violet-500/[0.06] px-2 py-2.5 text-xs font-semibold text-violet-700 transition-colors hover:bg-violet-500/[0.12] dark:text-orange-400"><MessageCircle size={13} /> Test WhatsApp route</button>
                </div>
              )}
              <form onSubmit={submitMessage} className="flex items-center gap-2 rounded-xl border border-line bg-paper-deep p-1 focus-within:border-violet-500/60 focus-within:ring-2 focus-within:ring-violet-500/20">
                <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask us anything..." aria-label="Message the concierge" className="min-w-0 flex-1 bg-transparent px-2 py-2 text-xs text-ink-soft outline-none placeholder:text-muted" />
                <button type="submit" aria-label="Send message" className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-600/40 active:scale-95"><Send size={14} /></button>
              </form>
            </div>
            <Link href="/contact" className="flex items-center justify-center gap-1.5 bg-paper-deep py-2.5 text-xs font-semibold text-muted transition-colors hover:text-violet-600 dark:hover:text-orange-400">Want your own preview? Start here <ArrowUpRight size={12} /></Link>
          </motion.section>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close concierge chat" : "Open concierge chat"}
        aria-expanded={open}
        className="group relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-violet-600/40"
      >
        <span className="absolute inset-0 rounded-2xl border border-white/20" />
        {open ? <X size={21} /> : <MessageCircle size={21} />}
        {!open && <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-indigo-600 text-xs font-bold text-white dark:bg-indigo-600">1</span>}
      </button>
    </div>
  );
}
