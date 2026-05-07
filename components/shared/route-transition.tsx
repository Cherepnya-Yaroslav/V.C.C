"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import { getRouteScene } from "@/lib/route-scene";

export function RouteTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const scene = getRouteScene(pathname);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      className="relative"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[52vh] origin-top bg-[linear-gradient(180deg,rgba(3,3,3,0.96),rgba(3,3,3,0.74),transparent)]"
        variants={{
          initial: { scaleY: 1 },
          animate: { scaleY: 0, transition: { duration: 0.92, ease: [0.76, 0, 0.24, 1] } },
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-[52vh] origin-bottom bg-[linear-gradient(0deg,rgba(3,3,3,0.96),rgba(3,3,3,0.74),transparent)]"
        variants={{
          initial: { scaleY: 1 },
          animate: { scaleY: 0, transition: { duration: 0.92, ease: [0.76, 0, 0.24, 1] } },
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[41] flex items-center justify-center px-6"
        variants={{
          initial: { opacity: 1 },
          animate: { opacity: 0, transition: { duration: 0.44, delay: 0.28, ease: "easeOut" } },
        }}
      >
        <div className="text-center">
          <motion.p
            className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-signal/82"
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.04 } },
            }}
          >
            Scene / {scene.index}
          </motion.p>
          <motion.h2
            className="mt-4 font-display text-[clamp(3rem,11vw,7rem)] uppercase leading-[0.88] tracking-[0.18em] text-white"
            variants={{
              initial: { opacity: 0, y: 22, scale: 0.98 },
              animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.56, delay: 0.08, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {scene.label}
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-md text-sm uppercase tracking-[0.24em] text-white/36"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { duration: 0.34, delay: 0.18 } },
            }}
          >
            {scene.note}
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        variants={{
          initial: { opacity: 0, filter: "blur(10px)", y: 24 },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: { duration: 0.62, delay: 0.26, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
