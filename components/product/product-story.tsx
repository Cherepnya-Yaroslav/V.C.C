"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { PageShell } from "@/components/layout/page-shell";
import { SceneIndicator } from "@/components/shared/scene-indicator";
import { TransmissionBand } from "@/components/shared/transmission-band";
import { formatPrice } from "@/services/products";
import type { Product } from "@/types/product";

type ProductStoryProps = {
  product: Product;
};

export function ProductStory({ product }: ProductStoryProps) {
  const reducedMotion = useReducedMotion();
  const [heroPhoto, ...detailPhotos] = product.photos;

  return (
    <PageShell>
      <SceneIndicator label="Object study" index="03" />

      <header className="story-divider flex items-start justify-between gap-4 px-5 py-4 sm:px-7 sm:py-5">
        <div>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-white/60 transition-colors duration-300 hover:text-signal"
          >
            <span className="text-signal">/</span>
            Back to catalog
          </Link>
          <h1 className="text-balance mt-5 font-display text-[clamp(3.2rem,14vw,8rem)] uppercase leading-[0.86] tracking-[0.12em] text-white sm:tracking-[0.16em]">
            {product.title}
          </h1>
        </div>
        <div className="hidden text-right sm:block">
          <p className="font-mono text-[0.68rem] uppercase tracking-signal text-signal/80">
            Product Object
          </p>
          <p className="mt-2 text-xs text-white/42">{formatPrice(product.price)} ₽</p>
        </div>
      </header>

      <section className="grid gap-6 px-5 py-6 sm:px-7 sm:py-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4">
          <motion.article
            initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.8 }}
            className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/30"
          >
            <div className="relative min-h-[24rem] sm:min-h-[34rem]">
              <Image
                src={heroPhoto.url}
                alt={heroPhoto.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.78)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-signal text-white/38">
                  Main image
                </p>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2">
            {detailPhotos.map((photo, index) => (
              <motion.article
                key={photo.id}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.75, delay: reducedMotion ? 0 : index * 0.08 }}
                className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30"
              >
                <div className="relative min-h-[16rem] sm:min-h-[18rem]">
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.68)_100%)]" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.72, delay: 0.08 }}
          className="flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start"
        >
          <article className="rounded-[1.7rem] border border-white/10 bg-black/20 p-5 sm:p-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-signal text-signal/80">
              Description
            </p>
            <p className="mt-4 text-sm leading-6 text-white/58 sm:text-base">
              {product.description}
            </p>
          </article>

          <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-signal text-signal/80">
              Price
            </p>
            <p className="mt-4 font-display text-[clamp(2.4rem,7vw,4.1rem)] uppercase leading-[0.9] tracking-[0.12em] text-white">
              {formatPrice(product.price)} ₽
            </p>
            <p className="mt-4 text-sm leading-6 text-white/52">
              No checkout flow, no contact prompt, no order mechanics. The page exists only as a visual product study.
            </p>
          </article>
        </motion.aside>
      </section>

      <section className="px-5 pb-5 pt-1 sm:px-7 sm:pb-7">
        <TransmissionBand
          items={[
            product.title,
            "Image-first product page",
            "No recommendations",
            "No order UI",
          ]}
        />
      </section>
    </PageShell>
  );
}
