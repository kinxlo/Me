"use client";

import MainButton from "@/components/shared/button";
import { initHeroAnimation, showAnimation, textAnimation } from "@/lib/animation/home-animation";
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
            <span className="xs:text-[15rem]/[10rem] title cc-init text-[10rem]/[7rem] lg:text-[20rem]/[13rem]">I</span>
            <div className="relative flex flex-col items-start justify-center overflow-hidden">
              <p className="developer cc-init text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Kingsley</p>
              <hr className="bg-primary line h-1" />
              <p className="software cc-init text-5xl lowercase sm:text-6xl md:text-7xl lg:ml-0 lg:text-8xl">fijeh.</p>
            </div>
          </h1>

          <div className="cc-border">
            <p className="font-head hero-text cc-init show translate-x-[20%] px-4 py-2 text-lg font-medium">
              Frontend Developer | Instructor | Web Developer...
            </p>
          </div>
        </div>

        {/* Below content appears naturally or could be animated as well */}
        <section className="cc-border-down font-head flex flex-col items-start text-lg lg:flex-row">
          <p className="hero-text-1 show cc-init h-[98px] min-w-[50%] translate-x-[50%] p-4 font-medium lg:h-[98px]">
            A <span className={`text-primary`}>CRITICAL THINKER</span> by default. A{" "}
            <span className={`text-primary`}>PROGRAMMER</span> by effort.
          </p>
          <p className="hero-text-2 text-primary show cc-init h-[90px] min-w-[50%] translate-x-[50%] p-4 pr-0 font-medium lg:h-[135px]">
            Not a fan of &apos;Buzz words&apos;, but i&apos;m very much aware of them. lol
          </p>
        </section>

        <section className="cc-border mt-16 flex gap-4">
          {socials.map((social) => (
            <MainButton
              key={social.content}
              size="icon"
              isIconOnly
              variant={`primary`}
              href={social.link}
              icon={social.icon}
              className="cc-shades cc-init show hover:bg-primary w-fit translate-x-[50%] rounded-full border-5 bg-black transition-all duration-300 hover:text-white"
            />
          ))}
        </section>
      </section>
    </section>
  );
};
