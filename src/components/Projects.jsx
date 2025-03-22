import { useEffect, useState, useRef } from "react";
import { useStats } from "../context/StatsContext";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
    const { setProfessionalProjects } = useStats();
    const [selectedTechnology, setSelectedTechnology] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState([]);
    const filterContainerRef = useRef(null);

    const projects = [
        {
            name: "Tyre Pulse",
            description: "An innovative app for tyre testing, planning, and performance analysis. Helps tyre manufacturers address challenges like safety standards, environmental concerns, and market competition.",
            thumbnail: "/sample.jpg",
            technologies: ["Flutter", "Clean Architecture", "REST APIs", "BLoC", "Dio"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "JK Mobility",
            description: "A fleet management solution for tracking tyre life cycles, inspections, and defect analysis. Improved performance by 30% using clean architecture.",
            thumbnail: "/sample.jpg",
            technologies: ["Flutter","Clean Architecture", "REST APIs", "Auth0","BLoC", "Dio"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "Video Collaboration App",
            description: "Implemented WebRTC for real-time communication and Auth0 for authentication. Managed deployment to S3 bucket and setup pipeline.",
            thumbnail: "/sample.jpg",
            technologies: ["React JS", "WebRTC", "Auth0", "AWS S3", "MongoDB", "Redux", "Figma"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "My Temple & My Temple Admin",
            description: "Facilitated temple management by tracking devotees, handling orders via WooCommerce, and integrating 2C2P payments.",
            thumbnail: "/sample.jpg",
            technologies: ["Flutter", "Payment Gateway", "REST APIs", "Figma"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "Eatery Experts & Eatery Manager",
            description: "B2B e-commerce platform connecting distributors and suppliers. Integrated Auth0 authentication, WooCommerce order management, and REST APIs.",
            thumbnail: "/sample.jpg",
            technologies: ["Flutter", "REST APIs", "Auth0", "Payment Gateway", "Provider"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "Enigmatos",
            description: "Fleet management architecture. Converted the project from JavaScript to TypeScript and managed Nginx server.",
            thumbnail: "/sample.jpg",
            technologies: ["React Js", "TypeScript", "Nginx", "AWS EC2", "BitBucket", "Linux", "ClickUp", "Material UI", "Redux"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "Weather App",
            description: "A weather app that fetches weather data from the OpenWeatherMap API. Implemented a responsive design using Tailwind CSS.",
            thumbnail: "/sample.jpg",
            technologies: ["React", "Tailwind CSS", "OpenWeatherMap API", "Responsive Design"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
        {
            name: "QKart Frontend",
            description: "QKart is an e-commerce application offering a variety of products for customers to choose from.",
            thumbnail: "/sample.jpg",
            technologies: ["React Hooks", "REST APIs", "React Router", "Material UI", "Netlify"],
            liveLink: "https://sknt.in",
            githubRepo: "https://github.com/",
        },
    ];

    // Calculate total number of projects
    useEffect(() => {
        setProfessionalProjects(projects.length);
    }, [setProfessionalProjects]);

    // Get all unique technologies for the filter buttons
    const allTechnologies = [...new Set(projects.flatMap((project) => project.technologies))];
    allTechnologies.unshift("All"); // Add "All" option at the beginning

    // Filter projects based on selected technology
    useEffect(() => {
        if (selectedTechnology === "All") {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) =>
                project.technologies.includes(selectedTechnology)
            );
            setFilteredProjects(filtered);
        }
    }, [selectedTechnology]);

    // Scroll filters left and right
    const scrollFilters = (direction) => {
        if (filterContainerRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            filterContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center">Projects</h2>

                {/* Filters with Scroll Buttons */}
                <div className="mt-8 flex items-center justify-center space-x-4">
                    {/* Left Scroll Button */}
                    <button
                        onClick={() => scrollFilters("left")}
                        className="p-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Filters Container */}
                    <div
                        ref={filterContainerRef}
                        className="flex space-x-4 overflow-x-auto scrollbar-hide"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {allTechnologies.map((tech, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedTechnology(tech)}
                                className={`px-4 py-2 whitespace-nowrap rounded-lg ${
                                    selectedTechnology === tech
                                        ? "bg-blue-600 text-white"
                                        : "bg-white dark:bg-gray-900 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                } transition-colors`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={() => scrollFilters("right")}
                        className="p-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={() => setSelectedTechnology("All")}
                        className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        Reset
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}