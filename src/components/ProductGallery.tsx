import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 3500;

export type GalleryImage = { src: string; alt: string };

export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const [manual, setManual] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number, byUser = true) => {
      const total = images.length;
      setIndex(((next % total) + total) % total);
      if (byUser) setManual(true);
    },
    [images.length],
  );


  // Autoplay until the visitor interacts with a thumbnail or arrow.
  useEffect(() => {
    if (manual) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [manual, images.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(index + 1);
      else if (event.key === "ArrowLeft") go(index - 1);
      else if (event.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-editorial">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-[image:var(--gradient-rosegold)]" />
        <button
          type="button"
          onClick={() => setZoomed(true)}
          aria-label="Open full-screen zoom"
          className="block w-full cursor-zoom-in"
        >
          <div className="relative aspect-square w-full surface-ivory">
            {images.map((image, i) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={cn(
                  "absolute inset-0 h-full w-full object-contain p-6 transition-opacity duration-700 md:p-10",
                  i === index ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
        </button>

        <span className="pointer-events-none absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
          <Expand className="size-3" /> Zoom
        </span>

        <GalleryArrow side="left" onClick={() => go(index - 1)} />
        <GalleryArrow side="right" onClick={() => go(index + 1)} />

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((image, i) => (
            <span
              key={image.src}
              className={cn(
                "h-1 rounded-full transition-all",
                i === index ? "w-6 bg-rosegold" : "w-2 bg-border",
              )}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`View image ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "overflow-hidden rounded-lg border bg-card transition-all",
              i === index
                ? "border-rosegold shadow-soft"
                : "border-border opacity-70 hover:opacity-100",
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-square w-full object-contain p-1.5 surface-ivory"
            />
          </button>
        ))}
      </div>

      <p className="eyebrow">
        {manual ? "Manual view — selection held" : "Auto showcase — every 3.5s"}
      </p>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen product image"
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-wine/95 p-4 backdrop-blur-sm"
        >
          <img
            src={images[index]?.src}
            alt={images[index]?.alt}
            className="max-h-[88vh] w-auto max-w-[92vw] object-contain"
          />
          <button
            type="button"
            aria-label="Close full screen"
            onClick={() => setZoomed(false)}
            className="absolute right-5 top-5 rounded-full border border-rosegold-soft/40 p-2 text-wine-foreground transition-colors hover:bg-wine-foreground/10"
          >
            <X className="size-5" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-wine-foreground/70">
            Use ← → to browse
          </div>
        </div>
      )}
    </div>
  );
}

function GalleryArrow({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous image" : "Next image"}
      className={cn(
        "absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/85 p-2 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-accent",
        side === "left" ? "left-3" : "right-3",
      )}
    >
      <Icon className="size-4" />
    </button>
  );
}
