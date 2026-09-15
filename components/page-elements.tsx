import Link from "next/link";
import { ArrowIcon } from "@/components/brand-mark";
import { SITE } from "@/lib/site";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionHeader({
  question,
  answer,
  id
}: {
  question: string;
  answer?: string;
  id?: string;
}) {
  return (
    <div className="section-header" id={id}>
      <h2>{question}</h2>
      {answer ? <p>{answer}</p> : null}
    </div>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a className="button button--coral" href={href} target="_blank" rel="noreferrer">
        {children}<ArrowIcon />
      </a>
    );
  }
  return <Link className="button button--coral" href={href}>{children}<ArrowIcon /></Link>;
}

export function BookCta({ title = "Ready to build your visibility system?", body = "Bring the offer, proof, and real business details. CEOTurbo will map the clearest next move." }: { title?: string; body?: string }) {
  return (
    <section className="book-cta">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="book-cta-actions">
        <PrimaryLink href={SITE.bookingUrl}>Book my visibility call</PrimaryLink>
        <a className="text-link-on-dark" href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <details key={faq.question} open={index === 0}>
          <summary>
            <span>{faq.question}</span>
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
