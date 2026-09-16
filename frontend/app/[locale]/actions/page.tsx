import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ActionCard from "@/components/ActionCard";
import { getContent } from "@/lib/data";
import { isLocale, type Locale } from "@/lib/i18n";

const CATEGORIES: Record<Locale, string[]> = {
  fr: ["Toutes", "Plaidoyer", "Formation", "Mobilisation", "Terrain"],
  en: ["All", "Advocacy", "Training", "Mobilization", "Field action"],
};

const TEXT: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}> = {
  fr: {
    metaTitle: "Nos Actions",
    metaDescription:
      "Découvrez les campagnes de plaidoyer, formations, mobilisations et actions de terrain menées par le Mandat des Jeunes Africains à travers le continent.",
    eyebrow: "Nos Actions",
    title: "Le mandat en mouvement, partout sur le continent",
    description:
      "Plaidoyer institutionnel, formations civiques, mobilisations citoyennes et actions communautaires : découvrez comment la jeunesse africaine agit concrètement.",
    ctaTitle: "Une initiative à proposer dans votre pays ?",
    ctaText:
      "Nos ambassadeurs nationaux accompagnent les jeunes porteurs de projets citoyens. Partagez votre idée d'action avec notre équipe.",
    ctaButton: "Proposer une action",
  },
  en: {
    metaTitle: "Our Actions",
    metaDescription:
      "Discover the advocacy campaigns, trainings, mobilizations and field actions led by Mandat des Jeunes Africains across the continent.",
    eyebrow: "Our Actions",
    title: "The mandate in motion, across the continent",
    description:
      "Institutional advocacy, civic training, citizen mobilization and community actions: discover how African youth act concretely.",
    ctaTitle: "Have an initiative to propose in your country?",
    ctaText:
      "Our national ambassadors support young people carrying civic projects. Share your idea with our team.",
    ctaButton: "Propose an action",
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

export default function ActionsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const t = TEXT[locale];
  const categories = CATEGORIES[locale];
  const content = getContent(locale);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${
                i === 0 ? "bg-brand-green text-white" : "bg-brand-cream-dark text-brand-brown-dark/70"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.actions.map((action) => (
            <ActionCard key={action.slug} action={action} locale={locale} />
          ))}
        </div>
      </section>

      <section className="bg-brand-cream-dark py-16">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-extrabold text-brand-brown-dark">{t.ctaTitle}</h2>
          <p className="max-w-xl text-sm text-brand-brown-dark/70">{t.ctaText}</p>
          <a href={`/${locale}/contact`} className="btn-secondary">
            {t.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}
