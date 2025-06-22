import gsap from "@/lib/animation/gsap/init";
import { logoVariants } from "@/lib/tools/constants";

// Create master timeline
export const HBGTL = gsap.timeline({
  paused: true,
});

export const initHomeBGAnimation = (
  svgReference: SVGElement | null,
  pathsReference: React.RefObject<(SVGPathElement | null)[]>,
) => {
  if (!svgReference) return;

  let currentIndex = 0;

  const animateToNextVariant = () => {
    const nextIndex = (currentIndex + 1) % logoVariants.length;
    const nextVariant = logoVariants[nextIndex];

    // Ensure we have enough path elements
    while (pathsReference.current.length < nextVariant.paths.length) {
      const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      svgReference?.append(newPath);
      pathsReference.current.push(newPath);
    }

    // Animate each path
    for (const [index, pathElement] of pathsReference.current.entries()) {
      if (!pathElement) continue;

      const targetPath = nextVariant.paths[index];

      if (targetPath) {
        // MorphSVG animation
        HBGTL.to(pathElement, {
          duration: 1.5,
          opacity: 1,
          visibility: "visible",
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
        });
      } else {
        // Hide extra paths
        HBGTL.to(pathElement, {
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
  const intervalId = setInterval(animateToNextVariant, 4000);
  return () => clearInterval(intervalId);
};
