import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hexagon as HexagonIcon } from "lucide-react";
import Modal from "./Modal"; // Import the modal component

function SkillCard({ title, skills }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Skill Card */}
            <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
                style={{ height: "25vh", width: "100%" }} // Set consistent height and width
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is in view
                onClick={() => setShowModal(true)}
                role="button" // Add role for accessibility
                tabIndex={0} // Make the card focusable
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        setShowModal(true); // Open modal on Enter or Space key
                    }
                }}
            >
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    {title}
                </h3>

                {/* Skills List (Limited to 6) */}
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {skills.slice(0, 6).map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                            <HexagonIcon className="w-4 h-4 text-black dark:text-white flex-shrink-0" />
                            <span className="ml-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Modal to Show All Skills */}
            {showModal && (
                <Modal
                    onClose={() => setShowModal(false)}
                    title={title}
                    skills={skills}
                />
            )}
        </>
    );
}

export default React.memo(SkillCard); // Optimize with React.memo