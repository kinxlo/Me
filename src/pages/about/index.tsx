"use client";

import { BusinessCard } from "@/components/views/business-card";

const Page = () => {
  return (
    <main className={"mt-10 flex items-center justify-center p-0"}>
      {/* <AboutSVGBG /> */}
      <section id={`about`} className={`border-primary`}>
        <BusinessCard />
      </section>
    </main>
  );
};

export default Page;
