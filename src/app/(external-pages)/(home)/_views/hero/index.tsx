"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { HBGTL } from "@/lib/animation/pages/home/background";
import { HTL, initHomeHeroAnimation } from "@/lib/animation/pages/home/home";
import { socials } from "@/lib/tools/constants";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
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
    HTL?.eventCallback("onComplete", () => {
      HBGTL?.play();
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
          className="cc-border-down flex max-w-(--breakpoint-md) flex-col items-start gap-4 p-2 text-sm text-white lg:flex-row"
        >
          <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 bg-gray-800 p-4 transition-all md:min-h-[6rem]">
            <p className="font-medium">
              I build interfaces that balance aesthetic and function, delivering smooth experiences across all devices.
            </p>
          </div>
          <div className="transition-al flex flex-1 gap-3 rounded-lg border border-gray-200 bg-gray-800 p-4 md:min-h-[6rem]">
            <p className="font-medium">
              A <span className="text-primary-600 dark:text-primary-400">CRITICAL THINKER</span> by default. A{" "}
              <span className="text-primary-600 dark:text-primary-400">PROGRAMMER</span> by effort.
            </p>
          </div>
        </section>

        <section className="cc-border mt-5 flex gap-4 p-2" ref={socialsReference}>
          {socials.map((social) => (
            <MainButton
              key={social.content}
              size="icon"
              isIconOnly
              variant={`primary`}
              href={social.link}
              icon={social.icon}
              className="hover:bg-primary w-fit rounded-full border-5 bg-gray-800 transition-all duration-300 hover:scale-110 hover:text-white"
            />
          ))}
        </section>
        <Wrapper className={`font-head mt-5 flex w-full items-center justify-between gap-2 text-center`}>
          <Link href={``} onClick={() => HTL.reverse()} className={`font-medium hover:underline`}>
            Credit:
          </Link>
          <ModeToggle />
          <p title="Ifijeh Kingsley Solomon">&copy; By I19N</p>
        </Wrapper>
      </section>
    </section>
  );
};
