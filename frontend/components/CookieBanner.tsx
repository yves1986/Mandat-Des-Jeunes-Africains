"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

const CONSENT_KEY = "mdja_cookie_consent";

export default function CookieBanner({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const existing = localStorage.getItem(CONSENT_KEY);
      if (!existing) setVisible(true);
    } catch {
      // localStorage unavailable — skip the banner rather than risk a loop.
    }
  }, []);

  function respond(value: "accepted" | "declined") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-brand-brown/10 bg-brand-brown-dark text-brand-cream shadow-[0_-10px_30px_-12px_rgba(0,0,0,0.3)]">
      <div className="container-page flex flex-col items-center gap-4 py-5 sm:flex-row sm:justify-between">
        <p className="text-sm text-brand-cream/80">
          {dict.cookies.message}{" "}
          <Link href={`/${locale}/politique-confidentialite`} className="underline hover:text-white">
            {dict.cookies.learnMore}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button onClick={() => respond("declined")} className="btn-outline !px-4 !py-2 text-xs">
            {dict.cookies.decline}
          </button>
          <button onClick={() => respond("accepted")} className="btn-primary !px-4 !py-2 text-xs">
            {dict.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
