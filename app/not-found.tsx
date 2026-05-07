import Link from "next/link";

import { TransmissionBand } from "@/components/shared/transmission-band";

const missingSignals = [
  "Signal lost",
  "Archive fragment unavailable",
  "Return to the field",
  "V.C.C dead channel",
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-obsidian px-4 py-4 text-ivory sm:px-6 sm:py-6 lg:px-8">
      <div className="screen-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-20" />
      <div className="film-noise pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-[16%] h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,255,178,0.16),transparent_70%)] blur-3xl" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-2rem)] max-w-[96rem] flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:min-h-[calc(100vh-3rem)] sm:p-7">
        <header className="story-divider flex items-start justify-between gap-4 pb-5">
          <Link href="/" className="font-display text-4xl uppercase tracking-[0.22em] text-white">
            V.C.C
          </Link>
          <p className="hidden font-mono text-[0.68rem] uppercase tracking-signal text-white/35 sm:block">
            Lost channel / 404
          </p>
        </header>

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="panel-frame relative flex w-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20 px-5 py-12 text-center sm:px-8 sm:py-16">
            <p className="font-mono text-[0.68rem] uppercase tracking-signal text-signal/80">
              Transmission Missing
            </p>
            <h1 className="text-balance mt-6 font-display text-[clamp(5rem,22vw,12rem)] uppercase leading-none tracking-[0.18em] text-white">
              404
            </h1>
            <p className="text-balance mt-6 max-w-xl text-sm leading-6 text-white/56 sm:text-base">
              The page dissolved into static before it could be rendered. The cleanest move is to re-enter the catalog and continue the sequence.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:border-signal/60 hover:text-signal"
              >
                Return to catalog
              </Link>
              <TransmissionBand items={missingSignals} className="w-full max-w-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
