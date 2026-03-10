import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Copy, Check, ExternalLink, Users } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import echoImg from "../../assets/echosmp.png";
import classicImg from "../../assets/classicmc.png";
import leoImg from "../../assets/leosmp.png";
import acsImg from "../../assets/acspvp.png";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        title: "EchoSMP",
        role: "Lead Developer",
        description: "Incredible Minecraft Shop Survival Network with unique concepts, focusing on PvP and more!",
        startDate: "Aug '27",
        endDate: "Now",
        players: "~125 avg / 300+ peak",
        image: echoImg,
        link: "https://discord.gg/echosmp",
        website: "https://store.echosmp.com",
        ip: "echosmp.com",
        ongoing: true,
    },
    {
        title: "ClassicMC",
        role: "Developer",
        description: "Shop Survival Network, with a medium community and fun events! Project has been discontinued.",
        startDate: "May '17",
        endDate: "Aug '26",
        players: "~50 avg / 150 peak",
        image: classicImg,
        link: "https://discord.gg/classicmc",
        ip: "classicmc.eu",
        ongoing: false,
    },
    {
        title: "LeoSMP",
        role: "Developer",
        description: "Amazing Shop Survival network, with tons of features. Project has been discontinued. ",
        startDate: "Oct '31",
        endDate: "Dec '17",
        players: "~50 avg",
        image: leoImg,
        link: "https://discord.gg/leonetwork",
        ip: "leosmp.net",
        ongoing: false,
        ipOffline: true,
    },
    {
        title: "AcsPvP",
        role: "Developer",
        description: "PvP & Survival Minecraft network focusing on a smooth gameplay experience. Made from a PvPer for PvPers.",
        startDate: "Aug '24",
        endDate: "Now",
        players: "~20-30 avg",
        image: acsImg,
        link: "https://discord.gg/acspvp",
        ip: "acspvp.de",
        ongoing: true,
    },
    {
        title: "Freelancing",
        role: "Freelance Developer",
        description: "Working with clients on a variety of projects, from small plugins to large server networks.",
        startDate: "2025",
        endDate: "Now",
        players: null,
        image: "https://mc-heads.net/avatar/dunkleente/128",
        link: "https://discord.com/users/1122188115084312666",
        ip: null,
        ongoing: true,
    },
];

function CopyIPButton({ ip, offline }) {
    const [copied, setCopied] = useState(false);
    if (!ip) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(ip);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border border-white/10 bg-white/5 hover:bg-white/10 text-white"
        >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : offline ? `${ip} (offline)` : ip}
        </button>
    );
}

function ProjectSlide({ experience }) {
    return (
        <div className="flex items-center project-slide h-screen">
            <motion.div
                className="w-full max-w-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-5 mb-6">
                    <img src={experience.image} alt={experience.title} className="w-20 h-20 rounded-2xl object-cover border border-white/10 shadow-xl" />
                    <div>
                        <h3 className="text-4xl font-bold text-white tracking-tight">{experience.title}</h3>
                        <p className="text-blue-400 font-medium">{experience.role}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <span className="text-neutral-400 text-sm font-medium">{experience.startDate} — {experience.endDate}</span>
                    {experience.ongoing && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">Active</span>
                    )}
                </div>

                <p className="text-neutral-300 text-lg leading-relaxed mb-6">{experience.description}</p>

                {experience.players && (
                    <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-neutral-300">{experience.players}</span>
                    </div>
                )}

                <div className="flex flex-wrap items-center gap-3">
                    <a href={experience.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all">
                        <FaDiscord className="w-4 h-4" /> Discord
                    </a>
                    {experience.website && (
                        <a href={experience.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all">
                            <ExternalLink className="w-4 h-4" /> Website
                        </a>
                    )}
                    <CopyIPButton ip={experience.ip} offline={experience.ipOffline} />
                </div>
            </motion.div>
        </div>
    );
}

export default function Experience() {
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const progressRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        const slides = section.querySelectorAll(".project-slide");

        const pinTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            pin: leftColRef.current,
            pinSpacing: false,
        });

        const progressTween = gsap.to(progressRef.current, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });

        slides.forEach((slide, index) => {
            ScrollTrigger.create({
                trigger: slide,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveIndex(index),
                onEnterBack: () => setActiveIndex(index),
            });
        });

        return () => {
            pinTrigger.kill();
            progressTween.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section 
            id="experience" 
            ref={sectionRef} 
            className="relative px-8 lg:px-16 bg-transparent"
            style={{ height: `${experiences.length * 100}vh` }}
        >
            <div className="max-w-7xl mx-auto h-full relative z-20">
                <div className="flex h-full">
                    <div ref={leftColRef} className="w-[40%] flex-shrink-0 h-screen flex flex-col justify-center pr-12">
                        <h2 className="text-6xl font-black text-white tracking-tight mb-8">Experience</h2>
                        <div className="flex items-center gap-4 mb-8 text-white">
                            <span className="text-5xl font-black text-blue-500">{String(activeIndex + 1).padStart(2, "0")}</span>
                            <span className="text-xl text-neutral-500">/ {String(experiences.length).padStart(2, "0")}</span>
                        </div>
                        <div className="w-px h-32 bg-white/10 relative overflow-hidden">
                            <div ref={progressRef} className="absolute top-0 left-0 w-full bg-blue-500 origin-top h-full scale-y-0 shadow-[0_0_15px_#3b82f6]" />
                        </div>
                    </div>

                    <div className="w-[60%] flex-shrink-0">
                        {experiences.map((exp) => (
                            <ProjectSlide key={exp.title} experience={exp} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}