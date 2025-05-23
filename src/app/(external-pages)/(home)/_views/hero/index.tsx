"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { useIntersection } from "@/hooks/use-observer";
import { cn } from "@/lib/utils";
import { File, Mail, X } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export const Hero = () => {
  const _name1 = useIntersection();
  const _name2 = useIntersection();
  const _name3 = useIntersection();
  return (
    <>
      <Wrapper className={`cc-3d-group`}>
        {/* 3D Group Container */}
        <section className="">
          {/* Welcome text */}
          <div className="cc-border-down text-primary mb-5 flex min-h-24 items-end font-mono text-xl/5 font-medium tracking-wider">
            <span>Welcome,</span>
            <div className={`absolute bottom-[-3rem] left-[50%] hidden cursor-default space-x-4 text-black lg:block`}>
              <MainButton href={`#about-section`} className={`cc-3d-item`} variant={`accent`}>
                About Me
              </MainButton>
              <MainButton href={`#projects`} className={`cc-3d-item`} variant={`accent`}>
                Projects
              </MainButton>
              <MainButton href={`#contact`} className={`cc-3d-item`} variant={`accent`}>
                Contact Me
              </MainButton>
              <ModeToggle />
            </div>
          </div>

          {/* Name sections */}
          <div className="font-black uppercase">
            <figure className="cc-border-down z-[-1]">
              <h1
                ref={_name1.ref}
                className={cn(
                  `text-5xl/8.5 tracking-tighter sm:text-9xl sm:leading-17 xl:leading-20`,
                  _name1.isIntersecting && `cc-3d-item-move`,
                )}
              >
                Ifijeh
              </h1>
            </figure>
            <figure className="cc-border-down">
              <h1
                ref={_name2.ref}
                className={cn(
                  `text-5xl/8.5 tracking-tighter sm:text-9xl sm:leading-17 xl:leading-20`,
                  _name2.isIntersecting && `cc-3d-item-move`,
                )}
              >
                Kingsley
              </h1>
              <MainButton
                variant={`ghost`}
                className={`absolute bottom-[-3rem] left-[37rem] cursor-default text-black`}
              >
                I19N
              </MainButton>
            </figure>
            <figure className="cc-border-down">
              <h1
                ref={_name3.ref}
                className={cn(
                  `text-5xl/8.5 tracking-tighter sm:text-9xl sm:leading-17 xl:leading-20`,
                  _name3.isIntersecting && `cc-3d-item-move`,
                )}
              >
                Solomon.
              </h1>
            </figure>
          </div>

          {/* Job title */}
          <figure className={`cc-border-down`}>
            <p className="text-primary flex min-h-10 items-end font-mono text-2xl/5 font-medium uppercase">
              Software Developer && Instructor
            </p>
          </figure>

          {/* Button section - marked as flat to figurevent distortion */}
          <section className="mt-5 space-y-10">
            <figure className="cc-border-up flex gap-8">
              <MainButton className={`cc-3d-item text-black`} isLeftIconVisible icon={<File />} variant="accent">
                View my resume
              </MainButton>
              <div className={`hidden cursor-default space-x-4 text-black lg:block`}>
                <MainButton icon={<LuLinkedin />} isIconOnly size={"icon"} className={`h-12 w-12`} variant={`accent`} />
                <MainButton icon={<X />} isIconOnly size={"icon"} className={`h-12 w-12`} variant={`accent`} />
                <MainButton icon={<Mail />} isIconOnly size={"icon"} className={`h-12 w-12`} variant={`accent`} />
                <MainButton icon={<LuGithub />} isIconOnly size={"icon"} className={`h-12 w-12`} variant={`accent`} />
              </div>
            </figure>
          </section>
        </section>
      </Wrapper>
    </>
  );
};
