"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { useGlobalContext } from "@/context/global-context";
import gsap from "@/lib/animation/gsap/init";
import { runHomeEntranceAnimation, runHomeExitAnimation } from "@/lib/animation/pages/home/home";
import RotatingText from "@/lib/animation/RotatingText/RotatingText";
import { socials } from "@/lib/tools/constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const handleCreditHover = () => {
  // Animate each segment from left to right
  gsap.to(".cc-credit", {
    width: "100%",
    duration: 0.5,
    stagger: 0.1,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(".cc-credit-resource", {
        opacity: 1,
        visibility: "visible",
        display: "flex",
        duration: 1,
      });

      // Animate in each credit item with staggered delay
      gsap.to(".credit-item", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
      });
    },
  });
};

const handleCreditLeave = () => {
  // First animate out the credit items
  gsap.to(".credit-item", {
    opacity: 0,
    y: 20,
    duration: 0.4,
    stagger: 0.05,
    ease: "power2.in",
    onComplete: () => {
      // Then animate out the credit resource
      gsap.to(".cc-credit-resource", {
        opacity: 0,
        visibility: "hidden",
        duration: 0.3,
        onComplete: () => {
          // Finally animate out the credit panels
          gsap.to(".cc-credit", {
            width: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power3.in",
          });
        },
      });
    },
  });
};

export const Hero = () => {
  const homePage = useRef(null);
  const { setTimeline } = useGlobalContext();

  useGSAP(
    () => {
      runHomeEntranceAnimation().play();
      setTimeline(runHomeExitAnimation());
    },
    { scope: homePage },
  );

  return (
    <section ref={homePage}>
      {/* Credit Overlay - Hidden by default */}
      {/* Four animated segments */}
      <div className="cc-credit fixed top-0 left-0 z-[999] h-[25%] w-0 bg-gray-900" />
      <div className="cc-credit fixed top-[25%] left-0 z-[999] h-[25%] w-0 bg-gray-900" />
      <div className="cc-credit fixed top-[50%] left-0 z-[999] h-[25%] w-0 bg-gray-900" />
      <div className="cc-credit fixed top-[75%] left-0 z-[999] h-[25%] w-0 bg-gray-900" />

      {/* Credit Content - appears after animation */}
      <div className="cc-credit-resource fixed top-0 left-0 z-[9999] hidden h-screen w-screen overflow-y-auto p-4 text-center text-white opacity-0 md:top-1/2 md:left-1/2 md:h-auto md:w-full md:-translate-x-1/2 md:-translate-y-1/2 md:p-8">
        <div className="mx-auto max-w-4xl rounded-xl bg-gray-900/95 p-6 backdrop-blur-lg md:bg-gray-800/50">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:mb-8 md:text-5xl">Credits</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {/* Credit Item 1 */}
            <div className="credit-item translate-y-10 rounded-lg bg-gray-800 p-4 opacity-0 backdrop-blur-lg md:rounded-xl md:p-6">
              <h3 className="text-primary-400 mb-2 text-xl font-semibold md:mb-3 md:text-2xl">GSAP</h3>
              <p className="text-sm text-gray-300 md:text-base">
                For the amazing animation library that powers these transitions
              </p>
            </div>

            {/* Credit Item 2 */}
            <div className="credit-item translate-y-10 rounded-lg bg-gray-800 p-4 opacity-0 backdrop-blur-lg md:rounded-xl md:p-6">
              <h3 className="text-primary-400 mb-2 text-xl font-semibold md:mb-3 md:text-2xl">Olivier Larose</h3>
              <p className="text-sm text-gray-300 md:text-base">For inspiring UI/UX designs and animations</p>
              <a
                href="https://youtube.com/@olivierlarose1"
                className="mt-1 inline-block text-sm text-blue-400 hover:underline md:mt-2 md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                @olivierlarose1
              </a>
            </div>

            {/* Credit Item 3 */}
            <div className="credit-item translate-y-10 rounded-lg bg-gray-800 p-4 opacity-0 backdrop-blur-lg md:rounded-xl md:p-6">
              <h3 className="text-primary-400 mb-2 text-xl font-semibold md:mb-3 md:text-2xl">PNG Egg</h3>
              <p className="text-sm text-gray-300 md:text-base">For high-quality transparent PNG resources</p>
            </div>

            {/* Credit Item 4 */}
            <div className="credit-item translate-y-10 rounded-lg bg-gray-800 p-4 opacity-0 backdrop-blur-lg md:rounded-xl md:p-6">
              <h3 className="text-primary-400 mb-2 text-xl font-semibold md:mb-3 md:text-2xl">Lenis</h3>
              <p className="text-sm text-gray-300 md:text-base">For smooth scroll functionality</p>
            </div>
          </div>

          <MainButton
            onClick={handleCreditLeave}
            className="bg-primary-600 hover:bg-primary-700 mt-6 w-full px-4 py-2 text-base transition-all md:mt-10 md:w-auto md:px-8 md:py-3 md:text-lg"
          >
            Close Credits
          </MainButton>
        </div>
      </div>

      <section className="animated-element">
        <section className="mx-auto max-w-(--breakpoint-lg)">
          <Wrapper>
            <h1 className="text-primary flex w-full items-end overflow-hidden text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:mb-[-0.5rem]">
              <span className="title-word">Ifijeh</span>
            </h1>
            <h1 className="text-primary flex w-full items-end overflow-hidden text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:mb-[-0.5rem]">
              <span className="title-word">Kingsley.</span>
              <span className="title-word">Solomon.</span>
            </h1>

            <div className="rotating-text-container flex items-baseline gap-2 overflow-hidden">
              <RotatingText
                texts={["Frontend Developer", "Web Developer", "Application Developer", "Software Developer"]}
                mainClassName="font-head font-medium text-sm px-4 bg-gray-800 text-white lg:px-8 py-1 lg:text-xl border-2 backdrop-blur-3xl border-gray-300 rounded-full w-fit transition-all duration-100"
                staggerFrom={"last"}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={5000}
              />
            </div>
          </Wrapper>

          <section className="font-head flex max-w-[60%] flex-col items-end gap-4 p-2 text-base lg:flex-row lg:text-lg xl:max-w-[50%]">
            <div className="hero-description flex-1 py-4">
              <p className="">
                I build interfaces that balance aesthetic and function, delivering smooth experiences across all
                devices.
              </p>
            </div>
            <div className="hero-description flex-1 py-4">
              <p className="font-medium">
                A <span className="text-primary-600 dark:text-primary-400">CRITICAL THINKER</span> by default. A{" "}
                <span className="text-primary-600 dark:text-primary-400">PROGRAMMER</span> by effort.
              </p>
            </div>
          </section>

          <section className="social-button mt-5 flex gap-4 px-2 py-0">
            {socials.map((social) => (
              <MainButton
                key={social.content}
                size="icon"
                isIconOnly
                variant={`primary`}
                href={social.link}
                icon={social.icon}
                className="hover:bg-primary w-fit rounded-full border-3 bg-gray-800 hover:scale-110 hover:text-white"
              />
            ))}
          </section>
        </section>
        <Wrapper className="hero-footer font-head mt-20 flex w-full items-center justify-between gap-2 text-center font-medium">
          <span
            className="cursor-pointer font-medium hover:underline"
            onMouseEnter={handleCreditHover}
            onClick={handleCreditHover}
          >
            Credit:
          </span>
          <ModeToggle />
          <p title="Your Name">&copy; YOUR_INITIALS</p>
        </Wrapper>
      </section>
    </section>
  );
};
