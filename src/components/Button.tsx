import Link from "next/link";
import type { ReactNode } from "react";
import { ESTIMATION_HREF } from "@/lib/site";

type Variant = "primary" | "ghost" | "brass";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn btn--${variant} ${className}`.trim()}>
      <span>{children}</span>
      <svg className="btn__arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export function EstimateButton({ variant = "primary", label = "Estimer ma porcelaine", className }: { variant?: Variant; label?: string; className?: string }) {
  return (
    <Button href={ESTIMATION_HREF} variant={variant} className={className}>
      {label}
    </Button>
  );
}
