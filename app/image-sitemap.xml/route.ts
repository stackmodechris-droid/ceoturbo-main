import { SITE } from "@/lib/site";
import { imageSitemapGroups } from "@/lib/sitemap";

export function GET() {
  const escape = (value: string) => value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  const body = imageSitemapGroups.map((group) => (
    `<url><loc>${escape(new URL(group.path, SITE.url).toString())}</loc><lastmod>${group.lastModified}</lastmod>${group.images.map((image) => (
      `<image:image><image:loc>${escape(new URL(image.src, SITE.url).toString())}</image:loc><image:title>${escape(image.title)}</image:title><image:caption>${escape(image.alt)}</image:caption></image:image>`
    )).join("")}</url>`
  )).join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${body}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" } },
  );
}
