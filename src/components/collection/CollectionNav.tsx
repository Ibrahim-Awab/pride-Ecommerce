import Link from "next/link";
import { getAllCollections } from "@/lib/catalog";
import { Container } from "@/components/ui/Container";

/** Horizontal switcher between collections. Scrolls sideways on small screens. */
export function CollectionNav({ activeSlug }: { activeSlug: string }) {
  return (
    <Container as="nav" aria-label="Collections" className="pt-8 pb-2">
      <ul className="no-scrollbar -mx-5 flex gap-7 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
        {getAllCollections().map((c) => {
          const active = c.slug === activeSlug;
          return (
            <li key={c.slug} className="shrink-0">
              <Link
                href={`/collections/${c.slug}`}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center border-b font-serif text-lg transition-colors ${
                  active ? "border-ink text-ink" : "border-transparent text-taupe hover:text-ink"
                }`}
              >
                {c.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
