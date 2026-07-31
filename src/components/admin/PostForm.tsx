"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import type { BlogPost } from "@/lib/db";
import type { PostFormState } from "@/app/actions/post-actions";
import { deleteImageAction } from "@/app/actions/post-actions";

type Action = (
  state: PostFormState,
  formData: FormData,
) => Promise<PostFormState>;

type FormImage = {
  id: string;
  url: string;
  previewUrl: string;
  x: number;
  y: number;
  uploading: boolean;
};

const MAX_IMAGES = 4;

function clamp(n: number): number {
  return Math.min(100, Math.max(0, Math.round(n * 10) / 10));
}

function makeId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

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
  const [images, setImages] = useState<FormImage[]>(
    () =>
      post?.images?.map((img) => ({
        id: makeId(),
        url: img.url,
        previewUrl: img.url,
        x: img.x,
        y: img.y,
        uploading: false,
      })) ?? [],
  );
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isDeleting, startDeleteTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const postId = post?.id ?? null;
  const uploadedCount = images.length;
  const isUploadingAny = images.some((img) => img.uploading);
  const canAddMore = uploadedCount < MAX_IMAGES;

  useEffect(() => {
    if (state?.error) toast.error(state.error);
  }, [state?.error]);

  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.previewUrl.startsWith("blob:")) {
          URL.revokeObjectURL(img.previewUrl);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (files.length === 0) return;

    const remainingSlots = MAX_IMAGES - images.length;
    if (remainingSlots <= 0) {
      toast.error(`You can only add up to ${MAX_IMAGES} images.`);
      return;
    }

    const accepted = files.slice(0, remainingSlots);
    if (files.length > accepted.length) {
      toast.error(
        `Only ${remainingSlots} more image${remainingSlots === 1 ? "" : "s"} allowed — the rest were skipped.`,
      );
    }

    const pending = accepted.map((file) => ({
      file,
      entry: {
        id: makeId(),
        url: "",
        previewUrl: URL.createObjectURL(file),
        x: 50,
        y: 50,
        uploading: true,
      } satisfies FormImage,
    }));
    setImages((prev) => [...prev, ...pending.map((p) => p.entry)]);

    await Promise.all(
      pending.map(async ({ file, entry }) => {
        try {
          const body = new FormData();
          body.set("file", file);
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            body,
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error ?? "Upload failed.");

          setImages((prev) =>
            prev.map((img) =>
              img.id === entry.id
                ? { ...img, url: data.url as string, uploading: false }
                : img,
            ),
          );
          toast.success(`${file.name} uploaded`);
        } catch (err) {
          setImages((prev) => prev.filter((img) => img.id !== entry.id));
          URL.revokeObjectURL(entry.previewUrl);
          toast.error(
            err instanceof Error
              ? `${file.name}: ${err.message}`
              : `${file.name} failed to upload.`,
          );
        }
      }),
    );
  }

  function handleFocalPick(id: string, e: React.PointerEvent<HTMLDivElement>) {
    if (e.buttons !== 1 && e.type !== "pointerdown") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = clamp(((e.clientX - rect.left) / rect.width) * 100);
    const y = clamp(((e.clientY - rect.top) / rect.height) * 100);
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, x, y } : img)),
    );
  }

  function startDrag(id: string, e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    handleFocalPick(id, e);
  }

  function makeCover(id: string) {
    setImages((prev) => {
      const index = prev.findIndex((img) => img.id === id);
      if (index <= 0) return prev;
      const next = [...prev];
      const [chosen] = next.splice(index, 1);
      next.unshift(chosen);
      return next;
    });
  }

  function handleDeleteImage(image: FormImage) {
    if (image.uploading || !image.url) {
      setImages((prev) => prev.filter((img) => img.id !== image.id));
      URL.revokeObjectURL(image.previewUrl);
      return;
    }

    setDeletingId(image.id);
    startDeleteTransition(async () => {
      const result = await deleteImageAction(postId, image.url);
      if (result?.error) {
        toast.error(result.error);
      } else {
        setImages((prev) => prev.filter((img) => img.id !== image.id));
        toast.success("Image deleted");
      }
      setDeletingId(null);
    });
  }

  const imagesForSubmit = images
    .filter((img) => !img.uploading && img.url)
    .map((img) => ({ url: img.url, x: img.x, y: img.y }));

  return (
    <form action={formAction} className="space-y-5 pb-24 sm:space-y-6 sm:pb-0">
      <div className="rounded-2xl border border-[#e5e5ea] bg-white p-4 sm:p-6">
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
            className="w-full rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 text-base text-[#1d1d1f] outline-none focus:border-[#0071e3] sm:text-[0.95rem]"
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
            className="w-full rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 text-base text-[#1d1d1f] outline-none focus:border-[#0071e3] sm:text-[0.9rem]"
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
            className="w-full resize-y rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 text-base text-[#1d1d1f] outline-none focus:border-[#0071e3] sm:text-[0.9rem]"
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
            className="w-full resize-y rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 font-mono text-[0.9rem] text-[#1d1d1f] outline-none focus:border-[#0071e3] sm:text-[0.85rem]"
          />
        </div>

        <div className="mb-2">
          <span className="mb-1.5 block text-[0.8rem] font-medium text-[#515154]">
            Images{" "}
            <span className="font-normal text-[#86868b]">
              ({uploadedCount}/{MAX_IMAGES} — select several at once, the first
              is the preview/cover. Drag on a photo to choose the part that
              stays visible, just like repositioning a LinkedIn cover photo.)
            </span>
          </span>

          <input
            type="hidden"
            name="images"
            value={JSON.stringify(imagesForSubmit)}
          />

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4">
            {images.map((img, index) => {
              const isThisDeleting = isDeleting && deletingId === img.id;
              return (
                <div
                  key={img.id}
                  className="group relative overflow-hidden rounded-xl border border-[#e5e5ea] bg-[#f5f5f7]"
                >
                  <div
                    className="relative aspect-square w-full cursor-crosshair touch-none select-none"
                    onPointerDown={(e) => startDrag(img.id, e)}
                    onPointerMove={(e) => handleFocalPick(img.id, e)}
                  >
                    <Image
                      src={img.previewUrl}
                      alt={`Post image ${index + 1}`}
                      fill
                      draggable={false}
                      className="pointer-events-none object-cover"
                      style={{ objectPosition: `${img.x}% ${img.y}%` }}
                      unoptimized
                    />
                    {!img.uploading && (
                      <div
                        className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
                        style={{ left: `${img.x}%`, top: `${img.y}%` }}
                      />
                    )}
                    {img.uploading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-1 border-t border-[#e5e5ea] bg-white px-2 py-1.5">
                    {img.uploading ? (
                      <span className="text-[0.68rem] text-[#86868b] sm:text-[0.7rem]">
                        Uploading…
                      </span>
                    ) : index === 0 ? (
                      <span className="rounded-full bg-[#0071e3]/10 px-2 py-0.5 text-[0.66rem] font-medium text-[#0071e3] sm:text-[0.68rem]">
                        Cover
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => makeCover(img.id)}
                        className="text-[0.68rem] font-medium text-[#515154] active:opacity-60 sm:text-[0.7rem] sm:hover:text-[#1d1d1f]"
                      >
                        Make cover
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(img)}
                      disabled={isThisDeleting}
                      className="text-[0.68rem] font-medium text-red-600 active:opacity-60 disabled:opacity-50 sm:text-[0.7rem] sm:hover:text-red-700"
                    >
                      {isThisDeleting ? "Deleting…" : "Delete"}
                    </button>
                  </div>
                </div>
              );
            })}

            {canAddMore && (
              <label
                className={`flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-[#c7c7cc] text-center text-[0.75rem] text-[#86868b] transition-colors sm:hover:border-[#0071e3] sm:hover:text-[#0071e3] ${
                  isUploadingAny
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }`}
              >
                <span className="text-2xl leading-none">+</span>
                <span>Add up to {MAX_IMAGES - uploadedCount} more</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFilesChange}
                  disabled={isUploadingAny || !canAddMore}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        <label className="mt-5 flex items-center gap-2.5">
          <input
            type="checkbox"
            name="published"
            defaultChecked={post?.published}
            className="h-5 w-5 rounded border-[#e5e5ea] sm:h-4 sm:w-4"
          />
          <span className="text-[0.9rem] text-[#1d1d1f] sm:text-[0.88rem]">
            Published (visible on the public blog)
          </span>
        </label>
      </div>

      {/* Mobile: sticky bottom action bar, like a native app footer.
          Desktop: plain inline button, no fixed positioning. */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-[#e5e5ea] bg-white/95 px-4 py-3 backdrop-blur-md pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:static sm:z-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:pb-0 sm:backdrop-blur-none">
        <button
          type="submit"
          disabled={pending || isUploadingAny}
          className="btn w-full bg-[#0071e3] text-white disabled:opacity-50 sm:w-auto"
        >
          {pending
            ? "Saving…"
            : isUploadingAny
              ? "Uploading images…"
              : submitLabel}
        </button>
      </div>
    </form>
  );
}
