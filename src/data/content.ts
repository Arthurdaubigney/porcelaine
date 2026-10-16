export const GUARANTEES = [
  { title: "Confidentialité totale", text: "Votre collection, votre succession, votre identité : rien n'est partagé. Discrétion absolue à chaque étape." },
  { title: "Expertise sous 24 à 48 h", text: "Un expert examine vos photos et revient vers vous rapidement avec une première estimation argumentée." },
  { title: "Déplacement possible", text: "Pour les collections importantes ou fragiles, nous nous déplaçons à votre domicile, sans frais." },
  { title: "Paiement immédiat", text: "Si vous acceptez notre offre : règlement comptant, par virement ou en espèces dans le cadre légal." },
] as const;

export const STEPS = [
  { n: "01", title: "Envoyez des photos", text: "Photographiez l'ensemble, le dessous et les marques de chaque pièce. Quelques minutes suffisent, depuis votre téléphone." },
  { n: "02", title: "Estimation gratuite", text: "Nous identifions la manufacture, l'époque, l'état et la demande actuelle, puis vous remettons une estimation claire." },
  { n: "03", title: "Offre de rachat", text: "Si la pièce nous intéresse, nous formulons une offre ferme. Vous acceptez ou non, sans aucune pression." },
] as const;

export const REMARKABLE_PIECES = [
  { title: "Vase de forme balustre, fond bleu", detail: "Style Sèvres, dorure au coquillage", image: "/art/vase-seves.svg", alt: "Vase balustre bleu nuit orné de dorures, style Sèvres", imgTitle: "Vase balustre style Sèvres expertisé" },
  { title: "Assiette à décor floral, filet or", detail: "Limoges, fin XIXe", image: "/art/assiette-limoges.svg", alt: "Assiette de Limoges à décor floral et bordure or", imgTitle: "Assiette ancienne de Limoges expertisée" },
  { title: "Potiche à décor de lotus", detail: "Bleu et blanc, Asie", image: "/art/potiche-asie.svg", alt: "Potiche asiatique bleu et blanc à décor de lotus", imgTitle: "Potiche asiatique expertisée" },
] as const;

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
  { q: "Combien de temps pour recevoir une réponse ?", a: "Dans la majorité des cas, sous 24 à 48 heures ouvrées après réception de votre demande complète." },
  { q: "Pouvez-vous vous déplacer chez moi ?", a: "Oui, pour les collections importantes, les successions ou les pièces fragiles et volumineuses. Le déplacement est gratuit et sans engagement." },
  { q: "Rachetez-vous aussi les pièces ébréchées ou restaurées ?", a: "Certaines oui, selon la rareté de la pièce et l'ampleur de l'altération. Indiquez les défauts honnêtement : cela accélère l'expertise." },
  { q: "Comment suis-je payé si j'accepte l'offre ?", a: "Le règlement est immédiat à la remise des pièces : virement instantané, ou espèces dans la limite fixée par la réglementation en vigueur." },
  { q: "Mes informations restent-elles confidentielles ?", a: "Oui. Nous ne communiquons ni vos coordonnées, ni le contenu de votre collection, ni le montant des offres à des tiers." },
  { q: "Faut-il nettoyer mes pièces avant de les photographier ?", a: "Non, surtout pas de produit abrasif ni de lave-vaisselle. Un simple dépoussiérage délicat suffit. Le nettoyage peut altérer la dorure et la valeur." },
] as const;
