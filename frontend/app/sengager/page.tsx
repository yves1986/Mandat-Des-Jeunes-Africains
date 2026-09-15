import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import EngagementForm from "@/components/EngagementForm";
import { ENGAGEMENT_WAYS } from "@/lib/data";

export const metadata: Metadata = {
  title: "S'engager",
  description:
    "Devenez membre, ambassadeur national, partenaire ou donateur du Mandat des Jeunes Africains.",
};

export default function SengagerPage() {
  return (
    <>
      <PageHero
        eyebrow="S'engager"
        title="Votre place dans le mouvement vous attend"
        description="Que vous soyez étudiant, professionnel, association ou entreprise, il existe une façon de porter avec nous le mandat de la jeunesse africaine."
      />

      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {ENGAGEMENT_WAYS.map((way) => (
            <div key={way.title} className="card p-7">
              <h3 className="text-lg font-bold text-brand-brown-dark">{way.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-brown-dark/70">
                {way.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream-dark py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Formulaire d'engagement"
              title="Rejoignez le mouvement dès aujourd'hui"
              description="Remplissez ce formulaire et un membre de notre équipe reviendra vers vous pour vous orienter selon votre pays et vos disponibilités."
            />
            <ul className="mt-8 space-y-4 text-sm text-brand-brown-dark/80">
              <li className="flex gap-3">
                <span className="text-brand-green">01.</span> Vous remplissez le formulaire
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green">02.</span> Notre équipe vous contacte sous 5 jours
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green">03.</span> Vous intégrez l'antenne de votre pays
              </li>
            </ul>
          </div>
          <EngagementForm />
        </div>
      </section>
    </>
  );
}
