import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const archivo = localFont({ src: "../public/fonts/archivo-black-latin.woff2", weight: "400", variable: "--font-archivo", display: "swap" });
const source = localFont({
  src: "../public/fonts/source-sans-3-latin.woff2",
  weight: "400 900",
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "ElectronicReboot | Fast, Reliable Device Repair", template: "%s | ElectronicReboot" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Fast, Reliable Device Repair — ElectronicReboot",
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/brand/electronicreboot-og.jpg", width: 1200, height: 630, alt: "ElectronicReboot — Phone, Tablet, Laptop, Desktop & PC Repair" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast, Reliable Device Repair — ElectronicReboot",
    description: SITE.description,
    images: ["/brand/electronicreboot-og.jpg"],
  },
  icons: {
    icon: [
      { url: "/brand/er-icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/er-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/er-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/brand/er-icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/brand/er-icon-32.png",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0B1120", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${source.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
