"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { initHomeHeroAnimation } from "@/lib/animation/pages/home/home";
import { socials } from "@/lib/tools/constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const Hero = () => {
  const titleReference = useRef<HTMLHeadingElement>(null);
  const subtitleReference = useRef<HTMLDivElement>(null);
  const cardsReference = useRef<HTMLDivElement>(null);
  const socialsReference = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    initHomeHeroAnimation({
      subtitle: subtitleReference.current,
      cardsContainer: cardsReference.current,
      socialsContainer: socialsReference.current,
    });
  }, []);

  return (
    <section className="mix-blend-multiply">
      <section className="mx-auto max-w-(--breakpoint-lg)">
        <Wrapper>
          <h1 className="text-primary show flex w-full items-end overflow-hidden text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:mb-[-0.5rem]">
            <span className="title-word">Ifijeh</span>
          </h1>
          <h1
            ref={titleReference}
            className="text-primary show flex w-full items-end overflow-hidden text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:mb-[-0.5rem]"
          >
            <span className="title-word">Kingsley</span>.<span className="title-word">Solomon.</span>
          </h1>

          <div ref={subtitleReference} className="cc-border overflow-hidden">
            <p className="font-head py-2 text-2xl font-medium">Frontend Developer | Instructor | Web Developer...</p>
          </div>
        </Wrapper>

        <section
          ref={cardsReference}
          className="cc-border-down font-head flex max-w-(--breakpoint-md) flex-col items-start gap-4 p-2 lg:flex-row lg:text-lg"
        >
          <div className="bg-secondary flex gap-3 rounded-lg border border-gray-200 p-4 shadow-lg transition-all hover:bg-white hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/90 dark:hover:bg-gray-800">
            <p className="font-medium text-gray-800 dark:text-gray-200">
              A <span className="text-primary-600 dark:text-primary-400">CRITICAL THINKER</span> by default. A{" "}
              <span className="text-primary-600 dark:text-primary-400">PROGRAMMER</span> by effort.
            </p>
          </div>

          <div className="bg-secondary flex gap-3 rounded-lg border border-gray-200 p-4 shadow-lg transition-all hover:bg-white hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/90 dark:hover:bg-gray-800">
            <p className="font-medium text-gray-800 dark:text-gray-200">
              Not a fan of <span className="text-primary-600 dark:text-primary-400">&apos;Buzz words&apos;</span>, but
              I&apos;m very much aware of them. lol
            </p>
          </div>
        </section>

        <section className="cc-border mt-16 flex gap-4" ref={socialsReference}>
          {socials.map((social) => (
            <MainButton
              key={social.content}
              size="icon"
              isIconOnly
              variant={`primary`}
              href={social.link}
              icon={social.icon}
              className="cc-shades hover:bg-primary w-fit rounded-full border-5 bg-black transition-all duration-300 hover:scale-110 hover:text-white"
            />
          ))}
        </section>
      </section>
    </section>
  );
};
