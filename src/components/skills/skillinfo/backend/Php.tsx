import { SiPhp } from "react-icons/si";
import TechPage from "../TechPage";

const Icon = () => (
    <div className="w-24 h-24 flex items-center justify-center text-red-500">
        <SiPhp className="w-20 h-20" />
    </div>
);

export default function Php() {
    return (
        <TechPage
            name="PHP"
            icon={<Icon />}
            iconBg="hsl(240 15% 12%)"
            description="A widely-used server-side scripting language designed for web development. PHP powers millions of websites including WordPress, Laravel apps, and many content management systems."
            tags={["Server-Side", "Web Development", "WordPress", "Laravel", "Composer"]}
            steps={[
                { title: "Install PHP", desc: "Install PHP on your system (comes with most web servers).", cmd: "php --version" },
                { title: "Install Composer", desc: "Install Composer, PHP's dependency manager.", cmd: "# Visit https://getcomposer.org" },
                { title: "Create a project", desc: "Create a new PHP project or use a framework.", cmd: "composer create-project laravel/laravel my-app" },
                { title: "Start dev server", desc: "Use PHP's built-in development server.", cmd: "php -S localhost:8000" },
                { title: "Open in browser", desc: "Visit your PHP application.", cmd: "# Open http://localhost:8000" },
            ]}
            folderStructure={[
                { type: "folder", name: "my-app/", indent: 0 },
                { type: "folder", name: "app/", indent: 1, desc: "Application code" },
                { type: "folder", name: "public/", indent: 1, desc: "Web root" },
                { type: "code", name: "index.php", indent: 2, desc: "Entry point" },
                { type: "folder", name: "resources/", indent: 1, desc: "Views & assets" },
                { type: "folder", name: "routes/", indent: 1, desc: "Route definitions" },
                { type: "folder", name: "vendor/", indent: 1, muted: true },
                { type: "file", name: "composer.json", indent: 1, desc: "Dependencies" },
            ]}
            nextHref="/skills/postmysql"
            middleHref="/#skills"
            backHref="/skills/express"
        />
    )
}
