import Link from "next/link";
import Image from "next/image";
import { PrimaryLink, SectionHeader, FaqList } from "@/components/page-elements";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { ResultInsights } from "@/components/result-insights";
import { Qualifier } from "@/components/qualifier";
import { websitePreviews, adDesigns, adResults } from "@/lib/assets";
import { SERVICES, SITE, SERVICE_ORDER } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ElectronicReboot | Fast Affordable Device Repair — Atlanta, Gwinnett & Georgia",
  description: "Lowest diagnostic fee in Georgia — starting at $29, credited toward your repair. iPhone, Android, iPad, laptop, desktop & PC repair. Serving Atlanta, Duluth, Gwinnett, Athens & surrounding cities.",
  path: "/",
  image: "/brand/electronicreboot-og.jpg",
  imageAlt: "ElectronicReboot — Fast Affordable Device Repair in Atlanta Georgia",
});

const homeFaqs = [
  { question: "What services does ElectronicReboot provide?", answer: "We repair iPhones, Android phones, iPads, tablets, laptops, desktops, and Windows PCs. We also build high-converting websites and manage Meta ads for businesses across Georgia." },
  { question: "How long do repairs take?", answer: "Most phone and tablet screen replacements take 30–60 minutes. Laptop and PC repairs are usually same-day or next-day. We give you an honest time estimate when you drop off." },
  { question: "Do you offer a warranty on repairs?", answer: "Yes. Every repair comes with a 90-day labor warranty. If the same issue returns within 90 days of the repair, we fix it at no additional labor charge." },
  { question: "Do you charge for a diagnostic?", answer: "Yes — a flat $29 for phones and tablets, $35 for computers. That fee is credited toward any approved repair, so you never pay it twice. We undercut every major chain in the Atlanta area." },
  { question: "Where do you serve in Georgia?", answer: "We currently serve Atlanta, Stone Mountain, Duluth, Lawrenceville, Gwinnett County, Athens, Decatur, Norcross, Tucker, Lilburn, Snellville, Suwanee, Johns Creek, Buford, Marietta and surrounding cities. Mobile service is expanding to Florida and North Carolina." },
];

export default function HomePage() {
  const offers = SERVICE_ORDER.map((key) => SERVICES[key]);
  return (
    <>
      <section className="hero section-dark">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Fast tech repair & digital growth</p>
            <h1>Your device is broken.<em>We fix it fast.</em></h1>
            <p className="lede">ElectronicReboot repairs phones, tablets, laptops, desktops, and Windows PCs. We also build high-converting websites and run Meta ads. <strong style={{color:"var(--teal)"}}>Lowest diagnostic fee in Georgia</strong> — starting at $29, credited toward your repair. Serving Atlanta, Duluth, Gwinnett, Athens &amp; all of Georgia.</p>
            <div className="hero-actions"><PrimaryLink href={SITE.bookingUrl}>Book Consultation</PrimaryLink><PrimaryLink href="#services">See all repairs</PrimaryLink><a className="text-link" href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a></div>
            <p className="hero-note">Starting at $29 diagnostic · credited toward repair · 90-day labor warranty</p>
          </div>
          <div className="hero-visual-wrap">
            <Image
              src="/Images/repair/windows-pc/installing-a-cpu-fan-on-a-computer-motherboard-free-photo.jpg"
              alt="Technician installing a CPU fan on a computer motherboard"
              width={600}
              height={400}
              sizes="(max-width: 820px) 92vw, 520px"
              priority
              style={{ borderRadius: "12px", objectFit: "cover", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <p className="section-label">Why customers choose us</p>
          <div className="proof-ledger">
            <div className="proof-stat"><strong>30–60</strong><span>min for most phone repairs</span></div>
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
            <article className="model-column"><span>Phones</span><h3>Screen to battery.</h3><p>iPhone and Android screen replacements, battery swaps, charging ports, cameras, and water damage assessment.</p><Link className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="/phone-repair">Phone repair</Link></article>
            <article className="model-column"><span>Tablets</span><h3>iPad to Galaxy Tab.</h3><p>Cracked screens, dead batteries, charging ports, and software issues for iPads and Android tablets.</p><Link className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="/tablet-repair">Tablet repair</Link></article>
            <article className="model-column"><span>Computers</span><h3>Laptop to desktop.</h3><p>Screens, keyboards, batteries, storage upgrades, virus removal, and OS reinstalls for all laptop and PC brands.</p><Link className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="/laptop-repair">Laptop repair</Link></article>
            <article className="model-column"><span>Digital Growth</span><h3>Websites & Ads.</h3><p>High-converting website development, Meta ads management, and virtual assistance for your business.</p><Link className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="/seo-websites">Explore digital services</Link></article>
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
          <p className="lede" style={{marginBottom:40}}>We serve the entire metro Atlanta area and beyond. Mobile service expanding to Florida and North Carolina.</p>
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

      <section className="final-cta section-dark"><div className="section-shell"><h2>Ready to get your device repaired?</h2><p>Call us, book a drop-off, or come in anytime. Most phone repairs done in 30–60 min. Lowest diagnostic fee in Georgia — starting at $29.</p><PrimaryLink href={SITE.phoneHref}>Call {SITE.phoneDisplay}</PrimaryLink></div></section>
    </>
  );
}
