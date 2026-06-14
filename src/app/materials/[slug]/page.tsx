import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/SeoPageTemplate";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  getMaterial,
  localBusinessJsonLd,
  materials,
  serviceJsonLd,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const material = getMaterial(slug);
  if (!material) return {};
  return {
    title: material.metaTitle,
    description: material.description,
    keywords: material.keywords,
    alternates: { canonical: `/materials/${material.slug}` },
    openGraph: {
      title: `${material.metaTitle} | Navi Fencing`,
      description: material.description,
      url: `/materials/${material.slug}`,
      type: "website",
    },
  };
}

export default async function MaterialPage({ params }: Props) {
  const { slug } = await params;
  const material = getMaterial(slug);
  if (!material) notFound();
  const path = `/materials/${material.slug}`;
  return (
    <SeoPageTemplate
      page={material}
      parent={{ title: "Fence Materials", path: "/materials" }}
      jsonLd={[
        localBusinessJsonLd(),
        serviceJsonLd(material, path),
        faqJsonLd(material.faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Fence Materials", path: "/materials" },
          { name: material.title, path },
        ]),
      ]}
    />
  );
}
