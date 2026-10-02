import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { getContent } from "@/lib/data";
import { isLocale, type Locale } from "@/lib/i18n";

type AdFormat = { title: string; description: string };

const TEXT: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  audienceEyebrow: string;
  audienceTitle: string;
  formatsEyebrow: string;
  formatsTitle: string;
  formats: AdFormat[];
  whyEyebrow: string;
  whyTitle: string;
  whyPoints: { title: string; description: string }[];
  contactEyebrow: string;
  contactTitle: string;
  contactText: string;
  subject: string;
}> = {
  fr: {
    metaTitle: "Annonceurs & Partenaires",
    metaDescription:
      "Touchez la jeunesse africaine engagée : découvrez les formats publicitaires et de partenariat proposés par le Mandat des Jeunes Africains.",
    eyebrow: "Annonceurs",
    title: "Connectez votre marque à la jeunesse africaine engagée",
    description:
      "Le Mandat des Jeunes Africains rassemble une audience continentale, mobilisée et fidèle. Nous proposons à nos partenaires des formats publicitaires et de sponsoring pensés pour un impact réel, au service d'une cause panafricaine.",
    audienceEyebrow: "Notre audience",
    audienceTitle: "Une communauté panafricaine en pleine croissance",
    formatsEyebrow: "Nos offres",
    formatsTitle: "Des formats publicitaires adaptés à vos objectifs",
    formats: [
      {
        title: "Bannières display",
        description:
          "Emplacements visibles sur la page d'accueil et les pages à forte audience (Actions, Médias), en formats standards responsive.",
      },
      {
        title: "Newsletter sponsorisée",
        description:
          "Un encart dédié dans notre newsletter mensuelle, envoyée à une communauté de jeunes leaders et de partenaires engagés.",
      },
      {
        title: "Contenu de marque",
        description:
          "Articles, vidéos ou portraits coproduits avec notre équipe éditoriale, alignés avec les valeurs du mouvement.",
      },
      {
        title: "Partenariat d'événement",
        description:
          "Visibilité lors de nos sommets, forums et campagnes de terrain organisés à travers le continent.",
      },
      {
        title: "Bande d'information dédiée",
        description:
          "Un message ou une offre intégré à notre bandeau défilant, visible sur l'ensemble du site.",
      },
      {
        title: "Rapport d'impact co-brandé",
        description:
          "Association de votre marque à nos publications et rapports annuels, largement relayés dans les médias partenaires.",
      },
    ],
    whyEyebrow: "Pourquoi nous rejoindre",
    whyTitle: "Un partenariat à impact, pas seulement de la visibilité",
    whyPoints: [
      {
        title: "Audience qualifiée",
        description: "Une communauté jeune, mobilisée et présente dans 40 pays africains.",
      },
      {
        title: "Alignement RSE",
        description: "Associez votre marque à une cause panafricaine reconnue et à fort ancrage local.",
      },
      {
        title: "Retombées mesurables",
        description: "Statistiques d'audience et rapports de campagne partagés avec chaque partenaire.",
      },
    ],
    contactEyebrow: "Devenir partenaire",
    contactTitle: "Discutons de votre campagne",
    contactText:
      "Décrivez votre projet et nos équipes reviendront vers vous avec une proposition de partenariat adaptée à vos objectifs et votre budget.",
    subject: "Demande de partenariat publicitaire",
  },
  en: {
    metaTitle: "Advertisers & Partners",
    metaDescription:
      "Reach engaged African youth: discover the advertising and partnership formats offered by Mandat des Jeunes Africains.",
    eyebrow: "Advertisers",
    title: "Connect your brand with engaged African youth",
    description:
      "Mandat des Jeunes Africains brings together a continental, mobilized and loyal audience. We offer our partners advertising and sponsorship formats designed for real impact, in service of a pan-African cause.",
    audienceEyebrow: "Our audience",
    audienceTitle: "A growing pan-African community",
    formatsEyebrow: "Our offerings",
    formatsTitle: "Advertising formats tailored to your goals",
    formats: [
      {
        title: "Display banners",
        description:
          "Visible placements on the homepage and high-traffic pages (Actions, Media), in standard responsive formats.",
      },
      {
        title: "Sponsored newsletter",
        description:
          "A dedicated spot in our monthly newsletter, sent to a community of young leaders and engaged partners.",
      },
      {
        title: "Branded content",
        description:
          "Articles, videos or profiles co-produced with our editorial team, aligned with the movement's values.",
      },
      {
        title: "Event partnership",
        description:
          "Visibility at our summits, forums and field campaigns organized across the continent.",
      },
      {
        title: "Dedicated ticker message",
        description: "A message or offer integrated into our scrolling banner, visible sitewide.",
      },
      {
        title: "Co-branded impact report",
        description:
          "Associate your brand with our publications and annual reports, widely shared with media partners.",
      },
    ],
    whyEyebrow: "Why partner with us",
    whyTitle: "A partnership with impact, not just visibility",
    whyPoints: [
      {
        title: "Qualified audience",
        description: "A young, mobilized community present in 40 African countries.",
      },
      {
        title: "CSR alignment",
        description: "Associate your brand with a recognized, locally-rooted pan-African cause.",
      },
      {
        title: "Measurable results",
        description: "Audience statistics and campaign reports shared with every partner.",
      },
    ],
    contactEyebrow: "Become a partner",
    contactTitle: "Let's talk about your campaign",
    contactText:
      "Describe your project and our team will get back to you with a partnership proposal tailored to your goals and budget.",
    subject: "Advertising partnership request",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  return { title: TEXT[locale].metaTitle, description: TEXT[locale].metaDescription };
}

export default function AnnonceursPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const t = TEXT[locale];
  const content = getContent(locale);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="bg-brand-cream-dark py-16">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.audienceEyebrow} title={t.audienceTitle} align="center" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="card p-6 text-center">
                <p className="text-3xl font-extrabold text-brand-green">{stat.value}</p>
                <p className="mt-2 text-sm text-brand-brown-dark/70">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <Reveal>
          <SectionHeading eyebrow={t.formatsEyebrow} title={t.formatsTitle} />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.formats.map((format, i) => (
            <Reveal key={format.title} delay={(i % 3) * 0.1} className="card p-7">
              <h3 className="text-lg font-bold text-brand-brown-dark">{format.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-brown-dark/70">{format.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-brown-dark py-20 text-brand-cream">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.whyEyebrow} title={t.whyTitle} />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {t.whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.1}>
                <h3 className="text-lg font-bold text-brand-gold">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-cream/70">{point.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-brand-cream-dark py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading eyebrow={t.contactEyebrow} title={t.contactTitle} description={t.contactText} />
          </Reveal>
          <Reveal delay={0.15}>
            <ContactForm locale={locale} initialSubject={t.subject} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
