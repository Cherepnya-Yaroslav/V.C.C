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

const transmissionLines = [
  "vcc streetwear archive",
  "clothes for the late crowd",
  "night culture / raw uniform / city pulse",
  "drop signal live",
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
        <Link href="/" className="font-display text-4xl uppercase tracking-[0.22em] text-white">
          V.C.C
        </Link>
      </header>

      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="border-b border-white/10 px-5 py-6 sm:px-7 sm:py-8"
      >
        <div className="max-w-5xl">
          <h1 className="text-balance max-w-5xl font-display text-[clamp(4rem,15vw,11rem)] uppercase leading-[0.82] tracking-[0.12em] text-white sm:tracking-[0.16em]">
            Одежда для своих.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/58 sm:text-base">
            Одежда, которая говорит сама за себя. Для близких, для своей компании, для тех,
            кто и так понимает, о чем идет речь.
          </p>
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
                priority={index === 0}
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
