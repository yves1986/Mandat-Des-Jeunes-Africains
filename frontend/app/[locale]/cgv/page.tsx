import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import LegalSection from "@/components/LegalSection";
import { isLocale, type Locale } from "@/lib/i18n";

const TEXT: Record<Locale, { title: string; description: string; sections: { title: string; body: string[] }[] }> = {
  fr: {
    title: "Conditions Générales de Vente",
    description: "Conditions applicables aux dons et contributions financières faites au mouvement.",
    sections: [
      {
        title: "1. Objet",
        body: [
          "Les présentes conditions générales de vente (CGV) s'appliquent à tout don ou contribution financière effectué via le site mandatdesjeunesafricains.org au bénéfice du Mandat des Jeunes Africains.",
        ],
      },
      {
        title: "2. Nature du don",
        body: [
          "Les sommes versées constituent des dons volontaires destinés au financement des programmes de formation civique, de plaidoyer et d'actions communautaires du mouvement. Elles ne donnent lieu à aucune contrepartie commerciale.",
        ],
      },
      {
        title: "3. Modalités de paiement",
        body: [
          "Les moyens de paiement acceptés (carte bancaire, mobile money, virement, etc.) seront précisés au moment du don, une fois les prestataires de paiement effectivement intégrés et opérationnels.",
        ],
      },
      {
        title: "4. Absence de droit de rétractation",
        body: [
          "Conformément aux usages applicables aux dons caritatifs, ceux-ci sont en principe non remboursables une fois le paiement confirmé, sauf erreur manifeste signalée sans délai à contact@mandatdesjeunesafricains.org.",
        ],
      },
      {
        title: "5. Reçus et déductions fiscales",
        body: [
          "Selon le pays de résidence du donateur et le statut fiscal du mouvement dans ce pays, un reçu pourra être délivré. Le mouvement ne garantit pas l'éligibilité à une déduction fiscale, celle-ci dépendant de la législation locale.",
        ],
      },
      {
        title: "6. Sécurité des paiements",
        body: [
          "Les transactions seront traitées par des prestataires de paiement tiers certifiés, conformément aux standards de sécurité en vigueur (PCI-DSS ou équivalent local).",
        ],
      },
      {
        title: "7. Droit applicable",
        body: ["Les présentes CGV sont soumises au droit sénégalais, sans préjudice des lois locales applicables au donateur."],
      },
    ],
  },
  en: {
    title: "Terms of Sale",
    description: "Terms applicable to donations and financial contributions made to the movement.",
    sections: [
      {
        title: "1. Purpose",
        body: [
          "These Terms of Sale apply to any donation or financial contribution made through mandatdesjeunesafricains.org for the benefit of Mandat des Jeunes Africains.",
        ],
      },
      {
        title: "2. Nature of the donation",
        body: [
          "Amounts contributed are voluntary donations intended to fund the movement's civic training, advocacy and community action programs. They do not entitle the donor to any commercial consideration.",
        ],
      },
      {
        title: "3. Payment methods",
        body: [
          "Accepted payment methods (card, mobile money, bank transfer, etc.) will be specified at the time of donation, once payment providers are actually integrated and operational.",
        ],
      },
      {
        title: "4. No right of withdrawal",
        body: [
          "In line with practices applicable to charitable donations, these are generally non-refundable once payment is confirmed, except for an obvious error reported promptly to contact@mandatdesjeunesafricains.org.",
        ],
      },
      {
        title: "5. Receipts and tax deductions",
        body: [
          "Depending on the donor's country of residence and the movement's tax status there, a receipt may be issued. The movement does not guarantee eligibility for a tax deduction, which depends on local legislation.",
        ],
      },
      {
        title: "6. Payment security",
        body: [
          "Transactions will be processed by certified third-party payment providers, in line with applicable security standards (PCI-DSS or local equivalent).",
        ],
      },
      {
        title: "7. Governing law",
        body: ["These Terms are governed by Senegalese law, without prejudice to local laws applicable to the donor."],
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

export default function CgvPage({ params }: { params: { locale: string } }) {
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
