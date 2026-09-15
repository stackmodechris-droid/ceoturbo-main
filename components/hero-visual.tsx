"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { adResults, websitePreviews } from "@/lib/assets";

const siteProof = websitePreviews[0];
const adProof = adResults[1];

export function HeroVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="hero-proof" aria-label="Selected CEOTurbo website and Meta campaign proof">
      <motion.div
        className="hero-proof__site"
        initial={reduced ? false : { opacity: 0, y: 22, rotate: -1.5 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="hero-proof__label">Search-ready websites</span>
        <Image
          src={siteProof.src}
          alt={siteProof.alt}
          width={siteProof.width}
          height={siteProof.height}
          sizes="(max-width: 820px) 86vw, 38vw"
          priority
        />
      </motion.div>

      <motion.div
        className="hero-proof__result"
        initial={reduced ? false : { opacity: 0, x: 34, y: 16, rotate: 3 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 3 }}
        transition={{ duration: 0.65, delay: reduced ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="hero-proof__label">Meta campaign evidence</span>
        <Image
          src={adProof.src}
          alt={adProof.alt}
          width={adProof.width}
          height={adProof.height}
          sizes="(max-width: 820px) 48vw, 20vw"
        />
      </motion.div>

      <motion.div
        className="hero-proof__signal"
        initial={reduced ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: reduced ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>Search</span><i aria-hidden="true" /><span>Social</span><i aria-hidden="true" /><span>Street</span>
      </motion.div>
    </div>
  );
}
