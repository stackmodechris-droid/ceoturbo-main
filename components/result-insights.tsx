"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { ResultAsset } from "@/lib/assets";

export function ResultInsights({ results, limit }: { results: ResultAsset[]; limit?: number }) {
  const shown = limit ? results.slice(0, limit) : results;
  return (
    <div className="results-ledger">
      {shown.map((result, index) => (
        <motion.a
          href={result.src}
          target="_blank"
          rel="noreferrer"
          className="result-row"
          key={result.src}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: Math.min(index * 0.07, 0.3) }}
        >
          <span className="result-thumb">
            <Image src={result.src} alt={result.alt} width={result.width} height={result.height} sizes="96px" />
          </span>
          <span className="result-copy">
            <strong>{result.result} {result.metric.toLowerCase()}</strong>
            <span>{result.title} · {result.spend} spent</span>
          </span>
          <span className="result-cost">{result.cost}</span>
          <span className="result-open" aria-hidden="true">↗</span>
        </motion.a>
      ))}
      <p className="results-disclaimer">Historical campaign screenshots from specific client engagements. Results vary by offer, market, budget, creative, and follow-up.</p>
    </div>
  );
}
