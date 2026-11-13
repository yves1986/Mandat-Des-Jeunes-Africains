export default function PressQuote({ outlet, quote }: { outlet: string; quote: string }) {
  return (
    <figure className="card flex h-full flex-col justify-between gap-6 p-7">
      <blockquote className="text-base italic leading-relaxed text-brand-brown-dark/80">
        {quote}
      </blockquote>
      <figcaption className="text-sm font-bold uppercase tracking-widest text-brand-green">
        {outlet}
      </figcaption>
    </figure>
  );
}
