import { motion } from "framer-motion";
import { useStats } from "../context/StatsContext";
import { MapPin, Mail, Globe, Award, Briefcase } from "lucide-react";

const fadeLeft = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeRight = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const coreStack = [
    "Flutter", "Dart", "React.js", "Node.js",
    "AWS", "Docker", "TypeScript", "Firebase",
    "Clean Architecture", "BLoC", "REST APIs",
];

const achievements = [
    { icon: <Award size={14} />, text: "Tech Lead at Applore Technologies" },
    { icon: <Briefcase size={14} />, text: "5+ years professional experience" },
    { icon: <Award size={14} />, text: "Docker Certified Associate" },
    { icon: <Award size={14} />, text: "DevOps & Linux Certified" },
];

export default function About() {
    const { verifiedSkills, professionalProjects } = useStats();

    const highlights = [
        { value: "5+", label: "Years Experience", icon: "💼" },
        { value: verifiedSkills || "40+", label: "Skills Mastered", icon: "⚡" },
        { value: professionalProjects || "9", label: "Projects Shipped", icon: "🚀" },
        { value: "150+", label: "DSA Problems Solved", icon: "🧠" },
    ];

    return (
        <section id="about" className="bg-slate-50 dark:bg-[#13131f] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">Get To Know Me</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
                    <p className="text-gray-400 text-sm mt-2">Crafting digital experiences with passion, precision, and purpose</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left: Photo + quick info */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6">

                        <div className="relative w-full max-w-[260px]">
                            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 shadow-lg">
                                <img src="/photo_2.jpg" alt="Shashi Kant" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-xl">
                                <p className="text-[10px] text-gray-400 uppercase tracking-wide">Currently at</p>
                                <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight mt-0.5">Applore Technologies</p>
                                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">Tech Lead · Flutter</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl p-5 w-full max-w-[260px] space-y-3 mt-6">
                            {[
                                { icon: <MapPin size={13} />, text: "Ghaziabad, India" },
                                { icon: <Mail size={13} />, text: "skantin@sknt.in" },
                                { icon: <Globe size={13} />, text: "sknt.in" },
                            ].map(({ icon, text }) => (
                                <div key={text} className="flex items-center gap-2.5 text-xs text-gray-500 dark:text-gray-400">
                                    <span className="text-blue-600 dark:text-blue-400">{icon}</span>
                                    {text}
                                </div>
                            ))}
                            <div className="pt-2 border-t border-gray-100 dark:border-white/6">
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2">Available for</p>
                                {["Open to New Opportunities", "Remote & On-site", "Freelance Projects"].map((t) => (
                                    <div key={t} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300 mb-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Bio + achievements + stack */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="lg:col-span-8 flex flex-col gap-7">

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">👋 Hello, I'm Shashi Kant</h3>
                            <div className="space-y-3 text-gray-600 dark:text-gray-300 text-[15px] leading-[1.8]">
                                <p>
                                    A passionate <span className="text-gray-900 dark:text-white font-semibold">Tech Lead & Full-Stack Developer</span> with 5+ years of experience crafting digital products that users love. I specialise in building scalable mobile and web applications using Flutter, React, and Node.js, with a strong focus on clean architecture, performance, and exceptional user experience.
                                </p>
                                <p>
                                    I currently lead Flutter and full-stack development at <span className="text-gray-900 dark:text-white font-medium">Applore Technologies</span>, delivering enterprise-grade solutions for <span className="text-gray-900 dark:text-white font-medium">JK Tyre & Industries</span> — including fleet management dashboards, mobile tyre inspection apps, and field testing platforms deployed across India.
                                </p>
                                <p>
                                    Beyond work, I enjoy exploring emerging technologies, solving DSA problems, and contributing to open-source. I believe in continuous learning and staying at the forefront of technological innovation.
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">Core Technologies</p>
                            <div className="flex flex-wrap gap-2">
                                {coreStack.map((t) => (
                                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">Achievements</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {achievements.map(({ icon, text }) => (
                                    <div key={text} className="flex items-center gap-2.5 bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-xl px-4 py-2.5">
                                        <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">{icon}</span>
                                        <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a href="#contact" className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20">
                                Let's Connect
                            </a>
                            <a href="https://www.crio.do/learn/portfolio/skantin21/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/25 text-sm font-semibold transition-all duration-200">
                                Crio Portfolio ↗
                            </a>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-gray-200 dark:border-white/8">
                            {highlights.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                                    className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl p-4 flex flex-col items-center text-center hover:border-blue-200 dark:hover:border-blue-500/20 transition-all duration-200"
                                >
                                    <span className="text-xl mb-1">{s.icon}</span>
                                    <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{s.value}</p>
                                    <p className="text-xs text-gray-400 mt-0.5 leading-tight">{s.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}