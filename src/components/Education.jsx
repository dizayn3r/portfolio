import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, X, ExternalLink, CheckCircle, Shield } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Technology — Civil Engineering",
        school: "HI-TECH Institute of Engineering and Technology, Ghaziabad",
        year: "2012 – 2016",
        icon: "🏛️",
    },
    {
        degree: "12th Grade",
        school: "Govt. Boys Senior Secondary School, Roop Nagar",
        year: null,
        icon: "📚",
    },
];

const certifications = [
    {
        name: "DevOps Certification Training",
        provider: "Professional Certification",
        platform: "Simplilearn",
        issued: "2023",
        image: "/DevOps Certification.webp",
        skills: ["Continuous Integration", "DevOps", "Product Development", "IaaC"],
        verifyId: null,
        verifyUrl: null,
    },
    {
        name: "Docker Certified Associate",
        provider: "Docker Inc.",
        platform: "Docker",
        issued: "2023",
        image: "/Docker Certified Associate.webp",
        skills: ["Docker", "Containerization", "Docker Swarm", "Orchestration"],
        verifyId: null,
        verifyUrl: null,
    },
    {
        name: "CompTIA Linux+",
        provider: "CompTIA",
        platform: "CompTIA",
        issued: "2023",
        image: "/CompTIA Linux.webp",
        skills: ["Linux", "System Administration", "Shell Scripting", "Security"],
        verifyId: null,
        verifyUrl: null,
    },
    {
        name: "DevOps Engineer Masters Program",
        provider: "Simplilearn",
        platform: "Simplilearn",
        issued: "2023",
        image: "/DevOps Engineer.webp",
        skills: ["CI/CD", "Jenkins", "Kubernetes", "Ansible", "Terraform"],
        verifyId: null,
        verifyUrl: null,
    },
    {
        name: "MERN Stack Developer",
        provider: "Simplilearn",
        platform: "Simplilearn",
        issued: "2023",
        image: "/mern.webp",
        skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Full-Stack"],
        verifyId: null,
        verifyUrl: null,
    },
];

const containerV = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardV = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const modalV = { hidden: { opacity: 0, scale: 0.93, y: 16 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25 } } };

export default function Education() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0f0f17]">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
                        Professional Credentials
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                        Certifications
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">
                        Professional certifications and credentials that validate my expertise in modern technologies.
                    </p>
                </motion.div>

                {/* Education cards */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14"
                >
                    {education.map((edu, i) => (
                        <div key={i} className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl p-5 flex gap-4 items-start hover:border-blue-200 dark:hover:border-blue-500/20 transition-colors duration-200">
                            <span className="text-2xl flex-shrink-0">{edu.icon}</span>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <GraduationCap size={13} className="text-blue-600 dark:text-blue-400" />
                                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide">Education</span>
                                </div>
                                <p className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{edu.degree}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{edu.school}</p>
                                {edu.year && (
                                    <span className="inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                        {edu.year}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Cert count banner */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl px-5 py-3">
                        <Shield size={18} className="text-blue-600 dark:text-blue-400" />
                        <div>
                            <span className="text-lg font-extrabold text-gray-900 dark:text-white">{certifications.length} Professional Certifications</span>
                            <span className="text-xs text-gray-400 ml-2">· Verified by industry leaders</span>
                        </div>
                    </div>
                </motion.div>

                {/* Cert grid */}
                <motion.div
                    variants={containerV}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            variants={cardV}
                            onClick={() => setSelected(cert)}
                            className="group bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-300 dark:hover:border-blue-500/30 hover:shadow-lg transition-all duration-200"
                        >
                            {/* Top bar */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-white/6">
                                <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full px-2.5 py-1">
                                    <CheckCircle size={11} className="text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">Verified</span>
                                </div>
                                <ExternalLink size={13} className="text-gray-300 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </div>

                            {/* Image */}
                            <div className="h-40 bg-gray-50 dark:bg-[#0f0f17] overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Card body */}
                            <div className="p-4">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-xs text-gray-400">
                                    <span className="font-medium text-gray-600 dark:text-gray-300">Provider:</span> {cert.provider}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    <span className="font-medium text-gray-600 dark:text-gray-300">Issued:</span> {cert.issued}
                                </p>
                                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-3 group-hover:underline">
                                    View details →
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Detail Modal — same as mramazan.dev */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            variants={modalV}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
                        >
                            {/* Modal header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-white/8">
                                <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full px-3 py-1">
                                    <CheckCircle size={12} className="text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 tracking-wide uppercase">Verified</span>
                                </div>
                                <button
                                    onClick={() => setSelected(null)}
                                    className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/8 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            {/* Cert image */}
                            <div className="h-52 bg-gray-50 dark:bg-[#0f0f17]">
                                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                            </div>

                            {/* Modal body */}
                            <div className="p-5 space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{selected.name}</h3>

                                {/* Meta */}
                                <div className="bg-gray-50 dark:bg-white/4 rounded-xl p-4 space-y-2.5">
                                    {[
                                        { label: "Provider", value: selected.provider },
                                        { label: "Platform", value: selected.platform },
                                        { label: "Issued", value: selected.issued },
                                    ].map(({ label, value }) => (
                                        <div key={label} className="flex items-center gap-3">
                                            <span className="text-xs font-semibold text-gray-400 w-16 flex-shrink-0">{label}:</span>
                                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Skills validated */}
                                <div>
                                    <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2.5">Skills Validated</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selected.skills.map((s) => (
                                            <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Verify ID */}
                                {selected.verifyId && (
                                    <p className="text-xs text-gray-400 font-mono">
                                        ID: <a href={selected.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{selected.verifyId}</a>
                                    </p>
                                )}

                                {/* Actions */}
                                <div className="flex gap-3 pt-1">
                                    {selected.verifyUrl && (
                                        <a
                                            href={selected.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                                        >
                                            <ExternalLink size={13} /> Verify Certificate
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setSelected(null)}
                                        className={`${selected.verifyUrl ? "flex-1" : "w-full"} py-2.5 rounded-xl bg-gray-100 dark:bg-white/8 hover:bg-gray-200 dark:hover:bg-white/12 text-gray-600 dark:text-gray-300 text-xs font-semibold transition-colors`}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
}