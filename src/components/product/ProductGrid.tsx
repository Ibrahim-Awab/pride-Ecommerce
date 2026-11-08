import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products, eagerCount = 4 }: { products: Product[]; eagerCount?: number }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 lg:gap-x-8 lg:gap-y-16 xl:grid-cols-4">
      {products.map((product, i) => (
        <li key={product.slug}>
          <ProductCard product={product} eager={i < eagerCount} />
        </li>
      ))}
    </ul>
  );
}
