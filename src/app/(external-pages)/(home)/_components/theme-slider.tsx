"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SplitViewSliderProperties {
  lightImage: string;
  darkImage: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const SplitViewSlider: React.FC<SplitViewSliderProperties> = ({
  lightImage,
  darkImage,
  alt = "Comparison view",
  width = 375,
  height = 448, // h-112 in Tailwind is 28rem → 448px
}) => {
  const [offset, setOffset] = useState(width / 2);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;

    const container = document.querySelector(".slider-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const newOffset = Math.max(0, Math.min(x, width));

    setOffset(newOffset);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, isDragging]);

  return (
    <div className="@container">
      <div className="my-4 -mb-16 sm:my-0 @min-[--theme(--breakpoint-sm)]:-mx-8">
        <div className="slider-container relative isolate flex h-full w-full items-center justify-center">
          {/* Slider line */}
          <div
            className="absolute inset-x-1/2 inset-y-0 z-10 h-screen w-1 -translate-x-1/2 bg-sky-400"
            style={{ transform: `translateX(${offset - width / 2}px)` }}
          />

          {/* Slider handle */}
          <div
            title="Drag to resize"
            className="absolute inset-1/2 z-10 flex size-10 shrink-0 -translate-1/2 cursor-ew-resize items-center justify-center rounded-full bg-sky-500"
            style={{ transform: `translateX(${offset - width / 2}px)` }}
            onMouseDown={handleMouseDown}
            draggable={false}
          >
            <svg className="relative z-10" width="15" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m1 4 3-3M1 4l3 3M1 4h13m0 0-3-3m3 3-3 3"
                className="stroke-white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={`absolute inset-1 rounded-full bg-sky-500 ${isDragging ? "" : "animate-ping"}`} />
          </div>

          {/* Image container */}
          <div
            className="relative grid h-112 w-[375px] grid-cols-1 grid-rows-1 overflow-hidden rounded-t-4xl bg-gray-950/10 outline outline-gray-950/10 dark:outline-white/10"
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            {/* Light image (clipped) */}
            <div className="col-start-1 row-start-1">
              <Image
                src={lightImage}
                alt={alt}
                fill
                className="absolute inset-0 object-cover"
                style={{
                  clipPath: `rect(0px, calc(${offset}px), ${height}px, 0px)`,
                }}
              />
            </div>

            {/* Dark image (full) */}
            <div className="col-start-1 row-start-1">
              <Image src={darkImage} alt={alt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
