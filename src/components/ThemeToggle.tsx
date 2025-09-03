'use client';

import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm
                 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800
                 focus:outline-none focus:ring-2 focus:ring-slate-700"
      aria-label="Toggle color theme"
      title="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
