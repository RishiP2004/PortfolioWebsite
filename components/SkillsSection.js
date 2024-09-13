import Image from "next/image";
import software from "../public/software.png";
import hardware from "../public/hardware.png";

export default function SkillsSection() {
    return (
        <section className="py-6">
            <h2 className="text-4xl font-semibold py-6 dark:text-teal-400 text-center">
                Skills
            </h2>
            <div className="lg:flex gap-10 justify-center">
                <div className="text-center shadow-lg p-8 rounded-xl my-6 dark:bg-white flex-1">
                    <Image src={software} width={100} height={100} />
                    <h3 className="text-lg font-medium pt-8 pb-2">Software Skills</h3>
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full sm:w-1/3 px-2">
                            <p className="py-4 font-bold">Languages</p>
                            <ul>
                                {['Python', 'Java', 'C/C++', 'HTML', 'CSS', 'Javascript', 'SQLite', 'MySQL', 'MongoDB', 'PHP'].map((tool) => (
                                    <li className="text-gray-800 py-1" key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/3 px-2">
                            <p className="py-4 font-bold">Frameworks</p>
                            <ul>
                                {['React', 'Node', 'Next', 'Express', 'Django', 'JUnit', 'Flutter'].map((tool) => (
                                    <li className="text-gray-800 py-1" key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/3 px-2">
                            <p className="py-4 font-bold">Agile Methodologies</p>
                            <ul>
                                {['Scrum', 'Agile', 'SOLID Principles', 'Design Patterns', 'Software Testing', 'Documentation Control', 'Performance Optimization'].map((tool) => (
                                    <li className="text-gray-800 py-1" key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center shadow-lg p-8 rounded-xl my-6 dark:bg-white flex-1">
                    <Image src={hardware} width={100} height={100} />
                    <h3 className="text-lg font-medium pt-8 pb-2">Hardware Skills</h3>
                    <ul>
                        {['Arduino', 'VHDL', 'PCB Design'].map((tool) => (
                            <li className="text-gray-800 py-1" key={tool}>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}


