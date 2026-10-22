import type { PhotoKey } from "./photos";

export const GUARANTEES = [
  { title: "Confidentialité totale", text: "Votre collection, votre succession, votre identité : rien n'est partagé. Discrétion absolue à chaque étape." },
  { title: "Estimation argumentée", text: "Un expert examine vos photos et vous remet une estimation expliquée : manufacture, époque, état et demande du marché." },
  { title: "Déplacement possible", text: "Pour les collections importantes ou fragiles, nous nous déplaçons à votre domicile, sans frais." },
  { title: "Paiement immédiat", text: "Si vous acceptez notre offre : règlement immédiat par virement." },
] as const;

export const STEPS = [
  { n: "01", title: "Envoyez des photos", text: "Photographiez l'ensemble, le dessous et les marques de chaque pièce. Quelques minutes suffisent, depuis votre téléphone." },
  { n: "02", title: "Estimation gratuite", text: "Nous identifions la manufacture, l'époque, l'état et la demande actuelle, puis vous remettons une estimation claire." },
  { n: "03", title: "Offre de rachat", text: "Si la pièce nous intéresse, nous formulons une offre ferme. Vous acceptez ou non, sans aucune pression." },
] as const;

/** Pièces de musée (CC0) pour illustrer ce que nous recherchons — voir data/photos.ts. */
export const REFERENCE_PIECES = [
  { photo: "sevresReticule", title: "Les déjeuners de Sèvres", text: "Théière, pot à lait, sucrier et tasses réunis sur un plateau : un déjeuner complet, aux dorures intactes, vaut généralement bien plus que ses pièces dispersées." },
  { photo: "chantilly", title: "Chantilly et le goût du Japon", text: "Pâte tendre et décors inspirés des porcelaines japonaises : la finesse de la pâte et la netteté du décor guident l'expertise." },
  { photo: "imperial", title: "Services bleu et or", text: "Fonds colorés et dorures épaisses : l'usure de l'or et les éclats de bordure sont examinés pièce par pièce." },
] as const satisfies readonly { photo: PhotoKey; title: string; text: string }[];

export type Review = { name: string; place: string; text: string; placeholder?: boolean };

/**
 * Avis clients : à remplacer par de vrais avis avant la mise en ligne.
 * Les entrées marquées `placeholder` ne sont jamais affichées en production.
 */
export const REVIEWS: Review[] = [
  { name: "Prénom N.", place: "Ville", text: "Texte de l'avis client à remplacer par un témoignage réel et vérifiable.", placeholder: true },
  { name: "Prénom N.", place: "Ville", text: "Texte de l'avis client à remplacer par un témoignage réel et vérifiable.", placeholder: true },
  { name: "Prénom N.", place: "Ville", text: "Texte de l'avis client à remplacer par un témoignage réel et vérifiable.", placeholder: true },
];

export const FAQ = [
  { q: "L'estimation de ma porcelaine est-elle vraiment gratuite ?", a: "Oui. L'estimation est gratuite et sans engagement. Vous n'avez aucune obligation de vendre, que l'offre vous convienne ou non." },
  { q: "Quelles photos dois-je envoyer ?", a: "Une vue d'ensemble, une vue de dessous avec la marque ou l'estampille, un gros plan du décor et de chaque défaut visible (éclat, fêlure, restauration). Une lumière naturelle et un fond uni aident beaucoup." },
  { q: "Que se passe-t-il après l'envoi de ma demande ?", a: "Un expert examine vos photos et vous répond avec une estimation argumentée. Des photos nettes (ensemble, dessous, décor, défauts) permettent un examen plus précis." },
  { q: "Pouvez-vous vous déplacer chez moi ?", a: "Oui, pour les collections importantes, les successions ou les pièces fragiles et volumineuses. Le déplacement est gratuit et sans engagement." },
  { q: "Rachetez-vous aussi les pièces ébréchées ou restaurées ?", a: "Certaines oui, selon la rareté de la pièce et l'ampleur de l'altération. Indiquez les défauts honnêtement : cela accélère l'expertise." },
  { q: "Comment suis-je payé si j'accepte l'offre ?", a: "Le règlement est immédiat, par virement, dès la remise des pièces." },
  { q: "Mes informations restent-elles confidentielles ?", a: "Oui. Nous ne communiquons ni vos coordonnées, ni le contenu de votre collection, ni le montant des offres à des tiers." },
  { q: "Faut-il nettoyer mes pièces avant de les photographier ?", a: "Non, surtout pas de produit abrasif ni de lave-vaisselle. Un simple dépoussiérage délicat suffit. Le nettoyage peut altérer la dorure et la valeur." },
] as const;

/** Notre priorité : les services de vaisselle en porcelaine. */
export const PRIORITY_SERVICES = [
  { title: "Services de table complets", text: "Assiettes plates, creuses et à dessert, plats, soupière, saucière, légumier : un service de 12 couverts ou plus, complet ou presque, est notre première recherche." },
  { title: "Services à thé et à café", text: "Théière, cafetière, sucrier, pot à lait, tasses et soucoupes, réunis sur un même décor." },
] as const;

export const BUY_LIST = [
  "Pièces dépareillées d'un service ancien",
  "Vases, potiches et cache-pots",
  "Figurines, groupes et biscuits de porcelaine",
  "Porcelaine d'Asie : Chine, Japon, Compagnie des Indes",
  "Services dorés, pièces armoriées, objets d'art en porcelaine",
  "Successions, héritages et vide-maisons",
] as const;

export const VALUE_FACTORS = [
  { title: "La manufacture et la marque", text: "Sèvres, Meissen ou Vincennes ne se valorisent pas comme une production de série. La marque identifie l'atelier, mais ne suffit jamais seule." },
  { title: "L'époque et la rareté", text: "Une forme, un décor ou un fond de couleur peu courants font la différence. Les pièces du XVIIIe siècle et les modèles rares sont les plus demandés." },
  { title: "L'état de conservation", text: "Éclats, fêlures, usure de la dorure et restaurations influencent fortement le prix. Un défaut signalé honnêtement n'est pas un obstacle à l'estimation." },
  { title: "La qualité du décor", text: "Peinture à la main, signature de décorateur, dorure épaisse : la finesse d'exécution pèse autant que l'âge de la pièce." },
  { title: "L'ensemble et la provenance", text: "Un service complet et documenté (facture, héritage, collection) vaut généralement plus que des pièces vendues séparément." },
] as const;

export const ESTIMATION_FAQ = [
  { q: "Combien vaut ma porcelaine ancienne ?", a: "Cela dépend de la manufacture, de l'époque, de la rareté du modèle, de la qualité du décor et de l'état de conservation. Envoyez-nous des photos : l'estimation est gratuite et argumentée." },
  { q: "Faut-il garder les boîtes, factures ou certificats ?", a: "Oui, tout document d'origine (facture, certificat, étiquette de collection, photos de famille) peut valoriser une pièce et en confirmer la provenance." },
  { q: "Rachetez-vous un service complet en une seule fois ?", a: "Oui, et c'est même préférable : un service complet, sans éclat ni fêlure, se valorise mieux que des pièces séparées." },
  { q: "Puis-je faire estimer une succession ou un vide-maison ?", a: "Oui. Nous intervenons régulièrement pour les successions : estimation à domicile, inventaire des pièces de porcelaine et offre de rachat en une seule visite." },
] as const;
