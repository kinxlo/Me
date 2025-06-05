"use client";

import MainButton from "@/components/shared/button";
import { socials } from "@/lib/tools/constants";

export const Hero = () => {
  return (
    <section className={`mix-blend-multiply`}>
      {/* 3D Group Container */}
      <section className={`max-w-(--breakpoint-md)`}>
        {/* Name sections */}
        <div>
          <h1 className="cc-border-down text-primary shadow-primary/50 relative flex w-full origin-bottom-left items-end capitalize [text-shadow:2px_2px_4px_var(--tw-shadow-color)]">
            <span className="xs:text-[15rem]/[10rem] text-[10rem]/[7rem] lg:text-[20rem]/[13rem]">S</span>
            <div className="xs:scale-90 -ml-4 scale-75 transform-gpu sm:scale-95 lg:ml-0 lg:scale-100">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Developer</p>
              <hr />
              <p className="-ml-4 text-4xl lowercase sm:text-5xl md:text-6xl lg:ml-0 lg:text-7xl">oftware</p>
            </div>
          </h1>

          {/* Rest of your existing code remains exactly the same */}
          <div className="cc-border">
            <p className={`font-old py-2 pl-4 font-medium`}>
              Frontend Developer. I like to craft solid and scalable frontend products with great user experiences.
            </p>
          </div>
        </div>
        <section className={`cc-border-down font-old flex items-start divide-x text-sm`}>
          <p className={`p-4 font-medium`}>
            Highly skilled at progressive enhancement, design systems & UI Engineering.
          </p>
          <p className={`p-4 pr-0 font-medium`}>
            Proven experience building successful products for clients across several countries.
          </p>
        </section>
        <section className={`cc-border my-2 space-x-4 px-4`}>
          {socials.map((social) => {
            return (
              <MainButton
                key={social.content}
                size="icon"
                isIconOnly
                icon={social.icon}
                className="rounded-full border-3 border-gray-500 transition-all duration-300"
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};
