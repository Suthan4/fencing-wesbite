import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import { siteUrl, company } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  // metadataBase: new URL(siteUrl),
  metadataBase: new URL("https://fencing-wesbite.vercel.app/"),
  title: {
    default: "Navi Fencing — Fencing Contractor in Chennai & Tamil Nadu",
    template: "%s · Navi Fencing",
  },
  description:
    "Navi Fencing supplies and installs chain link, barbed wire, concertina coil, razor wire, welded mesh, posts and more across Chennai and Tamil Nadu. Free consultation.",
  applicationName: company.name,
  keywords: [
    "fencing contractor Chennai",
    "chain link fencing Tamil Nadu",
    "barbed wire Chennai",
    "concertina coil",
    "razor wire",
    "welded mesh",
    "PVC chainlink",
    "cement post",
    "fencing supplier Chennai",
    "navi fencing",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: company.name,
    title: "Navi Fencing — Chennai & Tamil Nadu",
    description: company.tagline,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Navi Fencing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navi Fencing — Secure Boundaries",
    description: company.tagline,
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
      <body className="bg-white text-[#1d1d1f] antialiased">
        <div id="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
