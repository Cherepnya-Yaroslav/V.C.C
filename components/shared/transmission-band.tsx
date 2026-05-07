"use client";

import { motion, useReducedMotion } from "framer-motion";

type TransmissionBandProps = {
  items: string[];
  className?: string;
};

export function TransmissionBand({ items, className = "" }: TransmissionBandProps) {
  const reducedMotion = useReducedMotion();
  const repeated = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 ${className}`.trim()}
    >
      <motion.div
        className="flex min-w-max items-center gap-8"
        animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={reducedMotion ? undefined : { duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/40"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
