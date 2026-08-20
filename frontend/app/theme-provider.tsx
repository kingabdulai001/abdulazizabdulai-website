"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [hasReadStorage, setHasReadStorage] = useState(false);

  // Step 1: read the saved preference ONCE on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    setTheme(stored === "light" ? "light" : "dark");
    setHasReadStorage(true);
  }, []);

  // Step 2: apply + save theme, but ONLY after we've read storage first
  useEffect(() => {
    if (!hasReadStorage) return;

    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme, hasReadStorage]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}