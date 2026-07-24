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

function estimateReadingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post || !post.published) notFound();

  // Content is authored solely by the site admin (single trusted user),
  // not by public visitors, so rendering the generated HTML is safe here.
  const html = await marked.parse(post.content);
  const readingMinutes = estimateReadingMinutes(post.content);
  const [cover, ...galleryImages] = post.images;

  return (
    <>
      <SiteHeader />
      <FloatingWhatsApp />
      <FloatingPhone />
      <main>
        <article className="bg-white pt-[120px] pb-24 sm:pt-[160px]">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="eyebrow">Navi Fencing Blog</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8rem] text-[#86868b]">
              <span>
                {new Date(post.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes} min read</span>
            </div>
            <h1 className="display mt-2 text-4xl text-[#1d1d1f] sm:text-5xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 max-w-2xl text-[1.05rem] text-[#515154]">
                {post.excerpt}
              </p>
            )}

            {cover && (
              <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
                <Image
                  src={cover.url}
                  alt={post.title}
                  fill
                  style={{ objectPosition: `${cover.x}% ${cover.y}%` }}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  unoptimized
                  priority
                />
              </div>
            )}

            <div
              className="blog-content mt-10"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {galleryImages.length > 0 && (
              <div className="mt-14 border-t border-[#e5e5ea] pt-10">
                <p className="eyebrow">More from this project</p>
                <div
                  className={`mt-4 grid gap-3 ${
                    galleryImages.length === 1
                      ? "grid-cols-1"
                      : "grid-cols-2 sm:grid-cols-3"
                  }`}
                >
                  {galleryImages.map((img, i) => (
                    <div
                      key={img.url}
                      className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#f5f5f7]"
                    >
                      <Image
                        src={img.url}
                        alt={`${post.title} — photo ${i + 2}`}
                        fill
                        style={{ objectPosition: `${img.x}% ${img.y}%` }}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 50vw, 260px"
                        unoptimized
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
