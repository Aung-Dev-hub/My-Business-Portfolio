import { FaNodeJs, FaCloud, FaMapPin, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { SiTypescript, SiPython, SiPhp, SiPostgresql, SiMongodb, SiFigma, SiReact, SiExpress, SiGit,  SiVercel,SiPowers, SiPostman } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";

import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaFacebook, } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { IconType } from "react-icons";


interface AboutContent {
    heading: string;
    paragraphs: string[];
}

interface Service {
    name: string;
    icon: string;
    description: string;
}


interface Skill {
    name: string;
    icon: IconType;
    skillLevel?: number;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}



interface ContactInfo {
    icon: IconType;
    title: string;
    value: string;
    link: string;
}

interface SocialLink {
    icon: IconType;
    title: string;
    link: string;
}

//Navbar
export const navLinks = [
    { url: "#home", label: "Home" },
    { url: "#about", label: "About" },
    { url: "#services", label: "Services" },
    { url: "#skills", label: "Skills" },
    { url: "#projects", label: "Projects" },
    { url: "#contact", label: "Contact" },
];

// HeroSection
export const heroData = {
    status: "Available for opportunities",
    title: "Hi, I'm Aung Myo Oo",
    description:
        "Crafting exceptional digital experiences with modern technologies. Passionate about building scalable applications and teaching others.",
};


// data/aboutData.ts
export const aboutData: AboutContent = {
    heading: "A passionate developer who loves to create",
    paragraphs: [
        "I'm a full-stack developer in building web applications. My journey started with curiosity about how websites work and has evolved into a passion for creating seamless, user-focused digital experiences.",
        "Beyond coding, I'm dedicated to sharing knowledge. I believe in continuous learning and staying updated with the latest technologies.",
    ],
};

export const highlights = [
    { id: 1, icon: FaMapPin, text: "Based in Yangon, Myanmar" },
    //{ id: 2, icon: FaBriefcase, text: " 6 months of experience" },//
    { id: 3, icon: FaGraduationCap, text: "Bachelor's Degree in Technology" },
];



// Services 
export const servicesData: Service[] = [
    {
        name: "User Interface",
        icon: "/images/s1.png",
        description: "Designing intuitive interfaces and seamless user experiences",
    },
    {
        name: "Graphic Design",
        icon: "/images/s2.png",
        description: "Creative visual design for brands, apps, and marketing",
    },
    {
        name: "Website and Mobile App",
        icon: "/images/s3.png",
        description: "Building responsive web apps and cross-platform mobile apps",
    },
    {
        name: "Design and Creative",
        icon: "/images/s4.png",
        description: "Innovative designs for websites, apps, and digital products",
    },
];


// Skills
export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "JavaScript", icon: DiJavascript, skillLevel: 80 },
            { name: "React", icon: SiReact, skillLevel: 80 },
            { name: "TailwindCSS", icon: RiTailwindCssFill, skillLevel: 80 },
            { name: "TypeScript", icon: SiTypescript, skillLevel: 60 },
            { name: "ReactNative", icon: SiReact, skillLevel: 60 },
            { name: "Next", icon: RiNextjsFill, skillLevel: 60 },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Python", icon: SiPython, skillLevel: 80 },
            { name: "MongoDB", icon: SiMongodb, skillLevel: 80 },
            { name: "Node", icon: FaNodeJs, skillLevel: 80 },
            { name: "Express", icon: SiExpress, skillLevel: 80 },
            { name: "PHP", icon: SiPhp, skillLevel: 50 },
            { name: "PostMySQL", icon: SiPostgresql, skillLevel: 50 },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit, skillLevel: 90 },
            { name: "Figma", icon: SiFigma, skillLevel: 80 },
            { name: "Postman", icon: SiPostman, skillLevel: 80 },
            { name: "Vercel", icon: SiVercel, skillLevel: 80 },
           { name: "PowerApps", icon: SiPowers, skillLevel: 60 },
            { name: "AWS", icon: FaCloud, skillLevel: 50 },
        ],
    },
];


// Projects
export const projects = [
    {
        title: "Modern Dashboard UI",
        imagePath: "/images/p1.webp",
        description:
            "A responsive admin dashboard with data visualization charts, user management, and real-time analytics. Built with React Tailwind CSS and Recharts",
        techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "website",
    },
    {
        title: "E-Commerce Website",
        imagePath: "/images/p2.webp",
        description:
            "Full-stack e-commerce platform with product filtering, cart system, and secure checkout. Built with Next.js and Stripe integration.",
        techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "website",
    },
    {
        title: "Portfolio Website",
        imagePath: "/images/p3.webp",
        description:
            "Personal developer portfolio showcasing projects, skills, and contact information with modern animations.",
        techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "website",
    },
    {
        title: "Task Management App",
        imagePath: "/images/p4.webp",
        description:
            "A productivity web app for managing tasks with drag-and-drop support and team collaboration.",
        techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "mobile",

    },
];

//Contact
export const contactData = {
    heading: "Ready to Collaborate",
    description:
        "I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.",
};

export const contactInfo: ContactInfo[] = [
    {
        icon: FaEnvelope,
        title: "Email",
        value: "aungmyobusiness@gmail.com",
        link: "mailto:aungmyobusiness@gmail.com",
    },
    {
        icon: FaPhone,
        title: "Phone",
        value: "+959 675665039",
        link: "tel:+959 675665039",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Location",
        value: "Remote . Global",
        link: "#",
    },
];

export const socialLinks: SocialLink[] = [
    {
        icon: FaGithub,
        title: "GitHub",
        link: "https://github.com/Aung-Dev-hub",
    },
    {
        icon: FaLinkedin,
        title: "LinkedIn",
        link: "https://linkedin.com/in/aung-myo-oo-0ab50224a",
    },
    // {
    //     icon: FaInstagram,
    //     title: "Instagram",
    //     link: "https://instagram.com/yourusername",
    // },
    {
        icon: FaFacebook,
        title: "Facebook",
        link: "https://www.facebook.com/share/1Ag7EeKBuw/",
    },
    {
        icon: SiTelegram,
        title: "Telegram",
        link: "https://t.me/a21998",
    },
];

export const contactFormFields = [
    {
        type: "text",
        placeholder: "Your Name",
        name: "name",
        required: true,             
    },
    {
        type: "text",
        placeholder: "Your Email",
        name: "email",
        required: true,
    },
    {
        type: "text",
        placeholder: "Subject of message",
        name: "subject",
        required: true,
    },
    {
        type: "textarea",
        placeholder: "Message",
        name: "message",
        required: true,
        rows: 5,
    },
];

