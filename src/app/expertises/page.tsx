import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Photo } from "@/components/Photo";
import { EstimateButton } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { DOMAINS } from "@/data/domains";
import { PHOTOS } from "@/data/photos";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Expertise Porcelaine Ancienne : Sèvres, Limoges, Meissen",
  description:
    "Sèvres, Limoges, Meissen, Chantilly, Vincennes, Asie : nos domaines d'expertise et nos conseils pour bien reconnaître estampilles, marques et signatures.",
  path: "/expertises",
});

const TIPS = [
  { title: "Retournez la pièce", text: "La marque se trouve presque toujours sous le pied ou au revers : peinte, imprimée, incisée ou en relief." },
  { title: "Observez la couleur de la marque", text: "Bleu sous couverte, rouge ou vert sur couverte, or : chaque couleur renvoie à une technique et à une période." },
  { title: "Ne vous fiez pas à la seule marque", text: "Marques d'hommage, copies et marques apocryphes existent. La pâte, la couverte et le décor confirment ou démentent." },
  { title: "Photographiez, ne nettoyez pas", text: "Un nettoyage abrasif ou le lave-vaisselle peuvent effacer dorures et marques. Une photo nette vaut mieux." },
];

export default function ExpertisesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs trail={[{ name: "Nos expertises", path: "/expertises" }]} />
          <p className="eyebrow">Nos expertises</p>
          <h1 className="h1">Expertise de porcelaine ancienne : Sèvres, Limoges, Meissen et au-delà</h1>
          <p className="lead">
            Chaque manufacture a son histoire, ses pâtes, ses décors et ses marques. Voici les grandes familles que
            nous examinons et rachetons, ainsi que les repères pour lire une estampille.
          </p>
          <div className="actions"><EstimateButton /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="manufactures-title">
        <div className="container">
          <h2 id="manufactures-title" className="h2 sr-only">Les grandes manufactures de porcelaine</h2>
          <div className="manufactures">
            {DOMAINS.map((d, i) => (
              <Reveal as="article" key={d.slug} className={`manufacture${i % 2 ? " manufacture--flip" : ""}`}>
                <div id={d.slug} className="manufacture__anchor" />
                <figure className="manufacture__img">
                  <Photo name={d.photo} sizes="(max-width: 860px) 90vw, 440px" />
                  <figcaption>{PHOTOS[d.photo].caption} · The Met, CC0</figcaption>
                </figure>
                <div className="manufacture__body">
                  <p className="eyebrow">{d.period}</p>
                  <h3 className="h2 manufacture__title">{d.name}</h3>
                  <p className="manufacture__tag">{d.tagline}</p>
                  <p>{d.detail}</p>
                  <h4 className="h4">Estampilles et marques</h4>
                  <p>{d.marks}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tone" aria-labelledby="chantilly-title">
        <div className="container prose-grid">
          <Reveal>
            <p className="eyebrow">Autres manufactures</p>
            <h2 id="chantilly-title" className="h2">Chantilly, Vincennes, Dresde et les ateliers européens</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              <strong>Chantilly</strong> (XVIIIe siècle) est connue pour sa pâte tendre à l'émail stannifère et ses
              décors d'inspiration japonaise ; <strong>Vincennes</strong> précède Sèvres et produit des fleurs
              modelées et des fonds colorés très recherchés. À <strong>Dresde</strong>, de nombreux ateliers de
              décoration ont reproduit le style de Meissen : l'examen de la marque et de la qualité de la peinture
              est indispensable.
            </p>
            <p>
              Nous examinons aussi Paris, Bayeux, Niderviller, Capodimonte, Herend, Royal Copenhagen et bien d'autres. Si votre pièce n'est pas citée ici, envoyez-nous une photo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="estampilles-title">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Conseils pratiques</p>
            <h2 id="estampilles-title" className="h2">Reconnaître une estampille ou une signature</h2>
          </Reveal>
          <ul className="tips">
            {TIPS.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 60} className="tip">
                <h3 className="h3">{t.title}</h3>
                <p>{t.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Vous avez repéré une marque ?" text="Envoyez-nous une photo du dessous et du décor : un expert identifie la pièce et vous répond, sans engagement." />
    </>
  );
}
