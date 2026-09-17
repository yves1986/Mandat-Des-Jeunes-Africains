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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.png" alt="Mandat des Jeunes Africains" className="h-10 w-10 shrink-0 object-contain" />
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
