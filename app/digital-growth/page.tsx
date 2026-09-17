import Link from "next/link";
import Image from "next/image";
import { PrimaryLink, SectionHeader } from "@/components/page-elements";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Growth & Marketing Services | ElectronicReboot",
  description: "High-converting website development, Meta ads management, and virtual assistance to help local businesses scale and generate more leads.",
  path: "/digital-growth",
  image: "/brand/electronicreboot-og.jpg",
  imageAlt: "Digital Growth by ElectronicReboot",
});

export default function DigitalGrowthPage() {
  return (
    <>
      <section className="hero section-dark">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Websites • Meta Ads • Virtual Assistance</p>
            <h1>Scale your local business with <em>predictable leads.</em></h1>
            <p className="lede">
              We help local service businesses stop relying on shared lead platforms. 
              Through high-converting website development and targeted Meta ads, we build systems that generate exclusive, high-quality leads for your business.
            </p>
            <div className="hero-actions">
              <PrimaryLink href="/websites">Explore Website Services</PrimaryLink>
              <Link className="button" href="/meta-ads">Explore Meta Ads</Link>
            </div>
          </div>
          <div className="hero-visual-wrap">
            <Image
              src="/images/stock/business-website-discovery.webp"
              alt="Digital Growth and Marketing"
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
            question="Our Digital Growth Services" 
            answer="We offer a focused set of services designed specifically for local businesses that want to increase their revenue." 
          />
          <div className="model-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <article className="model-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3>Website Development</h3>
              <p>
                We build blazingly fast, SEO-optimized websites that are designed to convert visitors into paying customers. 
                Our sites act as your 24/7 digital storefront, establishing trust and authority in your local market.
              </p>
              <Link className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="/websites">
                Website Development
              </Link>
            </article>
            <article className="model-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3>Meta Ads Management</h3>
              <p>
                Stop buying shared leads. We design and manage Meta (Facebook & Instagram) ad campaigns that put your offer directly in front of homeowners and local customers who need your services right now.
              </p>
              <Link className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="/meta-ads">
                Meta Ads Management
              </Link>
            </article>
            <article className="model-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3>Virtual Assistance</h3>
              <p>
                Scale your operations without the overhead. Our virtual assistants can handle customer inquiries, appointment booking, follow-ups, and administrative tasks so you can focus on the actual work.
              </p>
              <a className="button button--teal" style={{ width: '100%', marginTop: 'auto' }} href="https://calendly.com/electronic-reboot/book-your-tech-repair-or-digital-growth-consultation">
                Book a Consultation
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
