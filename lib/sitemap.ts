import { articles } from "@/lib/articles";
import { SITE } from "@/lib/site";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type SitemapRouteEntry = {
  path: string;
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

export const sitemapRouteEntries: SitemapRouteEntry[] = [
  { path: "/", lastModified: SITE.updated, changeFrequency: "weekly", priority: 1 },
  { path: "/phone-repair", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.95 },
  { path: "/tablet-repair", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.95 },
  { path: "/laptop-repair", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.95 },
  { path: "/desktop-repair", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.95 },
  { path: "/pc-repair", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.95 },
  { path: "/insights", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.75 },
  { path: "/work", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.7 },
  { path: "/about", lastModified: SITE.updated, changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy-policy", lastModified: SITE.updated, changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", lastModified: SITE.updated, changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility", lastModified: SITE.updated, changeFrequency: "yearly", priority: 0.3 },
  ...articles.map((article) => ({
    path: `/insights/${article.slug}`,
    lastModified: article.modified || article.published,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  })),
];

export type ImageSitemapGroup = {
  path: string;
  lastModified: string;
  images: Array<{
    src: string;
    title: string;
    alt: string;
  }>;
};

export const imageSitemapGroups: ImageSitemapGroup[] = [
  { path: "/", lastModified: SITE.updated, images: [] },
  { path: "/phone-repair", lastModified: SITE.updated, images: [] },
  { path: "/tablet-repair", lastModified: SITE.updated, images: [] },
  { path: "/laptop-repair", lastModified: SITE.updated, images: [] },
  { path: "/desktop-repair", lastModified: SITE.updated, images: [] },
  { path: "/pc-repair", lastModified: SITE.updated, images: [] },
];
