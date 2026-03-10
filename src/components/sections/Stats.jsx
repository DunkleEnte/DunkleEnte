import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedNumber({ value, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const end = value;
        const duration = 1500;
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(easedProgress * end));
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }, [isInView, value]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
}

const stats = [
    { value: 1, suffix: "+", label: "Year Experience" },
    { value: 20, suffix: "+", label: "Projects Delivered" },
    { value: null, display: "24/7", label: "Support Available" },
];

const availability = [
    { type: "Long-term", color: "#22c55e", pulse: true },
    { type: "Commissions", color: "#eab308", pulse: false },
    { type: "Small projects", color: "#ef4444", pulse: false },
];

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 px-8 lg:px-16 relative z-10 bg-transparent text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.2)" }}
                                className="text-center py-12 px-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300"
                            >
                                <div className="text-6xl md:text-8xl font-black tracking-tight mb-3 text-white">
                                    {stat.value !== null ? (
                                        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                    ) : (
                                        stat.display
                                    )}
                                </div>
                                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-t border-white/5">
                        {availability.map((item, i) => (
                            <div key={item.type} className="flex items-center gap-2.5">
                                <span className="relative flex h-2 w-2">
                                    {item.pulse && (
                                        <span
                                            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                            style={{ backgroundColor: item.color }}
                                        />
                                    )}
                                    <span
                                        className="relative inline-flex rounded-full h-2 w-2"
                                        style={{ backgroundColor: item.color }}
                                    />
                                </span>
                                <span
                                    className="text-sm font-medium"
                                    style={{ color: item.color }}
                                >
                                    {item.type}
                                </span>
                                {i < availability.length - 1 && (
                                    <span className="ml-3 text-sm text-neutral-800">
                                        /
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}