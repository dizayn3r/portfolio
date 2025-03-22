export default function Experience() {
    const experiences = [
        { role: "Frontend Developer", company: "Tech Corp", duration: "2022-Present" },
        { role: "Intern", company: "Web Solutions", duration: "2021-2022" },
    ];

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center">Experience</h2>
                <div className="mt-8 space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <p className="mt-2 text-gray-700">{exp.company}</p>
                            <p className="mt-2 text-gray-500">{exp.duration}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}