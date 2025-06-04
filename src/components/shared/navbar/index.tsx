"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { useResponsiveLayout } from "@/hooks/use-media-query";
import { useSearchParameters } from "@/hooks/use-search-parameters";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import MainButton from "../button";

export const Navbar = () => {
  const view = useSearchParameters("view");
  const { isMobile, isScrolled, getResponsivePosition } = useResponsiveLayout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const floatingElements = [
    {
      type: "button",
      content: "Home",
      position: getResponsivePosition("top-20 left-20", "top-4 left-4"),
      rotation: getResponsivePosition("-rotate-6", "rotate-0"),
      variant: "link" as const,
      isActive: view === null || view === "home",
      mobileScale: "scale-75",
    },
    {
      type: "button",
      content: "Projects",
      position: getResponsivePosition("top-20 left-1/4", "top-14 left-4"),
      rotation: getResponsivePosition("-rotate-6", "rotate-0"),
      variant: "link" as const,
      isActive: view === "projects",
      mobileScale: "scale-75",
    },
    {
      type: "button",
      content: "About",
      position: getResponsivePosition("top-20 left-1/2", "top-24 left-4"),
      rotation: getResponsivePosition("rotate-3", "rotate-0"),
      variant: "link" as const,
      isActive: view === "about",
      mobileScale: "scale-75",
    },
  ];

  if (!isMounted) return null;

  return (
    <>
      {/* Mobile backdrop - appears only when menu is open */}
      {isMobile && mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <section className={`z-[999]`}>
        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="fixed top-4 right-4 z-[1000] rounded-full bg-black/10 p-2 transition-all hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
            aria-label="Toggle menu"
          >
            <div
              className={`h-0.5 w-6 bg-current transition-all ${mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <div
              className={`mt-1.5 h-0.5 w-6 bg-current transition-all ${mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </button>
        )}

        {/* Theme toggle */}
        <div className="fixed top-4 left-1/2 z-[1000] -translate-x-1/2">
          <ModeToggle />
        </div>

        {/* Navigation items */}
        <nav
          className={cn(
            "transition-all duration-300",
            isMobile
              ? mobileMenuOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
              : "pointer-events-auto opacity-100",
            "z-[999]",
          )}
          role="navigation"
        >
          {floatingElements.map((element, index) => (
            <div
              key={index}
              className={cn(
                "font-sea pointer-events-auto fixed transition-all duration-500 hover:!scale-110",
                element.position,
                element.rotation,
                isMobile ? element.mobileScale : "",
                isMobile ? "animate-float-mobile" : "animate-float",
                element.type === "icon" ? "opacity-70" : "opacity-90",
                isMobile && !mobileMenuOpen && "hidden",
                "z-[1000]",
              )}
              style={{
                transitionDelay: `${index * 75}ms`,
                transform: isScrolled ? "translateY(-10px)" : "",
              }}
            >
              {element.type === "button" && (
                <MainButton
                  href={`/?view=${element.content?.toLowerCase()}`}
                  variant={element.variant}
                  className={cn(
                    "relative text-2xl transition-all duration-300 hover:opacity-100 md:text-3xl",
                    "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white",
                    element.isActive && "!text-primary font-bold underline underline-offset-4",
                    isMobile && "text-4xl",
                  )}
                  onClick={() => isMobile && setMobileMenuOpen(false)}
                >
                  {element.content}
                </MainButton>
              )}
            </div>
          ))}
        </nav>
      </section>
    </>
  );
};
