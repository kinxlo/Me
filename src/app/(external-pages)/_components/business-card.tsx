"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const BusinessCard = () => {
  return (
    <section className="my-[5rem]">
      <Wrapper className="overflow-hidden p-0 pl-2">
        <Wrapper className="my-2 p-0">
          <section
            className={cn(
              "business-card group relative flex min-h-[30rem] flex-col justify-center gap-8 rounded-none !mix-blend-multiply",
              "transition-all duration-300",
            )}
          >
            {/* Header Section - Will animate with .about-txt class */}
            <div className="section-1 space-y-6">
              <h3 className="text-primary about-txt font-head text-3xl underline lg:text-4xl">
                Ifijeh Kingsley Solomon
              </h3>
              <p className="font-head text-xl text-black/90">
                Lead Frontend dev at{" "}
                <Link
                  target="_blank"
                  href="https://techstudioacademy.com"
                  className="text-success hover:text-success/80 hover:underline"
                >
                  TSA <ArrowUpRight className="inline h-4 w-4" />
                </Link>
                , with an interest in Backend engineering, and System architecture.
              </p>
            </div>

            {/* Experience - Will animate with section-3 class */}
            <div className="section-3 space-y-4">
              <div className="flex items-baseline gap-3">
                <h3 className="font-head text-2xl font-black text-black">~4 Years</h3>
                <span className="font-head text-black/60">Experience</span>
              </div>
              <p className="font-head text-xl leading-relaxed text-black/90">
                I build interfaces that balance aesthetic and function, delivering smooth experiences across all
                devices.
              </p>
            </div>

            {/* Highlights Grid - Will animate with section-5 class */}
            <div className="section-5 grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: <CheckCircle className="text-success" size={20} />,
                  title: "Accessibility-first",
                  desc: "WCAG compliant interfaces that work for everyone",
                  bgColor: "bg-blue-100", // Opaque background
                  borderColor: "border-blue-200",
                },
                {
                  icon: <CheckCircle className="text-success" size={20} />,
                  title: "Fullstack Mindset",
                  desc: "Frontend expertise with backend/system awareness",
                  bgColor: "bg-teal-100", // Opaque background
                  borderColor: "border-teal-200",
                },
                {
                  icon: <CheckCircle className="text-success" size={20} />,
                  title: "Mentorship",
                  desc: "Guiding juniors while learning from seniors",
                  bgColor: "bg-pink-100", // Opaque background
                  borderColor: "border-pink-200",
                },
                {
                  icon: <CheckCircle className="text-success" size={20} />,
                  title: "Open Source",
                  desc: "Contributing to community-driven projects",
                  bgColor: "bg-amber-100", // Opaque background
                  borderColor: "border-amber-200",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "backdrop-blur-0 flex gap-3 rounded-lg border p-4 transition-all hover:bg-black/5",
                    item.bgColor,
                    item.borderColor,
                  )}
                >
                  {item.icon}
                  <div>
                    <h4 className="font-head text-primary text-lg font-bold underline">{item.title}</h4>
                    <p className="font-head text-black/90">{item.desc}</p>
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
