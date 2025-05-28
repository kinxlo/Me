import MainButton from "@/components/shared/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone } from "lucide-react";

import { PlainCard } from "./plain-card";

export const BusinessCard = () => {
  return (
    <PlainCard className="bg-foreground text-background space-y-8 p-5 mix-blend-multiply lg:p-10">
      <section className={`space-y-4`}>
        <p className={`font-mono text-xs uppercase lg:text-sm`}>Get everything with</p>
        <h3 className={`text-xl lg:text-3xl`}>
          <span className={``}>Ifijeh</span> Kingsley Solomon
        </h3>
      </section>
      <section className={`space-y-4`}>
        <div className={`flex items-center justify-between gap-2`}>
          <p className={`font-mono text-xl font-black tracking-tighter lg:text-3xl`}>~3 Years</p>
          <MainButton variant={`primary`} className={`rounded-full bg-stone-700`}>
            View Resume
          </MainButton>
        </div>
        <p className={`text-xs/4 lg:text-[16px]/6`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit recusandae qui dolore at ullam
          corrupti laborum officiis ducimus? Ratione id quisquam consectetur neque soluta amet ad eveniet ipsa dolorum.
        </p>
      </section>
      <Separator className={`bg-gray-100/10`} />
      <section className={`space-y-4 text-xs/4 lg:text-[16px]/6`}>
        <div className={`flex items-start gap-4`}>
          <span>
            <CheckCircle size={20} className={`text-success`} />
          </span>
          <p>
            <span className={`font-bold text-stone-700`}>Over 500+ UI blocks </span>— everything you need to build
            beautiful marketing sites, application UIs, ecommerce stores, and more.
          </p>
        </div>
        <div className={`flex items-start gap-4`}>
          <span>
            <CheckCircle size={20} className={`text-success`} />
          </span>
          <p>
            <span className={`font-bold text-stone-700`}>Over 500+ UI blocks </span>— everything you need to build
            beautiful marketing sites, application UIs, ecommerce stores, and more.
          </p>
        </div>
        <div className={`flex items-start gap-4`}>
          <span>
            <CheckCircle size={20} className={`text-success`} />
          </span>
          <p>
            <span className={`font-bold text-stone-700`}>Over 500+ UI blocks </span>— everything you need to build
            beautiful marketing sites, application UIs, ecommerce stores, and more.
          </p>
        </div>
      </section>
      <div className={`bg-secondary/20 flex gap-4 rounded-xl p-4 text-xs/4 lg:text-[16px]/6`}>
        <span>
          <Phone size={20} className={`text-success`} />
        </span>
        <p>
          <span className={`font-bold text-stone-700`}>Join 1000+ happy users </span>— our community is growing every
          day, and we can&apos;t wait for you to join us.
        </p>
      </div>
    </PlainCard>
  );
};
