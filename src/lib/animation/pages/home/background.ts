import gsap from "@/lib/animation/gsap/init";
import { logoVariants } from "@/lib/tools/constants";

// Create master timeline
const HBGTL = gsap.timeline({
  paused: true,
  // defaults: { duration: 0.2 },
});

export const runHomeBGEntranceAnimation = (
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

    HBGTL.to(".animated-element", {
      opacity: 1,
      visibility: "visible",
    });

    // Animate each path
    for (const [index, pathElement] of pathsReference.current.entries()) {
      if (!pathElement) continue;

      const targetPath = nextVariant.paths[index];

      if (targetPath) {
        // MorphSVG animation
        HBGTL.to(pathElement, {
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

  setInterval(animateToNextVariant, 4000);
  return HBGTL;
  // return () => clearInterval(intervalId);
};

export const runHomeBGExitAnimation = (
  svgReference: SVGElement | null,
  pathsReference: React.RefObject<(SVGPathElement | null)[]>,
) => {
  if (!svgReference || !pathsReference.current) return;

  // Clear any ongoing animations
  HBGTL.clear();

  // First, kill any intervals running the entrance animation
  // (You'll need to store the interval ID from runHomeBGEntranceAnimation)
  // clearInterval(entranceIntervalId);

  // Create exit timeline
  const exitTL = gsap.timeline({ paused: true });

  // Animate all paths to collapse/fade out
  // exitTL.to(".animated-element", {
  //   opacity: 0,
  //   duration: 0.5,
  //   ease: "power2.in",
  // });

  // Animate each path individually with staggered effects
  for (const [index, pathElement] of pathsReference.current.entries()) {
    if (!pathElement) continue;

    exitTL.to(
      pathElement,
      {
        duration: 0.8,
        scale: 0.5,
        opacity: 0,
        transformOrigin: "center center",
        ease: "back.in(1.5)",
        stagger: {
          amount: 0.6,
          from: "center",
        },
      },
      index * 0.05,
    );

    // Optional: Morph to simple shape before disappearing
    exitTL.to(
      pathElement,
      {
        duration: 0.5,
        morphSVG: {
          shape: "M0,0 L100,0 L100,100 L0,100 Z", // Simple square
          type: "rotational",
        },
        fill: "transparent",
        stroke: "none",
      },
      "<0.2",
    );
  }

  // Final cleanup
  exitTL.to(svgReference, {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      // Hide the entire SVG
      svgReference.style.display = "none";
    },
  });

  return exitTL;
};
