import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, FaqList, PrimaryLink, SectionHeader } from "@/components/page-elements";
import { JsonLd } from "@/components/json-ld";
import { SERVICES, SITE } from "@/lib/site";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";
import { IPHONE_MODELS } from "@/lib/iphone-models";

const service = SERVICES["phone-repair"];

export const metadata = buildMetadata({
  title: "Phone Repair Near Me | iPhone & Samsung — ElectronicReboot",
  description: "Fast iPhone and Samsung phone screen replacements, battery swaps, charging ports, cameras, and water damage repair. 30–60 min turnaround. 90-day labor warranty.",
  path: "/phone-repair",
  image: "/brand/electronicreboot-og.jpg",
  imageAlt: "Phone repair — iPhone and Samsung screen replacement and battery repair",
});

export default function PhoneRepairPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Phone Repair", path: "/phone-repair" }]), faqSchema(service.faqs)]} />

      <section className="service-hero section-dark">
        <div className="section-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Phone Repair" }]} />
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">{service.eyebrow} · fixed diagnostic fee</p>
              <h1>Phone Repair — iPhone &amp; Android Fixed Fast.</h1>
              <p className="lede">{service.answer}</p>
              <div className="price-lockup"><strong>{service.price}</strong><span>{service.cadence}</span></div>
              <PrimaryLink href={SITE.phoneHref}>Call to book your repair</PrimaryLink>
            </div>
            <div className="service-image-wrap">
              <Image
                src="/images/repair/iphone/istockphoto-1390988889-612x612.jpg"
                alt="iPhone screen repair — replacing a cracked phone display"
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
            <SectionHeader question="How does phone repair work?" answer={service.summary} />
            <ol className="process-list">
              {service.process.map((step, index) => <li key={step.title}><b>0{index + 1}</b><span><strong>{step.title}</strong><br />{step.body}</span></li>)}
            </ol>
          </div>
          <aside className="inclusion-sheet">
            <h2>What does phone repair include?</h2>
            <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
            <div><strong>Not included</strong><p>{service.exclusions.join(" · ")}</p></div>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader question="iPhone and Android phone repairs we do every day" answer="From shattered iPhone screens to Samsung batteries that won't hold a charge — most repairs are done in under an hour while you wait." />
          <div className="stock-media-grid">
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/iphone/istockphoto-1183957088-612x612.jpg"
                alt="iPhone repair technician replacing a broken phone screen"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/samsung-phone/istockphoto-1022191146-612x612.jpg"
                alt="Samsung Galaxy phone screen repair — cracked display replacement"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/iphone/istockphoto-1409158612-612x612.jpg"
                alt="Phone repair tools and components used during iPhone and Android repairs"
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
        <div className="section-shell">
          <SectionHeader question="Samsung Galaxy phone repairs" answer="We repair the full Samsung Galaxy lineup — S-series, A-series, and Note devices. Screens, batteries, cameras, and charging ports." />
          <div className="stock-media-grid">
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/samsung-phone/istockphoto-1022920462-612x612.jpg"
                alt="Samsung Galaxy phone screen replacement in progress"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/samsung-phone/istockphoto-1030127510-612x612.jpg"
                alt="Android phone repair — Samsung smartphone hardware replacement"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/samsung-phone/istockphoto-2251841076-612x612.jpg"
                alt="Mobile phone repair tools and disassembled Samsung Galaxy components"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell narrow">
          <SectionHeader question="What do phone repair customers ask?" />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell">
          <SectionHeader question="Most Common iPhone Models That We Fix" answer="Select your model below for specific details on screen and battery repair." />
          <div className="models-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {IPHONE_MODELS.map((model) => (
              <Link key={model.slug} href={`/iphone-repair/${model.slug}`} style={{ padding: '1rem', background: 'var(--color-background)', border: '1px solid var(--color-border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                {model.name} Repair
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Cracked screen or dead battery? We fix it in under an hour.</h2>
          <p>Walk in anytime. Most iPhone and Samsung repairs take 30–60 minutes. 90-day labor warranty included.</p>
          <PrimaryLink href={SITE.phoneHref}>Call {SITE.phoneDisplay}</PrimaryLink>
        </div>
      </section>
    </>
  );
}
