"use client";

import MainButton from "@/components/shared/button";
import { socials } from "@/lib/tools/constants";

export const Hero = () => {
  return (
    <section className="mix-blend-multiply">
      <section className="mx-auto max-w-(--breakpoint-lg)">
        {/* Animate the text content after entrance */}

        <div>
          <h1 className="text-primary flex w-full items-end text-4xl capitalize sm:text-7xl md:text-8xl lg:text-9xl xl:mb-[-0.5rem]">
            Ifijeh Kingsley Solomon.
          </h1>
          <div className={`cc-border cc-shades h-4`} />
          <div className="cc-border">
            <p className="font-head txt px-4 py-2 text-2xl font-medium">
              Frontend Developer | Instructor | Web Developer...
            </p>
          </div>
          <div className={`cc-border cc-shades h-4`} />
        </div>
        {/* Below content appears naturally or could be animated as well */}
        <section className="cc-border-down font-head flex max-w-(--breakpoint-md) flex-col items-start lg:flex-row lg:text-lg">
          <p className="show p-4 font-medium">
            A <span className={`text-primary`}>CRITICAL THINKER</span> by default. A{" "}
            <span className={`text-primary`}>PROGRAMMER</span> by effort.
          </p>
          <p className="text-primary show p-4 pr-0 font-medium">
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
              className="cc-shades hover:bg-primary w-fit rounded-full border-5 bg-black transition-all duration-300 hover:text-white"
            />
          ))}
        </section>
      </section>
    </section>
  );
};
