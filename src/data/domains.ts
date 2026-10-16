export type Domain = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  imageTitle: string;
  period: string;
  detail: string;
  marks: string;
};

export const DOMAINS: Domain[] = [
  {
    slug: "sevres",
    name: "Sèvres",
    tagline: "La manufacture royale",
    image: "/art/vase-seves.svg",
    imageAlt: "Vase en porcelaine de Sèvres bleu profond à décor doré",
    imageTitle: "Vase de style Sèvres, bleu nuit et or — expertise et rachat",
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
    image: "/art/assiette-limoges.svg",
    imageAlt: "Assiette en porcelaine de Limoges à décor floral et filet or",
    imageTitle: "Assiette ancienne de Limoges, filet or — estimation gratuite",
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
    image: "/art/theiere-meissen.svg",
    imageAlt: "Théière en porcelaine de Meissen à décor de fleurs polychromes",
    imageTitle: "Théière de Saxe type Meissen, décor floral — rachat de porcelaine",
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
    image: "/art/tasse-compagnie-des-indes.svg",
    imageAlt: "Tasse et sous-tasse en porcelaine de la Compagnie des Indes",
    imageTitle: "Tasse et sous-tasse Compagnie des Indes — estimation sans engagement",
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
    image: "/art/potiche-asie.svg",
    imageAlt: "Potiche en porcelaine bleu et blanc d'Asie, décor de lotus",
    imageTitle: "Potiche bleu et blanc de Chine, décor de lotus — expertise",
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
    image: "/art/figurine-biscuit.svg",
    imageAlt: "Figurine en biscuit de porcelaine, dame en robe à crinoline",
    imageTitle: "Figurine ancienne en biscuit de porcelaine — rachat",
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
    image: "/art/soupiere-service.svg",
    imageAlt: "Soupière en porcelaine blanche et or d'un service de table ancien",
    imageTitle: "Soupière d'un service de table ancien — estimation de vaisselle",
    period: "XIXe – XXe siècles",
    detail:
      "Services de 12 couverts, soupières, plats, assiettes à dessert, services à thé et à café, services de mariage : un ensemble complet, documenté et sans éclat, se valorise bien mieux que des pièces dispersées. Ne les séparez pas avant l'estimation.",
    marks:
      "Marques de manufacture, marques de revendeurs (orfèvres, maisons de la place Vendôme), numéros de série de décor.",
  },
];
