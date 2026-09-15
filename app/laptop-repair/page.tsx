import Image from "next/image";
import { Breadcrumbs, FaqList, PrimaryLink, SectionHeader } from "@/components/page-elements";
import { JsonLd } from "@/components/json-ld";
import { SERVICES, SITE } from "@/lib/site";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

const service = SERVICES["laptop-repair"];

export const metadata = buildMetadata({
  title: "Laptop Repair Near Me | All Brands — ElectronicReboot",
  description: "Screen replacements, battery swaps, keyboard repairs, charging port fixes, and SSD upgrades for laptops of all brands including MacBook, Dell, HP, and Lenovo. 90-day warranty.",
  path: "/laptop-repair",
  image: "/brand/electronicreboot-og.jpg",
  imageAlt: "Laptop repair — screen, battery, keyboard, and charging port repair for all brands",
});

export default function LaptopRepairPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Laptop Repair", path: "/laptop-repair" }]), faqSchema(service.faqs)]} />

      <section className="service-hero section-dark">
        <div className="section-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Laptop Repair" }]} />
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">{service.eyebrow} · fixed diagnostic fee</p>
              <h1>Laptop Repair — Screen, Battery, Keyboard &amp; More.</h1>
              <p className="lede">{service.answer}</p>
              <div className="price-lockup"><strong>{service.price}</strong><span>{service.cadence}</span></div>
              <PrimaryLink href={SITE.phoneHref}>Call to book your repair</PrimaryLink>
            </div>
            <div className="service-image-wrap">
              <Image
                src="/images/repair/windows-pc/wrench-and-screwdriver-on-the-computer-keyboard-it-service-support-free-photo.jpg"
                alt="Tools on a laptop keyboard representing laptop repair service"
                width={600}
                height={400}
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
            <SectionHeader question="What does the laptop repair process look like?" answer={service.summary} />
            <ol className="process-list">
              {service.process.map((step, index) => <li key={step.title}><b>0{index + 1}</b><span><strong>{step.title}</strong><br />{step.body}</span></li>)}
            </ol>
          </div>
          <aside className="inclusion-sheet">
            <h2>What does laptop repair include?</h2>
            <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
            <div><strong>Not included</strong><p>{service.exclusions.join(" · ")}</p></div>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader question="Laptop repairs we perform every day" answer="Whether it's a shattered MacBook screen or a Dell that won't charge — we handle it. Most repairs are completed the same day." />
          <div className="stock-media-grid">
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/windows-pc/oTxFdXTYfU4vECRvDeDiLH-1280-80.webp"
                alt="Laptop repair and upgrade services"
                width={1280}
                height={720}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/windows-pc/windows-11-and-windows-10-operating-system-logos-are-displayed-on-laptop-screens-for.webp"
                alt="Laptops running Windows 10 and Windows 11 ready for software repair"
                width={800}
                height={450}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell narrow">
          <SectionHeader question="What do laptop repair customers ask?" />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Cracked screen? Dead battery? Let&apos;s fix it today.</h2>
          <p>Walk in or call ahead. Most laptop repairs are completed same-day with a 90-day labor warranty.</p>
          <PrimaryLink href={SITE.phoneHref}>Call {SITE.phoneDisplay}</PrimaryLink>
        </div>
      </section>
    </>
  );
}
