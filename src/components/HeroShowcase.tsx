"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

// The front frame rotates through a few live client sites.
const featured = [
  { name: "Bloom & Bark", blurb: "a florist in Maplewood", host: "bloom-bark.vercel.app", url: "https://bloom-bark.vercel.app", image: "/bloom-bark.png.jpg" },
  { name: "Luxe Haven", blurb: "a salon & spa in Beverly Hills", host: "salon-code-xg6g.vercel.app", url: "https://salon-code-xg6g.vercel.app/", image: "/luxe-haven-shot.jpg" },
  { name: "Chicago’s Pizza Factory", blurb: "a pizzeria with online ordering", host: "chicago-s.vercel.app", url: "https://chicago-s.vercel.app/", image: "/chicago-shot.jpg" },
];

const back = { host: "le-rocher.vercel.app", image: "/le-rocher.png.jpg", name: "Le Rocher" };
const side = { host: "premium-corehaus-landing-page.vercel.app", image: "/corehaus.png.jpg", name: "Corehaus" };

const CYCLE_MS = 4200;

/** Slow idle bob so the stack never looks frozen. */
function Float({ children, duration, delay }: { children: React.ReactNode; duration: number; delay: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

function Chrome({ host, children }: { host: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[var(--surface)] shadow-[0_24px_60px_-20px_rgba(28,33,29,0.35)] dark:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-3 border-b border-line bg-paper-deep px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </span>
        <span className="relative h-4 flex-1 overflow-hidden text-[11px] leading-4 text-muted">{host}</span>
      </div>
      <div className="relative aspect-[16/10]">{children}</div>
    </div>
  );
}

export function HeroShowcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % featured.length), CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [reduce, paused]);

  // Gentle depth: frames drift a few pixels against the pointer (mouse only).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 16 });
  const sy = useSpring(py, { stiffness: 90, damping: 16 });
  const backX = useTransform(sx, (v) => v * -32);
  const backY = useTransform(sy, (v) => v * -22);
  const sideX = useTransform(sx, (v) => v * -20);
  const sideY = useTransform(sy, (v) => v * -14);
  const frontX = useTransform(sx, (v) => v * 18);
  const frontY = useTransform(sy, (v) => v * 12);
  const tiltY = useTransform(sx, (v) => v * 10);
  const tiltX = useTransform(sy, (v) => v * -8);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };
  const resetPointer = () => {
    px.set(0);
    py.set(0);
  };

  const current = featured[active];

  return (
    <div ref={ref} onPointerMove={onPointerMove} onPointerLeave={resetPointer} className="relative mx-auto w-full max-w-[600px] [perspective:1400px] sm:pb-24">
      <motion.div style={{ x: backX, y: backY }} className="absolute right-0 top-0 hidden w-[62%] sm:block">
        <motion.div initial={{ opacity: 0, x: 160, y: -50, rotate: 14 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }} transition={{ duration: 1.5, delay: 0.55, ease }}>
          <Float duration={7} delay={2.1}>
          <Chrome host={back.host}>
            <Image src={back.image} alt={`${back.name} website`} fill sizes="380px" className="object-cover object-top" />
          </Chrome>
          </Float>
        </motion.div>
      </motion.div>

      <motion.div style={{ x: sideX, y: sideY }} className="absolute bottom-0 left-0 hidden w-[56%] sm:block">
        <motion.div initial={{ opacity: 0, x: -160, y: 70, rotate: -14 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }} transition={{ duration: 1.5, delay: 0.7, ease }}>
          <Float duration={8} delay={2.3}>
          <Chrome host={side.host}>
            <Image src={side.image} alt={`${side.name} website`} fill sizes="340px" className="object-cover object-top" />
          </Chrome>
          </Float>
        </motion.div>
      </motion.div>

      <motion.div style={{ x: frontX, y: frontY, rotateX: tiltX, rotateY: tiltY }} className="relative z-10 sm:ml-[9%] sm:mt-[18%] sm:w-[78%]">
        <motion.div
          initial={{ opacity: 0, y: 140, scale: 0.82, rotate: -4 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Chrome
            host={
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={current.host} className="absolute inset-0 truncate" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} transition={{ duration: 0.35, ease }}>
                  {current.host}
                </motion.span>
              </AnimatePresence>
            }
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={current.host}
                className="absolute inset-0 overflow-hidden"
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                exit={{ opacity: 1, transition: { duration: 1 } }}
                transition={{ duration: 1, ease }}
              >
                <motion.div className="absolute inset-0" initial={{ scale: 1.15, y: 30 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 1.3, ease }}>
                  <Image src={current.image} alt={`${current.name} website`} fill priority sizes="(max-width: 1024px) 90vw, 470px" className="object-cover object-top" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            {/* keep the other screenshots warm so the wipe never waits on a download */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-0" aria-hidden="true">
              {featured.map((site) => (
                <Image key={site.host} src={site.image} alt="" fill sizes="(max-width: 1024px) 90vw, 470px" priority className="object-cover" />
              ))}
            </div>
          </Chrome>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-4 flex items-start justify-between gap-4 sm:absolute sm:bottom-3 sm:right-0 sm:mt-0 sm:max-w-[40%] sm:flex-col sm:items-end sm:text-right"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.p key={current.name} className="text-sm leading-6 text-muted" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35, ease }} aria-live="polite">
            <a href={current.url} target="_blank" rel="noopener noreferrer" className="font-medium text-ink hover:text-brand">{current.name}</a>, {current.blurb}. Built by NexaFlow.
          </motion.p>
        </AnimatePresence>
        <div className="flex shrink-0 gap-1.5 pt-2 sm:pt-0" role="group" aria-label="Choose a site to preview">
          {featured.map((site, index) => (
            <button
              key={site.host}
              type="button"
              aria-label={`Show ${site.name}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className="group grid h-6 place-items-center"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-500 ${index === active ? "w-6 bg-ink" : "w-1.5 bg-line group-hover:bg-muted"}`} />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
