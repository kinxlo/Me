"use client";

import { Animator } from "@/components/shared/animator";
import MainButton from "@/components/shared/button";
import { heroTextAnimation } from "@/lib/animation/hero-animation";
import { socials } from "@/lib/tools/constants";
import { useRef } from "react";

export const Hero = () => {
  const titleReference = useRef<HTMLHeadingElement>(null);
  const lineReference = useRef<HTMLHRElement>(null);
  const developerReference = useRef<HTMLParagraphElement>(null);
  const softwareReference = useRef<HTMLParagraphElement>(null);

  return (
    <section className="mix-blend-multiply">
      <section className="max-w-(--breakpoint-md)">
        {/* Animate the text content after entrance */}
        <Animator
          animation={() =>
            heroTextAnimation({
              title: titleReference.current!,
              developer: developerReference.current!,
              software: softwareReference.current!,
              line: lineReference.current!,
            })
          }
        >
          <div>
            <h1 className="text-primary shadow-primary/50 relative flex w-full origin-bottom-left items-end capitalize [text-shadow:2px_2px_4px_var(--tw-shadow-color)]">
              <span
                ref={titleReference}
                className="xs:text-[15rem]/[10rem] translate-y-[10%] text-[10rem]/[7rem] opacity-0 lg:text-[20rem]/[13rem]"
              >
                S
              </span>
              <div className="relative flex flex-col items-start justify-center overflow-hidden">
                <p
                  ref={developerReference}
                  className="translate-y-[30%] text-5xl opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
                >
                  Developer
                </p>

                <hr ref={lineReference} className="bg-primary h-1 w-[0%]" />

                <p
                  ref={softwareReference}
                  className="-translate-y-[30%] text-5xl lowercase opacity-0 sm:text-6xl md:text-7xl lg:ml-0 lg:text-8xl"
                >
                  oftware
                </p>
              </div>
            </h1>

            <div className="cc-border">
              <p className="font-old min-h-[70px] px-4 py-2 font-medium">
                I like to craft solid and scalable frontend products with great user experiences.
              </p>
            </div>
          </div>
        </Animator>

        {/* Below content appears naturally or could be animated as well */}
        <section className="cc-border-down font-old flex flex-col items-start text-sm lg:flex-row">
          <p className="p-4 font-medium">Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
          <p className="p-4 pr-0 font-medium">
            Proven experience building successful products for clients across several countries.
          </p>
        </section>

        <section className="mt-4 ml-2 flex gap-4">
          {socials.map((social) => (
            <MainButton
              key={social.content}
              size="icon"
              isIconOnly
              variant={`outline`}
              href={social.link}
              icon={social.icon}
              className="cc-shades w-fit bg-transparent px-5 text-black transition-all duration-300"
            >
              {social.content}
            </MainButton>
          ))}
        </section>
      </section>
    </section>
  );
};
