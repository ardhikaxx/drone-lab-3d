"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Fleet", href: "/" },
    { name: "Technology", href: "/technology" },
    { name: "Enterprise", href: "/enterprise" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 dark:bg-surface/80 dark:border-outline-variant/20">
      <div className="flex justify-between items-center px-mobile-margin md:px-container-padding h-16 md:h-20 max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center group cursor-pointer">
          <div className="relative flex flex-col">
            <span className="font-display-lg text-xl md:text-2xl font-black tracking-[0.3em] text-on-surface uppercase transition-all duration-300 group-hover:tracking-[0.35em]">
              Drone<span className="text-primary dark:text-primary-container">Lab</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary dark:bg-primary-container transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-primary/30 dark:bg-primary-container/30 transition-all duration-700 delay-100 group-hover:w-1/2"></span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body-md text-body-md transition-colors pb-1 border-b-2 ${
                  isActive 
                    ? "text-primary dark:text-primary-container border-primary dark:border-primary-container font-semibold" 
                    : "text-on-surface-variant hover:text-on-surface border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleTheme}
            className="group relative p-2 md:p-2.5 rounded-xl bg-surface-variant/50 hover:bg-primary/10 border border-outline-variant/20 transition-all duration-300 active:scale-95"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center overflow-hidden">
              <span className={`material-symbols-outlined absolute transition-all duration-500 transform text-[20px] md:text-[24px] ${
                theme === "dark" ? "translate-y-0 opacity-100 rotate-0" : "translate-y-8 opacity-0 rotate-90"
              } text-primary-container`}>
                light_mode
              </span>
              <span className={`material-symbols-outlined absolute transition-all duration-500 transform text-[20px] md:text-[24px] ${
                theme === "light" ? "translate-y-0 opacity-100 rotate-0" : "-translate-y-8 opacity-0 -rotate-90"
              } text-primary`}>
                dark_mode
              </span>
            </div>
          </button>
          
          <button className="hidden sm:block bg-on-background text-inverse-on-surface dark:text-inverse-on-surface light:text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-body-md text-sm md:text-body-md font-semibold hover:opacity-80 transition-opacity active:scale-95 duration-200">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/20 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="flex flex-col p-mobile-margin gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-body-md text-body-md transition-colors ${
                pathname === link.href 
                  ? "text-primary font-semibold" 
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="sm:hidden w-full bg-on-background text-inverse-on-surface px-6 py-3 rounded-full font-body-md text-body-md font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
