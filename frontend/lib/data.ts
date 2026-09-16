export const STATS = [
  { value: "54", label: "Pays africains représentés" },
  { value: "12 000+", label: "Jeunes mobilisés" },
  { value: "230+", label: "Actions de terrain menées" },
  { value: "40", label: "Antennes nationales actives" },
];

export const HERO_STATS = [
  { value: "10K+", label: "Membres" },
  { value: "50+", label: "Projets" },
  { value: "25", label: "Pays" },
];

export const PILLARS: { icon: "education" | "plaidoyer" | "leadership"; title: string; description: string }[] = [
  {
    icon: "education",
    title: "Éducation civique",
    description:
      "Former les jeunes à la citoyenneté active, aux institutions et aux mécanismes de gouvernance pour qu'ils exercent pleinement leur mandat.",
  },
  {
    icon: "plaidoyer",
    title: "Plaidoyer politique",
    description:
      "Porter la voix de la jeunesse auprès des institutions nationales, régionales et de l'Union Africaine pour des politiques inclusives.",
  },
  {
    icon: "leadership",
    title: "Leadership local",
    description:
      "Identifier, former et accompagner des ambassadeurs de terrain capables de mobiliser leurs communautés au quotidien.",
  },
];

export type ActionCategory = "Plaidoyer" | "Formation" | "Mobilisation" | "Terrain";

export type ActionItem = {
  slug: string;
  title: string;
  category: ActionCategory;
  country: string;
  date: string;
  summary: string;
};

export const ACTIONS: ActionItem[] = [
  {
    slug: "sommet-jeunesse-ua",
    title: "Sommet de la Jeunesse auprès de l'Union Africaine",
    category: "Plaidoyer",
    country: "Éthiopie",
    date: "Mars 2025",
    summary:
      "Délégation de 40 jeunes leaders présentant la Charte du Mandat devant les instances de l'UA à Addis-Abeba.",
  },
  {
    slug: "academie-leadership-civique",
    title: "Académie du Leadership Civique",
    category: "Formation",
    country: "Sénégal",
    date: "Janvier 2025",
    summary:
      "Programme de formation de 6 semaines pour 300 jeunes sur la gouvernance locale et la prise de parole publique.",
  },
  {
    slug: "caravane-inscription-listes-electorales",
    title: "Caravane pour l'inscription sur les listes électorales",
    category: "Mobilisation",
    country: "Côte d'Ivoire",
    date: "Novembre 2024",
    summary:
      "Campagne de sensibilisation dans 15 villes pour l'enrôlement des jeunes de 18 à 25 ans sur les listes électorales.",
  },
  {
    slug: "reboisement-communautaire",
    title: "Journées de reboisement communautaire",
    category: "Terrain",
    country: "Kenya",
    date: "Octobre 2024",
    summary:
      "Plantation de 5 000 arbres avec les communautés locales, en partenariat avec les autorités du comté de Kiambu.",
  },
  {
    slug: "forum-entrepreneuriat-jeunesse",
    title: "Forum régional de l'entrepreneuriat jeunesse",
    category: "Mobilisation",
    country: "Ghana",
    date: "Août 2024",
    summary:
      "Rencontre de 1 200 jeunes entrepreneurs avec des décideurs publics et des investisseurs panafricains.",
  },
  {
    slug: "atelier-redaction-plaidoyer",
    title: "Atelier de rédaction de notes de plaidoyer",
    category: "Formation",
    country: "Maroc",
    date: "Juin 2024",
    summary:
      "Renforcement des capacités des ambassadeurs nationaux à documenter et défendre des dossiers de plaidoyer.",
  },
];

export const VIDEOS = [
  {
    title: "La Charte du Mandat expliquée en 3 minutes",
    duration: "3:12",
  },
  {
    title: "Retour sur le Sommet de la Jeunesse à Addis-Abeba",
    duration: "5:40",
  },
  {
    title: "Portraits d'ambassadeurs : voix du terrain",
    duration: "7:05",
  },
];

export const PRESS_QUOTES = [
  {
    outlet: "Jeune Afrique",
    quote:
      "« Un mouvement qui structure enfin la parole de la jeunesse africaine face aux institutions. »",
  },
  {
    outlet: "RFI",
    quote:
      "« Le Mandat des Jeunes Africains s'impose comme un interlocuteur incontournable des politiques jeunesse. »",
  },
  {
    outlet: "Africanews",
    quote:
      "« Une mobilisation continentale rare par son ampleur et sa coordination. »",
  },
];

export const PUBLICATIONS = [
  { title: "Charte du Mandat des Jeunes Africains", type: "PDF", size: "1.2 Mo" },
  { title: "Rapport annuel d'activités 2024", type: "PDF", size: "3.4 Mo" },
  { title: "Kit média — logos, chartes et visuels", type: "ZIP", size: "8.1 Mo" },
  { title: "Mémorandum de plaidoyer — Emploi des jeunes", type: "PDF", size: "980 Ko" },
];

export const ENGAGEMENT_WAYS = [
  {
    title: "Devenir membre",
    description:
      "Rejoignez la communauté du Mandat et participez aux formations, campagnes et rencontres organisées dans votre pays.",
  },
  {
    title: "Devenir ambassadeur national",
    description:
      "Portez la voix du mouvement dans votre pays, animez une antenne locale et coordonnez les actions de terrain.",
  },
  {
    title: "Faire un don",
    description:
      "Soutenez financièrement nos programmes de formation civique, nos campagnes de plaidoyer et nos actions communautaires.",
  },
  {
    title: "Devenir partenaire",
    description:
      "Organisations, institutions et entreprises : construisons ensemble des programmes au service de la jeunesse africaine.",
  },
];

export const VALUES = [
  { title: "Panafricanisme", description: "Une seule jeunesse, un seul continent, un destin commun." },
  { title: "Intégrité", description: "Transparence et redevabilité dans chacune de nos actions." },
  { title: "Inclusion", description: "Aucune voix ne doit rester en marge, quel que soit le pays ou le genre." },
  { title: "Excellence", description: "Rigueur et exigence dans la formation et le plaidoyer." },
];

export const TIMELINE = [
  { year: "2021", title: "Naissance de l'idée", description: "Un collectif de jeunes de 8 pays imagine une charte commune pour la jeunesse africaine." },
  { year: "2022", title: "Lancement officiel", description: "Le Mandat des Jeunes Africains est officiellement lancé lors du Forum Panafricain de la Jeunesse." },
  { year: "2023", title: "Expansion continentale", description: "Ouverture de 25 antennes nationales et premières actions de plaidoyer régional." },
  { year: "2024", title: "Reconnaissance institutionnelle", description: "Statut d'observateur obtenu auprès de plusieurs commissions jeunesse régionales." },
  { year: "2025", title: "40 pays et plus", description: "Le mouvement rassemble aujourd'hui plus de 12 000 jeunes actifs dans 40 pays." },
];
