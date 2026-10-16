/** URL publique : variable explicite, sinon domaine de production Vercel, sinon placeholder. */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "https://www.example.com"
).replace(/\/$/, "");

/**
 * Informations de l'entreprise — à adapter avant la mise en ligne.
 * Toutes les coordonnées ci-dessous sont des valeurs provisoires.
 */
export const SITE = {
  name: "Maison Porcelaine",
  legalName: "Maison Porcelaine — Expertise & Rachat",
  url: SITE_URL,
  locale: "fr_FR",
  email: "contact@example.com",
  phone: "01 00 00 00 00",
  phoneHref: "+33100000000",
  address: "Paris, France",
  hours: "Du lundi au samedi, 9h – 19h",
  area: "Toute la France, déplacement possible à domicile",
  tallyFormId: process.env.NEXT_PUBLIC_TALLY_FORM_ID ?? "",
} as const;

export const ESTIMATION_HREF = "/estimation#formulaire";

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/expertises", label: "Nos expertises" },
  { href: "/estimation", label: "Rachat & estimation" },
  { href: "/a-propos", label: "À propos" },
] as const;

/** Le pied de page garde l'accès au contact, absent du menu principal (le CTA d'estimation y suffit). */
export const FOOTER_NAV = [...NAV, { href: "/contact", label: "Contact & FAQ" }] as const;
