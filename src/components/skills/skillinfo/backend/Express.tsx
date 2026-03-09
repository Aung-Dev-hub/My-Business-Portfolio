import { SiExpress } from "react-icons/si";
import TechPage from "../TechPage";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-yellow-400">
    <SiExpress className="w-20 h-20" />
  </div>
);

export default function Express() {
  return (
    <TechPage
      name="Express.js"
      icon={<Icon />}
      iconBg="hsl(0 0% 15%)"
      description="A fast, unopinionated, minimalist web framework for Node.js. Express provides a robust set of features for building web applications and APIs with middleware support."
      tags={[
        "Middleware",
        "REST APIs",
        "Routing",
        "Minimal",
        "Node.js Framework",
      ]}
      steps={[
        {
          title: "Initialize project",
          desc: "Create a new Node.js project.",
          cmd: "npm init -y",
        },
        {
          title: "Install Express",
          desc: "Add Express to your project.",
          cmd: "npm install express",
        },
        {
          title: "Create server file",
          desc: "Set up a basic Express server.",
          cmd: "# Create index.js with Express app setup",
        },
        {
          title: "Add a route",
          desc: "Define your first API endpoint.",
          cmd: "# app.get('/api/hello', (req, res) => res.json({ message: 'Hello!' }))",
        },
        {
          title: "Start the server",
          desc: "Run your Express application.",
          cmd: "node index.js",
        },
      ]}
      folderStructure={[
        { type: "folder", name: "my-api/", indent: 0 },
        { type: "folder", name: "node_modules/", indent: 1, muted: true },
        {
          type: "folder",
          name: "routes/",
          indent: 1,
          desc: "Route definitions",
        },
        {
          type: "folder",
          name: "middleware/",
          indent: 1,
          desc: "Custom middleware",
        },
        {
          type: "folder",
          name: "controllers/",
          indent: 1,
          desc: "Request handlers",
        },
        { type: "folder", name: "models/", indent: 1, desc: "Data models" },
        { type: "code", name: "index.js", indent: 1, desc: "Entry point" },
        { type: "file", name: "package.json", indent: 1, desc: "Dependencies" },
      ]}
      nextHref="/skills/php"
      middleHref="/#skills"
      backHref="/skills/node"
    />
  );
}
