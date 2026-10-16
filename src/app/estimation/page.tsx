import { EstimateButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { TallyForm } from "@/components/TallyForm";
import { GUARANTEES, STEPS } from "@/data/content";
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

      <section className="section section--form">
        <div className="container container--narrow">
          <TallyForm />
        </div>
      </section>
    </>
  );
}
