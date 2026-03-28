import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStats } from "../context/StatsContext";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";

const containerV = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardV      = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

export default function Projects() {
    const { setProfessionalProjects } = useStats();
    const [selectedFramework, setSelectedFramework] = useState("All");
    const [filteredProjects,  setFilteredProjects]  = useState([]);
    const [showAll,           setShowAll]           = useState(false);
    const [selectedProject,  setSelectedProject]   = useState(null);
    const filterRef = useRef(null);

    const projects = [
        {
            name: "Tyre Pulse",
            description: "An innovative app for tyre testing, planning, and performance analysis. Helps tyre manufacturers address challenges like safety standards, environmental concerns, and market competition.",
            thumbnail: "/tyre_pulse.webp",
            technologies: ["Flutter", "Clean Architecture", "REST APIs", "BLoC", "Dio"],
            frameworks: ["Flutter", "React JS", "Express JS", "AWS S3", "MongoDB", "Figma"],
            liveLink: "https://play.google.com/store/apps/details?id=com.jk.tyre_pulse&pcampaignid=web_share",
            githubRepo: "",
        },
        {
            name: "JK Mobility",
            description: "A fleet management solution for tracking tyre life cycles, inspections, and defect analysis. Improved performance by 30% using clean architecture.",
            thumbnail: "/sample.jpg",
            technologies: ["Flutter", "Clean Architecture", "REST APIs", "Auth0", "BLoC", "Dio"],
            frameworks: ["Flutter", "React JS", "Express JS", "AWS S3", "MongoDB", "Figma"],
            liveLink: "https://play.google.com/store/apps/details?id=com.applore.jkfleet&pcampaignid=web_share",
            githubRepo: "",
        },
        {
            name: "Enigmatos",
            description: "Fleet management architecture. Converted the project from JavaScript to TypeScript and managed Nginx server.",
            thumbnail: "/sample.jpg",
            technologies: ["React Js", "TypeScript", "SocketIO", "Nginx", "AWS EC2", "Linux", "Material UI", "Redux"],
            frameworks: ["Flutter", "React JS", "Python", "AWS EC2", "Firebase"],
            liveLink: "https://www.enigmatos.com/",
            githubRepo: "",
        },
        {
            name: "QKart Frontend",
            description: "QKart is an e-commerce application offering a variety of products for customers to choose from.",
            thumbnail: "/sample.jpg",
            technologies: ["React Hooks", "REST APIs", "React Router", "Material UI", "Netlify"],
            frameworks: ["React JS", "Express JS", "MongoDB"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "Tasks Report",
            description: "Intuitive platform simplifying daily tasks reporting — team members can log tasks, outline future plans, and request assistance within a single interface.",
            thumbnail: "/tasks_report.webp",
            technologies: ["React JS", "KeyClock", "AWS S3", "MongoDB", "Python", "Fast API", "Figma"],
            frameworks: ["React JS", "Express JS", "AWS S3", "MongoDB", "Figma"],
            liveLink: "https://tasksreport.com/",
            githubRepo: "",
        },
        {
            name: "Video Collaboration App",
            description: "Implemented WebRTC for real-time communication and Auth0 for authentication. Managed deployment to S3 bucket and setup pipeline.",
            thumbnail: "/video-collaboration.webp",
            technologies: ["React JS", "WebRTC", "Auth0", "AWS S3", "MongoDB", "Redux", "Figma"],
            frameworks: ["Flutter", "React JS", "Express JS", "AWS S3", "MongoDB", "Figma"],
            liveLink: "https://sknt.in",
            githubRepo: "",
        },
        {
            name: "My Temple & Admin",
            description: "Facilitated temple management by tracking devotees, handling orders via WooCommerce, and integrating 2C2P payment gateway.",
            thumbnail: "/sample.jpg",
            technologies: ["Flutter", "Payment Gateway", "REST APIs", "Figma"],
            frameworks: ["Flutter", "Sprint Boot", "AWS EC2", "MySQL", "Figma"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "Eatery Experts",
            description: "B2B e-commerce platform connecting distributors and suppliers. Integrated Auth0 authentication, WooCommerce order management, and REST APIs.",
            thumbnail: "/sample.jpg",
            technologies: ["Flutter", "REST APIs", "Auth0", "Payment Gateway", "Provider"],
            frameworks: ["Flutter", "Sprint Boot", "AWS EC2", "MySQL", "Figma"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "Weather App",
            description: "A weather app that fetches weather data from the OpenWeatherMap API. Implemented a responsive design using Tailwind CSS.",
            thumbnail: "/sample.jpg",
            technologies: ["React", "Tailwind CSS", "OpenWeatherMap API", "Responsive Design"],
            frameworks: ["React JS", "Figma"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
    ];

    useEffect(() => { setProfessionalProjects(projects.length); }, []);

    const allFrameworks = ["All", ...new Set(projects.flatMap((p) => p.frameworks))];

    useEffect(() => {
        setFilteredProjects(
            selectedFramework === "All"
                ? projects
                : projects.filter((p) => p.frameworks.includes(selectedFramework))
        );
        setShowAll(false);
    }, [selectedFramework]);

    const scrollFilters = (dir) => {
        if (filterRef.current) filterRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
    };

    const visible = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <section id="projects" className="section-pad bg-slate-50 dark:bg-[#13131f]">
            <div className="container-max">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <p className="section-label">Work</p>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="text-gray-400 text-sm mt-2">{projects.length} projects · click a card for details</p>
                </motion.div>

                {/* Filter bar */}
                <div className="flex items-center gap-3 mb-10">
                    <button
                        onClick={() => scrollFilters("left")}
                        className="p-2 card-base hover:border-blue-200 dark:hover:border-blue-500/20 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex-shrink-0"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div ref={filterRef} className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
                        {allFrameworks.map((fw) => (
                            <button
                                key={fw}
                                onClick={() => setSelectedFramework(fw)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                                    selectedFramework === fw
                                        ? "bg-blue-600 text-white"
                                        : "card-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20"
                                }`}
                            >
                                {fw}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => scrollFilters("right")}
                        className="p-2 card-base hover:border-blue-200 dark:hover:border-blue-500/20 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex-shrink-0"
                    >
                        <ChevronRight size={18} />
                    </button>

                    <button
                        onClick={() => setSelectedFramework("All")}
                        className="px-3 py-1.5 card-base text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex-shrink-0 transition-all"
                    >
                        Reset
                    </button>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerV} initial="hidden" whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    <AnimatePresence mode="popLayout">
                        {visible.map((project, i) => (
                            <motion.div key={project.name} variants={cardV} layout>
                                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View more */}
                {filteredProjects.length > 6 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-2.5 card-base text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-500/20 transition-all duration-200"
                        >
                            {showAll ? "View Less ↑" : `View ${filteredProjects.length - 6} More ↓`}
                        </button>
                    </div>
                )}
            </div>

            {/* Detail modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1,    y: 0  }}
                            exit={{   opacity: 0, scale: 0.92, y: 20  }}
                            transition={{ duration: 0.25 }}
                            className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal image */}
                            <div className="relative h-52">
                                <img
                                    src={selectedProject.thumbnail}
                                    alt={selectedProject.name}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-3 right-3 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="p-6">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {selectedProject.name}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                                    {selectedProject.description}
                                </p>

                                <h5 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
                                    Technologies
                                </h5>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.technologies.map((tech) => (
                                        <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    {selectedProject.liveLink && selectedProject.liveLink !== "https://sknt.in" && (
                                        <a
                                            href={selectedProject.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
                                        >
                                            <ExternalLink size={14} /> Live Demo
                                        </a>
                                    )}
                                    {selectedProject.githubRepo && (
                                        <a
                                            href={selectedProject.githubRepo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl card-base text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all"
                                        >
                                            <Github size={14} /> GitHub
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="px-5 py-2.5 rounded-xl card-base text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
