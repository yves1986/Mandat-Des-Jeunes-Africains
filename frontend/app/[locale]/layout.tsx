import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AfricaTicker from "@/components/AfricaTicker";
import { locales, isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const DESCRIPTIONS: Record<Locale, string> = {
  fr: "Mandat des Jeunes Africains est un mouvement panafricain qui donne à la jeunesse les moyens de porter, défendre et incarner le mandat du développement du continent.",
  en: "Mandat des Jeunes Africains is a pan-African movement empowering youth to carry, defend and embody the mandate for the continent's development.",
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";

  return {
    description: DESCRIPTIONS[locale],
    keywords: [
      "Mandat des Jeunes Africains",
      "jeunesse africaine",
      "panafricanisme",
      "leadership jeunesse",
      "mouvement citoyen Afrique",
    ],
    openGraph: {
      title: "Mandat des Jeunes Africains",
      description: DESCRIPTIONS[locale],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }
  const locale = params.locale as Locale;

  return (
    <>
      <AfricaTicker locale={locale} />
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
      <CookieBanner locale={locale} />
    </>
  );
}
