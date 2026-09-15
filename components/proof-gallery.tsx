"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import type { ProofAsset } from "@/lib/assets";

export function ProofGallery({
  items,
  label,
  compact = false,
}: {
  items: ProofAsset[];
  label: string;
  compact?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActive(null);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((current) => current === null ? null : (current + 1) % items.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((current) => current === null ? null : (current - 1 + items.length) % items.length);
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])"));
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
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [isOpen, items.length]);

  const openPreview = (index: number, event: MouseEvent<HTMLElement>) => {
    openerRef.current = event.currentTarget;
    setActive(index);
  };

  return (
    <>
      <div className={`proof-grid${compact ? " proof-grid--compact" : ""}`} aria-label={label}>
        {items.map((item, index) => (
          <figure className="proof-tile" key={item.src}>
            {item.href ? (
              <>
                <a
                  className="proof-site-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="proof-image-frame" style={{ aspectRatio: `${item.width}/${item.height}` }}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes={compact ? "(max-width: 720px) 92vw, 280px" : "(max-width: 720px) 92vw, (max-width: 1200px) 45vw, 31vw"}
                    />
                  </span>
                  <figcaption>
                    <strong>{item.title}</strong>
                    <span>Visit live website <b aria-hidden="true">↗</b></span>
                  </figcaption>
                </a>
                <button className="proof-preview-button" type="button" onClick={(event) => openPreview(index, event)} aria-label={`View full-size preview of ${item.title}`}>
                  View full-size preview
                </button>
              </>
            ) : (
              <button className="proof-preview-open" type="button" onClick={(event) => openPreview(index, event)}>
                <span className="proof-image-frame" style={{ aspectRatio: `${item.width}/${item.height}` }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes={compact ? "(max-width: 720px) 46vw, 280px" : "(max-width: 720px) 92vw, (max-width: 1200px) 45vw, 31vw"}
                  />
                </span>
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>Open full-size proof</span>
                </figcaption>
              </button>
            )}
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}
          >
            <motion.div ref={panelRef} className="lightbox-panel" initial={{ y: 24, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 16, scale: 0.98 }}>
              <button ref={closeButtonRef} className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close image viewer">Close</button>
              <div className="lightbox-image">
                <Image
                  src={items[active].src}
                  alt={items[active].alt}
                  width={items[active].width}
                  height={items[active].height}
                  sizes="94vw"
                  priority
                />
              </div>
              <div className="lightbox-caption">
                <span>{active + 1} / {items.length}</span>
                <strong id={titleId}>{items[active].title}</strong>
              </div>
              <div className="lightbox-controls">
                <button type="button" onClick={() => setActive((active - 1 + items.length) % items.length)}>Previous</button>
                <button type="button" onClick={() => setActive((active + 1) % items.length)}>Next</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
