"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { useResponsiveLayout } from "@/hooks/use-media-query";
import { useSearchParameters } from "@/hooks/use-search-parameters";
import { cn } from "@/lib/utils";
import { useState } from "react";

import MainButton from "../button";

export const Navbar = () => {
  const view = useSearchParameters("view");
  const { isMobile, isScrolled, getResponsivePosition } = useResponsiveLayout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <>
      {/* Mobile menu button (only shows on mobile) */}
      {isMobile && (
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="pointer-events-auto fixed top-4 right-4 z-50 rounded-full bg-black/10 p-2 backdrop-blur-sm md:hidden dark:bg-white/10"
          aria-label="Toggle menu"
        >
          <div className={`h-0.5 w-6 bg-current transition-all ${mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
          <div
            className={`mt-1.5 h-0.5 w-6 bg-current transition-all ${mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      )}

      <div className={`absolute left-1/2 z-[999]`}>
        <ModeToggle />
      </div>
      <nav
        className={cn(
          "pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300",
          isMobile && !mobileMenuOpen ? "opacity-0" : "opacity-100",
        )}
        role="navigation"
      >
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={cn(
              "font-sea pointer-events-auto fixed cursor-default transition-all duration-500 hover:!scale-110 hover:!opacity-100",
              element.position,
              element.rotation,
              isMobile ? element.mobileScale : "",
              isMobile ? "animate-float-mobile" : "animate-float",
              element.type === "icon" ? "opacity-70" : "opacity-90",
              isMobile && !mobileMenuOpen && "hidden",
            )}
            style={{
              transitionDelay: `${index * 100}ms`,
              transform: isScrolled ? "translateY(-10px)" : "",
            }}
          >
            {element.type === "button" && (
              <MainButton
                href={`/?view=${element.content?.toLowerCase()}`}
                variant={element.variant}
                className={cn(
                  "relative text-2xl transition-all duration-300 md:text-3xl",
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
    </>
  );
};
