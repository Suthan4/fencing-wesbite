import Link from "next/link";
import { PostForm } from "@/components/admin/PostForm";
import { createPostAction } from "@/app/actions/post-actions";

export default function NewPostPage() {
  return (
    <div>
      <div className="mb-6">
        <Link
          href="/admin"
          className="text-[0.82rem] font-medium text-[#86868b] hover:text-[#1d1d1f]"
        >
          ← Back to posts
        </Link>
        <h1 className="display mt-2 text-3xl text-[#1d1d1f]">New post</h1>
      </div>

      <PostForm action={createPostAction} submitLabel="Create post" />
    </div>
  );
}
