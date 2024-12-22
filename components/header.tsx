"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const navItems = [
  { href: "#about", label: "About", number: "01" },
  { href: "#project", label: "Project", number: "02" },
  { href: "#contact", label: "Contact", number: "03" },
];

export default function Header() {
  const { scrollDirection } = useScrollDirection();

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-12 py-6 bg-background/80 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center gap-2">
        <motion.div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center">
          Logo
        </motion.div>
      </div>
      <nav className="flex items-center gap-8">
        {navItems.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Link
              href={item.href}
              className="text-md text-customColors-gray hover:text-customColors-bloodRed transition-colors"
            >
              <span className="text-customColors-bloodRed mr-1 font-mono">
                {item.number}.
              </span>
              {item.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Button
            variant="outline"
            className="flex items-center justify-center text-md h-10 border-customColors-bloodRed text-customColors-bloodRed hover:bg-customColors-bloodRed hover:text-white transition-colors"
          >
            Resume
          </Button>
        </motion.div>
      </nav>
    </motion.header>
  );
}
