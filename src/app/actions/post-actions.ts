"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/auth/dal";
import {
  createPost,
  updatePost,
  deletePost,
  isSlugTaken,
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

function readPostFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const coverImage = String(formData.get("coverImage") ?? "").trim() || null;
  const published = formData.get("published") === "on";
  const slugInput = String(formData.get("slug") ?? "").trim();
  const slug = slugify(slugInput || title);

  return { title, excerpt, content, coverImage, published, slug };
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
  await deletePost(id);
  revalidatePath("/admin");
  revalidatePath("/blog");
  redirect("/admin");
}
