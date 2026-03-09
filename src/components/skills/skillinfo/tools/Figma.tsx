
import { SiFigma } from 'react-icons/si';
import TechPage from '../TechPage'

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-violet-400">
    <SiFigma className="w-20 h-20" />
  </div>
);

export default function Figma() {
  return (
    <TechPage
    name="Figma"
    icon={<Icon />}
    iconBg="hsl(270 15% 12%)"
    description="A collaborative interface design tool used for UI/UX design, prototyping, and design systems. Figma runs in the browser and enables real-time collaboration between designers and developers."
    tags={["UI/UX Design", "Prototyping", "Collaboration", "Design Systems", "Browser-Based"]}
    steps={[
      { title: "Create an account", desc: "Sign up for a free Figma account at figma.com.", cmd: "# Visit https://www.figma.com" },
      { title: "Create a new file", desc: "Start a new design file from scratch or a template.", cmd: "# Click '+ New design file' in the dashboard" },
      { title: "Set up frames", desc: "Create frames for different screen sizes (desktop, mobile, tablet).", cmd: "# Press 'F' to create a frame and choose a preset size" },
      { title: "Design components", desc: "Build reusable components for your design system.", cmd: "# Select elements → Right-click → 'Create component'" },
      { title: "Share & export", desc: "Share your design with developers or export assets.", cmd: "# Click 'Share' to invite collaborators or use Dev Mode" },
    ]}
     nextHref="/skills/postman"
      middleHref="/#skills"
      backHref="/skills/git"
  />
  )
}

