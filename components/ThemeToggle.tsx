"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-customColors-woodSmoke/10 dark:bg-customColors-pastelWhite/10 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-customColors-bloodRed" />
      ) : (
        <Sun className="w-5 h-5 text-customColors-brightTurquoise" />
      )}
    </button>
  );
}
