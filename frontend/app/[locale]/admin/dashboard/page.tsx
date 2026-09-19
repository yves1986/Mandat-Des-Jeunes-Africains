"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import Logo from "@/components/Logo";
import {
  getSession,
  clearSession,
  fetchKpis,
  fetchContacts,
  fetchEngagements,
  downloadCsv,
  type KpiData,
  type ContactMessage,
  type EngagementRecord,
} from "@/lib/adminApi";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

const BRAND_GREEN = "#146C43";
const BRAND_GOLD = "#E8A93A";
const BRAND_RED = "#C1272D";

function StatTile({ label, value }: { label: string; value: number }) {
  return (
    <div className="card p-6">
      <p className="text-3xl font-extrabold text-brand-green">{value.toLocaleString()}</p>
      <p className="mt-1 text-sm font-medium text-brand-brown-dark/60">{label}</p>
    </div>
  );
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const params = useParams<{ locale: string }>();
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  const dict = getDictionary(locale);

  const [session, setSession] = useState<ReturnType<typeof getSession>>(null);
  const [kpis, setKpis] = useState<KpiData | null>(null);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [engagements, setEngagements] = useState<EngagementRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const current = getSession();
    if (!current) {
      router.replace(`/${locale}/admin/login`);
      return;
    }
    setSession(current);

    Promise.all([
      fetchKpis(current.token),
      fetchContacts(current.token),
      fetchEngagements(current.token),
    ]).then(([kpiData, contactData, engagementData]) => {
      if (!kpiData) {
        router.replace(`/${locale}/admin/login`);
        return;
      }
      setKpis(kpiData);
      setContacts(contactData);
      setEngagements(engagementData);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  function handleLogout() {
    clearSession();
    router.replace(`/${locale}/admin/login`);
  }

  if (loading || !session || !kpis) {
    return <div className="flex min-h-screen items-center justify-center bg-brand-cream" />;
  }

  return (
    <div className="min-h-screen bg-brand-cream-dark">
      <header className="border-b border-brand-brown/10 bg-white">
        <div className="container-page flex h-20 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <span className="text-sm text-brand-brown-dark/70">{session.fullName}</span>
            <button onClick={handleLogout} className="btn-secondary !px-4 !py-2 text-xs">
              {dict.admin.logout}
            </button>
          </div>
        </div>
      </header>

      <main className="container-page py-10">
        <h1 className="text-2xl font-extrabold text-brand-brown-dark">{dict.admin.dashboardTitle}</h1>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <StatTile label={dict.admin.totalContacts} value={kpis.totals.totalContacts} />
          <StatTile label={dict.admin.totalEngagements} value={kpis.totals.totalEngagements} />
          <StatTile label={dict.admin.totalActions} value={kpis.totals.totalActions} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card p-6 lg:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-brown-dark/70">
              {dict.admin.growthTitle}
            </h2>
            <div className="mt-4 h-64">
              {kpis.monthlyEngagements.length === 0 ? (
                <p className="text-sm text-brand-brown-dark/50">{dict.admin.noData}</p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={kpis.monthlyEngagements}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4A2E1F1A" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke={BRAND_GREEN} strokeWidth={2.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-brown-dark/70">
              {dict.admin.byCountryTitle}
            </h2>
            <div className="mt-4 h-64">
              {kpis.engagementsByCountry.length === 0 ? (
                <p className="text-sm text-brand-brown-dark/50">{dict.admin.noData}</p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={kpis.engagementsByCountry}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4A2E1F1A" />
                    <XAxis dataKey="country" tick={{ fontSize: 11 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="count" fill={BRAND_GOLD} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-brown-dark/70">
              {dict.admin.byTypeTitle}
            </h2>
            <div className="mt-4 h-64">
              {kpis.engagementsByType.length === 0 ? (
                <p className="text-sm text-brand-brown-dark/50">{dict.admin.noData}</p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={kpis.engagementsByType} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#4A2E1F1A" />
                    <XAxis type="number" allowDecimals={false} tick={{ fontSize: 12 }} />
                    <YAxis dataKey="type" type="category" width={140} tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey="count" fill={BRAND_RED} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            className="btn-secondary"
            onClick={() => downloadCsv("/api/contact/export", session.token, "contacts.csv")}
          >
            {dict.admin.exportContacts}
          </button>
          <button
            className="btn-secondary"
            onClick={() => downloadCsv("/api/engagement/export", session.token, "engagements.csv")}
          >
            {dict.admin.exportEngagements}
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card overflow-hidden">
            <h2 className="border-b border-brand-brown/10 p-5 text-sm font-bold uppercase tracking-wide text-brand-brown-dark/70">
              {dict.admin.recentContacts}
            </h2>
            <div className="divide-y divide-brand-brown/10">
              {contacts.slice(0, 6).map((c) => (
                <div key={c._id} className="p-5">
                  <p className="text-sm font-semibold text-brand-brown-dark">{c.fullName}</p>
                  <p className="text-xs text-brand-brown-dark/50">{c.email}</p>
                  <p className="mt-1 text-sm text-brand-brown-dark/70">{c.subject}</p>
                </div>
              ))}
              {contacts.length === 0 && (
                <p className="p-5 text-sm text-brand-brown-dark/50">{dict.admin.noData}</p>
              )}
            </div>
          </div>

          <div className="card overflow-hidden">
            <h2 className="border-b border-brand-brown/10 p-5 text-sm font-bold uppercase tracking-wide text-brand-brown-dark/70">
              {dict.admin.recentEngagements}
            </h2>
            <div className="divide-y divide-brand-brown/10">
              {engagements.slice(0, 6).map((e) => (
                <div key={e._id} className="p-5">
                  <p className="text-sm font-semibold text-brand-brown-dark">{e.fullName}</p>
                  <p className="text-xs text-brand-brown-dark/50">
                    {e.country} · {e.engagementType}
                  </p>
                </div>
              ))}
              {engagements.length === 0 && (
                <p className="p-5 text-sm text-brand-brown-dark/50">{dict.admin.noData}</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
