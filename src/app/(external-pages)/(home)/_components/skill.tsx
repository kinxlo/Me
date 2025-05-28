import { cn } from "@/lib/utils";

export const Skills = () => {
  return (
    <section className="h-full w-full">
      <section className="relative flex h-full flex-col justify-between">
        <div>
          <h3
            className={cn(
              "text-primary p-2 text-4xl/10 font-black",
              "relative", // Added padding to separate from grid
            )}
          >
            Tools
          </h3>
          <hr className={`absolute w-[100vw]`} />
        </div>

        <div
          className={cn(
            "cc-shades grid h-full w-full grid-cols-2 gap-4 p-4", // Base mobile layout
            "sm:grid-cols-3", // 3 columns on small screens
          )}
        >
          {/* {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "border-border bg-foreground text-background hover:bg-muted border-collapse rounded-2xl", // Base styles
                "flex size-50 w-full items-center justify-center", // Square boxes that grow with container
                "border transition-all duration-300", // Smooth transitions
                "", // Responsive padding
                index % 3 === 1 ? "border-x" : "", // Your border pattern
              )}
            >
              <p className="text-sm sm:text-base md:text-lg">React</p>
            </div>
          ))} */}
        </div>
      </section>
    </section>
  );
};
