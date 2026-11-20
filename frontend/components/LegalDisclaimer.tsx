import type { Locale } from "@/lib/i18n";

const TEXT: Record<Locale, string> = {
  fr: "Ce document est un modèle générique fourni à titre indicatif. Il doit être relu et adapté par un juriste avant toute publication officielle, notamment en fonction des pays d'opération du mouvement et des moyens de paiement utilisés.",
  en: "This document is a generic template provided for guidance only. It must be reviewed and adapted by a qualified lawyer before official publication, especially given the movement's countries of operation and payment methods used.",
};

export default function LegalDisclaimer({ locale }: { locale: Locale }) {
  return (
    <div className="container-page mt-10">
      <div className="rounded-xl2 border border-brand-gold/40 bg-brand-gold/10 p-4 text-sm text-brand-brown-dark/80">
        ⚠️ {TEXT[locale]}
      </div>
    </div>
  );
}
