"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SocialsOnSide() {
  const [recentlyClicked, setRecentlyClicked] = useState<string | null>(null);

  const handleLinkClick = (linkName: string) => {
    setRecentlyClicked(linkName);
  };

  return (
    <div className="hidden lg:block">
      <motion.div
        className="fixed left-12 bottom-0 flex flex-col gap-6 items-center after:content-[''] after:w-[1px] after:h-32 after:bg-border"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <Link
          href="https://github.com/bain-dot-dev"
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            recentlyClicked === "github"
              ? "text-customColors-bloodRed"
              : "text-muted-foreground"
          } hover:text-customColors-bloodRed transition-all duration-300 transform hover:-translate-y-1`}
          onClick={() => handleLinkClick("github")}
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="http://linkedin.com/in/bain-hansly-cruz/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            recentlyClicked === "linkedin"
              ? "text-customColors-bloodRed"
              : "text-muted-foreground"
          } hover:text-customColors-bloodRed transition-all duration-300 transform hover:-translate-y-1`}
          onClick={() => handleLinkClick("linkedin")}
        >
          <Linkedin className="w-5 h-5" />
        </Link>
      </motion.div>
      <motion.div
        className="fixed right-12 bottom-0 flex flex-col items-center gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <Link
          href="mailto:cruzbanhansly@gmail.com"
          className={`${
            recentlyClicked === "email"
              ? "text-customColors-bloodRed"
              : "text-muted-foreground"
          } text-sm font-mono hover:text-customColors-bloodRed vertical-text transition-all duration-300 transform hover:-translate-y-1`}
          onClick={() => handleLinkClick("email")}
        >
          cruzbainhansly@gmail.com
        </Link>
        <div className="w-[1px] h-32 bg-border"></div>
      </motion.div>
    </div>
  );
}
