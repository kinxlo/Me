"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <>
      <Wrapper className={`flex min-h-[calc(100dvh-48px)] items-center mix-blend-multiply`}>
        {/* 3D Group Container */}
        <section className={`w-full`}>
          <div className={`flex justify-between`}>
            <p className={`font-mono text-sm/2 font-black`}>13:00</p>
          </div>
          <section className={`max-w-(--breakpoint-md)`}>
            {/* Name sections */}
            <div className={``}>
              <div className="cc-border relative capitalize">
                <h1
                  className={cn(
                    `absolute top-[1rem] left-[5rem] text-5xl font-black text-balance mix-blend-multiply lg:top-[-1.5rem] lg:text-[10rem]/40`,
                  )}
                >
                  Frontend
                </h1>
                <h1 className={cn(`text-5xl font-black text-balance mix-blend-multiply lg:text-[10rem]/40`)}>
                  <h6 className={`text-foreground relative text-5xl font-black`}>The</h6>
                  Developer
                </h1>
              </div>
              <div className="cc-border">
                <p className={`py-2 font-medium`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ipsa blanditiis, voluptates quasi a
                  veniam repellat nisi necessitatibus omnis cupiditate rem consectetur hic, non sunt. Explicabo fuga
                  itaque molestiae officia!
                </p>
              </div>
            </div>
            <section className={`cc-border-down flex items-start divide-x`}>
              <p className={`p-2 pl-0 font-medium`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex magnam corrupti cumque quos adipisci
                iure. Quo veritatis provident consectetur rerum, atque illo itaque. Eius tenetur dignissimos incidunt
                asperiores nihil.
              </p>
              <p className={`p-2 pr-0 font-medium`}>
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
