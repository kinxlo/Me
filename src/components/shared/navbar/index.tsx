"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

import { MobileMenuBackdrop } from "./mobile-backdrop";
import { MobileMenuButton } from "./mobile-menu-button";
import { NavItems } from "./navbar-items";
import { NavLogo } from "./navbar-logo";

const MobileNav = () => {
  const containerReference = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isOpen = mobileMenuOpen;
  const onClose = () => setMobileMenuOpen(false);
  const toggleMenu = () => setMobileMenuOpen((previous) => !previous);

  return (
    <section ref={containerReference} className={`md:hidden`}>
      {mobileMenuOpen && <MobileMenuBackdrop onClick={onClose} />}
      <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
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

const DesktopNav = () => {
  return (
    <section className={`mt-4 hidden items-start justify-between lg:flex`}>
      <div className="font-head" role="navigation">
        <NavItems isMobile={false} onItemClick={() => {}} />
      </div>
      <div className={``}>
        <NavLogo />
      </div>
    </section>
  );
};

export const Navbar = () => {
  return (
    <section className="z-[999]">
      <MobileNav />
      <DesktopNav />
    </section>
  );
};
