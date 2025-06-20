import gsap from "gsap";

// Create master timeline (exported for external control)
export const ABGTL = gsap.timeline({
  paused: false,
  defaults: { ease: "power2.inOut" },
});

export const initAboutBGAnimation = (
  svgElement: SVGSVGElement,
  pathElement: SVGPathElement,
  isMobile: boolean,
  isTablet: boolean,
  onInitialized?: () => void,
) => {
  // Clear existing timeline
  ABGTL.clear();

  // Get the total length of the path
  const length = pathElement.getTotalLength();

  // Set opacity values based on device
  const strokeOpacity = isMobile ? 0.1 : isTablet ? 0.1 : 0.3;
  const fillOpacity = isMobile ? 0.05 : isTablet ? 0.05 : 0.3;

  // Set animation durations based on device
  const drawDuration = isMobile ? 8 : isTablet ? 9 : 10;
  const fillDuration = isMobile ? 1.5 : isTablet ? 1.75 : 0.5;

  // Apply responsive classes
  const classesToRemove = [
    "right-[-2rem]",
    "bottom-[-5rem]",
    "scale-90",
    "opacity-30",
    "right-[-3rem]",
    "bottom-[-15rem]",
    "scale-95",
    "opacity-45",
    "right-[-5rem]",
    "bottom-[-25rem]",
    "scale-100",
    "opacity-60",
  ];

  for (const cls of classesToRemove) svgElement.classList.remove(cls);

  if (isMobile) {
    svgElement.classList.add("right-[-2rem]", "bottom-[-5rem]", "scale-90");
  } else if (isTablet) {
    svgElement.classList.add("right-[-3rem]", "bottom-[-15rem]", "scale-95", "opacity-45");
  } else {
    svgElement.classList.add("right-[-5rem]", "bottom-[-25rem]", "scale-100", "opacity-60");
  }

  // Set initial states
  ABGTL.set(svgElement, { opacity: 0 }).set(pathElement, {
    strokeDasharray: length,
    strokeDashoffset: length,
    stroke: `rgba(0, 0, 0, ${strokeOpacity})`,
    fill: "none",
  });

  // Animation sequence
  ABGTL.to(svgElement, { opacity: 1, duration: 0.5 })
    .to(
      pathElement,
      {
        strokeDashoffset: 0,
        duration: drawDuration,
      },
      ">0.2",
    )
    .to(
      pathElement,
      {
        fill: `rgba(0, 0, 0, ${fillOpacity})`,
        duration: fillDuration,
        ease: "power1.out",
      },
      ">",
    );

  // Create hover timeline if needed
  let hoverTL: gsap.core.Timeline | null = null;
  const handleMouseEnter = () => hoverTL?.play();
  const handleMouseLeave = () => hoverTL?.reverse();

  if (!isMobile) {
    hoverTL = gsap.timeline({ paused: true });
    const hoverScale = isTablet ? 1.03 : 1.05;
    hoverTL.to(pathElement, { scale: hoverScale, duration: 0.3 });

    pathElement.addEventListener("mouseenter", handleMouseEnter);
    pathElement.addEventListener("mouseleave", handleMouseLeave);
  }

  // Call initialization callback
  onInitialized?.();

  // Cleanup function
  return () => {
    ABGTL.clear();
    hoverTL?.kill();

    if (!isMobile) {
      pathElement.removeEventListener("mouseenter", handleMouseEnter);
      pathElement.removeEventListener("mouseleave", handleMouseLeave);
    }
  };
};
