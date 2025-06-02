// hooks/use-responsive-layout.ts
import { useEffect, useState } from "react";

export const useResponsiveLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check mobile view and scroll position
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile-optimized positions
  const getResponsivePosition = (desktopPos: string | number, mobilePos: string | number) => {
    return isMobile ? mobilePos : desktopPos;
  };

  return {
    isMobile,
    isScrolled,
    getResponsivePosition,
  };
};
