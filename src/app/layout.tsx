import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

// Cormorant Garamond for headings, Manrope for text and interface (both SIL Open Font License)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "Stella White Studio | Event portraits, finished by hand";
const description =
  "Studio-lit portraits at weddings, parties and launches. Backdrops and prints made by hand for your event. Travel on request.";
const logo = `${SITE_URL}og-image.png`;

export const metadata: Metadata = {
  title,
  description,
  // First-look preview: keep out of search results until the real content is in.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Stella White Studio",
    images: [{ url: logo, width: 1200, height: 630, alt: "Stella White Studio, event portraits" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [logo],
  },
};

export const viewport: Viewport = {
  themeColor: "#eeede9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
