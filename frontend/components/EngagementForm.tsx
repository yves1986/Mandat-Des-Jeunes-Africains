"use client";

import { useState, type FormEvent } from "react";
import { submitEngagement } from "@/lib/api";
import { ENGAGEMENT_WAYS } from "@/lib/data";

const initialForm = {
  fullName: "",
  email: "",
  country: "",
  engagementType: ENGAGEMENT_WAYS[0].title,
  motivation: "",
};

export default function EngagementForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitEngagement(form);
    if (result.ok) {
      setStatus("success");
      setFeedback(
        "Merci pour votre engagement ! Un membre de notre équipe vous contactera très prochainement.",
      );
      setForm(initialForm);
    } else {
      setStatus("error");
      setFeedback(result.error ?? "Une erreur est survenue. Merci de réessayer.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
            Nom complet
          </label>
          <input
            required
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
            placeholder="Kwame Mensah"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
            Adresse e-mail
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
            placeholder="vous@exemple.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
            Pays
          </label>
          <input
            required
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
            placeholder="Cameroun"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
            Je souhaite
          </label>
          <select
            value={form.engagementType}
            onChange={(e) => setForm({ ...form, engagementType: e.target.value })}
            className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
          >
            {ENGAGEMENT_WAYS.map((way) => (
              <option key={way.title} value={way.title}>
                {way.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
          Votre motivation (optionnel)
        </label>
        <textarea
          rows={4}
          value={form.motivation}
          onChange={(e) => setForm({ ...form, motivation: e.target.value })}
          className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
          placeholder="Dites-nous pourquoi vous souhaitez rejoindre le mouvement..."
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma candidature"}
      </button>

      {feedback && (
        <p className={`text-sm font-medium ${status === "error" ? "text-brand-red" : "text-brand-green"}`}>
          {feedback}
        </p>
      )}
    </form>
  );
}
