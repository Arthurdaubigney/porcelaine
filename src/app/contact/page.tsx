import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { EstimateButton } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import { ESTIMATION_HREF, SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact : Expert en Rachat de Porcelaine Ancienne",
  description:
    "Contactez notre expert en porcelaine ancienne via le formulaire en ligne. Zone d'intervention et réponses à vos questions sur le rachat et l'expertise.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <section className="page-hero">
        <div className="container">
          <Breadcrumbs trail={[{ name: "Contact & FAQ", path: "/contact" }]} />
          <p className="eyebrow">Contact</p>
          <h1 className="h1">Contacter un expert en rachat de porcelaine ancienne</h1>
          <p className="lead">Une question avant d'envoyer vos photos ? Retrouvez les réponses ci-dessous, ou envoyez-nous votre demande via le formulaire.</p>
          <div className="actions"><EstimateButton /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="coordonnees-title">
        <div className="container">
          <h2 id="coordonnees-title" className="h2 sr-only">Coordonnées</h2>
          <dl className="contact">
            <Reveal className="contact__item">
              <dt>Demande en ligne</dt>
              <dd><Link href={ESTIMATION_HREF}>Remplir le formulaire d'estimation</Link></dd>
            </Reveal>
            <Reveal className="contact__item" delay={60}>
              <dt>Zone d'intervention</dt>
              <dd>{SITE.area}</dd>
            </Reveal>
            <Reveal className="contact__item" delay={120}>
              <dt>Confidentialité</dt>
              <dd>Vos informations ne sont jamais transmises à des tiers.</dd>
            </Reveal>
          </dl>
        </div>
      </section>

      <section className="section section--tone" aria-labelledby="faq-title">
        <div className="container container--narrow">
          <Reveal className="section__head">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 id="faq-title" className="h2">Rachat et expertise : vos questions</h2>
          </Reveal>
          <Accordion items={FAQ} />
          <div className="actions actions--center">
            <EstimateButton label="Obtenir une expertise gratuite" />
          </div>
        </div>
      </section>
    </>
  );
}
