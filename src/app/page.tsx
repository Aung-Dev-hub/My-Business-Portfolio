import ContactSection from "@/components/contact/ContactSection";
import About from "@/components/about/About";
import HeroSection from "@/components/hero/HeroSection";
import ServiceSection from "@/components/services/ServiceSection";
/*import ProjectSection from "@/components/projects/ProjectSection";*/
import Skills from "@/components/skills/Skills";
import AnimationLayout from "@/components/layouts/AnimationLayout";
import { Toaster } from "react-hot-toast";

export default function Page() {
  return (
    <AnimationLayout>
      <HeroSection />
      <About />
      <ServiceSection />
      <Skills />
      {/*<ProjectSection>*/}
      <ContactSection />
      <Toaster />
    </AnimationLayout>
  );
}