import Link from "next/link";
import { getAllCollections, getFeaturedProducts, getNewArrivals } from "@/lib/catalog";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { EditorialSplit } from "@/components/home/EditorialSplit";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { MadeToMeasureTeaser } from "@/components/home/MadeToMeasureTeaser";
import { StoreVisit } from "@/components/home/StoreVisit";
import { SocialGrid } from "@/components/home/SocialGrid";
import { ProductRail } from "@/components/product/ProductRail";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function HomePage() {
  const collections = getAllCollections();
  const newArrivals = getNewArrivals(8);
  const signature = getFeaturedProducts(4);

  return (
    <>
      <Hero />
      <BrandStatement />
      <FeaturedCollections collections={collections} />

      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <ProductRail
            products={newArrivals}
            label="new arrivals"
            header={<SectionHeading eyebrow="Just In" title="New arrivals" />}
          />
        </Container>
      </section>

      <EditorialSplit
        image={{ src: "/images/editorial/wedding.jpg", alt: "Groom in an ivory and gold sherwani and turban beneath Mughal arches" }}
        eyebrow="The Wedding Edit"
        title={
          <>
            For the days
            <br />
            <em>that matter most</em>
          </>
        }
        cta={<ButtonLink href="/collections/wedding-sherwani">Explore the edit</ButtonLink>}
      >
        <p>
          Sherwanis, prince coats and waistcoats for the barat, nikkah and walima, in raw silks,
          jamawar and velvets with embroidery finished by hand.
        </p>
        <p>Every piece can be tailored to the groom, and coordinated for the family.</p>
      </EditorialSplit>

      <Craftsmanship />

      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
            <SectionHeading eyebrow="Signature Pieces" title="The house favourites" />
            <Link href="/collections" className="eyebrow link-underline self-start text-ink sm:self-auto">
              View all collections
            </Link>
          </div>
          <ProductGrid products={signature} eagerCount={0} />
        </Container>
      </section>

      <MadeToMeasureTeaser />
      <StoreVisit />
      <SocialGrid />
    </>
  );
}
