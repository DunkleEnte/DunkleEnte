import SmoothScroll from "./components/layout/SmoothScroll";
import AmbientBackground from "./components/layout/AmbientBackground";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills"
import Contact from "./components/sections/Contact"

export default function App() {
    return (

        <div className="bg-black min-h-screen w-full selection:bg-blue-500/30 overflow-x-hidden">
            
            <AmbientBackground />
    
            <SmoothScroll>
                <main className="relative z-10 w-full flex flex-col">
                    <Hero />
                    
                    <div id="stats">
                        <Stats />
                    </div>

                    <Experience />

                    <Skills />

                    <Contact />

                </main>
            </SmoothScroll>
            
        </div>
    );
}