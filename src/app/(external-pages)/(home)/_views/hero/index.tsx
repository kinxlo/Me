"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { useIntersection } from "@/hooks/use-observer";
import { cn } from "@/lib/utils";
import { File, Mail, X } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export const Hero = () => {
  return (
    <>
      <Wrapper className={`cc-3d-group`}>
        {/* 3D Group Container */}
        <section className="">
          <div className="cc-border-down flex items-end font-mono text-lg font-medium tracking-wider">
            <span>Welcome,</span>
          </div>

          {/* Name sections */}
          <figure className="cc-border-down font-black capitalize">
            <h1 className={cn(`text-5xl tracking-tighter text-balance sm:text-9xl/24`)}>Ifijeh Kingsley Solomon.</h1>
          </figure>

          {/* Job title */}
          <figure className={`cc-border-down`}>
            <p className="flex min-h-10 items-end font-mono text-lg font-medium">Software Developer && Instructor</p>
          </figure>

          {/* Button section - marked as flat to figurevent distortion */}
          <section className="mt-5 space-y-10">
            <figure className="cc-border-up flex gap-8">
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
