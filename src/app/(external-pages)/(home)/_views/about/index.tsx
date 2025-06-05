"use client";

import { Skills } from "@/components/shared/me/skills";

import { BusinessCard } from "../../_components/business-card";

export const About = () => {
  return (
    <section className={"flex w-fit flex-col items-center p-0 mix-blend-multiply lg:flex-row"}>
      <section id={`about`} className={`flex max-w-3xl`}>
        <BusinessCard />
      </section>
      <Skills className={`font-sea my-10 -rotate-10 lg:hidden`} />
    </section>
  );
};
