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
    </>
  );
}
