"use client";

import TechPage from "@/components/skills/skillinfo/TechPage";
import { SiReact } from "react-icons/si";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-indigo-800">
    <SiReact className="w-20 h-20" />
  </div>
);

export default function ReactInfo() {
  return (
    <TechPage
      name="React"
      icon={<Icon />}
      iconBg="hsl(220 25% 12%)"
      description="A JavaScript library for building user interfaces. React lets you compose complex UIs from small, isolated pieces of code called components .It's maintained by Meta and a community of developers."
      tags={[
        "Component-based",
        "Declarative",
        "Virtual DOM",
        "Unidirectional Data Flow",
        "JSX Syntax",
      ]}
      steps={[
        {
          title: "Install Node.js",
          desc: "Download and install Node.js (v18+) from nodejs.org. This includes npm.",
          cmd: "node --version",
        },
        {
          title: "Create a new React app",
          desc: "Use Vite for a fast, modern setup with React and TypeScript.",
          cmd: "npm create vite@latest my-app -- --template react-ts",
        },
        {
          title: "Navigate to the project",
          desc: "Move into your newly created project directory.",
          cmd: "cd my-app",
        },
        {
          title: "Install dependencies",
          desc: "Install all required packages defined in package.json.",
          cmd: "npm install",
        },
        {
          title: "Start development server",
          desc: "Launch the dev server with hot module replacement.",
          cmd: "npm run dev",
        },
      ]}
      folderStructure={[
        { type: "folder", name: "my-app/", indent: 0 },
        { type: "folder", name: "node_modules/", indent: 1, muted: true },
        { type: "folder", name: "public/", indent: 1 },
        { type: "file", name: "index.html", indent: 2 },
        { type: "folder", name: "src/", indent: 1 },
        { type: "code", name: "App.tsx", indent: 2, desc: "Root component" },
        { type: "code", name: "main.tsx", indent: 2, desc: "Entry point" },
        { type: "file", name: "index.css", indent: 2, desc: "Global styles" },
        { type: "folder", name: "components/", indent: 2, desc: "Reusable UI" },
        { type: "folder", name: "pages/", indent: 2, desc: "Route pages" },
        { type: "folder", name: "hooks/", indent: 2, desc: "Custom hooks" },
        {
          type: "file",
          name: "package.json",
          indent: 1,
          desc: "Dependencies & scripts",
        },
        {
          type: "file",
          name: "tsconfig.json",
          indent: 1,
          desc: "TypeScript config",
        },
        {
          type: "file",
          name: "vite.config.ts",
          indent: 1,
          desc: "Vite config",
        },
      ]}
      nextHref="/skills/tailwindcss"
      middleHref="/#skills" 
      backHref="/skills/javascript"
    />
  );
}
