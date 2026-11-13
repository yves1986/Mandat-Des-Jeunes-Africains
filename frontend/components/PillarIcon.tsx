export type PillarIconName = "education" | "plaidoyer" | "leadership";

export default function PillarIcon({ name, className = "h-7 w-7" }: { name: PillarIconName; className?: string }) {
  switch (name) {
    case "education":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M12 3 1 8l11 5 9-4.09V17h2V8L12 3Z" fill="currentColor" />
          <path d="M5 10.18v4.32c0 1.8 3.13 3.5 7 3.5s7-1.7 7-3.5v-4.32l-7 3.18-7-3.18Z" fill="currentColor" opacity="0.55" />
        </svg>
      );
    case "plaidoyer":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M3 11v2a2 2 0 0 0 2 2h1l2 5h2l-1.5-5H10l8 4V6l-8 4H5a2 2 0 0 0-2 2Z" fill="currentColor" />
          <path d="M19 8.5a3.5 3.5 0 0 1 0 7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "leadership":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="8.5" cy="7.5" r="3.2" fill="currentColor" />
          <path d="M2.5 20c0-3.6 2.9-6.2 6-6.2s6 2.6 6 6.2" fill="currentColor" opacity="0.55" />
          <path d="M17.5 2.8 18.9 6l3.5.3-2.7 2.3.8 3.4-3-1.9-3 1.9.8-3.4-2.7-2.3 3.5-.3 1.4-3.2Z" fill="currentColor" />
        </svg>
      );
  }
}
