"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div>
      {/* Social Icons for Mobile */}
      <motion.div
        className="sm:hidden flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <Link
          href="https://github.com"
          className="text-muted-foreground hover:text-customColors-bloodRed transition-colors"
        >
          <Github className="w-6 h-6" />
        </Link>
        <Link
          href="https://linkedin.com"
          className="text-muted-foreground hover:text-customColors-bloodRed transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
      </motion.div>

      {/* Footer Content */}
      <footer className="flex flex-col items-center justify-center gap-2 px-4 sm:px-0 py-6 lg:py-8 text-center">
        <p className="text-sm sm:text-base text-muted-foreground">
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground">
          Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
