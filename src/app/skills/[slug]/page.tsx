"use client";

import { useParams } from "next/navigation";
import Particles from "@/components/hero/Particle";
import JavaScriptInfo from "@/components/skills/skillinfo/frontend/JavaScriptInfo";
import ReactInfo from "@/components/skills/skillinfo/frontend/ReactInfo";
import ReactNativeInfo from "@/components/skills/skillinfo/frontend/ReactNativeInfo";
import TailwindCSSInfo from "@/components/skills/skillinfo/frontend/TailwindCSSInfo";
import TypeScriptInfo from "@/components/skills/skillinfo/frontend/TypeScriptInfo";
import NextInfo from "@/components/skills/skillinfo/frontend/NextInfo";
import AWSInfo from "@/components/skills/skillinfo/tools/AwsInfo";
import Python from "@/components/skills/skillinfo/backend/Python";
import MongoDB from "@/components/skills/skillinfo/backend/MongoDB";
import Node from "@/components/skills/skillinfo/backend/node";
import Express from "@/components/skills/skillinfo/backend/Express";
import Php from "@/components/skills/skillinfo/backend/Php";
import PostMySql from "@/components/skills/skillinfo/backend/PostMySql";
import Git from "@/components/skills/skillinfo/tools/Git";
import Figma from "@/components/skills/skillinfo/tools/Figma";
import Postman from "@/components/skills/skillinfo/tools/Postman";
import Vercel from "@/components/skills/skillinfo/tools/Vercel";
import PowerApps from "@/components/skills/skillinfo/tools/PowerApps";


const skillComponents: Record<string, React.FC> = {
  javascript: JavaScriptInfo,
  react: ReactInfo,
  reactnative: ReactNativeInfo,
  tailwindcss: TailwindCSSInfo,
  typescript: TypeScriptInfo,
  next: NextInfo,
  python: Python,
  mongodb: MongoDB,
  node: Node,
  express: Express,
  php: Php,
  postmysql: PostMySql,
  git: Git,
  figma: Figma,
  postman: Postman,
  vercel: Vercel,
  powerapps: PowerApps,
  aws: AWSInfo,
};

export default function Page() {
  const params = useParams();
  let slug = params.slug;

  // Ensure slug is a string
  if (Array.isArray(slug)) {
    slug = slug[0]; // Take the first segment if it's an array
  }

  const SkillComponent = slug ? skillComponents[slug.toLowerCase()] : undefined;

  if (!SkillComponent) {
    return <div className="p-10 text-center text-red-500">Skill not found</div>;
  }

  return (
    <>
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={120}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={80}
        />
      </div>

      <SkillComponent />
    </>
  );
}