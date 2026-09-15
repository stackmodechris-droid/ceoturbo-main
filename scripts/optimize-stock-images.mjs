import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDirectory = path.join(process.cwd(), "Images", "Stock Images");
const outputDirectory = path.join(process.cwd(), "public", "images", "stock");

const images = [
  ["SEO.png", "seo-services-foundation.webp", true],
  ["GEAR 1.png", "meta-campaign-optimization.webp", true],
  ["RESULTS 2.png", "meta-campaign-results.webp", true],
  ["SEO PIC.png", "seo-performance-analysis.webp", true],
  ["CHECKMARK.png", "honest-review-request.webp", true],
  ["COMPANY.png", "company-operations-system.webp", true],
  ["CLOTHES.png", "custom-company-shirt-design.webp", true],
  ["BUSINESS SHIRT.png", "professional-company-shirt.webp", true],
  ["META DESCRIPTION.jpg", "meta-description-optimization.webp", false],
  ["TURBO.jpg", "ceoturbo-digital-visibility-system.webp", false],
  ["CODE .jpg", "website-metadata-code.webp", false],
  ["META AD.png", "meta-ads-platform.webp", true],
  ["BUSINESS CARD 2.png", "business-card-follow-up.webp", true],
  ["BUSINESS CARD.png", "custom-business-card-design.webp", true],
  ["SEO 2.jpg", "seo-growth-measurement.webp", false],
  ["SEO.jpg", "technical-seo-structure.webp", false],
  ["WEBSITE.jpg", "business-website-discovery.webp", false],
  ["search-console.webp", "google-search-console-reporting.webp", false],
];

await mkdir(outputDirectory, { recursive: true });

for (const [sourceName, outputName, lossless] of images) {
  const source = path.join(sourceDirectory, sourceName);
  const output = path.join(outputDirectory, outputName);
  const sourceSize = (await stat(source)).size;

  await sharp(source)
    .rotate()
    .webp(lossless
      ? { lossless: true, effort: 6 }
      : { quality: 82, effort: 6, smartSubsample: true })
    .toFile(output);

  const outputSize = (await stat(output)).size;
  const saved = Math.round((1 - outputSize / sourceSize) * 100);
  console.log(`${sourceName} -> ${outputName} (${saved}% smaller)`);
}
