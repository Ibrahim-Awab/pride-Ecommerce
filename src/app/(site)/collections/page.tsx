import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCollections, getProductsByCollection } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Collections",
  description:
    "Explore PRIDE collections: tailored suits, wedding sherwanis, waistcoats, shalwar kameez, formal shirts and trousers.",
  path: "/collections",
});

export default function CollectionsPage() {
  const collections = getAllCollections();
  return (
    <>
      <Container className="pt-10 pb-14 sm:pt-14 lg:pb-20">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Collections" }]} />
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h1 className="font-serif text-5xl leading-[1.02] font-light tracking-[-0.01em] sm:text-6xl lg:col-span-7 xl:text-7xl">
            The Collections
          </h1>
          <p className="max-w-md text-[0.98rem] leading-relaxed text-taupe lg:col-span-5 lg:justify-self-end">
            From the boardroom to the barat: six considered edits of tailoring and eastern wear, each
            cut with the same attention to fabric, proportion and finish.
          </p>
        </div>
      </Container>

      <Container className="pb-16 lg:pb-24">
        <div className="relative aspect-4/3 overflow-hidden bg-ink sm:aspect-21/9">
          <Image
            src="/images/editorial/campaign-wide.jpg"
            alt="Man in a dark suit standing in the middle of a city street"
            fill
            preload
            sizes="(min-width: 1440px) 1312px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>

      <Container className="pb-24 lg:pb-32">
        <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {collections.map((c, i) => {
            const count = getProductsByCollection(c.slug).length;
            return (
              <Reveal as="li" key={c.slug} delay={(i % 2) * 0.08} className={i % 2 === 1 ? "md:mt-24" : ""}>
                <Link href={`/collections/${c.slug}`} className="group block">
                  <div className="relative aspect-4/5 overflow-hidden bg-sand">
                    <Image
                      src={c.image.src}
                      alt={c.image.alt}
                      fill
                      sizes="(min-width: 768px) 46vw, 100vw"
                      loading={i < 2 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-[1.6s] ease-luxe group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="eyebrow text-taupe">
                        {String(i + 1).padStart(2, "0")} · {count} pieces
                      </p>
                      <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">{c.name}</h2>
                      <p className="mt-2 text-sm text-taupe">{c.tagline}</p>
                    </div>
                    <span className="mt-8 grid size-11 shrink-0 place-items-center border border-line transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-ivory">
                      <ArrowRight className="size-4" strokeWidth={1.4} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
