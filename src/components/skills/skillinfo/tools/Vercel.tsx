import { SiVercel } from "react-icons/si";
import TechPage from "../TechPage";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-black">
    <SiVercel className="w-20 h-20" />
  </div>
);

export default function Vercel() {
  return (
    <TechPage
      name="Vercel"
      icon={<Icon />}
      iconBg="hsl(0 0% 8%)"
      description="A cloud platform for frontend developers that enables instant deployments, automatic scaling, and seamless Git integration. Vercel is the company behind Next.js and provides the best experience for deploying web apps."
      tags={[
        "Deployment",
        "Edge Network",
        "Serverless Functions",
        "Git Integration",
        "Preview Deploys",
      ]}
      steps={[
        {
          title: "Install Vercel CLI",
          desc: "Install the Vercel CLI globally.",
          cmd: "npm install -g vercel",
        },
        {
          title: "Login to Vercel",
          desc: "Authenticate with your Vercel account.",
          cmd: "vercel login",
        },
        {
          title: "Deploy your project",
          desc: "Deploy from your project directory.",
          cmd: "vercel",
        },
        {
          title: "Set up Git integration",
          desc: "Connect a GitHub repo for automatic deployments.",
          cmd: "# Import project at https://vercel.com/new",
        },
        {
          title: "Configure domain",
          desc: "Add a custom domain to your deployment.",
          cmd: "vercel domains add your domain.com",
        },
      ]}
      nextHref="/skills/powerapps"
      middleHref="/#skills"
      backHref="/skills/postman"
    />
  );
}
