import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

const experiences = [
    {
        company: "Applore Technologies · JK Tyre & Industries",
        roles: [
            { title: "Technical Lead / Team Lead", badge: "Current", period: "Jul 2025 – Present",    duration: "9 months"   },
            { title: "SDE2 – Flutter Developer",   badge: null,      period: "Jun 2024 – Jun 2025",   duration: "1 yr 1 mo"  },
        ],
        location: "Noida / Delhi, India",
        description: "Leading Flutter development and full-stack engineering for JK Tyre's enterprise products — fleet management dashboards, mobile apps, and field testing platforms serving customers across India.",
        achievements: [
            "Led a team of 5 developers shipping 3 production apps",
            "Improved app performance by 30% with clean architecture",
            "Delivered JK Mobility App with 1K+ Play Store downloads",
            "Integrated AWS S3, Auth0, and BLoC state management at scale",
            "Architected Tyre Pulse ML-powered testing platform",
        ],
        technologies: ["Flutter", "React JS", "AWS", "Node.js", "BLoC", "Clean Architecture", "Auth0"],
    },
    {
        company: "POD IT Services",
        roles: [
            { title: "Software Developer", badge: null, period: "Sep 2023 – Jul 2024", duration: "11 months" },
        ],
        location: "India",
        description: "Built and maintained full-stack web and mobile applications. Contributed to product launches and worked on scalable backend services and REST API integrations.",
        achievements: [
            "Delivered 3 client-facing products from scratch",
            "Built RESTful APIs consumed by 10K+ active users",
            "Implemented Keycloak SSO and role-based access control",
        ],
        technologies: ["Flutter", "React JS", "Node.js", "MongoDB", "AWS", "Keycloak"],
    },
    {
        company: "WOW FINSTACK",
        roles: [
            { title: "Junior Software Developer", badge: null, period: "Sep 2020 – Aug 2023", duration: "3 years" },
        ],
        location: "Noida, Uttar Pradesh, India",
        description: "Started professional journey building Flutter mobile apps and React web applications in fintech. Contributed to shipped products with strong focus on UX and reliability.",
        achievements: [
            "Contributed to 3 shipped fintech products",
            "50K+ combined app downloads on Play Store",
            "Implemented payment gateways (2C2P, WooCommerce)",
            "Built real-time features using WebRTC and Socket.IO",
        ],
        technologies: ["Flutter", "React JS", "REST APIs", "Firebase", "Payment Gateways", "WebRTC"],
    },
];

const containerV = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const itemV      = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

export default function Experience() {
    return (
        <motion.section
            id="experience"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#13131f]"
            variants={containerV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
        >
            <div className="max-w-6xl mx-auto">

                <motion.div variants={itemV} className="mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">Professional Journey</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
                    <p className="text-gray-400 text-sm mt-2">My professional journey and the impact I've made</p>
                </motion.div>

                {/* Stats bar */}
                <motion.div variants={itemV} className="grid grid-cols-3 gap-4 mb-12 max-w-sm">
                    {[
                        { value: "5+",  label: "Years Experience" },
                        { value: "3",   label: "Companies"        },
                        { value: "10+", label: "Products Shipped" },
                    ].map((s) => (
                        <div key={s.label} className="text-center bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-xl p-3">
                            <p className="text-xl font-extrabold text-gray-900 dark:text-white">{s.value}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent opacity-20 hidden sm:block" />
                    <div className="space-y-6">
                        {experiences.map((exp, i) => (
                            <motion.div key={i} variants={itemV} className="relative sm:pl-16">
                                {/* Dot */}
                                <div className="hidden sm:flex absolute left-[18px] top-6 w-5 h-5 rounded-full bg-blue-600 border-4 border-slate-50 dark:border-[#13131f] shadow-md items-center justify-center z-10">
                                    <Briefcase size={9} className="text-white" />
                                </div>

                                <div className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl p-6 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-sm transition-all duration-200">

                                    {/* Company + location */}
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{exp.company}</h3>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
                                        <MapPin size={11} />{exp.location}
                                    </div>

                                    {/* Roles */}
                                    <div className="space-y-2 mb-5">
                                        {exp.roles.map((role, j) => (
                                            <div key={j} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 bg-gray-50 dark:bg-white/4 border border-gray-100 dark:border-white/6 rounded-xl px-4 py-2.5">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{role.title}</span>
                                                    {role.badge && (
                                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/25">
                                                            {role.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-400 flex-shrink-0">
                                                    <Calendar size={11} />{role.period} · {role.duration}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{exp.description}</p>

                                    {/* Key Achievements */}
                                    <div className="mb-5">
                                        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Key Achievements</p>
                                        <div className="space-y-1.5">
                                            {exp.achievements.map((a, k) => (
                                                <div key={k} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                    <ChevronRight size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                                    {a}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.technologies.map((t) => (
                                            <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
