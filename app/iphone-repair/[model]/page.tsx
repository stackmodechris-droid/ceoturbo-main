import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs, FaqList, PrimaryLink, SectionHeader } from "@/components/page-elements";
import { JsonLd } from "@/components/json-ld";
import { SERVICES, SITE } from "@/lib/site";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";
import { IPHONE_MODELS } from "@/lib/iphone-models";
import { Metadata } from "next";

const service = SERVICES["phone-repair"];

export function generateStaticParams() {
  return IPHONE_MODELS.map((model) => ({
    model: model.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const { model } = await params;
  const modelData = IPHONE_MODELS.find((m) => m.slug === model);
  if (!modelData) return notFound();

  return buildMetadata({
    title: `${modelData.name} Repair Near Me | Screen & Battery — ElectronicReboot`,
    description: `Fast ${modelData.name} repair in Atlanta. We replace cracked screens, batteries, charging ports, and more. Walk in for a 30-60 min turnaround.`,
    path: `/iphone-repair/${modelData.slug}`,
    image: "/brand/electronicreboot-og.jpg",
    imageAlt: `${modelData.name} repair — cracked screen and battery replacement`,
  });
}

export default async function IPhoneModelRepairPage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const modelData = IPHONE_MODELS.find((m) => m.slug === model);
  if (!modelData) return notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Phone Repair", path: "/phone-repair" },
            { name: `${modelData.name} Repair`, path: `/iphone-repair/${modelData.slug}` },
          ]),
          faqSchema(service.faqs),
        ]}
      />

      <section className="service-hero section-dark">
        <div className="section-shell">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Phone Repair", href: "/phone-repair" },
              { label: modelData.name },
            ]}
          />
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">{service.eyebrow} · fixed diagnostic fee</p>
              <h1>{modelData.name} Repair — Screen & Battery Fixed Fast.</h1>
              <p className="lede">
                ElectronicReboot repairs the {modelData.name} including cracked screen and LCD replacement, battery swaps, charging port repairs, and water damage assessments. Most repairs are completed in under an hour.
              </p>
              <div className="price-lockup">
                <strong>{service.price}</strong>
                <span>{service.cadence}</span>
              </div>
              <PrimaryLink href={SITE.phoneHref}>Call to book your {modelData.name} repair</PrimaryLink>
            </div>
            <div className="service-image-wrap">
              <Image
                src="/images/repair/iphone/istockphoto-1390988889-612x612.jpg"
                alt={`${modelData.name} screen repair — replacing a cracked display`}
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
            <SectionHeader question={`How does ${modelData.name} repair work?`} answer={service.summary} />
            <ol className="process-list">
              {service.process.map((step, index) => (
                <li key={step.title}>
                  <b>0{index + 1}</b>
                  <span>
                    <strong>{step.title}</strong>
                    <br />
                    {step.body}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="inclusion-sheet">
            <h2>What does {modelData.name} repair include?</h2>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div>
              <strong>Not included</strong>
              <p>{service.exclusions.join(" · ")}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader
            question={`${modelData.name} repairs we do every day`}
            answer="From shattered screens to batteries that won't hold a charge — most repairs are done in under an hour while you wait."
          />
          <div className="stock-media-grid">
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/iphone/istockphoto-1183957088-612x612.jpg"
                alt={`${modelData.name} repair technician replacing a broken screen`}
                width={612}
                height={612}
                sizes="(max-width: 820px) 92vw, 380px"
                style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "auto" }}
              />
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/repair/iphone/istockphoto-1409158612-612x612.jpg"
                alt={`${modelData.name} repair tools and components`}
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
          <SectionHeader question={`What do ${modelData.name} owners ask?`} />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Cracked {modelData.name} screen or dead battery? We fix it in under an hour.</h2>
          <p>Walk in anytime. Most iPhone repairs take 30–60 minutes. 90-day labor warranty included.</p>
          <PrimaryLink href={SITE.phoneHref}>Call {SITE.phoneDisplay}</PrimaryLink>
        </div>
      </section>
    </>
  );
}
