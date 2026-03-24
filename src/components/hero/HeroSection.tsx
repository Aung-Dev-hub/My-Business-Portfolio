"use client";
import AnimatedIntro from "./AnimatedIntro";
import LinkButton from "@/components/general/LinkButton";
import { LuArrowRight } from "react-icons/lu";
import Particles from "./Particle";
import { heroData } from "@/data";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen relative flex justify-center items-center overflow-hidden flex-col"
    >
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="absolute z-10 flex flex-col items-center mt-29">
        {/* glowing image */}
        <div className="w-37.5 h-37.5 relative" data-aos="fade-up">
          <div className="absolute inset-0 rounded-full bg-linear-to-r  from-indigo-500 via-violet-500 to-indigo-900 animate-gradient blur-lg animate-pulse opacity-50"></div>
          <Image
            src="/images/Aung.png"
            alt="image"
            className="rounded-full object-cover object-top"
            fill
          />
        </div> 
        {/* content */}
        <div className="relative z-10 text-center">
          {/* sub title 
          <div className="sm:mb-6" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-sm text-muted-foreground dark:text-gray-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {heroData.status}
            </span>
          </div> */}
          {/* title */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-6 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r  from-indigo-500 via-violet-500 to-indigo-900 animate-gradient"
          >
            {heroData.title}
          </h1>
          <AnimatedIntro />

          <p
            className="text-base sm:text-md md:text-md lg:text-md max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-15 sm:mb-8 md:mb-10 tracking-wide bg-clip-text text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heroData.description}
          </p>

          <LinkButton 
            href="#projects"
            text="View"
            icon={LuArrowRight}
            iconPosition={"right"}
            rounded={true}
            download={false}
            aosType={"fade-up"}
            aosDelay={600}
            animate
          />
        </div>
      </div>
    </section>
  );
}
