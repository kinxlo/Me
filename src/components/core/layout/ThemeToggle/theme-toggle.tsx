"use client";

import MainButton from "@/components/shared/button";
import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <MainButton
      variant="default"
      size="icon"
      isIconOnly
      className="group/toggle size-8 bg-transparent"
      onClick={toggleTheme}
      icon={<IconBrightness />}
    />
  );
}
