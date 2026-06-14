import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Navi Fencing | Fencing Contractor in Chennai & Tamil Nadu",
    template: "%s | Navi Fencing Chennai",
  },
  description:
    "Navi Fencing – Chennai's trusted fencing contractor for residential, commercial, and industrial fencing. Chain link, barbed wire, concertina coil, razor wire, welded mesh, cement posts, and custom gates across Tamil Nadu.",
  applicationName: "Navi Fencing",
  keywords: [
    "fencing contractor Chennai",
    "fence installation Tamil Nadu",
    "chain link fencing Chennai",
    "barbed wire supplier Chennai",
    "concertina coil Chennai",
    "razor wire Tamil Nadu",
    "welded mesh fencing",
    "cement post fencing",
    "compound fencing Chennai",
    "security fencing Tamil Nadu",
    "PVC chainlink Chennai",
    "green mesh fencing",
    "Y angle fencing",
    "gate installation Chennai",
    "fence repair Tamil Nadu",
  ],
  authors: [{ name: "Navi Fencing" }],
  creator: "Navi Fencing",
  publisher: "Navi Fencing",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Navi Fencing",
    title: "Navi Fencing | Fencing Contractor in Chennai & Tamil Nadu",
    description:
      "Residential and commercial fencing solutions across Tamil Nadu. Chain link, barbed wire, concertina coil, razor wire, welded mesh, and custom gates.",
    images: [
      { url: "/logo.png", width: 1200, height: 630, alt: "Navi Fencing" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navi Fencing | Chennai's Trusted Fencing Contractor",
    description:
      "Premium fencing installation across Tamil Nadu. Chain link, security wire, mesh, posts, and custom gates.",
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
    <html lang="en-IN" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#2c2c2a] antialiased overflow-x-hidden">
        <div id="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
