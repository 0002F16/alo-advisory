"use client";

import { useEffect, useRef, useState } from "react";

const ROTATE_INTERVAL_MS = 6000;
const ZOOM_DURATION_MS = 6000;
const DEFAULT_IMAGES = ["/hero-bg.jpg", "/hero-bg-2.jpg", "/hero-bg-3.jpg"];

export type HeroBackgroundProps = {
  images?: string[];
  intervalMs?: number;
  zoomDurationMs?: number;
};

export function HeroBackground({
  images: imagesProp,
  intervalMs = ROTATE_INTERVAL_MS,
  zoomDurationMs = ZOOM_DURATION_MS
}: HeroBackgroundProps) {
  const images =
    Array.isArray(imagesProp) && imagesProp.length > 0 ? imagesProp : DEFAULT_IMAGES;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirst, setShowFirst] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const imagesRef = useRef(images);
  imagesRef.current = images;

  useEffect(() => {
    if (images.length < 2) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const n = imagesRef.current.length;
      setCurrentIndex((i) => (i + 1) % n);
      setShowFirst((f) => !f);
    }, intervalMs);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  const firstImage = images[currentIndex];
  const secondImage = images[(currentIndex + 1) % images.length];

  return (
    <>
      <div
        key={`first-${currentIndex}`}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out animate-hero-zoom"
        style={{
          backgroundImage: `url(${firstImage})`,
          opacity: showFirst ? 1 : 0
        }}
        aria-hidden
      />
      {images.length > 1 && (
        <div
          key={`second-${(currentIndex + 1) % images.length}`}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out animate-hero-zoom"
          style={{
            backgroundImage: `url(${secondImage})`,
            opacity: showFirst ? 0 : 1
          }}
          aria-hidden
        />
      )}
    </>
  );
}
