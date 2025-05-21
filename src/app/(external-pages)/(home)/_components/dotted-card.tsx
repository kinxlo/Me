import { cn } from "@/lib/utils";
import { FC } from "react";

interface DottedCardProperties extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const DottedCard: FC<DottedCardProperties> = ({ children, className }) => {
  return (
    <div
      className={cn(
        `text-high-grey-II cc-bg-dotted relative inset-0 max-w-(--breakpoint-md) space-y-2 rounded-2xl font-mono text-2xl`,
        className,
      )}
    >
      {children}
    </div>
  );
};
