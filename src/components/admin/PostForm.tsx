"use client";

import { useActionState, useRef, useState } from "react";
import Image from "next/image";
import type { BlogPost } from "@/lib/db";
import type { PostFormState } from "@/app/actions/post-actions";

type Action = (
  state: PostFormState,
  formData: FormData,
) => Promise<PostFormState>;

export function PostForm({
  post,
  action,
  submitLabel,
}: {
  post?: BlogPost;
  action: Action;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState<PostFormState, FormData>(
    action,
    null,
  );
  const [coverImage, setCoverImage] = useState(post?.coverImage ?? "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError(null);

    try {
      const body = new FormData();
      body.set("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body,
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Upload failed.");
      }
      setCoverImage(data.url);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="rounded-2xl border border-[#e5e5ea] bg-white p-6">
        <div className="mb-5">
          <label
            htmlFor="title"
            className="mb-1.5 block text-[0.8rem] font-medium text-[#515154]"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            defaultValue={post?.title}
            className="w-full rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 text-[0.95rem] text-[#1d1d1f] outline-none focus:border-[#0071e3]"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="slug"
            className="mb-1.5 block text-[0.8rem] font-medium text-[#515154]"
          >
            Slug{" "}
            <span className="font-normal text-[#86868b]">
              (leave blank to auto-generate from title)
            </span>
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            defaultValue={post?.slug}
            placeholder="my-post-title"
            className="w-full rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 text-[0.9rem] text-[#1d1d1f] outline-none focus:border-[#0071e3]"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="excerpt"
            className="mb-1.5 block text-[0.8rem] font-medium text-[#515154]"
          >
            Excerpt
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            rows={2}
            defaultValue={post?.excerpt}
            placeholder="Short summary shown on the blog listing page"
            className="w-full resize-y rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 text-[0.9rem] text-[#1d1d1f] outline-none focus:border-[#0071e3]"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="content"
            className="mb-1.5 block text-[0.8rem] font-medium text-[#515154]"
          >
            Content{" "}
            <span className="font-normal text-[#86868b]">(Markdown)</span>
          </label>
          <textarea
            id="content"
            name="content"
            rows={16}
            required
            defaultValue={post?.content}
            className="w-full resize-y rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 font-mono text-[0.85rem] text-[#1d1d1f] outline-none focus:border-[#0071e3]"
          />
        </div>

        <div className="mb-5">
          <span className="mb-1.5 block text-[0.8rem] font-medium text-[#515154]">
            Cover image
          </span>

          {coverImage && (
            <div className="relative mb-3 h-40 w-full overflow-hidden rounded-xl border border-[#e5e5ea]">
              <Image
                src={coverImage}
                alt="Cover preview"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}

          <input type="hidden" name="coverImage" value={coverImage} />

          <div className="flex items-center gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={uploading}
              className="text-[0.85rem] text-[#515154]"
            />
            {uploading && (
              <span className="text-[0.8rem] text-[#86868b]">Uploading…</span>
            )}
          </div>
          {uploadError && (
            <p className="mt-2 text-[0.82rem] text-red-600">{uploadError}</p>
          )}
        </div>

        <label className="flex items-center gap-2.5">
          <input
            type="checkbox"
            name="published"
            defaultChecked={post?.published}
            className="h-4 w-4 rounded border-[#e5e5ea]"
          />
          <span className="text-[0.88rem] text-[#1d1d1f]">
            Published (visible on the public blog)
          </span>
        </label>
      </div>

      {state?.error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-[0.85rem] text-red-600">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending || uploading}
        className="btn bg-[#0071e3] text-white disabled:opacity-50"
      >
        {pending ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
