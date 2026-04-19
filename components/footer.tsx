"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <motion.div
        className="sm:hidden flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link
          href="https://github.com/bain-dot-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors"
        >
          <Github className="w-6 h-6" />
        </Link>
        <Link
          href="https://linkedin.com/in/bain-hansly-cruz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
      </motion.div>
      <footer className="flex flex-col items-center justify-center gap-2 px-4 sm:px-0 py-6 lg:py-8 text-center text-customColors-gray dark:text-customColors-pastelWhite/50">
        <p className="text-sm sm:text-base text-muted-foreground">
          Designed & Built by{" "}
          <span className="text-customColors-bloodRed dark:text-customColors-brightTurquoise">
            Bain Cruz
          </span>
        </p>
        <p className="text-sm sm:text-base text-muted-foreground">
          Powered by Next.js & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
