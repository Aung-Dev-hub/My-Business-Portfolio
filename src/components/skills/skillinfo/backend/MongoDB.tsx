import { SiMongodb } from "react-icons/si";
import TechPage from "../TechPage";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-green-600">
    <SiMongodb className="w-20 h-20" />
  </div>
);

export default function MongoDB() {
  return (
    <TechPage
      name="MongoDB"
      icon={<Icon />}
      iconBg="hsl(120 10% 12%)"
      description="A document-oriented NoSQL database designed for scalability and flexibility. MongoDB stores data in JSON-like documents, making it easy to map to objects in application code."
      tags={[
        "NoSQL",
        "Document-Based",
        "Scalable",
        "Flexible Schema",
        "Aggregation Pipeline",
      ]}
      steps={[
        {
          title: "Install MongoDB",
          desc: "Install MongoDB Community Edition or use MongoDB Atlas (cloud).",
          cmd: "# Visit https://www.mongodb.com/try/download/community",
        },
        {
          title: "Start MongoDB",
          desc: "Start the MongoDB server.",
          cmd: "mongod --dbpath /data/db",
        },
        {
          title: "Connect with mongosh",
          desc: "Use the MongoDB Shell to interact with your database.",
          cmd: "mongosh",
        },
        {
          title: "Create a database",
          desc: "Switch to or create a new database.",
          cmd: "use myDatabase",
        },
        {
          title: "Insert a document",
          desc: "Add your first document to a collection.",
          cmd: "db.users.insertOne({ name: 'John', email: 'john@example.com' })",
        },
      ]}
      nextHref="/skills/node"
      middleHref="/#skills"
      backHref="/skills/python"
    />
  );
}
