"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import type { ImageAsset } from "@/types";

/**
 * Desktop: thumbnail column + large image. Mobile: swipeable slides with position dots.
 * Clicking the main image opens a full-screen zoom view.
 */
export function ProductGallery({ images, productName }: { images: ImageAsset[]; productName: string }) {
  const [active, setActive] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Track the visible slide on mobile.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setActive((prev) => (prev === index ? prev : index));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!zoomOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [zoomOpen]);

  const current = images[active] ?? images[0];

  return (
    <div>
      {/* Mobile / tablet slider */}
      <div className="relative lg:hidden">
        <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => {
                setActive(i);
                setZoomOpen(true);
              }}
              className="relative aspect-3/4 w-full shrink-0 snap-center bg-sand"
              aria-label={`View image ${i + 1} of ${images.length} full screen`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                preload={i === 0}
                className="object-cover"
              />
            </button>
          ))}
        </div>
        {images.length > 1 && (
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2" aria-hidden="true">
            {images.map((img, i) => (
              <span
                key={img.src}
                className={`h-[2px] transition-all duration-500 ${i === active ? "w-8 bg-ink" : "w-4 bg-ink/30"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden gap-5 lg:grid lg:grid-cols-[5.5rem_1fr]">
        <ul className="flex flex-col gap-3" aria-label="Product images">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === active}
                className={`relative block aspect-3/4 w-full overflow-hidden bg-sand transition-opacity duration-300 ${
                  i === active ? "opacity-100 ring-1 ring-ink ring-offset-2 ring-offset-ivory" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt="" fill sizes="88px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setZoomOpen(true)}
          className="group relative aspect-3/4 w-full cursor-zoom-in overflow-hidden bg-sand"
          aria-label="Open full-screen image"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={current.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 1440px) 720px, 50vw"
                preload={active === 0}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <span className="absolute right-4 bottom-4 grid size-10 place-items-center bg-ivory/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ZoomIn className="size-4" strokeWidth={1.4} />
          </span>
        </button>
      </div>

      {/* Zoom overlay */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${productName} images`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-70 overflow-y-auto bg-ivory"
          >
            <button
              type="button"
              onClick={() => setZoomOpen(false)}
              className="fixed top-4 right-4 z-10 grid size-12 place-items-center bg-ivory text-ink"
              aria-label="Close full-screen images"
            >
              <X className="size-5" strokeWidth={1.4} />
            </button>
            <div className="mx-auto flex max-w-4xl flex-col gap-2 py-2 sm:py-8">
              {images.map((img) => (
                <div key={img.src} className="relative aspect-3/4 w-full bg-sand">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 896px) 896px, 100vw" quality={85} className="object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
