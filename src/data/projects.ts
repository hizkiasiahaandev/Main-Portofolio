import type { Project } from "../types/project";
import inventrack from "../assets/kia.jpg"

export const projects: Project[] = [
    {
        number: "01",
        category: "FULL-STACK DEVELOPMENT",
        title: "InvenTrack — Inventory Management System",
        description:
            "Developed InvenTrack, a web-based inventory management system for managing item data and monitoring stock movements. The system supports incoming (IN) and outgoing (OUT) stock transactions with COMPLETED and CANCELLED statuses, stock movement history, Excel report exports, and interactive charts for inventory reporting. It also implements role-based access for Admin and Staff to support different levels of access.",
        tech: [
            "React",
            "Vite",
            "TypeScript",
            "Node.js",
            "Express.js",
            "Prisma ORM",
            "MySQL",
        ],
        github: "",
        demo: "",
        image: inventrack,
    },
    {
        number: "02",
        category: "FULL-STACK DEVELOPMENT",
        title: "HR Employee — Attendance Management System",
        description:
            "Developed a web-based HR employee attendance management system to manage employee attendance records and leave requests. The system supports two roles, Admin and Staff, with role-based access control. Employees can record and track their attendance, submit leave requests, and view their attendance history, while Admins can manage employee attendance, review leave requests, and export attendance reports by date range to Excel.",
        tech: [
            "React",
            "Vite",
            "TypeScript",
            "Node.js",
            "Express.js",
            "Prisma ORM",
            "MySQL",
        ],
        github: "",
        demo: "",
        image: inventrack,
    },
    {
        number: "03",
        category: "FRONTEND DEVELOPMENT",
        title: "Personal Portfolio Website",
        description:
            "Developed a personal portfolio website to showcase my projects, technical skills, and background as a developer. The website features a modern and responsive design, smooth scrolling navigation, and dedicated sections for personal information, projects, and contact details. Built with React, Vite, TypeScript, and Tailwind CSS to deliver a clean and user-friendly experience.",
        tech: [
            "React",
            "Vite",
            "TypeScript",
            "Tailwind CSS",
            "Lucide React",
        ],
        github: "",
        demo: "",
        image: inventrack,
    },
];