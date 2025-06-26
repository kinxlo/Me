"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { useGlobalContext } from "@/context/global-context";
import gsap from "@/lib/animation/gsap/init";
import { runHomeEntranceAnimation, runHomeExitAnimation } from "@/lib/animation/pages/home/home";
import RotatingText from "@/lib/animation/RotatingText/RotatingText";
import { socials } from "@/lib/tools/constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { Credit } from "./credit";

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
      <Credit />
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
            className="animate-bounce cursor-pointer font-medium hover:underline"
            onMouseEnter={handleCreditHover}
            onClick={handleCreditHover}
          >
            👍 Big Ups To:
          </span>
          <p title="Your Name">&copy; {new Date().getFullYear()}</p>
        </Wrapper>
      </section>
    </section>
  );
};
