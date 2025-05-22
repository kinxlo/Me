"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { useAppContext } from "@/hooks/use-app-context";
import { useIntersectionObserver } from "@wojtekmaj/react-hooks";
import { useRef } from "react";

import { DottedCard } from "../../_components/dotted-card";

export const About = () => {
  const { toggleAboutMe } = useAppContext();
  const aboutReference = useRef<HTMLDivElement>(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    for (const entry of entries) {
      toggleAboutMe(entry.isIntersecting);
    }
  };

  useIntersectionObserver(
    aboutReference.current,
    {
      threshold: 0.5,
      rootMargin: "0px",
    },
    handleIntersection,
  );

  return (
    <section className={`cc-3d-group`}>
      <Wrapper>
        <span className={`cc-border text-high-grey-III font-mono text-xl/5 font-medium tracking-wider uppercase`}>
          About me you ask?
        </span>
        <h3 className={`cc-border-down mt-4 text-4xl/9 font-black tracking-tighter`}>Allow me to Introduce myself</h3>
      </Wrapper>
      <Wrapper className={`cc-border mt-10`}>
        <div ref={aboutReference} className="w-full">
          <DottedCard className={`bg-accent/30`}>
            <p className={`indent-10`}>
              I&apos;m a full-stack software developer with over 3 years of experience, specializing in building
              thoughtful, scalable, and user-focused front-end solutions. My core strength lies in crafting clean,
              maintainable UI components using modern frameworks like React, Next.js, and Chakra UI—always with an eye
              toward performance, accessibility, and best practices. I take pride in writing efficient, DRY code, and I
              enjoy turning complex logic into elegant interfaces.
            </p>
            <p className={`indent-10`}>
              I&apos;m also deeply invested in design consistency and usability, whether I&apos;m building custom form
              components, responsive layouts, or real-time features with technologies like Pusher or GSAP. While I
              currently thrive in software development, I&apos;m steadily moving toward a future in cybersecurity. My
              mindset is detail-driven, curious, and systematic—qualities that fuel both my engineering discipline and
              my interest in security.
            </p>
            <p className={`indent-10`}>
              Outside of code, I&apos;m practical, creative, and always looking for ways to improve the developer
              experience. Whether it&apos;s building a reusable component library, fine-tuning a custom error view, or
              configuring a background queue for emails, I approach every challenge with focus and precision. Let&apos;s
              build something smart, secure, and scalable.
            </p>
          </DottedCard>
        </div>
      </Wrapper>
    </section>
  );
};
