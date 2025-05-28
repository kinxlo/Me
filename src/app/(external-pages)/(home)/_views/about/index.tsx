"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { cn } from "@/lib/utils";

import { BusinessCard } from "../../_components/business-card";
import { Skills } from "../../_components/skill";

// import Map from "../../_components/Map";

export const About = () => {
  return (
    <section id={`about`}>
      <Wrapper id={`fade-section`}>
        <span className="cc-border font-mono text-lg font-medium">Bio</span>
        <h3 className={cn("cc-border-down text-primary text-4xl font-black tracking-[-4px]")}>
          Allow me to Introduce myself
        </h3>
      </Wrapper>

      <Wrapper className={`cc-border mt-10 flex flex-col gap-10 p-0 lg:flex-row`}>
        <Wrapper className={`bg-secondary flex-1 border-r`}>
          <BusinessCard />
        </Wrapper>
        <Wrapper className="cc-shads flex-1 border-l p-0">
          <Skills />
        </Wrapper>
      </Wrapper>
    </section>
  );
};
