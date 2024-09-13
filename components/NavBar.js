import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar({ darkMode, setDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 w-full z-10 py-5 bg-white dark:bg-gray-900">
            <div className="flex justify-between items-center px-4 md:px-6">
                <h1 className="font-burtons text-3xl text-black dark:text-white">Rishi Patel</h1>

                <div className="md:hidden">
                    <button
                        className="text-black dark:text-white text-3xl focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? '✖' : '☰'}
                    </button>
                </div>

                <ul className="hidden md:flex items-center space-x-6">
                    <li>
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkMode)}
                            className="cursor-pointer text-2xl text-black dark:text-white"
                        />
                    </li>
                    <li>
                        <a
                            href="#home"
                            className="text-black dark:text-white px-4 py-2 font-bold text-xl hover:text-teal-500 transition-colors"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-black dark:text-white px-4 py-2 font-bold text-xl hover:text-teal-500 transition-colors"
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="text-black dark:text-white px-4 py-2 font-bold text-xl hover:text-teal-500 transition-colors"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-black dark:text-white px-4 py-2 font-bold text-xl hover:text-teal-500 transition-colors"
                        >
                            Projects/Experiences
                        </a>
                    </li>
                </ul>
            </div>

            {isMenuOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-gray-100 dark:bg-gray-800 p-6">
                    <li>
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkMode)}
                            className="cursor-pointer text-2xl text-black dark:text-white"
                        />
                    </li>
                    <li>
                        <a
                            href="#home"
                            className="text-black dark:text-white text-xl font-bold hover:text-teal-500 transition-colors"
                            onClick={toggleMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-black dark:text-white text-xl font-bold hover:text-teal-500 transition-colors"
                            onClick={toggleMenu}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="text-black dark:text-white text-xl font-bold hover:text-teal-500 transition-colors"
                            onClick={toggleMenu}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-black dark:text-white text-xl font-bold hover:text-teal-500 transition-colors"
                            onClick={toggleMenu}
                        >
                            Projects/Experiences
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}

