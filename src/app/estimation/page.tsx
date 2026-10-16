import { Accordion } from "@/components/Accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EstimateButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { TallyForm } from "@/components/TallyForm";
import { ESTIMATION_FAQ, GUARANTEES, STEPS, VALUE_FACTORS } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Estimation & Rachat de Porcelaine Ancienne Gratuit",
  description:
    "Demandez une estimation gratuite et sans engagement de votre porcelaine ancienne. Envoyez vos photos : réponse d'un expert en 24-48 h, rachat immédiat.",
  path: "/estimation",
});

const PHOTOS = [
  "Une vue d'ensemble de la pièce ou du service",
  "Le dessous, avec marque, estampille ou signature",
  "Un gros plan du décor et de la dorure",
  "Chaque défaut : éclat, fêlure, usure, restauration",
];

export default function EstimationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs trail={[{ name: "Rachat & estimation", path: "/estimation" }]} />
          <p className="eyebrow">Rachat &amp; estimation</p>
          <h1 className="h1">Estimer et vendre sa porcelaine ancienne, sans engagement</h1>
          <p className="lead">
            Une demande, quelques photos, une réponse argumentée sous 24 à 48 h. Vous décidez ensuite, librement.
          </p>
          <div className="actions"><EstimateButton label="Remplir le formulaire" /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Le processus</p>
            <h2 id="process-title" className="h2">Une estimation claire, étape par étape</h2>
            <ol className="steps steps--stacked steps--dark-text">
              {STEPS.map((s) => (
                <li key={s.n} className="step">
                  <span className="step__n" aria-hidden="true">{s.n}</span>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={100} className="checklist">
            <h2 className="h3">Les photos qui accélèrent l'expertise</h2>
            <ul>
              {PHOTOS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="checklist__note">
              Ne nettoyez pas vos pièces avant de les photographier : un dépoussiérage délicat suffit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tone" aria-labelledby="promesse-title">
        <div className="container">
          <h2 id="promesse-title" className="h2 sr-only">Nos engagements</h2>
          <ul className="guarantees">
            {GUARANTEES.map((g) => (
              <li key={g.title} className="guarantee">
                <h3 className="h3">{g.title}</h3>
                <p>{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="valeur-title">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Valeur d'une porcelaine</p>
            <h2 id="valeur-title" className="h2">Combien vaut une porcelaine ancienne ? Les cinq critères de l'expertise</h2>
          </Reveal>
          <ul className="tips tips--five">
            {VALUE_FACTORS.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 60} className="tip">
                <h3 className="h3">{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="succession">
            <h3 className="h3">Succession, héritage, vide-maison</h3>
            <p>
              Vous héritez d'un service ou d'une collection de porcelaine ? Nous estimons l'ensemble, à distance ou à
              domicile, et vous remettons un inventaire clair des pièces, avec une offre de rachat si elles nous
              intéressent. Notaires et familles peuvent nous contacter en toute confidentialité.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--form">
        <div className="container container--narrow">
          <TallyForm />
        </div>
      </section>

      <section className="section" aria-labelledby="questions-title">
        <div className="container container--narrow">
          <Reveal className="section__head">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 id="questions-title" className="h2">Estimation de porcelaine : vos questions</h2>
          </Reveal>
          <Accordion items={ESTIMATION_FAQ} />
        </div>
      </section>
    </>
  );
}
