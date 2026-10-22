/**
 * Photographies de pièces et de services de porcelaine, sous licence libre (CC0 ou Creative Commons).
 * Ce sont des pièces de musée ou de collection présentées à titre d'illustration, pas des pièces expertisées
 * par la maison. Les crédits sont repris dans les légendes, le pied de page et les mentions légales.
 */
export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  /** Légende visible : objet, manufacture, date. */
  caption: string;
  /** Auteur / institution, tel qu'affiché dans le crédit. */
  author?: string;
  /** Absent pour les photos de la maison (aucun crédit à afficher). */
  license?: { name: string; url: string };
  /** Page source (collection du musée ou Wikimedia Commons). */
  source?: string;
  /** object-position CSS pour le recadrage (par défaut : centre). */
  position?: string;
};

export const PHOTOS = {
  heroService: {
    src: "/photos/hero-service.webp", width: 1440, height: 1920,
    alt: "Service de table complet en porcelaine blanche à fleurs bleues : soupières, saucière, plats, piles d'assiettes, cafetière, sucrier, pot à lait et tasses avec soucoupes",
    title: "Service de table complet en porcelaine Haviland à décor de fleurs bleues — estimation et rachat de services de table",
    caption: "Service de table complet Haviland, décor de fleurs bleues",
  },
  serviceTableBleu: {
    src: "/photos/service-table-bleu.webp", width: 1067, height: 639,
    alt: "Service de table complet en porcelaine blanche à fleurs bleues : piles d'assiettes, soupière, saucière, plats, théière, cafetière, sucrier et tasses",
    title: "Service de table Haviland à fleurs bleues — rachat de services de vaisselle anciens",
    caption: "Service de table complet Haviland, décor de fleurs bleues",
  },
  limogesChocolat: {
    src: "/photos/limoges-chocolat.webp", width: 1400, height: 1179,
    alt: "Service à chocolat de Limoges : chocolatière et tasses à décor de guirlandes de roses et filets dorés",
    title: "Service à chocolat de Limoges, décor de guirlandes — porcelaine de Limoges ancienne",
    caption: "Service à chocolat, Limoges, décor de guirlandes",
    author: "Zeamays, Wikimedia Commons",
    license: { name: "CC BY 3.0", url: "https://creativecommons.org/licenses/by/3.0/" },
    source: "https://commons.wikimedia.org/wiki/File:Limoges_chocolate_set.jpg",
  },
  sevresDejeuner1786: {
    src: "/photos/sevres-dejeuner-1786.webp", width: 1050, height: 1400,
    alt: "Déjeuner de Sèvres à fond jaune : plateau, théière, pot à lait, sucrier et tasse, décor de filets et motifs dorés",
    title: "Déjeuner de la manufacture de Sèvres, 1786 — service à thé ancien en porcelaine tendre",
    caption: "Déjeuner (service à thé), manufacture de Sèvres, 1786",
    author: "Daderot, Wikimedia Commons",
    license: { name: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
    source: "https://commons.wikimedia.org/wiki/File:Tea_service_(dejeuner),_1786,_S%C3%A8vres,_decorator_Denis_Leve,_soft-paste_porcelain,_overglaze_enamels,_gilding_-_Gardiner_Museum,_Toronto_-_DSC01053.JPG",
  },
  meissenService: {
    src: "/photos/meissen-service.webp", width: 1050, height: 1400,
    alt: "Service à thé de Meissen : cafetière et assiette à fond jaune, scènes peintes et dorures",
    title: "Service à thé de Meissen, vers 1745 — porcelaine de Saxe ancienne",
    caption: "Service à thé, manufacture de Meissen, vers 1745",
    author: "Daderot, Wikimedia Commons",
    license: { name: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
    source: "https://commons.wikimedia.org/wiki/File:Tea_service,_view_1,_c._1745,_Meissen,_hard-paste_porcelain,_overglaze_enamels,_gilding_-_Gardiner_Museum,_Toronto_-_DSC00890.JPG",
  },
  compagnieDesIndesService: {
    src: "/photos/compagnie-des-indes-service.webp", width: 1120, height: 1400,
    alt: "Grand service de table en porcelaine chinoise d'exportation, décor armorié et filets dorés : soupières, plats et tasses",
    title: "Service de table armorié en porcelaine chinoise d'exportation, 1785-1790 — type Compagnie des Indes",
    caption: "Service armorié, porcelaine chinoise d'exportation pour le marché américain, 1785–1790",
    author: "The Met",
    license: { name: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
    source: "https://www.metmuseum.org/art/collection/search/17778",
  },
  lowestoft: {
    src: "/photos/angleterre-lowestoft.webp", width: 1400, height: 677,
    alt: "Service à thé en porcelaine tendre de Lowestoft : théière, tasses, bols et pot à lait à décor de personnages",
    title: "Service à thé de Lowestoft, fin du XVIIIe siècle — porcelaine anglaise ancienne",
    caption: "Service à thé, Lowestoft (Angleterre), fin du XVIIIe ou début du XIXe siècle",
    author: "The Met",
    license: { name: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
    source: "https://www.metmuseum.org/art/collection/search/704671",
  },
  sevresReticule: {
    src: "/photos/sevres-dejeuner-reticule.webp", width: 1400, height: 1074,
    alt: "Déjeuner de Sèvres à décor chinois réticulé : théière, cafetière, tasses et plateau, porcelaine ajourée et dorée",
    title: "Déjeuner « chinois réticulé » de Sèvres, 1855-1861 — service à thé et à café en porcelaine",
    caption: "Déjeuner « chinois réticulé », manufacture de Sèvres, 1855–1861",
    author: "The Met",
    license: { name: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
    source: "https://www.metmuseum.org/art/collection/search/205137",
  },
  chantilly: {
    src: "/photos/chantilly-dejeuner.webp", width: 1400, height: 895,
    alt: "Déjeuner de Chantilly à décor japonisant : théière, sucrier, tasses et plateau en porcelaine tendre",
    title: "Déjeuner de la manufacture de Chantilly, vers 1730 — service à thé ancien en porcelaine",
    caption: "Déjeuner, manufacture de Chantilly, vers 1730",
    author: "Cleveland Museum of Art, Wikimedia Commons",
    license: { name: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
    source: "https://commons.wikimedia.org/wiki/File:Chantilly_Porcelain_Factory_(French)_-_Tea_Service_(D%C3%A9jeuner)_-_1944.228_-_Cleveland_Museum_of_Art.jpg",
  },
  imperial: {
    src: "/photos/imperial-service.webp", width: 1400, height: 1181,
    alt: "Service à thé et plateau en porcelaine bleu cobalt et or : cafetière, pot à lait, sucrier et tasse",
    title: "Service à thé et plateau, Manufacture impériale de porcelaine — porcelaine ancienne bleu et or",
    caption: "Service à thé et plateau, Manufacture impériale de porcelaine (musée V&A, Londres)",
    author: "14GTR, Wikimedia Commons",
    license: { name: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
    source: "https://commons.wikimedia.org/wiki/File:Tea_service_%26_tray_by_the_Imperial_Porcelain_Factory,_V%26A_London_01.jpg",
  },
  chineVase: {
    src: "/photos/chine-vase.webp", width: 1050, height: 1400,
    alt: "Vase balustre chinois en porcelaine blanche à décor moulé et fleurs bleues sous couverte",
    title: "Vase chinois en porcelaine bleu et blanc, fin du XVIIIe siècle — porcelaine d'Asie",
    caption: "Petit vase, Chine, fin du XVIIIe siècle",
    author: "The Met",
    license: { name: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
    source: "https://www.metmuseum.org/art/collection/search/460677",
  },
  meissenFigurine: {
    src: "/photos/meissen-figurine.webp", width: 1400, height: 1094,
    alt: "Figurine de théâtre de Meissen : dame en robe à paniers ornée de fleurs, porcelaine dure",
    title: "Figurine de Meissen, 1750-1752 — figurine ancienne en porcelaine",
    caption: "Figure de théâtre, manufacture de Meissen, 1750–1752",
    author: "The Met",
    license: { name: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
    source: "https://www.metmuseum.org/art/collection/search/203059",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;

/** Crédit court affiché sous les photos. */
export const creditOf = (key: PhotoKey): string => {
  const p: Photo = PHOTOS[key];
  return p.author && p.license ? ` · ${p.author}, ${p.license.name}` : "";
};
