"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
type Variant = "blue-core" | "crimson-tactical" | "neo-console";

interface ThemeContextType {
  theme: Theme;
  variant: Variant;
  toggleTheme: () => void;
  setVariant: (variant: Variant) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [variant, setVariantState] = useState<Variant>("blue-core");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("kadex-theme") as Theme;
    const savedVariant = localStorage.getItem("kadex-variant") as Variant;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    
    const initialTheme = savedTheme || systemTheme;
    const initialVariant = savedVariant || "blue-core";

    setTheme(initialTheme);
    setVariantState(initialVariant);

    document.documentElement.setAttribute("data-theme", initialTheme);
    document.documentElement.setAttribute("data-variant", initialVariant);
    
    // Legacy support for accent attribute if needed by CSS
    if (initialVariant === "crimson-tactical") {
      document.documentElement.setAttribute("data-accent", "crimson");
    } else {
      document.documentElement.removeAttribute("data-accent");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("kadex-theme", newTheme);
  };

  const setVariant = (newVariant: Variant) => {
    setVariantState(newVariant);
    document.documentElement.setAttribute("data-variant", newVariant);
    localStorage.setItem("kadex-variant", newVariant);
    
    // Set data-accent for backward compatibility with crimson tokens
    if (newVariant === "crimson-tactical") {
      document.documentElement.setAttribute("data-accent", "crimson");
    } else {
      document.documentElement.removeAttribute("data-accent");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, variant, toggleTheme, setVariant }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
