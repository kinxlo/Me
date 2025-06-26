"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

import { MobileMenuBackdrop } from "./mobile-backdrop";
import { MobileMenuButton } from "./mobile-menu-button";
import { NavItems } from "./navbar-items";
import { NavLogo } from "./navbar-logo";

export const MobileNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isOpen = mobileMenuOpen;
  const onClose = () => setMobileMenuOpen(false);
  const toggleMenu = () => setMobileMenuOpen((previous) => !previous);

  return (
    <section className={`lg:hidden`}>
      {mobileMenuOpen && <MobileMenuBackdrop onClick={onClose} />}
      <div>
        <NavLogo />
        <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
      </div>
      <nav
        className={cn(
          "font-head fixed top-1/4 left-1/4 min-h-fit transition-all duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          "z-[999]",
        )}
        role="navigation"
      >
        <NavItems isMobile={true} onItemClick={onClose} />
      </nav>
    </section>
  );
};
