"use client";

import MainButton from "@/components/shared/button";
import { socials } from "@/lib/tools/constants";

export const Hero = () => {
  return (
    <section className="mix-blend-multiply">
      {/* <Noise patternSize={250} patternScaleX={2} patternScaleY={2} patternRefreshInterval={2} patternAlpha={25} /> */}
      <section className="mx-auto max-w-(--breakpoint-lg) -rotate-2">
        {/* Animate the text content after entrance */}
        <div>
          <h1 className="text-primary cc-border relative flex w-full items-end capitalize">
            <span className="title text-[15rem]/[10rem] lg:text-[25rem]/[13rem]">I</span>
            <div className="relative flex w-full flex-col items-start justify-center overflow-hidden">
              <p className="developer text-6xl sm:text-7xl md:text-8xl lg:text-9xl">Kingsley</p>
              <hr className="border-primary -md:my-4 w-full border-t-2" />
              <p className="software text-6xl lowercase sm:text-7xl md:text-8xl lg:ml-0 lg:text-9xl">fijeh.</p>
            </div>
          </h1>
          <div className={`cc-border cc-shades h-4`} />
          <div className="cc-border">
            <p className="font-head hero-text show px-4 py-2 text-2xl font-medium">
              Frontend Developer | Instructor | Web Developer...
            </p>
          </div>
          <div className={`cc-border cc-shades h-4`} />
        </div>

        {/* Below content appears naturally or could be animated as well */}

        <section className="cc-border-down font-head flex max-w-(--breakpoint-md) flex-col items-start lg:flex-row lg:text-lg">
          <p className="hero-text-1 show p-4 font-medium">
            A <span className={`text-primary`}>CRITICAL THINKER</span> by default. A{" "}
            <span className={`text-primary`}>PROGRAMMER</span> by effort.
          </p>
          <p className="hero-text-2 text-primary show p-4 pr-0 font-medium">
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
              className="cc-shades show hover:bg-primary w-fit translate-x-[50%] rounded-full border-5 bg-black transition-all duration-300 hover:text-white"
            />
          ))}
        </section>
      </section>
    </section>
  );
};
