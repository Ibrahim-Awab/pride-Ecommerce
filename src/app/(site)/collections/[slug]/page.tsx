import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCollections, getCollectionBySlug, getProductsByCollection } from "@/lib/catalog";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/collection/PageHero";
import { FilterableProducts } from "@/components/collection/FilterableProducts";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CollectionNav } from "@/components/collection/CollectionNav";

// Every slug is prerendered via generateStaticParams, so a blocking navigation is instant in practice.
export const instant = false;

export function generateStaticParams() {
  return getAllCollections().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return buildMetadata({
    title: collection.name,
    description: collection.description,
    path: `/collections/${collection.slug}`,
    image: collection.image,
  });
}

export default async function CollectionPage({ params }: PageProps<"/collections/[slug]">) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();
  const products = getProductsByCollection(collection.slug);

  return (
    <>
      <PageHero
        eyebrow={`Collection · ${products.length} pieces`}
        title={collection.name}
        description={<p>{collection.description}</p>}
        image={collection.image}
      />

      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Collections", href: "/collections" },
            { name: collection.name },
          ]}
        />
      </Container>

      <CollectionNav activeSlug={collection.slug} />

      <Container className="pb-24 lg:pb-32">
        <h2 className="sr-only">{collection.name} pieces</h2>
        <Suspense fallback={<ProductGrid products={products} />}>
          <FilterableProducts products={products} />
        </Suspense>
      </Container>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Collections", path: "/collections" },
          { name: collection.name, path: `/collections/${collection.slug}` },
        ])}
      />
    </>
  );
}
