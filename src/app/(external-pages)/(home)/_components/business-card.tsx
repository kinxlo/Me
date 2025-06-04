import MainButton from "@/components/shared/button";
import { CheckCircle } from "lucide-react";

import { PlainCard } from "./plain-card";

export const BusinessCard = () => {
  return (
    <PlainCard className="font-sea space-y-8 p-5 mix-blend-multiply lg:p-10">
      <section className={`space-y-4`}>
        {/* <p className={`font-old text-xs uppercase lg:text-sm`}>Get everything with</p> */}
        <h3 className={`text-primary text-2xl lg:text-5xl`}>
          <span className={``}>Ifijeh</span> Kingsley Solomon
        </h3>
      </section>
      <section className={`space-y-4`}>
        <div className={`flex items-center justify-between gap-2`}>
          <h3 className={`text-primary text-xl font-black tracking-tighter lg:text-3xl`}>~3 Years</h3>
          <MainButton
            href={`/`}
            variant={`link`}
            className={`text-primary xl:bottom fixed bottom-[10%] left-[5%] rotate-30 rounded-full px-8 py-4 text-2xl xl:left-[20rem]`}
          >
            View Resume
          </MainButton>
        </div>
        <p className={`text-xl/4 lg:text-2xl/6`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit recusandae qui dolore at ullam
          corrupti laborum officiis ducimus? Ratione id quisquam consectetur neque soluta amet ad eveniet ipsa dolorum.
        </p>
      </section>
      {/* separator */}
      <section className={`space-y-4 text-xl/4 lg:text-2xl/6`}>
        <div className={`flex items-start gap-4`}>
          <span>
            <CheckCircle size={20} className={`text-success`} />
          </span>
          <p>
            <span className={`text-primary font-head text-base font-bold`}>Over 500+ UI blocks </span>— everything you
            need to build beautiful marketing sites, application UIs, ecommerce stores, and more.
          </p>
        </div>
        <div className={`flex items-start gap-4`}>
          <span>
            <CheckCircle size={20} className={`text-success`} />
          </span>
          <p>
            <span className={`text-primary font-head text-base font-bold`}>Over 500+ UI blocks </span>— everything you
            need to build beautiful marketing sites, application UIs, ecommerce stores, and more.
          </p>
        </div>
        <div className={`flex items-start gap-4`}>
          <span>
            <CheckCircle size={20} className={`text-success`} />
          </span>
          <p>
            <span className={`text-primary font-head font-head text-base font-bold`}>Over 500+ UI blocks </span>—
            everything you need to build beautiful marketing sites, application UIs, ecommerce stores, and more.
          </p>
        </div>
      </section>
    </PlainCard>
  );
};
