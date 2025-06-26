"use client";

import { AboutSVGBG } from "@/components/shared/me/paths/about-svg-bg";
import { BusinessCard } from "@/components/views/business-card";

const Page = () => {
  return (
    <main className={"p-0"}>
      {/*
      <section id={`about`} className={`border-primary`}>
      <BusinessCard />
      </section> */}
      <section className={"mt-10 flex w-full flex-col items-center p-0"}>
        <div className="pointer-events-none fixed right-0 bottom-0 z-0 h-[100vh] w-[100%] overflow-hidden lg:w-[50%]">
          <AboutSVGBG />
        </div>
        <section id={`about`} className={`!mx-auto flex max-w-3xl`}>
          <BusinessCard />
        </section>
      </section>
    </main>
  );
};

export default Page;
