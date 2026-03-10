import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
    {
        name: "Development",
        items: ["Java", "JavaScript", "CSS",],
    },
    {
        name: "Data & Storage",
        items: ["MySQL", "SQLite", ],
    },
    {
        name: "Build Tools",
        items: ["Gradle", "Maven", "Git"],
    },
    {
        name: "Architecture",
        items: ["Paper", "Velocity", "BungeeCord", "Spigot"],
    },
    {
        name: "Hosting",
        items: ["Vercel", "Netlify"]
    }
];

function SkillColumn({ category, delay, isLast }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`relative ${!isLast ? 'md:border-r border-white/5' : ''} pr-4`}
        >
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-neutral-600">
                {category.name}
            </h3>
            <ul className="space-y-4">
                {category.items.map((skill) => (
                    <motion.li
                        key={skill}
                        className="group flex items-center cursor-default relative"
                    >
    
                        <div className="absolute -left-4 w-0 group-hover:w-2 h-px bg-white transition-all duration-300 ease-out opacity-0 group-hover:opacity-100" />
                        
                        <span className="text-base text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ease-out">
                            {skill}
                        </span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}

export default function Skills() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    return (
        <section id="skills" className="py-40 px-8 lg:px-16 relative z-20 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <motion.div
                        ref={headerRef}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-white/30 text-xs uppercase tracking-[0.5em] block mb-4">Expertise</span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                            Stack
                        </h2>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={isHeaderInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-neutral-500 max-w-xs text-sm leading-relaxed font-medium"
                    >
                        Focused on high-performance Minecraft-Infrastructure and clean code.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
                    {skillCategories.map((category, i) => (
                        <SkillColumn 
                            key={category.name} 
                            category={category} 
                            delay={i * 0.1} 
                            isLast={i === skillCategories.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}