"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { HeroShowcase } from "@/components/HeroShowcase";
import { WordReveal } from "@/components/WordReveal";
import { getWhatsAppUrl, DEFAULT_PREVIEW_MESSAGE } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const recentWork = [
  {
    name: "Luxe Haven",
    kind: "Hair salon & spa, Beverly Hills",
    url: "https://salon-code-xg6g.vercel.app/",
    image: "/luxe-haven-shot.jpg",
  },
  {
    name: "Chicago's Pizza Factory",
    kind: "Pizzeria with online ordering",
    url: "https://chicago-s.vercel.app/",
    image: "/chicago-shot.jpg",
  },
  {
    name: "Sira Bar",
    kind: "Cocktail lounge",
    url: "https://premium-sira-bar-landing-page.vercel.app/",
    image: "/sira-bar.png.jpg",
  },
];

const benefits = [
  {
    title: "Quick on any phone",
    body: "Most of your customers find you on a phone, often on patchy data. Your site loads fast and gets to the point: what you offer, where you are, when you’re open.",
  },
  {
    title: "Bookings while you’re closed",
    body: "Services, prices and a simple way to book or enquire, so late-night browsing turns into a confirmed visit instead of a forgotten tab.",
  },
  {
    title: "Enquiries go straight to WhatsApp",
    body: "New requests land in the WhatsApp chat your team already checks. No extra dashboard to log into.",
  },
];

const steps = [
  {
    title: "Tell us about your business",
    body: "Send your business name and a Google Maps or Instagram link. That’s all we need to start.",
  },
  {
    title: "See your preview in 48 hours",
    body: "We design a first version of your site with your name, services and photos. Look at it, share it, change your mind.",
  },
  {
    title: "Go live, and we look after it",
    body: "Pick a plan when you’re happy. We launch it, host it and make your updates every month.",
  },
];

const previewUrl = getWhatsAppUrl(DEFAULT_PREVIEW_MESSAGE);

const headline = "When someone nearby looks you up, give them a reason to book.";

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pb-32 lg:pt-24">
        <div className="max-w-xl">
          <WordReveal as="h1" text={headline} delay={0.1} stagger={0.07} className="text-[clamp(2.7rem,5.2vw,4.6rem)] leading-[1.03] text-ink" />
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="mt-7 max-w-lg text-lg leading-8 text-ink-soft"
          >
            NexaFlow designs, launches and looks after websites for restaurants, salons, studios and shops. See a free preview of yours in 48 hours, then decide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-3.5 text-[15px] font-medium text-brand-ink transition-[opacity,transform] duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              <MessageCircle size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:-rotate-12" /> Get my free preview
            </a>
            <a href="#work" className="inline-flex items-center justify-center px-2 py-3 text-[15px] font-medium text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-brand">
              See recent work
            </a>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.15, ease }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
          >
            {["$0 down to launch", "You own your website", "Cancel anytime"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check size={15} className="text-brand dark:text-brass" aria-hidden="true" /> {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* The work itself: live client sites, stacked like storefronts on a street */}
        <HeroShowcase />
      </section>

      {/* What the site does for the business */}
      <section className="border-y border-line bg-paper-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <WordReveal onScroll text="Built around how people actually choose a local business." className="max-w-2xl text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] text-ink" />
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {benefits.map((item, index) => (
              <motion.div key={item.title} className="relative pt-6" initial="hidden" whileInView="shown" viewport={{ once: true, margin: "-80px" }}>
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[2px] w-full origin-left bg-ink"
                  variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1, transition: { duration: 1.1, delay: index * 0.12, ease } } }}
                />
                <motion.div variants={{ hidden: { opacity: 0, y: 14 }, shown: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 + index * 0.12, ease } } }}>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-ink-soft">{item.body}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section id="work" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <WordReveal onScroll text="Recent work" className="text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] text-ink" />
          <Link href="/themes" className="text-[15px] font-medium text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-brand">
            Browse all eight sites
          </Link>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {recentWork.map((site, index) => (
            <motion.a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 48 }, shown: { opacity: 1, y: 0, transition: { duration: 0.9, delay: index * 0.1, ease } } }}
            >
              <motion.div
                className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-paper-deep"
                variants={{
                  hidden: { clipPath: "inset(0% 0% 100% 0%)" },
                  shown: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.1, delay: 0.1 + index * 0.12, ease } },
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    hidden: { scale: 1.25 },
                    shown: { scale: 1, transition: { duration: 1.4, delay: 0.1 + index * 0.12, ease } },
                  }}
                >
                  <Image src={site.image} alt={`${site.name} website`} fill sizes="(max-width: 768px) 90vw, 400px" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                </motion.div>
              </motion.div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{site.name}</h3>
                  <p className="mt-1 text-sm text-muted">{site.kind}</p>
                </div>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" aria-label="Opens live site" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Process: a real sequence, so it is numbered */}
      <section id="how-it-works" className="scroll-mt-24 mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-12 border-t border-line pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <WordReveal onScroll text="From first message to live website." className="text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] text-ink" />
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-ink-soft">No long discovery calls and no deposit. You see your site before you pay for anything.</p>
          </div>
          <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease }}
              >
                <motion.span
                  className="inline-block font-display text-5xl leading-none text-brand dark:text-brass"
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 + index * 0.15 }}
                >
                  {index + 1}
                </motion.span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-ink-soft">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <motion.div
          className="rounded-2xl bg-brand px-7 py-14 text-brand-ink sm:px-14 sm:py-20 dark:bg-[#1f4d3b] dark:text-ink"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
        >
          <WordReveal onScroll text="See your new website before you pay anything." className="max-w-2xl text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.05]" />
          <p className="mt-5 max-w-xl text-[17px] leading-8 opacity-85">
            Send us your business name on WhatsApp and we’ll send back a preview within 48 hours. Plans start at $49 a month, hosting and updates included.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-ink px-6 py-3.5 text-[15px] font-medium text-brand transition-opacity hover:opacity-90 dark:bg-brand dark:text-brand-ink"
            >
              <MessageCircle size={18} aria-hidden="true" /> Get my free preview
            </a>
            <Link href="/pricing" className="inline-flex items-center justify-center px-2 py-3 text-[15px] font-medium underline decoration-2 underline-offset-[6px] opacity-90 hover:opacity-100">
              Compare plans
            </Link>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
