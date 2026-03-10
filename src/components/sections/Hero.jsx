import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";

export default function Hero() {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const fullText = "DUNKLEENTE";
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayText(fullText.slice(0, i));
            if (i >= fullText.length) clearInterval(interval);
        }, 110);
        return () => clearInterval(interval);
    }, []);

    const navItems = [
        { name: "Stats", href: "#stats" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        
        if (elem) {
            window.scrollTo({
                top: elem.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 bg-black/50 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-white font-black text-xl tracking-tighter cursor-pointer"
                        onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        DUNKLEENTE
                    </motion.div>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-neutral-400 hover:text-white text-xs font-semibold transition-all duration-300 uppercase tracking-[0.2em] relative group"
                            >
                                {item.name}
                    
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </nav>

            <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 relative z-20">
                <div className="max-w-5xl mx-auto text-center">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
                    >
                        <span className="h-2 w-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        <span className="text-xs font-medium text-neutral-300 uppercase tracking-widest">Available for work</span>
                    </motion.div>

                    <h1 className="text-white text-[clamp(3rem,12vw,9rem)] font-black tracking-tighter leading-none mb-6">
                        {displayText}
                        <span className="inline-block w-[0.05em] h-[0.9em] bg-white ml-2 animate-pulse align-middle" />
                    </h1>

                    <p className="text-neutral-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium">
                        Minecraft Java Developer
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href="#contact" 
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            Get in Touch
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a 
                            href="https://github.com/dunkleente" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}