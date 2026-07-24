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

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

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
    })();
  }
  return schemaReady;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toPost(row: any): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    coverImage: row.cover_image,
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
  coverImage: string | null;
  published: boolean;
}): Promise<BlogPost> {
  await ensureSchema();
  const rows = await sql`
    INSERT INTO blog_posts (slug, title, excerpt, content, cover_image, published)
    VALUES (${input.slug}, ${input.title}, ${input.excerpt}, ${input.content}, ${input.coverImage}, ${input.published})
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
    coverImage: string | null;
    published: boolean;
  },
): Promise<BlogPost> {
  await ensureSchema();
  const rows = await sql`
    UPDATE blog_posts
    SET slug = ${input.slug},
        title = ${input.title},
        excerpt = ${input.excerpt},
        content = ${input.content},
        cover_image = ${input.coverImage},
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
