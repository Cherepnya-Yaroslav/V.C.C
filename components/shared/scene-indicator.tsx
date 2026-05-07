"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type SceneIndicatorProps = {
  label: string;
  index: string;
};

export function SceneIndicator({ label, index }: SceneIndicatorProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
  const fade = useTransform(scrollYProgress, [0, 0.12, 1], [0.3, 0.88, 0.88]);

  return (
    <motion.aside
      aria-hidden="true"
      className="pointer-events-none fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 xl:flex xl:flex-col xl:items-center xl:gap-4"
      initial={reducedMotion ? undefined : { opacity: 0, x: 12 }}
      animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="vertical-caption font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/28">
        {label}
      </span>
      <div className="relative h-40 w-px overflow-hidden bg-white/10">
        <motion.div
          className="absolute inset-x-0 bottom-0 origin-bottom bg-gradient-to-t from-signal via-signal/70 to-transparent"
          style={{ scaleY, opacity: fade }}
        />
      </div>
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-signal/70">
        {index}
      </span>
    </motion.aside>
  );
}
