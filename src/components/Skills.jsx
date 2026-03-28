import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useStats } from "../context/StatsContext";

const containerV = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const cardV = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

const icons = {
    "JavaScript": "🟨", "TypeScript": "🔷", "Dart": "💙", "Python": "🐍",
    "Kotlin": "🟣", "HTML5": "🟠", "CSS3": "🔵", "Go": "🐹", "Java": "☕", "C": "⚙️",
    "Flutter": "📱", "React.js": "⚛️", "Tailwind CSS": "🎨", "Jetpack Compose": "🤖",
    "React Native": "📲", "Bootstrap": "🅱️", "Framer Motion": "🎞️", "Next.js": "▲",
    "Node.js": "🟢", "Express": "🚂", "Django": "🎸", "Flask": "🌶️",
    "REST APIs": "🔗", "GraphQL": "🌐", "Socket.IO": "🔌",
    "MongoDB": "🍃", "PostgreSQL": "🐘", "MySQL": "🐬",
    "Firebase": "🔥", "Supabase": "⚡", "Redis": "🔴",
    "AWS": "☁️", "Docker": "🐳", "Docker Swarm": "🔄", "Kubernetes": "⎈",
    "GitHub Actions": "🤖", "Jenkins": "👷", "Nginx": "🌿", "Terraform": "🏗️",
    "Linux": "🐧", "Shell Scripting": "📜", "GCP": "🌥️", "Git": "🌳",
    "VS Code": "💻", "Android Studio": "🤖", "Postman": "📮", "Figma": "🎨",
    "Jira": "🗂️", "GitLab": "🦊", "BitBucket": "🪣", "Insomnia": "😴",
};

const getIcon = (name) => icons[name] || "🔧";

const allSkills = [
    // Mobile
    { name: "Flutter", category: "Mobile", level: "Expert", years: 4 },
    { name: "Dart", category: "Mobile", level: "Expert", years: 4 },
    { name: "React Native", category: "Mobile", level: "Intermediate", years: 2 },
    { name: "Jetpack Compose", category: "Mobile", level: "Intermediate", years: 2 },
    { name: "Kotlin", category: "Mobile", level: "Intermediate", years: 2 },
    // Frontend
    { name: "React.js", category: "Frontend", level: "Expert", years: 4 },
    { name: "JavaScript", category: "Frontend", level: "Expert", years: 5 },
    { name: "TypeScript", category: "Frontend", level: "Expert", years: 4 },
    { name: "Tailwind CSS", category: "Frontend", level: "Expert", years: 3 },
    { name: "HTML5", category: "Frontend", level: "Expert", years: 5 },
    { name: "CSS3", category: "Frontend", level: "Expert", years: 5 },
    { name: "Bootstrap", category: "Frontend", level: "Expert", years: 4 },
    { name: "Framer Motion", category: "Frontend", level: "Intermediate", years: 2 },
    // Backend
    { name: "Node.js", category: "Backend", level: "Expert", years: 4 },
    { name: "Express", category: "Backend", level: "Expert", years: 3 },
    { name: "REST APIs", category: "Backend", level: "Expert", years: 5 },
    { name: "Python", category: "Backend", level: "Intermediate", years: 3 },
    { name: "Django", category: "Backend", level: "Intermediate", years: 2 },
    { name: "Flask", category: "Backend", level: "Intermediate", years: 2 },
    { name: "GraphQL", category: "Backend", level: "Intermediate", years: 2 },
    { name: "Socket.IO", category: "Backend", level: "Intermediate", years: 2 },
    // Database
    { name: "MongoDB", category: "Database", level: "Expert", years: 4 },
    { name: "PostgreSQL", category: "Database", level: "Expert", years: 3 },
    { name: "Firebase", category: "Database", level: "Expert", years: 4 },
    { name: "MySQL", category: "Database", level: "Intermediate", years: 3 },
    { name: "Supabase", category: "Database", level: "Intermediate", years: 1 },
    // Cloud & DevOps
    { name: "AWS", category: "Cloud & DevOps", level: "Intermediate", years: 3 },
    { name: "Docker", category: "Cloud & DevOps", level: "Expert", years: 3 },
    { name: "Docker Swarm", category: "Cloud & DevOps", level: "Intermediate", years: 2 },
    { name: "Linux", category: "Cloud & DevOps", level: "Expert", years: 4 },
    { name: "Shell Scripting", category: "Cloud & DevOps", level: "Expert", years: 3 },
    { name: "GitHub Actions", category: "Cloud & DevOps", level: "Expert", years: 3 },
    { name: "Nginx", category: "Cloud & DevOps", level: "Expert", years: 3 },
    { name: "Jenkins", category: "Cloud & DevOps", level: "Intermediate", years: 2 },
    { name: "Kubernetes", category: "Cloud & DevOps", level: "Intermediate", years: 1 },
    { name: "Terraform", category: "Cloud & DevOps", level: "Intermediate", years: 1 },
    { name: "Git", category: "Cloud & DevOps", level: "Expert", years: 5 },
    // Tools
    { name: "VS Code", category: "Tools", level: "Expert", years: 5 },
    { name: "Android Studio", category: "Tools", level: "Expert", years: 4 },
    { name: "Postman", category: "Tools", level: "Expert", years: 4 },
    { name: "Figma", category: "Tools", level: "Intermediate", years: 3 },
    { name: "Jira", category: "Tools", level: "Expert", years: 3 },
    { name: "GitLab", category: "Tools", level: "Expert", years: 3 },
    { name: "BitBucket", category: "Tools", level: "Intermediate", years: 3 },
];

const tabs = ["All", "Mobile", "Frontend", "Backend", "Database", "Cloud & DevOps", "Tools"];

const levelStyle = {
    Expert: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
    Intermediate: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20",
    Beginner: "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/10",
};

const catColor = {
    "Mobile": "text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20",
    "Frontend": "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",
    "Backend": "text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/20",
    "Database": "text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/20",
    "Cloud & DevOps": "text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20",
    "Tools": "text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-500/20",
};

function SkillCard({ skill }) {
    return (
        <motion.div
            variants={cardV}
            className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-xl p-4 flex flex-col gap-3 hover:border-blue-300 dark:hover:border-blue-500/30 hover:shadow-sm transition-all duration-200"
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/6 flex items-center justify-center text-xl flex-shrink-0">
                    {getIcon(skill.name)}
                </div>
                <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight truncate">
                        {skill.name}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {skill.years} year{skill.years > 1 ? "s" : ""} exp
                    </p>
                </div>
            </div>
            <span className={`self-start text-[10px] font-bold px-2.5 py-1 rounded-full border tracking-wide ${levelStyle[skill.level] || levelStyle.Beginner}`}>
                {skill.level}
            </span>
        </motion.div>
    );
}

export default function Skills() {
    const { setVerifiedSkills } = useStats();
    const [activeTab, setActiveTab] = useState("All");

    useEffect(() => { setVerifiedSkills(allSkills.length); }, []);

    const filtered = activeTab === "All" ? allSkills : allSkills.filter((s) => s.category === activeTab);

    const grouped = tabs.slice(1).reduce((acc, cat) => {
        const items = filtered.filter((s) => s.category === cat);
        if (items.length) acc.push({ cat, items });
        return acc;
    }, []);

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0f0f17]">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">Tech Arsenal</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Technology Stack</h2>
                    <p className="text-gray-400 text-sm mt-2">Technologies I use to bring ideas to life</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${activeTab === tab
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                                    : "bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                        {grouped.map(({ cat, items }) => (
                            <div key={cat} className="mb-10 last:mb-0">
                                {activeTab === "All" && (
                                    <div className={`flex items-center gap-3 mb-5 pb-3 border-b ${catColor[cat]}`}>
                                        <h3 className={`text-sm font-bold tracking-wide ${catColor[cat].split(" ")[0]} ${catColor[cat].split(" ")[1]}`}>
                                            {cat}
                                        </h3>
                                        <span className="text-xs text-gray-400">{items.length} skills</span>
                                    </div>
                                )}
                                <motion.div
                                    variants={containerV}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.05 }}
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
                                >
                                    {items.map((skill) => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-5 mt-10 pt-8 border-t border-gray-100 dark:border-white/6"
                >
                    {[
                        { label: "Expert", cls: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20" },
                        { label: "Intermediate", cls: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20" },
                    ].map(({ label, cls }) => (
                        <div key={label} className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${cls}`}>{label}</span>
                            <span className="text-xs text-gray-400">{label === "Expert" ? "4+ yrs" : "1–3 yrs"}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}