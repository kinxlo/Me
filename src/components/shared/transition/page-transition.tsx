// components/PageTransition.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerReference = useRef<HTMLDivElement>(null);
  const previousPathname = useRef(pathname);

  useGSAP(
    () => {
      // Skip animation on initial render
      if (previousPathname.current === pathname) {
        gsap.set(containerReference.current, { opacity: 1 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.inOut", duration: 0.4 },
      });

      // Exit animation
      timeline.to(containerReference.current, {
        opacity: 0,
        x: 100,
        onComplete: () => {
          previousPathname.current = pathname;
        },
      });

      // Enter animation
      timeline.fromTo(
        containerReference.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 },
        "<+=0.1", // slight overlap with exit animation
      );
    },
    { dependencies: [pathname], scope: containerReference },
  );

  return (
    <div ref={containerReference} className="page-transition-wrapper">
      {children}
    </div>
  );
}
