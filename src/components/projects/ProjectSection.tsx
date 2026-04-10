"use client";

import { useState } from "react";
import Header from "../general/Header";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

export default function ProjectSection() {
  const [filter, setFilter] = useState<"all" | "website" | "mobile">("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="pb-16">
      <Header title="Projects" />

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 my-6 ">
        {["all", "website", "mobile"].map((item) => {
          const isActive = filter === item;
          return (
            <button
              key={item}
              onClick={() => setFilter(item as "all" | "website" | "mobile")}
              className={`
                w-28 px-4 py-2 mb-8 rounded-lg font-semibold transition-all duration-300
                text-white
                ${isActive ? "bg-linear-to-r from-indigo-500 to-purple-500" : "bg-gray-500 text-gray-700"}
                hover:scale-105 hover:brightness-110
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-right"}
          >
            <ProjectCard
              title={project.title}
              imagePath={project.imagePath}
              description={project.description}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
