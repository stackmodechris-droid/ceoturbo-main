import Image from "next/image";
import { Breadcrumbs, FaqList, PrimaryLink, SectionHeader } from "@/components/page-elements";
import { JsonLd } from "@/components/json-ld";
import { SERVICES, SITE } from "@/lib/site";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

const service = SERVICES["pc-repair"];

export const metadata = buildMetadata({
  title: "PC Repair Near Me | Fast Windows PC Repair — ElectronicReboot",
  description: "Expert Windows PC repair — virus removal, hardware upgrades, OS reinstalls, and diagnostics. Flat $49 diagnostic fee credited toward your repair. 90-day labor warranty.",
  path: "/pc-repair",
  image: "/brand/electronicreboot-og.jpg",
  imageAlt: "PC repair technician working on a computer motherboard",
});

export default function PcRepairPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "PC Repair", path: "/pc-repair" }]), faqSchema(service.faqs)]} />

      <section className="service-hero section-dark">
        <div className="section-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "PC Repair" }]} />
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">{service.eyebrow} · fixed diagnostic fee</p>
              <h1>PC Repair — Fast, Honest, Guaranteed.</h1>
              <p className="lede">{service.answer}</p>
              <div className="price-lockup"><strong>{service.price}</strong><span>{service.cadence}</span></div>
              <div className="hero-actions">
                <PrimaryLink href={SITE.phoneHref}>Call / Text {SITE.phoneDisplay}</PrimaryLink>
                <a className="button" href={SITE.bookingUrl}>Book a Repair</a>
              </div>
            </div>
            <div className="service-image-wrap">
              <Image
                src="/images/repair/windows-pc/installing-a-cpu-fan-on-a-computer-motherboard-free-photo.jpg"
                alt="Technician installing a CPU fan on a computer motherboard during a PC repair"
                width={580}
                height={380}
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
            <SectionHeader question="What does the PC repair process look like?" answer={service.summary} />
            <ol className="process-list">
              {service.process.map((step, index) => <li key={step.title}><b>0{index + 1}</b><span><strong>{step.title}</strong><br />{step.body}</span></li>)}
            </ol>
          </div>
          <aside className="inclusion-sheet">
            <h2>What does a PC repair include?</h2>
            <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
            <div><strong>Not included</strong><p>{service.exclusions.join(" · ")}</p></div>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader question="Real PC repair — hardware we work on" answer="From motherboard diagnostics to SSD upgrades and GPU replacements — we work on every component inside your PC." />
          <div className="stock-media-grid">
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/windows-pc/wrench-and-screwdriver-on-the-computer-keyboard-it-service-support-free-photo.jpg"
                alt="Tools on a computer keyboard representing PC repair and IT service support"
                width={600}
                height={400}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/windows-pc/gettyimages-2198212367-612x612.jpg"
                alt="PC repair technician diagnosing a desktop computer"
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/windows-pc/windows-11-and-windows-10-operating-system-logos-are-displayed-on-laptop-screens-for.webp"
                alt="Windows 11 and Windows 10 operating systems shown on laptop screens"
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
          <SectionHeader question="What do PC repair customers ask?" />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Ready to get your PC running again?</h2>
          <p>Call now or book a drop-off. Flat diagnostic fee. 90-day labor warranty. No surprise charges.</p>
          <PrimaryLink href={SITE.phoneHref}>Call {SITE.phoneDisplay}</PrimaryLink>
        </div>
      </section>
    </>
  );
}
