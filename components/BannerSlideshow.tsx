"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BannerSlideshowProps {
  slides: {
    src: string;
    alt: string;
  }[];
  intervalMs?: number;
}

export default function BannerSlideshow({ slides, intervalMs = 6000 }: BannerSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [slides, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className={`relative w-full h-full overflow-hidden ${
                isActive ? "animate-pan-tl-br" : ""
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-top-left"
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* Dark overlay with brand tint for high readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/95 via-[#0B1220]/85 to-[#0B1220]/75 z-20" />
      {/* Subtle bottom vignette to blend smoothly into the next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-black/30 z-20" />

      {/* Cyber Grid Pattern Accent */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#03A9F4_1px,transparent_1px)] [background-size:24px_24px] z-20" />

      {/* Indicator dots at the bottom right */}
      <div className="absolute bottom-6 right-8 z-30 flex items-center gap-2">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentIndex(dotIndex)}
            className={`transition-all duration-300 rounded-full pointer-events-auto h-2 ${
              dotIndex === currentIndex
                ? "w-7 bg-[#C40000]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
