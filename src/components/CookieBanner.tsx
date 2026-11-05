"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_KEY } from "./GoogleTag";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const OPEN_COOKIE_BANNER = "open-cookie-banner";

function readChoice(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (readChoice() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_BANNER, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_BANNER, reopen);
  }, []);

  function choose(granted: boolean) {
    const value = granted ? "granted" : "denied";
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* stockage indisponible : le choix vaut pour cette visite */
    }
    window.gtag?.("consent", "update", {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    });
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="cookies" role="dialog" aria-modal="false" aria-labelledby="cookies-title">
      <p id="cookies-title" className="cookies__title">Cookies et mesure publicitaire</p>
      <p className="cookies__text">
        Nous utilisons un cookie de Google pour mesurer l'efficacité de nos annonces. Il n'est déposé qu'avec votre
        accord, que vous pouvez retirer à tout moment. <Link href="/mentions-legales#cookies">En savoir plus</Link>
      </p>
      <div className="cookies__actions">
        <button type="button" className="btn btn--ghost" onClick={() => choose(false)}>Refuser</button>
        <button type="button" className="btn btn--primary" onClick={() => choose(true)}>Accepter</button>
      </div>
    </div>
  );
}

/** Lien du pied de page pour rouvrir le bandeau et modifier son choix. */
export function CookieSettings() {
  return (
    <button type="button" className="footer__linkbtn" onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_BANNER))}>
      Gérer les cookies
    </button>
  );
}
