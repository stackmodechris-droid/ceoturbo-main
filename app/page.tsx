import Link from "next/link";
import Image from "next/image";
import { PrimaryLink, SectionHeader, FaqList } from "@/components/page-elements";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { ResultInsights } from "@/components/result-insights";

import { websitePreviews, adDesigns, adResults } from "@/lib/assets";
import { SERVICES, SITE, SERVICE_ORDER } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ElectronicReboot | Fast Affordable Device Repair — Atlanta, Gwinnett & Georgia",
  description: "Virtual appointments from $70, Mobile repairs from $100, credited toward your repair. iPhone, Android, iPad, laptop, desktop & PC repair. Serving Atlanta, Duluth, Gwinnett, Athens & surrounding cities.",
  path: "/",
  image: "/brand/electronicreboot-og.jpg",
  imageAlt: "ElectronicReboot — Fast Affordable Device Repair in Atlanta Georgia",
});

const homeFaqs = [
  { question: "What services does ElectronicReboot provide?", answer: "We repair iPhones, Android phones, iPads, tablets, laptops, desktops, and Windows PCs. We also build high-converting websites and manage Meta ads for businesses across Georgia." },
  { question: "How long do repairs take?", answer: "Most repairs are completed within 2 days. We will order parts if needed and give you an honest time estimate when you drop off." },
  { question: "Do you offer a warranty on repairs?", answer: "Yes. Every repair comes with a 90-day labor warranty. If the same issue returns within 90 days of the repair, we fix it at no additional labor charge." },
  { question: "Do you charge for a diagnostic?", answer: "Yes — a minimum $70 for virtual appointments, and $100 for mobile (we come to you) repairs. That fee is credited toward any approved repair, so you never pay it twice. We undercut every major chain in the Atlanta area." },
  { question: "Where do you serve in Georgia?", answer: "Mobile and virtual device repair across Atlanta, Gwinnett County, Athens, and surrounding North Georgia communities." },
];

export default function HomePage() {
  const offers = SERVICE_ORDER.map((key) => SERVICES[key]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "MobilePhoneStore", "ComputerStore"],
        "@id": `${SITE.url}/#organization`,
        "name": SITE.legalName,
        "url": SITE.url,
        "telephone": SITE.phoneDisplay,
        "image": `${SITE.url}/brand/electronicreboot-og.jpg`,
        "areaServed": [
          { "@type": "City", "name": "Atlanta" },
          { "@type": "City", "name": "Duluth" },
          { "@type": "City", "name": "Lawrenceville" },
          { "@type": "City", "name": "Stone Mountain" },
          { "@type": "City", "name": "Norcross" },
          { "@type": "City", "name": "Decatur" },
          { "@type": "City", "name": "Marietta" },
          { "@type": "City", "name": "Athens" }
        ],
        "description": "Mobile and virtual device repair across Atlanta, Gwinnett County, Athens, and surrounding North Georgia communities.",
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
        "@id": `${SITE.url}/#faq`,
        "mainEntity": homeFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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
            <p className="hero-kicker">Fast tech repair & digital growth</p>
            <h1>Your device is broken.<em>We fix it fast.</em></h1>
            <p className="lede">ElectronicReboot repairs phones, tablets, laptops, desktops, and Windows PCs. <strong style={{color:"var(--teal)"}}>Virtual appointments from $70</strong> and mobile (we come to you) repairs from $100. Mobile and virtual device repair across Atlanta, Gwinnett County, Athens, and surrounding North Georgia communities.</p>
            <div className="hero-actions">
              <PrimaryLink href={SITE.phoneHref}>Call / Text {SITE.phoneDisplay}</PrimaryLink>
              <a className="button" href={SITE.bookingUrl}>Book Consultation</a>
              <PrimaryLink href="#services">See all repairs</PrimaryLink>
            </div>
            <p className="hero-note">Starting at $70 for virtual appointments, $100 for mobile repair · credited toward repair · 90-day labor warranty</p>
          </div>
          <div className="hero-visual-wrap fast-selection-grid">
            <h3 className="fast-selection-title">Select your device</h3>
            <div className="fast-grid">
              <Link href="/phone-repair" className="fast-card">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                <span>Phone Repair</span>
              </Link>
              <Link href="/tablet-repair" className="fast-card">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                <span>Tablet Repair</span>
              </Link>
              <Link href="/laptop-repair" className="fast-card">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M2 21h20"></path>
                </svg>
                <span>Laptop Repair</span>
              </Link>
              <Link href="/pc-repair" className="fast-card">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="2" width="16" height="12" rx="2" ry="2"></rect>
                  <line x1="12" y1="14" x2="12" y2="22"></line>
                  <line x1="8" y1="22" x2="16" y2="22"></line>
                </svg>
                <span>PC & Desktop</span>
              </Link>
              <Link href="/digital-growth" className="fast-card">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <line x1="2" y1="8" x2="22" y2="8"></line>
                </svg>
                <span>Website Build</span>
              </Link>
              <Link href="/digital-growth" className="fast-card">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
                <span>Meta Ads</span>
              </Link>
            </div>
            <a href={SITE.bookingUrl} className="button button--teal fast-booking">Book Consultation</a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <p className="section-label">Why customers choose us</p>
          <div className="proof-ledger">
            <div className="proof-stat"><strong>2</strong><span>days max for repairs, we will order parts if needed</span></div>
            <div className="proof-stat"><strong>90</strong><span>day labor warranty on every repair</span></div>
            <div className="proof-stat"><strong>5</strong><span>device types repaired</span></div>
            <div className="proof-stat"><strong>$0</strong><span>extra charge if we can&apos;t fix it</span></div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell">
          <SectionHeader question="What devices do we repair?" answer="From cracked phone screens to slow PCs and broken laptop keyboards — we repair all major device types with honest diagnostics and clear upfront pricing." />
          <div className="model-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <article className="model-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/repair/iphone/istockphoto-1183957088-612x612.jpg" alt="Phone repair" fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} />
              </div>
              <h3>Phone Repair</h3>
              <p>iPhone and Android screen replacements, battery swaps, charging ports, cameras, and water damage assessment.</p>
              <Link className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="/phone-repair">Phone repair</Link>
            </article>
            <article className="model-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/repair/ipad/istockphoto-508465306-612x612.jpg" alt="Tablet repair" fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} />
              </div>
              <h3>Tablet Repair</h3>
              <p>Cracked screens, dead batteries, charging ports, and software issues for iPads and Android tablets.</p>
              <Link className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="/tablet-repair">Tablet repair</Link>
            </article>
            <article className="model-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/repair/windows-pc/wrench-and-screwdriver-on-the-computer-keyboard-it-service-support-free-photo.jpg" alt="Computer repair" fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} />
              </div>
              <h3>Computer Repair</h3>
              <p>Screens, keyboards, batteries, storage upgrades, virus removal, and OS reinstalls for all laptop and PC brands.</p>
              <Link className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="/laptop-repair">Laptop repair</Link>
            </article>
            <article className="model-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/stock/business-website-discovery.webp" alt="Websites and Ads" fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} />
              </div>
              <h3>Digital Growth</h3>
              <p>High-converting website development, Meta ads management, and virtual assistance for your business.</p>
              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', flexDirection: 'column' }}>
                <Link className="button button--teal" style={{ width: '100%' }} href="/digital-growth">Explore Digital Growth</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader question="All repair services and pricing" answer="Every repair starts with a flat diagnostic fee that is credited toward the work. No surprise charges." />
          <div className="offer-list" id="services">
            {offers.map((service) => (
              <Link className="offer-row" href={`/${service.key}`} key={service.key}>
                <div><h3>{service.name}</h3><p>{service.summary}</p></div><span className="offer-price"><strong>{service.price}</strong><span>{service.cadence}</span></span><span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell">
          <SectionHeader question="Proof of work — websites and ads we&apos;ve built" answer={`Browse ${websitePreviews.length} live website previews and ${adDesigns.length} ad designs. We build great things for clients across all industries.`} />
          <PortfolioTabs websites={websitePreviews} ads={adDesigns} initialTab="websites" />
          <p className="portfolio-work-link"><Link className="text-link" href="/work">Open the dedicated Work page →</Link></p>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader question="Real campaign results from Meta ads we&apos;ve managed" answer="These are historical campaign snapshots — not forecasts. Open any row to inspect the screenshot." />
          <ResultInsights results={[adResults[1], adResults[4], adResults[5]]} />
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-shell">
          <p className="eyebrow">Georgia service area</p>
          <h2 style={{maxWidth:820}}>Repair service in Atlanta, Gwinnett, Athens &amp; everywhere in between.</h2>
          <p className="lede" style={{marginBottom:40}}>Mobile and virtual device repair across Atlanta, Gwinnett County, Athens, and surrounding North Georgia communities.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(160px, 1fr))', gap:'1px', background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.08)'}}>
            {[
              'Atlanta','Stone Mountain','Duluth','Lawrenceville',
              'Gwinnett County','Athens','Decatur','Norcross',
              'Tucker','Lilburn','Snellville','Suwanee',
              'Johns Creek','Buford','Marietta','Conyers',
              'Roswell','Alpharetta','Kennesaw','Smyrna'
            ].map((city) => (
              <div key={city} style={{padding:'16px 20px', background:'rgba(255,255,255,.03)', fontSize:14, fontWeight:700, color:'#b8c4c1'}}>
                📍 {city}, GA
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-dark">{/* spacer between */}</section>

      <section className="section section-paper">
        <div className="section-shell split-layout">
          <div><p className="eyebrow">Founder-led repairs</p><h2>Who runs ElectronicReboot?</h2><p>Christopher &ldquo;StackmodeChris&rdquo; Robinson combines hands-on device repair expertise with a background in web development and digital marketing. ElectronicReboot&apos;s job is to fix your device fast, diagnose honestly, and never charge for work that wasn&apos;t needed.</p><PrimaryLink href="/about">About ElectronicReboot</PrimaryLink></div>
          <div className="faq-column"><h2>What do customers ask?</h2><FaqList faqs={homeFaqs} /></div>
        </div>
      </section>

      <section className="final-cta section-dark"><div className="section-shell"><h2>Ready to get your device repaired?</h2><p>Call us, book a drop-off, or come in anytime. Repairs are finished in max 2 days, and we&apos;ll order parts if needed. Virtual appointments from $70, Mobile repairs from $100.</p><PrimaryLink href={SITE.phoneHref}>Call {SITE.phoneDisplay}</PrimaryLink></div></section>
    </>
  );
}
