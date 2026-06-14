import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/SeoPageTemplate";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  getService,
  localBusinessJsonLd,
  serviceJsonLd,
  services,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | Navi Fencing`,
      description: service.description,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const path = `/services/${service.slug}`;
  return (
    <SeoPageTemplate
      page={service}
      parent={{ title: "Fence Services", path: "/services" }}
      jsonLd={[
        localBusinessJsonLd(),
        serviceJsonLd(service, path),
        faqJsonLd(service.faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Fence Services", path: "/services" },
          { name: service.title, path },
        ]),
      ]}
    />
  );
}
