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
    <section ref={sectionRef} className="h-1/2 flex flex-col px-12 py-24 mb-40">
      <motion.div
        className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p
          variants={itemVariants}
          className="text-customColors-bloodRed text-3xl mb-4 font-mono"
        >
          03. What&apos;s Next?
        </motion.p>
        <motion.h2 variants={itemVariants} className="text-8xl font-bold mb-6">
          Get In Touch
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg mb-12 max-w-xl"
        >
          I&apos;m currently open to new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hello, feel free
          to reach out, and I&apos;ll do my best to get back to you!
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button
            variant="outline"
            className="border-customColors-bloodRed text-customColors-bloodRed hover:bg-customColors-bloodRed/85 hover:text-white px-8 transition-colors duration-300"
            asChild
          >
            <Link href="mailto:cruzbanhansly@gmail.com">Say Hello</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
