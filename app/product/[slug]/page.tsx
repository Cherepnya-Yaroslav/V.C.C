import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductStory } from "@/components/product/product-story";
import { getProductBySlug, getProducts } from "@/services/products";
import { absoluteUrl } from "@/lib/site";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const products = await getProducts();

  return products
    .filter((product) => product.available !== false)
    .map((product) => ({
    slug: product.slug,
    }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: absoluteUrl(`/product/${product.slug}`),
    },
    openGraph: {
      title: `${product.title} | V.C.C`,
      description: product.description,
      url: absoluteUrl(`/product/${product.slug}`),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductStory product={product} />;
}
