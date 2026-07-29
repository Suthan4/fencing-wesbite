// src/app/layout.tsx
import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import { siteUrl, company } from "@/lib/site";
import "./globals.css";

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
    google: "ZI8XtCxb1Jl-1UdHR9XXUiwxrIzD0S_6VsnBWATXImc",
  },
  title: {
    default:
      "Navi Fencing Contractors — #1 Fencing Contractor in Chennai & Tamil Nadu",
    template: "%s · Navi Fencing Contractors",
  },
  description:
    "Navi Fencing Contractors — Top fencing contractor in Chennai & Tamil Nadu. Chain link, barbed wire, concertina coil, razor wire, welded mesh fencing. Free consultation & best rates. Call +91 91763 37014.",
  applicationName: company.name,
  keywords: [
    // Brand
    "Navi Fencing",
    "Navi Fencing Contractors",
    "Navi Fencing Chennai",
    // Core service
    "fencing contractor Chennai",
    "fencing contractor Tamil Nadu",
    "fencing contractors near me",
    "fencing company Chennai",
    "best fencing contractor Tamil Nadu",
    "top fencing contractor Chennai",
    // Product types
    "chain link fencing Tamil Nadu",
    "chain link fencing Chennai",
    "barbed wire fencing Tamil Nadu",
    "barbed wire Chennai",
    "concertina coil Tamil Nadu",
    "concertina coil Chennai",
    "razor wire Tamil Nadu",
    "razor wire Chennai",
    "welded mesh fencing Tamil Nadu",
    "PVC chain link Chennai",
    "security fencing Tamil Nadu",
    "compound wall fencing Chennai",
    // Districts
    "fencing contractor Coimbatore",
    "fencing contractor Madurai",
    "fencing contractor Tiruchirappalli",
    "fencing contractor Salem",
    "fencing contractor Vellore",
    "fencing contractor Erode",
    "fencing contractor Tiruppur",
    "fencing contractor Thanjavur",
    "fencing contractor Kancheepuram",
    "fencing contractor Chengalpattu",
    "fencing contractor Villupuram",
    "fencing contractor Cuddalore",
    "fencing contractor Namakkal",
    "fencing contractor Dindigul",
    "fencing contractor Tirunelveli",
    "fencing contractor Thoothukudi",
    // Service areas Chennai
    "fencing contractor OMR",
    "fencing contractor ECR",
    "fencing contractor Tambaram",
    "fencing contractor Avadi",
    "fencing contractor Ambattur",
    "fencing contractor Porur",
    "fencing contractor Velachery",
    "fencing contractor Anna Nagar",
    "fencing contractor Poonamallee",
    "fencing contractor Sriperumbudur",
    // Use-case
    "agricultural fencing Tamil Nadu",
    "farm fencing Tamil Nadu",
    "industrial fencing Tamil Nadu",
    "residential fencing Chennai",
    "garden fencing Chennai",
    "privacy fencing Tamil Nadu",
    // Pricing intent
    "fencing cost per foot Tamil Nadu",
    "chain link fence price Tamil Nadu",
    "barbed wire price Tamil Nadu",
    "fencing rates Chennai",
    "cheap fencing Tamil Nadu",
    "affordable fencing Chennai",
    "fencing materials supplier Tamil Nadu",
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
    title: "Navi Fencing Contractors — Chennai & Tamil Nadu",
    description:
      "Top fencing contractor in Chennai & Tamil Nadu. Chain link, barbed wire, concertina coil, razor wire, welded mesh. Free consultation. Call +91 91763 37014.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Navi Fencing Contractors — Chennai Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navi Fencing Contractors — Chennai & Tamil Nadu",
    description:
      "Best fencing contractor in Tamil Nadu. Chain link, barbed wire, concertina coil, security fencing. Free consultation.",
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
        <meta name="geo.placename" content="Chennai, Tamil Nadu" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />

        {/*
          FIX 2: Preload the hero LCP image for MOBILE.
          This tells the browser to start fetching it immediately —
          before the JS/CSS is even parsed. Critical for mobile LCP.
          Use imagesrcset to match the Next.js Image srcset exactly.
        */}
        <link
          rel="preload"
          as="image"
          href="/products/angle-fencing.webp"
          // Mobile gets the smaller version first
          imageSrcSet="/products/angle-fencing.webp 1x"
          fetchPriority="high"
        />

        {/*
          FIX 3: Preconnect to Google Fonts CDN so font files
          download in parallel with HTML parsing (saves ~200-400ms on mobile)
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white text-[#1d1d1f] antialiased">
        <div id="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
