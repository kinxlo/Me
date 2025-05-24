"use client";

import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { useAppContext } from "@/hooks/use-app-context";
import { useIntersection } from "@/hooks/use-observer";
import { useWindowSize } from "@/hooks/use-window-resize";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const Me = () => {
  const { isOnAboutMe } = useAppContext();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageReference = useRef<HTMLDivElement>(null);
  const aboutSectionReference = useRef<HTMLElement | null>(null);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const animationFrameRef = useRef<number>(null);

  const { ref: intersectionReference } = useIntersection({
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });

  const setReferences = (node: HTMLDivElement | null) => {
    intersectionReference(node);
    if (node) imageReference.current = node;
  };

  useEffect(() => {
    aboutSectionReference.current = document.querySelector("#about-section");

    const handleScroll = () => {
      if (!imageReference.current || !aboutSectionReference.current) return;

      // Use requestAnimationFrame for smoother performance
      animationFrameRef.current = requestAnimationFrame(() => {
        const imageRect = imageReference.current?.getBoundingClientRect();
        const aboutRect = aboutSectionReference.current?.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (aboutRect) {
          // Calculate distance from about section to viewport center
          const aboutSectionCenter = aboutRect.top + aboutRect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = Math.abs(aboutSectionCenter - viewportCenter);

          // Normalize distance to a 0-1 range
          const normalizedDistance = Math.min(1, distanceFromCenter / (viewportHeight * 0.75));

          // Calculate zoom level with easing function for smoother transitions
          const baseZoom = windowWidth < 768 ? 0.6 : 0.9; // Smaller on mobile
          const targetZoom = baseZoom - 0.3 * (1 - normalizedDistance);
          // Apply smooth transition
          setZoomLevel((prev) => {
            const diff = targetZoom - prev;
            return prev + diff * 0.1; // Adjust this value for faster/smoother transition
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [windowWidth, windowHeight]); // Re-run effect on window resize

  return (
    <BlurImage
      ref={setReferences}
      src={"/images/me.svg"}
      alt={"Illustration of me"}
      width={507}
      height={469.32}
      onLoadingComplete={() => setIsLoaded(true)}
      className={cn(
        `fixed right-0 bottom-0 isolate object-cover object-top transition-all duration-500 ease-out`,
        `origin-bottom-right`,
        // Responsive opacity changes
        isOnAboutMe ? "opacity-20 lg:opacity-30" : "opacity-40 md:opacity-70 lg:opacity-100",
        // Loading state
        isLoaded ? "scale-100" : "scale-90 opacity-0",
        // Dark mode adjustments
        "dark:opacity-80 dark:invert",
      )}
      style={{
        transform: `scale(${zoomLevel})`,
        // Responsive sizing
        maxWidth: windowWidth < 768 ? "70%" : "none",
        maxHeight: windowWidth < 768 ? "60%" : "none",
      }}
      priority // If this is an important image
    />
  );
};
