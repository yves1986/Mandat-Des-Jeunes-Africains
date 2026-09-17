type LogoProps = {
  className?: string;
  imageClassName?: string;
};

/**
 * The real Mandat des Jeunes Africains logo file (public/images/logo.png)
 * already bakes in the wordmark, so no separate text is rendered here.
 */
export default function Logo({ className = "", imageClassName = "h-14 w-14" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.png"
      alt="Mandat des Jeunes Africains"
      className={`shrink-0 object-contain ${imageClassName} ${className}`}
    />
  );
}
