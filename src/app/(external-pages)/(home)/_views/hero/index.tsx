"use client";

import MainButton from "@/components/shared/button";
import { initHeroAnimation } from "@/lib/animation/hero-animation";
import { showAnimation, textAnimation } from "@/lib/animation/tag-animation";
import { socials } from "@/lib/tools/constants";
import { useGSAP } from "@gsap/react";

export const Hero = () => {
  useGSAP(() => {
    const tl = initHeroAnimation();
    tl.eventCallback("onComplete", () => {
      const tl = showAnimation();
      tl.eventCallback("onComplete", () => {
        textAnimation();
      });
    });
  }, []);
  return (
    <section className="mix-blend-multiply">
      <section className="max-w-(--breakpoint-md) -rotate-2">
        {/* Animate the text content after entrance */}
        <div>
          <h1 className="text-primary relative flex w-full origin-bottom-left items-end capitalize">
            <span className="xs:text-[15rem]/[10rem] title cc-init text-[10rem]/[7rem] lg:text-[20rem]/[13rem]">S</span>
            <div className="relative flex flex-col items-start justify-center overflow-hidden">
              <p className="developer cc-init text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Developer</p>
              <hr className="bg-primary line h-1" />
              <p className="software cc-init text-5xl lowercase sm:text-6xl md:text-7xl lg:ml-0 lg:text-8xl">
                oftware.
              </p>
            </div>
          </h1>

          <div className="cc-border">
            <p className="font-head hero-text cc-init show translate-x-[20%] px-4 py-2 text-lg font-medium">
              I like to craft solid and scalable frontend products with great user experiences.
            </p>
          </div>
        </div>

        {/* Below content appears naturally or could be animated as well */}
        <section className="cc-border-down font-head flex flex-col items-start text-lg lg:flex-row">
          <p className="hero-text-1 show cc-init translate-x-[50%] p-4 font-medium">
            Highly skilled at progressive enhancement, design systems & UI Engineering.
          </p>
          <p className="hero-text-2 show cc-init translate-x-[50%] p-4 pr-0 font-medium">
            Proven experience building successful products for clients across several countries.
          </p>
        </section>

        <section className="cc-border mt-1 flex gap-4">
          {socials.map((social) => (
            <MainButton
              key={social.content}
              size="icon"
              isIconOnly
              variant={`outline`}
              href={social.link}
              icon={social.icon}
              className="cc-shades cc-init show text-primary w-fit translate-x-[50%] bg-transparent px-5 transition-all duration-300 hover:bg-black hover:text-white"
            >
              {social.content}
            </MainButton>
          ))}
        </section>
      </section>
    </section>
  );
};
