import Link from "next/link";
import { ESTIMATION_HREF, FOOTER_NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo className="logo--light" />
          <p className="footer__text">
            Estimation, expertise et rachat de porcelaine ancienne, de vaisselle de collection et d'objets d'art.
          </p>
          <Link href={ESTIMATION_HREF} className="footer__cta">
            Obtenir une expertise gratuite →
          </Link>
        </div>
        <nav aria-label="Pied de page">
          <p className="footer__title">Navigation</p>
          <ul>
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer__title">Nous joindre</p>
          <ul>
            <li><Link href={ESTIMATION_HREF}>Formulaire d'estimation en ligne</Link></li>
            <li>{SITE.area}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__legal">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Estimation gratuite, sans engagement.{" "}
          <Link href="/mentions-legales">Mentions légales</Link>
        </p>
        <p>Confidentialité garantie · Paiement immédiat</p>
        <p className="footer__credit">
          Photographies de pièces de musée et de collections, sous licence libre (CC0, CC BY), présentées à
          titre d'illustration : <Link href="/mentions-legales#credits-photos">crédits détaillés</Link>.
        </p>
      </div>
    </footer>
  );
}
