"use client";

import {
  ArrowLeft,
  Terminal,
  FolderTree,
  Folder,
  FileText,
  FileCode,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export interface Step {
  title: string;
  desc: string;
  cmd: string;
}

export interface FolderItem {
  type: "folder" | "file" | "code";
  name: string;
  indent: number;
  muted?: boolean;
  desc?: string;
}

interface TechPageProps {
  name: string;
  icon: ReactNode;
  iconBg?: string;
  description: string;
  tags: string[];
  steps: Step[];
  folderStructure?: FolderItem[];
  nextHref?: string;
  backHref?: string;
  middleHref?: string;
}

const TechPage = ({
  name,
  icon,
  iconBg = "bg-slate-950",
  description,
  tags,
  steps,
  folderStructure,
  nextHref,
  backHref,
  middleHref,
}: TechPageProps) => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        {/* Icon & Description */}
        <section className="flex flex-col items-center text-center gap-4 sm:gap-6">
          <div
            className={`rounded-2xl p-6 sm:p-8 bg-gray-800 border border-white-500 ${iconBg}`}
          >
            {icon}
          </div>
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-indigo-900 animate-gradient">
              {name}
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl leading-relaxed">
              {description}
            </p>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-500 border border-none px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-slate-500/20">
              <Terminal size={16} className="text-black-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-indigo-900 animate-gradient">Getting Started</h3>
          </div>
          <ol className="space-y-3 sm:space-y-4">
            {steps.map((step, i) => (
              <li
                key={i}
                className="rounded-xl border border-gray-700 bg-slate-900 p-3 sm:p-5 space-y-1 sm:space-y-2"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-slate-500/20 text-xs sm:text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="space-y-1 flex-1">
                    <p className="font-semibold text-sm sm:text-base">{step.title}</p>
                    <p className="text-xs sm:text-sm text-gray-300">{step.desc}</p>
                    <code className="mt-1 sm:mt-2 block rounded-lg bg-gray-800 px-3 py-2 sm:px-4 sm:py-2.5 font-mono text-xs sm:text-sm text-white">
                      $ {step.cmd}
                    </code>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Optional Folder Structure */}
        {folderStructure && folderStructure.length > 0 && (
          <section className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-slate-500/20">
                <FolderTree size={16} className="text-white-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-indigo-900 animate-gradient">Folder Structure</h3>
            </div>
            <div className="rounded-xl border border-gray-700 bg-slate-900 p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base">
              {folderStructure.map((item, i) => {
                const Icon =
                  item.type === "folder"
                    ? Folder
                    : item.type === "code"
                      ? FileCode
                      : FileText;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2 py-1 ${
                      item.muted ? "text-gray-500" : "text-white"
                    }`}
                    style={{ paddingLeft: `${item.indent * 1.25}rem` }}
                  >
                    <Icon
                      size={14}
                      className={
                        item.type === "folder"
                          ? "text-white-500"
                          : "text-gray-300"
                      }
                    />
                    <span className="truncate">{item.name}</span>
                    {item.desc && (
                      <span className="text-xs text-gray-400 ml-auto hidden sm:inline">
                        {item.desc}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 ">
          {backHref && (
            <button
              onClick={() => router.push(backHref)}
              className="flex items-center gap-2 rounded-lg border border-gray-700 bg-slate-500/20 px-4 py-2 text-sm font-medium text-white  bg-linear-to-r from-indigo-500 via-violet-500 to-indigo-900 animate-gradient hover:from-blue-800 hover:to-purple-700 w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          )}

          {middleHref && (
            <button
              onClick={() => router.push(middleHref)}
              className="flex items-center gap-2 rounded-lg border border-gray-700 bg-slate-500/20 px-4 py-2 text-sm font-medium text-white  bg-linear-to-r from-indigo-500 via-violet-500 to-indigo-900 animate-gradient hover:from-blue-800 hover:to-purple-700 w-full sm:w-auto justify-center"
            >
              Back to Home
            </button>
          )}

          {nextHref && (
            <button
              onClick={() => router.push(nextHref)}
              className="flex items-center gap-2 rounded-lg border border-gray-700 bg-slate-500/20 px-4 py-2 text-sm font-medium text-white  bg-linear-to-r from-indigo-500 via-violet-500 to-indigo-900 animate-gradient hover:from-blue-800 hover:to-purple-700 w-full sm:w-auto justify-center"
            >
              Next
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default TechPage;