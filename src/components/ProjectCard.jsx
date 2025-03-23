import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
    // Animation variants for Framer Motion
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    return (
        <motion.div
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            onClick={onClick}
        >
            <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.name}
            </h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
                {project.description}
            </p>
        </motion.div>
    );
}