import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Demo mode: ask all crawlers to stay out until indexing is explicitly enabled.
  if (!siteConfig.allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
