import { SiPostgresql } from "react-icons/si";
import TechPage from "../TechPage";

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-blue-300">
    <SiPostgresql className="w-20 h-20" />
  </div>
);

export default function PostMySql() {
  return (
    <TechPage
      name="PostgreSQL / MySQL"
      icon={<Icon />}
      iconBg="hsl(210 20% 12%)"
      description="Relational database management systems that use SQL for querying and managing data. PostgreSQL is known for advanced features and standards compliance, while MySQL is popular for web applications and ease of use."
      tags={[
        "Relational",
        "ACID Compliant",
        "SQL Queries",
        "Joins & Indexes",
        "Data Integrity",
      ]}
      steps={[
        {
          title: "Install PostgreSQL",
          desc: "Download and install PostgreSQL from the official site.",
          cmd: "# Visit https://www.postgresql.org/download/",
        },
        {
          title: "Start the server",
          desc: "Start the PostgreSQL service.",
          cmd: "sudo service postgresql start",
        },
        {
          title: "Access the CLI",
          desc: "Open the PostgreSQL interactive terminal.",
          cmd: "psql -U postgres",
        },
        {
          title: "Create a database",
          desc: "Create a new database for your project.",
          cmd: "CREATE DATABASE myapp;",
        },
        {
          title: "Create a table",
          desc: "Define your first table with columns.",
          cmd: "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(255) UNIQUE);",
        },
      ]}
      nextHref="/skills/python"
      middleHref="/#skills"
      backHref="/skills/php"
    />
  );
}
