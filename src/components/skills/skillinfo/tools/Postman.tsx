import { SiPostman } from "react-icons/si";
import TechPage from "../TechPage";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-orange-400">
    <SiPostman className="w-20 h-20" />
  </div>
);

export default function Postman() {
  return (
    <TechPage
      name="Postman"
      icon={<Icon />}
      iconBg="hsl(20 15% 12%)"
      description="An API platform for building, testing, and documenting APIs. Postman simplifies API development with an intuitive interface for sending requests, writing tests, and collaborating with teams."
      tags={[
        "API Testing",
        "Collections",
        "Environments",
        "Mock Servers",
        "Documentation",
      ]}
      steps={[
        {
          title: "Download Postman",
          desc: "Install the Postman desktop app or use the web version.",
          cmd: "# Visit https://www.postman.com/downloads",
        },
        {
          title: "Create a workspace",
          desc: "Set up a workspace for your project's APIs.",
          cmd: "# Click 'Workspaces' → 'Create Workspace'",
        },
        {
          title: "Create a collection",
          desc: "Organize related API requests into a collection.",
          cmd: "# Click '+' → 'Collection' → Name it",
        },
        {
          title: "Send a request",
          desc: "Create and send your first API request.",
          cmd: "# Enter URL, select method (GET/POST), click 'Send'",
        },
        {
          title: "Write tests",
          desc: "Add tests to validate API responses automatically.",
          cmd: "# Go to 'Tests' tab → Write test scripts",
        },
      ]}
      nextHref="/skills/vercel"
      middleHref="/#skills"
      backHref="/skills/figma"
    />
  );
}
