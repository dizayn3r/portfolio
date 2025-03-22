import React from "react";
import { motion } from "framer-motion";
import { Hexagon as HexagonIcon } from "lucide-react";

function SkillCard({ title, skills }) {
    return (
        <motion.div
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            style={{ minHeight: "30vh", width: "100%" }} // Set consistent height and width
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is in view
        >
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>

            {/* Skills List */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 space-y-2">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <HexagonIcon className="w-4 h-4 text-black dark:text-white" />
                        <span className="ml-2">{skill}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default SkillCard;