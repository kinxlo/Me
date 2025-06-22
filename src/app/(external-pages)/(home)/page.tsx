"use client";

import { useRouteAnimation } from "@/hooks/use-animation";
import { HBGTL } from "@/lib/animation/pages/home/background";
import { HTL, runHomeAnimation } from "@/lib/animation/pages/home/home";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

import { Hero } from "./_views/hero";

export default function Page() {
  const { handleAnimatedNavigation, setupLinkInterceptors } = useRouteAnimation();

  // Initialize animation
  useGSAP(() => {
    runHomeAnimation();
    HTL.play();
    HTL.eventCallback("onComplete", () => {
      HBGTL.play();
    });
  }, []);

  // Setup link interceptors
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      handleAnimatedNavigation(HTL, target.href);
    };

    return setupLinkInterceptors(handler);
  }, [handleAnimatedNavigation, setupLinkInterceptors]);

  return (
    <section className={`space-y-[1rem] lg:space-y-[5rem]`}>
      <Hero />
    </section>
  );
}
