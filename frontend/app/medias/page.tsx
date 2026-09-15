import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import VideoCard from "@/components/VideoCard";
import PressQuote from "@/components/PressQuote";
import { VIDEOS, PRESS_QUOTES, PUBLICATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Médias",
  description:
    "Vidéos, revue de presse, publications et kit média du Mandat des Jeunes Africains.",
};

export default function MediasPage() {
  return (
    <>
      <PageHero
        eyebrow="Médias"
        title="La voix du mouvement, en images et en mots"
        description="Vidéos, revue de presse et publications officielles : suivez l'actualité du Mandat des Jeunes Africains."
      />

      <section className="container-page py-20">
        <SectionHeading eyebrow="Vidéos" title="Nos dernières vidéos" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video) => (
            <VideoCard key={video.title} title={video.title} duration={video.duration} />
          ))}
        </div>
      </section>

      <section className="bg-brand-cream-dark py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Revue de presse" title="Ils parlent du Mandat des Jeunes Africains" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRESS_QUOTES.map((item) => (
              <PressQuote key={item.outlet} outlet={item.outlet} quote={item.quote} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Publications"
          title="Rapports, charte et kit média"
          description="Téléchargez nos documents officiels pour mieux comprendre et relayer notre mouvement."
        />
        <div className="mt-10 divide-y divide-brand-brown/10 overflow-hidden rounded-xl2 bg-white shadow-card ring-1 ring-black/5">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.title} className="flex items-center justify-between gap-4 p-6">
              <div>
                <p className="font-semibold text-brand-brown-dark">{pub.title}</p>
                <p className="text-xs text-brand-brown-dark/50">
                  {pub.type} · {pub.size}
                </p>
              </div>
              <button className="btn-secondary shrink-0 !px-5 !py-2 text-xs">Télécharger</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
