import Head from "next/head";
import { useState } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutMeSection from "../components/AboutMeSection";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Rishi Patel - Portfolio</title>
                <meta name="description" content="Portfolio of Rishi Patel" />
            </Head>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="main-content bg-white px-10 dark:bg-gray-900 md:px-10 lg:px-20">
                <section id="home" className="min-h-screen">
                    <HeroSection />
                </section>

                <section id="about" className="min-h-screen">
                    <AboutMeSection />
                </section>

                <section id="skills" className="min-h-screen">
                    <SkillsSection />
                </section>

                <section id="projects" className="min-h-screen">
                    <ProjectsSection />
                </section>
            </main>
        </div>
    );
}