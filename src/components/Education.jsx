import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Education() {
    const education = [
        {
            degree: "B.Tech in Civil Engineering",
            institution: "HIET, Ghaziabad",
            year: "2016",
            details: "Major: Civil Engineering | Minor: C Language Programming | Related coursework: AutoCAD, Stead Pro, Primavera",
            thumbnail: "/degree.webp", // Placeholder image URL
        },
    ];

    const certificates = [
        {
            title: "Full-Stack Web Development Certification",
            issuer: "Crio.Do",
            year: "2025",
            details: "Completed a comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
            thumbnail: "/mern.webp", // Placeholder image URL
        },
        {
            title: "DevOps Engineer Certification",
            issuer: "Simplilearn",
            year: "23rd October, 2024",
            details: "Earned certification in developing and maintaining applications on AWS.",
            thumbnail: "/DevOps Engineer.webp", // Placeholder image URL
        },
        {
            title: "Docker Certified Associate",
            issuer: "Simplilearn",
            year: "18th October, 2024",
            details: "Learned to create, manage, and deploy containerized applications using Docker.",
            thumbnail: "/Docker Certified Associate.webp", // Placeholder image URL
        },
        {
            title: "CompTIA Linux+",
            issuer: "Simplilearn",
            year: "30th July, 2024",
            details: "Acquired skills in Linux system administration, scripting, and networking.",
            thumbnail: "/CompTIA Linux.webp", // Placeholder image URL
        },
        {
            title: "DevOps Certification",
            issuer: "Simplilearn",
            year: "10th Mar, 2024",
            details: "A fantastic learning experience, deepening my knowledge of Docker, Terraform, Jenkins, and AWS. I'm excited to leverage these skills to improve efficiency in my current role, contribute to more complex projects, pursue new opportunities",
            thumbnail: "/DevOps Certification.webp", // Placeholder image URL
        },
    ];

    // Combine education and certificates into a single array
    const items = [...education, ...certificates];

    // State to manage the selected item for the popup
    const [selectedItem, setSelectedItem] = useState(null);

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
        <section id="education" className="bg-white dark:bg-gray-800 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education & Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md cursor-pointer"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            onClick={() => setSelectedItem(item)}
                        >
                            <img
                                src={item.thumbnail}
                                alt={item.title || item.degree}
                                className="w-full h-50 object-cover rounded-md mb-4"
                            />
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                {item.title || item.degree}
                            </h4>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">{item.year}</p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">
                                {item.details}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Popup for detailed view */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
                            style={{ backgroundColor: "rgba(200, 200, 200, 0.25)" }}
                            onClick={() => setSelectedItem(null)}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={popupVariants}
                        >
                            <motion.div
                                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-lg w-full"
                                onClick={(e) => e.stopPropagation()}
                                variants={popupVariants}
                            >
                                <img
                                    src={selectedItem.thumbnail}
                                    alt={selectedItem.title || selectedItem.degree}
                                    className="w-full h-50 object-cover rounded-md mb-4"
                                />
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {selectedItem.title || selectedItem.degree}
                                </h4>
                                <p className="mt-2 text-gray-700 dark:text-gray-300">
                                    {selectedItem.issuer || selectedItem.institution}
                                </p>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    {selectedItem.year}
                                </p>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {selectedItem.details}
                                </p>
                                <button
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    onClick={() => setSelectedItem(null)}
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