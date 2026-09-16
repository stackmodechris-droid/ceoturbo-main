"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CalendarIcon, PhoneIcon } from "@/components/brand-mark";
import { NAV_ITEMS, SITE } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const campaignPage = pathname === "/form";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <Link href="/" className="top-brand" aria-label="ElectronicReboot home">
            <Image src="/brand/electronicreboot-lockup.png" alt="ElectronicReboot" width={492} height={120} priority style={{ width: 140, height: "auto" }} />
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

      {/* Desktop top header */}
      <header className={`top-header${scrolled ? " top-header--scrolled" : ""}`} aria-label="Primary navigation">
        <div className="top-header-inner">
          <Link href="/" className="top-brand" aria-label="ElectronicReboot home">
            <Image
              src="/brand/electronicreboot-lockup.png"
              alt="ElectronicReboot"
              width={492}
              height={120}
              priority
              style={{ width: 150, height: "auto", objectFit: "contain" }}
            />
          </Link>

          <nav className="top-nav" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`top-nav-link${active ? " is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="active-top-nav"
                      className="top-nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="top-header-ctas">
            <a className="top-cta-call" href={SITE.phoneHref}><PhoneIcon /> {SITE.phoneDisplay}</a>
            <a className="top-cta-book" href={SITE.bookingUrl} target="_blank" rel="noreferrer"><CalendarIcon /> Book</a>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={menuOpen ? "menu-x" : ""} />
            <span className={menuOpen ? "menu-x menu-x--2" : ""} />
          </button>
        </div>
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
              <div className="mobile-drawer-ctas">
                <a href={SITE.phoneHref}><PhoneIcon /> Call {SITE.phoneDisplay}</a>
                <a href={SITE.bookingUrl} target="_blank" rel="noreferrer"><CalendarIcon /> Book a Repair</a>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="site-main" id="main-content">
        {children}
        <SiteFooter />
      </main>

      {/* Mobile sticky action dock */}
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
            <div className="footer-brand">
              <Image src="/brand/electronicreboot-lockup.png" alt="ElectronicReboot" width={492} height={120} style={{ width: 170, height: "auto", objectFit: "contain" }} />
            </div>
            <p>Fast, affordable device repair.<br />Phone, tablet, laptop, desktop &amp; PC.</p>
            <p className="footer-area">Serving Atlanta · Stone Mountain · Duluth · Gwinnett · Athens · and all of Georgia</p>
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
          <span> · Lowest diagnostic fee in Georgia · 90-day labor warranty · Honest repairs</span>
        </div>
      </div>
    </footer>
  );
}
