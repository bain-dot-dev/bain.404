"use client";

import { GithubIcon, ExternalLink } from "lucide-react";
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
      {/* IMAGE */}
      <div
        className={`col-span-1 lg:col-span-7 relative ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="relative aspect-video w-full rounded-sm overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} Preview`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`col-span-1 lg:col-span-5 flex flex-col gap-4 ${
          reverse
            ? "lg:order-1 items-start"
            : "lg:order-2 items-start sm:items-end"
        }`}
      >
        <motion.p
          variants={itemVariants}
          className="text-customColors-bloodRed dark:text-customColors-brightTurquoise text-sm lg:text-base font-mono tracking-widest"
        >
          Featured Project
        </motion.p>
        <motion.h3
          variants={itemVariants}
          className="text-2xl sm:text-4xl font-semibold text-customColors-darkGray dark:text-customColors-pastelWhite tracking-wide"
        >
          {project.title}
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className={`bg-customColors-woodSmoke/5 dark:bg-customColors-pastelWhite/10 rounded-sm p-4 sm:p-6 ${
            reverse ? "text-left" : "text-left sm:text-right"
          }`}
        >
          <p className="text-sm lg:text-lg text-muted-foreground dark:text-customColors-pastelWhite/80 tracking-tight">
            {project.description}
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`flex gap-4 w-full ${
            reverse ? "justify-start" : "justify-start sm:justify-end"
          }`}
        >
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors"
              aria-label="View source code on GitHub"
            >
              <GithubIcon className="w-5 h-5" />
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
    </motion.div>
  );
}
