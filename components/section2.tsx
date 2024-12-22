"use client";

import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section2() {
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
      ref={sectionRef}
      className="h-1/2 flex items-center justify-center px-12 py-24 mb-56"
    >
      <motion.div
        className="w-full max-w-5xl space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <h2 className="text-4xl font-semibold">
            <span className="text-2xl text-customColors-bloodRed font-mono">
              02.
            </span>{" "}
            Project
          </h2>
          <div className="h-[1px] flex-1 bg-border"></div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          variants={itemVariants}
          className="relative grid grid-cols-12 gap-4"
        >
          {/* Image Section */}
          <div className="col-span-7 relative">
            <div className="relative aspect-video w-full">
              <div className="absolute inset-0 bg-muted/80 z-10"></div>
              <Image
                src="/placeholder.svg"
                alt="3R Shane IMS Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-span-5 flex flex-col items-end gap-4">
            <motion.p
              variants={itemVariants}
              className="text-customColors-bloodRed text-md font-mono"
            >
              Featured Project
            </motion.p>
            <motion.h3
              variants={itemVariants}
              className="text-4xl font-semibold"
            >
              3R Shane IMS
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="bg-muted/20 p-6 text-right"
            >
              <p className="text-lg text-muted-foreground">
                An inventory management system with point-of-sale, and purchase
                order (procurement of goods) for rice mill businesses.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-customColors-bloodRed transition-colors"
                aria-label="View source code on GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-customColors-bloodRed transition-colors"
                aria-label="Visit live site"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
