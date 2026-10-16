import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="h1">Cette page est introuvable</h1>
        <p className="lead">Elle a peut-être été déplacée. Retournez à l'accueil ou lancez directement votre estimation.</p>
        <div className="actions">
          <Button href="/">Retour à l'accueil</Button>
        </div>
      </div>
    </section>
  );
}
