"use client";

import MainButton from "@/components/shared/button";
import { heroTextAnimation } from "@/lib/animation/hero-animation";
import { socials } from "@/lib/tools/constants";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    heroTextAnimation();
  }, []);

  return (
    <section className="mix-blend-multiply">
      <section className="max-w-(--breakpoint-md)">
        {/* Animate the text content after entrance */}
        <div>
          <h1 className="shadow-primary/50 relative flex w-full origin-bottom-left items-end text-black capitalize [text-shadow:2px_2px_4px_var(--tw-shadow-color)]">
            <span className="xs:text-[15rem]/[10rem] title text-[10rem]/[7rem] lg:text-[20rem]/[13rem]">S</span>
            <div className="relative flex flex-col items-start justify-center overflow-hidden">
              <p className="developer text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Developer</p>

              <hr className="bg-primary line h-1" />

              <p className="software text-5xl lowercase sm:text-6xl md:text-7xl lg:ml-0 lg:text-8xl">oftware.</p>
            </div>
          </h1>

          <div className="cc-border">
            <p className="font-old min-h-[70px] px-4 py-2 font-medium">
              I like to craft solid and scalable frontend products with great user experiences.
            </p>
          </div>
        </div>

        {/* Below content appears naturally or could be animated as well */}
        <section className="cc-border-down font-old flex flex-col items-start text-sm lg:flex-row">
          <p className="p-4 font-medium">Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
          <p className="p-4 pr-0 font-medium">
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
              className="cc-shades text-primary w-fit bg-transparent px-5 transition-all duration-300 hover:bg-black hover:text-white"
            >
              {social.content}
            </MainButton>
          ))}
        </section>
      </section>
    </section>
  );
};
