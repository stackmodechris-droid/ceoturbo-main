import type { ServiceOffer } from "@/lib/site";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs, FaqList, PrimaryLink, SectionHeader } from "@/components/page-elements";
import { ProductDemo, type DemoKind } from "@/components/product-demo";
import { StockVisual } from "@/components/stock-visual";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import type { StockImageAsset } from "@/lib/stock-images";

export function ServicePage({
  service,
  demo,
  media = [],
  mediaQuestion,
  mediaAnswer,
}: {
  service: ServiceOffer;
  demo: DemoKind;
  media?: StockImageAsset[];
  mediaQuestion?: string;
  mediaAnswer?: string;
}) {
  const path = `/${service.key}`;
  return (
    <>
      <JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: service.navLabel, path }]), faqSchema(service.faqs)]} />
        <section className="service-hero section-dark">
          <div className="section-shell">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: service.navLabel }]} />
            <div className="service-hero-grid">
              <div>
                <p className="eyebrow">{service.eyebrow} / fixed package</p>
                <h1>{service.name}</h1>
                <p className="lede">{service.answer}</p>
                <div className="price-lockup"><strong>{service.price}</strong><span>{service.cadence}</span></div>
                <PrimaryLink href={SITE.bookingUrl}>Book this package</PrimaryLink>
              </div>
              <ProductDemo kind={demo} />
            </div>
          </div>
        </section>

        <section className="section section-paper">
          <div className="section-shell split-layout">
            <div>
              <SectionHeader question="What exactly does this package deliver?" answer={service.summary} />
              <ol className="process-list">
                {service.process.map((step, index) => <li key={step.title}><b>0{index + 1}</b><span><strong>{step.title}</strong><br />{step.body}</span></li>)}
              </ol>
            </div>
            <aside className="inclusion-sheet">
              <h2>What does the package include?</h2>
              <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              <div><strong>Not included</strong><p>{service.exclusions.join(" · ")}</p></div>
            </aside>
          </div>
        </section>

        {media.length > 0 ? (
          <section className="section section-white">
            <div className="section-shell">
              <SectionHeader question={mediaQuestion ?? "How does this physical brand asset support the next step?"} answer={mediaAnswer} />
              <div className={`stock-media-grid${media.length === 1 ? " stock-media-grid--single" : ""}`}>
                {media.map((image) => <StockVisual image={image} key={image.src} />)}
              </div>
            </div>
          </section>
        ) : null}

        <section className={`section ${media.length > 0 ? "section-paper" : "section-white"}`}>
          <div className="section-shell narrow">
            <SectionHeader question="What do business owners ask before booking?" />
            <FaqList faqs={service.faqs} />
          </div>
        </section>

        <section className="final-cta section-dark">
          <div className="section-shell"><h2>Ready to put this visibility channel to work?</h2><p>We will confirm fit, scope, timeline, and next steps before anything begins.</p><PrimaryLink href={SITE.bookingUrl}>Book your CEOTurbo call</PrimaryLink></div>
        </section>
    </>
  );
}
