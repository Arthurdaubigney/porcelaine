/**
 * Photographies du domaine public (CC0) — The Metropolitan Museum of Art, collection Open Access.
 * Ce sont des pièces de musée présentées à titre d'illustration, pas des pièces expertisées par la maison.
 */
export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  /** Légende visible : objet, manufacture, date. */
  caption: string;
  /** Page source (collection du musée). */
  source: string;
};

const MET = (id: number) => `https://www.metmuseum.org/art/collection/search/${id}`;

export const PHOTOS = {
  sevresVase: {
    src: "/photos/sevres-vase.webp", width: 1400, height: 1400,
    alt: "Vase à couvercle en porcelaine tendre de Sèvres, fond bleu nuit, dorures et médaillon peint d'une scène de port",
    title: "Vase à couvercle de la manufacture de Sèvres, vers 1778 — exemple de porcelaine de Sèvres",
    caption: "Vase à couvercle, manufacture de Sèvres, vers 1778",
    source: MET(202183),
  },
  sevresElephant: {
    src: "/photos/sevres-vase-elephant.webp", width: 1056, height: 1400,
    alt: "Vase à tête d'éléphant en porcelaine tendre de Sèvres, fond bleu turquoise, bouquets de fleurs et dorures",
    title: "Vase à tête d'éléphant de Sèvres, 1758-1762 — porcelaine ancienne de collection",
    caption: "Vase à tête d'éléphant, manufacture de Sèvres, 1758–1762",
    source: MET(206454),
  },
  sevresTasse: {
    src: "/photos/sevres-tasse.webp", width: 1400, height: 1100,
    alt: "Tasse à l'étrusque et sa soucoupe en porcelaine de Sèvres, décor polychrome et bordure dorée",
    title: "Tasse et soucoupe de Sèvres, 1794 — estimation de tasses anciennes",
    caption: "Tasse « à l'étrusque » et soucoupe, manufacture de Sèvres, 1794",
    source: MET(207819),
  },
  limoges: {
    src: "/photos/limoges-bracquemond.webp", width: 1332, height: 1340,
    alt: "Assiette en porcelaine de Limoges, décor de volutes dorées en relief sur fond blanc, par Félix Bracquemond",
    title: "Assiette de Limoges décorée par Félix Bracquemond, vers 1875 — porcelaine de Limoges ancienne",
    caption: "Assiette, Limoges, décor de Félix Bracquemond, 1872–1880",
    source: MET(487344),
  },
  meissenTheiere: {
    src: "/photos/meissen-theiere.webp", width: 1400, height: 1400,
    alt: "Théière de Meissen en porcelaine dure à décor chinoisant polychrome, dorures et anse sculptée",
    title: "Théière de la manufacture de Meissen, vers 1719-1730 — porcelaine de Saxe ancienne",
    caption: "Théière à couvercle, manufacture de Meissen, vers 1719–1730",
    source: MET(205267),
  },
  meissenSoupiere: {
    src: "/photos/meissen-soupiere.webp", width: 1400, height: 1386,
    alt: "Soupière à couvercle de Meissen surmontée d'un lion, décor de vues de ports et filets dorés",
    title: "Soupière de Meissen, vers 1772-1774 — service de table ancien en porcelaine",
    caption: "Soupière à couvercle, manufacture de Meissen, vers 1772–1774",
    source: MET(188666),
  },
  meissenFigurine: {
    src: "/photos/meissen-figurine.webp", width: 1400, height: 1094,
    alt: "Figurine de théâtre de Meissen : dame en robe à paniers ornée de fleurs, porcelaine dure",
    title: "Figurine de Meissen, 1750-1752 — figurine ancienne en porcelaine",
    caption: "Figure de théâtre, manufacture de Meissen, 1750–1752",
    source: MET(203059),
  },
  compagnieDesIndes: {
    src: "/photos/compagnie-des-indes-plat.webp", width: 1400, height: 1049,
    alt: "Plat de porcelaine chinoise d'exportation bleu et blanc, scène de culture du thé, vers 1740",
    title: "Plat de la Compagnie des Indes, bleu et blanc, vers 1740-1745 — porcelaine chinoise d'exportation",
    caption: "Plat à scène de culture du thé, Chine (Jingdezhen), vers 1740–1745",
    source: MET(205312),
  },
  chineVase: {
    src: "/photos/chine-vase.webp", width: 1050, height: 1400,
    alt: "Vase balustre chinois en porcelaine blanche à décor moulé et fleurs bleues sous couverte",
    title: "Vase chinois en porcelaine bleu et blanc, fin du XVIIIe siècle — porcelaine d'Asie",
    caption: "Petit vase, Chine, fin du XVIIIe siècle",
    source: MET(460677),
  },
  angleterreMinton: {
    src: "/photos/angleterre-minton.webp", width: 1120, height: 1400,
    alt: "Vase en porcelaine anglaise de Minton, fond rose, anses et col dorés, décor de branches fleuries émaillées",
    title: "Vase de Minton, après 1872 — porcelaine anglaise ancienne",
    caption: "Vase à décor de branche fleurie, Minton (Angleterre), après 1872",
    source: MET(771070),
  },
  japonImari: {
    src: "/photos/japon-imari.webp", width: 1400, height: 1049,
    alt: "Assiette japonaise de type Imari à vase de fleurs, émaux polychromes et dorures, vers 1770",
    title: "Assiette japonaise de type Imari, vers 1770 — porcelaine du Japon ancienne",
    caption: "Assiette à vase de fleurs, Japon (type Imari), vers 1770",
    source: MET(208252),
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;
