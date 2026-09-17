import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CutoutImage from "@/components/CutoutImage";
import Reveal from "@/components/Reveal";
import { getContent } from "@/lib/data";
import { isLocale, type Locale } from "@/lib/i18n";

const TEXT: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  visionTitle: string;
  visionText: string;
  missionTitle: string;
  missionText: string;
  valuesEyebrow: string;
  valuesTitle: string;
  historyEyebrow: string;
  historyTitle: string;
  govTitle: string;
  govText: string;
  charterTitle: string;
  charterText: string;
  founderEyebrow: string;
  founderTitle: string;
  founderQuote: string;
  founderRole: string;
}> = {
  fr: {
    metaTitle: "Le Mouvement",
    metaDescription:
      "Histoire, vision, valeurs et gouvernance du Mandat des Jeunes Africains, mouvement panafricain porté par et pour la jeunesse.",
    eyebrow: "Le Mouvement",
    title: "Une jeunesse organisée, une voix continentale",
    description:
      "Depuis 2021, le Mandat des Jeunes Africains rassemble des jeunes de tout le continent autour d'une charte commune et d'une ambition partagée : reprendre en main l'avenir de l'Afrique.",
    visionTitle: "Notre vision",
    visionText:
      "Une Afrique où chaque jeune dispose des moyens, des compétences et des espaces nécessaires pour participer pleinement aux décisions qui façonnent son avenir et celui de son continent.",
    missionTitle: "Notre mission",
    missionText:
      "Former, organiser et mobiliser la jeunesse africaine pour qu'elle porte collectivement le mandat du développement du continent, à travers le plaidoyer, l'éducation civique et l'action de terrain.",
    valuesEyebrow: "Nos valeurs",
    valuesTitle: "Ce qui nous guide au quotidien",
    historyEyebrow: "Notre histoire",
    historyTitle: "Le chemin parcouru depuis 2021",
    govTitle: "Gouvernance",
    govText:
      "Le mouvement est dirigé par un Comité Continental élu tous les deux ans par les délégations nationales. Chaque pays dispose d'une antenne animée par un ambassadeur national, chargé de coordonner les actions locales et de représenter les jeunes de son pays au sein des instances du mouvement.",
    charterTitle: "La Charte du Mandat",
    charterText:
      "Texte fondateur du mouvement, la Charte du Mandat définit les principes, engagements et mécanismes de redevabilité qui unissent tous les membres, quel que soit leur pays d'origine. Elle est disponible en téléchargement dans notre espace Médias.",
    founderEyebrow: "Mot du fondateur",
    founderTitle: "Une conviction à l'origine du mouvement",
    founderQuote:
      "« Nous avons créé ce mouvement parce que l'avenir de l'Afrique ne peut plus se décider sans sa jeunesse. Chaque jeune qui rejoint le Mandat porte une part de cette responsabilité collective. »",
    founderRole: "Fondateur, Mandat des Jeunes Africains",
  },
  en: {
    metaTitle: "The Movement",
    metaDescription:
      "History, vision, values and governance of Mandat des Jeunes Africains, a pan-African movement led by and for youth.",
    eyebrow: "The Movement",
    title: "Organized youth, a continental voice",
    description:
      "Since 2021, Mandat des Jeunes Africains has brought together young people across the continent around a shared charter and a common ambition: taking Africa's future into their own hands.",
    visionTitle: "Our vision",
    visionText:
      "An Africa where every young person has the means, skills and spaces needed to fully participate in the decisions shaping their future and that of their continent.",
    missionTitle: "Our mission",
    missionText:
      "Train, organize and mobilize African youth to collectively carry the mandate for the continent's development, through advocacy, civic education and field action.",
    valuesEyebrow: "Our values",
    valuesTitle: "What guides us every day",
    historyEyebrow: "Our history",
    historyTitle: "The journey since 2021",
    govTitle: "Governance",
    govText:
      "The movement is led by a Continental Committee elected every two years by national delegations. Each country has a chapter run by a national ambassador, responsible for coordinating local actions and representing the youth of their country within the movement's bodies.",
    charterTitle: "The Mandate Charter",
    charterText:
      "The movement's founding text, the Mandate Charter sets out the principles, commitments and accountability mechanisms that unite all members, whatever their country of origin. It is available for download in our Media section.",
    founderEyebrow: "Founder's word",
    founderTitle: "The conviction behind the movement",
    founderQuote:
      "\"We created this movement because Africa's future can no longer be decided without its youth. Every young person who joins the Mandate carries a share of this collective responsibility.\"",
    founderRole: "Founder, Mandat des Jeunes Africains",
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

export default function MouvementPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const t = TEXT[locale];
  const content = getContent(locale);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} cutout="/images/mouvement-hero.png" />

      <section id="mission" className="container-page scroll-mt-28 grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="order-2 hidden justify-self-center lg:order-1 lg:block">
          <CutoutImage
            src="/images/mission-visual.png"
            alt=""
            fadeTo="#EDE2C7"
            className="h-[420px] w-full max-w-sm"
          />
        </Reveal>
        <div className="order-1 grid gap-8 lg:order-2">
          <Reveal className="card p-8">
            <h2 className="text-2xl font-extrabold text-brand-brown-dark">{t.visionTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-brown-dark/70">{t.visionText}</p>
          </Reveal>
          <Reveal delay={0.1} className="card p-8">
            <h2 className="text-2xl font-extrabold text-brand-brown-dark">{t.missionTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-brown-dark/70">{t.missionText}</p>
          </Reveal>
        </div>
      </section>

      <section id="fondateur" className="container-page scroll-mt-28 py-20">
        <Reveal className="grid items-center gap-10 rounded-xl2 bg-white p-8 shadow-card ring-1 ring-black/5 lg:grid-cols-[1.1fr_1fr] lg:p-12">
          <div className="overflow-hidden rounded-xl2 bg-brand-cream-dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/founder.jpeg"
              alt={t.founderRole}
              className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 hover:scale-105 lg:aspect-[4/5]"
            />
          </div>
          <div>
            <span className="section-eyebrow">{t.founderEyebrow}</span>
            <h2 className="text-2xl font-extrabold text-brand-brown-dark sm:text-3xl">{t.founderTitle}</h2>
            <blockquote className="mt-5 text-lg italic leading-relaxed text-brand-brown-dark/80">
              {t.founderQuote}
            </blockquote>
            <p className="mt-5 text-sm font-bold uppercase tracking-wide text-brand-green">{t.founderRole}</p>
          </div>
        </Reveal>
      </section>

      <section id="valeurs" className="scroll-mt-28 bg-brand-cream-dark py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.valuesEyebrow} title={t.valuesTitle} align="center" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08} className="card p-6 text-center">
                <h3 className="text-lg font-bold text-brand-green">{value.title}</h3>
                <p className="mt-3 text-sm text-brand-brown-dark/70">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="histoire" className="container-page scroll-mt-28 py-20">
        <Reveal>
          <SectionHeading eyebrow={t.historyEyebrow} title={t.historyTitle} />
        </Reveal>
        <div className="mt-12 space-y-8 border-l-2 border-brand-green/30 pl-8">
          {content.timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.08} y={16} className="relative">
              <span className="absolute -left-[38px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-white">
                •
              </span>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-red">{item.year}</p>
              <h3 className="mt-1 text-lg font-bold text-brand-brown-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-brown-dark/70">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gouvernance" className="scroll-mt-28 bg-brand-brown-dark py-20 text-brand-cream">
        <Reveal className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold">{t.govTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">{t.govText}</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">{t.charterTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">{t.charterText}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
