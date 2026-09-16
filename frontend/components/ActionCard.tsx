import type { ActionItem } from "@/lib/data";
import type { Locale } from "@/lib/i18n";

const CATEGORY_STYLES: Record<ActionItem["category"], string> = {
  Plaidoyer: "bg-brand-red/10 text-brand-red",
  Formation: "bg-brand-green/10 text-brand-green",
  Mobilisation: "bg-brand-gold/15 text-brand-gold-dark",
  Terrain: "bg-brand-brown/10 text-brand-brown",
};

const LEARN_MORE: Record<Locale, string> = {
  fr: "En savoir plus →",
  en: "Learn more →",
};

export default function ActionCard({ action, locale = "fr" }: { action: ActionItem; locale?: Locale }) {
  return (
    <article className="card flex h-full flex-col gap-4 p-7">
      <div className="flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${CATEGORY_STYLES[action.category]}`}>
          {action.categoryLabel}
        </span>
        <span className="text-xs font-semibold text-brand-brown-dark/50">{action.date}</span>
      </div>
      <h3 className="text-lg font-bold leading-snug text-brand-brown-dark">{action.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-brand-brown-dark/70">{action.summary}</p>
      <div className="flex items-center justify-between border-t border-brand-brown/10 pt-4">
        <span className="text-xs font-semibold text-brand-brown-dark/60">📍 {action.country}</span>
        <span className="text-sm font-bold text-brand-green">{LEARN_MORE[locale]}</span>
      </div>
    </article>
  );
}
