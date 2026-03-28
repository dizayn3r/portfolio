export default function SkillCard({ title, skills, color = "blue" }) {
    const colorMap = {
        blue:   { heading: "text-blue-600 dark:text-blue-400",   tag: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-500/20",   bar: "bg-blue-500"   },
        cyan:   { heading: "text-cyan-600 dark:text-cyan-400",   tag: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-100 dark:border-cyan-500/20",   bar: "bg-cyan-500"   },
        violet: { heading: "text-violet-600 dark:text-violet-400", tag: "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-100 dark:border-violet-500/20", bar: "bg-violet-500" },
        green:  { heading: "text-green-600 dark:text-green-400",  tag: "bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-300 border-green-100 dark:border-green-500/20",  bar: "bg-green-500"  },
        amber:  { heading: "text-amber-600 dark:text-amber-400",  tag: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-500/20",  bar: "bg-amber-500"  },
        rose:   { heading: "text-rose-600 dark:text-rose-400",    tag: "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-100 dark:border-rose-500/20",    bar: "bg-rose-500"   },
    };

    const c = colorMap[color] || colorMap.blue;
    const levelColor = { Expert: "text-emerald-600 dark:text-emerald-400", Intermediate: "text-amber-600 dark:text-amber-400", Beginner: "text-gray-400" };

    return (
        <div className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl p-5 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-sm transition-all duration-200">
            <h3 className={`text-xs font-bold tracking-widest uppercase mb-4 pb-3 border-b border-gray-100 dark:border-white/6 ${c.heading}`}>
                {title}
            </h3>
            <div className="flex flex-col gap-2.5">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between group">
                        <div className="flex items-center gap-2 min-w-0">
                            <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border flex-shrink-0 ${c.tag}`}>
                                {skill.name}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                            {skill.level && (
                                <span className={`text-[10px] font-semibold ${levelColor[skill.level] || "text-gray-400"}`}>
                                    {skill.level}
                                </span>
                            )}
                            {skill.years && (
                                <span className="text-[10px] text-gray-400 dark:text-gray-500">{skill.years}y</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
