"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { cn } from "@/lib/utils";
import { File } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <Wrapper className={`flex items-center`}>
        {/* 3D Group Container */}
        <section className={`max-w-(--breakpoint-md)`}>
          <div className="flex items-end text-lg font-medium tracking-wider">
            <p className={`text-primary`}>Welcome,</p>
          </div>

          <section className={`space-y-4`}>
            {/* Name sections */}
            <figure className="cc-border capitalize">
              <h1 className={cn(`text-5xl tracking-tighter text-balance sm:text-9xl/24 lg:tracking-[-10px]`)}>
                Ifijeh Kingsley Solomon.
              </h1>
            </figure>

            {/* Job title */}
            <figure className={`cc-border`}>
              <p className="text-primary flex items-end font-mono text-lg font-medium">
                Software Developer && Instructor
              </p>
            </figure>
          </section>

          {/* Button section - marked as flat to figurevent distortion */}
          <section className="mt-5 space-y-10">
            <figure className="cc-border flex gap-8">
              <MainButton className={`cc-3d-item`} isLeftIconVisible icon={<File />} variant={`accent`}>
                View my resume
              </MainButton>
            </figure>
          </section>
        </section>
      </Wrapper>
    </>
  );
};
