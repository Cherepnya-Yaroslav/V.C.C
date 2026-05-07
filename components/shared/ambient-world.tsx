"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import { getRouteScene } from "@/lib/route-scene";

export function AmbientWorld() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const frameRef = useRef<number | null>(null);
  const state = useMemo(() => getRouteScene(pathname), [pathname]);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--cursor-x", "50%");
    root.style.setProperty("--cursor-y", "32%");

    if (reducedMotion) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${event.clientX}px`);
        root.style.setProperty("--cursor-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [reducedMotion]);

  return (
    <>
      <div aria-hidden="true" className="ambient-vignette pointer-events-none fixed inset-0 z-[1]" />
      <div aria-hidden="true" className="ambient-pointer pointer-events-none fixed inset-0 z-[1]" />

      <motion.aside
        initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed bottom-3 left-3 z-[2] hidden max-w-[16rem] rounded-[1.2rem] border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-md md:block"
      >
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-signal/78">
          World / {state.index}
        </p>
        <p className="mt-2 font-display text-[1.6rem] uppercase leading-[0.92] tracking-[0.12em] text-white">
          {state.label}
        </p>
        <p className="mt-2 text-xs leading-5 text-white/42">{state.note}</p>
      </motion.aside>
    </>
  );
}
