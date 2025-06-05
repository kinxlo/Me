"use client";

import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { useIntersection } from "@/hooks/use-observer";
import { useWindowSize } from "@/hooks/use-window-resize";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

import { Skills } from "./skills";

export const Me = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  // const [setIsLoaded] = useState(false);
  const [, setIsAboutVisible] = useState(false);
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

          if (window.scrollY < 10) {
            setZoomLevel(1);
            return;
          }

          const aboutSectionCenter = mapRect.top + mapRect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = Math.abs(aboutSectionCenter - viewportCenter);
          const normalizedDistance = Math.min(1, distanceFromCenter / (viewportHeight * 0.75));
          const baseZoom = windowWidth < 768 ? 0.3 : 0.7;
          const targetZoom = baseZoom - 0.3 * (1 - normalizedDistance);

          setZoomLevel((previous) => {
            const newZoom = previous + (targetZoom - previous) * 0.1;
            return Math.max(newZoom, baseZoom - 0.3);
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameReference.current) {
        cancelAnimationFrame(animationFrameReference.current);
      }
    };
  }, [windowWidth, windowHeight]);

  return (
    <section
      className={cn(
        `fixed right-0 bottom-0 isolate max-h-[70%] max-w-[60%] object-cover object-top mix-blend-multiply transition-all duration-500 ease-out`,
        `origin-bottom-right`,
      )}
      style={{
        transform: `scale(${zoomLevel})`,
      }}
    >
      <BlurImage
        ref={setReferences}
        src={"/images/me.svg"}
        alt={"Illustration of me"}
        width={507}
        height={469.32}
        className={`isAboutVisible ? "opacity-20 lg:opacity-30" : "opacity-10 lg:opacity-50", isLoaded ? "scale-50 lg:scale-100" : "scale-90 opacity-0", "dark:opacity-5 dark:invert", opacity-20 md:opacity-40`}
        // onLoadingComplete={() => setIsLoaded(true)}
        priority
      />
      <Skills className={`font-sea -top-[10%] -left-[10%] z-10 hidden -rotate-10 lg:absolute lg:block`} />
    </section>
  );
};
