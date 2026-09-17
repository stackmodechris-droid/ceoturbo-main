import Image from "next/image";
import { Breadcrumbs, FaqList, PrimaryLink, SectionHeader } from "@/components/page-elements";
import { JsonLd } from "@/components/json-ld";
import { SERVICES, SITE } from "@/lib/site";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

const service = SERVICES["tablet-repair"];

export const metadata = buildMetadata({
  title: "Tablet Repair Near Me | iPad & Samsung Galaxy Tab — ElectronicReboot",
  description: "iPad and Samsung Galaxy Tab cracked screen replacements, battery swaps, charging port repairs, and software fixes. Fast same-day repairs. 90-day labor warranty.",
  path: "/tablet-repair",
  image: "/brand/electronicreboot-og.jpg",
  imageAlt: "Tablet repair — cracked iPad and Samsung Galaxy Tab screen replacements",
});

export default function TabletRepairPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Tablet Repair", path: "/tablet-repair" }]), faqSchema(service.faqs)]} />

      <section className="service-hero section-dark">
        <div className="section-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tablet Repair" }]} />
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">{service.eyebrow} · virtual & mobile repair</p>
              <h1>Tablet Repair — iPad &amp; Android Screen &amp; Battery Repair.</h1>
              <p className="lede">{service.answer}</p>
              <div className="price-lockup"><strong>{service.price}</strong><span>{service.cadence}</span></div>
              <PrimaryLink href={SITE.phoneHref}>Call to book your repair</PrimaryLink>
            </div>
            <div className="service-image-wrap">
              <Image
                src="/images/repair/ipad/istockphoto-513231268-612x612.jpg"
                alt="iPad screen repair — cracked tablet display replacement"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 480px"
                priority
                style={{ borderRadius: "10px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell split-layout">
          <div>
            <SectionHeader question="How does tablet repair work?" answer={service.summary} />
            <ol className="process-list">
              {service.process.map((step, index) => <li key={step.title}><b>0{index + 1}</b><span><strong>{step.title}</strong><br />{step.body}</span></li>)}
            </ol>
          </div>
          <aside className="inclusion-sheet">
            <h2>What does tablet repair include?</h2>
            <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
            <div><strong>Not included</strong><p>{service.exclusions.join(" · ")}</p></div>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader question="iPad and Samsung tablet repairs" answer="We repair all major tablet brands. From shattered iPad Pros to Samsung Galaxy Tabs with dead batteries — same-day service in most cases." />
          <div className="stock-media-grid">
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/ipad/istockphoto-508465306-612x612.jpg"
                alt="iPad repair — technician replacing a cracked tablet screen"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/samsung-tablet/istockphoto-458632153-612x612.jpg"
                alt="Samsung Galaxy Tab repair — cracked screen replacement service"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/ipad/istockphoto-510801058-612x612.jpg"
                alt="iPad screen digitizer replacement in progress"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell narrow">
          <SectionHeader question="What do tablet repair customers ask?" />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Cracked iPad or tablet screen? We fix it fast.</h2>
          <p>Most tablet screen repairs are completed same-day. Call or walk in — 90-day labor warranty included.</p>
          <PrimaryLink href={SITE.phoneHref}>Call {SITE.phoneDisplay}</PrimaryLink>
        </div>
      </section>
    </>
  );
}
