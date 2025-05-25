import { cn } from "@/lib/utils";
import { FC } from "react";

interface DottedCardProperties extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const PlainCard: FC<DottedCardProperties> = ({ children, className }) => {
  return (
    <div className={cn(`bg-background border-foreground/50 overflow-hidden rounded-2xl border-2`, className)}>
      {children}
    </div>
  );
};
