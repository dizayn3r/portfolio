import { motion } from "framer-motion";
import { useEffect } from "react";
import { useStats } from "../context/StatsContext";
import SkillCard from './SkillCard';

export default function Skills() {
    const { setVerifiedSkills } = useStats();
    const skills = {
        languages: [
            { name: "HTML5", description: "Markup language for structuring web pages." },
            { name: "CSS3", description: "Stylesheet language for designing web pages." },
            { name: "C", description: "General-purpose programming language." },
            { name: "Java", description: "Object-oriented programming language." },
            { name: "Kotlin", description: "Modern programming language for Android development." },
            { name: "Dart", description: "Programming language optimized for Flutter." },
            { name: "Python", description: "Popular programming language for various applications." },
            { name: "Go", description: "Efficient and scalable programming language by Google." },
            { name: "JavaScript", description: "Dynamic programming language for web development." },
            { name: "TypeScript", description: "Superset of JavaScript with static typing." }
        ],
        frontend: [
            { name: "React Js", description: "Library for building user interfaces." },
            { name: "Tailwind CSS", description: "Utility-first CSS framework for styling." },
            { name: "Flutter", description: "Framework for cross-platform mobile applications." },
            { name: "Jetpack Compose", description: "Modern UI toolkit for Android." },
            { name: "React Native", description: "Framework for building mobile apps with React." },
            { name: "Bootstrap", description: "Popular front-end framework for responsive design." }
        ],
        backend: [
            { name: "Node.js", description: "JavaScript runtime for building server-side applications." },
            { name: "Express", description: "Minimalist web framework for Node.js." },
            { name: "Django", description: "High-level Python web framework." },
            { name: "Flask", description: "Lightweight Python web framework." }
        ],
        database: [
            { name: "MySQL", description: "Relational database management system." },
            { name: "PostgreSQL", description: "Advanced open-source relational database." },
            { name: "MongoDB", description: "NoSQL database for flexible data storage." },
            { name: "Firebase", description: "Backend-as-a-service platform by Google." }
        ],
        devOps: [
            { name: "GitHub Actions", description: "CI/CD automation tool." },
            { name: "Jenkins", description: "Automation server for CI/CD pipelines." },
            { name: "Nginx", description: "High-performance web server and reverse proxy." },
            { name: "Ansible", description: "Automation tool for IT configuration management." },
            { name: "Terraform", description: "Infrastructure as Code tool." },
            { name: "Docker", description: "Containerization platform." },
            { name: "Kubernetes", description: "Container orchestration system." },
            { name: "AWS", description: "Cloud computing platform by Amazon." },
            { name: "GCP", description: "Google Cloud Platform for cloud services." },
            { name: "Azure", description: "Cloud computing platform by Microsoft." }
        ],
        tools: [
            { name: "VS Code", description: "Popular code editor." },
            { name: "Android Studio", description: "IDE for Android development." },
            { name: "Git", description: "Version control system." },
            { name: "GitLab", description: "Web-based DevOps lifecycle tool." },
            { name: "BitBucket", description: "Git repository management solution." },
            { name: "Postman", description: "API testing tool." },
            { name: "Insomnia", description: "API client for testing and debugging." },
            { name: "Jira", description: "Project management tool." },
            { name: "Slack", description: "Communication and collaboration platform." }
        ]
    };

    // Calculate total number of skills
    useEffect(() => {
        const totalSkills = Object.values(skills).reduce((acc, skillList) => acc + skillList.length, 0);
        setVerifiedSkills(totalSkills);
    }, [setVerifiedSkills]);

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
        <motion.section
            id="skills"
            className="bg-gray-100 dark:bg-gray-800 py-20 flex items-center"
            style={{ minHeight: "100vh" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the container is in view
        >
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    className="text-3xl font-bold text-center text-gray-800 dark:text-white"
                    variants={itemVariants}
                >
                    Skills
                </motion.h2>

                {/* Skills Grid */}
                <motion.div
                    className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {/* Programming Languages */}
                    <motion.div variants={itemVariants}>
                        <SkillCard title="Programming Languages" skills={skills.languages} />
                    </motion.div>

                    {/* Frontend Skills */}
                    <motion.div variants={itemVariants}>
                        <SkillCard title="Frontend" skills={skills.frontend} />
                    </motion.div>

                    {/* Backend Skills */}
                    <motion.div variants={itemVariants}>
                        <SkillCard title="Backend" skills={skills.backend} />
                    </motion.div>

                    {/* Database Skills */}
                    <motion.div variants={itemVariants}>
                        <SkillCard title="Database" skills={skills.database} />
                    </motion.div>

                    {/* DevOps Skills */}
                    <motion.div variants={itemVariants}>
                        <SkillCard title="DevOps" skills={skills.devOps} />
                    </motion.div>

                    {/* Tools */}
                    <motion.div variants={itemVariants}>
                        <SkillCard title="Tools" skills={skills.tools} />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}