/** URL publique : variable explicite, sinon domaine de production Vercel, sinon placeholder. */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "https://www.example.com"
).replace(/\/$/, "");

/**
 * Informations de l'entreprise — à adapter avant la mise en ligne.
 * Aucune coordonnée directe (téléphone, e-mail) n'est publiée : le contact passe par le formulaire.
 */
export const SITE = {
  name: "Maison Porcelaine",
  legalName: "Maison Porcelaine — Expertise & Rachat",
  url: SITE_URL,
  locale: "fr_FR",
  address: "Paris, France",
  area: "Toute la France, déplacement possible à domicile",
  tallyFormId: process.env.NEXT_PUBLIC_TALLY_FORM_ID || "dbWb8A",
} as const;

/** Éditeur du site (registre Insee / RNE) — utilisé par la page « Mentions légales ». */
export const LEGAL = {
  owner: "François SECULA",
  status: "Entrepreneur individuel",
  siren: "529 601 486",
  siret: "529 601 486 00010",
  vat: "FR51529601486",
  activity: "Autres commerces de détail sur éventaires et marchés",
  createdAt: "20 janvier 2011",
  address: "21 rue du Docteur Tassin, 21200 Beaune, France",
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    url: "https://vercel.com",
  },
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
