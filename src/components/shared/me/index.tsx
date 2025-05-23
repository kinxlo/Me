"use client";

import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { useAppContext } from "@/hooks/use-app-context";
import { useIntersection } from "@/hooks/use-observer";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const Me = () => {
  const { isOnAboutMe } = useAppContext();
  const [zoomLevel, setZoomLevel] = useState(0.7);
  const imageReference = useRef<HTMLDivElement>(null);
  const aboutSectionReference = useRef<HTMLElement | null>(null);

  // Track both intersection and scroll position
  const { ref: intersectionReference } = useIntersection({
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });

  // Combine refs
  const setReferences = (node: HTMLDivElement | null) => {
    intersectionReference(node);
    if (node) imageReference.current = node;
  };

  useEffect(() => {
    // Get the about section element
    aboutSectionReference.current = document.querySelector("#about-section");

    const handleScroll = () => {
      if (!imageReference.current || !aboutSectionReference.current) return;

      const imageRect = imageReference.current.getBoundingClientRect();
      const aboutRect = aboutSectionReference.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate proximity to about section (0 when far away, 1 when overlapping)
      const distanceFromAbout = Math.max(0, aboutRect.top - viewportHeight * 0.5);
      const proximity = 1 - Math.min(1, distanceFromAbout / (viewportHeight * 0.5));

      // Only apply zoom effect when in proximity to about section
      if (proximity > 0) {
        // Calculate how much of the image is visible (0 to 1)
        const visibleRatio = Math.min(1, Math.max(0, (viewportHeight - imageRect.top) / viewportHeight));

        // Apply smooth zoom based on visibility and proximity
        setZoomLevel(0.7 + 0.3 * visibleRatio * proximity);
      } else {
        // Reset to default zoom when far from about section
        setZoomLevel(0.5);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BlurImage
      ref={setReferences}
      src={"/images/me.svg"}
      alt={"Me"}
      width={507}
      height={469.32}
      className={cn(
        `fixed right-0 bottom-0 isolate object-cover object-top opacity-20 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] dark:invert`,
        isOnAboutMe && `lg:opacity-100`,
        `origin-bottom-right`,
      )}
      style={{
        transform: `scale(${zoomLevel})`,
      }}
    />
  );
};
