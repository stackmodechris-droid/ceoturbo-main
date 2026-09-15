import type { Metadata } from "next";
import { LeadIntake } from "@/components/lead-intake";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find the Right CEOTurbo Service",
  description: "Choose the visibility services your business needs, then book a focused CEOTurbo call or call directly.",
  alternates: { canonical: "/form" },
  robots: { index: false, follow: true },
};

export default function FormPage() {
  return (
    <div className="campaign-page">
      <section className="campaign-intro">
        <p>CEOTurbo business intake</p>
        <h1>Tell us what your business needs.</h1>
        <span>Get a clear next step in under 60 seconds. No long contact form and no spam.</span>
      </section>

      <LeadIntake />

      <section className="campaign-assurance" aria-label="What to expect from CEOTurbo">
        <div><strong>Fixed packages</strong><span>See published starting prices before the call.</span></div>
        <div><strong>Client-owned accounts</strong><span>Your website and platform access stay under your control.</span></div>
        <div><strong>No outcome guarantees</strong><span>We confirm fit honestly instead of promising rankings or leads.</span></div>
      </section>

      <p className="campaign-help">Prefer to talk now? <a href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>.</p>
    </div>
  );
}
