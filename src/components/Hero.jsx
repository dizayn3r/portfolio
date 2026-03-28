import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Globe, Mail } from "lucide-react";
import { useStats } from "../context/StatsContext";

const socials = [
    { icon: <Github size={17} />, href: "https://github.com/dizayn3r", label: "GitHub" },
    { icon: <Linkedin size={17} />, href: "https://www.linkedin.com/in/skantin/", label: "LinkedIn" },
    { icon: <Mail size={17} />, href: "mailto:skantin@sknt.in", label: "Email" },
    { icon: <Globe size={17} />, href: "https://sknt.in", label: "Website" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } };
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };

export default function Hero() {
    const { verifiedSkills, professionalProjects } = useStats();

    const stats = [
        { value: "5+", label: "Years Exp." },
        { value: verifiedSkills || "40+", label: "Skills" },
        { value: professionalProjects || "10", label: "Projects" },
        { value: "150+", label: "DSA Solved" },
    ];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16">
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,1) 1px,transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/5 dark:bg-blue-500/8 blur-[150px] pointer-events-none" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-3xl mx-auto text-center w-full"
            >
                <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available for projects
                </motion.div>

                <motion.div variants={item} className="flex justify-center mb-7">
                    <div className="relative">
                        <img
                            src="/photo.jpg"
                            alt="Shashi Kant"
                            className="w-24 h-24 rounded-full object-cover object-top border-4 border-white dark:border-[#1a1a2e] shadow-xl"
                        />
                        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white dark:border-[#0f0f17]" />
                    </div>
                </motion.div>

                <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4">
                    <span className="text-gray-900 dark:text-white">Shashi </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Kant</span>
                </motion.h1>

                <motion.p variants={item} className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 font-light max-w-xl mx-auto leading-relaxed mb-3">
                    Crafting exceptional mobile & web experiences with{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-medium">clean code</span>{" "}
                    and{" "}
                    <span className="text-purple-600 dark:text-purple-400 font-medium">thoughtful design</span>
                </motion.p>

                <motion.p variants={item} className="text-sm text-gray-400 dark:text-gray-500 mb-9">
                    Tech Lead & Flutter Developer · JK Tyre & Industries · Ghaziabad, India
                </motion.p>

                <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <a href="#projects" className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25">
                        View Projects
                    </a>
                    <a href="#contact" className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/25 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200">
                        Available for projects
                    </a>
                </motion.div>

                <motion.div variants={item} className="flex items-center justify-center gap-3 mb-14">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target={s.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-500/30 text-xs font-medium transition-all duration-200"
                        >
                            {s.icon}
                            <span className="hidden sm:inline">{s.label}</span>
                        </a>
                    ))}
                </motion.div>

                <motion.div variants={item} className="grid grid-cols-4 gap-4 pt-8 border-t border-gray-200 dark:border-white/8 max-w-lg mx-auto">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{s.value}</p>
                            <p className="text-xs text-gray-400 mt-0.5 leading-tight">{s.label}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
                <span className="text-[10px] tracking-widest uppercase">Scroll for more</span>
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
                    <ArrowDown size={14} />
                </motion.div>
            </motion.a>
        </section >
    );
}