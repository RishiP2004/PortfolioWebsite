import Image from "next/image";
import software from "../public/software.png";
import hardware from "../public/hardware.png";

export default function SkillsSection() {
    return (
        <section className="py-1">
            <h2 className="text-4xl font-semibold py-6 dark:text-teal-400 text-center">
                Skills
            </h2>
            <div className="lg:flex gap-10 justify-center">
                <div className="text-center shadow-lg p-8 rounded-xl my-6 dark:bg-white flex-1">
                    <Image src={software} alt="Software skills icon" width={100} height={100} />
                    <h3 className="text-xl font-bold pt-8 pb-2">Software Skills</h3>
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full sm:w-1/3 px-2 text-lg">
                            <p className="py-4 font-bold">Languages</p>
                            <ul>
                                {['Python', 'Java', 'C/C++', 'HTML', 'CSS', 'Javascript', 'SQLite', 'MySQL', 'MongoDB', 'PHP'].map((tool) => (
                                    <li className="text-gray-800 py-1" key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/3 px-2 text-lg">
                            <p className="py-4 font-bold">Frameworks</p>
                            <ul>
                                {['React', 'Node', 'Next', 'Express', 'Django', 'JUnit', 'Flutter'].map((tool) => (
                                    <li className="text-gray-800 py-1" key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/3 px-2 text-lg">
                            <p className="py-4 font-bold">Agile Methodologies</p>
                            <ul>
                                {['Agile', 'Scrum', 'SOLID Principles', 'Design Patterns', 'Software Testing', 'Documentation Control', 'Performance Optimization'].map((tool) => (
                                    <li className="text-gray-800 py-1" key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center shadow-lg p-8 rounded-xl my-6 dark:bg-white flex-1 text-lg">
                    <Image src={hardware} alt="Hardware skills icon" width={100} height={100} />
                    <h3 className="text-xl font-bold font-medium pt-8 pb-2">Hardware Skills</h3>
                    <ul>
                        {['Arduino', 'VHDL', 'Verilog', 'PCB Design', 'Testbench', 'Quartus'].map((tool) => (
                            <li className="text-gray-800 py-1" key={tool}>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
