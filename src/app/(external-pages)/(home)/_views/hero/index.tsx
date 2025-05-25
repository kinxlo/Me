"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { cn } from "@/lib/utils";
import { File } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <Wrapper>
        {/* 3D Group Container */}
        <section>
          <div className="flex items-end font-mono text-lg font-medium tracking-wider">
            <span>Welcome,</span>
          </div>

          <section className={`space-y-4`}>
            {/* Name sections */}
            <figure className="cc-border font-black capitalize">
              <h1 className={cn(`text-5xl tracking-tighter text-balance sm:text-9xl/24 lg:tracking-[-10px]`)}>
                Ifijeh Kingsley Solomon.
              </h1>
            </figure>

            {/* Job title */}
            <figure className={`cc-border`}>
              <p className="flex items-end font-mono text-lg font-medium">Software Developer && Instructor</p>
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
