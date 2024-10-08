import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import dp from "../public/dp.png";
import { Typed } from "react-typed";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const typedElement = useRef(null);

    useEffect(() => {
        if (typedElement.current) {
            const typed = new Typed(typedElement.current, {
                strings: ["Computer Engineer Student", "Software Engineer Student"],
                typeSpeed: 60,
                backSpeed: 50,
                loop: true,
            });
            return () => {
                typed.destroy();
            };
        }
    }, [isClient]);

    return (
        <div className="text-center p-10 py-10">
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative overflow-hidden mt-10">
                <Image src={dp} alt="Profile picture of Rishi Patel" layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Rishi Patel
            </h2>
            <h3 className="text-xl py-2 dark:text-white md:text-3xl font-bold" ref={typedElement} />
            <div className="text-4xl sm:text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-blue-800">
                <AiFillLinkedin
                    onClick={() => window.location.href = "https://linkedin.com/rishi-patel-a5622a284"}
                    className="cursor-pointer hover:text-teal-500 transition-colors"
                />
                <AiFillGithub
                    onClick={() => window.location.href = "https://github.com/RishiP2004"}
                    className="cursor-pointer hover:text-teal-500 transition-colors"
                />
                <AiFillMail
                    onClick={() => window.location.href = "mailto:patelrishi1704@gmail.com"}
                    className="cursor-pointer hover:text-teal-500 transition-colors"
                />
            </div>
        </div>
    );
}
