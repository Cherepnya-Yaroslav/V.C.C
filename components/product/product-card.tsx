"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { formatProductTitle } from "@/lib/format-product-title";
import type { Product } from "@/types/product";
import { formatPrice } from "@/services/products";

type ProductCardProps = {
  product: Product;
  reducedMotion: boolean;
  priority?: boolean;
};

export function ProductCard({
  product,
  reducedMotion,
  priority = false,
}: ProductCardProps) {
  const isAvailable = product.available !== false;
  const displayTitle = formatProductTitle(product.title);

  const content = (
    <>
      <div className="relative h-[21rem] overflow-hidden rounded-[1.2rem] border border-white/8 bg-black/30 sm:h-[27rem]">
        <Image
          src={product.photos[0].url}
          alt={product.photos[0].alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ${
            isAvailable ? "group-hover:scale-[1.03]" : "scale-[1.02] blur-md"
          }`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.16)_44%,rgba(0,0,0,0.86)_100%)]" />
        {!isAvailable && (
          <div className="absolute inset-0 overflow-hidden rounded-[1.2rem] flex items-center justify-center bg-black/28 backdrop-blur-[2px]">
            <span className="rounded-full border border-white/15 bg-black/35 px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/72">
              To be announced
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h3 className="text-balance mt-3 max-w-[14rem] font-display text-[2rem] uppercase leading-[0.9] tracking-[0.12em] text-white sm:text-[2.8rem] sm:tracking-[0.14em]">
            {displayTitle}
          </h3>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-white/70">
          {isAvailable ? `${formatPrice(product.price)} ₽` : "TBA"}
        </p>
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.7 }}
      className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.025]"
    >
      {isAvailable ? (
        <Link href={`/product/${product.slug}`} className="block h-full p-4 sm:p-5">
          {content}
        </Link>
      ) : (
        <div className="block h-full cursor-default p-4 sm:p-5">{content}</div>
      )}
    </motion.article>
  );
}
