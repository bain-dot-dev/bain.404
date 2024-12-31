"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectCard } from "./projectCard";
import { projects } from "@/data/projects";

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
      id="project"
      ref={sectionRef}
      className="h-auto  flex items-center justify-center px-4 lg:px-12 py-12 lg:py-24 mb-32 lg:mb-56"
    >
      <motion.div
        className="w-full max-w-5xl space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <h2 className="text-2xl lg:text-4xl font-semibold text-customColors-darkGray dark:text-customColors-pastelWhite">
            <span className="text-lg lg:text-2xl text-customColors-bloodRed dark:text-customColors-brightTurquoise font-mono">
              02.
            </span>{" "}
            Project
          </h2>
          <div className="h-[1px] w-[420px] bg-border"></div>
        </motion.div>

        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            reverse={index % 2 !== 0}
          />
        ))}
      </motion.div>
    </section>
  );
}
