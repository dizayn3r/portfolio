export default function Education() {
    const education = [
        { degree: "Bachelor of Science in Computer Science", institution: "University of XYZ", year: "2018-2022" },
        { degree: "High School Diploma", institution: "ABC High School", year: "2016-2018" },
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center">Education</h2>
                <div className="mt-8 space-y-6">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                            <p className="mt-2 text-gray-700">{edu.institution}</p>
                            <p className="mt-2 text-gray-500">{edu.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}