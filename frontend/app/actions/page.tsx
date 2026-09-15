import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ActionCard from "@/components/ActionCard";
import { ACTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nos Actions",
  description:
    "Découvrez les campagnes de plaidoyer, formations, mobilisations et actions de terrain menées par le Mandat des Jeunes Africains à travers le continent.",
};

const CATEGORIES = ["Toutes", "Plaidoyer", "Formation", "Mobilisation", "Terrain"] as const;

export default function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos Actions"
        title="Le mandat en mouvement, partout sur le continent"
        description="Plaidoyer institutionnel, formations civiques, mobilisations citoyennes et actions communautaires : découvrez comment la jeunesse africaine agit concrètement."
      />

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat, i) => (
            <span
              key={cat}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${
                i === 0
                  ? "bg-brand-green text-white"
                  : "bg-brand-cream-dark text-brand-brown-dark/70"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACTIONS.map((action) => (
            <ActionCard key={action.slug} action={action} />
          ))}
        </div>
      </section>

      <section className="bg-brand-cream-dark py-16">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-extrabold text-brand-brown-dark">
            Une initiative à proposer dans votre pays ?
          </h2>
          <p className="max-w-xl text-sm text-brand-brown-dark/70">
            Nos ambassadeurs nationaux accompagnent les jeunes porteurs de projets
            citoyens. Partagez votre idée d&apos;action avec notre équipe.
          </p>
          <a href="/contact" className="btn-secondary">
            Proposer une action
          </a>
        </div>
      </section>
    </>
  );
}
