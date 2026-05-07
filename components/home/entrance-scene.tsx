"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ActionButton } from "@/components/ui/action-button";
import { GlitchText } from "@/components/ui/glitch-text";
import { TransmissionBand } from "@/components/shared/transmission-band";

const transmissionLines = [
  "vcc streetwear archive",
  "clothes for the late crowd",
  "night culture / raw uniform / city pulse",
  "drop signal live",
];

export function EntranceScene() {
  const reducedMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: reducedMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-obsidian text-ivory">
      <section className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden px-5 py-5 sm:px-8 sm:py-8 lg:px-10">
      <div className="screen-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-25" />
      <div className="film-noise pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,255,178,0.2),transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-5rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_72%)] blur-3xl" />

      <div className="relative z-10 flex flex-1 items-center justify-center py-10 sm:py-12">
        <div className="panel-frame relative flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-10 shadow-signal backdrop-blur-xl sm:px-8 sm:py-14 lg:min-h-[37rem] lg:px-12">
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1.1, delay: 0.15 }}
            className="absolute inset-y-10 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-signal/60 to-transparent lg:block"
          />

          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 28, scale: reducedMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1.05, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
          >
            
            <h1 className="mt-4 font-display text-[clamp(5rem,24vw,13rem)] uppercase leading-none tracking-[0.22em] text-white">
              <GlitchText text="V.C.C" />
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-white/58 sm:text-base">
              Одежда для своих, для темных залов, для дворов, для тех, кто
              держится рядом и выглядит собранно даже под шум, свет и поздний город.
            </p>
            <motion.div
              whileHover={reducedMotion ? undefined : { y: -3 }}
              whileTap={reducedMotion ? undefined : { scale: 0.985 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="mt-8"
            >
              <ActionButton href="/catalog" className="group">
                <span className="inline-flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-signal shadow-signal" />
                  ВОЙТИ
                </span>
                <span className="text-white/34 transition-colors duration-300 group-hover:text-signal">
                  /01
                </span>
              </ActionButton>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        {...fadeUp}
        transition={{ duration: reducedMotion ? 0 : 0.85, delay: 0.28 }}
        className="relative z-10 mt-5"
      >
        <TransmissionBand items={transmissionLines} />
      </motion.div>
      </section>
    </main>
  );
}
