"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink, Gauge, LayoutTemplate, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";

// This page is interactive; metadata is exported through the route layout's global metadata.
type Category =
  | "All"
  | "Hospitality & Dining"
  | "Salons & Services"
  | "Wellness & Clinics"
  | "Finance & B2B"
  | "Creative & Agency";

type Demo = {
  name: string;
  title?: string;
  descriptor: string;
  description?: string;
  category: Exclude<Category, "All">;
  url: string;
  liveLink?: string;
  tags: string[];
  features?: string[];
  key: string;
  theme: string;
  image?: string;
  src?: string;
};

const categories: Category[] = [
  "All",
  "Hospitality & Dining",
  "Salons & Services",
  "Wellness & Clinics",
  "Finance & B2B",
  "Creative & Agency",
];

const demos: Demo[] = [
  {
    name: "Le Rocher",
    title: "Le Rocher",
    descriptor: "Cocktail bar & fine dining",
    description: "Cocktail bar & fine dining",
    category: "Hospitality & Dining",
    url: "https://le-rocher.vercel.app",
    liveLink: "https://le-rocher.vercel.app",
    tags: ["Menu design", "Reservations", "Location-ready"],
    features: ["Menu design", "Reservations", "Location-ready"],
    key: "rocher",
    theme: "Bar & dining",
    image: "/le-rocher.png.jpg",
    src: "/le-rocher.png.jpg",
  },
  {
    name: "Bloom & Bark",
    title: "Bloom & Bark",
    descriptor: "Pet grooming & salon booking",
    description: "Pet grooming & salon booking",
    category: "Salons & Services",
    url: "https://bloom-bark.vercel.app",
    liveLink: "https://bloom-bark.vercel.app",
    tags: ["Service menu", "Online booking", "WhatsApp alert"],
    features: ["Service menu", "Online booking", "WhatsApp alert"],
    key: "bloom",
    theme: "Pet care",
    image: "/bloom-bark.png.jpg",
    src: "/bloom-bark.png.jpg",
  },
  {
    name: "Serene",
    title: "Serene",
    descriptor: "Wellness & mindfulness studio",
    description: "Wellness & mindfulness studio",
    category: "Wellness & Clinics",
    url: "https://serene.vercel.app",
    liveLink: "https://serene.vercel.app",
    tags: ["Class schedule", "Member journey", "Wellness portal"],
    features: ["Class schedule", "Member journey", "Wellness portal"],
    key: "serene",
    theme: "Wellness",
    image: "/serene.jpg",
    src: "/serene.jpg",
  },
  {
    name: "Ledgerly",
    title: "Ledgerly",
    descriptor: "Modern advisory & fintech portal",
    description: "Modern advisory & fintech portal",
    category: "Finance & B2B",
    url: "https://ledgerly.vercel.app",
    liveLink: "https://ledgerly.vercel.app",
    tags: ["Trust-led", "Lead capture", "B2B UI"],
    features: ["Trust-led", "Lead capture", "B2B UI"],
    key: "ledgerly",
    theme: "Financial services",
    image: "/ledgerly.png.jpg",
    src: "/ledgerly.png.jpg",
  },
  {
    name: "Aawaiz Studio",
    title: "Aawaiz Studio",
    descriptor: "Creative portfolio & digital design partner",
    description: "Creative portfolio & digital design partner",
    category: "Creative & Agency",
    url: "https://portfolio1-hazel-seven.vercel.app/",
    liveLink: "https://portfolio1-hazel-seven.vercel.app/",
    tags: ["Interactive layouts", "Premium animations", "Work showcase"],
    features: ["Interactive layouts", "Premium animations", "Work showcase"],
    key: "portfolio",
    theme: "Creative portfolio",
    image: "https://image.thum.io/get/width/1000/crop/700/https://portfolio1-hazel-seven.vercel.app/",
    src: "https://image.thum.io/get/width/1000/crop/700/https://portfolio1-hazel-seven.vercel.app/",
  },
  {
    name: "Chicago's Pizza Factory",
    title: "Chicago's Pizza Factory",
    descriptor: "Classic pizza parlor & quick online ordering",
    description: "Classic pizza parlor & quick online ordering",
    category: "Hospitality & Dining",
    url: "https://chicago-s.vercel.app/",
    liveLink: "https://chicago-s.vercel.app/",
    tags: ["Visual menu", "Instant booking", "Location & hours"],
    features: ["Visual menu", "Instant booking", "Location & hours"],
    key: "chicago",
    theme: "Pizza & dining",
    image: "https://image.thum.io/get/width/1000/crop/700/https://chicago-s.vercel.app/",
    src: "https://image.thum.io/get/width/1000/crop/700/https://chicago-s.vercel.app/",
  },
  {
    name: "Palau Premium",
    title: "Palau Premium",
    descriptor: "Luxury gin brand & exquisite lounge experience",
    description: "Luxury gin brand & exquisite lounge experience",
    category: "Hospitality & Dining",
    url: "https://luxury-gin-palau-landing-page.vercel.app/",
    liveLink: "https://luxury-gin-palau-landing-page.vercel.app/",
    tags: ["Premium Aesthetics", "Product Showcase", "Reservations"],
    features: ["Premium Aesthetics", "Product Showcase", "Reservations"],
    key: "gin-palau",
    theme: "Luxury dining & spirits",
    image: "/gin-palau.png.jpg",
    src: "/gin-palau.png.jpg",
  },
  {
    name: "Sira Bar",
    title: "Sira Bar",
    descriptor: "Sultry nightlife venue & cocktail lounge",
    description: "Sultry nightlife venue & cocktail lounge",
    category: "Hospitality & Dining",
    url: "https://premium-sira-bar-landing-page.vercel.app/",
    liveLink: "https://premium-sira-bar-landing-page.vercel.app/",
    tags: ["Event schedules", "Bar experience", "Private hire"],
    features: ["Event schedules", "Bar experience", "Private hire"],
    key: "sira-bar",
    theme: "Bar & lounge",
    image: "/sira-bar.png.jpg",
    src: "/sira-bar.png.jpg",
  },
  {
    name: "Corehaus",
    title: "Corehaus",
    descriptor: "Advanced fitness training & group gym workouts",
    description: "Advanced fitness training & group gym workouts",
    category: "Wellness & Clinics",
    url: "https://premium-corehaus-landing-page.vercel.app/",
    liveLink: "https://premium-corehaus-landing-page.vercel.app/",
    tags: ["Class Booking", "Membership options", "High Performance"],
    features: ["Class Booking", "Membership options", "High Performance"],
    key: "corehaus",
    theme: "Athletic performance",
    image: "/corehaus.png.jpg",
    src: "/corehaus.png.jpg",
  },
  {
    name: "Salon Code",
    title: "Salon Code",
    descriptor: "Sophisticated hair salon & beauty parlor",
    description: "Sophisticated hair salon & beauty parlor",
    category: "Salons & Services",
    url: "https://salon-code-xg6g.vercel.app/",
    liveLink: "https://salon-code-xg6g.vercel.app/",
    tags: ["Appointment booking", "Stylist showcase", "Full service menu"],
    features: ["Appointment booking", "Stylist showcase", "Full service menu"],
    key: "salon-code",
    theme: "Salon & styling",
    image: "https://image.thum.io/get/width/1000/crop/700/https://salon-code-xg6g.vercel.app/",
    src: "https://image.thum.io/get/width/1000/crop/700/https://salon-code-xg6g.vercel.app/",
  },
];

function ThemePreview({ demo }: { demo: Demo }) {
  const imageSrc = demo.image || demo.src;
  if (imageSrc) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/10 dark:bg-black/40">
        <Image
          src={imageSrc}
          alt={demo.name || demo.title || "Theme preview"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  }

  if (demo.key === "rocher") {
    return <div className="relative h-full min-h-[245px] overflow-hidden bg-[#241c19] p-5 text-white sm:p-6">
      <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full bg-amber-700/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[70%] w-[53%] rounded-tl-[90px] bg-gradient-to-br from-[#a36843] via-[#51372e] to-[#171312] opacity-80" />
      <div className="absolute bottom-6 right-6 h-28 w-20 rotate-[-9deg] rounded-[14px] border border-white/20 bg-gradient-to-b from-amber-200/50 to-rose-950/80 shadow-2xl" />
      <div className="relative flex items-center justify-between"><span className="text-[9px] font-bold tracking-[.24em] text-amber-100">LE ROCHER</span><span className="text-[8px] text-white/60">MENU &nbsp; VISIT</span></div>
      <div className="relative mt-11 max-w-[195px]"><p className="text-[8px] uppercase tracking-[.2em] text-amber-200/80">A table worth lingering at</p><h3 className="mt-2 font-serif text-[27px] leading-[1.02] tracking-[-.05em]">Dinner, with a little more <i>indulgence.</i></h3><p className="mt-2 text-[8px] text-white/60">Seasonal plates. Considered cocktails. Your evening starts here.</p><span className="mt-4 inline-flex items-center gap-2 border border-amber-100/40 px-3 py-2 text-[8px] font-semibold uppercase tracking-[.14em]">Reserve a table <ArrowUpRight size={9} /></span></div>
      <div className="absolute bottom-3 left-5 text-[7px] tracking-[.16em] text-white/40">48 RUE DE LA PAIX · PARIS</div>
    </div>;
  }
  if (demo.key === "bloom") {
    return <div className="relative h-full min-h-[245px] overflow-hidden bg-[#f8e9e3] p-5 text-[#273b32] sm:p-6">
      <div className="absolute -right-8 top-9 h-40 w-40 rounded-full bg-[#e6aa91]/65 blur-[1px]" />
      <div className="absolute bottom-0 right-0 h-[78%] w-[58%] rounded-tl-[120px] bg-gradient-to-br from-[#d1b7a2] via-[#efc7ad] to-[#fbddd0]" />
      <div className="absolute bottom-4 right-7 h-32 w-24 rounded-[48%_48%_42%_42%] bg-[#8e715a]/70 shadow-xl"><span className="absolute left-2 top-[-10px] h-12 w-7 -rotate-12 rounded-[60%_50%_55%_50%] bg-[#8e715a]" /><span className="absolute right-2 top-[-10px] h-12 w-7 rotate-12 rounded-[50%_60%_50%_55%] bg-[#8e715a]" /><span className="absolute left-1/2 top-14 h-2 w-2 -translate-x-1/2 rounded-full bg-[#42382f]" /></div>
      <div className="relative flex items-center justify-between"><span className="text-[9px] font-black tracking-[-.04em]">bloom <i className="font-serif font-normal">& bark</i></span><span className="text-[8px] font-semibold">SERVICES &nbsp; BOOK</span></div>
      <div className="relative mt-11 max-w-[195px]"><p className="text-[8px] font-bold uppercase tracking-[.17em] text-[#728273]">Good hair days, for every kind</p><h3 className="mt-2 font-serif text-[30px] leading-[.98] tracking-[-.06em]">A little <i>freshen up</i> goes a long way.</h3><p className="mt-2 text-[8px] text-[#67736b]">Kind hands. Clean coats. Very happy tails.</p><span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#314f40] px-3.5 py-2 text-[8px] font-semibold text-white">Book your pup <ArrowUpRight size={9} /></span></div>
      <div className="absolute bottom-3 left-5 text-[7px] font-bold tracking-[.15em] text-[#78877e]">LOVE, CARE & A LITTLE BOW</div>
    </div>;
  }
  if (demo.key === "serene") {
    return <div className="relative h-full min-h-[245px] overflow-hidden bg-[#e9eee6] p-5 text-[#293b35] sm:p-6">
      <div className="absolute -right-4 -top-12 h-48 w-48 rounded-full border border-[#7e9681]/20" /><div className="absolute right-9 top-5 h-44 w-44 rounded-full border border-[#7e9681]/20" />
      <div className="absolute bottom-[-35px] right-8 h-44 w-32 rounded-t-[70px] bg-gradient-to-b from-[#c3cdbd] to-[#7f9587] opacity-80" />
      <div className="absolute right-[88px] top-[89px] h-24 w-24 rounded-full bg-[#d8bb8e]/70 blur-[1px]" />
      <div className="relative flex items-center justify-between"><span className="text-[9px] font-semibold tracking-[.24em]">SERENE</span><span className="text-[8px] text-[#73837a]">STUDIO &nbsp; CLASSES</span></div>
      <div className="relative mt-11 max-w-[200px]"><p className="text-[8px] uppercase tracking-[.2em] text-[#778a7c]">Space to come back to yourself</p><h3 className="mt-2 font-serif text-[30px] leading-[.98] tracking-[-.06em]">Make room for <i>stillness.</i></h3><p className="mt-2 text-[8px] text-[#697a71]">Mindful movement. A softer pace. Your first class is on us.</p><span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#365449] px-3.5 py-2 text-[8px] font-semibold text-white">Explore the studio <ArrowUpRight size={9} /></span></div>
      <div className="absolute bottom-3 left-5 text-[7px] tracking-[.18em] text-[#7d8f84]">BREATHE IN · LET GO</div>
    </div>;
  }
  return <div className="relative h-full min-h-[245px] overflow-hidden bg-[#eef1f6] p-5 text-[#15223c] sm:p-6 dark:bg-[#e9edf4]">
    <div className="relative flex items-center justify-between"><span className="text-[9px] font-bold tracking-[-.02em]">ledgerly<span className="text-violet-600">.</span></span><span className="text-[8px] text-[#60708a]">SOLUTIONS &nbsp; INSIGHTS</span></div>
    <div className="relative mt-8 max-w-[210px]"><p className="text-[8px] font-semibold uppercase tracking-[.16em] text-violet-700">A clearer view of your next move</p><h3 className="mt-2 text-[27px] font-semibold leading-[1.02] tracking-[-.065em]">Make your money work <span className="text-violet-600">smarter.</span></h3><p className="mt-2 text-[8px] text-[#64728a]">Modern guidance for the goals you’re actually building toward.</p></div>
    <div className="absolute bottom-4 right-5 w-[38%] rounded-xl border border-white bg-white/85 p-3 shadow-lg shadow-slate-900/10"><div className="flex items-center justify-between text-[7px] text-[#69768b]"><span>Portfolio health</span><span className="text-violet-600 font-semibold">+8.4%</span></div><div className="mt-2 flex h-10 items-end gap-1">{[35, 46, 39, 61, 55, 74, 83, 71, 95].map((height, index) => <span key={index} style={{ height: `${height}%` }} className="flex-1 rounded-t-sm bg-violet-500/70" />)}</div></div>
    <div className="relative mt-4 inline-flex items-center gap-1.5 rounded-md bg-[#172847] px-3 py-2 text-[8px] font-semibold text-white">Start a conversation <ArrowUpRight size={9} /></div>
    <div className="absolute bottom-3 left-5 text-[7px] font-bold tracking-[.16em] text-[#6f7c92]">CLARITY IN EVERY DECISION</div>
  </div>;
}

export default function ThemesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const filtered = useMemo(() => activeCategory === "All" ? demos : demos.filter((demo) => demo.category === activeCategory), [activeCategory]);

  return (
    <div className="relative isolate min-h-[70vh] overflow-hidden">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-24">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl"><div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/75 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-violet-700 dark:border-violet-400/20 dark:bg-white/[0.04] dark:text-violet-300"><LayoutTemplate size={13} /> Made to fit your world</div><h1 className="mt-7 text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-.07em] text-slate-950 dark:text-white">Distinctive by design.<br /><span className="text-violet-600 dark:text-violet-400">Fast by default.</span></h1><p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">A few live directions for the businesses people love to find. Each one is responsive, booking-ready and built to make the next step obvious.</p></div>
            <div className="flex items-center gap-3 rounded-2xl border border-violet-200/60 bg-white/70 p-3.5 dark:border-violet-500/20 dark:bg-white/[0.035]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-300"><Gauge size={18} /></span><div><p className="text-[11px] font-semibold text-slate-950 dark:text-white">99/100 PageSpeed</p><p className="mt-0.5 text-[9px] text-slate-500 dark:text-slate-400">A fast, frictionless starting point</p></div><Sparkles size={14} className="ml-2 text-violet-500 dark:text-violet-300" /></div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-2 border-b border-violet-200/60 pb-5 dark:border-violet-500/20" role="tablist" aria-label="Filter website themes">
            {categories.map((category) => <button key={category} type="button" role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)} className={`relative rounded-full px-4 py-2.5 text-[11px] font-semibold transition-colors ${activeCategory === category ? "text-white dark:text-slate-950" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/[0.05]"}`}>
              {activeCategory === category && <motion.span layoutId="theme-filter" className="absolute inset-0 -z-0 rounded-full bg-[#09091B] dark:bg-white" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <span className="relative z-10">{category}</span>
            </button>)}
          </div>
        </Reveal>

        <motion.div layout className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((demo, index) => <motion.article key={demo.key} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 14 }} transition={{ duration: 0.32, delay: index * 0.035 }} className="group min-w-0 max-w-full overflow-hidden rounded-[27px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/[0.06] dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)] dark:hover:border-violet-400/40">
              <div className="relative overflow-hidden">
                <ThemePreview demo={demo} />
                <div className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-slate-950/75 px-2.5 py-1.5 text-[9px] font-bold text-white shadow-lg backdrop-blur-xl">
                  <Gauge size={11} className="text-violet-300" /> 99/100
                </div>
              </div>
              <div className="p-5 sm:p-6 min-w-0 overflow-hidden">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start min-w-0">
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-[.16em] text-violet-600 dark:text-violet-400 truncate">{demo.category}</p>
                    <h2 className="mt-1.5 text-xl font-semibold tracking-[-.045em] text-slate-950 dark:text-white truncate">{demo.name || demo.title}</h2>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{demo.descriptor || demo.description}</p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-violet-200/60 px-2.5 py-1.5 text-[9px] font-semibold text-slate-500 dark:border-violet-500/20 dark:text-slate-400">{demo.theme}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">{(demo.tags || demo.features || []).map((tag) => <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-violet-50/70 px-2.5 py-1.5 text-[9px] font-medium text-slate-700 dark:bg-white/[0.05] dark:text-slate-300"><Check size={10} className="text-violet-600 dark:text-violet-400" />{tag}</span>)}</div>
                <a
                  href={demo.url || demo.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-between gap-3 min-w-0 max-w-full overflow-hidden rounded-xl border border-violet-200/60 px-4 py-3 text-[11px] font-semibold text-slate-800 transition-all hover:border-violet-500/30 hover:bg-violet-50/60 hover:text-violet-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-violet-400/30 dark:hover:bg-violet-400/[0.05] dark:hover:text-violet-300"
                >
                  <span className="inline-flex shrink-0 items-center gap-2">
                    Launch live demo <ExternalLink size={13} className="shrink-0" />
                  </span>
                  <span className="min-w-0 max-w-[55%] truncate overflow-hidden text-ellipsis font-mono text-[9px] font-medium text-slate-400 text-right">
                    {new URL(demo.url || demo.liveLink || "").hostname}
                  </span>
                </a>
              </div>
            </motion.article>)}
          </AnimatePresence>
        </motion.div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl px-5 py-4 text-center sm:flex-row sm:text-left dark:bg-[#0B091B]/85 dark:border-violet-500/20 dark:shadow-[0_8px_30px_rgb(109,40,217,0.12)]"><p className="text-xs text-slate-600 dark:text-slate-400">Your business isn’t a template. These are just the starting points.</p><Link href="/contact" className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700 dark:text-violet-300">Get a custom 48-hour preview <ArrowUpRight size={14} /></Link></div>
      </section>
    </div>
  );
}
