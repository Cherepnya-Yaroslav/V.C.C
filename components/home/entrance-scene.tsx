"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ActionButton } from "@/components/ui/action-button";
import { GlitchText } from "@/components/ui/glitch-text";
import { TransmissionBand } from "@/components/shared/transmission-band";

const statusMarks = [
  "Editorial streetwear system",
  "Dark minimal transmission",
  "Underground campaign interface",
];

const transmissionLines = [
  "Broadcast 001",
  "Underground fashion signal",
  "No commerce choreography",
  "Premium raw feeling",
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

      <motion.header
        {...fadeUp}
        transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex items-start justify-between gap-4 border-b border-white/10 pb-4"
      >
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-signal text-signal/80">
            V.C.C
          </p>
          <p className="mt-2 max-w-[11rem] text-xs leading-5 text-white/42 sm:max-w-none">
            Curated underground fashion with the tone of a title sequence, not a
            storefront.
          </p>
        </div>
        <div className="hidden text-right sm:block">
          <p className="font-mono text-[0.68rem] uppercase tracking-signal text-white/35">
            Entrance sequence
          </p>
          <p className="mt-2 text-xs text-white/42">Stage 1 / Hero Experience</p>
        </div>
      </motion.header>

      <div className="relative z-10 flex flex-1 items-center justify-center py-10 sm:py-12">
        <div className="panel-frame relative flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-10 shadow-signal backdrop-blur-xl sm:px-8 sm:py-14 lg:min-h-[37rem] lg:px-12">
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1.1, delay: 0.15 }}
            className="absolute inset-y-10 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-signal/60 to-transparent lg:block"
          />

          <motion.div
            {...fadeUp}
            transition={{ duration: reducedMotion ? 0 : 0.85, delay: 0.1 }}
            className="absolute left-5 top-5 max-w-[11rem] text-left sm:left-8 sm:top-8"
          >
            <p className="font-mono text-[0.62rem] uppercase tracking-signal text-white/28">
              Signal Notes
            </p>
            <ul className="mt-3 space-y-2 text-[0.7rem] uppercase tracking-[0.24em] text-white/40">
              {statusMarks.map((mark) => (
                <li key={mark}>{mark}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 28, scale: reducedMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1.05, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-signal text-signal/80">
              Broadcast 001
            </p>
            <h1 className="mt-4 font-display text-[clamp(5rem,24vw,13rem)] uppercase leading-none tracking-[0.22em] text-white">
              <GlitchText text="V.C.C" />
            </h1>
            <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.4em] text-white/38 sm:text-[0.78rem]">
              premium raw feeling / cinematic restraint / anti-market rhythm
            </p>
            <p className="mt-6 max-w-lg text-sm leading-6 text-white/58 sm:text-base">
              The interface opens like a mood film still. Silence, spacing, signal
              green, and a fractured logo carry the first impression.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: reducedMotion ? 0 : 0.9, delay: 0.26 }}
            className="absolute bottom-5 right-5 hidden max-w-[12rem] text-right lg:block"
          >
            <p className="font-mono text-[0.62rem] uppercase tracking-signal text-white/28">
              Atmosphere
            </p>
            <p className="mt-3 text-sm leading-6 text-white/45">
              Grid hum, scanlines, restrained glow, and oversized typography carry
              the tension.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.footer
        {...fadeUp}
        transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.22 }}
        className="relative z-10 flex flex-col gap-5 border-t border-white/10 pt-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-md">
          <p className="font-mono text-[0.68rem] uppercase tracking-signal text-white/35">
            Entry Point
          </p>
          <p className="mt-2 text-sm leading-6 text-white/52">
            A clean first threshold into the V.C.C world. The catalog opens next,
            but the emotional tone is already locked.
          </p>
        </div>

        <motion.div
          whileHover={reducedMotion ? undefined : { y: -3 }}
          whileTap={reducedMotion ? undefined : { scale: 0.985 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
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
      </motion.footer>

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
