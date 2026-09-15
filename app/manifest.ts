import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ElectronicReboot",
    short_name: "EReboot",
    description: "Fast, reliable device repair — phone, tablet, laptop, desktop, and PC.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1120",
    theme_color: "#00C2FF",
    icons: [
      { src: "/brand/electronicreboot-mark.jpg", sizes: "192x192", type: "image/jpeg" },
      { src: "/brand/electronicreboot-mark.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
  };
}
