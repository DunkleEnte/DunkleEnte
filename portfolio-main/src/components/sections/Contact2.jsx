import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Copy, Check, ArrowRight, Github, MessageCircle } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

    const copyToClipboard = () => {
        navigator.clipboard.writeText("DunkleEnte");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 relative z-20 bg-transparent py-20"
        >
            <div className="max-w-5xl w-full text-center relative">
                
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md"
                >
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                        Available for new projects
                    </span>
                </motion.div>

    
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(1.5rem,8vw,8rem)] font-black tracking-tighter leading-[0.85] mb-12 text-white"
                >
                    Let's build <br /> 
                    <span className="text-neutral-200 hover:text-white transition-colors duration-700">something</span> <br />
                    extraordinary.
                </motion.h2>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col items-center mb-20"
                >
                    <div className="group relative inline-flex items-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden p-1 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                        <div className="flex items-center gap-4 px-8 py-4">
                            <FaDiscord className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                            <span className="font-mono text-2xl font-bold text-white tracking-tight">
                                DunkleEnte
                            </span>
                        </div>
                        
                        <button
                            onClick={copyToClipboard}
                            className="relative cursor-pointer flex items-center justify-center gap-2 min-w-[130px] px-8 py-5 bg-white text-black font-black rounded-xl hover:bg-neutral-200 transition-all duration-300 active:scale-95 uppercase text-xs tracking-widest"
                        >
                            {copied ? (
                                <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                                    <Check className="w-4 h-4" /> Done
                                </motion.div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Copy className="w-4 h-4" /> Copy ID
                                </div>
                            )}
                        </button>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-10"
                >
                    <a
                        href="https://discord.com/users/1122188115084312666"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative py-2 text-white font-bold text-xs uppercase tracking-[0.3em] transition-opacity"
                    >
                        <span className="flex items-center gap-2">
                            Launch Discord <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="https://github.com/dunkleente"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative py-2 text-neutral-500 hover:text-white transition-colors font-bold text-xs uppercase tracking-[0.3em]"
                    >
                        <span className="flex items-center gap-2">
                            <Github className="w-4 h-4" /> Explore Code
                        </span>
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}