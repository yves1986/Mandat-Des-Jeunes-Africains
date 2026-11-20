import type { Locale } from "@/lib/i18n";

const FACTS: Record<Locale, string[]> = {
  fr: [
    "54 pays composent le continent africain",
    "Plus de 1,4 milliard d'habitants",
    "Le continent le plus jeune au monde : plus de 60 % de la population a moins de 25 ans",
    "Plus de 2 000 langues y sont parlées",
    "D'ici 2050, 1 jeune sur 4 dans le monde sera africain",
    "Plus de 30 % des réserves minières mondiales se trouvent en Afrique",
  ],
  en: [
    "54 countries make up the African continent",
    "More than 1.4 billion inhabitants",
    "The youngest continent in the world: over 60% of the population is under 25",
    "More than 2,000 languages are spoken there",
    "By 2050, 1 in 4 young people worldwide will be African",
    "Over 30% of the world's mineral reserves are found in Africa",
  ],
};

export default function AfricaTicker({ locale }: { locale: Locale }) {
  const facts = FACTS[locale] ?? FACTS.fr;
  const items = [...facts, ...facts];

  return (
    <div className="overflow-hidden bg-brand-brown-dark py-2">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((fact, i) => (
          <span key={i} className="flex items-center gap-2 text-xs font-semibold text-brand-cream/90">
            <span className="text-brand-gold">●</span>
            {fact}
          </span>
        ))}
      </div>
    </div>
  );
}
