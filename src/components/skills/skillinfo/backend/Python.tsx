import { SiPython } from "react-icons/si";
import TechPage from "../TechPage";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-yellow-400">
    <SiPython className="w-20 h-20" />
  </div>
);

export default function Python() {
  return (
    <TechPage
      name="Python"
      icon={<Icon />}
      iconBg="hsl(220 25% 12%)"
      description="A versatile, high-level programming language known for its clear syntax and readability. Python excels in web development, data science, machine learning, automation, and scripting."
      tags={[
        "Easy to Learn",
        "Interpreted",
        "Dynamic Typing",
        "Rich Ecosystem",
        "Cross-Platform",
      ]}
      steps={[
        {
          title: "Install Python",
          desc: "Download Python from python.org (most systems come with it pre-installed).",
          cmd: "python3 --version",
        },
        {
          title: "Create a virtual environment",
          desc: "Isolate project dependencies with a virtual environment.",
          cmd: "python3 -m venv venv",
        },
        {
          title: "Activate the environment",
          desc: "Activate the virtual environment for your shell.",
          cmd: "source venv/bin/activate",
        },
        {
          title: "Install packages",
          desc: "Use pip to install packages from PyPI.",
          cmd: "pip install requests flask",
        },
        {
          title: "Run your script",
          desc: "Execute a Python file from the terminal.",
          cmd: "python3 app.py",
        },
      ]}
      folderStructure={[
        { type: "folder", name: "my-project/", indent: 0 },
        { type: "folder", name: "env/", indent: 1, muted: true },
        { type: "folder", name: "src/", indent: 1 },
        { type: "code", name: "app.py", indent: 2, desc: "Entry point" },
        { type: "code", name: "models.py", indent: 2, desc: "Data models" },
        { type: "folder", name: "tests/", indent: 1, desc: "Test files" },
        {
          type: "file",
          name: "requirements.txt",
          indent: 1,
          desc: "Dependencies",
        },
        { type: "file", name: "README.md", indent: 1 },
      ]}
      nextHref="/skills/mongoDB"
      middleHref="/#skills"
      backHref="/skills/postmysql"
    />
  );
}
