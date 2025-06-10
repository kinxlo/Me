import { CheckCircle } from "lucide-react";

import { PlainCard } from "./plain-card";

export const BusinessCard = () => {
  return (
    <PlainCard className="-lg:rotate-2 ml-3 -rotate-1 space-y-8 rounded-none p-5 mix-blend-multiply lg:ml-8 lg:p-10">
      {/* Name & Role */}
      <section className="space-y-4">
        <h3 className="text-primary text-2xl underline lg:text-5xl">Ifijeh Kingsley Solomon</h3>
        <p className="font-sea text-2xl text-black/80">
          Front-End Engineer at TSA, with an interest in Backend engineering, and System architecture.
        </p>
      </section>

      {/* Experience & Resume */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-black tracking-tighter text-black lg:text-3xl">~4 Years Experience</h3>
        </div>
        <p className="font-sea text-2xl text-black/80">
          I enjoy building interfaces that are both beautiful and interactive, bringing ideas to completion in a way
          that looks great, feels smooth, and works well for everyone and every devices too.
        </p>
      </section>

      {/* Highlights */}
      <section className="font-sea space-y-10 text-xl text-black/80">
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold underline">Accessibility-first approach</span> —
            Ensuring interfaces meet web standards and offer inclusive experiences.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold underline">Versatile background</span> — From
            agencies and startups to corporate teams, I’ve built software across diverse environments.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold underline">Mentorship [Mentor]</span> — Guiding
            less experienced developers through structured internship programs, helping them grow into confident,
            impactful team members.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold underline">Mentorship [Mentee]</span> — Still
            benefiting from thoughtful guidance from more experienced Engineers and Designers, shaping how I mentor
            others today.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold underline">Open Source</span> — Contributed to and
            maintained community-driven projects, collaborating in public and learning from diverse engineering
            perspectives.
          </p>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="font-sea pt-2 text-xl text-black/50">
        <p>
          Outside of work, you’ll find me reading ( its not code ) , hanging out with the &rdquo;homies&rdquo;, or
          playing video games.
        </p>
      </section>
    </PlainCard>
  );
};
