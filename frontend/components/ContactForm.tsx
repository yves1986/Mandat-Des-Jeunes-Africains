"use client";

import { useState, type FormEvent } from "react";
import { submitContactMessage } from "@/lib/api";

const initialForm = { fullName: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitContactMessage(form);
    if (result.ok) {
      setStatus("success");
      setFeedback("Votre message a bien été envoyé. Notre équipe vous répondra sous 48h.");
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
            placeholder="Aïcha Traoré"
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

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">Sujet</label>
        <input
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
          placeholder="Objet de votre message"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
          placeholder="Votre message..."
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
        {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {feedback && (
        <p className={`text-sm font-medium ${status === "error" ? "text-brand-red" : "text-brand-green"}`}>
          {feedback}
        </p>
      )}
    </form>
  );
}
