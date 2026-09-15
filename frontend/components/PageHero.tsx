type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-hero-gradient py-20 text-brand-cream">
      <div className="container-page">
        <span className="pill-tag bg-brand-gold/15 text-brand-gold">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-brand-cream/80">{description}</p>
        )}
      </div>
    </section>
  );
}
