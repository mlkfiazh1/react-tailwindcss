import { useState } from "react";
import ThemeToogle from "./ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold text-slate-900 dark:text-slate-100"
        >
          YourName.dev
        </a>
        <ul className="hidden hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-md bg-brand-600 px-3 py-2 text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600"
            >
              Contact
            </a>
          </li>
        </ul>
        <ThemeToogle />
      </nav>
    </header>
  );
}

export default Navbar;
