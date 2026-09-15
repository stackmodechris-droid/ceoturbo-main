import { chromium } from "@playwright/test";

const browser = await chromium.launch({ headless: true });
for (const shot of [
  { width: 1440, height: 1000, output: "/tmp/ceoturbo-form-desktop.png", complete: false },
  { width: 390, height: 844, output: "/tmp/ceoturbo-form-mobile.png", complete: false },
  { width: 390, height: 844, output: "/tmp/ceoturbo-form-result-mobile.png", complete: true },
]) {
  const page = await browser.newPage({ viewport: { width: shot.width, height: shot.height }, reducedMotion: "reduce" });
  await page.goto("http://127.0.0.1:3100/form", { waitUntil: "domcontentloaded" });
  if (shot.complete) {
    await page.getByRole("checkbox", { name: /SEO, AEO & GEO website/ }).check();
    await page.getByRole("checkbox", { name: /Facebook & Instagram ads/ }).check();
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("radio", { name: "Within 30 days" }).check();
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("checkbox", { name: "I have photos, reviews, or results" }).check();
    await page.getByRole("button", { name: "See my next step" }).click();
    await page.getByRole("heading", { name: "Your next move is a visibility call." }).waitFor();
    await page.waitForTimeout(320);
  }
  await page.screenshot({ path: shot.output, fullPage: true });
  await page.close();
}
await browser.close();
