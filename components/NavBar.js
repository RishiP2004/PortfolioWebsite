import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar({ darkMode, setDarkMode }) {
    return (
        <nav className="fixed top-0 w-full z-10 py-5 flex justify-between bg-white dark:bg-gray-900">
            <h1 className="font-burtons text-3xl text-black dark:text-white px-6">Rishi Patel</h1>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-2xl text-black dark:text-white"
                    />
                </li>
                <li>
                    <a
                        href="#home"
                        className="text-black dark:text-white px-6 py-4 border-none rounded-md ml-8 font-bold text-xl hover:text-teal-500 transition-colors"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className="text-black dark:text-white px-6 py-4 border-none rounded-md ml-8 font-bold text-xl hover:text-teal-500 transition-colors"
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        href="#skills"
                        className="text-black dark:text-white px-6 py-4 border-none rounded-md ml-8 font-bold text-xl hover:text-teal-500 transition-colors"
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="text-black dark:text-white px-6 py-4 border-none rounded-md ml-8 font-bold text-xl hover:text-teal-500 transition-colors"
                    >
                        Projects/Experiences
                    </a>
                </li>
            </ul>
        </nav>
    );
}
