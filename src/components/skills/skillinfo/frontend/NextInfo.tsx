"use client";

import TechPage from "@/components/skills/skillinfo/TechPage";
import { RiNextjsFill } from "react-icons/ri";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-orange-400">
    <RiNextjsFill className="w-20 h-20" />
  </div>
);

export default function NextInfo() {
  return (
    <TechPage
      name="Next"
      icon={<Icon />}
      iconBg="hsl(220 25% 12%)"
      description="The React framework for production. Next.js provides server-side rendering, static site generation, API routes, and file-based routing out of the box, making it the go-to choice for production React apps."
      tags={[
        "SSR",
        "Static Generation",
        "API Routes",
        "File-Based Routing",
        "Image Optimization",
      ]}
      steps={[
        {
          title: "Create a Next.js app",
          desc: "Use create-next-app to scaffold a new project.",
          cmd: "npx create-next-app@latest my-app",
        },
        {
          title: "Navigate to project",
          desc: "Move into the project directory.",
          cmd: "cd my-app",
        },
        {
          title: "Start dev server",
          desc: "Launch the development server with hot reload.",
          cmd: "npm run dev",
        },
        {
          title: "Open in browser",
          desc: "Visit your app at localhost:3000.",
          cmd: "# Open http://localhost:3000",
        },
        {
          title: "Build for production",
          desc: "Create an optimized production build.",
          cmd: "npm run build",
        },
      ]}
      folderStructure={[
        { type: "folder", name: "my-app/", indent: 0 },
        { type: "folder", name: "app/", indent: 1, desc: "App Router" },
        { type: "code", name: "layout.tsx", indent: 2, desc: "Root layout" },
        { type: "code", name: "page.tsx", indent: 2, desc: "Home page" },
        { type: "folder", name: "api/", indent: 2, desc: "API routes" },
        { type: "folder", name: "public/", indent: 1, desc: "Static files" },
        { type: "folder", name: "components/", indent: 1, desc: "Reusable UI" },
        {
          type: "file",
          name: "next.config.js",
          indent: 1,
          desc: "Next.js config",
        },
        { type: "file", name: "package.json", indent: 1, desc: "Dependencies" },
      ]}
      nextHref="/skills/javascript"
      middleHref="/#skills"
      backHref="/skills/reactnative"
    />
  );
}
