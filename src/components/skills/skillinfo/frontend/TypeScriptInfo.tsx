"use client";

import TechPage from "@/components/skills/skillinfo/TechPage";
import { SiTypescript } from "react-icons/si";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-indigo-500">
    <SiTypescript className="w-20 h-20" />
  </div>
);

export default function TypeScriptInfo() {
  return (
    <TechPage
      name="TypeScript"
      icon={<Icon />}
      iconBg="hsl(220 25% 12%)"
      description="A strongly typed superset of JavaScript that compiles to plain JavaScript. TypeScript adds optional static typing, classes, and interfaces, helping you catch errors early and write more maintainable code."
      tags={[
        "Static Typing",
        "Type Inference",
        "Interfaces",
        "Generics",
        "ES6+ Features",
      ]}
      steps={[
        {
          title: "Install TypeScript",
          desc: "Install TypeScript globally or as a dev dependency.",
          cmd: "npm install -D typescript",
        },
        {
          title: "Initialize config",
          desc: "Generate a tsconfig.json with default settings.",
          cmd: "npx tsc --init",
        },
        {
          title: "Create a TypeScript file",
          desc: "Write your first .ts file with type annotations.",
          cmd: "echo 'const greet = (name: string): string => `Hello, ${name}!`; console.log(greet(\"World\"));' > index.ts",
        },
        {
          title: "Compile TypeScript",
          desc: "Compile .ts files to JavaScript.",
          cmd: "npx tsc",
        },
        {
          title: "Run the output",
          desc: "Execute the compiled JavaScript file.",
          cmd: "node index.js",
        },
      ]}
      folderStructure={[
        { type: "folder", name: "my-ts-project/", indent: 0 },
        { type: "folder", name: "src/", indent: 1 },
        { type: "code", name: "index.ts", indent: 2, desc: "Entry point" },
        { type: "code", name: "types.ts", indent: 2, desc: "Type definitions" },
        { type: "folder", name: "dist/", indent: 1, desc: "Compiled output" },
        { type: "file", name: "tsconfig.json", indent: 1, desc: "TS config" },
        { type: "file", name: "package.json", indent: 1, desc: "Dependencies" },
      ]}
      nextHref="/skills/reactnative"
      middleHref="/#skills"
      backHref="/skills/typescript"
    />
  );
}
