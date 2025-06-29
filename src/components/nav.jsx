import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Persisted dark mode toggle
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme) return theme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/80 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-black dark:text-white tracking-tight">
          SainathReddy Gangidi
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-12 text-gray-800 dark:text-gray-200 font-medium text-sm tracking-wide">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`/${link.toLowerCase()}`}
                className="hover:text-black dark:hover:text-white transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls: Dark mode + Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 dark:text-gray-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-black px-6 pb-4 pt-2"
          >
            <ul className="flex flex-col space-y-4 text-gray-800 dark:text-gray-200 font-medium text-base">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="block hover:text-black dark:hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
