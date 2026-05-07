"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <div
          className={`absolute inset-x-[14%] top-[10%] h-[56%] rounded-[46%_46%_36%_36%/20%_20%_62%_62%] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.01))] opacity-70 transition-transform duration-700 ${
            isAvailable ? "group-hover:-translate-y-1" : ""
          }`}
        />
        {!isAvailable && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/28 backdrop-blur-[2px]">
            <span className="rounded-full border border-white/15 bg-black/35 px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/72">
              To be announced
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[0.62rem] uppercase tracking-signal text-white/38">
              {isAvailable ? "Product Object" : "Closed slot"}
            </p>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-white/70">
              {isAvailable ? `${formatPrice(product.price)} ₽` : "TBA"}
            </p>
          </div>
          <h3 className="text-balance mt-3 max-w-[14rem] font-display text-[2rem] uppercase leading-[0.9] tracking-[0.12em] text-white sm:text-[2.8rem] sm:tracking-[0.14em]">
            {product.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 max-w-md text-sm leading-6 text-white/58">{product.description}</p>
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
