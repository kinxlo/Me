import { CheckCircle } from "lucide-react";

import { PlainCard } from "./plain-card";

export const BusinessCard = () => {
  return (
    <PlainCard className="space-y-8 rounded-none p-5 mix-blend-multiply lg:p-10">
      {/* Name & Role */}
      <section className="space-y-4">
        <h3 className="text-primary text-2xl lg:text-5xl">Ifijeh Kingsley Solomon</h3>
        <p className="">Front-End Engineer at TSA, with an interest in Backend engineering, and System architecture.</p>
      </section>

      {/* Experience & Resume */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-primary text-xl font-black tracking-tighter lg:text-3xl">~3 Years Experience</h3>
        </div>
        <p className="">
          I enjoy building interfaces that are both beautiful and interactive, bringing ideas to completion in a way
          that looks great, feels smooth, and works well for everyone and every devices too.
        </p>
      </section>

      {/* Highlights */}
      <section className="space-y-4">
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold">Accessibility-first approach</span> — ensuring
            interfaces meet web standards and offer inclusive experiences.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold">Versatile background</span> — from agencies and
            startups to corporate teams, I’ve built software across diverse environments.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold">Mentorship [Mentor]</span> — Guiding less
            experienced developers through structured internship programs, helping them grow into confident, impactful
            team members.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold">Mentorship [Mentee]</span> — Still benefiting
            from thoughtful guidance from more experienced Engineers and Designers, shaping how I mentor others today.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CheckCircle size={20} className="text-success mt-1" />
          </div>
          <p>
            <span className="text-primary font-head text-lg font-bold">Open Source</span> — Contributed to and
            maintained community-driven projects, collaborating in public and learning from diverse engineering
            perspectives.
          </p>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="text-muted-foreground font-sea pt-2 text-xl lg:text-2xl">
        <p>
          Outside of work, you’ll find me reading ( its not code ) , hanging out with the &rdquo;homies&rdquo;, or
          playing video games.
        </p>
      </section>
    </PlainCard>
  );
};
