import Image from "next/image";
import { Breadcrumbs, FaqList, PrimaryLink, SectionHeader } from "@/components/page-elements";
import { JsonLd } from "@/components/json-ld";
import { SERVICES, SITE } from "@/lib/site";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

const service = SERVICES["desktop-repair"];

export const metadata = buildMetadata({
  title: "Desktop Computer Repair | All-in-One & Tower — ElectronicReboot",
  description: "Expert desktop computer repair for towers, all-in-ones, and workstations. Power failures, display issues, motherboard and component replacement. $49 diagnostic, 90-day warranty.",
  path: "/desktop-repair",
  image: "/brand/electronicreboot-og.jpg",
  imageAlt: "Desktop computer repair — tower and all-in-one diagnostics",
});

export default function DesktopRepairPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Desktop Repair", path: "/desktop-repair" }]), faqSchema(service.faqs)]} />

      <section className="service-hero section-dark">
        <div className="section-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Desktop Repair" }]} />
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">{service.eyebrow} · fixed diagnostic fee</p>
              <h1>Desktop Computer Repair — Component-Level Diagnostics.</h1>
              <p className="lede">{service.answer}</p>
              <div className="price-lockup"><strong>{service.price}</strong><span>{service.cadence}</span></div>
              <PrimaryLink href={SITE.phoneHref}>Call to book your repair</PrimaryLink>
            </div>
            <div className="service-image-wrap">
              <Image
                src="/images/repair/windows-pc/gettyimages-2198212367-612x612.jpg"
                alt="Desktop computer repair technician performing a hardware diagnostic"
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
            <SectionHeader question="How does the desktop repair process work?" answer={service.summary} />
            <ol className="process-list">
              {service.process.map((step, index) => <li key={step.title}><b>0{index + 1}</b><span><strong>{step.title}</strong><br />{step.body}</span></li>)}
            </ol>
          </div>
          <aside className="inclusion-sheet">
            <h2>What does desktop repair include?</h2>
            <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
            <div><strong>Not included</strong><p>{service.exclusions.join(" · ")}</p></div>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader question="Desktop components we diagnose and replace" answer="From power supply and motherboard failures to GPU and storage upgrades — we test at the component level before quoting." />
          <div className="stock-media-grid">
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/windows-pc/installing-a-cpu-fan-on-a-computer-motherboard-it-service-support-free-photo.jpg"
                alt="Installing a CPU fan on a desktop computer motherboard"
                width={600}
                height={400}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/windows-pc/HP-22-AIO-Intel-N200-8GB-128UFS-NT-Wireless-KB-M-Black_dac7f951-2c31-40c4-85cc-9fd19b0ca449.2bf131e1ea82beb0c5182459b2ebc405.webp"
                alt="HP all-in-one desktop computer — a common desktop repair model"
                width={400}
                height={300}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell narrow">
          <SectionHeader question="What do desktop repair customers ask?" />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Desktop not turning on? Running slow? Let&apos;s fix it.</h2>
          <p>Drop it off or call us. Component-level diagnostic, flat fee, 90-day labor warranty.</p>
          <PrimaryLink href={SITE.phoneHref}>Call {SITE.phoneDisplay}</PrimaryLink>
        </div>
      </section>
    </>
  );
}
