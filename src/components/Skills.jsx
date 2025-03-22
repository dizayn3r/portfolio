import { motion } from "framer-motion";
import { useEffect } from "react";
import { useStats } from "../context/StatsContext";
import SkillCard from './SkillCard';

export default function Skills() {
    const { setVerifiedSkills } = useStats();
    const skills = {
        languages: ["HTML5", "CSS3", "C", "Java", "Kotlin", "Dart", "Python", "Go", "JavaScript", "TypeScript"],
        frontend: ["React Js", "Tailwind CSS", "Flutter", "Jetpack Compose", "React Native", "Bootstrap", "Material-UI"],
        backend: ["Node.js", "Express", "Django", "Flask"],
        database: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
        devOps: ["GitHub Actions", "Jenkins", "Nginx", "Ansible", "Terraform", "Docker", "Kubernetes", "AWS", "GCP", "Azure"],
        design: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
        tools: ["VS Code", "Android Studio", "Git", "GitLab", "BitBucket", "Postman", "Insomnia", "Jira", "Slack"],
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