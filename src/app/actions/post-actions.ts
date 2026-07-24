"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { del } from "@vercel/blob";
import { requireAdminSession } from "@/lib/auth/dal";
import {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  removeImageFromPost,
  isSlugTaken,
  MAX_POST_IMAGES,
  type BlogImage,
} from "@/lib/db";

export type PostFormState = {
  error?: string;
} | null;

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function readImagesField(formData: FormData): BlogImage[] {
  const raw = String(formData.get("images") ?? "[]");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(parsed)) return [];

  return parsed
    .filter(
      (img): img is { url: unknown; x: unknown; y: unknown } =>
        !!img && typeof img === "object" && typeof (img as { url?: unknown }).url === "string",
    )
    .slice(0, MAX_POST_IMAGES)
    .map((img) => {
      const x = Number(img.x);
      const y = Number(img.y);
      return {
        url: String(img.url).trim(),
        x: Number.isFinite(x) ? Math.min(100, Math.max(0, x)) : 50,
        y: Number.isFinite(y) ? Math.min(100, Math.max(0, y)) : 50,
      };
    })
    .filter((img) => img.url !== "");
}

function readPostFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const images = readImagesField(formData);
  const published = formData.get("published") === "on";
  const slugInput = String(formData.get("slug") ?? "").trim();
  const slug = slugify(slugInput || title);

  return { title, excerpt, content, images, published, slug };
}

export async function createPostAction(
  _prevState: PostFormState,
  formData: FormData,
): Promise<PostFormState> {
  await requireAdminSession();

  const fields = readPostFields(formData);

  if (!fields.title) return { error: "Title is required." };
  if (!fields.slug) return { error: "Slug could not be generated — add a title or slug." };

  if (await isSlugTaken(fields.slug)) {
    return { error: `Slug "${fields.slug}" is already in use.` };
  }

  const post = await createPost(fields);

  revalidatePath("/admin");
  revalidatePath("/blog");
  redirect(`/admin/posts/${post.id}/edit`);
}

export async function updatePostAction(
  id: number,
  _prevState: PostFormState,
  formData: FormData,
): Promise<PostFormState> {
  await requireAdminSession();

  const fields = readPostFields(formData);

  if (!fields.title) return { error: "Title is required." };
  if (!fields.slug) return { error: "Slug could not be generated — add a title or slug." };

  if (await isSlugTaken(fields.slug, id)) {
    return { error: `Slug "${fields.slug}" is already in use.` };
  }

  await updatePost(id, fields);

  revalidatePath("/admin");
  revalidatePath("/blog");
  revalidatePath(`/blog/${fields.slug}`);
  return { error: undefined };
}

export async function deletePostAction(id: number): Promise<void> {
  await requireAdminSession();
  const post = await getPostById(id).catch(() => null);

  // Clean up every blob before dropping the row, so nothing orphaned is
  // left behind in storage once the post itself is gone.
  if (post) {
    await Promise.allSettled(post.images.map((img) => del(img.url)));
  }

  await deletePost(id);
  revalidatePath("/admin");
  revalidatePath("/blog");
  redirect("/admin");
}

export type DeleteImageState = { error?: string } | null;

// Deletes a single image from Vercel Blob storage and — if the post has
// already been saved (postId is set) — removes it from that post's
// `images` array in the same call, so the blob and the database never fall
// out of sync. For a post that hasn't been created yet (postId is null),
// this only needs to clean up the orphaned blob; the client already drops
// the image from its local (unsaved) form state.
export async function deleteImageAction(
  postId: number | null,
  url: string,
): Promise<DeleteImageState> {
  await requireAdminSession();

  if (!url) return { error: "Missing image URL." };

  try {
    await del(url);
  } catch (err) {
    // If the blob is already gone (e.g. a retry after a network hiccup),
    // don't block removing it from the post — otherwise the user gets
    // stuck with a dead image they can never clear.
    console.error("Failed to delete blob:", err);
  }

  if (postId != null) {
    await removeImageFromPost(postId, url);
    revalidatePath("/admin");
    revalidatePath("/blog");
  }

  return {};
}
