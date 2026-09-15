import { chromium } from "@playwright/test";

const browser = await chromium.launch({ headless: true });
for (const shot of [
  { path: "/", width: 1440, height: 1000, output: "/tmp/ceoturbo-home-desktop-loaded.png" },
  { path: "/", width: 390, height: 844, output: "/tmp/ceoturbo-home-mobile-loaded.png" },
  { path: "/seo-websites", width: 1440, height: 1000, output: "/tmp/ceoturbo-seo-desktop-loaded.png" },
  { path: "/seo-websites", width: 390, height: 844, output: "/tmp/ceoturbo-seo-mobile-loaded.png" },
  { path: "/meta-ads", width: 1440, height: 1000, output: "/tmp/ceoturbo-meta-desktop-loaded.png" },
  { path: "/business-cards", width: 390, height: 844, output: "/tmp/ceoturbo-cards-mobile-loaded.png" },
  { path: "/shirts", width: 390, height: 844, output: "/tmp/ceoturbo-shirts-mobile-loaded.png" },
  { path: "/review-cards", width: 1440, height: 1000, output: "/tmp/ceoturbo-reviews-desktop-loaded.png" },
  { path: "/about", width: 390, height: 844, output: "/tmp/ceoturbo-about-mobile-loaded.png" },
]) {
  const page = await browser.newPage({ viewport: { width: shot.width, height: shot.height }, reducedMotion: "reduce" });
  await page.goto(`http://127.0.0.1:3100${shot.path}`, { waitUntil: "domcontentloaded" });
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < pageHeight; y += Math.max(420, Math.floor(shot.height * 0.72))) {
    await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
    await page.waitForTimeout(80);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(250);
  await page.screenshot({ path: shot.output, fullPage: true });
  await page.close();
}
await browser.close();
