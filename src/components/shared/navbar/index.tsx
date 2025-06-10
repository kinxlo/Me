"use client";

import { useResponsiveLayout } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { MobileMenuBackdrop } from "./mobile-backdrop";
import { MobileMenuButton } from "./mobile-menu-button";
import { NavItems } from "./navbar-items";

const MobileNav = ({
  onClose,
  isOpen,
  toggleMenu,
}: {
  onClose: () => void;
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <>
      {isOpen && <MobileMenuBackdrop onClick={onClose} />}
      <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
      <nav
        className={cn(
          "font-head fixed top-0 right-[5%] flex min-h-[100dvh] min-w-[100dvw] flex-col items-center justify-center transition-all duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          "z-[999]",
        )}
        role="navigation"
      >
        <NavItems isMobile={true} onItemClick={onClose} />
      </nav>
    </>
  );
};

const DesktopNav = () => {
  return (
    <section
      className="font-head border-primary fixed top-0 right-[5%] z-[999] flex flex-col border-4"
      role="navigation"
    >
      <NavItems isMobile={false} onItemClick={() => {}} />
    </section>
  );
};

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
    <section className="z-[999]">
      {isMobile ? (
        <MobileNav onClose={closeMobileMenu} isOpen={mobileMenuOpen} toggleMenu={toggleMobileMenu} />
      ) : (
        <DesktopNav />
      )}
    </section>
  );
};
