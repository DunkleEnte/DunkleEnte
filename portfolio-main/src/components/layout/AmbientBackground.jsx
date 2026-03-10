import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function AmbientBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 150 };
    const glowX = useSpring(mouseX, springConfig);
    const glowY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 bg-black pointer-events-none overflow-hidden">
            
            <svg className="absolute inset-0 h-full w-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="global-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path 
                            d="M 60 0 L 0 0 0 60" 
                            fill="none" 
                            stroke="rgba(255,255,255,0.2)" 
                            strokeWidth="1" 
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#global-grid)" />
            </svg>


            <motion.div
                className="absolute w-[700px] h-[700px] rounded-full opacity-25"
                style={{
                    x: glowX,
                    y: glowY,
                    left: -350,
                    top: -350,
                    background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
                    filter: "blur(110px)"
                }}
            />
        </div>
    );
}