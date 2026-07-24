import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { FloatingPhone } from "@/components/FloatingPhone";
import { listPublishedPosts } from "@/lib/db";

export const metadata: Metadata = {
  title: "Blog — Navi Fencing, Chennai",
  description:
    "Fencing tips, product guides and project stories from Navi Fencing, Chennai & Tamil Nadu.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof listPublishedPosts>> = [];
  try {
    posts = await listPublishedPosts();
  } catch {
    // Database not configured yet — show an empty state rather than crash.
    posts = [];
  }

  return (
    <>
      <SiteHeader />
      <FloatingWhatsApp />
      <FloatingPhone />
      <main>
        <section className="bg-white pt-[120px] pb-16 sm:pt-[160px] sm:pb-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="eyebrow">Navi Fencing</p>
            <h1 className="display mt-3 text-4xl text-[#1d1d1f] sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 max-w-xl text-[1rem] text-[#515154]">
              Fencing tips, product guides, and project stories from Chennai
              &amp; Tamil Nadu.
            </p>
          </div>
        </section>

        <section className="bg-[#fafafa] pb-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            {posts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#e5e5ea] bg-white px-6 py-16 text-center">
                <p className="text-[0.95rem] text-[#86868b]">
                  No posts published yet — check back soon.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {posts.map((post, index) => {
                  const cover = post.images[0];
                  const featured = index === 0;
                  return (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className={`group overflow-hidden rounded-2xl border border-[#e5e5ea] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 ${
                        featured ? "sm:col-span-2" : ""
                      }`}
                    >
                      {cover ? (
                        <div
                          className={`relative w-full overflow-hidden bg-[#f5f5f7] ${
                            featured ? "h-56 sm:h-80" : "h-48"
                          }`}
                        >
                          <Image
                            src={cover.url}
                            alt={post.title}
                            fill
                            sizes={
                              featured
                                ? "(max-width: 640px) 100vw, 900px"
                                : "(max-width: 640px) 100vw, 440px"
                            }
                            style={{
                              objectPosition: `${cover.x}% ${cover.y}%`,
                            }}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      ) : (
                        <div
                          className={`w-full bg-[#f5f5f7] ${
                            featured ? "h-56 sm:h-80" : "h-48"
                          }`}
                        />
                      )}
                      <div className={featured ? "p-6 sm:p-8" : "p-5"}>
                        <p className="text-[0.75rem] tracking-wide text-[#86868b]">
                          {new Date(post.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </p>
                        <h2
                          className={`display mt-1.5 text-[#1d1d1f] transition-colors group-hover:text-[#0071e3] ${
                            featured ? "text-2xl sm:text-3xl" : "text-xl"
                          }`}
                        >
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p
                            className={`mt-2 text-[#515154] ${
                              featured
                                ? "max-w-2xl text-[0.95rem]"
                                : "text-[0.88rem]"
                            }`}
                          >
                            {post.excerpt}
                          </p>
                        )}
                        <span className="link-arrow mt-4 inline-flex text-[0.85rem]">
                          Read more
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
