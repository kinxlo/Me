"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <>
      <Wrapper className={`flex min-h-[calc(100dvh-48px)] items-center`}>
        {/* 3D Group Container */}
        <section className={`max-w-(--breakpoint-md)`}>
          <section className={``}>
            {/* Name sections */}
            <div className={`space-y-4`}>
              <div className="cc-border capitalize">
                <h1 className={cn(`text-primary text-5xl font-black text-balance sm:text-9xl/24 lg:tracking-[-10px]`)}>
                  Frontend Developer.
                </h1>
              </div>
              <div className="cc-border">
                <p className={`py-2 text-justify text-sm font-medium`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ipsa blanditiis, voluptates quasi a
                  veniam repellat nisi necessitatibus omnis cupiditate rem consectetur hic, non sunt. Explicabo fuga
                  itaque molestiae officia!
                </p>
              </div>
            </div>
            <section className={`cc-border-down flex items-start divide-x text-justify`}>
              <p className={`p-2 pl-0 text-sm font-medium`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex magnam corrupti cumque quos adipisci
                iure. Quo veritatis provident consectetur rerum, atque illo itaque. Eius tenetur dignissimos incidunt
                asperiores nihil.
              </p>
              <p className={`p-2 pr-0 text-justify text-sm font-medium`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam inventore explicabo eligendi. Totam ab
                quis porro inventore dicta? Omnis aspernatur dolore ratione molestiae sed unde neque fugiat id minima
                deleniti!
              </p>
            </section>
          </section>
        </section>
      </Wrapper>
    </>
  );
};
