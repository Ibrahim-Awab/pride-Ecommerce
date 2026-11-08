import type { Metadata } from "next";
import { siteConfig, stores } from "@/config/site";
import type { Product } from "@/types";

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: { src: string; alt: string };
};

/** Consistent per-page metadata with canonical URL, Open Graph and Twitter cards. */
export function buildMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  const images = image ? [{ url: image.src, alt: image.alt }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      ...(images && { images: images.map((i) => i.url) }),
    },
  };
}

export function organizationJsonLd() {
  const store = stores[0];
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: store.addressLines.join(", "),
      addressLocality: store.city,
      addressCountry: "PK",
    },
    sameAs: Object.values(siteConfig.social).map((s) => s.url),
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    image: product.images.map((i) => absoluteUrl(i.src)),
    brand: { "@type": "Brand", name: siteConfig.name },
    color: product.colors.map((c) => c.name).join(", "),
    // Offers are only emitted when the price has been verified with the brand.
    ...(product.priceVerified &&
      typeof product.price === "number" && {
        offers: {
          "@type": "Offer",
          priceCurrency: "PKR",
          price: product.price,
          availability: "https://schema.org/InStoreOnly",
        },
      }),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
