"use client";

import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
  reverse?: boolean;
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-4"
    >
      {/* For non-reverse: Image left (cols 1-7), Content right (cols 8-12) */}
      {/* For reverse: Content left (cols 1-5), Image right (cols 6-12) */}

      {!reverse ? (
        <>
          {/* IMAGE - LEFT SIDE (non-reverse) */}
          <div className="col-span-1 lg:col-span-7 relative">
            <div className="relative aspect-video w-full">
              <div className="absolute inset-0 z-10"></div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} Preview`}
                fill
                className="object-fill w-auto h-auto"
              />
            </div>
          </div>

          {/* CONTENT - RIGHT SIDE (non-reverse) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-start sm:items-end gap-4">
            <motion.p
              variants={itemVariants}
              className="text-customColors-bloodRed dark:text-customColors-brightTurquoise text-sm sm:text-md font-mono"
            >
              Featured Project
            </motion.p>
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-4xl font-semibold text-customColors-darkGray dark:text-customColors-pastelWhite"
            >
              {project.title}
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="bg-customColors-woodSmoke/10 dark:bg-customColors-pastelWhite/10 rounded-sm p-4 sm:p-6 text-left sm:text-right"
            >
              <p className="text-sm lg:text-lg text-muted-foreground dark:text-customColors-pastelWhite/80">
                {project.description}
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-end w-full"
            >
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors"
                  aria-label="View source code on GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors"
                  aria-label="Visit live site"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              )}
            </motion.div>
          </div>
        </>
      ) : (
        <>
          {/* CONTENT - LEFT SIDE (reverse) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-start gap-4">
            <motion.p
              variants={itemVariants}
              className="text-customColors-bloodRed dark:text-customColors-brightTurquoise text-sm sm:text-md font-mono"
            >
              Featured Project
            </motion.p>
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-4xl font-semibold text-customColors-darkGray dark:text-customColors-pastelWhite"
            >
              {project.title}
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="bg-customColors-woodSmoke/10 dark:bg-customColors-pastelWhite/10 rounded-sm p-4 sm:p-6 text-left"
            >
              <p className="text-sm lg:text-lg text-muted-foreground dark:text-customColors-pastelWhite/80">
                {project.description}
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-start w-full"
            >
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors"
                  aria-label="View source code on GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors"
                  aria-label="Visit live site"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              )}
            </motion.div>
          </div>

          {/* IMAGE - RIGHT SIDE (reverse) */}
          <div className="col-span-1 lg:col-span-7 relative">
            <div className="relative aspect-video w-full">
              <div className="absolute inset-0 z-10"></div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} Preview`}
                fill
                className="object-fill w-auto h-auto"
              />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
