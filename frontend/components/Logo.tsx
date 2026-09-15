type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  theme?: "light" | "dark";
};

/**
 * Recreates the Mandat des Jeunes Africains mark: a tri-color ring
 * (green / gold / red) framing a brown African continent silhouette.
 */
export default function Logo({ className = "", variant = "full", theme = "dark" }: LogoProps) {
  const wordmarkColor = theme === "dark" ? "#2B1B12" : "#F7F1E3";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-10 w-10 shrink-0" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="none" stroke="#146C43" strokeWidth="7" strokeDasharray="212 76" strokeDashoffset="0" transform="rotate(-90 50 50)" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="#E8A93A" strokeWidth="7" strokeDasharray="52 236" strokeDashoffset="-192" transform="rotate(-90 50 50)" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="#C1272D" strokeWidth="7" strokeDasharray="36 252" strokeDashoffset="-244" transform="rotate(-90 50 50)" />
        <path
          fill="#4A2E1F"
          d="M52.8 16.4c3.6.2 6.9 1.9 9.4 4.5 2 2.1 3.1 4.8 4.9 7 1.4 1.7 3.3 2.9 4.2 5 .9 2.1.2 4.4-.4 6.5-.8 2.8-1.6 5.7-1.1 8.6.4 2.2 1.7 4.1 2 6.3.3 2.5-.9 4.8-1.1 7.3-.2 2.6 1 5 .8 7.6-.2 2.8-2.1 5-3.9 7-2.5 2.8-5.3 5.4-8.9 6.7-2.6 1-5.5 1.1-8.1 2.1-2.3.9-4.3 2.5-6.7 3.1-2.9.7-5.9-.1-8.7-1-2.4-.8-4.7-2-6.6-3.7-2-1.8-3.4-4.2-5.4-6-2-1.8-4.6-2.9-6.3-5-1.6-2-2.3-4.6-2.3-7.1 0-2.3.9-4.4 1-6.7.1-2.4-.8-4.6-.8-7 0-2.5 1.1-4.8 1.4-7.3.3-2.6-.4-5.1.4-7.6.7-2.3 2.5-4 3.7-6.1 1.3-2.3 2-4.9 3.9-6.8 2.1-2.1 5-3 7.7-4.3 2.5-1.2 4.8-2.9 7.5-3.6 3-.8 6.1-.1 9.1-.5.7-.1 1.3-.1 2-.1z"
        />
      </svg>
      {variant === "full" && (
        <span className="flex flex-col leading-tight">
          <span
            className="text-base font-extrabold uppercase tracking-tight"
            style={{ color: wordmarkColor, fontFamily: "var(--font-display)" }}
          >
            Mandat
          </span>
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: wordmarkColor, opacity: 0.8 }}
          >
            Des Jeunes Africains
          </span>
        </span>
      )}
    </div>
  );
}
