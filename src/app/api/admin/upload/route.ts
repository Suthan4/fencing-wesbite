// src/app/api/admin/upload/route.ts
// Handles cover-image uploads from the admin panel. Stores the file in
// Vercel Blob storage (works from Vercel's read-only serverless
// filesystem, unlike writing to /public at runtime) and returns its URL.
//
// Requires the project to have a Blob store attached (Storage tab on
// Vercel), which auto-injects BLOB_READ_WRITE_TOKEN. See ADMIN_SETUP.md.

import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { verifyAdminSession } from "@/lib/auth/dal";

export const runtime = "nodejs";

const MAX_BYTES = 4 * 1024 * 1024; // 4MB — stay under serverless body limits
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/avif",
]);

export async function POST(request: Request) {
  const session = await verifyAdminSession();
  if (!session.isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      {
        error:
          "Image storage isn't configured yet. Attach a Blob store to this project (Vercel → Storage). See ADMIN_SETUP.md.",
      },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: "Unsupported file type. Use JPEG, PNG, WebP, GIF, or AVIF." },
      { status: 400 },
    );
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Image is too large. Keep it under 4MB." },
      { status: 400 },
    );
  }

  const blob = await put(`blog/${Date.now()}-${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return NextResponse.json({ url: blob.url });
}
