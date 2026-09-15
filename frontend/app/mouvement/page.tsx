import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { VALUES, TIMELINE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Le Mouvement",
  description:
    "Histoire, vision, valeurs et gouvernance du Mandat des Jeunes Africains, mouvement panafricain porté par et pour la jeunesse.",
};

export default function MouvementPage() {
  return (
    <>
      <PageHero
        eyebrow="Le Mouvement"
        title="Une jeunesse organisée, une voix continentale"
        description="Depuis 2021, le Mandat des Jeunes Africains rassemble des jeunes de tout le continent autour d'une charte commune et d'une ambition partagée : reprendre en main l'avenir de l'Afrique."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-2xl font-extrabold text-brand-brown-dark">Notre vision</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-brown-dark/70">
            Une Afrique où chaque jeune dispose des moyens, des compétences et des espaces
            nécessaires pour participer pleinement aux décisions qui façonnent son avenir
            et celui de son continent.
          </p>
        </div>
        <div className="card p-8">
          <h2 className="text-2xl font-extrabold text-brand-brown-dark">Notre mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-brown-dark/70">
            Former, organiser et mobiliser la jeunesse africaine pour qu'elle porte
            collectivement le mandat du développement du continent, à travers le
            plaidoyer, l'éducation civique et l'action de terrain.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream-dark py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Nos valeurs" title="Ce qui nous guide au quotidien" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="card p-6 text-center">
                <h3 className="text-lg font-bold text-brand-green">{value.title}</h3>
                <p className="mt-3 text-sm text-brand-brown-dark/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Notre histoire" title="Le chemin parcouru depuis 2021" />
        <div className="mt-12 space-y-8 border-l-2 border-brand-green/30 pl-8">
          {TIMELINE.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-[38px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-white">
                •
              </span>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-red">{item.year}</p>
              <h3 className="mt-1 text-lg font-bold text-brand-brown-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-brown-dark/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-brown-dark py-20 text-brand-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold">Gouvernance</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">
              Le mouvement est dirigé par un Comité Continental élu tous les deux ans par
              les délégations nationales. Chaque pays dispose d'une antenne animée par un
              ambassadeur national, chargé de coordonner les actions locales et de
              représenter les jeunes de son pays au sein des instances du mouvement.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">La Charte du Mandat</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">
              Texte fondateur du mouvement, la Charte du Mandat définit les principes,
              engagements et mécanismes de redevabilité qui unissent tous les membres,
              quel que soit leur pays d'origine. Elle est disponible en téléchargement
              dans notre espace Médias.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
