import Link from "next/link";
import { notFound } from "next/navigation";
import { PostForm } from "@/components/admin/PostForm";
import { getPostById } from "@/lib/db";
import { updatePostAction } from "@/app/actions/post-actions";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number(id);

  if (!Number.isFinite(postId)) notFound();

  const post = await getPostById(postId);
  if (!post) notFound();

  const boundUpdateAction = updatePostAction.bind(null, post.id);

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/admin"
          className="text-[0.82rem] font-medium text-[#86868b] hover:text-[#1d1d1f]"
        >
          ← Back to posts
        </Link>
        <h1 className="display mt-2 text-3xl text-[#1d1d1f]">Edit post</h1>
      </div>

      <PostForm
        post={post}
        action={boundUpdateAction}
        submitLabel="Save changes"
      />
    </div>
  );
}
