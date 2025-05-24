"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { useAppContext } from "@/hooks/use-app-context";
import { useIntersectionToggleWithState } from "@/hooks/use-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { PlainCard } from "../../_components/plain-card";

export const About = () => {
  const { toggleAboutMe } = useAppContext();
  const { ref: aboutReference, isIntersecting } = useIntersectionToggleWithState(toggleAboutMe, {
    threshold: 0.6,
  });

  return (
    <section id={`about-section`} className={`cc-3d-group`}>
      <Wrapper>
        <span className={`cc-border font-mono text-lg font-medium`}>Bio</span>
        <figure className={`cc-border-down`}>
          <h3 className={cn(`text-4xl font-black tracking-tighter`)}>Allow me to Introduce myself</h3>
        </figure>
      </Wrapper>
      <Wrapper className={`cc-border mt-10`}>
        <div className={cn("font-sea text-2xl/9")} ref={aboutReference}>
          <PlainCard className={`grid grid-cols-1 p-4 md:grid-cols-2 lg:mx-0`}>
            <div>
              <p className={`max-w-(--breakpoint-md) indent-10`}>
                I&apos;m a full-stack software developer with over 3 years of experience, specializing in building
                thoughtful, scalable, and user-focused front-end solutions. My core strength lies in crafting clean,
                maintainable UI componencnts using modern frameworks like <mark>React</mark>, <mark>Next.js,</mark>
                and Chakra UI—always with an eye toward <mark>performance</mark>, accessibility, and best practices. I
                take pride in writing efficient, DRY code, and I enjoy turning complex logic into elegant interfaces.
              </p>
              <p className={`max-w-(--breakpoint-md) indent-10`}>
                I&apos;m also deeply invested in design consistency and usability, whether I&apos;m building custom form
                components, responsive layouts, or real-time features with technologies like <mark>Pusher</mark> or{" "}
                <mark>GSAP</mark>. While I currently thrive in software development, I&apos;m steadily moving toward a
                future in cybersecurity. My mindset is detail-driven, curious, and systematic—qualities that fuel both
                my engineering discipline and my interest in security.
              </p>
              <p className={`max-w-(--breakpoint-md) indent-10`}>
                Outside of code, I&apos;m practical, creative, and always looking for ways to improve the developer
                experience. Whether it&apos;s building a reusable component library, fine-tuning a custom error view, or
                configuring a background queue for emails, I approach every challenge with focus and precision.
                Let&apos;s build something smart, secure, and scalable.
              </p>
            </div>
            <div className={`cc-bg-dotted relative overflow-hidden border-none`}>
              <BlurImage fill className={cn(`object-cover dark:invert`)} src={"/images/map.png"} alt={"map"} />
              <Image
                width={1000}
                height={1000}
                src={"/images/pin.png"}
                alt={"pin"}
                className={`absolute inset-0 top-[53%] left-[45%] size-10`}
              />
            </div>
          </PlainCard>
        </div>
      </Wrapper>
    </section>
  );
};
