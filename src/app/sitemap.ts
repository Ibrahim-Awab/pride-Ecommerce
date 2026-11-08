import type { MetadataRoute } from "next";
import { getAllCollections, getAllProducts } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/collections", priority: 0.9 },
    { path: "/made-to-measure", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/stores", priority: 0.7 },
    { path: "/size-guide", priority: 0.5 },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: absoluteUrl(r.path),
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...getAllCollections().map((c) => ({
      url: absoluteUrl(`/collections/${c.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...getAllProducts().map((p) => ({
      url: absoluteUrl(`/products/${p.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.6,
      images: [absoluteUrl(p.images[0].src)],
    })),
  ];
}
