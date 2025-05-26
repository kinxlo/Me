"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { cn } from "@/lib/utils";

import { PlainCard } from "../../_components/plain-card";

export const About = () => {
  return (
    <section id={`about`}>
      <Wrapper id={`map-section`}>
        <span className="cc-border font-mono text-lg font-medium">Bio</span>
        <h3 className={cn("cc-border-down text-primary text-4xl font-black")}>Allow me to Introduce myself</h3>
      </Wrapper>

      <Wrapper className="cc-border mt-10 bg-gray-400/50">
        <PlainCard className="grid grid-cols-1 gap-6 text-justify md:grid-cols-2 md:gap-8">
          {/* about me */}
          <p className="prose dark:prose-invert p-2 indent-8 font-mono">
            I&apos;m a full-stack software developer with over 3 years of experience, specializing in building
            thoughtful, scalable, and user-focused front-end solutions. My core strength lies in crafting clean,
            maintainable UI components using modern frameworks like <mark>React</mark>, <mark>Next.js</mark>, and Chakra
            UI—always with an eye toward <mark>performance</mark>, accessibility, and best practices. I take pride in
            writing efficient, DRY code, and I enjoy turning complex logic into elegant interfaces.
          </p>

          <div className="cc-bg-dotted relative aspect-video overflow-hidden border-none backdrop-blur-2xl">
            <div className="absolute inset-0 -z-0 blur-md">
              <BlurImage
                src="/images/map.png"
                alt="World map background"
                fill
                className="h-full w-full object-cover dark:invert"
                quality={5}
              />
            </div>

            <div className="relative z-10 h-full w-full">
              <BlurImage
                src="/images/map.png"
                alt="World map"
                width={500}
                height={300}
                className="mix-blend-multipy h-full w-full object-contain dark:mix-blend-screen dark:invert"
              />
              <div className="marker absolute inset-0 top-[-45%] left-[50%] size-5 transform" />
            </div>
          </div>
        </PlainCard>
      </Wrapper>
    </section>
  );
};
