import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { File } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <Wrapper className={`cc-3d-group`}>
        {/* 3D Group Container */}
        <div className="">
          {/* Welcome text */}
          <div className="cc-border-down text-accent mb-5 flex min-h-24 items-end font-mono text-xl/5 tracking-wider uppercase">
            <span>Welcome,</span>
          </div>

          {/* Name sections */}
          <div className="cc-border-down font-black uppercase">
            <h1 className="cc-3d-item cc-border-down text-5xl/8.5 sm:text-9xl sm:leading-17 xl:leading-20">Ifijeh</h1>
            <h1 className="cc-3d-item cc-border-down text-5xl/8.5 sm:text-9xl sm:leading-17 xl:leading-20">Kingsley</h1>
            <h1 className="cc-3d-item cc-border-down text-5xl/8.5 sm:text-9xl sm:leading-17 xl:leading-20">Solomon.</h1>
          </div>

          {/* Job title */}
          <div className="cc-border-down text-accent flex min-h-10 items-end font-mono text-2xl/5 tracking-wider uppercase">
            <span>{">"} Software Developer && Instructor</span>
          </div>

          {/* Button section - marked as flat to prevent distortion */}
          <section className="mt-5 space-y-10">
            <div className="cc-border">
              <MainButton isLeftIconVisible icon={<File />} variant="secondary">
                View my resume
              </MainButton>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};
