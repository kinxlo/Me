"use client";

import { Wrapper } from "@/components/core/layout/wrapper";

// import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <>
      <Wrapper className={`z-[-1] flex min-h-[calc(100dvh-48px)] items-center mix-blend-multiply`}>
        {/* 3D Group Container */}
        <section className={`w-full`}>
          <section className={`max-w-(--breakpoint-md)`}>
            {/* Name sections */}
            <div className={``}>
              <h1 className="cc-border-down text-primary shadow-primary/50 relative flex origin-bottom-left scale-50 items-end capitalize [text-shadow:2px_2px_4px_var(--tw-shadow-color)] lg:scale-100">
                <span className={`text-[20rem]/[13rem]`}>D</span>
                <div>
                  <p className={`text-7xl`}>Frontend</p>
                  <hr />
                  <p className={`text-7xl lowercase`}>eveloper.</p>
                </div>
              </h1>

              <div className="cc-border">
                <p className={`font-old py-2 font-medium`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ipsa blanditiis, voluptates quasi a
                  veniam repellat nisi necessitatibus omnis cupiditate rem consectetur hic, non sunt. Explicabo fuga
                  itaque molestiae officia!
                </p>
              </div>
            </div>
            <section className={`cc-border-down flex items-start divide-x text-sm`}>
              <p className={`font-old p-2 pl-0 font-medium`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex magnam corrupti cumque quos adipisci
                iure. Quo veritatis provident consectetur rerum, atque illo itaque. Eius tenetur dignissimos incidunt
                asperiores nihil.
              </p>
              <p className={`font-old p-2 pr-0 font-medium`}>
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
