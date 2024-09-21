export default function AboutMeSection() {
    return (
        <section id="about" className="min-h-screen py-4 pt-4">
            <div className="text-center scroll-mt-24">
                <h2 className="text-4xl font-semibold py-6 dark:text-teal-400">
                    About Me
                </h2>
                <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto py-4">
                    Hi! I&apos;m Rishi Patel, a passionate Computer Engineer with a love for
                    software and hardware. I enjoy learning about new technologies and projects
                    as well as passionate about how things work. I would love to collaborate and
                    get to know more like-minded individuals!
                </p>
            </div>
            <div className="flex justify-center gap-10 py-10">
                <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
                    <h3 className="text-2xl font-medium text-teal-600">Education</h3>
                    <p className="py-2 text-gray-800 text-lg">
                        Expected Bachelor’s in Computer Engineering from Toronto Metropolitan University 2027
                    </p>
                </div>
            </div>
        </section>
    );
}
