"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
  index: string;
  title: string;
  text: string;
  tab: string;
  /** Compact tab label for narrow screens. */
  tabShort: string;
  href: string;
};

const INTERVAL_MS = 5500;

export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Bumped on resume so the tab progress bar restarts in step with the new timer.
  const [cycle, setCycle] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => setActive((next + slides.length) % slides.length),
    [slides.length],
  );

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => {
    setPaused(false);
    setCycle((value) => value + 1);
  }, []);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(
      () => setActive((index) => (index + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => window.clearTimeout(timer);
  }, [active, paused, cycle, slides.length]);

  const current = slides[active];

  return (
    <div
      className={`hero-carousel${paused ? " is-paused" : ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="五大系統應用概念圖"
      style={{ ["--hc-interval" as string]: `${INTERVAL_MS}ms` }}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <div
        className="hc-frame"
        onTouchStart={(event) => {
          touchX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchX.current;
          const end = event.changedTouches[0]?.clientX;
          touchX.current = null;
          if (start === null || end === undefined) return;
          const delta = end - start;
          if (Math.abs(delta) > 40) go(active + (delta < 0 ? 1 : -1));
        }}
      >
        {slides.map((slide, index) => (
          <figure
            key={slide.src}
            className={`hc-slide${index === active ? " is-active" : ""}`}
            aria-hidden={index !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 980px) 100vw, 60vw"
              priority={index === 0}
            />
          </figure>
        ))}
        <button type="button" className="hc-arrow hc-prev" aria-label="上一張" onClick={() => go(active - 1)}>
          ‹
        </button>
        <button type="button" className="hc-arrow hc-next" aria-label="下一張" onClick={() => go(active + 1)}>
          ›
        </button>
      </div>
      <Link className="hc-caption" href={current.href} aria-live="polite">
        <span className="hc-index">{current.index}</span>
        <span className="hc-caption-copy">
          <strong>{current.title}</strong>
          <small>{current.text}</small>
        </span>
        <span className="hc-go" aria-hidden="true">
          了解系統 →
        </span>
      </Link>
      <div className="hc-tabs" role="tablist" aria-label="選擇系統">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`hc-tab${index === active ? " is-active" : ""}`}
            onClick={() => go(index)}
          >
            <span className="hc-tab-full">{slide.tab}</span>
            <span className="hc-tab-short">{slide.tabShort}</span>
            {index === active ? (
              <i key={`${active}-${cycle}`} className="hc-progress" aria-hidden="true" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
