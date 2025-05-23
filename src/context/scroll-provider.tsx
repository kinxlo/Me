"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Lenis as ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export function SmoothAnchorLinks() {
  const lenis = useLenis();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.hash && lenis) {
        event.preventDefault();
        const element: any = document.querySelector(target.hash);
        if (element) {
          lenis.scrollTo(element, {
            duration: 1.5,
            // offset: -20, // optional offset
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}
