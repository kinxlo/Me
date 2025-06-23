"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import RotatingText from "@/lib/animation/RotatingText/RotatingText";
import { socials } from "@/lib/tools/constants";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="mt-[40%] md:mt-[20%] lg:mt-5">
      <section className="mx-auto max-w-(--breakpoint-lg)">
        <Wrapper>
          <h1 className="text-primary show flex w-full items-end overflow-hidden text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:mb-[-0.5rem]">
            <span className="title-word">Ifijeh</span>
          </h1>
          <h1 className="text-primary show flex w-full items-end overflow-hidden text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:mb-[-0.5rem]">
            <span className="title-word">Kingsley.</span>
            <span className="title-word">Solomon.</span>
          </h1>

          <div className="rotating-text-container flex items-baseline gap-2 overflow-hidden">
            <RotatingText
              texts={["Application Developer", "Software Developer", "Web Developer", "Mobile Developer"]}
              mainClassName="font-head font-medium text-sm bg-gray-300 px-4 lg:px-8 py-1 lg:text-xl border-2 backdrop-blur-3xl border-black/50 rounded-full w-fit transition-all duration-100"
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
              I build interfaces that balance aesthetic and function, delivering smooth experiences across all devices.
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
      <Wrapper
        className={`hero-footer font-head mt-20 flex w-full items-center justify-between gap-2 text-center font-medium`}
      >
        <Link href={``} className={`font-medium hover:underline`}>
          Credit:
        </Link>
        <ModeToggle />
        <p title="Ifijeh Kingsley Solomon">&copy; I19N</p>
      </Wrapper>
    </section>
  );
};
