import type { Metadata } from "next";
import { SITE, type ServiceOffer } from "@/lib/site";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/brand/electronicreboot-og.jpg",
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const socialImageAlt = imageAlt ?? `${SITE.name}: ${title}`;
  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: SITE.name,
      type: "website",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: socialImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: absoluteUrl(image), alt: socialImageAlt }],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    telephone: "+16785584327",
    description: SITE.description,
    logo: absoluteUrl("/brand/logo.png"),
    image: absoluteUrl("/brand/electronicreboot-og.jpg"),
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: SITE.founder,
      alternateName: SITE.founderAlias,
    },
    areaServed: [
      { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Stone Mountain", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Duluth", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Lawrenceville", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "County", name: "Gwinnett County", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Athens", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Decatur", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Norcross", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Tucker", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Lilburn", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Snellville", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Suwanee", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Johns Creek", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Buford", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Marietta", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "State", name: "Georgia" },
      { "@type": "State", name: "Florida", description: "Expanding mobile service" },
      { "@type": "State", name: "North Carolina", description: "Future expansion" }
    ],
    sameAs: [
      "https://stackmode.net",
      "https://www.instagram.com/christopherrobinsonceo/",
      "https://www.linkedin.com/in/stackmodechris/",
      "https://x.com/ChristopherRCEO",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function serviceSchema(service: ServiceOffer) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/${service.key}/#service`,
    name: service.name,
    description: service.answer,
    url: `${SITE.url}/${service.key}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: [
      { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Stone Mountain", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Duluth", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Lawrenceville", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "County", name: "Gwinnett County", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Athens", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Decatur", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Norcross", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Tucker", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Lilburn", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Snellville", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Suwanee", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Johns Creek", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Buford", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Marietta", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "State", name: "Georgia" },
      { "@type": "State", name: "Florida", description: "Expanding mobile service" },
      { "@type": "State", name: "North Carolina", description: "Future expansion" }
    ],
    offers: {
      "@type": "Offer",
      price: service.priceValue.toFixed(2),
      priceCurrency: "USD",
      url: `${SITE.url}/${service.key}`,
      description: `${service.price} ${service.cadence}`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
