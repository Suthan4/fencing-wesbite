import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Navi Fencing | Custom Fence Installation & Repair",
    template: "%s | Navi Fencing",
  },
  description:
    "Navi Fencing designs, installs, and repairs residential and commercial fences with durable materials, clean project management, and local expertise.",
  applicationName: "Navi Fencing",
  keywords: [
    "fencing contractor",
    "fence installation",
    "residential fencing",
    "commercial fencing",
    "wood fence",
    "vinyl fence",
    "aluminum fence",
    "chain link fence",
    "chain link supplier",
    "barbed wire",
    "concertina coil",
    "razor wire",
    "welded mesh",
    "cement post",
    "gate installation",
    "fence repair",
  ],
  authors: [{ name: "Navi Fencing" }],
  creator: "Navi Fencing",
  publisher: "Navi Fencing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Navi Fencing",
    title: "Navi Fencing | Custom Fence Installation & Repair",
    description:
      "Premium residential and commercial fencing built for privacy, security, curb appeal, and long-term performance.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Navi Fencing logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navi Fencing | Custom Fence Installation & Repair",
    description:
      "Residential and commercial fencing built with durable materials, clean lines, and reliable local service.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#f8faf7] text-[#172118]">
        {children}
      </body>
    </html>
  );
}
