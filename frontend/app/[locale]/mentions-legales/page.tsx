import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import LegalSection from "@/components/LegalSection";
import { isLocale, type Locale } from "@/lib/i18n";

const TEXT: Record<Locale, { title: string; description: string; sections: { title: string; body: string[] }[] }> = {
  fr: {
    title: "Mentions légales",
    description: "Informations légales relatives à l'édition et à l'hébergement du site.",
    sections: [
      {
        title: "1. Éditeur du site",
        body: [
          "Le site mandatdesjeunesafricains.org est édité par l'association Mandat des Jeunes Africains, mouvement panafricain à but non lucratif.",
          "Siège social : Dakar, Sénégal. Contact : contact@mandatdesjeunesafricains.org.",
        ],
      },
      {
        title: "2. Directeur de la publication",
        body: ["La direction de la publication est assurée par le Comité Continental du mouvement."],
      },
      {
        title: "3. Hébergement",
        body: [
          "Le site est hébergé par un prestataire tiers dont les coordonnées complètes seront précisées ici avant la mise en production définitive.",
        ],
      },
      {
        title: "4. Propriété intellectuelle",
        body: [
          "L'ensemble des contenus présents sur le site (textes, logos, visuels, vidéos) est la propriété du Mandat des Jeunes Africains, sauf mention contraire, et ne peut être reproduit sans autorisation préalable.",
        ],
      },
      {
        title: "5. Contact",
        body: ["Pour toute question relative aux présentes mentions légales : contact@mandatdesjeunesafricains.org."],
      },
    ],
  },
  en: {
    title: "Legal Notice",
    description: "Legal information about the publisher and hosting of this website.",
    sections: [
      {
        title: "1. Website publisher",
        body: [
          "The website mandatdesjeunesafricains.org is published by the Mandat des Jeunes Africains association, a pan-African non-profit movement.",
          "Registered office: Dakar, Senegal. Contact: contact@mandatdesjeunesafricains.org.",
        ],
      },
      {
        title: "2. Publication director",
        body: ["Publication is overseen by the movement's Continental Committee."],
      },
      {
        title: "3. Hosting",
        body: [
          "The site is hosted by a third-party provider whose full details will be specified here before final production deployment.",
        ],
      },
      {
        title: "4. Intellectual property",
        body: [
          "All content on this site (text, logos, visuals, videos) is the property of Mandat des Jeunes Africains, unless otherwise stated, and may not be reproduced without prior authorization.",
        ],
      },
      {
        title: "5. Contact",
        body: ["For any question regarding this legal notice: contact@mandatdesjeunesafricains.org."],
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  return { title: TEXT[locale].title, description: TEXT[locale].description };
}

export default function MentionsLegalesPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const t = TEXT[locale];

  return (
    <>
      <PageHero eyebrow={t.title} title={t.title} description={t.description} />
      <LegalDisclaimer locale={locale} />
      <div className="container-page py-4">
        {t.sections.map((section) => (
          <LegalSection key={section.title} title={section.title}>
            {section.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </LegalSection>
        ))}
      </div>
    </>
  );
}
