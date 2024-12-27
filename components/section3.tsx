"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section3() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="h-auto bg-customColors-pastelWhite flex flex-col px-6 sm:px-12 py-12 sm:py-24 lg:mb-12 xl:mb-24 mb-40"
    >
      <motion.div
        className="flex-1 flex flex-col items-center justify-center max-w-xl sm:max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p
          variants={itemVariants}
          className="text-customColors-bloodRed text-xl sm:text-3xl mb-2 sm:mb-4 font-mono"
        >
          03. What&apos;s Next?
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-8xl font-bold mb-4 sm:mb-6"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm sm:text-lg mb-8 sm:mb-12 max-w-lg sm:max-w-xl"
        >
          I&apos;m currently open to new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hello, feel free
          to reach out, and I&apos;ll do my best to get back to you!
        </motion.p>
        <motion.div variants={itemVariants}>
          <div className="relative inline-block">
            <div className="absolute rounded-md inset-0 bg-customColors-bloodRed transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            <Button
              variant="outline"
              className="text-sm sm:text-md h-10 sm:h-12 px-6 sm:px-8 relative group border-customColors-bloodRed text-customColors-bloodRed bg-customColors-pastelWhite hover:bg-customColors-pastelWhite hover:text-customColors-bloodRed
                      transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1"
              asChild
            >
              <Link href="mailto:cruzbainhansly@gmail.com">Say Hello</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
