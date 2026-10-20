import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PHOTOS } from "@/data/photos";
import { pageMetadata } from "@/lib/seo";
import { ESTIMATION_HREF, LEGAL, SITE } from "@/lib/site";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Mentions légales | Maison Porcelaine",
  description:
    "Mentions légales du site Maison Porcelaine : éditeur, hébergeur, propriété intellectuelle, crédits photographiques et protection des données personnelles.",
  path: "/mentions-legales",
});

const sources = Array.from(new Set(Object.values(PHOTOS).map((p) => p.source)));

export default function LegalPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs trail={[{ name: "Mentions légales", path: "/mentions-legales" }]} />
          <h1 className="h1">Mentions légales</h1>
          <p className="lead">Informations légales relatives au site {SITE.name}.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal">
          <h2>Éditeur du site</h2>
          <dl>
            <dt>Nom</dt>
            <dd>{LEGAL.owner}, {LEGAL.status.toLowerCase()}</dd>
            <dt>Nom commercial</dt>
            <dd>{SITE.name}</dd>
            <dt>Adresse</dt>
            <dd>{LEGAL.address}</dd>
            <dt>SIREN</dt>
            <dd>{LEGAL.siren}</dd>
            <dt>SIRET (siège)</dt>
            <dd>{LEGAL.siret}</dd>
            <dt>TVA intracommunautaire</dt>
            <dd>{LEGAL.vat}</dd>
            <dt>Activité (NAF/APE)</dt>
            <dd>{LEGAL.activity}</dd>
            <dt>Création</dt>
            <dd>{LEGAL.createdAt}</dd>
            <dt>E-mail</dt>
            <dd><a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></dd>
            <dt>Contact</dt>
            <dd><Link href={ESTIMATION_HREF}>Formulaire d'estimation en ligne</Link></dd>
          </dl>
          <p>Directeur de la publication : {LEGAL.owner}.</p>

          <h2>Hébergeur</h2>
          <p>
            Le site est hébergé par {LEGAL.host.name}, {LEGAL.host.address} (
            <a href={LEGAL.host.url} rel="noopener noreferrer" target="_blank">vercel.com</a>).
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, le logo et la mise en page du site sont la propriété de l'éditeur. Toute reproduction sans
            autorisation préalable est interdite.
          </p>
          <p>
            Les photographies de porcelaines proviennent de la collection Open Access du{" "}
            <a href="https://www.metmuseum.org/art/collection" rel="noopener noreferrer" target="_blank">
              Metropolitan Museum of Art
            </a>{" "}
            (New York), placées dans le domaine public (CC0). Il s'agit de pièces de musée présentées à titre
            d'illustration ; elles ne constituent pas des pièces expertisées ou vendues par l'éditeur. Pages sources :
          </p>
          <ul>
            {sources.map((src) => (
              <li key={src}>
                <a href={src} rel="noopener noreferrer" target="_blank">{src.replace("https://www.", "")}</a>
              </li>
            ))}
          </ul>

          <h2>Données personnelles</h2>
          <p>
            Les informations saisies dans le formulaire d'estimation (identité, coordonnées, description et photos de
            vos pièces) sont utilisées uniquement pour répondre à votre demande d'estimation et, le cas échéant, vous
            proposer un rachat. Elles ne sont ni vendues ni transmises à des tiers à des fins commerciales.
          </p>
          <p>
            Le formulaire est fourni par la société{" "}
            <a href="https://tally.so" rel="noopener noreferrer" target="_blank">Tally</a>, qui agit comme prestataire
            technique pour la collecte des réponses. Consultez sa politique de confidentialité pour plus de détails.
          </p>
          <p>
            Conformément au règlement (UE) 2016/679 (RGPD) et à la loi « Informatique et Libertés », vous disposez d'un
            droit d'accès, de rectification, d'effacement, d'opposition et de limitation du traitement de vos données.
            Pour l'exercer, contactez l'éditeur par e-mail à{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> ou via le{" "}
            <Link href={ESTIMATION_HREF}>formulaire en ligne</Link>. Vous pouvez également saisir la CNIL (
            <a href="https://www.cnil.fr" rel="noopener noreferrer" target="_blank">cnil.fr</a>).
          </p>

          <h2>Cookies</h2>
          <p>
            Le site n'utilise pas de cookies de mesure d'audience ni de publicité. Le formulaire Tally, service tiers
            intégré à la page d'estimation, peut déposer ses propres cookies techniques.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les estimations fournies sont des avis donnés à titre indicatif, sans engagement, sur la base des
            informations et photographies transmises. Elles ne constituent pas une offre ferme tant qu'un accord n'a
            pas été conclu entre les parties.
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
