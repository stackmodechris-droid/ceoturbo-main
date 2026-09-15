"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ProofGallery } from "@/components/proof-gallery";
import type { ProofAsset } from "@/lib/assets";

type PortfolioTab = "websites" | "ads";

export function PortfolioTabs({
  websites,
  ads,
  initialTab = "websites",
}: {
  websites: ProofAsset[];
  ads: ProofAsset[];
  initialTab?: PortfolioTab;
}) {
  const [activeTab, setActiveTab] = useState<PortfolioTab>(initialTab);
  const tabRefs = useRef<Record<PortfolioTab, HTMLButtonElement | null>>({ websites: null, ads: null });
  const tabs: PortfolioTab[] = ["websites", "ads"];

  const selectTab = (tab: PortfolioTab) => {
    setActiveTab(tab);
    tabRefs.current[tab]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = tabs.indexOf(activeTab);
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectTab(tabs[(currentIndex + 1) % tabs.length]);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectTab(tabs[(currentIndex - 1 + tabs.length) % tabs.length]);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectTab(tabs[0]);
    } else if (event.key === "End") {
      event.preventDefault();
      selectTab(tabs[tabs.length - 1]);
    }
  };

  const activeItems = activeTab === "websites" ? websites : ads;
  const activeLabel = activeTab === "websites" ? "CEOTurbo website work" : "CEOTurbo ad creative";

  return (
    <div className="portfolio-tabs">
      <div className="portfolio-tablist" role="tablist" aria-label="CEOTurbo portfolio categories">
        <button
          ref={(element) => { tabRefs.current.websites = element; }}
          id="portfolio-tab-websites"
          type="button"
          role="tab"
          aria-selected={activeTab === "websites"}
          aria-controls="portfolio-panel-websites"
          tabIndex={activeTab === "websites" ? 0 : -1}
          onClick={() => selectTab("websites")}
          onKeyDown={onKeyDown}
        >
          <span>Websites</span><strong>{websites.length}</strong>
        </button>
        <button
          ref={(element) => { tabRefs.current.ads = element; }}
          id="portfolio-tab-ads"
          type="button"
          role="tab"
          aria-selected={activeTab === "ads"}
          aria-controls="portfolio-panel-ads"
          tabIndex={activeTab === "ads" ? 0 : -1}
          onClick={() => selectTab("ads")}
          onKeyDown={onKeyDown}
        >
          <span>Ad Designs</span><strong>{ads.length}</strong>
        </button>
      </div>

      <div
        id={`portfolio-panel-${activeTab}`}
        className="portfolio-tabpanel"
        role="tabpanel"
        aria-labelledby={`portfolio-tab-${activeTab}`}
        tabIndex={0}
      >
        <p className="portfolio-tab-summary">
          {activeTab === "websites"
            ? "Every website preview opens the matching live site, with a separate full-size screenshot control."
            : "Every supplied ad design can be opened at full size without cropping."}
        </p>
        <ProofGallery items={activeItems} label={activeLabel} compact />
      </div>
    </div>
  );
}
