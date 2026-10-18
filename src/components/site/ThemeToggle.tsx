"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const dark = mounted ? resolvedTheme === "dark" : true;
  return (
    <button type="button" onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-9 place-items-center rounded-full text-dim transition-colors hover:bg-card-2 hover:text-foreground">
      {dark ? <Sun className="size-[17px]" /> : <Moon className="size-[17px]" />}
    </button>
  );
}
