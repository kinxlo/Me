"use client";

import { useResponsiveLayout } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { DesktopNav } from "./desktop-nav";
import DockerNav from "./docker";
import { MobileNav } from "./mobile-nav";

// import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile } = useResponsiveLayout();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      <section className="p-4">
        {!isScrolled && <MobileNav />}
        <DesktopNav />
      </section>
      <DockerNav visible={isScrolled} />
    </>
  );
};

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setHasScrolled(true);
        setIsVisible(false);
      } else {
        setHasScrolled(false);
      }
    };

    // Hide after 5 seconds if not scrolled
    const timer = setTimeout(() => {
      if (!hasScrolled) setIsVisible(false);
    }, 20_000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [hasScrolled]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed top-[4rem] left-1/2 z-50 -translate-x-1/2 transform"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-6 w-6 text-gray-800" />
            </motion.div>
            <p className="mt-1 text-sm text-gray-800">Scroll to explore</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
