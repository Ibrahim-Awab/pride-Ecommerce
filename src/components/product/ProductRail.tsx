"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";

/** Horizontally scrollable product row, driven by the user (no autoplay). */
export function ProductRail({
  products,
  label,
  header,
}: {
  products: Product[];
  label: string;
  /** Heading content shown to the left of the arrow controls. */
  header?: React.ReactNode;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const arrow =
    "grid size-11 place-items-center border border-line text-ink transition-colors duration-300 hover:border-ink disabled:opacity-30 disabled:hover:border-line";

  return (
    <div>
      <div className="mb-10 flex items-end justify-between gap-6 lg:mb-14">
        <div>{header}</div>
        <div className="hidden shrink-0 gap-2 md:flex">
        <button type="button" className={arrow} onClick={() => scrollBy(-1)} disabled={!canPrev} aria-label={`Previous ${label}`}>
          <ChevronLeft className="size-4" strokeWidth={1.4} />
        </button>
        <button type="button" className={arrow} onClick={() => scrollBy(1)} disabled={!canNext} aria-label={`Next ${label}`}>
          <ChevronRight className="size-4" strokeWidth={1.4} />
        </button>
        </div>
      </div>
      <ul
        ref={ref}
        aria-label={label}
        className="no-scrollbar relative -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:gap-8 lg:scroll-px-0 lg:px-0"
      >
        {products.map((product) => (
          <li key={product.slug} className="w-[68vw] shrink-0 snap-start sm:w-[42vw] md:w-[30vw] lg:w-[calc((100%-6rem)/4)]">
            <ProductCard product={product} sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 68vw" />
          </li>
        ))}
      </ul>
    </div>
  );
}
