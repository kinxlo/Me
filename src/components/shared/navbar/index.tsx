"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { useResponsiveLayout } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { MobileMenuBackdrop } from "./mobile-backdrop";
import { MobileMenuButton } from "./mobile-menu-button";
import { NavItems } from "./navbar-items";
import { NavLogo } from "./navbar-logo";

export const Navbar = () => {
  const { isMobile } = useResponsiveLayout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Mobile backdrop - appears only when menu is open */}
      {isMobile && mobileMenuOpen && <MobileMenuBackdrop onClick={closeMobileMenu} />}

      <section className="z-[999]">
        {/* Mobile menu button */}
        {isMobile && <MobileMenuButton isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />}

        {/* Theme toggle */}
        <div className="fixed top-4 left-1/2 z-[1000] -translate-x-1/2">
          <ModeToggle />
        </div>

        <NavLogo />

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
          <NavItems isMobile={isMobile} onItemClick={closeMobileMenu} />
        </nav>
      </section>
    </>
  );
};
