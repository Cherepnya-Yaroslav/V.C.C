import { products } from "@/lib/products";

export async function getProducts() {
  return products;
}

export async function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug && product.available !== false) ?? null;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price);
}
