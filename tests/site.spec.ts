import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import sharp from "sharp";
import { adDesigns, adResults, websitePreviews } from "../lib/assets";
import { SERVICES } from "../lib/site";
import { allStockImages } from "../lib/stock-images";

const routes = ["/","/form","/seo-websites","/meta-ads","/shirts","/business-cards","/review-cards","/yard-signs","/work","/insights","/about","/contact","/privacy-policy","/terms","/accessibility","/insights/seo-aeo-geo-for-business-owners","/insights/how-google-reviews-help-local-businesses","/insights/custom-coded-websites-vs-builders","/insights/qr-codes-business-cards-review-cards-yard-signs"];

test("all public routes render, remain inside the viewport, and expose one h1", async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1"), route).toHaveCount(1);
    const expectedCanonical=route==="/"?"https://ceoturbo.com":new URL(route,"https://ceoturbo.com").toString();
    await expect(page.locator('link[rel="canonical"]'), `${route} canonical`).toHaveAttribute("href", expectedCanonical);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `${route} horizontal overflow`).toBeLessThanOrEqual(1);
  }
});

test("navigation order and persistent contact actions are exact", async ({ page }) => {
  await page.goto("/");
  const expected = ["Home","SEO Websites","Meta Ads","Shirts","Business Cards","Review Cards","Yard Signs"];
  const compact = await page.getByRole("button", { name: "Open navigation" }).isVisible();
  if (compact) await page.getByRole("button", { name: "Open navigation" }).click();
  const nav = page.getByRole("navigation", { name: compact ? "Mobile navigation" : "Primary navigation" });
  await expect(nav.getByRole("link")).toHaveText(expected);
  if (compact) {
    await expect(nav.getByRole("link").first()).toBeFocused();
    expect(await page.locator("body").evaluate((element) => getComputedStyle(element).overflow)).toBe("hidden");
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
  }
  await expect(page.locator('.action-dock a[href="tel:+16785584327"]')).toBeVisible();
  await expect(page.locator('.action-dock a[href="https://cal.com/stackmodechris/ceoturbo-brandboost"]')).toBeVisible();
});

test("qualifier accepts multiple services without personal fields", async ({ page }) => {
  await page.goto("/#qualifier");
  await expect(page.locator('#qualifier input[type="text"], #qualifier input[type="email"], #qualifier input[type="tel"]')).toHaveCount(0);
  await page.getByRole("checkbox", { name: /SEO Websites/ }).check();
  await page.getByRole("checkbox", { name: /Meta Ads/ }).check();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("radio", { name: "Several cities or a region" }).check();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("checkbox", { name: "Photos, reviews, or results" }).check();
  await page.getByRole("button", { name: "See selected packages" }).click();
  await expect(page.getByRole("heading", { name: "Here is your starting mix." })).toBeVisible();
  const selectedPackages = page.getByLabel("Selected CEOTurbo packages");
  await expect(selectedPackages.getByText("SEO Visibility Website", { exact: true })).toBeVisible();
  await expect(selectedPackages.getByText("Meta Ads Growth", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Book my visibility call" })).toHaveAttribute("href", "https://cal.com/stackmodechris/ceoturbo-brandboost");
});

test("paid-social intake accepts multiple needs and ends with booking and call actions", async ({ page }) => {
  await page.goto("/form");
  await expect(page.locator(".desktop-rail, .site-footer, .action-dock")).toHaveCount(0);
  await expect(page.locator('input[type="text"], input[type="email"], input[type="tel"]')).toHaveCount(0);

  await page.getByRole("checkbox", { name: /SEO, AEO & GEO website/ }).check();
  await page.getByRole("checkbox", { name: /Facebook & Instagram ads/ }).check();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("radio", { name: "Within 30 days" }).check();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("checkbox", { name: "I have photos, reviews, or results" }).check();
  await page.getByRole("button", { name: "See my next step" }).click();

  await expect(page.getByRole("heading", { name: "Ready to confirm your next visibility move?" })).toBeVisible();
  await expect(page.getByText("SEO Visibility Website", { exact: true })).toBeVisible();
  await expect(page.getByText("Meta Ads Growth", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: /Book my visibility call/ })).toHaveAttribute("href", "https://cal.com/stackmodechris/ceoturbo-brandboost");
  await expect(page.getByRole("link", { name: "Call 678-558-4327" }).last()).toHaveAttribute("href", "tel:+16785584327");
});

test("approved CEOTurbo logo renders without distortion in site chrome and product demos", async ({ page }) => {
  const expectedRatio = 492 / 120;
  const expectLogoRatio = async (selector: string) => {
    const logo = page.locator(selector).first();
    await expect(logo).toBeVisible();
    const box = await logo.boundingBox();
    expect(box, selector).not.toBeNull();
    const ratio = box!.width / box!.height;
    expect(Math.abs(ratio - expectedRatio), selector).toBeLessThan(0.08);
  };

  await page.goto("/");
  if (await page.locator(".desktop-rail").isVisible()) await expectLogoRatio(".desktop-rail .brand-logo");
  else await expectLogoRatio(".mobile-header .brand-logo");
  await page.locator(".site-footer").scrollIntoViewIfNeeded();
  await expectLogoRatio(".site-footer .brand-logo");

  await page.goto("/form");
  await expectLogoRatio(".campaign-header .brand-logo");

  await page.goto("/shirts");
  await expectLogoRatio(".shirt-print .brand-logo");
  const shirtBox = await page.locator(".shirt").boundingBox();
  const shirtLogoBox = await page.locator(".shirt-print .brand-logo").boundingBox();
  expect(shirtBox).not.toBeNull();
  expect(shirtLogoBox).not.toBeNull();
  expect(shirtLogoBox!.x).toBeGreaterThan(shirtBox!.x + shirtBox!.width / 2);
  expect(shirtLogoBox!.y).toBeLessThan(shirtBox!.y + shirtBox!.height / 2);
  expect(shirtLogoBox!.x + shirtLogoBox!.width).toBeLessThanOrEqual(shirtBox!.x + shirtBox!.width);

  await page.goto("/business-cards");
  await expectLogoRatio(".print-card--front .brand-logo");
});

test("homepage portfolio exposes all websites and ad designs through accessible tabs", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const websiteTab = page.getByRole("tab", { name: `Websites ${websitePreviews.length}` });
  const adTab = page.getByRole("tab", { name: `Ad Designs ${adDesigns.length}` });
  await expect(websiteTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toContainText("Every website preview");
  for (const item of websitePreviews) {
    await expect(page.locator(`.portfolio-tabpanel a.proof-site-link[href="${item.href}"]`), item.title).toHaveCount(1);
  }

  await websiteTab.focus();
  await page.keyboard.press("ArrowRight");
  await expect(adTab).toBeFocused();
  await expect(adTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toContainText("Every supplied ad design");
  for (const item of adDesigns) {
    await expect(page.locator(`.portfolio-tabpanel img[alt="${item.alt}"]`), item.title).toHaveCount(1);
  }
});

test("every supplied visual is represented on its required commercial page", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Inventory is viewport-independent and is checked once.");
  await page.goto("/seo-websites", { waitUntil: "domcontentloaded" });
  for (const item of websitePreviews) await expect(page.locator(`img[alt="${item.alt}"]`)).toHaveCount(1);
  await page.goto("/meta-ads", { waitUntil: "domcontentloaded" });
  for (const item of [...adDesigns, ...adResults]) await expect(page.locator(`img[alt="${item.alt}"]`)).toHaveCount(1);
});

test("every supplied stock image has one contextual page placement and descriptive metadata", async ({ page, request }) => {
  expect(allStockImages).toHaveLength(18);
  expect(new Set(allStockImages.map((image) => image.src)).size).toBe(allStockImages.length);
  expect(new Set(allStockImages.map((image) => image.alt)).size).toBe(allStockImages.length);

  for (const route of [...new Set(allStockImages.map((image) => image.route))]) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    for (const image of allStockImages.filter((item) => item.route === route)) {
      await expect(page.locator(`img[alt="${image.alt}"]`), image.title).toHaveCount(1);
      expect((await request.get(image.src)).status(), image.src).toBe(200);
    }
  }
});

test("all H2 section headings are phrased as questions", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const headings = await page.locator("h2").allTextContents();
    for (const heading of headings) expect(heading.trim(), `${route}: ${heading}`).toMatch(/\?$/);
  }
});

test("all website previews preserve their framing and link to the matching live site", async ({ page }) => {
  await page.goto("/seo-websites", { waitUntil: "domcontentloaded" });
  expect(websitePreviews).toHaveLength(20);

  for (const item of websitePreviews) {
    expect(item.href, item.title).toBeTruthy();
    const link = page.locator(`a.proof-site-link[href="${item.href}"]`);
    await expect(link).toHaveCount(1);
    await expect(link).toHaveAttribute("href", item.href!);
    await expect(link).toHaveAttribute("target", "_blank");

    const image = link.locator("img");
    await expect(image).toHaveAttribute("alt", item.alt);
    const fit = await image.evaluate((element) => getComputedStyle(element).objectFit);
    expect(fit, item.title).toBe("contain");
  }
});

test("lightbox, code animation, and product demo controls work", async ({ page }) => {
  await page.goto("/seo-websites");
  const trigger = page.locator(".proof-tile button").first();
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("button", { name: "Close image viewer" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.getByRole("button", { name: "Next" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(page.locator(".code-line").first()).toBeVisible({ timeout: 3000 });
  await page.goto("/business-cards");
  await page.getByRole("button", { name: "Fan the card stack" }).click();
  await expect(page.locator('img[alt="QR code opening CEOTurbo booking page"]')).toBeVisible();
});

test("redirects and retired route return the intended status", async ({ request }) => {
  const redirects:Record<string,string>={"/website":"/seo-websites","/get-more-clients":"/meta-ads","/nfc-business-card":"/business-cards","/portfolio":"/work","/brand-strategy-call":"/contact","/services":"/","/brand-ecosystem":"/","/scale-personal-brand":"/"};
  for (const [from,to] of Object.entries(redirects)) {
    const response=await request.get(from,{maxRedirects:0});
    expect([307,308]).toContain(response.status());
    expect(response.headers().location).toContain(to);
  }
  const retired=await request.get("/promptshop");
  expect(retired.status()).toBe(410);
  expect(retired.headers()["x-robots-tag"]).toContain("noindex");
});

test("all public routes have no serious or critical axe violations", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const result=await new AxeBuilder({page}).analyze();
    const blocking=result.violations.filter(violation=>violation.impact==="serious"||violation.impact==="critical");
    expect(blocking, route).toEqual([]);
  }
});

test("key routes fit all final responsive audit widths without dock collisions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "The explicit width matrix is checked once.");
  for (const width of [320, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: width < 820 ? 844 : 1000 });
    for (const route of routes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${route} at ${width}px`).toBeLessThanOrEqual(1);
      if (width <= 820 && route !== "/form") {
        const dock = await page.locator(".action-dock").boundingBox();
        expect(dock, `${route} dock at ${width}px`).not.toBeNull();
        expect(dock!.x).toBeGreaterThanOrEqual(0);
        expect(dock!.x + dock!.width).toBeLessThanOrEqual(width + 1);
      }
    }
  }
});

test("robots, sitemap, image sitemap, phone, and Cal.com destinations are present", async ({ request }) => {
  const robots=await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap: https://ceoturbo.com/sitemap.xml");
  const sitemap=await (await request.get("/sitemap.xml")).text();
  for(const route of routes.filter(route=>route!=="/form")) expect(sitemap).toContain(`https://ceoturbo.com${route==="/"?"":route}`);
  expect(sitemap).not.toContain("https://ceoturbo.com/form");
  const imageSitemap=await (await request.get("/image-sitemap.xml")).text();
  expect((imageSitemap.match(/<image:image>/g)||[]).length).toBe(websitePreviews.length*2+adDesigns.length*2+adResults.length+1+allStockImages.length);
});

test("brand metadata, manifest icons, and social image assets are wired", async ({ page, request }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", `https://ceoturbo.com${allStockImages.find((image) => image.route === "/")!.src}`);
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute("content", `https://ceoturbo.com${allStockImages.find((image) => image.route === "/")!.src}`);
  await expect(page.locator('link[rel="icon"][href="/favicon.ico"]')).toHaveCount(1);
  await expect(page.locator('link[rel="apple-touch-icon"][href="/brand/icon-180.png"]')).toHaveCount(1);

  const manifest = await (await request.get("/manifest.webmanifest")).json();
  expect(manifest.icons).toEqual(expect.arrayContaining([
    expect.objectContaining({ src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" }),
    expect.objectContaining({ src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" }),
  ]));

  for (const asset of ["/favicon.ico", "/brand/icon-16.png", "/brand/icon-32.png", "/brand/icon-48.png", "/brand/icon-180.png", "/brand/icon-192.png", "/brand/icon-512.png", "/brand/ceoturbo-lockup.webp", "/brand/ceoturbo-mark.webp"]) {
    const response = await request.get(asset);
    expect(response.status(), asset).toBe(200);
  }

  const ogResponse = await request.get("/brand/ceoturbo-og.png");
  expect(ogResponse.status()).toBe(200);
  const ogMeta = await sharp(await ogResponse.body()).metadata();
  expect(ogMeta.width).toBe(1200);
  expect(ogMeta.height).toBe(630);
});

test("service JSON-LD matches the visible fixed offer", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Structured data is viewport-independent and is checked once.");
  for (const service of Object.values(SERVICES)) {
    await page.goto(`/${service.key}`, { waitUntil: "domcontentloaded" });
    await expect(page.getByText(service.price, { exact: true }).first()).toBeVisible();
    const graphs=await page.locator('script[type="application/ld+json"]').allTextContents();
    const objects=graphs.flatMap(text=>{const parsed=JSON.parse(text);return Array.isArray(parsed)?parsed:[parsed]});
    const serviceGraph=objects.find(item=>item["@type"]==="Service");
    expect(serviceGraph?.offers?.price).toBe(service.priceValue.toFixed(2));
    expect(serviceGraph?.description).toBe(service.answer);
  }
});

test("reduced-motion preference collapses decorative animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/seo-websites");
  const duration=await page.locator(".code-line").first().evaluate(element=>getComputedStyle(element).animationDuration);
  expect(["0s","0.000001s","1e-06s"]).toContain(duration);
});
