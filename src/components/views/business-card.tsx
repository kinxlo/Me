"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { useGlobalContext } from "@/context/global-context";
import { runAboutAnimation, runAboutExitAnimation } from "@/lib/animation/pages/about/about";
import RotatingText from "@/lib/animation/RotatingText/RotatingText";
import TrueFocus from "@/lib/animation/TrueFocus/TrueFocus";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export const BusinessCard = () => {
  const aboutPage = useRef(null);
  const { setTimeline } = useGlobalContext();

  useGSAP(
    () => {
      runAboutAnimation().play();
      setTimeline(runAboutExitAnimation());
    },
    { scope: aboutPage },
  );

  return (
    <section ref={aboutPage} className="my-[5rem]">
      <Wrapper className="animated-element overflow-hidden p-0">
        <Wrapper className="my-2 p-0">
          <section
            className={cn(
              "business-card group relative flex min-h-[30rem] flex-col justify-end gap-8 rounded-none",
              "transition-all duration-300",
            )}
          >
            {/* Header Section - Will animate with .about-txt class */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-primary overflow-hidden text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:mb-[-0.5rem]">
                <span className="title-word underline">The</span>
                {/* <span className="title-word underline">Philosopher</span> */}
                <RotatingText
                  texts={["Philosopher", "Chemist", "Philosopher"]}
                  mainClassName="font-head title-word underline"
                  staggerFrom={"last"}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={5000}
                />
              </h1>
              {/* <h3 className="text-primary title-word text-3xl underline lg:text-4xl"></h3> */}
            </div>
            <p className="justify max-w-[60%] text-base text-black/70 xl:max-w-[50%]">
              <span className={`title-word`}>Lead Frontend dev at </span>
              <Link
                target="_blank"
                href="https://techstudioacademy.com"
                className="text-success font-head hover:text-success/80 hover:underline"
              >
                TSA <ArrowUpRight className="inline h-4 w-4" />
              </Link>
              <span className={`title-word`}>, with an interest in Backend engineering, and System architecture.</span>
            </p>

            {/* Experience - Will animate with section-3 class */}
            <div className="section-3 space-y-4">
              <div className="true-focus flex items-baseline gap-3">
                <TrueFocus
                  sentence="~IV Years Experience"
                  manualMode={false}
                  blurAmount={3}
                  borderColor="oklch(40% 0.12 25)"
                  animationDuration={1}
                  pauseBetweenAnimations={1}
                />
                {/* <h3 className="font-head text-2xl font-black text-black">~4 Years</h3> */}
                {/* <span className="font-head text-black/60">Experience</span> */}
              </div>
              <p className="justify max-w-[60%] text-base text-black/70 xl:max-w-[50%]">
                I build interfaces that balance aesthetic and function, delivering smooth experiences across all
                devices.
              </p>
            </div>

            {/* Highlights Grid - Will animate with section-5 class */}
            <div className="section-5 grid gap-6 md:grid-cols-1">
              {[
                {
                  icon: <CheckCircle className="text-success mt-1" size={20} />,
                  title: "Accessibility-first",
                  desc: "WCAG compliant interfaces that work for everyone",
                  bgColor: "bg-blue-100", // Opaque background
                  borderColor: "border-blue-200",
                },
                {
                  icon: <CheckCircle className="text-success mt-1" size={20} />,
                  title: "Fullstack Mindset",
                  desc: "Frontend expertise with backend/system awareness",
                  bgColor: "bg-teal-100", // Opaque background
                  borderColor: "border-teal-200",
                },
                {
                  icon: <CheckCircle className="text-success mt-1" size={20} />,
                  title: "Mentorship",
                  desc: "Guiding juniors while learning from seniors",
                  bgColor: "bg-pink-100", // Opaque background
                  borderColor: "border-pink-200",
                },
                {
                  icon: <CheckCircle className="text-success mt-1" size={20} />,
                  title: "Open Source",
                  desc: "Contributing to community-driven projects",
                  bgColor: "bg-amber-100", // Opaque background
                  borderColor: "border-amber-200",
                },
              ].map((item, index) => (
                <div key={index} className={cn("flex gap-3")}>
                  {item.icon}
                  <div className={`space-y-2`}>
                    <h4 className="font-head text-lg font-bold underline">{item.title}</h4>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Personal Touch - Will animate with section-7 class */}
            <div className="section-7 mt-8 border-t border-black/20 pt-4">
              <p className="font-sea text-xl text-black/70 italic">*** Off-duty: Books. Squads. Gaming. Repeat. ***</p>
            </div>
          </section>
        </Wrapper>
      </Wrapper>
    </section>
  );
};
