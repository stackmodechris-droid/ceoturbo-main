import Image from "next/image";

export type BrandLogoVariant = "nav" | "footer" | "product" | "mark";

export function BrandLogo({
  className = "",
  priority = false,
  variant = "nav",
}: {
  className?: string;
  priority?: boolean;
  variant?: BrandLogoVariant;
}) {
  const markOnly = variant === "mark";
  return (
    <Image
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
      src="/brand/logo.png"
      alt="ElectronicReboot"
      width={markOnly ? 197 : 492}
      height={markOnly ? 120 : 120}
      priority={priority}
      sizes={variant === "nav" ? "(max-width: 820px) 150px, 196px" : "210px"}
    />
  );
}

export function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.2 3.5 10 8l-2.1 2.1c1.2 2.5 3.4 4.7 5.9 5.9l2.1-2.1 4.6 2.8-.7 3.2c-.2.8-.9 1.4-1.8 1.4C9.6 20.8 3.2 14.4 2.7 6c0-.9.6-1.6 1.4-1.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4M3 10h18M8 14h3M8 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
