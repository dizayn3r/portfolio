import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Education() {
    const education = [
        {
            degree: "B.Tech in Civil Engineering",
            institution: "HIET, Ghaziabad",
            year: "2016",
            details: "Major: Civil Engineering | Minor: C Language Programming | Related coursework: AutoCAD, Stead Pro, Primavera",
        },
    ];

    const certificates = [
        {
            title: "Full-Stack Web Development Certification",
            issuer: "Crio.Do",
            year: "2025",
            details: "Completed a comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
        },
        {
            title: "DevOps Engineer Certification",
            issuer: "Simplilearn",
            year: "23rd October, 2024",
            details: "Earned certification in developing and maintaining applications on AWS.",
        },
        {
            title: "Docker Certified Associate",
            issuer: "Simplilearn",
            year: "18th October, 2024",
            details: "Learned to create, manage, and deploy containerized applications using Docker.",
        },
        {
            title: "CompTIA Linux+",
            issuer: "Simplilearn",
            year: "30th July, 2024",
            details: "Acquired skills in Linux system administration, scripting, and networking.",
        },
        {
            title: "DevOps Certification",
            issuer: "Simplilearn",
            year: "10th Mar, 2024",
            details: "A fantastic learning experience, deepening my knowledge of Docker, Terraform, Jenkins, and AWS. I'm excited to leverage these skills to improve efficiency in my current role, contribute to more complex projects, pursue new opportunities",
        },
    ];

    // Combine education and certificates into a single array
    const items = [...education, ...certificates];

    // Animation controls for the carousel
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                await controls.start({ x: "-100%" }); // Move all items to the left
                await controls.start({ x: 0 }); // Reset to the original position
            }
        };
        sequence();
    }, [controls]);

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
        <section className="bg-white dark:bg-gray-800 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education & Certifications</h2>
                <motion.div
                    className="grid grid-flow-col auto-cols-max gap-6"
                    animate={controls}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Animate only once when in view
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-80"
                            variants={itemVariants}
                        >
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.title || item.degree}</h4>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.issuer || item.institution}</p>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">{item.year}</p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">{item.details}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}