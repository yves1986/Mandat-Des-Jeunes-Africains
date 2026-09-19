"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/data";

const ACTIONS_CATEGORY_LABELS: Record<Locale, Record<string, string>> = {
  fr: { Plaidoyer: "Plaidoyer", Formation: "Formation", Mobilisation: "Mobilisation", Terrain: "Terrain" },
  en: { Plaidoyer: "Advocacy", Formation: "Training", Mobilisation: "Mobilization", Terrain: "Field action" },
};

const ALL_ACTIONS_LABEL: Record<Locale, string> = { fr: "Toutes les actions", en: "All actions" };

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dict = getDictionary(locale);
  const content = getContent(locale);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const withoutLocale = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "") || "/";

  const navLinks: {
    href: string;
    match: string;
    label: string;
    submenu?: { label: string; href: string }[];
  }[] = [
    { href: `/${locale}`, match: `/${locale}`, label: dict.nav.home },
    {
      href: `/${locale}/mouvement`,
      match: `/${locale}/mouvement`,
      label: dict.nav.movement,
      submenu: [
        { label: locale === "fr" ? "Notre mission" : "Our mission", href: `/${locale}/mouvement#mission` },
        { label: locale === "fr" ? "Mot du fondateur" : "Founder's word", href: `/${locale}/mouvement#fondateur` },
        { label: locale === "fr" ? "Nos valeurs" : "Our values", href: `/${locale}/mouvement#valeurs` },
        { label: locale === "fr" ? "Notre histoire" : "Our history", href: `/${locale}/mouvement#histoire` },
        { label: locale === "fr" ? "Gouvernance" : "Governance", href: `/${locale}/mouvement#gouvernance` },
      ],
    },
    {
      href: `/${locale}/actions`,
      match: `/${locale}/actions`,
      label: dict.nav.actions,
      submenu: [
        { label: ALL_ACTIONS_LABEL[locale], href: `/${locale}/actions` },
        ...(["Plaidoyer", "Formation", "Mobilisation", "Terrain"] as const).map((cat) => ({
          label: ACTIONS_CATEGORY_LABELS[locale][cat],
          href: `/${locale}/actions?cat=${cat}`,
        })),
      ],
    },
    {
      href: `/${locale}/medias`,
      match: `/${locale}/medias`,
      label: dict.nav.media,
      submenu: [
        { label: locale === "fr" ? "Vidéos" : "Videos", href: `/${locale}/medias#videos` },
        { label: locale === "fr" ? "Revue de presse" : "Press coverage", href: `/${locale}/medias#presse` },
        { label: locale === "fr" ? "Publications" : "Publications", href: `/${locale}/medias#publications` },
      ],
    },
    {
      href: `/${locale}/sengager`,
      match: `/${locale}/sengager`,
      label: dict.nav.getInvolved,
      submenu: content.engagementWays.map((way) => ({
        label: way.title,
        href: `/${locale}/sengager?type=${way.id}#form`,
      })),
    },
    { href: `/${locale}/contact`, match: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-brand-brown/10 bg-brand-cream/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div
        className={`container-page flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-20" : "h-24"
        }`}
      >
        <Link href={`/${locale}`} onClick={() => setOpen(false)} aria-label="Mandat des Jeunes Africains — Accueil">
          <Logo imageClassName="h-16 w-16" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.match;
            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-brand-gold/15 text-brand-red"
                      : "text-brand-brown-dark/80 group-hover:bg-brand-gold/10 group-hover:text-brand-green"
                  }`}
                >
                  {link.label}
                </Link>

                {link.submenu && (
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <span className="absolute -top-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 rounded-sm bg-white shadow-card" />
                    <div className="relative min-w-[220px] rounded-xl2 bg-white p-2 shadow-card ring-1 ring-black/5">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-brand-brown-dark/80 hover:bg-brand-cream-dark hover:text-brand-green"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-brown-dark/60">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-brand-brown-dark/30">/</span>}
                <Link
                  href={`/${l}${withoutLocale === "/" ? "" : withoutLocale}`}
                  className={l === locale ? "text-brand-red" : "hover:text-brand-green"}
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
          <Link href={`/${locale}/sengager`} className="btn-secondary">
            {dict.nav.join}
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-brown/20 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-brand-brown-dark transition-all ${
                open ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-brand-brown-dark transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-brand-brown-dark transition-all ${
                open ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-brown/10 bg-brand-cream lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                    pathname === link.match ? "bg-brand-green/10 text-brand-red" : "text-brand-brown-dark/80"
                  }`}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-brand-brown/10 pl-3">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2 text-xs font-medium text-brand-brown-dark/60"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-1 flex gap-3 px-3 text-xs font-bold uppercase tracking-wide text-brand-brown-dark/60">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}${withoutLocale === "/" ? "" : withoutLocale}`}
                  onClick={() => setOpen(false)}
                  className={l === locale ? "text-brand-red" : ""}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
            <Link
              href={`/${locale}/sengager`}
              onClick={() => setOpen(false)}
              className="btn-secondary mt-2 justify-center"
            >
              {dict.nav.join}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
