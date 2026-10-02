type CutoutImageProps = {
  src: string;
  alt: string;
  /** CSS color the vignette fades into at the edges, matching the surrounding section background. */
  fadeTo: string;
  className?: string;
};

/**
 * Renders a subject-cutout PNG "en grand plan": large, with a soft radial
 * vignette blending its edges (and any white/cutout background) into the
 * surrounding section color instead of a hard rectangular crop.
 */
export default function CutoutImage({ src, alt, fadeTo, className }: CutoutImageProps) {
  return (
    <div className={`pointer-events-none relative ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="relative z-0 h-full w-full object-contain object-bottom drop-shadow-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at 50% 40%, transparent 42%, ${fadeTo} 100%)`,
        }}
      />
    </div>
  );
}
