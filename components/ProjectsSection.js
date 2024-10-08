import Image from "next/image";
import ttt from "../public/ttticon.png";
import unimanagement from "../public/unimanagement.png";
import lamp from "../public/lamp.png";
import stockprediction from "../public/stockprediction.png";
import pipelinedcpu from "../public/pipelinedcpu.png";

const projects = [
    {
        src: stockprediction,
        title: "Stock Prediction",
        description: "A tool for predicting stock market trends.",
        link: "https://github.com/RishiP2004/Stock-Prediction-System"
    },
    {
        src: unimanagement,
        title: "Uni Management",
        description: "An app for managing grades, sections and flow.",
        link: "https://github.com/RishiP2004/UniManagement"
    },
    {
        src: ttt,
        title: "GameHub",
        description: "A small game hub with TicTacToe, and Ninja (S-P and M-P options)",
        link: "https://github.com/RishiP2004/GameHub"
    },
    {
        src: lamp,
        title: "Smart Lamp",
        description: "A smart lamp with IoT capabilities.",
        link: "https://github.com/RishiP2004/SoundWifiLamp"
    },
    {
        src: pipelinedcpu,
        title: "Pipelined CPU",
        description: "A simple 16-bit pipelined CPU.",
        link: "https://github.com/RishiP2004/PipelinedCPU"
    }
];
export default function ProjectsSection() {
    return (
        <section className="py-6">
            <h3 className="text-3xl py-1 dark:text-white text-center font-bold">Projects/Experiences</h3>
            <div className="flex flex-row overflow-x-auto gap-8 py-12 font-semibold">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 md:w-96 w-72 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 "
                    >
                        <div className="relative">
                            <Image
                                className="object-cover"
                                src={project.src}
                                layout="responsive"
                                width={400}
                                height={350}
                                alt={project.title}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white text-center">
                                <h4 className="text-lg font-semibold">{project.title}</h4>
                                <p className="text-sm">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
