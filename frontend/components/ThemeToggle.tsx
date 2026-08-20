"use client";

import { useTheme } from "@/app/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-card bg-surface text-foreground px-4 py-2 shadow-soft"
    >
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}