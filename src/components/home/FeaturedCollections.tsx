import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Tile({
  collection,
  className = "",
  aspect,
  sizes,
}: {
  collection: Collection;
  className?: string;
  aspect: string;
  sizes: string;
}) {
  return (
    <Link href={`/collections/${collection.slug}`} className={`group relative block overflow-hidden bg-ink ${className}`}>
      <div className={`relative ${aspect}`}>
        <Image
          src={collection.image.src}
          alt={collection.image.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1.6s] ease-luxe group-hover:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-ivory sm:p-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ivory/75">{collection.tagline}</p>
          <h3 className="mt-2 font-serif text-[1.9rem] leading-tight font-light sm:text-4xl">{collection.name}</h3>
          <span className="eyebrow mt-4 inline-block border-b border-ivory/50 pb-1 transition-colors group-hover:border-ivory">
            Explore
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Asymmetric editorial grid: one tall feature, two stacked, one wide banner. */
export function FeaturedCollections({ collections }: { collections: Collection[] }) {
  const [a, b, c, d] = collections;
  return (
    <section className="pb-24 lg:pb-32">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <SectionHeading eyebrow="Collections" title="Dressed for every occasion" />
          <Link href="/collections" className="eyebrow link-underline self-start text-ink sm:self-auto">
            View all collections
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-12 lg:gap-6">
          <Reveal className="md:col-span-7">
            <Tile collection={a} aspect="aspect-4/5 md:aspect-auto md:h-full md:min-h-[42rem]" sizes="(min-width: 768px) 58vw, 100vw" className="h-full" />
          </Reveal>
          <div className="grid gap-4 md:col-span-5 lg:gap-6">
            <Reveal delay={0.08}>
              <Tile collection={b} aspect="aspect-4/3 md:aspect-5/4" sizes="(min-width: 768px) 40vw, 100vw" />
            </Reveal>
            <Reveal delay={0.16}>
              <Tile collection={c} aspect="aspect-4/3 md:aspect-5/4" sizes="(min-width: 768px) 40vw, 100vw" />
            </Reveal>
          </div>
          {d && (
            <Reveal className="md:col-span-12">
              <Tile collection={d} aspect="aspect-4/3 sm:aspect-21/9" sizes="100vw" />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
