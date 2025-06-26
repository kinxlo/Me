"use client";

import gsap from "@/lib/animation/gsap/init";
import { useEffect, useState } from "react";

import { MobileMenuButton } from "./mobile-menu-button";
import { NavItems } from "./navbar-items";
import { NavLogo } from "./navbar-logo";

const handleMenuEnter = () => {
  // Reset panels to initial state
  gsap.set(".mobile-nav-panel", { width: 0 });
  gsap.set(".mobile-nav-content", { opacity: 0 });
  gsap.set(".mobile-nav-item", { opacity: 0, y: 20 });

  // Animate in panels
  gsap.to(".mobile-nav-panel", {
    width: "100%",
    duration: 0.4,
    stagger: 0.05,
    ease: "power3.out",
    onComplete: () => {
      // Then animate in content
      gsap.to(".mobile-nav-content", {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          // Finally animate in items
          gsap.to(".mobile-nav-item", {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
          });
        },
      });
    },
  });
};

export const MobileNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (mobileMenuOpen) {
      handleMenuLeave();
    } else {
      setMobileMenuOpen(true);
    }
  };

  const handleMenuLeave = () => {
    // Animate out items
    gsap.to(".mobile-nav-item", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
      onComplete: () => {
        // Then animate out content
        gsap.to(".mobile-nav-content", {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            // Finally animate out panels
            gsap.to(".mobile-nav-panel", {
              width: 0,
              duration: 0.4,
              stagger: 0.05,
              ease: "power3.in",
              onComplete: () => {
                setMobileMenuOpen(false);
              },
            });
          },
        });
      },
    });
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      handleMenuEnter();
    }
  }, [mobileMenuOpen]);

  const onItemClick = () => {
    handleMenuLeave();
  };

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between">
        <NavLogo />
        <MobileMenuButton isOpen={mobileMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Mobile Nav Panels - Four animated segments */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-nav-panel fixed top-0 left-0 z-[998] h-[25%] w-0 bg-gray-900" />
          <div className="mobile-nav-panel fixed top-[25%] right-0 z-[998] h-[25%] w-0 bg-gray-900" />
          <div className="mobile-nav-panel fixed top-[50%] left-0 z-[998] h-[25%] w-0 bg-gray-900" />
          <div className="mobile-nav-panel fixed top-[75%] right-0 z-[998] h-[25%] w-0 bg-gray-900" />

          {/* Mobile Nav Content */}
          <div className="mobile-nav-content fixed inset-0 z-[999] flex items-center justify-center opacity-0">
            <div className="w-full max-w-md px-4">
              <NavItems
                onItemClick={onItemClick}
                className="space-y-6"
                itemClassName="mobile-nav-item opacity-0 translate-y-5 text-white text-2xl font-medium"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
