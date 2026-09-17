import type { Locale } from "./i18n";
import type { PillarIconName } from "@/components/PillarIcon";

export type ActionCategory = "Plaidoyer" | "Formation" | "Mobilisation" | "Terrain";

export type ActionItem = {
  slug: string;
  title: string;
  category: ActionCategory;
  categoryLabel: string;
  country: string;
  date: string;
  summary: string;
};

export type EngagementWayId = "member" | "ambassador" | "donate" | "partner";

// Canonical values expected by the backend API (kept stable across locales).
export const ENGAGEMENT_API_VALUE: Record<EngagementWayId, string> = {
  member: "Devenir membre",
  ambassador: "Devenir ambassadeur national",
  donate: "Faire un don",
  partner: "Devenir partenaire",
};

type Content = {
  heroStats: { value: string; label: string }[];
  stats: { value: string; label: string }[];
  pillars: { icon: PillarIconName; title: string; description: string }[];
  actions: ActionItem[];
  videos: { title: string; duration: string }[];
  pressQuotes: { outlet: string; quote: string }[];
  publications: { title: string; type: string; size: string }[];
  engagementWays: { id: EngagementWayId; title: string; description: string }[];
  values: { title: string; description: string }[];
  timeline: { year: string; title: string; description: string }[];
  offices: { region: string; city: string }[];
};

const fr: Content = {
  heroStats: [
    { value: "10K+", label: "Membres" },
    { value: "50+", label: "Projets" },
    { value: "25", label: "Pays" },
  ],
  stats: [
    { value: "54", label: "Pays africains représentés" },
    { value: "12 000+", label: "Jeunes mobilisés" },
    { value: "230+", label: "Actions de terrain menées" },
    { value: "40", label: "Antennes nationales actives" },
  ],
  pillars: [
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
  ],
  actions: [
    {
      slug: "sommet-jeunesse-ua",
      title: "Sommet de la Jeunesse auprès de l'Union Africaine",
      category: "Plaidoyer",
      categoryLabel: "Plaidoyer",
      country: "Éthiopie",
      date: "Mars 2025",
      summary:
        "Délégation de 40 jeunes leaders présentant la Charte du Mandat devant les instances de l'UA à Addis-Abeba.",
    },
    {
      slug: "academie-leadership-civique",
      title: "Académie du Leadership Civique",
      category: "Formation",
      categoryLabel: "Formation",
      country: "Sénégal",
      date: "Janvier 2025",
      summary:
        "Programme de formation de 6 semaines pour 300 jeunes sur la gouvernance locale et la prise de parole publique.",
    },
    {
      slug: "caravane-inscription-listes-electorales",
      title: "Caravane pour l'inscription sur les listes électorales",
      category: "Mobilisation",
      categoryLabel: "Mobilisation",
      country: "Côte d'Ivoire",
      date: "Novembre 2024",
      summary:
        "Campagne de sensibilisation dans 15 villes pour l'enrôlement des jeunes de 18 à 25 ans sur les listes électorales.",
    },
    {
      slug: "reboisement-communautaire",
      title: "Journées de reboisement communautaire",
      category: "Terrain",
      categoryLabel: "Terrain",
      country: "Kenya",
      date: "Octobre 2024",
      summary:
        "Plantation de 5 000 arbres avec les communautés locales, en partenariat avec les autorités du comté de Kiambu.",
    },
    {
      slug: "forum-entrepreneuriat-jeunesse",
      title: "Forum régional de l'entrepreneuriat jeunesse",
      category: "Mobilisation",
      categoryLabel: "Mobilisation",
      country: "Ghana",
      date: "Août 2024",
      summary:
        "Rencontre de 1 200 jeunes entrepreneurs avec des décideurs publics et des investisseurs panafricains.",
    },
    {
      slug: "atelier-redaction-plaidoyer",
      title: "Atelier de rédaction de notes de plaidoyer",
      category: "Formation",
      categoryLabel: "Formation",
      country: "Maroc",
      date: "Juin 2024",
      summary:
        "Renforcement des capacités des ambassadeurs nationaux à documenter et défendre des dossiers de plaidoyer.",
    },
  ],
  videos: [
    { title: "La Charte du Mandat expliquée en 3 minutes", duration: "3:12" },
    { title: "Retour sur le Sommet de la Jeunesse à Addis-Abeba", duration: "5:40" },
    { title: "Portraits d'ambassadeurs : voix du terrain", duration: "7:05" },
  ],
  pressQuotes: [
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
      quote: "« Une mobilisation continentale rare par son ampleur et sa coordination. »",
    },
  ],
  publications: [
    { title: "Charte du Mandat des Jeunes Africains", type: "PDF", size: "1.2 Mo" },
    { title: "Rapport annuel d'activités 2024", type: "PDF", size: "3.4 Mo" },
    { title: "Kit média — logos, chartes et visuels", type: "ZIP", size: "8.1 Mo" },
    { title: "Mémorandum de plaidoyer — Emploi des jeunes", type: "PDF", size: "980 Ko" },
  ],
  engagementWays: [
    {
      id: "member",
      title: "Devenir membre",
      description:
        "Rejoignez la communauté du Mandat et participez aux formations, campagnes et rencontres organisées dans votre pays.",
    },
    {
      id: "ambassador",
      title: "Devenir ambassadeur national",
      description:
        "Portez la voix du mouvement dans votre pays, animez une antenne locale et coordonnez les actions de terrain.",
    },
    {
      id: "donate",
      title: "Faire un don",
      description:
        "Soutenez financièrement nos programmes de formation civique, nos campagnes de plaidoyer et nos actions communautaires.",
    },
    {
      id: "partner",
      title: "Devenir partenaire",
      description:
        "Organisations, institutions et entreprises : construisons ensemble des programmes au service de la jeunesse africaine.",
    },
  ],
  values: [
    { title: "Panafricanisme", description: "Une seule jeunesse, un seul continent, un destin commun." },
    { title: "Intégrité", description: "Transparence et redevabilité dans chacune de nos actions." },
    { title: "Inclusion", description: "Aucune voix ne doit rester en marge, quel que soit le pays ou le genre." },
    { title: "Excellence", description: "Rigueur et exigence dans la formation et le plaidoyer." },
  ],
  timeline: [
    { year: "2021", title: "Naissance de l'idée", description: "Un collectif de jeunes de 8 pays imagine une charte commune pour la jeunesse africaine." },
    { year: "2022", title: "Lancement officiel", description: "Le Mandat des Jeunes Africains est officiellement lancé lors du Forum Panafricain de la Jeunesse." },
    { year: "2023", title: "Expansion continentale", description: "Ouverture de 25 antennes nationales et premières actions de plaidoyer régional." },
    { year: "2024", title: "Reconnaissance institutionnelle", description: "Statut d'observateur obtenu auprès de plusieurs commissions jeunesse régionales." },
    { year: "2025", title: "40 pays et plus", description: "Le mouvement rassemble aujourd'hui plus de 12 000 jeunes actifs dans 40 pays." },
  ],
  offices: [
    { region: "Afrique de l'Ouest", city: "Dakar, Sénégal · Abidjan, Côte d'Ivoire" },
    { region: "Afrique de l'Est", city: "Nairobi, Kenya" },
    { region: "Afrique du Nord", city: "Rabat, Maroc" },
    { region: "Afrique Centrale & Australe", city: "Kinshasa, RDC" },
  ],
};

const en: Content = {
  heroStats: [
    { value: "10K+", label: "Members" },
    { value: "50+", label: "Projects" },
    { value: "25", label: "Countries" },
  ],
  stats: [
    { value: "54", label: "African countries represented" },
    { value: "12,000+", label: "Youth mobilized" },
    { value: "230+", label: "Field actions carried out" },
    { value: "40", label: "Active national chapters" },
  ],
  pillars: [
    {
      icon: "education",
      title: "Civic education",
      description:
        "Training young people in active citizenship, institutions and governance mechanisms so they can fully exercise their mandate.",
    },
    {
      icon: "plaidoyer",
      title: "Political advocacy",
      description:
        "Carrying the voice of youth to national, regional and African Union institutions for more inclusive policies.",
    },
    {
      icon: "leadership",
      title: "Local leadership",
      description:
        "Identifying, training and supporting field ambassadors able to mobilize their communities day to day.",
    },
  ],
  actions: [
    {
      slug: "sommet-jeunesse-ua",
      title: "Youth Summit at the African Union",
      category: "Plaidoyer",
      categoryLabel: "Advocacy",
      country: "Ethiopia",
      date: "March 2025",
      summary:
        "A delegation of 40 young leaders presented the Mandate Charter before AU bodies in Addis Ababa.",
    },
    {
      slug: "academie-leadership-civique",
      title: "Civic Leadership Academy",
      category: "Formation",
      categoryLabel: "Training",
      country: "Senegal",
      date: "January 2025",
      summary:
        "A 6-week training program for 300 young people on local governance and public speaking.",
    },
    {
      slug: "caravane-inscription-listes-electorales",
      title: "Voter Registration Caravan",
      category: "Mobilisation",
      categoryLabel: "Mobilization",
      country: "Ivory Coast",
      date: "November 2024",
      summary:
        "An awareness campaign across 15 cities to register 18-25 year-olds on the electoral rolls.",
    },
    {
      slug: "reboisement-communautaire",
      title: "Community Reforestation Days",
      category: "Terrain",
      categoryLabel: "Field action",
      country: "Kenya",
      date: "October 2024",
      summary:
        "Planting 5,000 trees with local communities, in partnership with Kiambu County authorities.",
    },
    {
      slug: "forum-entrepreneuriat-jeunesse",
      title: "Regional Youth Entrepreneurship Forum",
      category: "Mobilisation",
      categoryLabel: "Mobilization",
      country: "Ghana",
      date: "August 2024",
      summary:
        "A gathering of 1,200 young entrepreneurs with policymakers and pan-African investors.",
    },
    {
      slug: "atelier-redaction-plaidoyer",
      title: "Advocacy Brief Writing Workshop",
      category: "Formation",
      categoryLabel: "Training",
      country: "Morocco",
      date: "June 2024",
      summary:
        "Building national ambassadors' skills to document and defend advocacy cases.",
    },
  ],
  videos: [
    { title: "The Mandate Charter explained in 3 minutes", duration: "3:12" },
    { title: "Recap of the Youth Summit in Addis Ababa", duration: "5:40" },
    { title: "Ambassador portraits: voices from the field", duration: "7:05" },
  ],
  pressQuotes: [
    {
      outlet: "Jeune Afrique",
      quote: "\"A movement that finally structures African youth's voice before institutions.\"",
    },
    {
      outlet: "RFI",
      quote: "\"Mandat des Jeunes Africains has become an unavoidable voice in youth policy.\"",
    },
    {
      outlet: "Africanews",
      quote: "\"A continental mobilization rare in scale and coordination.\"",
    },
  ],
  publications: [
    { title: "Mandat des Jeunes Africains Charter", type: "PDF", size: "1.2 MB" },
    { title: "2024 Annual Activity Report", type: "PDF", size: "3.4 MB" },
    { title: "Media kit — logos, guidelines and visuals", type: "ZIP", size: "8.1 MB" },
    { title: "Advocacy memo — Youth employment", type: "PDF", size: "980 KB" },
  ],
  engagementWays: [
    {
      id: "member",
      title: "Become a member",
      description:
        "Join the Mandate community and take part in trainings, campaigns and gatherings organized in your country.",
    },
    {
      id: "ambassador",
      title: "Become a national ambassador",
      description:
        "Carry the movement's voice in your country, run a local chapter and coordinate field actions.",
    },
    {
      id: "donate",
      title: "Make a donation",
      description:
        "Financially support our civic training programs, advocacy campaigns and community actions.",
    },
    {
      id: "partner",
      title: "Become a partner",
      description:
        "Organizations, institutions and businesses: let's build programs together for African youth.",
    },
  ],
  values: [
    { title: "Pan-Africanism", description: "One youth, one continent, one shared destiny." },
    { title: "Integrity", description: "Transparency and accountability in everything we do." },
    { title: "Inclusion", description: "No voice should be left out, regardless of country or gender." },
    { title: "Excellence", description: "Rigor and high standards in training and advocacy." },
  ],
  timeline: [
    { year: "2021", title: "The idea is born", description: "A collective of young people from 8 countries envisions a shared charter for African youth." },
    { year: "2022", title: "Official launch", description: "Mandat des Jeunes Africains is officially launched at the Pan-African Youth Forum." },
    { year: "2023", title: "Continental expansion", description: "25 national chapters open and the first regional advocacy actions take place." },
    { year: "2024", title: "Institutional recognition", description: "Observer status obtained with several regional youth commissions." },
    { year: "2025", title: "40 countries and counting", description: "The movement now brings together more than 12,000 active youth across 40 countries." },
  ],
  offices: [
    { region: "West Africa", city: "Dakar, Senegal · Abidjan, Côte d'Ivoire" },
    { region: "East Africa", city: "Nairobi, Kenya" },
    { region: "North Africa", city: "Rabat, Morocco" },
    { region: "Central & Southern Africa", city: "Kinshasa, DRC" },
  ],
};

const CONTENT: Record<Locale, Content> = { fr, en };

export function getContent(locale: Locale): Content {
  return CONTENT[locale] ?? CONTENT.fr;
}
