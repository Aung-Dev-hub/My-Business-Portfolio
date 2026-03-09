"use client";

import TechPage from "@/components/skills/skillinfo/TechPage";
import { DiJavascript } from "react-icons/di";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-yellow-400">
    <DiJavascript className="w-20 h-20" />
  </div>
);

const JavaScriptInfo = () => (
  <TechPage
    name="JavaScript"
    icon={<Icon />}
    iconBg="hsl(45 5% 15%)"
    description="The programming language of the web. JavaScript enables interactive web pages, runs in every browser, and powers both frontend and backend development through Node.js."
    tags={[
      "Dynamic Typing",
      "Event-Driven",
      "Prototype-Based",
      "First-Class Functions",
      "Async/Await",
    ]}
    steps={[
      {
        title: "Install Node.js",
        desc: "Download Node.js from nodejs.org to run JavaScript outside the browser.",
        cmd: "# Visit https://nodejs.org and download LTS",
      },
      {
        title: "Verify installation",
        desc: "Check that Node.js and npm are installed correctly.",
        cmd: "node --version && npm --version",
      },
      {
        title: "Create a project",
        desc: "Initialize a new JavaScript project with a package.json.",
        cmd: "npm init -y",
      },
      {
        title: "Create an entry file",
        desc: "Create your first JavaScript file.",
        cmd: 'echo "console.log(\\"Hello, JavaScript!\\")" > index.js',
      },
      {
        title: "Run your code",
        desc: "Execute JavaScript files with Node.js.",
        cmd: "node index.js",
      },
    ]}
    folderStructure={[
      { type: "folder", name: "my-project/", indent: 0 },
      { type: "folder", name: "node_modules/", indent: 1, muted: true },
      { type: "folder", name: "src/", indent: 1 },
      { type: "code", name: "index.js", indent: 2, desc: "Entry point" },
      { type: "code", name: "utils.js", indent: 2, desc: "Utility functions" },
      { type: "folder", name: "lib/", indent: 2, desc: "Libraries" },
      { type: "file", name: "package.json", indent: 1, desc: "Dependencies & scripts" },
      { type: "file", name: ".gitignore", indent: 1 },
    ]}
    nextHref="/skills/react"
    middleHref="/#skills" 
    backHref="/skills/aws" 
  />
);

export default JavaScriptInfo;
