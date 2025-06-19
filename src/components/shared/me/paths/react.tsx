"use client";

import { logoVariants } from "@/lib/tools/constants";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const MySvgPic = () => {
  const svgReference = useRef<SVGSVGElement>(null);
  const pathsReference = useRef<(SVGPathElement | null)[]>([]);

  useGSAP(
    () => {
      if (!svgReference.current) return;

      let currentIndex = 0;

      const animateToNextVariant = () => {
        const nextIndex = (currentIndex + 1) % logoVariants.length;
        const nextVariant = logoVariants[nextIndex];

        // Ensure we have enough path elements
        while (pathsReference.current.length < nextVariant.paths.length) {
          const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
          svgReference.current?.append(newPath);
          pathsReference.current.push(newPath);
        }

        // Animate each path
        for (const [index, pathElement] of pathsReference.current.entries()) {
          if (!pathElement) continue;

          const targetPath = nextVariant.paths[index];

          if (targetPath) {
            // Show and animate existing paths
            gsap.set(pathElement, {
              display: "block",
              opacity: 1,
            });

            // MorphSVG animation
            gsap.to(pathElement, {
              duration: 1.5,
              morphSVG: {
                shape: targetPath.d,
                type: "rotational",
              },
              attr: {
                fill: targetPath.fill || "transparent",
                stroke: targetPath.stroke || "none",
                "fill-opacity": targetPath.fillOpacity ?? 1,
                "stroke-width": targetPath.strokeWidth ?? 0,
              },
              ease: "power2.inOut",
            });
          } else {
            // Hide extra paths
            gsap.to(pathElement, {
              duration: 1.5,
              opacity: 0,
              onComplete: () => {
                pathElement.style.display = "none";
              },
            });
          }
        }

        currentIndex = nextIndex;
      };

      const intervalId = setInterval(animateToNextVariant, 7000);
      return () => clearInterval(intervalId);
    },
    { scope: svgReference },
  );

  return (
    <section className="relative flex h-[100dvh] w-full items-end justify-end">
      <svg
        ref={svgReference}
        className={cn("absolute top-[0] left-[0] lg:bottom-[-10rem] lg:left-[0]", "h-full w-full")}
        viewBox="0 0 450 450"
        preserveAspectRatio="xMinYMin meet"
      >
        {/* Initial paths - will be managed by GSAP */}
        {logoVariants[0].paths.map((path, index) => (
          <path
            key={`initial-path-${index}`}
            ref={(element) => {
              pathsReference.current[index] = element;
            }}
            d={path.d}
            fill={path.fill}
            stroke={path.stroke}
            fillOpacity={path.fillOpacity}
            strokeWidth={path.strokeWidth}
            className={cn(
              `origin-top-right translate-x-[3rem] translate-y-[-1rem] scale-110`,
              `scale-80 md:translate-x-[3rem] md:translate-y-[-3rem]`,
              `scale-100 lg:translate-x-[3rem] lg:translate-y-[-1rem]`,
              `scale-90 xl:translate-x-[4rem] xl:translate-y-[-2rem]`,
            )}
          />
        ))}
      </svg>
    </section>
  );
};
