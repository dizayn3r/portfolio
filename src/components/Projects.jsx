import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStats } from "../context/StatsContext";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
    const { setProfessionalProjects } = useStats();
    const [selectedFramework, setSelectedFramework] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const filterContainerRef = useRef(null);

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
            technologies: ["React Js", "TypeScript", "SocketIO", "Nginx", "AWS EC2", "BitBucket", "Linux", "ClickUp", "Material UI", "Redux"],
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
            description: "Say goodbye to cumbersome reporting processes. Our intuitive platform simplifies daily tasks reporting, allowing team members to effortlessly log their tasks, outline future plans, and request assistance—all within a single, user-friendly interface.",
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
            name: "My Temple & My Temple Admin",
            description: "Facilitated temple management by tracking devotees, handling orders via WooCommerce, and integrating 2C2P payments.",
            thumbnail: "/sample.jpg",
            technologies: ["Flutter", "Payment Gateway", "REST APIs", "Figma"],
            frameworks: ["Flutter", "Sprint Boot", "AWS EC2", "MySQL", "Figma"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "Eatery Experts & Eatery Manager",
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

    // Calculate total number of projects
    useEffect(() => {
        setProfessionalProjects(projects.length);
    }, [setProfessionalProjects]);

    // Get all unique frameworks for the filter buttons
    const allFrameworks = [...new Set(projects.flatMap((project) => project.frameworks))];
    allFrameworks.unshift("All"); // Add "All" option at the beginning

    // Filter projects based on selected technology
    useEffect(() => {
        if (selectedFramework === "All") {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) =>
                project.frameworks.includes(selectedFramework)
            );
            setFilteredProjects(filtered);
        }
    }, [selectedFramework]);

    // Scroll filters left and right
    const scrollFilters = (direction) => {
        if (filterContainerRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            filterContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    // Animation variants for Framer Motion
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    const popupVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    };

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Projects</h2>

                {/* Filters with Scroll Buttons */}
                <div className="mt-8 flex items-center justify-center space-x-4">
                    {/* Left Scroll Button */}
                    <button
                        onClick={() => scrollFilters("left")}
                        className="p-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Filters Container */}
                    {/* Filters Container */}
                    <div
                        ref={filterContainerRef}
                        className="flex space-x-4 overflow-x-auto scrollbar-hide"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {allFrameworks.map((tech, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedFramework(tech)}
                                className={`px-4 py-2 whitespace-nowrap rounded-lg ${selectedFramework === tech
                                    ? "bg-blue-600 text-white"
                                    : "bg-white dark:bg-gray-900 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    } transition-colors`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={() => scrollFilters("right")}
                        className="p-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={() => setSelectedFramework("All")}
                        className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                        Reset
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(showAllProjects ? filteredProjects : filteredProjects.slice(0, 6)).map((project, index) => (
                        <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
                    ))}
                </div>

                {/* View More / View Less Button */}
                {filteredProjects.length > 6 && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setShowAllProjects(!showAllProjects)}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                        >
                            {showAllProjects ? "View Less" : "View More"}
                        </button>
                    </div>
                )}

                {/* Popup for Detailed View */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                            onClick={() => setSelectedProject(null)}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={popupVariants}
                        >
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-lg w-full"
                                onClick={(e) => e.stopPropagation()}
                                variants={popupVariants}
                            >
                                <img
                                    src={selectedProject.thumbnail}
                                    alt={selectedProject.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {selectedProject.name}
                                </h4>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">
                                    {selectedProject.description}
                                </p>
                                <div className="mt-4">
                                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white">Technologies:</h5>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {selectedProject.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    Close
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}