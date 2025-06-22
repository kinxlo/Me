"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

export function useRouteAnimation() {
  const router = useRouter();
  const isAnimating = useRef(false);

  const handleAnimatedNavigation = useCallback(
    (timeline: gsap.core.Timeline, targetUrl: string) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      timeline.reverse().then(() => {
        router.push(targetUrl);
        isAnimating.current = false;
      });
    },
    [router],
  );

  const setupLinkInterceptors = useCallback((handler: (event: MouseEvent) => void) => {
    const links = document.querySelectorAll<HTMLAnchorElement>("a[href^='/']");

    for (const link of links) {
      link.addEventListener("click", handler);
    }

    return () => {
      for (const link of links) {
        link.removeEventListener("click", handler);
      }
    };
  }, []);

  return {
    handleAnimatedNavigation,
    setupLinkInterceptors,
  };
}
