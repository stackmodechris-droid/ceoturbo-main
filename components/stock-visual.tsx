import Image from "next/image";
import type { StockImageAsset } from "@/lib/stock-images";

export function StockVisual({
  image,
  priority = false,
  className = "",
}: {
  image: StockImageAsset;
  priority?: boolean;
  className?: string;
}) {
  const isFeature = className.includes("stock-visual--feature");
  const isMetaHero = className.includes("stock-visual--meta-hero");
  const isHighFidelity = isFeature || className.includes("stock-visual--hd");
  const sizes = isMetaHero
    ? "(max-width: 700px) 72vw, (max-width: 1100px) 320px, 360px"
    : isFeature
    ? "(max-width: 820px) calc(100vw - 28px), (max-width: 1200px) 92vw, 960px"
    : "(max-width: 820px) 92vw, (max-width: 1200px) 52vw, 560px";

  return (
    <figure className={`stock-visual stock-visual--${image.kind}${className ? ` ${className}` : ""}`}>
      <div className="stock-visual__stage" style={{ aspectRatio: `${image.width}/${image.height}` }}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          quality={isHighFidelity ? 88 : undefined}
          priority={priority}
        />
      </div>
      <figcaption>
        <strong>{image.title}</strong>
        <span>{image.caption}</span>
      </figcaption>
    </figure>
  );
}
