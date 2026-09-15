"use client";

import { useCallback, useEffect, useState } from "react";

const LINES = [
  "export const metadata = {",
  '  title: \"Atlanta Commercial Electrician\",',
  '  description: \"Licensed electrical help for…\",',
  "  alternates: { canonical: canonicalUrl },",
  "};",
  "",
  "const serviceSchema = {",
  '  \"@type\": \"Service\",',
  '  areaServed: \"United States\",',
  "  offers: { price: 4800, priceCurrency: \"USD\" },",
  "};",
];
const RAW = LINES.join("\n");

export function CodeBlock() {
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setCount((value) => value >= LINES.length ? 0 : value + 1), count === 0 ? 450 : count >= LINES.length ? 2800 : 150);
    return () => window.clearTimeout(timer);
  }, [count]);
  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(RAW);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1300);
  }, []);

  return (
    <div className="code-window" aria-label="Animated Next.js metadata and service schema code example">
      <div className="code-toolbar">
        <span><i /> app/service/page.tsx</span>
        <button type="button" onClick={copy}>{copied ? "Copied" : "Copy code"}</button>
      </div>
      <pre aria-live="off">
        {LINES.slice(0, count).map((line, index) => (
          <span className="code-line" key={`${index}-${line}`}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            <code>{colorLine(line)}</code>
            {index === count - 1 && count < LINES.length && <i className="code-cursor" />}
          </span>
        ))}
      </pre>
    </div>
  );
}

function colorLine(line: string) {
  const parts = line.split(/(export|const|title|description|alternates|canonical|Service|areaServed|offers|price|priceCurrency|4800|United States)/g);
  return parts.map((part, index) => {
    const keyword = /^(export|const)$/.test(part);
    const key = /^(title|description|alternates|canonical|areaServed|offers|price|priceCurrency)$/.test(part);
    const value = /^(Service|4800|United States)$/.test(part);
    return <span className={keyword ? "tok-keyword" : key ? "tok-key" : value ? "tok-value" : undefined} key={index}>{part}</span>;
  });
}
