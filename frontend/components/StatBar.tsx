import { STATS } from "@/lib/data";

export default function StatBar() {
  return (
    <section className="border-y border-brand-brown/10 bg-white">
      <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-brand-green sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-brand-brown-dark/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
