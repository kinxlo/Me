"use client";

import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export const useResponsiveLayout = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>("mobile");
  const [windowSize, setWindowSize] = useState({
    width: typeof window === "undefined" ? 0 : window.innerWidth,
    height: typeof window === "undefined" ? 0 : window.innerHeight,
  });

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;
      setWindowSize({
        width,
        height: window.innerHeight,
      });

      // Updated breakpoints (Tailwind CSS standard)
      if (width < 640) {
        setDeviceType("mobile");
      } else if (width >= 640 && width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Initial call to set values
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: deviceType === "mobile",
    isTablet: deviceType === "tablet",
    isDesktop: deviceType === "desktop",
    deviceType,
    windowSize,
  };
};
