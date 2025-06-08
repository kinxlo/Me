"use client";

import MainButton from "@/components/shared/button";
import { socials } from "@/lib/tools/constants";
import { useRef } from "react";

export const Hero = () => {
  const titleReference = useRef(null);
  const developerTextReference = useRef(null);
  const softwareTextReference = useRef(null);

  return (
    <section className="mix-blend-multiply">
      <section className="max-w-(--breakpoint-md)">
        {/* Name sections */}
        <div>
          <h1
            ref={titleReference}
            className="text-primary shadow-primary/50 relative flex w-full origin-bottom-left items-end capitalize [text-shadow:2px_2px_4px_var(--tw-shadow-color)]"
          >
            <span className="xs:text-[15rem]/[10rem] text-[10rem]/[7rem] lg:text-[20rem]/[13rem]">S</span>
            <div className="transform-gpu">
              <p ref={developerTextReference} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Developer
              </p>

              <hr />

              <p ref={softwareTextReference} className="text-5xl lowercase sm:text-6xl md:text-7xl lg:ml-0 lg:text-8xl">
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

        <section className="cc-border-down font-old flex flex-col items-start text-sm lg:flex-row">
          <p className="p-4 font-medium">Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
          <p className="p-4 pr-0 font-medium">
            Proven experience building successful products for clients across several countries.
          </p>
        </section>

        <section className="cc-border my-2 space-x-4 px-4">
          {socials.map((social) => (
            <MainButton
              key={social.content}
              size="icon"
              isIconOnly
              icon={social.icon}
              className="social-button rounded-full border-3 border-gray-500 transition-all duration-300"
            />
          ))}
        </section>
      </section>
    </section>
  );
};
