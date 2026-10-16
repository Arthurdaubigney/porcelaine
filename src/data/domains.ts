import type { PhotoKey } from "./photos";

export type Domain = {
  slug: string;
  name: string;
  tagline: string;
  photo: PhotoKey;
  period: string;
  detail: string;
  marks: string;
};

export const DOMAINS: Domain[] = [
  {
    slug: "sevres",
    name: "Sèvres",
    tagline: "La manufacture royale",
    photo: "sevresVase",
    period: "Depuis 1740 (Vincennes), Sèvres depuis 1756",
    detail:
      "Fondée à Vincennes puis installée à Sèvres sous la protection de Louis XV, la manufacture produit des pièces d'exception : bleu de roi, bleu céleste, rose Pompadour, biscuits et services d'apparat. Les marques peintes, les lettres-dates et les marques de doreurs permettent de dater précisément une pièce.",
    marks:
      "Double L entrelacés enfermant une lettre-date (A = 1753, puis combinaisons de lettres doubles), monogrammes de peintres et de doreurs, marques postérieures au 19e siècle imprimées en vert, rouge ou bleu.",
  },
  {
    slug: "limoges",
    name: "Limoges",
    tagline: "Le kaolin du Limousin",
    photo: "limoges",
    period: "Depuis 1771",
    detail:
      "Depuis la découverte du kaolin à Saint-Yrieix, Limoges est devenue la capitale française de la porcelaine de table. Haviland, Bernardaud, Raynaud, Guérin-Pouyat ou Bawo & Dotter : les services complets décorés à la main sont particulièrement recherchés.",
    marks:
      "Marques imprimées ou peintes au revers, mentions « Limoges France », « Déposé », noms de décorateurs et de maisons de commerce. La mention « France » seule date généralement la pièce d'après 1891.",
  },
  {
    slug: "meissen",
    name: "Meissen & Saxe",
    tagline: "La première porcelaine dure d'Europe",
    photo: "meissenTheiere",
    period: "Depuis 1710",
    detail:
      "Meissen invente la porcelaine dure européenne dès 1710. Ses figurines, ses services à fleurs allemandes, ses pièces à décor chinoisant et ses fonds colorés font l'objet d'une demande internationale. Dresden regroupe aussi de nombreux ateliers de décoration, souvent confondus avec la manufacture.",
    marks:
      "Épées croisées bleues sous couverte, variantes de l'épée selon les périodes, numéros de modèle incisés, marques d'ateliers de Dresde (couronne, « Dresden », « Carl Thieme »).",
  },
  {
    slug: "compagnie-des-indes",
    name: "Compagnie des Indes",
    tagline: "Porcelaine de commande, XVIIIe siècle",
    photo: "compagnieDesIndes",
    period: "XVIIe – XVIIIe siècles",
    detail:
      "Exportée de Chine vers l'Europe sur les navires des compagnies des Indes, cette porcelaine de commande mêle goût occidental et savoir-faire chinois : famille rose, famille verte, armoriées, bleu et blanc, décors de grisaille. Les pièces armoriées sont les plus convoitées.",
    marks:
      "Rarement marquées. Le diagnostic repose sur la pâte, la couverte, les émaux (famille rose, verte), le poids, les restaurations et la qualité du décor.",
  },
  {
    slug: "chine-japon",
    name: "Chine & Japon",
    tagline: "Potiches, vases et porcelaines d'Asie",
    photo: "chineVase",
    period: "Ming, Qing, Meiji et au-delà",
    detail:
      "Bleu et blanc, famille rose, céladon, Imari, Kakiemon, Satsuma, Arita : la porcelaine d'Asie est vaste et sujette aux copies. Une marque de règne ne suffit jamais : seul l'examen de la pâte, du pied, de la couverte et du décor permet de trancher.",
    marks:
      "Marques de règne à six caractères (Kangxi, Qianlong…), marques de hall, sceaux, signatures d'ateliers japonais. De nombreuses marques sont des marques d'hommage, apposées longtemps après le règne.",
  },
  {
    slug: "figurines",
    name: "Figurines & biscuits",
    tagline: "Sujets, groupes et statuettes",
    photo: "meissenFigurine",
    period: "XVIIIe – XXe siècles",
    detail:
      "Sujets galants, bergères, groupes de Saxe, biscuits de Sèvres, figurines Art déco, statuettes de Capodimonte : l'état de conservation (doigts, fleurs de dentelle, mains) pèse lourdement sur la valeur. Nous examinons chaque restauration.",
    marks:
      "Marques incisées ou en creux, numéros de modèle, monogrammes de modeleurs, marques bleues ou imprimées de la manufacture.",
  },
  {
    slug: "services-de-table",
    name: "Services de table",
    tagline: "Services complets et pièces d'apparat",
    photo: "meissenSoupiere",
    period: "XIXe – XXe siècles",
    detail:
      "Services de 12 couverts, soupières, plats, assiettes à dessert, services à thé et à café, services de mariage : un ensemble complet, documenté et sans éclat, se valorise bien mieux que des pièces dispersées. Ne les séparez pas avant l'estimation.",
    marks:
      "Marques de manufacture, marques de revendeurs (orfèvres, maisons de la place Vendôme), numéros de série de décor.",
  },
];
