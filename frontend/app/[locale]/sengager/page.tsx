import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import EngagementForm from "@/components/EngagementForm";
import { getContent } from "@/lib/data";
import { isLocale, type Locale } from "@/lib/i18n";

const TEXT: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  formEyebrow: string;
  formTitle: string;
  formText: string;
  step1: string;
  step2: string;
  step3: string;
}> = {
  fr: {
    metaTitle: "S'engager",
    metaDescription: "Devenez membre, ambassadeur national, partenaire ou donateur du Mandat des Jeunes Africains.",
    eyebrow: "S'engager",
    title: "Votre place dans le mouvement vous attend",
    description:
      "Que vous soyez étudiant, professionnel, association ou entreprise, il existe une façon de porter avec nous le mandat de la jeunesse africaine.",
    formEyebrow: "Formulaire d'engagement",
    formTitle: "Rejoignez le mouvement dès aujourd'hui",
    formText:
      "Remplissez ce formulaire et un membre de notre équipe reviendra vers vous pour vous orienter selon votre pays et vos disponibilités.",
    step1: "Vous remplissez le formulaire",
    step2: "Notre équipe vous contacte sous 5 jours",
    step3: "Vous intégrez l'antenne de votre pays",
  },
  en: {
    metaTitle: "Get Involved",
    metaDescription: "Become a member, national ambassador, partner or donor of Mandat des Jeunes Africains.",
    eyebrow: "Get Involved",
    title: "Your place in the movement is waiting",
    description:
      "Whether you're a student, a professional, an association or a business, there's a way to carry the mandate of African youth with us.",
    formEyebrow: "Engagement form",
    formTitle: "Join the movement today",
    formText:
      "Fill in this form and a member of our team will get back to you to guide you based on your country and availability.",
    step1: "You fill in the form",
    step2: "Our team contacts you within 5 days",
    step3: "You join your country's chapter",
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

export default function SengagerPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const t = TEXT[locale];
  const content = getContent(locale);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} image="/images/sengager-hero.jpg" />

      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {content.engagementWays.map((way) => (
            <div key={way.id} className="card p-7">
              <h3 className="text-lg font-bold text-brand-brown-dark">{way.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-brown-dark/70">{way.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream-dark py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow={t.formEyebrow} title={t.formTitle} description={t.formText} />
            <ul className="mt-8 space-y-4 text-sm text-brand-brown-dark/80">
              <li className="flex gap-3">
                <span className="text-brand-green">01.</span> {t.step1}
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green">02.</span> {t.step2}
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green">03.</span> {t.step3}
              </li>
            </ul>
          </div>
          <EngagementForm locale={locale} />
        </div>
      </section>
    </>
  );
}
