"use client";

import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { useIntersection } from "@/hooks/use-observer";
import { useWindowSize } from "@/hooks/use-window-resize";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const Me = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const imageReference = useRef<HTMLDivElement>(null);
  const aboutSectionReference = useRef<HTMLElement | null>(null);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const animationFrameReference = useRef<number>(null);

  const { ref: intersectionReference } = useIntersection({
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });

  const setReferences = (node: HTMLDivElement | null) => {
    intersectionReference(node);
    if (node) imageReference.current = node;
  };

  useEffect(() => {
    aboutSectionReference.current = document.querySelector("#fade-section");

    const handleScroll = () => {
      if (!imageReference.current || !aboutSectionReference.current) return;

      animationFrameReference.current = requestAnimationFrame(() => {
        const mapRect = aboutSectionReference.current?.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (mapRect) {
          const isVisible = mapRect.top < viewportHeight && mapRect.bottom > 0;
          setIsAboutVisible(isVisible);

          // When at the very top of the page, force reset to original size
          if (window.scrollY < 10) {
            // Small threshold to catch top position
            setZoomLevel(1);
            return;
          }

          // Your original zoom calculation logic
          const aboutSectionCenter = mapRect.top + mapRect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = Math.abs(aboutSectionCenter - viewportCenter);
          const normalizedDistance = Math.min(1, distanceFromCenter / (viewportHeight * 0.75));
          const baseZoom = windowWidth < 768 ? 0.6 : 0.7;
          const targetZoom = baseZoom - 0.3 * (1 - normalizedDistance);

          // Apply transition with a minimum limit to prevent getting too small
          setZoomLevel((previous) => {
            const newZoom = previous + (targetZoom - previous) * 0.1;
            return Math.max(newZoom, baseZoom - 0.3); // Ensure it doesn't get smaller than intended
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameReference.current) {
        cancelAnimationFrame(animationFrameReference.current);
      }
    };
  }, [windowWidth, windowHeight]);

  return (
    <BlurImage
      ref={setReferences}
      src={"/images/me.svg"}
      alt={"Illustration of me"}
      width={507}
      height={469.32}
      onLoadingComplete={() => setIsLoaded(true)}
      className={cn(
        `fixed right-0 bottom-0 isolate max-h-[70%] max-w-[60%] object-cover object-top mix-blend-multiply transition-all duration-500 ease-out`,
        `origin-bottom-right`,
        isAboutVisible ? "opacity-20 lg:opacity-30" : "opacity-10 md:opacity-40 lg:opacity-100",
        isLoaded ? "scale-100" : "scale-90 opacity-0", // Changed to scale-100 when loaded
        "dark:opacity-5 dark:invert",
      )}
      style={{
        transform: `scale(${zoomLevel})`,
      }}
      priority
    />
  );
};
