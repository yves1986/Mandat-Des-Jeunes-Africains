import Link from "next/link";
import StatBar from "@/components/StatBar";
import PillarCard from "@/components/PillarCard";
import ActionCard from "@/components/ActionCard";
import SectionHeading from "@/components/SectionHeading";
import NewsletterForm from "@/components/NewsletterForm";
import { PILLARS, ACTIONS } from "@/lib/data";

export default function HomePage() {
  const featuredActions = ACTIONS.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient text-brand-cream">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div>
            <span className="pill-tag bg-brand-gold/15 text-brand-gold">
              Mouvement panafricain de la jeunesse
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Le mandat appartient à{" "}
              <span className="text-brand-gold">la jeunesse africaine</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-cream/80">
              Nous formons, mobilisons et outillons les jeunes du continent pour qu'ils
              portent, défendent et incarnent le mandat du développement de l'Afrique —
              dans les institutions comme sur le terrain.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/sengager" className="btn-primary">
                Je m'engage
              </Link>
              <Link href="/mouvement" className="btn-outline">
                Découvrir le mouvement
              </Link>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-sm grid-cols-2 gap-4">
            <div className="col-span-2 rounded-xl2 border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-brand-gold">Charte du Mandat</p>
              <p className="mt-2 text-sm text-brand-cream/70">
                Le texte fondateur qui définit les engagements de la jeunesse africaine
                envers son continent.
              </p>
              <Link href="/medias" className="mt-4 inline-block text-sm font-bold text-brand-gold">
                Lire la charte →
              </Link>
            </div>
            <div className="rounded-xl2 border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
              <p className="text-2xl font-extrabold text-white">54</p>
              <p className="mt-1 text-xs text-brand-cream/70">Pays</p>
            </div>
            <div className="rounded-xl2 border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
              <p className="text-2xl font-extrabold text-white">12K+</p>
              <p className="mt-1 text-xs text-brand-cream/70">Jeunes mobilisés</p>
            </div>
          </div>
        </div>
      </section>

      <StatBar />

      <section className="container-page py-24">
        <SectionHeading
          eyebrow="Notre mission"
          title="Trois piliers pour porter le mandat de la jeunesse"
          description="Chaque action du mouvement s'ancre dans une conviction : la jeunesse africaine doit être formée, entendue et actrice de son propre destin."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.title} index={i + 1} title={pillar.title} description={pillar.description} />
          ))}
        </div>
      </section>

      <section className="bg-brand-cream-dark py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Sur le terrain"
              title="Nos actions récentes"
              description="Plaidoyer, formation, mobilisation et actions communautaires à travers le continent."
            />
            <Link href="/actions" className="btn-secondary">
              Voir toutes les actions
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredActions.map((action) => (
              <ActionCard key={action.slug} action={action} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Notre mouvement"
              title="Une gouvernance jeune, ancrée dans chaque pays"
              description="Porté par un comité continental et un réseau d'ambassadeurs nationaux, le Mandat des Jeunes Africains structure l'engagement citoyen dans 40 pays."
            />
            <ul className="mt-6 space-y-3 text-sm text-brand-brown-dark/80">
              <li className="flex gap-3"><span className="text-brand-green">✔</span> Charte fondatrice ratifiée par les délégations nationales</li>
              <li className="flex gap-3"><span className="text-brand-green">✔</span> Comité continental élu tous les deux ans</li>
              <li className="flex gap-3"><span className="text-brand-green">✔</span> Réseau d'ambassadeurs formés au plaidoyer</li>
            </ul>
            <Link href="/mouvement" className="mt-8 inline-flex btn-secondary">
              Découvrir notre histoire
            </Link>
          </div>
          <div className="card overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-green via-brand-gold/40 to-brand-red/30" />
          </div>
        </div>
      </section>

      <section className="bg-brand-brown-dark py-20 text-brand-cream">
        <div className="container-page text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Restez connectés au mouvement
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/70">
            Recevez chaque mois nos actualités, nos campagnes de plaidoyer et nos
            opportunités d'engagement directement dans votre boîte mail.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
