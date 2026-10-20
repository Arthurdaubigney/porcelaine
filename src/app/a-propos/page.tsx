import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "À Propos : Experts en Porcelaine Ancienne et Rachat",
  description:
    "Découvrez notre maison d'expertise : passion de la porcelaine ancienne, savoir-faire, estimations transparentes et engagements pour chaque vendeur.",
  path: "/a-propos",
});

const VALUES = [
  { title: "Transparence", text: "Nous expliquons chaque estimation : manufacture, époque, état, demande du marché. Vous savez pourquoi, pas seulement combien." },
  { title: "Respect de la pièce", text: "Une porcelaine n'est pas un simple objet : nous la manipulons, la photographions et la conservons avec soin." },
  { title: "Liberté du vendeur", text: "Aucune pression, aucun délai imposé. Vous pouvez refuser notre offre et garder votre estimation." },
  { title: "Discrétion", text: "Succession, déménagement, héritage familial : votre situation reste confidentielle." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero__grid hero__grid--about">
          <div>
            <Breadcrumbs trail={[{ name: "À propos", path: "/a-propos" }]} />
            <p className="eyebrow">À propos &amp; engagements</p>
            <h1 className="h1">Une maison d'expertise passionnée par la porcelaine ancienne</h1>
            <p className="lead">
              Notre métier : donner à chaque pièce de porcelaine la valeur qu'elle mérite, avec rigueur, tact et
              honnêteté.
            </p>
          </div>
          <figure className="hero__art hero__art--small">
            <div className="hero__photo hero__photo--wide">
              <Photo name="sevresTasse" priority sizes="(max-width: 860px) 80vw, 320px" />
            </div>
            <figcaption className="hero__caption">Tasse et soucoupe, Sèvres, 1794 · The Met, CC0</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="histoire-title">
        <div className="container prose-grid">
          <Reveal>
            <p className="eyebrow">Notre histoire</p>
            <h2 id="histoire-title" className="h2">De la passion de l'objet au métier d'expert</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Tout commence par le goût de la matière : la blancheur d'une pâte dure, la profondeur d'un bleu sous
              couverte, la finesse d'une dorure. Cette passion est devenue un savoir-faire : reconnaître les marques,
              lire les décors, distinguer l'original de l'hommage.
            </p>
            <p>
              Notre expertise s'est construite au contact des pièces : manufactures françaises, saxonnes, anglaises
              et asiatiques, estampilles, techniques de décor, restaurations. Chaque objet est examiné avec soin, à
              partir de vos photos, puis estimé avec franchise.
            </p>
            <p>
              Aujourd'hui, nous accompagnons particuliers et familles dans l'estimation et la vente de collections de
              porcelaine, de la tasse isolée au service complet.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tone" aria-labelledby="valeurs-title">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Nos engagements</p>
            <h2 id="valeurs-title" className="h2">Quatre principes pour chaque estimation</h2>
          </Reveal>
          <ul className="tips">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 60} className="tip">
                <h3 className="h3">{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
