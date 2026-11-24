"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";

type Props = {
  src: string;
  alt: string;
  motion?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export default function OpenableMedia({
  src,
  alt,
  motion,
  className,
  sizes = "100vw",
  priority = false,
}: Props) {
  const labelId = useId();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        className={`openable-media ${className ?? ""}`}
        onClick={() => setOpen(true)}
        aria-label={`放大檢視：${alt}`}
      >
        {motion ? (
          <video
            className="openable-media-video"
            src={motion}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <Image
            src={src}
            alt=""
            fill
            sizes={sizes}
            priority={priority}
            unoptimized={src.endsWith(".svg") || src.endsWith(".png")}
          />
        )}
      </button>

      {open ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby={labelId} onClick={close}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-toolbar">
              <p id={labelId}>{alt}</p>
              <button type="button" className="lightbox-close" onClick={close} aria-label="關閉">
                關閉
              </button>
            </div>
            <div className="lightbox-stage">
              {motion ? (
                <video
                  className="lightbox-video"
                  src={motion}
                  muted
                  loop
                  playsInline
                  autoPlay
                  controls
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="lightbox-image" src={src} alt={alt} />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
