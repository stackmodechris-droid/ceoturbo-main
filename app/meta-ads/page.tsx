import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { PrimaryLink, FaqList } from "@/components/page-elements";

export const metadata: Metadata = buildMetadata({
  title: "Meta Ads Management | Facebook & Instagram Ads | ElectronicReboot",
  description: "Drive high-quality leads and sales with expertly managed Meta (Facebook & Instagram) ad campaigns for your local business.",
  path: "/meta-ads",
});

const faqs = [
  { question: "Do you guarantee results?", answer: "We guarantee that your ads will be put in front of the right local audience with highly tested creative and copy. While we cannot guarantee exact sales numbers, our structured testing process reliably identifies winning ads that drive ROI." },
  { question: "What is your management fee?", answer: "Our management fee depends on your ad spend and the complexity of the campaigns. We offer transparent pricing with no hidden fees and provide a clear quote during our discovery call." },
  { question: "Do I need a large budget to start?", answer: "We recommend a minimum starting ad spend of $1,000 to $1,500 per month so the algorithm has enough data to optimize properly, but we can scale up as you see results." },
  { question: "Who creates the ads?", answer: "We do! We handle everything from ad copy and creative design (using provided assets or stock media) to campaign setup, audience targeting, and ongoing optimization." },
];

export default function MetaAdsPage() {
  return (
    <>
      <section className="section section-dark hero" id="hero">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Digital Growth</p>
            <h1>Meta Ads that <em>drive real leads.</em></h1>
            <p className="lede">Stop wasting money on boosted posts. We build and manage data-driven Facebook and Instagram ad campaigns that reliably generate leads and sales for local service businesses.</p>
            <div className="hero-actions">
              <PrimaryLink href={SITE.bookingUrl}>Book a Consultation</PrimaryLink>
              <a className="text-link" href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>
            </div>
          </div>
          <div className="hero-visual-wrap" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: 'var(--ink-2)', padding: 30, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ margin: '0 0 10px', color: 'var(--teal)' }}>Hyper-Local Targeting</h3>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: 15 }}>We target the exact zip codes and demographics of your ideal customers in Georgia.</p>
            </div>
            <div style={{ background: 'var(--ink-2)', padding: 30, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ margin: '0 0 10px', color: 'var(--teal)' }}>Continuous Optimization</h3>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: 15 }}>We A/B test creatives, copy, and audiences daily to drive your cost-per-lead down over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell split-layout">
          <div>
            <p className="eyebrow">Our Ads Process</p>
            <h2>How we manage your campaigns.</h2>
            <p>Running successful Meta ads requires more than just a good picture. It requires a structured testing methodology.</p>
            <p>We test multiple angles, hooks, and creatives against each other to find the winning combination. Once we find the winners, we scale the budget to maximize your return on ad spend (ROAS).</p>
          </div>
          <div className="faq-column">
            <h2>Frequently Asked Questions</h2>
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Ready to scale your business?</h2>
          <p>Book a free discovery call. We&apos;ll audit your past campaigns (if any) and map out a strategy to get you a consistent flow of leads.</p>
          <PrimaryLink href={SITE.bookingUrl}>Book Your Free Call</PrimaryLink>
        </div>
      </section>
    </>
  );
}
