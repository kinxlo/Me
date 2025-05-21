import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { Me } from "@/components/shared/me";
import { File } from "lucide-react";

export const Hero = () => {
  return (
    <Wrapper>
      <Me />
      <div
        className={`cc-border-down text-high-grey-III flex min-h-24 items-end font-mono text-xl/5 tracking-wider uppercase`}
      >
        <span>Welcome,</span>
      </div>
      <div className={`mt-4 font-black uppercase`}>
        <h1 className={`cc-border-down text-5xl/8.5 sm:text-9xl sm:leading-17 xl:leading-20`}>Ifijeh</h1>
        <h1 className={`cc-border-down text-5xl/8.5 sm:text-9xl sm:leading-17 xl:leading-20`}>Kingsley</h1>
        <h1 className={`cc-border-down text-5xl/8.5 sm:text-9xl sm:leading-17 xl:leading-20`}>Solomon.</h1>
      </div>
      <div
        className={`cc-border-down text-high-grey-III flex min-h-10 items-end font-mono text-xl/5 tracking-wider uppercase`}
      >
        <span>{">"} Software Developer && Instructor</span>
      </div>
      <section className={`mt-5 space-y-10`}>
        <div className={`cc-border`}>
          <MainButton isLeftIconVisible icon={<File />} variant={`accent`} className={``}>
            View my resume
          </MainButton>
        </div>
      </section>
    </Wrapper>
  );
};
