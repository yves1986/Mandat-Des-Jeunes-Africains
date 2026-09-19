const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export type ApiResult<T = unknown> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
};

async function postJson<T = unknown>(path: string, body: unknown): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const contentType = res.headers.get("content-type") ?? "";
    const payload = contentType.includes("application/json") ? await res.json() : undefined;

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: payload?.message ?? "Une erreur est survenue. Merci de réessayer.",
      };
    }

    return { ok: true, status: res.status, data: payload };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      error: "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.",
    };
  }
}

export function submitContactMessage(body: {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}) {
  return postJson("/api/contact", body);
}

export function submitEngagement(body: {
  fullName: string;
  email: string;
  country: string;
  engagementType: string;
  motivation?: string;
}) {
  return postJson("/api/engagement", body);
}

export function submitNewsletter(body: { email: string }) {
  return postJson("/api/contact/newsletter", body);
}
