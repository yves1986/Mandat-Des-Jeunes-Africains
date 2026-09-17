import Link from "next/link";
import PillarIcon from "@/components/PillarIcon";
import ActionCard from "@/components/ActionCard";
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/lib/data";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

const TEXT: Record<Locale, {
  tag: string;
  h1a: string;
  h1b: string;
  lead: string;
  ctaJoin: string;
  ctaDiscover: string;
  missionEyebrow: string;
  missionTitle: string;
  missionText: string;
  actionsEyebrow: string;
  actionsTitle: string;
  actionsText: string;
  finalTitle: string;
  finalText: string;
  ctaDonate: string;
}> = {
  fr: {
    tag: "Mouvement panafricain de la jeunesse",
    h1a: "Le mandat des jeunes",
    h1b: "africains",
    lead: "Nous formons, mobilisons et outillons les jeunes du continent pour qu'ils portent, défendent et incarnent le mandat du développement de l'Afrique — dans les institutions comme sur le terrain.",
    ctaJoin: "Je m'engage",
    ctaDiscover: "Découvrir le mouvement",
    missionEyebrow: "Notre mission",
    missionTitle: "Une jeunesse formée, entendue et actrice de son destin",
    missionText:
      "Chaque action du mouvement s'ancre dans une conviction : la jeunesse africaine doit être formée, entendue et actrice de son propre destin. Trois piliers structurent notre engagement.",
    actionsEyebrow: "Sur le terrain",
    actionsTitle: "Nos actions",
    actionsText: "Plaidoyer, formation, mobilisation et actions communautaires à travers le continent.",
    finalTitle: "Prêt·e à porter le mandat avec nous ?",
    finalText:
      "Rejoignez des milliers de jeunes déjà engagés à travers le continent, ou soutenez le mouvement par un don.",
    ctaDonate: "Faire un don",
  },
  en: {
    tag: "Pan-African youth movement",
    h1a: "The mandate of African",
    h1b: "youth",
    lead: "We train, mobilize and equip young people across the continent to carry, defend and embody the mandate for Africa's development — within institutions and on the ground.",
    ctaJoin: "Get involved",
    ctaDiscover: "Discover the movement",
    missionEyebrow: "Our mission",
    missionTitle: "Youth trained, heard, and in charge of their destiny",
    missionText:
      "Every action of the movement is rooted in one conviction: African youth must be trained, heard and actors of their own destiny. Three pillars structure our commitment.",
    actionsEyebrow: "On the ground",
    actionsTitle: "Our actions",
    actionsText: "Advocacy, training, mobilization and community actions across the continent.",
    finalTitle: "Ready to carry the mandate with us?",
    finalText: "Join thousands of young people already engaged across the continent, or support the movement with a donation.",
    ctaDonate: "Make a donation",
  },
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const dict = getDictionary(locale);
  const content = getContent(locale);
  const t = TEXT[locale];

  return (
    <>
      {/* HERO — ~700px */}
      <section className="relative overflow-hidden bg-hero-gradient text-brand-cream">
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-10 h-[420px] w-[420px] opacity-[0.08] sm:-right-10"
        >
          <path
            fill="currentColor"
            d="M52.8 16.4c3.6.2 6.9 1.9 9.4 4.5 2 2.1 3.1 4.8 4.9 7 1.4 1.7 3.3 2.9 4.2 5 .9 2.1.2 4.4-.4 6.5-.8 2.8-1.6 5.7-1.1 8.6.4 2.2 1.7 4.1 2 6.3.3 2.5-.9 4.8-1.1 7.3-.2 2.6 1 5 .8 7.6-.2 2.8-2.1 5-3.9 7-2.5 2.8-5.3 5.4-8.9 6.7-2.6 1-5.5 1.1-8.1 2.1-2.3.9-4.3 2.5-6.7 3.1-2.9.7-5.9-.1-8.7-1-2.4-.8-4.7-2-6.6-3.7-2-1.8-3.4-4.2-5.4-6-2-1.8-4.6-2.9-6.3-5-1.6-2-2.3-4.6-2.3-7.1 0-2.3.9-4.4 1-6.7.1-2.4-.8-4.6-.8-7 0-2.5 1.1-4.8 1.4-7.3.3-2.6-.4-5.1.4-7.6.7-2.3 2.5-4 3.7-6.1 1.3-2.3 2-4.9 3.9-6.8 2.1-2.1 5-3 7.7-4.3 2.5-1.2 4.8-2.9 7.5-3.6 3-.8 6.1-.1 9.1-.5.7-.1 1.3-.1 2-.1z"
          />
        </svg>

        <div className="container-page relative grid min-h-[560px] items-center gap-12 py-20 sm:min-h-[640px] lg:min-h-[700px] lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="pill-tag bg-brand-gold/15 text-brand-gold">{t.tag}</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              {t.h1a} <span className="text-brand-gold">{t.h1b}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-cream/80">{t.lead}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`/${locale}/sengager`} className="btn-primary">
                {t.ctaJoin}
              </Link>
              <Link href={`/${locale}/mouvement`} className="btn-outline">
                {t.ctaDiscover}
              </Link>
            </div>

            <div className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {content.heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-brand-cream/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-xl2 shadow-card ring-1 ring-white/10 lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-team.jpg"
              alt="Jeunes leaders africains engagés dans le mouvement"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION — centered, ~600px */}
      <section className="flex min-h-[420px] items-center bg-white py-20 sm:min-h-[520px]">
        <div className="container-page">
          <SectionHeading eyebrow={t.missionEyebrow} title={t.missionTitle} description={t.missionText} align="center" />
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3">
            {content.pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white">
                  <PillarIcon name={pillar.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-brown-dark">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-brown-dark/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIONS — grille 3x2 */}
      <section className="bg-brand-cream-dark py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow={t.actionsEyebrow} title={t.actionsTitle} description={t.actionsText} />
            <Link href={`/${locale}/actions`} className="btn-secondary">
              {dict.common.seeAll}
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.actions.map((action) => (
              <ActionCard key={action.slug} action={action} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL — bandeau sombre */}
      <section className="bg-brand-brown-dark py-20 text-brand-cream">
        <div className="container-page text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t.finalTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/70">{t.finalText}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href={`/${locale}/sengager`} className="btn-primary">
              {dict.nav.join}
            </Link>
            <Link href={`/${locale}/sengager`} className="btn-outline">
              {t.ctaDonate}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
