"use client";

type Props = {
  src: string;
  alt: string;
};

/** GPU-composited pan/zoom — tracks display refresh (typically 60fps). */
export default function LightboxMotion({ src, alt }: Props) {
  return (
    <div className="lightbox-motion">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="lightbox-kenburns" src={src} alt={alt} draggable={false} />
    </div>
  );
}
