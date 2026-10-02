const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
const TOKEN_KEY = "mdja_admin_token";

export type AdminSession = { token: string; fullName: string; email: string };

export function saveSession(session: AdminSession) {
  try {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(session));
  } catch {
    // localStorage unavailable (private mode, etc.) — session just won't persist.
  }
}

export function getSession(): AdminSession | null {
  try {
    const raw = localStorage.getItem(TOKEN_KEY);
    return raw ? (JSON.parse(raw) as AdminSession) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {
    // ignore
  }
}

export type KpiData = {
  totals: { totalContacts: number; totalEngagements: number; totalActions: number };
  engagementsByCountry: { country: string; count: number }[];
  engagementsByType: { type: string; count: number }[];
  monthlyEngagements: { month: string; count: number }[];
};

export type ContactMessage = {
  _id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

export type EngagementRecord = {
  _id: string;
  fullName: string;
  email: string;
  country: string;
  engagementType: string;
  createdAt: string;
};

async function authedFetch(path: string, token: string) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 401) {
    clearSession();
  }
  return res;
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const payload = await res.json().catch(() => undefined);
  if (!res.ok) {
    return { ok: false as const, error: payload?.message ?? "Erreur de connexion." };
  }
  return {
    ok: true as const,
    session: {
      token: payload.token,
      fullName: payload.admin.fullName,
      email: payload.admin.email,
    } as AdminSession,
  };
}

export async function fetchKpis(token: string): Promise<KpiData | null> {
  const res = await authedFetch("/api/stats/kpis", token);
  if (!res.ok) return null;
  const payload = await res.json();
  return payload.data as KpiData;
}

export async function fetchContacts(token: string): Promise<ContactMessage[]> {
  const res = await authedFetch("/api/contact", token);
  if (!res.ok) return [];
  const payload = await res.json();
  return payload.data as ContactMessage[];
}

export async function fetchEngagements(token: string): Promise<EngagementRecord[]> {
  const res = await authedFetch("/api/engagement", token);
  if (!res.ok) return [];
  const payload = await res.json();
  return payload.data as EngagementRecord[];
}

export async function downloadCsv(path: string, token: string, filename: string) {
  const res = await authedFetch(path, token);
  if (!res.ok) return false;
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
  return true;
}
