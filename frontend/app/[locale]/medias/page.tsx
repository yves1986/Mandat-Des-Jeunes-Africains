import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import VideoCard from "@/components/VideoCard";
import PressQuote from "@/components/PressQuote";
import { getContent } from "@/lib/data";
import { isLocale, type Locale } from "@/lib/i18n";

const TEXT: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  videosEyebrow: string;
  videosTitle: string;
  pressEyebrow: string;
  pressTitle: string;
  pubEyebrow: string;
  pubTitle: string;
  pubText: string;
  download: string;
}> = {
  fr: {
    metaTitle: "Médias",
    metaDescription: "Vidéos, revue de presse, publications et kit média du Mandat des Jeunes Africains.",
    eyebrow: "Médias",
    title: "La voix du mouvement, en images et en mots",
    description:
      "Vidéos, revue de presse et publications officielles : suivez l'actualité du Mandat des Jeunes Africains.",
    videosEyebrow: "Vidéos",
    videosTitle: "Nos dernières vidéos",
    pressEyebrow: "Revue de presse",
    pressTitle: "Ils parlent du Mandat des Jeunes Africains",
    pubEyebrow: "Publications",
    pubTitle: "Rapports, charte et kit média",
    pubText: "Téléchargez nos documents officiels pour mieux comprendre et relayer notre mouvement.",
    download: "Télécharger",
  },
  en: {
    metaTitle: "Media",
    metaDescription: "Videos, press coverage, publications and media kit of Mandat des Jeunes Africains.",
    eyebrow: "Media",
    title: "The movement's voice, in pictures and words",
    description: "Videos, press coverage and official publications: follow the news from Mandat des Jeunes Africains.",
    videosEyebrow: "Videos",
    videosTitle: "Our latest videos",
    pressEyebrow: "Press coverage",
    pressTitle: "They're talking about Mandat des Jeunes Africains",
    pubEyebrow: "Publications",
    pubTitle: "Reports, charter and media kit",
    pubText: "Download our official documents to better understand and relay our movement.",
    download: "Download",
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

export default function MediasPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const t = TEXT[locale];
  const content = getContent(locale);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} image="/images/medias-hero.webp" />

      <section id="videos" className="container-page scroll-mt-28 py-20">
        <SectionHeading eyebrow={t.videosEyebrow} title={t.videosTitle} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.videos.map((video) => (
            <VideoCard key={video.title} title={video.title} duration={video.duration} />
          ))}
        </div>
      </section>

      <section id="presse" className="scroll-mt-28 bg-brand-cream-dark py-20">
        <div className="container-page">
          <SectionHeading eyebrow={t.pressEyebrow} title={t.pressTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.pressQuotes.map((item) => (
              <PressQuote key={item.outlet} outlet={item.outlet} quote={item.quote} />
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="container-page scroll-mt-28 py-20">
        <SectionHeading eyebrow={t.pubEyebrow} title={t.pubTitle} description={t.pubText} />
        <div className="mt-10 divide-y divide-brand-brown/10 overflow-hidden rounded-xl2 bg-white shadow-card ring-1 ring-black/5">
          {content.publications.map((pub) => (
            <div key={pub.title} className="flex items-center justify-between gap-4 p-6">
              <div>
                <p className="font-semibold text-brand-brown-dark">{pub.title}</p>
                <p className="text-xs text-brand-brown-dark/50">
                  {pub.type} · {pub.size}
                </p>
              </div>
              <button className="btn-secondary shrink-0 !px-5 !py-2 text-xs">{t.download}</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
