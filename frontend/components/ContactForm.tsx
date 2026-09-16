"use client";

import { useState, type FormEvent } from "react";
import { submitContactMessage } from "@/lib/api";
import { getDictionary, type Locale } from "@/lib/i18n";

const initialForm = { fullName: "", email: "", subject: "", message: "" };

export default function ContactForm({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitContactMessage(form);
    if (result.ok) {
      setStatus("success");
      setFeedback(dict.forms.contactSuccess);
      setForm(initialForm);
    } else {
      setStatus("error");
      setFeedback(result.error ?? dict.forms.genericError);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
            {dict.forms.fullName}
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
            {dict.forms.email}
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
        <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
          {dict.forms.subject}
        </label>
        <input
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
          {dict.forms.message}
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
        {status === "loading" ? dict.forms.sending : dict.forms.send}
      </button>

      {feedback && (
        <p className={`text-sm font-medium ${status === "error" ? "text-brand-red" : "text-brand-green"}`}>
          {feedback}
        </p>
      )}
    </form>
  );
}
