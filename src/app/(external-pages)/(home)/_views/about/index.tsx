"use client";

import { Wrapper } from "@/components/core/layout/wrapper";

import { BusinessCard } from "../../_components/business-card";

export const About = () => {
  return (
    <Wrapper className={"mt-12 flex min-h-[calc(100dvh-48px)] items-center p-0 mix-blend-multiply"}>
      <section id={`about`} className={`max-w-4xl`}>
        <BusinessCard />
      </section>
    </Wrapper>
  );
};
