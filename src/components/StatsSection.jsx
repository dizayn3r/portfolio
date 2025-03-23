import { motion } from "framer-motion";
import { useStats } from "../context/StatsContext";

function StatsSection() {
    const { verifiedSkills, professionalProjects, yearsOfExperience, dsaProblemsSolved } = useStats();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger the animations of children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="container mx-auto py-6">
            <motion.div
                className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the container is in view
            >
                {/* Verified Skills */}
                <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
                    variants={itemVariants}
                >
                    <h3 className="text-4xl font-bold text-blue-600">{verifiedSkills}</h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">Verified Skills</p>
                </motion.div>

                {/* Professional Projects */}
                <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
                    variants={itemVariants}
                >
                    <h3 className="text-4xl font-bold text-blue-600">{professionalProjects}</h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">Professional Projects</p>
                </motion.div>

                {/* Experience in Years */}
                <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
                    variants={itemVariants}
                >
                    <h3 className="text-4xl font-bold text-blue-600">{yearsOfExperience}</h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">Years of Experience</p>
                </motion.div>

                {/* DSA Problems Solved */}
                {/* <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
                    variants={itemVariants}
                >
                    <h3 className="text-4xl font-bold text-blue-600">{dsaProblemsSolved}</h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">DSA Problems Solved</p>
                </motion.div> */}
            </motion.div>
        </div>
    );
}

export default StatsSection;