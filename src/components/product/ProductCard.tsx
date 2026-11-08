import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/catalog";

type ProductCardProps = {
  product: Product;
  sizes?: string;
  /** Load eagerly when the card is likely above the fold. */
  eager?: boolean;
};

export function ProductCard({
  product,
  sizes = "(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 46vw",
  eager = false,
}: ProductCardProps) {
  const [primary, secondary] = product.images;
  return (
    <article className="group relative">
      <Link href={`/products/${product.slug}`} className="block" aria-label={product.name}>
        <div className="relative aspect-3/4 overflow-hidden bg-sand">
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            sizes={sizes}
            loading={eager ? "eager" : "lazy"}
            className="object-cover transition-transform duration-[1.4s] ease-luxe group-hover:scale-[1.03]"
          />
          {secondary && (
            <Image
              src={secondary.src}
              alt=""
              aria-hidden="true"
              fill
              sizes={sizes}
              className="object-cover opacity-0 transition-opacity duration-700 ease-luxe group-hover:opacity-100"
            />
          )}
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-ivory/95 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink">
              New
            </span>
          )}
        </div>
        <div className="mt-4 space-y-1.5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-taupe">{product.category}</p>
          <h3 className="font-serif text-[1.2rem] leading-snug sm:text-[1.3rem]">{product.name}</h3>
          <div className="flex items-center justify-between gap-3 pt-0.5">
            <p className="text-[0.8rem] text-taupe">{formatPrice(product)}</p>
            {product.colors.length > 0 && (
              <ul className="flex gap-1.5" aria-label="Available colours">
                {product.colors.map((c) => (
                  <li key={c.name}>
                    <span
                      title={c.name}
                      className="block size-2.5 rounded-full ring-1 ring-ink/15"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="sr-only">{c.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
