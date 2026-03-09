"use client";

import TechPage from "@/components/skills/skillinfo/TechPage";
import { SiReact } from "react-icons/si";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-indigo-800">
    <SiReact className="w-20 h-20" />
  </div>
);

export default function ReactNativeInfo() {
  return (
    <TechPage
      name="React Native"
      icon={<Icon />}
      iconBg="hsl(220 25% 12%)"
      description="Build native mobile apps for iOS and Android using React. React Native lets you create truly native apps with JavaScript and React, sharing code across platforms while delivering native performance."
      tags={[
        "Cross-Platform",
        "Native Components",
        "Hot Reloading",
        "Expo",
        "Mobile-First",
      ]}
      steps={[
        {
          title: "Install Expo CLI",
          desc: "Expo is the easiest way to get started with React Native.",
          cmd: "npm install -g expo-cli",
        },
        {
          title: "Create a new project",
          desc: "Create a new React Native project using Expo.",
          cmd: "npx create-expo-app my-app",
        },
        {
          title: "Navigate to project",
          desc: "Move into your project directory.",
          cmd: "cd my-app",
        },
        {
          title: "Start the dev server",
          desc: "Launch the development server and scan the QR code with Expo Go.",
          cmd: "npx expo start",
        },
        {
          title: "Run on device",
          desc: "Press 'i' for iOS simulator or 'a' for Android emulator.",
          cmd: "# Press 'i' or 'a' in the terminal",
        },
      ]}
      folderStructure={[
        { type: "folder", name: "my-app/", indent: 0 },
        { type: "folder", name: "node_modules/", indent: 1, muted: true },
        { type: "folder", name: "app/", indent: 1, desc: "Screen routes" },
        { type: "code", name: "index.tsx", indent: 2, desc: "Home screen" },
        { type: "code", name: "_layout.tsx", indent: 2, desc: "Root layout" },
        { type: "folder", name: "assets/", indent: 1, desc: "Images & fonts" },
        { type: "folder", name: "components/", indent: 1, desc: "Reusable UI" },
        { type: "file", name: "app.json", indent: 1, desc: "App config" },
        { type: "file", name: "package.json", indent: 1, desc: "Dependencies" },
      ]}
      nextHref="/skills/next"
      middleHref="/#skills"
      backHref="/skills/typescript"
    />
  );
}
