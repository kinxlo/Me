import { cn } from "@/lib/utils";
import { FC } from "react";

interface DottedCardProperties extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const PlainCard: FC<DottedCardProperties> = ({ children, className }) => {
  return (
    <div className={cn(`text-high-grey-II bg-accent relative inset-0 space-y-2 rounded-2xl font-mono`, className)}>
      {children}
    </div>
  );
};
