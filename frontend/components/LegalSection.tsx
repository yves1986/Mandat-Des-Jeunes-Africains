export default function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-brand-brown/10 py-8 last:border-0">
      <h2 className="text-lg font-bold text-brand-brown-dark">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-brown-dark/70">{children}</div>
    </section>
  );
}
