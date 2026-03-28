import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
    {
        category: "Mobile Dev",
        catColor: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20",
        date: "Mar 28, 2026",
        readTime: "15 min read",
        title: "Clean Architecture with BLoC in Flutter: A Practical Guide",
        excerpt:
            "A hands-on walkthrough of structuring Flutter apps with Clean Architecture and BLoC — covering layers, folder structure, dependency flow, and real code examples drawn from production apps.",
        tags: ["Flutter", "Dart", "BLoC", "Clean Architecture"],
        link: "https://dev.to/skntin/clean-architecture-with-bloc-in-flutter-a-practical-guide-5b4d",
        coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F20h5qmkvsb45el2jj0f2.png",
        platform: "DEV Community",
        isReal: true,
    },
    {
        category: "Architecture",
        catColor: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-500/20",
        date: "Coming soon",
        readTime: "8 min read",
        title: "Building Fleet Management Dashboards with React & AWS",
        excerpt:
            "Lessons from architecting the JK Fleet Admin Dashboard — real-time vehicle tracking, tyre lifecycle management, and role-based inspection workflows at enterprise scale.",
        tags: ["React", "AWS", "Node.js", "Fleet Management"],
        link: null,
        coverImage: null,
        platform: "DEV Community",
        isReal: false,
    },
    {
        category: "DevOps",
        catColor: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-100 dark:border-amber-500/20",
        date: "Coming soon",
        readTime: "6 min read",
        title: "Docker Swarm in Production: Lessons from Real Deployments",
        excerpt:
            "How I use Docker Swarm to deploy and manage services in production — service scaling, rolling updates, secrets management, and the pitfalls to avoid.",
        tags: ["Docker", "DevOps", "Linux", "Shell Scripting"],
        link: null,
        coverImage: null,
        platform: "DEV Community",
        isReal: false,
    },
];

const containerV = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const itemV = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Blog() {
    return (
        <motion.section
            id="blog"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#13131f]"
            variants={containerV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div variants={itemV} className="mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
                        Writing
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                        Blog
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">
                        Thoughts on Flutter, architecture, DevOps & engineering — published on{" "}
                        <a
                            href="https://dev.to/skntin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            DEV Community
                        </a>
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerV}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {posts.map((post, i) => (
                        <motion.article
                            key={i}
                            variants={itemV}
                            className={`group flex flex-col bg-white dark:bg-[#1a1a2e] border rounded-2xl overflow-hidden transition-all duration-200 ${post.isReal
                                ? "border-blue-200 dark:border-blue-500/20 hover:shadow-lg hover:shadow-blue-600/8"
                                : "border-gray-200 dark:border-white/8 hover:border-gray-300 dark:hover:border-white/15 opacity-80"
                                }`}
                        >
                            {/* Cover image — only for real posts */}
                            {post.coverImage && (
                                <div className="h-40 overflow-hidden bg-gray-100 dark:bg-[#0f0f17]">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}

                            {/* No cover — gradient placeholder for upcoming posts */}
                            {!post.coverImage && (
                                <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-white/8 dark:to-white/4" />
                            )}

                            <div className="p-5 flex flex-col flex-1">

                                {/* Meta row */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.catColor}`}>
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        {post.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className={`text-sm font-bold leading-snug mb-2 transition-colors ${post.isReal
                                    ? "text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                    : "text-gray-700 dark:text-gray-300"
                                    }`}>
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/6">
                                    <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                                        <Clock size={11} />
                                        {post.readTime}
                                    </span>

                                    {post.isReal && post.link ? (
                                        <a
                                            href={post.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:gap-2 duration-200"
                                        >
                                            Read on DEV <ArrowRight size={12} />
                                        </a>
                                    ) : (
                                        <span className="text-xs text-gray-300 dark:text-gray-600 italic">
                                            Coming soon
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* DEV.to CTA */}
                <motion.div
                    variants={itemV}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl px-6 py-5"
                >
                    <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                            More articles on DEV Community
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                            Follow me on DEV for Flutter, architecture & DevOps content
                        </p>
                    </div>
                    <a
                        href="https://dev.to/skntin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-100 text-white dark:text-gray-900 text-xs font-semibold transition-all duration-200"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 448 512" fill="currentColor">
                            <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.38 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" />
                        </svg>
                        Follow on DEV
                    </a>
                </motion.div >

            </div >
        </motion.section >
    );
}