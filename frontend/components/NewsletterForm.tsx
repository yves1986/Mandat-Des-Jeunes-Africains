"use client";

import { useState, type FormEvent } from "react";
import { submitNewsletter } from "@/lib/api";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function NewsletterForm({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const dict = getDictionary(locale);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitNewsletter({ email });
    if (result.ok) {
      setStatus("success");
      setMessage(dict.forms.newsletterSuccess);
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.error ?? dict.forms.genericError);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "mt-4" : "mx-auto mt-8 max-w-md"}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={dict.forms.emailPlaceholder}
          className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-inherit placeholder:text-current placeholder:opacity-50 focus:border-brand-gold focus:outline-none"
        />
        <button type="submit" disabled={status === "loading"} className="btn-primary shrink-0">
          {status === "loading" ? dict.forms.sending : dict.forms.subscribe}
        </button>
      </div>
      {message && (
        <p className={`mt-2 text-xs ${status === "error" ? "text-brand-red" : "text-brand-gold"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
