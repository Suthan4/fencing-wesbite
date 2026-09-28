// src/app/layout.tsx
import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import { siteUrl, company } from "@/lib/site";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

// FIX 1: preconnect + preload fonts more aggressively
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  // Only load the weights actually used — reduces font payload
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
  // Only preload; display text renders in fallback until Fraunces is ready
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.navifencing.in"),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  // No title.template here on purpose: every page below sets its own
  // complete title (already including the brand name) sized to stay
  // under Google's ~60 char / 561px title limit. A template previously
  // appended " · Navi Fencing Contractors" (27 chars) on top of that,
  // silently pushing nearly every page's title over the limit.
  title: "Navi Fencing Contractors — Avinashi, Tiruppur & Coimbatore",
  description:
    "Top fencing contractor in Avinashi, Tiruppur & Coimbatore. Chain link, barbed wire, concertina coil & razor wire. Free consultation. Call +91 9094909918.",
  applicationName: company.name,
  // NOTE: Google has ignored the meta-keywords tag since 2009 and Bing gives
  // it negligible weight — it does not help rankings. Keeping a short, real
  // list rather than the previous 1,600+ auto-generated (and duplicated)
  // per-location phrases, which only bloated every page's <head>. Actual
  // location targeting happens via unique titles/descriptions/H1s per page
  // (see src/app/[location]/page.tsx) and the sitemap — that's what search
  // engines actually use.
  keywords: [
    "Navi Fencing",
    "fencing in Avinashi",
    "fencing contractors in Avinashi",
    "fencing suppliers in Avinashi",
    "fencing in Tiruppur",
    "fencing contractors in Tiruppur",
    "fencing suppliers in Tiruppur",
    "fencing in Coimbatore",
    "fencing contractors in Coimbatore",
    "fencing suppliers in Coimbatore",
    "chain link fencing in Avinashi",
    "chain link fencing in Tiruppur",
    "chain link fencing in Coimbatore",
    "barbed wire fencing",
    "concertina coil",
    "razor wire fencing",
    "welded mesh fencing",
    "PVC chain link fencing",
    "fencing contractor Tamil Nadu",
    "compound wall fencing",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Navi Fencing Contractors",
    title: "Navi Fencing Contractors — Avinashi, Tiruppur & Coimbatore",
    description:
      "Top fencing contractor in Avinashi, Tiruppur & Coimbatore. Chain link, barbed wire, concertina coil, razor wire, welded mesh. Free consultation. Call +91 9094909918.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Navi Fencing Contractors — Avinashi Tiruppur Coimbatore Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navi Fencing Contractors — Avinashi, Tiruppur & Coimbatore",
    description:
      "Best fencing contractor in Avinashi, Tiruppur, Coimbatore & Tamil Nadu. Chain link, barbed wire, concertina coil, security fencing. Free consultation.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        {/* Local SEO meta */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Avinashi, Tamil Nadu" />
        <meta name="geo.position" content="11.1932;77.2687" />
        <meta name="ICBM" content="11.1932, 77.2687" />
        {/* GEO: points AI crawlers/answer engines at the structured summary */}
        <link rel="llms.txt" href="/llms.txt" />
      </head>
      <body className="bg-white text-[#1d1d1f] antialiased">
        <div id="scroll-progress" aria-hidden="true" />
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
    </html>
  );
}
