import { SiGit } from "react-icons/si";
import TechPage from "../TechPage";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-orange-400">
    <SiGit className="w-20 h-20" />
  </div>
);

export default function Git() {
  return (
    <TechPage
      name="Git"
      icon={<Icon />}
      iconBg="hsl(10 10% 12%)"
      description="A free and open-source distributed version control system. Git tracks changes in your code, enables collaboration, and lets you branch, merge, and revert with confidence."
      tags={[
        "Version Control",
        "Branching",
        "Distributed",
        "Open Source",
        "Collaboration",
      ]}
      steps={[
        {
          title: "Install Git",
          desc: "Download Git from git-scm.com.",
          cmd: "git --version",
        },
        {
          title: "Configure Git",
          desc: "Set your name and email for commits.",
          cmd: 'git config --global user.name "Your Name" && git config --global user.email "you@example.com"',
        },
        {
          title: "Initialize a repo",
          desc: "Create a new Git repository in your project.",
          cmd: "git init",
        },
        {
          title: "Stage and commit",
          desc: "Add files and make your first commit.",
          cmd: 'git add . && git commit -m "Initial commit"',
        },
        {
          title: "Push to remote",
          desc: "Push your code to GitHub or another remote.",
          cmd: "git remote add origin <url> && git push -u origin main",
        },
      ]}
      nextHref="/skills/figma"
      middleHref="/#skills"
      backHref="/skills/aws"
    />
  );
}
