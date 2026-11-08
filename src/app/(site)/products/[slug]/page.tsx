import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  formatPrice,
  getAllProducts,
  getCollectionBySlug,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/catalog";
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, productJsonLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPanel } from "@/components/product/ProductPanel";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ServiceNotes } from "@/components/product/ServiceNotes";

// Every slug is prerendered via generateStaticParams, so a blocking navigation is instant in practice.
export const instant = false;

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: `${product.tagline}. ${product.description}`,
    path: `/products/${product.slug}`,
    image: product.images[0],
  });
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const collection = getCollectionBySlug(product.collection);
  const related = getRelatedProducts(product, 4);
  const path = `/products/${product.slug}`;

  return (
    <div className="pb-20 lg:pb-0">
      <Container className="pt-6 pb-6 sm:pt-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            ...(collection ? [{ name: collection.name, href: `/collections/${collection.slug}` }] : []),
            { name: product.name },
          ]}
        />
      </Container>

      <div className="mx-auto w-full max-w-360 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-20">
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <ProductGallery images={product.images} productName={product.name} />
            </div>
          </div>
          <div className="px-5 sm:px-8 lg:col-span-5 lg:px-0">
            <ProductPanel
              product={product}
              collectionName={collection?.name ?? product.category}
              priceLabel={formatPrice(product)}
              productUrl={absoluteUrl(path)}
            />
          </div>
        </div>
      </div>

      <ServiceNotes />

      {related.length > 0 && (
        <section className="border-t border-line py-20 lg:py-28">
          <Container>
            <SectionHeading eyebrow="Complete the look" title="You may also consider" className="mb-12" />
            <ProductGrid products={related} eagerCount={0} />
          </Container>
        </section>
      )}

      <JsonLd data={productJsonLd(product)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          ...(collection ? [{ name: collection.name, path: `/collections/${collection.slug}` }] : []),
          { name: product.name, path },
        ])}
      />
    </div>
  );
}
