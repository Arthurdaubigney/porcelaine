"use client";

import Script from "next/script";
import { useEffect } from "react";
import { SITE } from "@/lib/site";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

type TallyFormProps = {
  /** ID du formulaire Tally (ex. "wQ8xyz"). Par défaut : NEXT_PUBLIC_TALLY_FORM_ID. */
  formId?: string;
  /** Hauteur minimale avant que Tally n'ajuste l'iframe. */
  minHeight?: number;
};

/**
 * Emplacement du formulaire d'estimation Tally.
 * - Avec un ID : embed responsive (hauteur dynamique, fond transparent).
 * - Sans ID : placeholder propre.
 */
export function TallyForm({ formId = SITE.tallyFormId, minHeight = 560 }: TallyFormProps) {
  const id = formId.trim();

  useEffect(() => {
    if (id && window.Tally) window.Tally.loadEmbeds();
  }, [id]);

  return (
    <section id="formulaire" className="tally" aria-labelledby="formulaire-titre">
      <div className="tally__head">
        <p className="eyebrow">Formulaire d'estimation</p>
        <h2 id="formulaire-titre" className="h2">Obtenir une expertise gratuite</h2>
        <p className="lead">
          Décrivez votre pièce et joignez vos photos. Un expert l'examine et vous répond, sans engagement de votre part.
        </p>
      </div>

      <div className="tally__frame" style={{ minHeight }}>
        {id ? (
          <>
            <iframe
              data-tally-src={`https://tally.so/embed/${encodeURIComponent(id)}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
              loading="lazy"
              width="100%"
              height={minHeight}
              title="Formulaire d'estimation de porcelaine"
              className="tally__iframe"
            />
            <Script
              id="tally-embed"
              src="https://tally.so/widgets/embed.js"
              strategy="lazyOnload"
              onLoad={() => window.Tally?.loadEmbeds()}
            />
            <noscript>
              <a href={`https://tally.so/r/${encodeURIComponent(id)}`}>Ouvrir le formulaire d'estimation</a>
            </noscript>
          </>
        ) : (
          <div className="tally__placeholder" role="note">
            <p className="tally__ph-title">Le formulaire Tally s'affichera ici</p>
            <p>
              Renseignez <code>NEXT_PUBLIC_TALLY_FORM_ID</code> (ou la prop <code>formId</code>) pour activer l'embed.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
