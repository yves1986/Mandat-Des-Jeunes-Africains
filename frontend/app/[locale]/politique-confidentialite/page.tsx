import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import LegalSection from "@/components/LegalSection";
import { isLocale, type Locale } from "@/lib/i18n";

const TEXT: Record<Locale, { title: string; description: string; sections: { title: string; body: string[] }[] }> = {
  fr: {
    title: "Politique de confidentialité",
    description: "Comment le Mandat des Jeunes Africains collecte, utilise et protège vos données personnelles.",
    sections: [
      {
        title: "1. Données collectées",
        body: [
          "Nous collectons les données que vous nous transmettez volontairement via nos formulaires : nom, adresse e-mail, pays, sujet et contenu de vos messages, ainsi que votre motivation d'engagement le cas échéant.",
        ],
      },
      {
        title: "2. Finalités du traitement",
        body: [
          "Ces données sont utilisées pour répondre à vos demandes de contact, traiter votre candidature d'engagement, vous adresser notre newsletter (si vous y êtes abonné) et établir des statistiques internes anonymisées sur la croissance du mouvement.",
        ],
      },
      {
        title: "3. Base légale",
        body: [
          "Le traitement repose sur votre consentement (formulaires, newsletter, cookies non essentiels) et sur l'intérêt légitime du mouvement à assurer le suivi de ses membres et contacts.",
        ],
      },
      {
        title: "4. Durée de conservation",
        body: [
          "Vos données sont conservées pendant la durée nécessaire aux finalités décrites ci-dessus, et au maximum 3 ans à compter de notre dernier échange, sauf obligation légale contraire.",
        ],
      },
      {
        title: "5. Destinataires des données",
        body: [
          "Vos données sont accessibles uniquement à l'équipe administrative habilitée du mouvement et ne sont jamais vendues à des tiers. Elles peuvent être partagées avec des prestataires techniques (hébergement, envoi d'e-mails) strictement dans le cadre de l'exécution de leur mission.",
        ],
      },
      {
        title: "6. Vos droits",
        body: [
          "Conformément aux réglementations applicables en matière de protection des données, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à contact@mandatdesjeunesafricains.org.",
        ],
      },
      {
        title: "7. Cookies",
        body: [
          "Le site utilise des cookies essentiels au fonctionnement (préférence de langue) et, sous réserve de votre consentement via la bannière dédiée, des cookies de mesure d'audience. Vous pouvez modifier votre choix à tout moment en effaçant les cookies de votre navigateur.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description: "How Mandat des Jeunes Africains collects, uses and protects your personal data.",
    sections: [
      {
        title: "1. Data collected",
        body: [
          "We collect the data you voluntarily provide through our forms: name, email address, country, subject and content of your messages, and your motivation for engagement where applicable.",
        ],
      },
      {
        title: "2. Purpose of processing",
        body: [
          "This data is used to respond to your contact requests, process your engagement application, send you our newsletter (if subscribed), and produce anonymized internal statistics on the movement's growth.",
        ],
      },
      {
        title: "3. Legal basis",
        body: [
          "Processing is based on your consent (forms, newsletter, non-essential cookies) and on the movement's legitimate interest in following up with its members and contacts.",
        ],
      },
      {
        title: "4. Retention period",
        body: [
          "Your data is kept for as long as necessary for the purposes described above, and for a maximum of 3 years from our last exchange, unless otherwise required by law.",
        ],
      },
      {
        title: "5. Data recipients",
        body: [
          "Your data is only accessible to the movement's authorized administrative team and is never sold to third parties. It may be shared with technical providers (hosting, email delivery) strictly for the performance of their mission.",
        ],
      },
      {
        title: "6. Your rights",
        body: [
          "In accordance with applicable data protection regulations, you have the right to access, rectify, delete and object to the processing of your data. To exercise these rights, contact us at contact@mandatdesjeunesafricains.org.",
        ],
      },
      {
        title: "7. Cookies",
        body: [
          "The site uses cookies essential to its operation (language preference) and, subject to your consent via the dedicated banner, audience measurement cookies. You can change your choice at any time by clearing your browser cookies.",
        ],
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

export default function PolitiqueConfidentialitePage({ params }: { params: { locale: string } }) {
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
