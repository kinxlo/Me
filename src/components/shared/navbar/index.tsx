"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { useResponsiveLayout } from "@/hooks/use-media-query";
import { useSearchParameters } from "@/hooks/use-search-parameters";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import MainButton from "../button";

export const Navbar = () => {
  const view = useSearchParameters("view");
  const { isMobile } = useResponsiveLayout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const floatingElements = [
    {
      type: "button",
      content: "Home",
      variant: "link" as const,
      isActive: view === null || view === "home",
      mobileScale: "scale-75",
    },
    {
      type: "button",
      content: "Projects",
      variant: "link" as const,
      isActive: view === "projects",
      mobileScale: "scale-75",
    },
    {
      type: "button",
      content: "About",
      variant: "link" as const,
      isActive: view === "about",
      mobileScale: "scale-75",
    },
    {
      type: "button",
      content: "Resume",
      variant: "link" as const,
      isActive: view === "resume",
      mobileScale: "scale-75",
      link: "https://drive.google.com/file/d/1-emFvqL9-gs6v7DitqyR8aLxfZmb52Fz/view?usp=sharing",
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
            "font-head fixed top-0 right-[5%] flex flex-col transition-all duration-300",
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
            <MainButton
              key={index}
              href={element.link ?? `/?view=${element.content?.toLowerCase()}`}
              variant={element.variant}
              className={cn(
                "relative text-2xl transition-all duration-300 hover:opacity-100 md:text-xl",
                "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white",
                element.isActive && "!text-primary font-bold underline underline-offset-4",
                isMobile && "text-4xl",
              )}
              onClick={() => isMobile && setMobileMenuOpen(false)}
            >
              {element.content}
            </MainButton>
          ))}
        </nav>
      </section>
    </>
  );
};
