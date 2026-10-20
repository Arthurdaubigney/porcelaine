import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Merci : votre demande d'estimation a bien été reçue",
    description:
      "Votre demande d'estimation de porcelaine ancienne a bien été reçue. Nous la traitons rapidement : merci de ne pas envoyer plusieurs formulaires.",
    path: "/merci",
  }),
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <section className="page-hero thanks">
      <div className="container">
        <p className="eyebrow">Demande envoyée</p>
        <h1 className="h1">Merci, votre demande a bien été reçue</h1>
        <p className="lead">
          Nous avons bien reçu votre formulaire et nous traitons votre demande rapidement. Un expert examine vos
          photos puis revient vers vous avec une estimation argumentée.
        </p>

        <div className="thanks__notice" role="note">
          <h2 className="h3">Un seul envoi suffit</h2>
          <p>
            Merci de ne pas envoyer plusieurs formulaires : des envois répétés peuvent faire classer vos messages
            dans les courriers indésirables (spam) et retarder notre réponse.
          </p>
          <p>
            Pensez à vérifier votre dossier de courriers indésirables, au cas où notre réponse s'y trouverait.
          </p>
        </div>

        <div className="actions">
          <Button href="/">Retour à l'accueil</Button>
          <Button href="/expertises" variant="ghost">Découvrir nos expertises</Button>
        </div>
      </div>
    </section>
  );
}
