import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { isLocale, type Locale } from "@/lib/i18n";

type Member = {
  name: string;
  role: Record<Locale, string>;
  photo: string;
  linkedin: string;
};

const PRESIDENT: Member = {
  name: "Ange Morel Tchetemomon",
  role: { fr: "Président-Fondateur", en: "Founding President" },
  photo: "/images/ange-morel-tchetemomon.jpeg",
  linkedin: "https://www.linkedin.com/in/ange-morel-tchetemomon",
};

const BUREAU: Member[] = [
  {
    name: "Alex Tchetemomon",
    role: { fr: "Secrétaire Général", en: "Secretary General" },
    photo: "/images/alex-tchetemomon.jpeg",
    linkedin: "https://www.linkedin.com/in/alex-junior-tchetemomon-8533322b3",
  },
  {
    name: "Apollinaire Gbadjike",
    role: { fr: "Directeur de Cabinet", en: "Chief of Staff" },
    photo: "/images/apollinaire-gbadjike.jpeg",
    linkedin: "https://www.linkedin.com/in/apollinaire-gbadjike-66417526a",
  },
  {
    name: "Junior Hounkpatin",
    role: { fr: "Trésorier Général", en: "Treasurer General" },
    photo: "/images/junior-hounkpatin.jpeg",
    linkedin: "https://www.linkedin.com/in/junior-hounkpatin-79a238359",
  },
  {
    name: "Djeamin Yves Gnenessemin",
    role: {
      fr: "Directeur de la stratégie entrepreneuriale et de l'image",
      en: "Director of Entrepreneurial Strategy and Image",
    },
    photo: "/images/gnenessemin.jpg",
    linkedin: "https://www.linkedin.com/in/gnenessemin",
  },
];

const DIRECTORATE: Member[] = [
  {
    name: "Dimitri DeMarco",
    role: {
      fr: "Secrétaire exécutif chargé de l'entrepreneuriat, Porte-parole du MJA",
      en: "Executive Secretary for Entrepreneurship, MJA Spokesperson",
    },
    photo: "/images/dimitri-demarco.jpeg",
    linkedin: "https://www.linkedin.com/in/dimitri-demarco-531b62375",
  },
  {
    name: "Abdoulaye Kébé",
    role: {
      fr: "Secrétaire exécutif chargé des projets industriels",
      en: "Executive Secretary for Industrial Projects",
    },
    photo: "/images/abdoulaye-kebe.jpeg",
    linkedin: "https://www.linkedin.com/in/abdoulaye-talibou-kebe-342448250",
  },
  {
    name: "Josué Amadou Toho",
    role: {
      fr: "Directeur du Pôle Formation et Engagement Financier et Citoyen, Porte-parole Adjoint",
      en: "Director of Training and Civic & Financial Engagement, Deputy Spokesperson",
    },
    photo: "/images/josue-amadou-toho.jpeg",
    linkedin: "https://www.linkedin.com/in/josué-amadou-toho-64839b262",
  },
  {
    name: "Kesse Manacet",
    role: { fr: "Directeur Pôle Juridique", en: "Director of Legal Affairs" },
    photo: "/images/kesse-manacet.jpeg",
    linkedin: "https://www.linkedin.com/in/ange-manacet-kesse-99229028a",
  },
  {
    name: "Abdoul Aziz Karamoko",
    role: {
      fr: "Conseiller Projets Culturels et Cadre de Vie",
      en: "Advisor for Cultural Projects and Living Environment",
    },
    photo: "/images/abdoul-aziz-karamoko.jpeg",
    linkedin: "https://www.linkedin.com/in/abdoul-aziz-karamoko-0aa661340",
  },
];

const COORDINATORS: Member[] = [
  {
    name: "Mala Florent Ouanto",
    role: { fr: "Coordinateur du District des Montagnes", en: "District Coordinator, Montagnes" },
    photo: "/images/mala-florent-ouanto.jpeg",
    linkedin: "https://www.linkedin.com/in/mala-florent-ouanto-411227396",
  },
  {
    name: "David Kotchi",
    role: { fr: "Coordinateur du District des Lagunes", en: "District Coordinator, Lagunes" },
    photo: "/images/david-kotchi.jpeg",
    linkedin: "https://www.linkedin.com/in/david-kotchi-899b1841a",
  },
];

const TEXT: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  presidentEyebrow: string;
  bureauEyebrow: string;
  bureauTitle: string;
  directorateEyebrow: string;
  directorateTitle: string;
  coordinatorsEyebrow: string;
  coordinatorsTitle: string;
  linkedinLabel: string;
}> = {
  fr: {
    metaTitle: "Gouvernance",
    metaDescription:
      "L'organigramme du Mandat des Jeunes Africains : du Président-Fondateur aux coordinateurs de district, découvrez les membres qui portent le mouvement.",
    eyebrow: "Gouvernance",
    title: "L'organigramme du Mandat des Jeunes Africains",
    description:
      "Du Président-Fondateur aux coordinateurs de terrain, chaque membre du mouvement porte une responsabilité claire au service de la jeunesse africaine.",
    presidentEyebrow: "Président-Fondateur",
    bureauEyebrow: "Bureau exécutif",
    bureauTitle: "L'équipe de direction",
    directorateEyebrow: "Secrétariats & pôles",
    directorateTitle: "Secrétaires exécutifs et directeurs de pôle",
    coordinatorsEyebrow: "Terrain",
    coordinatorsTitle: "Coordinateurs de district",
    linkedinLabel: "Profil LinkedIn",
  },
  en: {
    metaTitle: "Governance",
    metaDescription:
      "The Mandat des Jeunes Africains org chart: from the Founding President to district coordinators, meet the members who carry the movement.",
    eyebrow: "Governance",
    title: "The Mandat des Jeunes Africains org chart",
    description:
      "From the Founding President to field coordinators, every member of the movement carries a clear responsibility in service of African youth.",
    presidentEyebrow: "Founding President",
    bureauEyebrow: "Executive Bureau",
    bureauTitle: "The leadership team",
    directorateEyebrow: "Secretariats & departments",
    directorateTitle: "Executive secretaries and department directors",
    coordinatorsEyebrow: "Field",
    coordinatorsTitle: "District coordinators",
    linkedinLabel: "LinkedIn profile",
  },
};

function MemberCard({ member, locale, large = false }: { member: Member; locale: Locale; large?: boolean }) {
  return (
    <div className={`card flex flex-col items-center p-6 text-center ${large ? "sm:p-10" : ""}`}>
      <div
        className={`overflow-hidden rounded-full bg-brand-cream-dark ring-4 ring-brand-gold/20 ${
          large ? "h-40 w-40 sm:h-48 sm:w-48" : "h-28 w-28"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h3 className={`mt-5 font-bold text-brand-brown-dark ${large ? "text-xl" : "text-base"}`}>{member.name}</h3>
      <p className={`mt-2 text-brand-brown-dark/70 ${large ? "text-base" : "text-sm"}`}>{member.role[locale]}</p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold text-brand-green hover:bg-brand-green/20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
        </svg>
        {TEXT[locale].linkedinLabel}
      </a>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  return { title: TEXT[locale].metaTitle, description: TEXT[locale].metaDescription };
}

export default function GouvernancePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const t = TEXT[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="container-page py-20">
        <Reveal className="mx-auto max-w-sm">
          <span className="section-eyebrow mb-4 block text-center">{t.presidentEyebrow}</span>
          <MemberCard member={PRESIDENT} locale={locale} large />
        </Reveal>
      </section>

      <section className="bg-brand-cream-dark py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.bureauEyebrow} title={t.bureauTitle} align="center" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUREAU.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <MemberCard member={member} locale={locale} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <Reveal>
          <SectionHeading eyebrow={t.directorateEyebrow} title={t.directorateTitle} align="center" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIRECTORATE.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.1}>
              <MemberCard member={member} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream-dark py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.coordinatorsEyebrow} title={t.coordinatorsTitle} align="center" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl">
            {COORDINATORS.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <MemberCard member={member} locale={locale} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
