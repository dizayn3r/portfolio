import React from "react";
import { Hexagon as HexagonIcon, X as CloseIcon } from "lucide-react";
import { motion } from "framer-motion";

function Modal({ onClose, title, skills }) {
    return (
        <div
            className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
            style={{ backgroundColor: "rgba(200, 200, 200, 0.25)" }}
        >
            <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 max-w-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {title}
                    </h3>
                    <button
                        onClick={() => onClose()}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                    >
                        <CloseIcon className="w-5 h-5 font-semibold hover:text-red-500" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {skills.map((skill, index) => (
                        <div key={index} className="text-gray-700 dark:text-gray-300">
                            <div className="flex items-center">
                                <HexagonIcon className="w-4 h-4 text-black dark:text-white" />
                                <span className="ml-2 font-semibold">{skill.name}</span>
                            </div>
                            <p className="ml-6 text-sm text-gray-600 dark:text-gray-400">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Modal;
