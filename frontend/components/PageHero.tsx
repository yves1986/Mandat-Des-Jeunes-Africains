import CutoutImage from "./CutoutImage";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Path under /public, e.g. "/images/mouvement-hero.jpg". Omit for the plain gradient. */
  image?: string;
  /** Path under /public to a subject-cutout PNG, shown large on the dark gradient instead of a full-bleed photo. */
  cutout?: string;
};

export default function PageHero({ eyebrow, title, description, image, cutout }: PageHeroProps) {
  return (
    <section
      className={`relative isolate overflow-hidden text-brand-cream ${
        image
          ? "flex min-h-[380px] items-center py-20 sm:min-h-[440px]"
          : cutout
            ? "bg-hero-gradient py-16 sm:py-20"
            : "bg-hero-gradient py-20"
      }`}
    >
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-brown-dark/95 via-brand-brown-dark/75 to-brand-brown-dark/40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-brown-dark/85 via-transparent to-transparent" />
        </>
      )}
      <div
        className={`container-page relative ${
          cutout ? "grid items-end gap-8 lg:grid-cols-[1.15fr_1fr]" : ""
        }`}
      >
        <div>
          <span className="pill-tag bg-brand-gold/15 text-brand-gold">{eyebrow}</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg text-brand-cream/85">{description}</p>
          )}
        </div>
        {cutout && (
          <CutoutImage
            src={cutout}
            alt=""
            fadeTo="#2B1B12"
            className="hidden h-[320px] justify-self-center sm:h-[380px] lg:block lg:h-[420px]"
          />
        )}
      </div>
    </section>
  );
}
