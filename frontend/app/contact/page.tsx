import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe du Mandat des Jeunes Africains.",
};

const OFFICES = [
  { region: "Afrique de l'Ouest", city: "Dakar, Sénégal" },
  { region: "Afrique de l'Est", city: "Nairobi, Kenya" },
  { region: "Afrique du Nord", city: "Rabat, Maroc" },
  { region: "Afrique Centrale & Australe", city: "Kinshasa, RDC" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons du mandat de la jeunesse"
        description="Une question, un projet, une proposition de partenariat ? Notre équipe continentale vous répond."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-extrabold text-brand-brown-dark">Nos coordonnées</h2>
          <ul className="mt-6 space-y-4 text-sm text-brand-brown-dark/80">
            <li>
              <span className="font-semibold text-brand-brown-dark">E-mail</span>
              <br />
              <a href="mailto:contact@mandatdesjeunesafricains.org" className="text-brand-green">
                contact@mandatdesjeunesafricains.org
              </a>
            </li>
            <li>
              <span className="font-semibold text-brand-brown-dark">Téléphone</span>
              <br />
              <a href="tel:+221000000000" className="text-brand-green">
                +221 00 000 00 00
              </a>
            </li>
          </ul>

          <h3 className="mt-10 text-lg font-bold text-brand-brown-dark">Nos antennes régionales</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {OFFICES.map((office) => (
              <div key={office.region} className="rounded-xl2 bg-brand-cream-dark p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-red">
                  {office.region}
                </p>
                <p className="mt-1 text-sm text-brand-brown-dark/80">{office.city}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
