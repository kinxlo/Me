// components/Loader.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Loader() {
  const loaderReference = useRef<HTMLDivElement>(null);
  const progressReference = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Ensure GSAP targets exist
    if (!progressReference.current || !loaderReference.current) return;

    const tl = gsap.timeline();

    // Initial animation - animate progress bar from 0 to 100%
    tl.fromTo(
      progressReference.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 2,
        ease: "power3.inOut",
      },
    );

    const handleLoad = () => {
      // Complete the timeline
      tl.to(progressReference.current, {
        scaleX: 1, // Ensure it's fully loaded
        duration: 0.1,
      }).to(loaderReference.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          if (loaderReference.current) {
            loaderReference.current.style.display = "none";
          }
        },
      });
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div
      ref={loaderReference}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="relative h-1 w-64 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          ref={progressReference}
          className="absolute top-0 left-0 h-full w-full origin-left scale-x-0 bg-black dark:bg-white"
        />
      </div>
      <span className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Loading...</span>
    </div>
  );
}
