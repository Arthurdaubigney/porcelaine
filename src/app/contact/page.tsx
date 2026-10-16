import { Accordion } from "@/components/Accordion";
import { EstimateButton } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact : Expert en Rachat de Porcelaine Ancienne",
  description:
    "Contactez notre expert en porcelaine ancienne par téléphone ou e-mail. Zone d'intervention, horaires et réponses à vos questions sur le rachat.",
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
          <p className="eyebrow">Contact</p>
          <h1 className="h1">Contacter un expert en rachat de porcelaine ancienne</h1>
          <p className="lead">Une question avant d'envoyer vos photos ? Nous vous répondons avec plaisir.</p>
          <div className="actions"><EstimateButton /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="coordonnees-title">
        <div className="container">
          <h2 id="coordonnees-title" className="h2 sr-only">Coordonnées</h2>
          <dl className="contact">
            <Reveal className="contact__item">
              <dt>Téléphone</dt>
              <dd><a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></dd>
            </Reveal>
            <Reveal className="contact__item" delay={60}>
              <dt>E-mail</dt>
              <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
            </Reveal>
            <Reveal className="contact__item" delay={120}>
              <dt>Horaires</dt>
              <dd>{SITE.hours}</dd>
            </Reveal>
            <Reveal className="contact__item" delay={180}>
              <dt>Zone d'intervention</dt>
              <dd>{SITE.area}</dd>
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
