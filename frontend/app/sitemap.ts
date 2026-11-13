import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mandatdesjeunesafricains.org";

const PATHS = [
  "",
  "/mouvement",
  "/actions",
  "/medias",
  "/sengager",
  "/contact",
  "/annonceurs",
  "/mentions-legales",
  "/cgu",
  "/cgv",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    PATHS.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
    })),
  );
}
