import Image from "next/image";
import Link from "next/link";
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
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getWhatsAppUrl, DEFAULT_PREVIEW_MESSAGE } from "@/lib/constants";

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
      {/* Hero ambient — removed in dark mode; keep light-mode dome glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[120px] -translate-x-1/2 w-[80%] h-[320px] rounded-full blur-[120px] bg-violet-500/15 dark:hidden -z-10"
      />
      {/* Side accent blob — light mode only */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-24 -z-10 h-[460px] w-[460px] rounded-full bg-violet-500/[0.06] blur-[120px] dark:hidden" />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.03fr_.97fr] lg:gap-8 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <Reveal>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-violet-200 bg-violet-50/90 p-1 pr-3.5 backdrop-blur-md shadow-sm dark:border-zinc-700/60 dark:bg-zinc-800/60">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-2.5 py-0.5 text-xs font-semibold text-white dark:from-blue-500 dark:to-blue-400">
                <Sparkles size={11} /> Update
              </span>
              <span className="text-xs font-semibold tracking-wide text-violet-950 dark:text-zinc-300">Website-as-a-Service for local business</span>
            </div>
            <h1 className="mt-7 max-w-[760px] text-[clamp(2.8rem,6.2vw,5.45rem)] font-semibold leading-[.99] tracking-[-0.073em] text-[#09091B] dark:text-zinc-50">
              Turn Google Maps &amp; local searches into <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-amber-300">booked revenue</span> — automatically.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#4a4a6a] sm:text-lg sm:leading-8 dark:text-zinc-400">
              Your next customer is already looking. Give them a fast, beautiful way to choose you — and make booking feel effortless.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppUrl(DEFAULT_PREVIEW_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-[1.02]"
              >
                Get your free 48-hour preview <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-200/80 bg-white/70 px-6 py-4 text-base font-semibold text-[#09091B] transition-all hover:border-violet-400/60 hover:bg-white dark:border-zinc-700/70 dark:bg-zinc-800/50 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800">
                See how it works <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#4a4a6a] dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-violet-600 dark:text-orange-400" /> $0 down to launch</span>
              <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-violet-600 dark:text-orange-400" /> You own your website</span>
              <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-violet-600 dark:text-orange-400" /> Cancel anytime</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.13} y={28}>
          <div className="relative mx-auto w-full max-w-[570px]">
            {/* No dark-mode glow blob — removed purple bloom */}
            <div aria-hidden="true" className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-violet-500/[0.15] via-indigo-500/[0.08] to-purple-500/[0.15] blur-2xl dark:hidden" />
            {/* Hero mockup card */}
            <div className="relative overflow-hidden rounded-[30px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl p-4 sm:p-5 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-violet-200/60 px-1 pb-4 dark:border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white dark:from-blue-500 dark:to-blue-600">
                    <MapPin size={15} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-zinc-50">The local customer journey</p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">A better first impression, end to end</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300">
                  <span className="status-pulse h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-orange-400" /> Live system
                </span>
              </div>

              <div className="relative mt-4 overflow-hidden rounded-[22px] border border-violet-200/60 bg-violet-50/40 p-4 sm:p-5 dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="relative flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-200/60 bg-white text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"><Globe2 size={16} /></span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-500">Search → your site</p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-zinc-100">Built to turn a visit into action</p>
                    </div>
                  </div>
                  <span className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-2.5 py-1.5 font-mono text-xs font-bold text-violet-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-orange-400">0.7s</span>
                </div>
                <div className="mt-4 rounded-2xl border border-violet-200/60 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400"><MapPin size={15} /></span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">Juniper &amp; Oak</p>
                        <p className="mt-0.5 text-xs text-slate-500 dark:text-zinc-500">Neighborhood kitchen · Open today</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-amber-500">★★★★★</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-slate-50 px-2 py-2.5 text-center dark:bg-zinc-800">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-500">Today</p>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200">12:30 pm</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 px-2 py-2.5 text-center dark:bg-zinc-800">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-500">Next slot</p>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200">1:15 pm</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 px-2 py-2.5 text-center dark:bg-zinc-800">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-500">Booking</p>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-violet-600 dark:text-orange-400">Instant</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-zinc-800 dark:to-zinc-700 px-4 py-2.5 text-white dark:border dark:border-zinc-600 shadow-md shadow-violet-600/20 dark:shadow-none">
                    <span className="text-xs sm:text-sm font-semibold">Reserve your table</span>
                    <ChevronRight size={15} />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const tone = step.color === "violet"
                    ? "text-violet-700 bg-violet-500/10 dark:text-orange-400 dark:bg-orange-400/10"
                    : "text-indigo-700 bg-indigo-500/10 dark:text-blue-400 dark:bg-blue-400/10";
                  return <div key={step.label} className="relative rounded-xl border border-violet-200/60 bg-white/80 p-3 sm:p-3.5 dark:border-zinc-800 dark:bg-zinc-900">
                    {index < steps.length - 1 && <span aria-hidden="true" className="absolute -right-2.5 top-5 z-10 hidden h-px w-2.5 bg-violet-200 sm:block dark:bg-zinc-700" />}
                    <span className={`grid h-7 w-7 place-items-center rounded-lg ${tone}`}><Icon size={14} /></span>
                    <p className="mt-2.5 font-mono text-base font-semibold tracking-tight text-slate-950 dark:text-zinc-50">{step.value}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-800 dark:text-zinc-200">{step.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-zinc-500">{step.note}</p>
                  </div>;
                })}
              </div>
              <div className="mt-4 flex items-center justify-between px-1 text-xs font-medium text-slate-500 dark:text-zinc-500">
                <span className="inline-flex items-center gap-1.5"><BadgeCheck size={14} className="text-violet-600 dark:text-orange-400" /> Built to convert, managed for you</span>
                <span>Secure · Always on</span>
              </div>
            </div>
            {/* Floating notification chip */}
            <div className="soft-float absolute -left-3 top-[31%] hidden rounded-2xl border border-violet-200/70 bg-white/95 px-3.5 py-3 shadow-xl shadow-violet-900/10 backdrop-blur-xl sm:block dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-orange-400/10 dark:text-orange-400"><MessageCircle size={15} /></span>
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-zinc-100">New booking</p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-zinc-500">WhatsApp alert sent</p>
                </div>
                <span className="ml-2 grid h-5 w-5 place-items-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-blue-500 dark:to-blue-600 text-white"><Check size={12} /></span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:pb-20">
        <Reveal>
          <div className="grid grid-cols-2 overflow-hidden rounded-[24px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl sm:grid-cols-4 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return <div key={metric.label} className={`flex items-center gap-3 px-4 py-5 sm:px-6 sm:py-6 ${index % 2 === 0 ? "border-r border-violet-200/60 dark:border-zinc-800" : ""} ${index < 2 ? "border-b border-violet-200/60 sm:border-b-0 dark:border-zinc-800" : ""} ${index === 1 ? "sm:border-r sm:border-violet-200/60 sm:dark:border-zinc-800" : ""} ${index === 2 ? "sm:border-r sm:border-violet-200/60 sm:dark:border-zinc-800" : ""}`}>
                <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 sm:grid dark:bg-zinc-800 dark:text-orange-400"><Icon size={17} /></span>
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.06em] text-slate-950 dark:text-zinc-50">{metric.value}</p>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-500 dark:text-zinc-500">{metric.label}</p>
                </div>
              </div>;
            })}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-orange-400">A sharper way to show up</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.055em] text-slate-950 sm:text-4xl dark:text-zinc-50">The small details that make the next click a yes.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-slate-600 dark:text-zinc-400">Designed around how real people find local businesses — and how quickly they decide to keep looking.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:gap-10 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isViolet = pillar.color === "violet";
            return (
              <Reveal key={pillar.eyebrow} delay={index * 0.07} className="h-full">
                <SpotlightCard className="flex h-full flex-col p-8 lg:p-10 rounded-3xl">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${isViolet ? "bg-violet-500/10 text-violet-700 dark:bg-orange-400/10 dark:text-orange-400" : "bg-indigo-500/10 text-indigo-700 dark:bg-blue-400/10 dark:text-blue-400"}`}>
                        <Icon size={20} />
                      </span>
                      <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">0{index + 1}</span>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                      <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-zinc-500 uppercase">{pillar.eyebrow}</p>
                      <h3 className="text-xl font-semibold leading-snug tracking-[-0.04em] text-slate-950 dark:text-zinc-50">{pillar.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{pillar.body}</p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-violet-200/60 dark:border-zinc-800">
                      <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-zinc-400">
                        <span className={`h-1.5 w-1.5 rounded-full ${isViolet ? "bg-violet-500 dark:bg-orange-400" : "bg-indigo-500 dark:bg-blue-400"}`} />
                        {pillar.detail}
                        <ArrowDownRight size={14} className="ml-1 text-slate-400 dark:text-zinc-600" />
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured Live Builds */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-orange-400">Live demos</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.055em] text-slate-950 sm:text-4xl dark:text-zinc-50">See what's possible — live.</h2>
            </div>
            <Link href="/themes" className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700 hover:text-violet-500 dark:text-orange-400 dark:hover:text-orange-300">
              Browse all themes <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
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
            <Reveal key={demo.key} delay={index * 0.07} className="h-full">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-600/15 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:hover:border-zinc-700 dark:hover:shadow-black/60">
                {/* Glowing Hover Effects — subtle border shine in dark mode, no neon bloom */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-violet-500/0 blur-[90px] transition-all duration-500 group-hover:bg-violet-500/20 dark:hidden group-hover:scale-125"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/0 to-transparent transition-all duration-500 group-hover:via-violet-400/40 dark:group-hover:via-zinc-600"
                />

                {/* Abstract UI Mockup Top Header */}
                <div className="relative overflow-hidden border-b border-violet-200/60 dark:border-zinc-800 bg-gradient-to-b from-violet-50/50 to-transparent dark:from-zinc-800/40 dark:to-transparent p-6 pb-5">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(124,58,237,0.08)_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-orange-400">{demo.category}</span>
                      <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-50 transition-colors group-hover:text-violet-600 dark:group-hover:text-orange-400">{demo.name}</h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-zinc-400">{demo.descriptor}</p>
                    </div>
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-200/60 dark:border-zinc-700 bg-violet-50/60 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-zinc-50 hover:text-violet-700 hover:scale-105"
                      aria-label={`Open ${demo.name} in new tab`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Screenshot Preview Container */}
                  <div className="relative mt-5 w-full aspect-[16/10] overflow-hidden rounded-xl border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 group">
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
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white/10 dark:bg-zinc-900/80 backdrop-blur-md border border-white/20 dark:border-zinc-700 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-white/20 dark:hover:bg-zinc-800 z-10"
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
                          className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/60 dark:border-zinc-800 bg-violet-50/60 dark:bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-zinc-300 backdrop-blur-sm"
                        >
                          <Check size={12} className="text-violet-600 dark:text-orange-400" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-between border-t border-violet-200/60 dark:border-zinc-800 pt-4 text-xs font-semibold text-gray-600 dark:text-zinc-400 transition-colors hover:text-gray-900 dark:hover:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-orange-400"
                    >
                      <span>Launch live demo</span>
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
        <Reveal delay={0.18}>
          <div className="mt-5 flex items-center justify-center">
            <Link href="/themes" className="inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-white/80 px-5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-violet-400/50 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
              View all live builds <ArrowRight size={13} />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 rounded-[30px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl p-7 sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-600 dark:text-orange-400">Simple on purpose</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.055em] text-slate-950 dark:text-zinc-50">From hello to live in 48 hours.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-400">No discovery marathons. No mystery invoice. Just a clear path from what makes your business special to your next booked customer.</p>
            <Link href="/why-us" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-violet-700 hover:text-violet-500 dark:text-orange-400 dark:hover:text-orange-300">See the NexaFlow difference <ArrowRight size={14} /></Link>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-3">
            {[{ n: "01", title: "Tell us your story", text: "Share your business and where customers find you.", icon: MousePointer2 }, { n: "02", title: "Review your preview", text: "A custom first look lands in your inbox within 48 hours.", icon: Sparkles }, { n: "03", title: "Go live, stress-free", text: "We launch, manage and keep improving your site.", icon: Globe2 }].map((item, index) => {
              const Icon = item.icon;
              return <Reveal key={item.n} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-violet-200/60 bg-white/80 p-5 dark:border-zinc-800 dark:bg-zinc-950/70 shadow-sm">
                  <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-slate-400 dark:text-zinc-600">{item.n}</span><Icon size={16} className="text-violet-600 dark:text-orange-400" /></div>
                  <h3 className="mt-8 text-sm font-semibold text-slate-950 dark:text-zinc-50">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] bg-[#09091B] px-7 py-10 text-white sm:px-11 sm:py-12 border border-violet-500/20 shadow-2xl shadow-violet-950/30 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-[0_16px_50px_rgba(0,0,0,0.7)] dark:shadow-black/70">
            <div aria-hidden="true" className="absolute -right-20 -top-40 h-[360px] w-[360px] rounded-full bg-violet-600/25 blur-[90px] dark:hidden" />
            <div aria-hidden="true" className="absolute -left-20 bottom-0 h-[280px] w-[280px] rounded-full bg-indigo-600/20 blur-[80px] dark:hidden" />
            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-300 dark:text-orange-400">Your next customer is searching</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.05em] sm:text-4xl dark:text-zinc-50">Let's give them a reason to choose you.</h2><p className="mt-3 text-sm leading-6 text-white/60 dark:text-zinc-400">Get a custom website preview in 48 hours. No card, no commitment.</p></div>
              <a
                href={getWhatsAppUrl(DEFAULT_PREVIEW_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#09091B] shadow-lg shadow-white/10 transition-all hover:-translate-y-0.5 hover:bg-violet-50 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Start my free preview <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
