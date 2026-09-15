import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const SITE_LINKS = [
  { href: "/mouvement", label: "Le Mouvement" },
  { href: "/actions", label: "Nos Actions" },
  { href: "/medias", label: "Médias" },
  { href: "/sengager", label: "S'engager" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-brown-dark text-brand-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo theme="light" />
          <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">
            Un mouvement panafricain qui donne à la jeunesse les moyens de porter,
            défendre et incarner le mandat du développement du continent.
          </p>
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
            Navigation
          </h3>
          <ul className="mt-4 space-y-3">
            {SITE_LINKS.map((link) => (
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
            Contact
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
            Restez informés
          </h3>
          <p className="mt-4 text-sm text-brand-cream/70">
            Recevez nos actualités, campagnes et opportunités d'engagement.
          </p>
          <NewsletterForm compact />
        </div>
      </div>

      <div className="border-t border-brand-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Mandat des Jeunes Africains. Tous droits réservés.</p>
          <p>Le mandat appartient à la jeunesse africaine.</p>
        </div>
      </div>
    </footer>
  );
}
