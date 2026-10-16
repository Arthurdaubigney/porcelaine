import Link from "next/link";
import { ESTIMATION_HREF, NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">{SITE.name}</p>
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
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer__title">Contact</p>
          <ul>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
            <li>{SITE.hours}</li>
            <li>{SITE.area}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__legal">
        <p>© {new Date().getFullYear()} {SITE.name}. Estimation gratuite, sans engagement.</p>
        <p>Confidentialité garantie · Paiement immédiat</p>
      </div>
    </footer>
  );
}
