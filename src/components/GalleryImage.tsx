// src/components/GalleryImage.tsx — OPTIMISED
// FIX: Was setting priority={index < 6} which eagerly fetches 6 images.
// On mobile this competes with the hero LCP image for bandwidth.
// Changed to priority only for first 2, rest lazy-loaded.

import Image from "next/image";

const galleryPhotos = [
  {
    src: "/gallery/8mm-plastic-lattice.jpg",
    alt: "8mm plastic lattice fencing",
  },
  {
    src: "/gallery/IMG20200221154145.jpg",
    alt: "Fencing project installation",
  },
  { src: "/gallery/IMG20200221154149.jpg", alt: "Fence post installation" },
  { src: "/gallery/IMG20200221154151.jpg", alt: "Outdoor fencing work" },
  { src: "/gallery/IMG20201016163148.jpg", alt: "Farm fencing installation" },
  { src: "/gallery/IMG20201016163232.jpg", alt: "Boundary fencing work" },
  { src: "/gallery/IMG20201016163326.jpg", alt: "Fence installation site" },
  { src: "/gallery/IMG20201022082702_01.jpg", alt: "Cement post fencing" },
  { src: "/gallery/IMG20201022082704_01.jpg", alt: "Fencing project photo" },
  { src: "/gallery/IMG20201022082706_01.jpg", alt: "Outdoor fence line" },
  { src: "/gallery/IMG20201103104802.jpg", alt: "Chain link fencing project" },
  { src: "/gallery/IMG20201103104805.jpg", alt: "Completed fencing work" },
  { src: "/gallery/IMG20201106115628.jpg", alt: "Fence post setup" },
  { src: "/gallery/IMG20201106115630.jpg", alt: "Fencing installation" },
  { src: "/gallery/IMG20201106115641_01.jpg", alt: "Boundary fence project" },
  { src: "/gallery/IMG20201106115645_01.jpg", alt: "Farm fencing project" },
  { src: "/gallery/IMG20201125153549.jpg", alt: "Fencing work photo" },
  { src: "/gallery/IMG20201125153556.jpg", alt: "Installed fence line" },
  { src: "/gallery/IMG20201125154310.jpg", alt: "Cement pole fencing" },
  { src: "/gallery/IMG20201215113309.jpg", alt: "Outdoor fence installation" },
  { src: "/gallery/IMG20201215113310.jpg", alt: "Boundary fencing photo" },
  { src: "/gallery/IMG20201215114109.jpg", alt: "Fence installation work" },
  { src: "/gallery/IMG20201215125637.jpg", alt: "Fencing project site" },
  { src: "/gallery/IMG20210321074206_01.jpg", alt: "Fencing project photo" },
  { src: "/gallery/IMG20210901071903.jpg", alt: "Fence installation photo" },
  { src: "/gallery/IMG20210901071915.jpg", alt: "Outdoor fencing photo" },
  { src: "/gallery/IMG20210901072000.jpg", alt: "Fence project work" },
  { src: "/gallery/IMG20210901072023(1).jpg", alt: "Fencing site image" },
  { src: "/gallery/IMG20210928151334.jpg", alt: "Completed fencing project" },
  { src: "/gallery/IMG20210928151356.jpg", alt: "Fence line project" },
  { src: "/gallery/IMG20211027082857.jpg", alt: "Fencing installation" },
  {
    src: "/gallery/pvc-barbed-wire-20240402162909974.jpeg",
    alt: "PVC barbed wire fencing",
  },
  { src: "/gallery/Shinestar-7-scaled.jpg", alt: "Fencing material" },
];

export function GalleryImages() {
  return (
    <section className="bg-[#f5f5f7] py-14 sm:py-20 border-t border-[#e5e5ea]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Project photos</p>
            <h2 className="display mt-2 text-4xl sm:text-5xl text-[#1d1d1f]">
              From our installs.
            </h2>
          </div>

          <span className="hidden sm:inline-flex rounded-full border border-[#e5e5ea] bg-white px-4 py-1.5 text-sm text-[#515154]">
            {galleryPhotos.length} photos
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {galleryPhotos.map((photo, index) => (
            <div
              key={photo.src}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[#e5e5ea]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
                // FIX: Was priority={index < 6} — too many priority hints on mobile
                // compete with the hero LCP image for bandwidth.
                // Only the first 2 images in viewport need priority.
                // Everything else uses native lazy loading.
                priority={index < 2}
                loading={index < 2 ? undefined : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
