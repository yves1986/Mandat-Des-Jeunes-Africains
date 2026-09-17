"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { getDictionary, locales, type Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dict = getDictionary(locale);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const withoutLocale = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "") || "/";

  const navLinks = [
    { href: `/${locale}`, match: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/mouvement`, match: `/${locale}/mouvement`, label: dict.nav.movement },
    { href: `/${locale}/actions`, match: `/${locale}/actions`, label: dict.nav.actions },
    { href: `/${locale}/medias`, match: `/${locale}/medias`, label: dict.nav.media },
    { href: `/${locale}/sengager`, match: `/${locale}/sengager`, label: dict.nav.getInvolved },
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

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.match;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  active ? "text-brand-red" : "text-brand-brown-dark/80 hover:text-brand-green"
                }`}
              >
                {link.label}
              </Link>
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
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  pathname === link.match ? "bg-brand-green/10 text-brand-red" : "text-brand-brown-dark/80"
                }`}
              >
                {link.label}
              </Link>
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
