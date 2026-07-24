// src/app/admin/(protected)/page.tsx
import Link from "next/link";
import { listAllPosts } from "@/lib/db";
import { deletePostAction } from "@/app/actions/post-actions";

export default async function AdminDashboardPage() {
  let posts: Awaited<ReturnType<typeof listAllPosts>> = [];
  let dbError: string | null = null;

  try {
    posts = await listAllPosts();
  } catch (err) {
    dbError =
      err instanceof Error
        ? err.message
        : "Could not load posts from the database.";
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="display text-3xl text-[#1d1d1f]">Blog posts</h1>
          <p className="mt-1 text-[0.88rem] text-[#86868b]">
            {posts.length} post{posts.length === 1 ? "" : "s"}
          </p>
        </div>
        <Link href="/admin/posts/new" className="btn bg-[#0071e3] text-white">
          New post
        </Link>
      </div>

      {dbError && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[0.85rem] text-red-700">
          {dbError}
        </div>
      )}

      {!dbError && posts.length === 0 && (
        <div className="rounded-2xl border border-dashed border-[#e5e5ea] bg-white px-6 py-16 text-center">
          <p className="text-[0.95rem] text-[#515154]">
            No posts yet. Create your first one.
          </p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-[#e5e5ea] bg-white">
          <table className="w-full text-left text-[0.88rem]">
            <thead>
              <tr className="border-b border-[#e5e5ea] text-[0.75rem] uppercase tracking-wide text-[#86868b]">
                <th className="px-5 py-3 font-medium">Title</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Updated</th>
                <th className="px-5 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-[#e5e5ea] last:border-0"
                >
                  <td className="px-5 py-3">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="font-medium text-[#1d1d1f] hover:text-[#0071e3]"
                    >
                      {post.title}
                    </Link>
                    <p className="text-[0.78rem] text-[#86868b]">
                      /{post.slug}
                    </p>
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-[0.72rem] font-medium ${
                        post.published
                          ? "bg-green-50 text-green-700"
                          : "bg-[#f5f5f7] text-[#86868b]"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-[#86868b]">
                    {new Date(post.updatedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex justify-end gap-3">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="text-[0.82rem] font-medium text-[#515154] hover:text-[#1d1d1f]"
                      >
                        Edit
                      </Link>
                      <form
                        action={async () => {
                          "use server";
                          await deletePostAction(post.id);
                        }}
                      >
                        <button
                          type="submit"
                          className="text-[0.82rem] font-medium text-red-600 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
