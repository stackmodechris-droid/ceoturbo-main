"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo, CalendarIcon, PhoneIcon } from "@/components/brand-mark";
import { NAV_ITEMS, SITE } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const campaignPage = pathname === "/form";

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const focusFrame = window.requestAnimationFrame(() => mobileNavRef.current?.querySelector<HTMLElement>("a[href]")?.focus());
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !mobileNavRef.current) return;
      const links = Array.from(mobileNavRef.current.querySelectorAll<HTMLElement>("a[href]"));
      const focusable = [menuButton, ...links].filter((item): item is HTMLElement => Boolean(item));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
      menuButton?.focus();
    };
  }, [menuOpen]);

  if (campaignPage) {
    return (
      <div className="campaign-frame">
        <a className="skip-link" href="#main-content">Skip to intake</a>
        <header className="campaign-header">
          <Link href="/" className="rail-brand" aria-label="ElectronicReboot home">
            <BrandLogo className="mobile-logo" variant="nav" priority />
          </Link>
          <a href={SITE.phoneHref} aria-label={`Call ElectronicReboot at ${SITE.phoneDisplay}`}><PhoneIcon /><span>Call {SITE.phoneDisplay}</span></a>
        </header>
        <main id="main-content">{children}</main>
      </div>
    );
  }

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <aside className="desktop-rail" aria-label="Primary navigation">
        <Link href="/" className="rail-brand" aria-label="ElectronicReboot home">
          <BrandLogo className="rail-logo" variant="nav" priority />
        </Link>

        <p className="rail-kicker">Phone. Tablet. Computer. Repaired.</p>

        <nav className="rail-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rail-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {active ? (
                  <motion.span
                    layoutId="active-rail"
                    className="rail-active"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="rail-bottom">
          <a href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>
          <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book a repair call</a>
          <p>Fast turnarounds. Honest diagnostics.</p>
        </div>
      </aside>

      <header className="mobile-header">
        <Link href="/" className="rail-brand" aria-label="ElectronicReboot home">
          <BrandLogo className="mobile-logo" variant="nav" priority />
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-menu-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button type="button" tabIndex={-1} className="drawer-backdrop" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />
            <motion.nav
              ref={mobileNavRef}
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="mobile-drawer"
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ type: "spring", stiffness: 360, damping: 32 }}
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                );
              })}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="site-main" id="main-content">
        {children}
        <SiteFooter />
      </main>

      <div className="action-dock" aria-label="Contact ElectronicReboot">
        <a className="dock-call" href={SITE.phoneHref}>
          <PhoneIcon />
          <span>Call</span>
        </a>
        <a className="dock-book" href={SITE.bookingUrl} target="_blank" rel="noreferrer">
          <CalendarIcon />
          <span>Book</span>
        </a>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
      <div className="footer-grid">
        <div>
          <div className="footer-brand"><BrandLogo className="footer-logo" variant="footer" /></div>
          <p>Fast, reliable device repair.<br />Phone, tablet, laptop, desktop &amp; PC.</p>
        </div>
        <div className="footer-column">
          <strong>Repairs</strong>
          <Link href="/phone-repair">Phone Repair</Link>
          <Link href="/tablet-repair">Tablet Repair</Link>
          <Link href="/laptop-repair">Laptop Repair</Link>
          <Link href="/desktop-repair">Desktop Repair</Link>
          <Link href="/pc-repair">PC Repair</Link>
        </div>
        <div className="footer-column">
          <strong>Company</strong>
          <Link href="/work">Work</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <strong>Policies</strong>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/accessibility">Accessibility</Link>
        </div>
        <div className="footer-column">
          <strong>Contact</strong>
          <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book a repair call</a>
        </div>
      </div>
      <div className="footer-note">
        <span>© {new Date().getFullYear()} ElectronicReboot</span>
        <span> · Custom Next.js · Fast turnarounds · Honest diagnostics</span>
      </div>
      </div>
    </footer>
  );
}
