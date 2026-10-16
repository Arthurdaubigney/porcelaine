import Link from "next/link";
import { Art } from "@/components/Art";
import { EstimateButton, Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { DOMAINS } from "@/data/domains";
import { GUARANTEES, REMARKABLE_PIECES, REVIEWS, STEPS } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Rachat & Estimation de Porcelaine Ancienne – Gratuit",
  description:
    "Faites estimer gratuitement votre porcelaine ancienne : Sèvres, Limoges, Meissen. Expertise sous 24-48 h, déplacement possible, paiement immédiat.",
  path: "/",
});

export default function HomePage() {
  const showReviews = process.env.NODE_ENV !== "production" ? REVIEWS : REVIEWS.filter((r) => !r.placeholder);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: SITE.name,
          url: SITE.url,
          description: "Estimation, expertise et rachat de porcelaine ancienne et d'objets d'art en porcelaine.",
          email: SITE.email,
          telephone: SITE.phoneHref,
          areaServed: "FR",
          priceRange: "Estimation gratuite",
        }}
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="badge">
              <span className="badge__dot" aria-hidden="true" />
              Estimation gratuite · Sans engagement
            </p>
            <h1 id="hero-title" className="h1 hero__title">
              Rachat &amp; Estimation de <em>Porcelaine Ancienne</em>
            </h1>
            <p className="lead hero__lead">
              Sèvres, Limoges, Meissen, Compagnie des Indes : un expert examine vos pièces, vous remet une estimation
              honnête sous 24 à 48 h et, si elles nous intéressent, vous propose un rachat réglé immédiatement.
            </p>
            <div className="actions">
              <EstimateButton />
              <Button href="/expertises" variant="ghost">Découvrir nos expertises</Button>
            </div>
            <ul className="hero__facts" aria-label="Nos engagements">
              <li>Confidentialité totale</li>
              <li>Déplacement possible</li>
              <li>Paiement immédiat</li>
            </ul>
          </div>
          <div className="hero__art">
            <div className="hero__panel">
              <Art
                src="/art/vase-seves.svg"
                alt="Vase en porcelaine bleu de Sèvres à décor doré, pièce de collection à faire estimer"
                title="Vase de style Sèvres — estimation et rachat de porcelaine ancienne"
                priority
                className="hero__vase"
              />
              <p className="hero__caption">Vase balustre, fond bleu, dorure · style Sèvres</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tone" aria-labelledby="garanties-title">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Nos garanties</p>
            <h2 id="garanties-title" className="h2">Une expertise sereine, de la première photo au règlement</h2>
          </Reveal>
          <ul className="guarantees">
            {GUARANTEES.map((g, i) => (
              <Reveal as="li" key={g.title} delay={i * 60} className="guarantee">
                <span className="guarantee__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{g.title}</h3>
                <p>{g.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="domaines-title">
        <div className="container">
          <Reveal className="section__head section__head--row">
            <div>
              <p className="eyebrow">Nos domaines d'expertise</p>
              <h2 id="domaines-title" className="h2">Les manufactures et les familles que nous rachetons</h2>
            </div>
            <Link href="/expertises" className="textlink">Toutes nos expertises →</Link>
          </Reveal>
          <ul className="domains">
            {DOMAINS.map((d, i) => (
              <Reveal as="li" key={d.slug} delay={(i % 4) * 60} className="domain">
                <Link href={`/expertises#${d.slug}`} className="domain__link">
                  <span className="domain__img">
                    <Art src={d.image} alt={d.imageAlt} title={d.imageTitle} />
                  </span>
                  <span className="domain__name">{d.name}</span>
                  <span className="domain__tag">{d.tagline}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="etapes-title">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow eyebrow--light">Comment ça marche ?</p>
            <h2 id="etapes-title" className="h2">Trois étapes, aucune obligation</h2>
          </Reveal>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80} className="step">
                <span className="step__n" aria-hidden="true">{s.n}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="steps__cta">
            <EstimateButton variant="brass" label="Obtenir une expertise gratuite" />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="realisations-title">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Réalisations</p>
            <h2 id="realisations-title" className="h2">Pièces remarquables expertisées</h2>
          </Reveal>
          <ul className="pieces">
            {REMARKABLE_PIECES.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80} className="piece">
                <span className="piece__img">
                  <Art src={p.image} alt={p.alt} title={p.imgTitle} />
                </span>
                <h3 className="h3">{p.title}</h3>
                <p>{p.detail}</p>
              </Reveal>
            ))}
          </ul>

          {showReviews.length > 0 && (
            <>
              <h3 className="h3 reviews__title">Avis de nos clients</h3>
              <ul className="reviews">
                {showReviews.map((r, i) => (
                  <Reveal as="li" key={i} delay={i * 80} className="review">
                    <blockquote>
                      <p>« {r.text} »</p>
                      <footer>
                        {r.name} · {r.place}
                        {r.placeholder && <strong className="review__flag"> (exemple — à remplacer)</strong>}
                      </footer>
                    </blockquote>
                  </Reveal>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
