import { cn } from "@/lib/utils";

export const Skills = ({ className }: { className?: string }) => {
  return (
    <section className={cn(className)}>
      <h6 className={`text-primary underline`}>Aquired Skills so far:</h6>
      <section className={`flex gap-1 text-xl font-light text-black`}>
        <div>
          <h6>Frontend</h6>
          <p>-Next.js</p>
          <p>-React.js</p>
          <p>-Vue.js</p>
          <p>-Typescript</p>
          <p>-Javascript</p>
        </div>
        <div>
          <h6>Backend</h6>
          <p>-Java</p>
          <p>-Node.js</p>
        </div>
      </section>
    </section>
  );
};
