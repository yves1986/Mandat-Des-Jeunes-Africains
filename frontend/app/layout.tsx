import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Mandat des Jeunes Africains",
    template: "%s | Mandat des Jeunes Africains",
  },
  description:
    "Mandat des Jeunes Africains est un mouvement panafricain qui donne à la jeunesse les moyens de porter, défendre et incarner le mandat du développement du continent.",
  keywords: [
    "Mandat des Jeunes Africains",
    "jeunesse africaine",
    "panafricanisme",
    "leadership jeunesse",
    "mouvement citoyen Afrique",
  ],
  openGraph: {
    title: "Mandat des Jeunes Africains",
    description:
      "Un mouvement panafricain porté par et pour la jeunesse : plaidoyer, formation civique et mobilisation citoyenne.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
