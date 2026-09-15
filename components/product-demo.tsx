"use client";

import Image from "next/image";
import { animated, config, useSpring } from "@react-spring/web";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-mark";

export type DemoKind = "shirts" | "business-cards" | "review-cards" | "yard-signs";

export function ProductDemo({ kind }: { kind: DemoKind }) {
  const [active, setActive] = useState(false);
  const [reviewQr, setReviewQr] = useState(false);
  const spring = useSpring({
    transform: active ? "translateY(-8px) rotateY(12deg) rotateZ(-1deg)" : "translateY(0px) rotateY(0deg) rotateZ(0deg)",
    config: { tension: 300, friction: 34, clamp: true },
  });
  const secondary = useSpring({
    transform: active ? "translate(26px, -22px) rotate(8deg)" : "translate(0px, 0px) rotate(0deg)",
    config: config.gentle,
  });

  return (
    <div className={`product-demo product-demo--${kind}`}>
      <div className="demo-stage">
        {kind === "shirts" && (
          <animated.div className="shirt" style={spring}>
            <span className="shirt-sleeve shirt-sleeve--left" /><span className="shirt-sleeve shirt-sleeve--right" />
            <span className="shirt-neck" />
            <span className="shirt-print"><BrandLogo className="demo-mark demo-mark--shirt" variant="product" /></span>
          </animated.div>
        )}
        {kind === "business-cards" && (
          <div className="card-stack">
            <animated.div className="print-card print-card--back" style={secondary} />
            <animated.div className="print-card print-card--front" style={spring}>
              <BrandLogo className="demo-mark demo-mark--card" variant="product" />
              <span><b>CEOTURBO</b><small>Get found. Stay remembered.</small></span>
              <Image src="/generated/ceoturbo-booking-qr.png" alt="QR code opening CEOTurbo booking page" width={74} height={74} />
            </animated.div>
          </div>
        )}
        {kind === "review-cards" && (
          <animated.div className="review-demo" style={spring}>
            <span className="scan-line" />
            <div><small>HONEST FEEDBACK</small><strong>How did we do?</strong><p>Scan to share your experience on Google.</p></div>
            <Image src="/generated/ceoturbo-booking-qr.png" alt="Demonstration QR code" width={116} height={116} />
          </animated.div>
        )}
        {kind === "yard-signs" && (
          <div className="yard-scene">
            <animated.div className="yard-sign" style={spring}>
              <BrandLogo className="demo-mark demo-mark--sign" variant="product" />
              <strong>{reviewQr ? "REVIEW US" : "BOOK TODAY"}</strong>
              <Image src="/generated/ceoturbo-booking-qr.png" alt="Demonstration QR code" width={74} height={74} />
              <small>{reviewQr ? "HONEST FEEDBACK" : "SCAN TO VISIT"}</small>
            </animated.div>
            <i /><i />
          </div>
        )}
      </div>
      <div className="demo-controls">
        {kind === "yard-signs" ? (
          <button type="button" onClick={() => { setReviewQr((value) => !value); setActive(true); window.setTimeout(() => setActive(false), 650); }}>
            Toggle {reviewQr ? "website" : "review"} QR
          </button>
        ) : (
          <button type="button" onClick={() => { setActive(true); window.setTimeout(() => setActive(false), 900); }}>
            {kind === "shirts" ? "Apply the identity" : kind === "business-cards" ? "Fan the card stack" : "Show scan path"}
          </button>
        )}
        <span>Interactive product preview</span>
      </div>
    </div>
  );
}
