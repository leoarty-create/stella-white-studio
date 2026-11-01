import { BASE_PATH } from "@/lib/site";

/** The studio logo (stella white, STUDIO). Size it with a height class, e.g. "h-10". Use light on dark backgrounds. */
export function Logo({ className = "h-10", light = false }: { className?: string; light?: boolean }) {
  const src = `${BASE_PATH}/stella-white-logo${light ? "-light" : ""}.svg`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="Stella White Studio" className={`logo-img ${className}`} />
  );
}

/** The SWS monogram on its own, for small spaces such as the header. */
export function Mark({ className = "h-8", light = false }: { className?: string; light?: boolean }) {
  const src = `${BASE_PATH}/stella-white-mark${light ? "-light" : ""}.svg`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="Stella White Studio" className={`logo-img ${className}`} />
  );
}
