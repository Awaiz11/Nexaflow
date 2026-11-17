"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type WordRevealProps = {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  delay?: number;
  stagger?: number;
  /** Animate when scrolled into view instead of on page load. */
  onScroll?: boolean;
};

/** Each word rises out of its own mask, one after another. */
export function WordReveal({ text, as = "h2", className, delay = 0, stagger = 0.06, onScroll = false }: WordRevealProps) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const words = text.split(" ");
  const trigger = onScroll
    ? { initial: "hidden", whileInView: "shown", viewport: { once: true, margin: "-80px" } }
    : { initial: "hidden", animate: "shown" };

  return (
    <Tag aria-label={text} className={className} {...trigger}>
      {words.map((word, index) => (
        <span key={index}>
          <span aria-hidden="true" className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "115%", rotate: 4 },
                shown: { y: 0, rotate: 0, transition: { duration: 1, delay: delay + index * stagger, ease } },
              }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
