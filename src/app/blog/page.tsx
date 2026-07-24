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
              <p className="text-[0.95rem] text-[#86868b]">
                No posts published yet — check back soon.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group overflow-hidden rounded-2xl border border-[#e5e5ea] bg-white transition-shadow hover:shadow-md"
                  >
                    {post.coverImage && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <p className="text-[0.75rem] text-[#86868b]">
                        {new Date(post.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                      <h2 className="display mt-1.5 text-xl text-[#1d1d1f]">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="mt-2 text-[0.88rem] text-[#515154]">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
