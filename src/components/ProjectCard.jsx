import { motion } from "framer-motion";
import { useState } from "react";
import { ImEnlarge2 } from "react-icons/im";
import { Maximize, Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Project Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md cursor-pointer relative"
                onClick={() => setIsModalOpen(true)}
            >
                {/* Thumbnail */}
                <div className="w-full h-48 overflow-hidden rounded-lg">
                    <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Title and Description */}
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{project.name}</h3>
                <div className="h-20 overflow-hidden"> {/* Fixed height for description */}
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
                </div>

                {/* Enlarge Icon (Visible on Hover) */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImEnlarge2 className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
                </div>
            </motion.div>

            {/* Project Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-2xl w-full mx-4"
                    >
                        {/* Thumbnail */}
                        <div className="w-full h-64 overflow-hidden rounded-lg">
                            <img
                                src={project.thumbnail}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title and Description */}
                        <h3 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">{project.name}</h3>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>

                        {/* Technologies */}
                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Technologies</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Live Link and GitHub Repo */}
                        <div className="mt-6 flex space-x-4">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Live Link
                                </a>
                            )}
                            {project.githubRepo && (
                                <a
                                    href={project.githubRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    GitHub Repo
                                </a>
                            )}
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </>
    );
}