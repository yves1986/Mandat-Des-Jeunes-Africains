import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import LegalSection from "@/components/LegalSection";
import { isLocale, type Locale } from "@/lib/i18n";

const TEXT: Record<Locale, { title: string; description: string; sections: { title: string; body: string[] }[] }> = {
  fr: {
    title: "Conditions Générales d'Utilisation",
    description: "Règles d'utilisation du site et des services du Mandat des Jeunes Africains.",
    sections: [
      {
        title: "1. Objet",
        body: [
          "Les présentes conditions générales d'utilisation (CGU) régissent l'accès et l'utilisation du site mandatdesjeunesafricains.org, y compris ses formulaires de contact, d'engagement et son espace administrateur.",
        ],
      },
      {
        title: "2. Acceptation des conditions",
        body: [
          "L'utilisation du site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.",
        ],
      },
      {
        title: "3. Accès au site",
        body: [
          "Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Le Mandat des Jeunes Africains met tout en œuvre pour assurer un accès continu, sans garantie de disponibilité absolue.",
        ],
      },
      {
        title: "4. Compte et engagement",
        body: [
          "En soumettant le formulaire d'engagement, l'utilisateur certifie l'exactitude des informations fournies. Le mouvement se réserve le droit de refuser ou de suspendre un engagement en cas d'informations frauduleuses.",
        ],
      },
      {
        title: "5. Propriété intellectuelle",
        body: [
          "Tous les éléments du site sont protégés par le droit d'auteur. Toute reproduction sans autorisation préalable est interdite.",
        ],
      },
      {
        title: "6. Responsabilité",
        body: [
          "Le Mandat des Jeunes Africains ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.",
        ],
      },
      {
        title: "7. Droit applicable",
        body: ["Les présentes CGU sont soumises au droit sénégalais, sans préjudice des lois locales applicables dans chaque pays où le mouvement opère."],
      },
    ],
  },
  en: {
    title: "Terms of Use",
    description: "Rules governing the use of the Mandat des Jeunes Africains website and services.",
    sections: [
      {
        title: "1. Purpose",
        body: [
          "These Terms of Use govern access to and use of mandatdesjeunesafricains.org, including its contact and engagement forms and administrator area.",
        ],
      },
      {
        title: "2. Acceptance of terms",
        body: ["Using the site implies full acceptance of these Terms. If you do not accept them, please do not use the site."],
      },
      {
        title: "3. Access to the site",
        body: [
          "The site is freely accessible to any user with an internet connection. Mandat des Jeunes Africains makes every effort to ensure continuous access, without guaranteeing absolute availability.",
        ],
      },
      {
        title: "4. Account and engagement",
        body: [
          "By submitting the engagement form, the user certifies that the information provided is accurate. The movement reserves the right to refuse or suspend an engagement in case of fraudulent information.",
        ],
      },
      {
        title: "5. Intellectual property",
        body: ["All elements of the site are protected by copyright. Any reproduction without prior authorization is prohibited."],
      },
      {
        title: "6. Liability",
        body: [
          "Mandat des Jeunes Africains cannot be held liable for direct or indirect damages resulting from use of the site or the inability to access it.",
        ],
      },
      {
        title: "7. Governing law",
        body: ["These Terms are governed by Senegalese law, without prejudice to local laws applicable in each country where the movement operates."],
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

export default function CguPage({ params }: { params: { locale: string } }) {
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
