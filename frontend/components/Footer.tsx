import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import { getDictionary, type Locale } from "@/lib/i18n";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const siteLinks = [
    { href: `/${locale}/mouvement`, label: dict.nav.movement },
    { href: `/${locale}/actions`, label: dict.nav.actions },
    { href: `/${locale}/medias`, label: dict.nav.media },
    { href: `/${locale}/sengager`, label: dict.nav.getInvolved },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-brand-brown-dark text-brand-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo theme="light" />
          <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">{dict.footer.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-cream/20 px-3 py-1 text-xs font-semibold text-brand-cream/80 hover:border-brand-gold hover:text-brand-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold">
            {dict.footer.navigation}
          </h3>
          <ul className="mt-4 space-y-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-brand-cream/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold">
            {dict.footer.contact}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-cream/80">
            <li>Dakar, Sénégal — Siège panafricain</li>
            <li>
              <a href="mailto:contact@mandatdesjeunesafricains.org" className="hover:text-white">
                contact@mandatdesjeunesafricains.org
              </a>
            </li>
            <li>
              <a href="tel:+221000000000" className="hover:text-white">
                +221 00 000 00 00
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold">
            {dict.footer.stayInformed}
          </h3>
          <p className="mt-4 text-sm text-brand-cream/70">{dict.footer.stayInformedText}</p>
          <NewsletterForm locale={locale} compact />
        </div>
      </div>

      <div className="border-t border-brand-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Mandat des Jeunes Africains. {dict.footer.rights}</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href={`/${locale}/mentions-legales`} className="hover:text-white">
              {dict.legal.legalNotice}
            </Link>
            <Link href={`/${locale}/cgu`} className="hover:text-white">
              {dict.legal.termsOfUse}
            </Link>
            <Link href={`/${locale}/cgv`} className="hover:text-white">
              {dict.legal.termsOfSale}
            </Link>
            <Link href={`/${locale}/politique-confidentialite`} className="hover:text-white">
              {dict.legal.privacyPolicy}
            </Link>
          </div>
          <p>{dict.footer.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
