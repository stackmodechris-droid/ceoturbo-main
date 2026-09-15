import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { PrimaryLink, FaqList } from "@/components/page-elements";

export const metadata: Metadata = buildMetadata({
  title: "High-Converting SEO Websites | ElectronicReboot",
  description: "Get a fast, modern, high-converting website built for your service business in Georgia. SEO optimized, mobile-ready, and designed to generate leads.",
  path: "/seo-websites",
});

const faqs = [
  { question: "How long does it take to build a website?", answer: "Most local business websites are designed, developed, and launched in 2 to 4 weeks depending on the complexity and how quickly we get content from you." },
  { question: "Do you provide hosting and maintenance?", answer: "Yes. We offer fully managed hosting, security updates, and monthly maintenance packages so you never have to worry about your site going down." },
  { question: "Will my website rank on Google?", answer: "We build all our websites with on-page SEO best practices—fast loading speeds, proper schema markup, mobile responsiveness, and clean code. This provides a strong foundation for ranking in local search." },
  { question: "What if I need updates later?", answer: "You can either use our monthly maintenance plan where we handle all updates, or we can provide you with a simple CMS (Content Management System) so you can make basic text and image changes yourself." },
];

export default function SeoWebsitesPage() {
  return (
    <>
      <section className="section section-dark hero" id="hero">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Digital Growth</p>
            <h1>Websites that turn <em>clicks into clients.</em></h1>
            <p className="lede">Stop losing customers to competitors with better websites. ElectronicReboot builds lightning-fast, SEO-optimized websites designed specifically for service businesses in Atlanta, Gwinnett, and all of Georgia.</p>
            <div className="hero-actions">
              <PrimaryLink href={SITE.bookingUrl}>Book a Consultation</PrimaryLink>
              <a className="text-link" href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>
            </div>
          </div>
          <div className="hero-visual-wrap" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: 'var(--ink-2)', padding: 30, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ margin: '0 0 10px', color: 'var(--teal)' }}>Speed &amp; Performance</h3>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: 15 }}>Built with modern frameworks to ensure sub-second page loads and perfect Core Web Vitals scores.</p>
            </div>
            <div style={{ background: 'var(--ink-2)', padding: 30, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ margin: '0 0 10px', color: 'var(--teal)' }}>Local SEO Built-In</h3>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: 15 }}>Proper schema markup, geographic targeting, and clean semantic HTML so Google knows exactly who and where you serve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell split-layout">
          <div>
            <p className="eyebrow">The ElectronicReboot Difference</p>
            <h2>Not just another WordPress template.</h2>
            <p>Most web agencies sell you a bloated, slow WordPress template that breaks after a few months. We hand-code our websites using the same technology that powers Fortune 500 companies.</p>
            <p>The result? A website that loads instantly, is highly secure, and converts visitors into paying customers at a much higher rate.</p>
          </div>
          <div className="faq-column">
            <h2>Frequently Asked Questions</h2>
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Ready to upgrade your web presence?</h2>
          <p>Book a free discovery call with us. We&apos;ll look at your current site, your competitors, and show you exactly how we can help you dominate your local market.</p>
          <PrimaryLink href={SITE.bookingUrl}>Book Your Free Call</PrimaryLink>
        </div>
      </section>
    </>
  );
}
