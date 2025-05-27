import MainButton from "@/components/shared/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone } from "lucide-react";

import { PlainCard } from "./plain-card";

export const BusinessCard = () => {
  return (
    <PlainCard className="bg-foreground text-background space-y-8 p-10">
      <section className={`space-y-4`}>
        <p className={`font-mono text-sm uppercase`}>Get everything with</p>
        <h3>
          <span className={`text-primary`}>Ifijeh</span> Kingsley Solomon
        </h3>
      </section>
      <section className={`space-y-4`}>
        <div className={`flex items-center justify-between space-y-2`}>
          <p className={`font-mono text-4xl font-black tracking-tighter`}>~3 Years</p>
          <MainButton variant={`primary`} className={`rounded-full`}>
            View Resume
          </MainButton>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit recusandae qui dolore at ullam
          corrupti laborum officiis ducimus? Ratione id quisquam consectetur neque soluta amet ad eveniet ipsa dolorum.
        </p>
      </section>
      <Separator className={`bg-gray-100/10`} />
      <section className={`space-y-4`}>
        <div className={`flex items-start gap-4`}>
          <span>
            <CheckCircle size={20} className={`text-success`} />
          </span>
          <p>
            <span className={`text-primary font-bold`}>Over 500+ UI blocks </span>— everything you need to build
            beautiful marketing sites, application UIs, ecommerce stores, and more.
          </p>
        </div>
        <div className={`flex items-start gap-4`}>
          <span>
            <CheckCircle size={20} className={`text-success`} />
          </span>
          <p>
            <span className={`text-primary font-bold`}>Over 500+ UI blocks </span>— everything you need to build
            beautiful marketing sites, application UIs, ecommerce stores, and more.
          </p>
        </div>
        <div className={`flex items-start gap-4`}>
          <span>
            <CheckCircle size={20} className={`text-success`} />
          </span>
          <p>
            <span className={`text-primary font-bold`}>Over 500+ UI blocks </span>— everything you need to build
            beautiful marketing sites, application UIs, ecommerce stores, and more.
          </p>
        </div>
      </section>
      <div className={`bg-secondary/20 flex gap-4 rounded-xl p-4`}>
        <span>
          <Phone size={20} className={`text-success`} />
        </span>
        <p>
          <span className={`text-success font-bold`}>Join 1000+ happy users </span>— our community is growing every day,
          and we can&apos;t wait for you to join us.
        </p>
      </div>
    </PlainCard>
  );
};
