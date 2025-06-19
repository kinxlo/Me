"use client";

import { BusinessCard } from "../_components/business-card";

const About = () => {
  return (
    <section className={"mt-10 flex w-fit flex-col items-center p-0 mix-blend-multiply"}>
      <section id={`about`} className={`flex max-w-3xl`}>
        <BusinessCard />
      </section>
    </section>
  );
};

export default About;
