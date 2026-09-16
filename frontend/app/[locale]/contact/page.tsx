import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { getContent } from "@/lib/data";
import { isLocale, type Locale } from "@/lib/i18n";

const TEXT: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  coordinates: string;
  emailLabel: string;
  phoneLabel: string;
  offices: string;
}> = {
  fr: {
    metaTitle: "Contact",
    metaDescription: "Contactez l'équipe du Mandat des Jeunes Africains.",
    eyebrow: "Contact",
    title: "Parlons du mandat de la jeunesse",
    description:
      "Une question, un projet, une proposition de partenariat ? Notre équipe continentale vous répond.",
    coordinates: "Nos coordonnées",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    offices: "Nos antennes régionales",
  },
  en: {
    metaTitle: "Contact",
    metaDescription: "Contact the Mandat des Jeunes Africains team.",
    eyebrow: "Contact",
    title: "Let's talk about the youth mandate",
    description: "A question, a project, a partnership proposal? Our continental team is here to help.",
    coordinates: "Our contact details",
    emailLabel: "Email",
    phoneLabel: "Phone",
    offices: "Our regional chapters",
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

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const t = TEXT[locale];
  const content = getContent(locale);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-extrabold text-brand-brown-dark">{t.coordinates}</h2>
          <ul className="mt-6 space-y-4 text-sm text-brand-brown-dark/80">
            <li>
              <span className="font-semibold text-brand-brown-dark">{t.emailLabel}</span>
              <br />
              <a href="mailto:contact@mandatdesjeunesafricains.org" className="text-brand-green">
                contact@mandatdesjeunesafricains.org
              </a>
            </li>
            <li>
              <span className="font-semibold text-brand-brown-dark">{t.phoneLabel}</span>
              <br />
              <a href="tel:+221000000000" className="text-brand-green">
                +221 00 000 00 00
              </a>
            </li>
          </ul>

          <h3 className="mt-10 text-lg font-bold text-brand-brown-dark">{t.offices}</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {content.offices.map((office) => (
              <div key={office.region} className="rounded-xl2 bg-brand-cream-dark p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-red">{office.region}</p>
                <p className="mt-1 text-sm text-brand-brown-dark/80">{office.city}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactForm locale={locale} />
      </section>
    </>
  );
}
