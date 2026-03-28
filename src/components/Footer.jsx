import { Github, Linkedin, Globe, Heart } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 dark:border-white/6 bg-white dark:bg-[#0f0f17] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <p className="font-extrabold text-lg">
                            <span className="text-gray-900 dark:text-white">SK</span>
                            <span className="text-blue-600 dark:text-blue-400">.</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Full-Stack Developer · Ghaziabad, India</p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
                        {["#about","#skills","#projects","#blog","#experience","#contact"].map((href) => (
                            <a
                                key={href}
                                href={href}
                                className="capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {href.slice(1)}
                            </a>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: <Github size={16} />,   href: "https://github.com/dizayn3r",          label: "GitHub"   },
                            { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/skantin/", label: "LinkedIn" },
                            { icon: <Globe size={16} />,    href: "https://sknt.in",                       label: "Website"  },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="p-2 rounded-full border border-gray-200 dark:border-white/8 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-500/20 transition-all duration-200"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/6 text-center">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
                        © {year} Shashi Kant. Built with
                        <Heart size={11} className="text-red-500 fill-red-500" />
                        using React, Tailwind CSS &amp; Framer Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
}
