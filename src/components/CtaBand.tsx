import Link from "next/link";
import { EstimateButton } from "./Button";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Une pièce à faire estimer ?",
  text = "Envoyez-nous vos photos : expertise gratuite, réponse sous 24 à 48 h, aucune obligation de vendre.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="band" aria-labelledby="band-title">
      <div className="container band__inner">
        <Reveal>
          <h2 id="band-title" className="h2 band__title">{title}</h2>
          <p className="band__text">{text}</p>
        </Reveal>
        <Reveal delay={120}>
          <EstimateButton variant="brass" label="Obtenir une expertise gratuite" />
          <p className="band__alt">
            Une question ? <Link href="/contact">Contact &amp; questions fréquentes</Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
