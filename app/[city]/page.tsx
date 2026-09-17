import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PrimaryLink, SectionHeader, FaqList } from "@/components/page-elements";
import { SERVICES, SITE, SERVICE_ORDER } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const ALLOWED_CITIES = [
  "atlanta",
  "duluth",
  "lawrenceville",
  "stone-mountain",
  "norcross",
  "decatur",
  "marietta",
  "athens"
];

function formatCityName(slug: string) {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return ALLOWED_CITIES.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  if (!ALLOWED_CITIES.includes(city)) {
    return {};
  }
  
  const cityName = formatCityName(city);
  return buildMetadata({
    title: `Mobile Device & Computer Repair in ${cityName}, GA | ElectronicReboot`,
    description: `Fast, affordable mobile device and computer repair in ${cityName}. We fix phones, tablets, laptops, and PCs. Virtual appointments from $70, Mobile repairs from $100.`,
    path: `/${city}`,
    image: "/brand/electronicreboot-og.jpg",
    imageAlt: `ElectronicReboot — Device Repair in ${cityName} Georgia`,
  });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  if (!ALLOWED_CITIES.includes(city)) {
    notFound();
  }

  const cityName = formatCityName(city);
  const offers = SERVICE_ORDER.map((key) => SERVICES[key]);

  const faqs = [
    { question: `What types of devices do you repair in ${cityName}?`, answer: `We repair iPhones, Android phones, iPads, tablets, laptops, desktops, and Windows PCs. Our mobile technicians can come directly to you in ${cityName}.` },
    { question: `How does the mobile repair process work in ${cityName}?`, answer: `It's simple: you book an appointment, and our technician travels to your home, office, or a local coffee shop in ${cityName}. Most phone screen replacements take 30–60 minutes.` },
    { question: "Is there a travel fee for mobile repairs?", answer: "The mobile service fee is $100, which covers the travel to your location and acts as the diagnostic fee. This fee is credited toward your approved repair." },
    { question: "Do you offer a warranty on repairs?", answer: "Yes, every repair comes with a 90-day labor warranty. If the same issue returns within 90 days, we'll fix it at no additional labor charge." },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MobilePhoneStore", "ComputerStore"],
        "@id": `${SITE.url}/${city}/#localbusiness`,
        "name": `${SITE.legalName} - ${cityName}`,
        "url": `${SITE.url}/${city}`,
        "telephone": SITE.phoneDisplay,
        "image": `${SITE.url}/brand/electronicreboot-og.jpg`,
        "areaServed": {
          "@type": "City",
          "name": cityName,
          "containedInPlace": {
            "@type": "State",
            "name": "Georgia"
          }
        },
        "description": `Fast, affordable mobile device and computer repair in ${cityName}, GA. We fix phones, tablets, laptops, and PCs.`,
        "makesOffer": SERVICE_ORDER.map(key => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": SERVICES[key].name,
            "description": SERVICES[key].summary
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": SERVICES[key].priceValue,
            "priceCurrency": "USD"
          }
        }))
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/${city}/#faq`,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE.url}/${city}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${cityName} Repair`,
            "item": `${SITE.url}/${city}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="hero section-dark">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Local Tech Repair in {cityName}, GA</p>
            <h1>Your device is broken. <em>We fix it in {cityName}.</em></h1>
            <p className="lede">
              ElectronicReboot provides expert repair for phones, tablets, laptops, and PCs. 
              Skip the long lines at the big box stores — our mobile technicians come directly to you in {cityName}. 
              <strong style={{color:"var(--teal)"}}> Virtual appointments from $70</strong> and mobile repairs from $100.
            </p>
            <div className="hero-actions">
              <PrimaryLink href={SITE.phoneHref}>Call / Text {SITE.phoneDisplay}</PrimaryLink>
              <a className="button" href={SITE.bookingUrl}>Book Consultation</a>
              <PrimaryLink href="#services">See all repairs</PrimaryLink>
            </div>
            <p className="hero-note">Starting at $70 for virtual appointments, $100 for mobile repair · credited toward repair · 90-day labor warranty</p>
          </div>
          <div className="hero-visual-wrap">
            <Image
              src="/images/repair/iphone/istockphoto-1183957088-612x612.jpg"
              alt={`Mobile device repair in ${cityName}`}
              width={600}
              height={400}
              sizes="(max-width: 820px) 92vw, 520px"
              priority
              style={{ borderRadius: "12px", objectFit: "cover", width: "100%", height: "100%", minHeight: "350px" }}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader 
            question={`What devices do we repair in ${cityName}?`} 
            answer="From cracked phone screens to slow PCs and broken laptop keyboards — we repair all major device types with honest diagnostics and clear upfront pricing." 
          />
          <div className="offer-list" id="services">
            {offers.map((service) => (
              <Link className="offer-row" href={`/${service.key}`} key={service.key}>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                </div>
                <span className="offer-price">
                  <strong>{service.price}</strong>
                  <span>{service.cadence}</span>
                </span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell split-layout">
          <div>
            <p className="eyebrow">Mobile Repair Service</p>
            <h2>How mobile repair works in {cityName}</h2>
            <p>
              We know you&apos;re busy. That&apos;s why ElectronicReboot offers a fully mobile repair experience for our customers in {cityName} and surrounding areas.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Book an appointment:</strong> Schedule a time that works for you.</li>
              <li><strong>We come to you:</strong> Our technician arrives at your home, office, or a local spot in {cityName}.</li>
              <li><strong>Fast repair:</strong> Most phone and tablet screens are replaced in 30-60 minutes on-site.</li>
              <li><strong>Test and verify:</strong> We make sure everything works perfectly before we leave.</li>
            </ul>
            <PrimaryLink href={SITE.bookingUrl}>Book your {cityName} repair</PrimaryLink>
          </div>
          <div className="faq-column">
            <h2>Frequently Asked Questions</h2>
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Ready to get your device repaired in {cityName}?</h2>
          <p>Call us or book a mobile appointment. Most phone repairs are done in 30–60 min while you wait.</p>
          <PrimaryLink href={SITE.phoneHref}>Call {SITE.phoneDisplay}</PrimaryLink>
        </div>
      </section>
    </>
  );
}
