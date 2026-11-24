"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  motion?: string;
};

type Props = {
  items: GalleryItem[];
  className?: string;
};

export default function MediaLightbox({ items, className }: Props) {
  const labelId = useId();
  const [active, setActive] = useState<number | null>(null);
  const open = active !== null;
  const current = active !== null ? items[active] : null;

  const close = useCallback(() => setActive(null), []);

  const showPrev = useCallback(() => {
    setActive((index) => {
      if (index === null) return index;
      return (index - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const showNext = useCallback(() => {
    setActive((index) => {
      if (index === null) return index;
      return (index + 1) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, showPrev, showNext]);

  return (
    <>
      <div className={className ?? "system-grid"}>
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className="system-card system-card-button"
            onClick={() => setActive(index)}
            aria-label={`放大檢視：${item.alt}`}
          >
            <div className="system-card-media">
              {item.motion ? (
                <video
                  className="system-card-video"
                  src={item.motion}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  aria-hidden="true"
                />
              ) : (
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  unoptimized={item.src.endsWith(".svg") || item.src.endsWith(".png")}
                />
              )}
            </div>
            {item.caption ? <span className="system-card-caption">{item.caption}</span> : null}
          </button>
        ))}
      </div>

      {open && current ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          onClick={close}
        >
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-toolbar">
              <p id={labelId}>{current.alt}</p>
              <button type="button" className="lightbox-close" onClick={close} aria-label="關閉">
                關閉
              </button>
            </div>
            <div className="lightbox-stage">
              {current.motion ? (
                <video
                  key={current.motion}
                  className="lightbox-video"
                  src={current.motion}
                  muted
                  loop
                  playsInline
                  autoPlay
                  controls
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="lightbox-image" src={current.src} alt={current.alt} />
              )}
            </div>
            {current.caption ? <p className="lightbox-caption">{current.caption}</p> : null}
            {items.length > 1 ? (
              <div className="lightbox-nav">
                <button type="button" onClick={showPrev}>
                  上一張
                </button>
                <button type="button" onClick={showNext}>
                  下一張
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
