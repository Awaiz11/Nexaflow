"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  ExternalLink,
  Globe2,
  MapPin,
  MessageCircle,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getWhatsAppUrl, DEFAULT_PREVIEW_MESSAGE } from "@/lib/constants";

const easeCustom = [0.16, 1, 0.3, 1] as const;

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeCustom,
    },
  },
};

const steps = [
  { icon: Globe2, label: "Edge load", value: "0.7s", note: "Fast from the first tap", color: "indigo" },
  { icon: CalendarCheck, label: "Smart booking", value: "24/7", note: "Catch every inquiry", color: "violet" },
  { icon: MessageCircle, label: "WhatsApp alert", value: "<3s", note: "Your team stays in sync", color: "indigo" },
];

const pillars = [
  {
    icon: Zap,
    eyebrow: "01 / SPEED BY DESIGN",
    title: "Faster than the next search.",
    body: "A lightweight, edge-delivered storefront that feels instant — even on a spotty connection or an older phone.",
    detail: "0.7s average load",
    color: "indigo",
  },
  {
    icon: CalendarCheck,
    eyebrow: "02 / ALWAYS-ON CAPTURE",
    title: "Your best receptionist never clocks out.",
    body: "Clear services, real availability and a simple booking path turn late-night browsing into a confirmed visit.",
    detail: "Leads captured 24/7",
    color: "violet",
  },
  {
    icon: MessageCircle,
    eyebrow: "03 / WHATSAPP IN SYNC",
    title: "Every good lead reaches a human.",
    body: "New inquiries route straight to the channel your team already checks — without another dashboard to babysit.",
    detail: "Instant team alerts",
    color: "indigo",
  },
];

const metrics = [
  { value: "0.7s", label: "Typical page load", icon: Zap },
  { value: "48hr", label: "From brief to preview", icon: Clock3 },
  { value: "24/7", label: "Inquiry capture", icon: CalendarCheck },
  { value: "$0", label: "Upfront investment", icon: ShieldCheck },
];

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Ventrix Horizon Dome Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[120px] -translate-x-1/2 w-[80%] h-[320px] rounded-full blur-[120px] bg-violet-500/15 dark:bg-violet-600/[0.08] -z-10"
      />
      {/* Side accent blob */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-24 -z-10 h-[460px] w-[460px] rounded-full bg-violet-500/[0.06] blur-[120px] dark:hidden" />

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.03fr_.97fr] lg:gap-8 lg:pb-28 lg:pt-24">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow badge */}
          <motion.div variants={heroFadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200/80 bg-zinc-100 text-xs font-medium tracking-wide text-zinc-700 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>Website-as-a-Service for local businesses</span>
            </div>
          </motion.div>

          <motion.h1
            variants={heroFadeUp}
            className="mt-7 max-w-[760px] text-[clamp(2.8rem,6.2vw,5.45rem)] font-semibold leading-[.99] tracking-[-0.073em] text-[#09091B] dark:text-[#FFFFFF]"
          >
            Turn Google Maps &amp; local searches into <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-indigo-300">booked revenue</span> — automatically.
          </motion.h1>

          <motion.p
            variants={heroFadeUp}
            className="mt-6 max-w-xl text-base leading-7 text-[#4a4a6a] sm:text-lg sm:leading-8 dark:text-[#9494b8]"
          >
            Your next customer is already looking. Give them a fast, beautiful way to choose you — and make booking feel effortless.
          </motion.p>

          <motion.div variants={heroFadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={getWhatsAppUrl(DEFAULT_PREVIEW_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-colors hover:bg-gray-200"
            >
              Get your free 48-hour preview <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Link href="/pricing" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-violet-200/80 bg-white/70 px-6 py-4 text-base font-semibold text-[#09091B] transition-colors hover:border-violet-400/60 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:text-[#FFFFFF] dark:hover:border-white/20 dark:hover:bg-white/[0.07]">
                See how it works <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={heroFadeUp} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#4a4a6a] dark:text-[#9494b8]">
            <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-violet-600 dark:text-violet-400" /> $0 down to launch</span>
            <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-violet-600 dark:text-violet-400" /> You own your website</span>
            <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-violet-600 dark:text-violet-400" /> Cancel anytime</span>
          </motion.div>
        </motion.div>

        {/* Right side customer journey mockup card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeCustom }}
          className="relative mx-auto w-full max-w-[570px]"
        >
          <div aria-hidden="true" className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-violet-500/[0.15] via-indigo-500/[0.08] to-purple-500/[0.15] blur-2xl" />
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[30px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl p-4 sm:p-5 dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)] transition-colors"
          >
            <div className="flex items-center justify-between border-b border-violet-200/60 px-1 pb-4 dark:border-violet-500/20">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white"><MapPin size={15} /></span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">The local customer journey</p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-gray-300">A better first impression, end to end</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300">
                <span className="status-pulse h-1.5 w-1.5 rounded-full bg-violet-500" /> Live system
              </span>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-[22px] border border-violet-200/60 bg-violet-50/40 p-4 sm:p-5 dark:border-violet-500/15 dark:bg-[#070514]/70">
              <div className="relative flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-200/60 bg-white text-violet-600 dark:border-violet-500/20 dark:bg-white/[0.04] dark:text-violet-300"><Globe2 size={16} /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">Search → your site</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">Built to turn a visit into action</p>
                  </div>
                </div>
                <span className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-2.5 py-1.5 font-mono text-xs font-bold text-violet-700 dark:text-violet-300">0.7s</span>
              </div>
              <div className="mt-4 rounded-2xl border border-violet-200/60 bg-white p-4 shadow-sm dark:border-violet-500/20 dark:bg-[#0F0C24]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-300/10 dark:text-amber-300"><MapPin size={15} /></span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Juniper &amp; Oak</p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-gray-400">Neighborhood kitchen · Open today</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-amber-500">★★★★★</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-slate-50 px-2 py-2.5 text-center dark:bg-white/[0.04]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Today</p>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">12:30 pm</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 px-2 py-2.5 text-center dark:bg-white/[0.04]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Next slot</p>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">1:15 pm</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 px-2 py-2.5 text-center dark:bg-white/[0.04]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Booking</p>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400">Instant</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-white shadow-md shadow-violet-600/20">
                  <span className="text-xs sm:text-sm font-semibold">Reserve your table</span>
                  <ChevronRight size={15} />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const tone = step.color === "violet" ? "text-violet-700 bg-violet-500/10 dark:text-violet-300" : "text-indigo-700 bg-indigo-500/10 dark:text-indigo-300";
                return (
                  <motion.div
                    key={step.label}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="relative rounded-xl border border-violet-200/60 bg-white/80 p-3 sm:p-3.5 dark:border-violet-500/20 dark:bg-[#0F0C24]/80 transition-colors"
                  >
                    {index < steps.length - 1 && <span aria-hidden="true" className="absolute -right-2.5 top-5 z-10 hidden h-px w-2.5 bg-violet-200 sm:block dark:bg-violet-900/50" />}
                    <span className={`grid h-7 w-7 place-items-center rounded-lg ${tone}`}><Icon size={14} /></span>
                    <p className="mt-2.5 font-mono text-base font-semibold tracking-tight text-slate-950 dark:text-white">{step.value}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200">{step.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-gray-300">{step.note}</p>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between px-1 text-xs font-medium text-slate-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1.5"><BadgeCheck size={14} className="text-violet-600 dark:text-violet-400" /> Built to convert, managed for you</span>
              <span>Secure · Always on</span>
            </div>
          </motion.div>

          {/* Floating notification chip */}
          <div className="soft-float absolute -left-3 top-[31%] hidden rounded-2xl border border-violet-200/70 bg-white/95 px-3.5 py-3 shadow-xl shadow-violet-900/10 backdrop-blur-xl sm:block dark:border-violet-500/20 dark:bg-[#0F0C24]/95">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300"><MessageCircle size={15} /></span>
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">New booking</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-gray-300">WhatsApp alert sent</p>
              </div>
              <span className="ml-2 grid h-5 w-5 place-items-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white"><Check size={12} /></span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="grid grid-cols-2 overflow-hidden rounded-[24px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl sm:grid-cols-4 dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return <div key={metric.label} className={`flex items-center gap-3 px-4 py-5 sm:px-6 sm:py-6 ${index % 2 === 0 ? "border-r border-violet-200/60 dark:border-violet-500/20" : ""} ${index < 2 ? "border-b border-violet-200/60 sm:border-b-0 dark:border-violet-500/20" : ""} ${index === 1 ? "sm:border-r sm:border-violet-200/60 sm:dark:border-violet-500/20" : ""} ${index === 2 ? "sm:border-r sm:border-violet-200/60 sm:dark:border-violet-500/20" : ""}`}>
              <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 sm:grid dark:bg-white/[0.05] dark:text-violet-300"><Icon size={17} /></span>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.06em] text-slate-950 dark:text-white">{metric.value}</p>
                <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-500 dark:text-gray-400">{metric.label}</p>
              </div>
            </div>;
          })}
        </motion.div>
      </section>

      {/* Pillars / Features */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-300">A sharper way to show up</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.055em] text-slate-950 sm:text-4xl dark:text-white">The small details that make the next click a yes.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">Designed around how real people find local businesses — and how quickly they decide to keep looking.</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:gap-10 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isViolet = pillar.color === "violet";
            return (
              <motion.div
                key={pillar.eyebrow}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: easeCustom }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col p-8 lg:p-10 rounded-3xl">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${isViolet ? "bg-violet-500/10 text-violet-700 dark:text-violet-300" : "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300"}`}>
                        <Icon size={20} />
                      </span>
                      <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                      <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">{pillar.eyebrow}</p>
                      <h3 className="text-xl font-semibold leading-snug tracking-[-0.04em] text-slate-950 dark:text-white">{pillar.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{pillar.body}</p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-violet-200/60 dark:border-violet-500/20">
                      <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-gray-300">
                        <span className={`h-1.5 w-1.5 rounded-full ${isViolet ? "bg-violet-500 dark:bg-violet-400" : "bg-indigo-500 dark:bg-indigo-400"}`} />
                        {pillar.detail}
                        <ArrowDownRight size={14} className="ml-1 text-slate-400" />
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Live Builds */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-400">Live demos</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.055em] text-slate-950 sm:text-4xl dark:text-white">See what's possible — live.</h2>
          </div>
          <Link href="/themes" className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200">
            Browse all themes <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              key: "rocher",
              name: "Le Rocher",
              descriptor: "Cocktail bar & fine dining",
              category: "Hospitality & Dining",
              url: "https://le-rocher.vercel.app",
              image: "/le-rocher.png",
              tags: ["Menu design", "Reservations"],
            },
            {
              key: "bloom",
              name: "Bloom & Bark",
              descriptor: "Pet grooming & salon booking",
              category: "Salons & Services",
              url: "https://bloom-bark.vercel.app",
              image: "/bloom-bark.png",
              tags: ["Online booking", "WhatsApp"],
            },
            {
              key: "serene",
              name: "Serene",
              descriptor: "Wellness & mindfulness studio",
              category: "Wellness & Clinics",
              url: "https://serena-nine-sooty.vercel.app",
              image: "/serene.png",
              tags: ["Class schedule", "Wellness"],
            },
          ].map((demo, index) => (
            <motion.div
              key={demo.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: easeCustom }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl transition-all duration-500 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-600/15 dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)] dark:hover:border-violet-400/50 dark:hover:shadow-2xl dark:hover:shadow-violet-600/20">
                {/* Glowing Hover Effects */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-violet-500/0 blur-[90px] transition-all duration-500 group-hover:bg-violet-500/20 dark:group-hover:bg-violet-500/25 group-hover:scale-125"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/0 to-transparent transition-all duration-500 group-hover:via-violet-400/40"
                />

                {/* Abstract UI Mockup Top Header */}
                <div className="relative overflow-hidden border-b border-violet-200/60 dark:border-violet-500/20 bg-gradient-to-b from-violet-50/50 to-transparent dark:from-white/[0.03] dark:to-transparent p-6 pb-5">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(124,58,237,0.08)_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(168,85,247,0.15)_1px,transparent_1px)] [background-size:16px_16px]"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">{demo.category}</span>
                      <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-300">{demo.name}</h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{demo.descriptor}</p>
                    </div>
                    <motion.a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-200/60 dark:border-white/10 bg-violet-50/60 dark:bg-white/5 text-gray-600 dark:text-gray-300 backdrop-blur-md transition-colors hover:border-violet-500/40 hover:bg-violet-500/10 dark:hover:bg-violet-600 dark:hover:text-white hover:text-violet-700"
                      aria-label={`Open ${demo.name} in new tab`}
                    >
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>

                  {/* Screenshot Preview Container */}
                  <div className="relative mt-5 w-full aspect-[16/10] overflow-hidden rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-[#06060F] group">
                    <Image
                      src={demo.image}
                      alt={demo.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                    />

                    {/* Floating Action Button */}
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-white/20 z-10"
                    >
                      <ExternalLink size={14} />
                      <span>View Live</span>
                    </a>
                  </div>
                </div>

                {/* Card Body with Tags and Launch CTA */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/60 dark:border-white/10 bg-violet-50/60 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm"
                      >
                        <Check size={12} className="text-violet-600 dark:text-violet-400" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-between border-t border-violet-200/60 dark:border-violet-500/20 pt-4 text-xs font-semibold text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300"
                  >
                    <span>Launch live demo</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-5 flex items-center justify-center"
        >
          <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link href="/themes" className="inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-white/80 px-5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-violet-400/50 hover:bg-white dark:border-violet-500/20 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-violet-400/30 dark:hover:bg-white/[0.06]">
              View all live builds <ArrowRight size={13} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 48-Hour Process Section */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="grid gap-12 rounded-[30px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl p-7 sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-400">Simple on purpose</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.055em] text-slate-950 dark:text-white">From hello to live in 48 hours.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">No discovery marathons. No mystery invoice. Just a clear path from what makes your business special to your next booked customer.</p>
            <Link href="/why-us" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-violet-700 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200">See the NexaFlow difference <ArrowRight size={14} /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { n: "01", title: "Tell us your story", text: "Share your business and where customers find you.", icon: MousePointer2 },
              { n: "02", title: "Review your preview", text: "A custom first look lands in your inbox within 48 hours.", icon: Sparkles },
              { n: "03", title: "Go live, stress-free", text: "We launch, manage and keep improving your site.", icon: Globe2 }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: easeCustom }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-violet-200/60 bg-white/80 p-5 dark:border-violet-500/20 dark:bg-[#0F0C24]/80 shadow-sm transition-colors">
                    <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-slate-400">{item.n}</span><Icon size={16} className="text-violet-600 dark:text-violet-400" /></div>
                    <h3 className="mt-8 text-sm font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA Section */}
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="relative overflow-hidden rounded-[30px] bg-[#09091B] px-7 py-10 text-white sm:px-11 sm:py-12 border border-violet-500/20 shadow-2xl shadow-violet-950/30 dark:bg-[#070514] dark:border dark:border-violet-500/25"
        >
          <div aria-hidden="true" className="absolute -right-20 -top-40 h-[360px] w-[360px] rounded-full bg-violet-600/25 blur-[90px] dark:bg-violet-500/10" />
          <div aria-hidden="true" className="absolute -left-20 bottom-0 h-[280px] w-[280px] rounded-full bg-indigo-600/20 blur-[80px] dark:bg-indigo-500/10" />
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-300">Your next customer is searching</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">Let's give them a reason to choose you.</h2><p className="mt-3 text-sm leading-6 text-white/60">Get a custom website preview in 48 hours. No card, no commitment.</p></div>
            <motion.a
              href={getWhatsAppUrl(DEFAULT_PREVIEW_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#09091B] shadow-lg shadow-white/10 transition-all hover:bg-violet-50"
            >
              Start my free preview <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
