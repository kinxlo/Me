"use client";

import { useEffect, useState } from "react";

export const useResponsiveLayout = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return { isMobile };
};
