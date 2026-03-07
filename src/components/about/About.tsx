"use client";

import Header from "@/components/general/Header";
import { highlights, aboutData } from "@/data";
import HeroExperience from "./3D_Model/HeroExperience";


export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 overflow-visible z-10"
    >
      {/* Header */}
      <Header title="About Me" />

      {/* Main Content */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left: 3D HeroExperience */}
        <div className="relative w-full md:w-1/2 z-20" data-aos="fade-right">
          <figure className="w-full h-full">
            <div className="w-full h-125 md:h-150">
              <HeroExperience />
            </div>
          </figure>
        </div>

         {/* Right: Text */}
        <div className="w-full md:w-1/2 space-y-6 text-left z-30" data-aos="fade-left">
          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl ml-5 md:text-4xl lg:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r  from-indigo-500 via-violet-500 to-indigo-900 animate-gradient">
            {aboutData.heading}
          </h3>

          {/* Paragraphs */}
          {aboutData.paragraphs.map((p, idx) => (
            <p key={idx} className="text-white leading-relaxed max-w-lg ml-5">
              {p}
            </p>
          ))}

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 ml-5">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-start gap-3 text-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}