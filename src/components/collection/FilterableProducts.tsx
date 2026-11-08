"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { X } from "lucide-react";
import type { Product } from "@/types";
import { ProductGrid } from "@/components/product/ProductGrid";

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "New arrivals" },
  { value: "name", label: "Name, A–Z" },
] as const;

type SortValue = (typeof SORTS)[number]["value"];

/**
 * Size / colour filters and sort, persisted in the URL (?size=&color=&sort=)
 * so filtered views can be shared. Must be rendered inside <Suspense>.
 */
export function FilterableProducts({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const size = searchParams.get("size");
  const color = searchParams.get("color");
  const sort = (searchParams.get("sort") as SortValue | null) ?? "featured";

  const sizeOptions = useMemo(() => unique(products.flatMap((p) => p.sizes)), [products]);
  const colorOptions = useMemo(
    () => uniqueBy(products.flatMap((p) => p.colors), (c) => c.name),
    [products],
  );

  const visible = useMemo(() => {
    const filtered = products.filter(
      (p) => (!size || p.sizes.includes(size)) && (!color || p.colors.some((c) => c.name === color)),
    );
    const sorted = [...filtered];
    if (sort === "new") sorted.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
    else if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else sorted.sort((a, b) => Number(!!b.isFeatured) - Number(!!a.isFeatured));
    return sorted;
  }, [products, size, color, sort]);

  const setParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const hasFilters = Boolean(size || color);
  const select =
    "min-h-11 appearance-none border border-line bg-transparent bg-[length:10px] bg-[right_0.9rem_center] bg-no-repeat pr-9 pl-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] focus:border-ink focus:outline-none";
  const chevron = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%231b1a18' stroke-width='1.2'/%3E%3C/svg%3E\")",
  };

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <label className="sr-only" htmlFor="filter-size">Filter by size</label>
          <select
            id="filter-size"
            className={select}
            style={chevron}
            value={size ?? ""}
            onChange={(e) => setParam("size", e.target.value || null)}
          >
            <option value="">All sizes</option>
            {sizeOptions.map((s) => (
              <option key={s} value={s}>Size {s}</option>
            ))}
          </select>

          {colorOptions.length > 1 && (
            <div className="flex items-center gap-2" role="group" aria-label="Filter by colour">
              {colorOptions.map((c) => {
                const active = color === c.name;
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setParam("color", active ? null : c.name)}
                    aria-pressed={active}
                    title={c.name}
                    className="grid size-11 place-items-center"
                  >
                    <span
                      className={`block size-6 rounded-full ring-offset-2 ring-offset-ivory transition ${
                        active ? "ring-1 ring-ink" : "ring-1 ring-ink/15 hover:ring-ink/50"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="sr-only">{c.name}</span>
                  </button>
                );
              })}
            </div>
          )}

          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                const next = new URLSearchParams(searchParams.toString());
                next.delete("size");
                next.delete("color");
                const qs = next.toString();
                router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
              }}
              className="inline-flex min-h-11 items-center gap-1.5 px-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-taupe hover:text-ink"
            >
              <X className="size-3.5" strokeWidth={1.5} /> Clear
            </button>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <p className="text-xs text-taupe" aria-live="polite">
            {visible.length} {visible.length === 1 ? "piece" : "pieces"}
          </p>
          <label className="sr-only" htmlFor="sort">Sort by</label>
          <select
            id="sort"
            className={select}
            style={chevron}
            value={sort}
            onChange={(e) => setParam("sort", e.target.value === "featured" ? null : e.target.value)}
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      {visible.length > 0 ? (
        <ProductGrid products={visible} />
      ) : (
        <div className="py-24 text-center">
          <p className="font-serif text-2xl font-light">No pieces match these filters.</p>
          <p className="mt-3 text-sm text-taupe">
            Try another size, or ask us on WhatsApp. Many pieces can be made to your measurements.
          </p>
        </div>
      )}
    </div>
  );
}

function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

function uniqueBy<T>(arr: T[], key: (t: T) => string): T[] {
  const seen = new Map<string, T>();
  for (const item of arr) if (!seen.has(key(item))) seen.set(key(item), item);
  return Array.from(seen.values());
}
