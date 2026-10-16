# Maison Porcelaine — rachat & estimation de porcelaine ancienne

Site Next.js 15 (App Router, TypeScript, CSS pur) : pages statiques, SEO technique, zéro dépendance UI.

## Démarrage

```bash
npm install
cp .env.example .env.local   # renseigner NEXT_PUBLIC_SITE_URL et NEXT_PUBLIC_TALLY_FORM_ID
npm run dev
npm run build && npm start
```

## Pages

`/` · `/expertises` · `/estimation` (formulaire Tally, ancre `#formulaire`) · `/a-propos` · `/contact` (FAQ accordéon + JSON-LD FAQPage)

## À personnaliser avant la mise en ligne

- `src/lib/site.ts` : nom, e-mail, téléphone, horaires, zone (valeurs provisoires).
- `.env.local` : `NEXT_PUBLIC_TALLY_FORM_ID` (ex. `https://tally.so/r/abc123` → `abc123`).
- `src/data/content.ts` : les avis marqués `placeholder` ne s'affichent jamais en production ; remplacez-les par de vrais avis.
- `src/app/a-propos/page.tsx` : histoire réelle de la maison.
- `public/art/*.svg` : illustrations génériques, à remplacer par vos photos (garder alt + title).
- `public/opengraph-image.svg` : remplacer par un PNG/JPG 1200×630 (les réseaux sociaux ignorent souvent le SVG).

## Structure

`src/components` (Header, Footer, Button, Reveal, Accordion, TallyForm, CtaBand, Art, JsonLd) · `src/data` (contenus) · `src/lib` (site, seo) · `src/app/globals.css` (tokens, motion tokens transitions.dev).
