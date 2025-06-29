import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center space-y-4 text-sm">
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="mailto:reddy@example.com"
            className="hover:text-black dark:hover:text-white transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Text */}
        <p className="text-center">
          © {new Date().getFullYear()} Reddy’s Portfolio. All rights reserved.
        </p>

        <p className="text-center text-xs text-gray-400 dark:text-gray-600">
          Built with ❤️ by KMK
        </p>
      </div>
    </footer>
  );
};

export default Footer;
