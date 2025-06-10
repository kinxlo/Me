import { cn } from "@/lib/utils";
import { FC } from "react";

interface DottedCardProperties extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const PlainCard: FC<DottedCardProperties> = ({ children, className }) => {
  return <div className={cn(`overflow-hidden rounded-2xl`, className)}>{children}</div>;
};
