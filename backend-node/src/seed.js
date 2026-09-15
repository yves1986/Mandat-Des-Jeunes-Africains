require("dotenv").config();

const connectDB = require("./config/db");
const Action = require("./models/Action");

const ACTIONS = [
  {
    title: "Sommet de la Jeunesse auprès de l'Union Africaine",
    slug: "sommet-jeunesse-ua",
    category: "Plaidoyer",
    country: "Éthiopie",
    date: "Mars 2025",
    summary:
      "Délégation de 40 jeunes leaders présentant la Charte du Mandat devant les instances de l'UA à Addis-Abeba.",
  },
  {
    title: "Académie du Leadership Civique",
    slug: "academie-leadership-civique",
    category: "Formation",
    country: "Sénégal",
    date: "Janvier 2025",
    summary:
      "Programme de formation de 6 semaines pour 300 jeunes sur la gouvernance locale et la prise de parole publique.",
  },
  {
    title: "Caravane pour l'inscription sur les listes électorales",
    slug: "caravane-inscription-listes-electorales",
    category: "Mobilisation",
    country: "Côte d'Ivoire",
    date: "Novembre 2024",
    summary:
      "Campagne de sensibilisation dans 15 villes pour l'enrôlement des jeunes de 18 à 25 ans sur les listes électorales.",
  },
  {
    title: "Journées de reboisement communautaire",
    slug: "reboisement-communautaire",
    category: "Terrain",
    country: "Kenya",
    date: "Octobre 2024",
    summary:
      "Plantation de 5 000 arbres avec les communautés locales, en partenariat avec les autorités du comté de Kiambu.",
  },
  {
    title: "Forum régional de l'entrepreneuriat jeunesse",
    slug: "forum-entrepreneuriat-jeunesse",
    category: "Mobilisation",
    country: "Ghana",
    date: "Août 2024",
    summary:
      "Rencontre de 1 200 jeunes entrepreneurs avec des décideurs publics et des investisseurs panafricains.",
  },
  {
    title: "Atelier de rédaction de notes de plaidoyer",
    slug: "atelier-redaction-plaidoyer",
    category: "Formation",
    country: "Maroc",
    date: "Juin 2024",
    summary:
      "Renforcement des capacités des ambassadeurs nationaux à documenter et défendre des dossiers de plaidoyer.",
  },
];

async function seed() {
  await connectDB();

  for (const action of ACTIONS) {
    await Action.findOneAndUpdate({ slug: action.slug }, action, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
  }

  console.log(`[seed] Inserted/updated ${ACTIONS.length} actions.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("[seed] Failed:", err);
  process.exit(1);
});
