import { cn } from "@/lib/utils";

export const Skills = ({ className }: { className?: string }) => {
  return (
    <section className={cn("skills", className)}>
      <h6 className="text-primary underline">Acquired Skills so far:</h6>
      <section className="flex gap-4 text-xl font-light text-black">
        <div className="flex-1">
          <h6 className="skill mb-2 font-medium">Frontend</h6>
          <p className="skill">- Next.js</p>
          <p className="skill">- React.js</p>
          <p className="skill">- Vue.js</p>
          <p className="skill">- TypeScript</p>
          <p className="skill">- JavaScript</p>
        </div>
        <div className="flex-1">
          <h6 className="skill mb-2 font-medium">Backend</h6>
          <p className="skill">- Java</p>
          <p className="skill">- Node.js</p>
        </div>
      </section>
    </section>
  );
};
