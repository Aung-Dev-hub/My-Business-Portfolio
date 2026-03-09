"use client";

import TechPage from "@/components/skills/skillinfo/TechPage";
import { RiTailwindCssFill } from "react-icons/ri";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-indigo-400">
    <RiTailwindCssFill className="w-20 h-20" />
  </div>
);

export default function TailwindCSSInfo() {
  return (
    <TechPage
      name="Tailwind CSS"
      icon={<Icon />}
      iconBg="hsl(220 25% 12%)"
      description="A utility-first CSS framework that lets you build any design directly in your markup. Tailwind provides low-level utility classes that let you create completely custom designs without leaving your HTML."
      tags={[
        "Utility-First",
        "Responsive Design",
        "JIT Compiler",
        "Dark Mode",
        "Customizable",
      ]}
      steps={[
        {
          title: "Install Tailwind CSS",
          desc: "Install Tailwind CSS and its peer dependencies via npm.",
          cmd: "npm install -D tailwindcss postcss autoprefixer",
        },
        {
          title: "Initialize config",
          desc: "Generate tailwind.config.js and postcss.config.js files.",
          cmd: "npx tailwindcss init -p",
        },
        {
          title: "Configure template paths",
          desc: "Add paths to your template files in tailwind.config.js.",
          cmd: "# Edit tailwind.config.js: content: ['./src/**/*.{js,ts,jsx,tsx}']",
        },
        {
          title: "Add Tailwind directives",
          desc: "Add @tailwind directives to your main CSS file.",
          cmd: "# Add to index.css: @tailwind base; @tailwind components; @tailwind utilities;",
        },
        {
          title: "Start using Tailwind",
          desc: "Use utility classes directly in your HTML/JSX.",
          cmd: "npm run dev",
        },
      ]}
      nextHref="/skills/typescript"
      middleHref="/#skills"
      backHref="/skills/react"
    />
  );
}
