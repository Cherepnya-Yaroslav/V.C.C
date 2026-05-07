import type { Metadata } from "next";

import { CatalogExperience } from "@/components/catalog/catalog-experience";
import { getProducts } from "@/services/products";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Enter the V.C.C catalog: an editorial product field where garments appear as cast objects, not store inventory.",
  alternates: {
    canonical: absoluteUrl("/catalog"),
  },
  openGraph: {
    title: "V.C.C Catalog",
    description:
      "A dark, cinematic catalog sequence blending product showcase, manifesto fragments, and lookbook atmosphere.",
    url: absoluteUrl("/catalog"),
  },
};

export default async function CatalogPage() {
  const products = await getProducts();

  return <CatalogExperience products={products} />;
}
