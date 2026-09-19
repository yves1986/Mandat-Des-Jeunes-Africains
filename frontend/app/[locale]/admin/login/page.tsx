"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import Logo from "@/components/Logo";
import { login, saveSession } from "@/lib/adminApi";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export default function AdminLoginPage() {
  const router = useRouter();
  const params = useParams<{ locale: string }>();
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const dict = getDictionary(locale);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await login(email, password);
    if (result.ok) {
      saveSession(result.session);
      router.push(`/${locale}/admin/dashboard`);
    } else {
      setStatus("error");
      setError(result.error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <form onSubmit={handleSubmit} className="card space-y-5 p-8">
          <div>
            <h1 className="text-xl font-extrabold text-brand-brown-dark">{dict.admin.loginTitle}</h1>
            <p className="mt-1 text-sm text-brand-brown-dark/60">{dict.admin.loginSubtitle}</p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
              {dict.forms.email}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
              {dict.admin.password}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
            />
          </div>

          <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
            {status === "loading" ? dict.admin.signingIn : dict.admin.signIn}
          </button>

          {status === "error" && <p className="text-sm font-medium text-brand-red">{error}</p>}
        </form>
      </div>
    </div>
  );
}
