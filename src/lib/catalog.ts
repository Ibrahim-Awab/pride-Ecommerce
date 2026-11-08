import { collections } from "@/data/collections";
import { products } from "@/data/products";
import type { Collection, Product } from "@/types";

export function getAllCollections(): Collection[] {
  return collections;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(slug: string): Product[] {
  return products.filter((p) => p.collection === slug);
}

export function getNewArrivals(limit = 8): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => p.isFeatured).slice(0, limit);
}

/** Same-collection products first, then featured pieces, excluding the current product. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCollection = products.filter(
    (p) => p.collection === product.collection && p.slug !== product.slug,
  );
  const others = products.filter(
    (p) => p.collection !== product.collection && p.isFeatured,
  );
  return [...sameCollection, ...others].slice(0, limit);
}

export function formatPrice(product: Product): string {
  if (product.priceVerified && typeof product.price === "number") {
    return `Rs. ${product.price.toLocaleString("en-PK")}`;
  }
  return "Price on request";
}
