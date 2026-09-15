"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/mouvement", label: "Le Mouvement" },
  { href: "/actions", label: "Actions" },
  { href: "/medias", label: "Médias" },
  { href: "/sengager", label: "S'engager" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-brown/10 bg-brand-cream/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Mandat des Jeunes Africains — Accueil">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
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

        <div className="hidden lg:block">
          <Link href="/sengager" className="btn-secondary">
            Rejoindre le mouvement
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  pathname === link.href
                    ? "bg-brand-green/10 text-brand-red"
                    : "text-brand-brown-dark/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sengager"
              onClick={() => setOpen(false)}
              className="btn-secondary mt-2 justify-center"
            >
              Rejoindre le mouvement
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
