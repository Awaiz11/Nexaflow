"use client";

import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

type SpotlightStyle = CSSProperties & {
  "--spot-x"?: string;
  "--spot-y"?: string;
};

export function SpotlightCard({ children, className = "p-6" }: { children: ReactNode; className?: string }) {
  const [spot, setSpot] = useState({ x: "50%", y: "50%" });

  return (
    <article
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setSpot({
          x: `${event.clientX - bounds.left}px`,
          y: `${event.clientY - bounds.top}px`,
        });
      }}
      style={{ "--spot-x": spot.x, "--spot-y": spot.y } as SpotlightStyle}
      className={`spotlight-card group relative overflow-hidden rounded-[26px] bg-white/90 border border-violet-200/70 shadow-[0_8px_30px_rgb(124,58,237,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/[0.06] dark:bg-neutral-900/40 dark:backdrop-blur-md dark:border-white/10 dark:border-t-white/20 dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] dark:hover:border-white/20 dark:hover:shadow-black/80 ${className}`}
    >
      {children}
    </article>
  );
}
