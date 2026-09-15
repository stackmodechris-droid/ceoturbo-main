import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 88, 92],
  },
  async redirects() {
    return [
      // Old CEOTurbo service pages → new repair pages or home
      { source: "/seo-websites", destination: "/", permanent: true },
      { source: "/meta-ads", destination: "/", permanent: true },
      { source: "/shirts", destination: "/", permanent: true },
      { source: "/business-cards", destination: "/", permanent: true },
      { source: "/review-cards", destination: "/", permanent: true },
      { source: "/yard-signs", destination: "/", permanent: true },
      // Old redirects preserved
      { source: "/website", destination: "/", permanent: true },
      { source: "/get-more-clients", destination: "/", permanent: true },
      { source: "/nfc-business-card", destination: "/", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/brand-strategy-call", destination: "/contact", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/brand-ecosystem", destination: "/", permanent: true },
      { source: "/scale-personal-brand", destination: "/", permanent: true },
      // Repair keyword aliases
      { source: "/computer-repair", destination: "/pc-repair", permanent: true },
      { source: "/ipad-repair", destination: "/tablet-repair", permanent: true },
      { source: "/iphone-repair", destination: "/phone-repair", permanent: true },
      { source: "/samsung-repair", destination: "/phone-repair", permanent: true },
      { source: "/macbook-repair", destination: "/laptop-repair", permanent: true },
    ];
  },
};

export default nextConfig;
