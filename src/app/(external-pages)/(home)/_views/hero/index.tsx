"use client";

import MainButton from "@/components/shared/button";

export const Hero = () => {
  return (
    <section className={`mix-blend-multiply`}>
      {/* 3D Group Container */}
      <section className={`max-w-(--breakpoint-md)`}>
        {/* Name sections */}
        <div>
          <h1 className="cc-border-down text-primary shadow-primary/50 relative flex w-full origin-bottom-left items-end capitalize [text-shadow:2px_2px_4px_var(--tw-shadow-color)]">
            <span className="xs:text-[15rem]/[10rem] text-[10rem]/[7rem] lg:text-[20rem]/[13rem]">D</span>
            <div className="xs:scale-90 scale-75 transform-gpu sm:scale-95 lg:scale-100">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Frontend</p>
              <hr />
              <p className="text-4xl lowercase sm:text-5xl md:text-6xl lg:text-7xl">eveloper.</p>
            </div>
          </h1>

          {/* Rest of your existing code remains exactly the same */}
          <div className="cc-border">
            <p className={`font-sea py-2 indent-[2rem] text-xl/4 font-medium lg:text-2xl/6`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ipsa blanditiis, voluptates quasi a
              veniam repellat nisi necessitatibus omnis cupiditate rem consectetur hic, non sunt. Explicabo fuga itaque
              molestiae officia!
            </p>
          </div>
        </div>
        <section className={`cc-border-down font-sea flex items-start divide-x indent-[2rem] text-xl/4 lg:text-2xl/6`}>
          <p className={`p-4 pl-0 font-medium`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex magnam corrupti cumque quos adipisci
            iure. Quo veritatis provident consectetur rerum, atque illo itaque. Eius tenetur dignissimos incidunt
            asperiores nihil.
          </p>
          <p className={`p-4 pr-0 font-medium`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam inventore explicabo eligendi. Totam ab
            quis porro inventore dicta? Omnis aspernatur dolore ratione molestiae sed unde neque fugiat id minima
            deleniti!
          </p>
        </section>
      </section>
      <MainButton
        href={`/`}
        variant={`link`}
        className={`text-primary font-sea xl:bottom fixed bottom-[10%] left-[5%] rotate-30 rounded-full px-8 py-4 text-2xl xl:left-[20rem]`}
      >
        View Resume
      </MainButton>
    </section>
  );
};
