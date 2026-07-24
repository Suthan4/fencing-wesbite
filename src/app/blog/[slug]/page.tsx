import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { FloatingPhone } from "@/components/FloatingPhone";
import { getPostBySlug } from "@/lib/db";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post || !post.published) {
    return { title: "Post not found — Navi Fencing" };
  }

  return {
    title: `${post.title} — Navi Fencing Blog`,
    description: post.excerpt || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: post.coverImage
      ? { images: [{ url: post.coverImage }] }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post || !post.published) notFound();

  // Content is authored solely by the site admin (single trusted user),
  // not by public visitors, so rendering the generated HTML is safe here.
  const html = await marked.parse(post.content);

  return (
    <>
      <SiteHeader />
      <FloatingWhatsApp />
      <FloatingPhone />
      <main>
        <article className="bg-white pt-[120px] pb-24 sm:pt-[160px]">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="text-[0.8rem] text-[#86868b]">
              {new Date(post.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <h1 className="display mt-2 text-4xl text-[#1d1d1f] sm:text-5xl">
              {post.title}
            </h1>

            {post.coverImage && (
              <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            )}

            <div
              className="blog-content mt-10"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
