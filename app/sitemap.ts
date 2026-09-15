import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { sitemapRouteEntries } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRouteEntries.map((entry) => ({
    url: `${SITE.url}${entry.path === "/" ? "" : entry.path}`,
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
