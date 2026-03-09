import { FaNodeJs } from "react-icons/fa";
import TechPage from "../TechPage";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-green-500">
    <FaNodeJs className="w-20 h-20" />
  </div>
);

export default function Node() {
  return (
    <TechPage
    name="Node.js"
    icon={<Icon />}
    iconBg="hsl(220 25% 12%)"
    description="A JavaScript runtime built on Chrome's V8 engine. Node.js lets you run JavaScript on the server, enabling full-stack JavaScript development with an event-driven, non-blocking I/O model."
    tags={["Server-Side JS", "Event-Driven", "Non-Blocking I/O", "npm Ecosystem", "V8 Engine"]}
    steps={[
      { title: "Install Node.js", desc: "Download the LTS version from nodejs.org.", cmd: "# Visit https://nodejs.org" },
      { title: "Verify installation", desc: "Check Node.js and npm versions.", cmd: "node --version && npm --version" },
      { title: "Initialize a project", desc: "Create a new Node.js project with package.json.", cmd: "npm init -y" },
      { title: "Create a server", desc: "Create a simple HTTP server.", cmd: "echo 'const http = require(\"http\"); http.createServer((req, res) => { res.end(\"Hello!\"); }).listen(3000);' > server.js" },
      { title: "Run the server", desc: "Start your Node.js server.", cmd: "node server.js" },
    ]}
    folderStructure={[
      { type: "folder", name: "my-api/", indent: 0 },
      { type: "folder", name: "node_modules/", indent: 1, muted: true },
      { type: "folder", name: "src/", indent: 1 },
      { type: "code", name: "server.js", indent: 2, desc: "Entry point" },
      { type: "folder", name: "routes/", indent: 2, desc: "Route handlers" },
      { type: "folder", name: "controllers/", indent: 2, desc: "Business logic" },
      { type: "folder", name: "models/", indent: 2, desc: "Data models" },
      { type: "file", name: "package.json", indent: 1, desc: "Dependencies" },
    ]}
     nextHref="/skills/express"
      middleHref="/#skills"
      backHref="/skills/mongoDB"
  />
  )
}
