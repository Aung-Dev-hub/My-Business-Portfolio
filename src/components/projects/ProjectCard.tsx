import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  imagePath: string;
  title: string;
  description: string;
  techStack?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  imagePath,
  title,
  description,
  techStack = [],
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className=" p-4 transition-transform duration-300 ">
      {/* Project Image */}
      <Image
        src={imagePath}
        alt={"project-image"}
        width={600}
        height={600}
        className="rounded-lg"
      />

      {/* Title */}
      <p className="my-4 text-xl sm:text-2xl font-semibold text-gray-200">
        {title}
      </p>

      {/* Description */}
      <p className="font-medium text-gray-400">{description}</p>

      {/* Tech Stack Badges */}
      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full transition-all duration-300 transform cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-linear-to-r hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-2 mr-13 font-medium shadow-lg transition-all transform hover:scale-105  from-indigo-500 via-violet-500 to-indigo-900 animate-gradient"
          >
            <FaExternalLinkAlt className="text-sm" /> Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full text-white px-8 py-2 font-medium shadow-lg transition-all transform hover:scale-105 bg-linear-to-r  to-indigo-900 animate-gradient"
          >
            <FaGithub className="text-sm" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}
