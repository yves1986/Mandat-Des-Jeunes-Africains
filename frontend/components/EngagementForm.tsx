"use client";

import { useState, type FormEvent } from "react";
import { submitEngagement } from "@/lib/api";
import { getContent, ENGAGEMENT_API_VALUE, type EngagementWayId } from "@/lib/data";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function EngagementForm({
  locale,
  initialType,
}: {
  locale: Locale;
  initialType?: EngagementWayId;
}) {
  const dict = getDictionary(locale);
  const engagementWays = getContent(locale).engagementWays;
  const defaultType = engagementWays.some((w) => w.id === initialType) ? (initialType as EngagementWayId) : engagementWays[0].id;

  const initialForm = {
    fullName: "",
    email: "",
    country: "",
    engagementType: defaultType,
    motivation: "",
  };

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitEngagement({
      ...form,
      engagementType: ENGAGEMENT_API_VALUE[form.engagementType],
    });
    if (result.ok) {
      setStatus("success");
      setFeedback(dict.forms.engagementSuccess);
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
            placeholder="Kwame Mensah"
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
            {dict.forms.country}
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
            {dict.forms.wantTo}
          </label>
          <select
            value={form.engagementType}
            onChange={(e) => setForm({ ...form, engagementType: e.target.value as EngagementWayId })}
            className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
          >
            {engagementWays.map((way) => (
              <option key={way.id} value={way.id}>
                {way.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-brand-brown-dark">
          {dict.forms.motivation}
        </label>
        <textarea
          rows={4}
          value={form.motivation}
          onChange={(e) => setForm({ ...form, motivation: e.target.value })}
          className="w-full rounded-lg border border-brand-brown/20 px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none"
          placeholder={dict.forms.motivationPlaceholder}
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
        {status === "loading" ? dict.forms.sending : dict.forms.sendApplication}
      </button>

      {feedback && (
        <p className={`text-sm font-medium ${status === "error" ? "text-brand-red" : "text-brand-green"}`}>
          {feedback}
        </p>
      )}
    </form>
  );
}
