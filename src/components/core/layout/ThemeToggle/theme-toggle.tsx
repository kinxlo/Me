"use client";

import MainButton from "@/components/shared/button";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <MainButton
      variant="primary"
      size="icon"
      isIconOnly
      className="group/toggle text-primary size-8 bg-transparent"
      onClick={toggleTheme}
      icon={<Sun />}
    />
  );
}
