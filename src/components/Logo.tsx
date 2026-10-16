import { SITE } from "@/lib/site";

/** Emblème : un vase balustre à bandes dorées dans un double cercle. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="24" cy="24" r="20.4" stroke="var(--logo-accent, #c5a059)" strokeWidth=".7" />
      <path
        d="M20.4 9.5h7.2l-.5 3.2c0 2.4 4 3.9 5.9 7.8 2 4.2.8 10.3-3.4 14.4l1.1 3.6H17.3l1.1-3.6c-4.2-4.1-5.4-10.2-3.4-14.4 1.9-3.9 5.9-5.4 5.9-7.8z"
        fill="currentColor"
      />
      <path d="M16.1 24.2c5.2 2.1 10.6 2.1 15.8 0" stroke="var(--logo-accent, #c5a059)" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M17 32.2c4.3 1.5 9.7 1.5 14 0" stroke="var(--logo-accent, #c5a059)" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M20.4 9.5h7.2" stroke="var(--logo-accent, #c5a059)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Logo complet : emblème + « MAISON / Porcelaine ». */
export function Logo({ className = "" }: { className?: string }) {
  const [first, ...rest] = SITE.name.split(" ");
  return (
    <span className={`logo ${className}`.trim()}>
      <LogoMark className="logo__mark" />
      <span className="logo__text">
        <span className="logo__top">{first}</span>
        <span className="logo__name">{rest.join(" ")}</span>
      </span>
    </span>
  );
}
