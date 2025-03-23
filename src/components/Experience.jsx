import { useEffect } from "react";
import { motion } from "framer-motion";
import { useStats } from "../context/StatsContext";
import { calculateTotalExperience } from "../helpers/DateUtils";
export default function Experience() {
    const { setYearsOfExperience } = useStats();
    const experiences = [
        {
            role: "Technical Lead",
            company: "Applore Technologies",
            startDate: new Date("2024-06-10"), // Start date
            endDate: new Date(), // Current date (still employed)
            details: [
                "Developed Tyre Pulse Flutter App for tyre testing and performance analysis.",
                "Built JK Mobility Flutter App for fleet management, improving performance by 30% using clean architecture.",
            ],
        },
        {
            role: "Technical Lead",
            company: "Podit Services",
            startDate: new Date("2023-09-01"),
            endDate: new Date("2024-06-10"),
            details: [
                "Implemented WebRTC for real-time communication in Video Collaboration React App.",
                "Managed deployment to S3 bucket and setup pipeline.",
            ],
        },
        {
            role: "Junior Software Developer",
            company: "Wow Digital Pvt. Ltd.",
            startDate: new Date("2021-08-24"),
            endDate: new Date("2023-08-31"),
            details: [
                "Developed My Temple & My Temple Admin apps for temple management.",
                "Built Eatery Experts & Eatery Manager apps for B2B e-commerce.",
            ],
        },
    ];

    useEffect(() => {
        const totalExperience = calculateTotalExperience(experiences);
        setYearsOfExperience(totalExperience);
    }, []);

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger animations for each child
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="experience" className="bg-gray-100 dark:bg-gray-800 py-20">
            <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Experience</h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Animate only once when in view
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
                            variants={itemVariants}
                        >
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.company}</p>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                {exp.startDate.toLocaleDateString()} - {exp.endDate.toLocaleDateString()}
                            </p>
                            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                                {exp.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}