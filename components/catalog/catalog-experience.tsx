"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { PageShell } from "@/components/layout/page-shell";
import { ProductCard } from "@/components/product/product-card";
import { SceneIndicator } from "@/components/shared/scene-indicator";
import { TransmissionBand } from "@/components/shared/transmission-band";
import type { Product } from "@/types/product";

type CatalogExperienceProps = {
  products: Product[];
};

const manifestoFragments = [
  "No store logic. Only atmosphere and object focus.",
  "Products appear as evidence, not inventory.",
  "Typography and void do as much work as imagery.",
];

const transmissionLines = [
  "Catalog sequence 001",
  "Editorial grid active",
  "Image / title / price only",
  "No filters / no search / no cart",
];

export function CatalogExperience({ products }: CatalogExperienceProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, reducedMotion ? 0 : -32]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, reducedMotion ? 1 : 0.78]);

  return (
    <PageShell>
      <SceneIndicator label="Catalog field" index="02" />

      <header className="story-divider flex items-start justify-between gap-4 px-5 py-4 sm:px-7 sm:py-5">
        <div>
          <Link href="/" className="font-display text-4xl uppercase tracking-[0.22em] text-white">
            V.C.C
          </Link>
          <p className="mt-2 max-w-[14rem] text-xs leading-5 text-white/42 sm:max-w-sm">
            Minimal product field with an editorial grid and no marketplace logic.
          </p>
        </div>
        <div className="hidden text-right sm:block">
          <p className="font-mono text-[0.68rem] uppercase tracking-signal text-signal/80">
            Stage 4
          </p>
          <p className="mt-2 text-xs text-white/40">Catalog / mobile-first showcase</p>
        </div>
      </header>

      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="grid gap-6 border-b border-white/10 px-5 py-6 sm:px-7 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
      >
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-signal text-signal/80">
            Catalog Entrance
          </p>
          <h1 className="text-balance mt-5 max-w-3xl font-display text-[clamp(3.5rem,14vw,10rem)] uppercase leading-[0.84] tracking-[0.12em] text-white sm:tracking-[0.16em]">
            Curated objects in a dark field.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/58 sm:text-base">
            Products sit in a clean editorial grid, with spacing and image weight doing more work than interface chrome.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {manifestoFragments.map((fragment) => (
            <div
              key={fragment}
              className="rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-4"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-signal text-white/32">
                Statement
              </p>
              <p className="mt-3 text-sm leading-6 text-white/55">{fragment}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="px-5 py-6 sm:px-7 sm:py-8">
        {products.length === 0 ? (
          <div className="flex min-h-[22rem] items-center justify-center rounded-[1.8rem] border border-dashed border-white/12 bg-black/20 p-6 text-center">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-signal text-signal/80">
                Empty State
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.6rem,8vw,4.4rem)] uppercase leading-[0.9] tracking-[0.12em] text-white">
                Product field offline.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/56">
                The grid is intentionally quiet until product objects are loaded into the archive.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                reducedMotion={Boolean(reducedMotion)}
                priority={index < 2}
              />
            ))}
          </div>
        )}
      </section>

      <section className="px-5 pb-5 pt-1 sm:px-7 sm:pb-7">
        <TransmissionBand items={transmissionLines} />
      </section>
    </PageShell>
  );
}
