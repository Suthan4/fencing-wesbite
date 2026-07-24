// src/lib/db.ts
// Data access layer for blog posts, backed by Postgres (Neon — the
// database Vercel provisions when you add "Postgres" from the Storage tab).
//
// Reads DATABASE_URL (or the POSTGRES_URL Vercel injects automatically)
// so no extra config is needed once the database is attached to the project.

import "server-only";
import { neon } from "@neondatabase/serverless";

const connectionString =
  process.env.DATABASE_URL ??
  process.env.POSTGRES_URL ??
  process.env.POSTGRES_PRISMA_URL;

if (!connectionString) {
  throw new Error(
    "Missing database connection string. Set DATABASE_URL (or attach Vercel Postgres, which injects POSTGRES_URL automatically). See ADMIN_SETUP.md.",
  );
}

const sql = neon(connectionString);

// A single image attached to a post. `x`/`y` are the focal point as a
// percentage (0–100) of the image's width/height — fed straight into CSS
// `object-position: ${x}% ${y}%` so the important part of the photo stays
// visible however the crop/aspect-ratio changes across the site.
export type BlogImage = {
  url: string;
  x: number;
  y: number;
};

export const MAX_POST_IMAGES = 4;

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  images: BlogImage[];
  /** Convenience accessor: images[0], kept for OG tags / anything simple. */
  coverImage: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

function clampPercent(n: unknown, fallback = 50): number {
  const num = typeof n === "number" ? n : Number(n);
  if (!Number.isFinite(num)) return fallback;
  return Math.min(100, Math.max(0, Math.round(num * 10) / 10));
}

function normalizeImages(input: unknown): BlogImage[] {
  if (!Array.isArray(input)) return [];
  return input
    .filter(
      (img): img is { url: unknown; x: unknown; y: unknown } =>
        !!img &&
        typeof img === "object" &&
        typeof (img as { url?: unknown }).url === "string" &&
        (img as { url: string }).url.trim() !== "",
    )
    .slice(0, MAX_POST_IMAGES)
    .map((img) => ({
      url: (img.url as string).trim(),
      x: clampPercent(img.x),
      y: clampPercent(img.y),
    }));
}

// Idempotent — safe to call on every request; only does work the first time.
let schemaReady: Promise<void> | null = null;
function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS blog_posts (
          id SERIAL PRIMARY KEY,
          slug TEXT UNIQUE NOT NULL,
          title TEXT NOT NULL,
          excerpt TEXT NOT NULL DEFAULT '',
          content TEXT NOT NULL DEFAULT '',
          cover_image TEXT,
          published BOOLEAN NOT NULL DEFAULT false,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `;

      // Migration: multi-image support with a per-image focal point.
      await sql`ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS images JSONB NOT NULL DEFAULT '[]'::jsonb`;

      // Backfill: posts created before `images` existed only have
      // cover_image — turn that into a one-item images array so they keep
      // showing a picture instead of going blank.
      await sql`
        UPDATE blog_posts
        SET images = jsonb_build_array(
          jsonb_build_object('url', cover_image, 'x', 50, 'y', 50)
        )
        WHERE images = '[]'::jsonb AND cover_image IS NOT NULL AND cover_image <> ''
      `;
    })();
  }
  return schemaReady;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toPost(row: any): BlogPost {
  const images = normalizeImages(row.images);
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    images,
    coverImage: images[0]?.url ?? row.cover_image ?? null,
    published: row.published,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function listAllPosts(): Promise<BlogPost[]> {
  await ensureSchema();
  const rows = await sql`SELECT * FROM blog_posts ORDER BY created_at DESC`;
  return rows.map(toPost);
}

export async function listPublishedPosts(): Promise<BlogPost[]> {
  await ensureSchema();
  const rows =
    await sql`SELECT * FROM blog_posts WHERE published = true ORDER BY created_at DESC`;
  return rows.map(toPost);
}

export async function getPostById(id: number): Promise<BlogPost | null> {
  await ensureSchema();
  const rows = await sql`SELECT * FROM blog_posts WHERE id = ${id}`;
  return rows[0] ? toPost(rows[0]) : null;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  await ensureSchema();
  const rows = await sql`SELECT * FROM blog_posts WHERE slug = ${slug}`;
  return rows[0] ? toPost(rows[0]) : null;
}

export async function createPost(input: {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  images: BlogImage[];
  published: boolean;
}): Promise<BlogPost> {
  await ensureSchema();
  const images = normalizeImages(input.images);
  const imagesJson = JSON.stringify(images);
  const coverImage = images[0]?.url ?? null;
  const rows = await sql`
    INSERT INTO blog_posts (slug, title, excerpt, content, images, cover_image, published)
    VALUES (${input.slug}, ${input.title}, ${input.excerpt}, ${input.content}, ${imagesJson}::jsonb, ${coverImage}, ${input.published})
    RETURNING *
  `;
  return toPost(rows[0]);
}

export async function updatePost(
  id: number,
  input: {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    images: BlogImage[];
    published: boolean;
  },
): Promise<BlogPost> {
  await ensureSchema();
  const images = normalizeImages(input.images);
  const imagesJson = JSON.stringify(images);
  const coverImage = images[0]?.url ?? null;
  const rows = await sql`
    UPDATE blog_posts
    SET slug = ${input.slug},
        title = ${input.title},
        excerpt = ${input.excerpt},
        content = ${input.content},
        images = ${imagesJson}::jsonb,
        cover_image = ${coverImage},
        published = ${input.published},
        updated_at = now()
    WHERE id = ${id}
    RETURNING *
  `;
  return toPost(rows[0]);
}

export async function deletePost(id: number): Promise<void> {
  await ensureSchema();
  await sql`DELETE FROM blog_posts WHERE id = ${id}`;
}

// Removes a single image (by URL) from a post's images array. Used by the
// admin "delete image" control so the database row is updated in the same
// step as the Vercel Blob object being deleted — the two never drift apart.
export async function removeImageFromPost(
  id: number,
  url: string,
): Promise<BlogPost | null> {
  await ensureSchema();
  const existing = await getPostById(id);
  if (!existing) return null;

  const images = existing.images.filter((img) => img.url !== url);
  const imagesJson = JSON.stringify(images);
  const coverImage = images[0]?.url ?? null;

  const rows = await sql`
    UPDATE blog_posts
    SET images = ${imagesJson}::jsonb,
        cover_image = ${coverImage},
        updated_at = now()
    WHERE id = ${id}
    RETURNING *
  `;
  return rows[0] ? toPost(rows[0]) : null;
}

export async function isSlugTaken(
  slug: string,
  excludeId?: number,
): Promise<boolean> {
  await ensureSchema();
  const rows = excludeId
    ? await sql`SELECT id FROM blog_posts WHERE slug = ${slug} AND id != ${excludeId}`
    : await sql`SELECT id FROM blog_posts WHERE slug = ${slug}`;
  return rows.length > 0;
}
