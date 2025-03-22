import { useEffect } from "react";
import { useStats } from "../context/StatsContext";
import { calculateTotalExperience } from "../helpers/DateUtils";

export default function EducationExperience() {
    const { setYearsOfExperience } = useStats();
    const education = [
        {
            degree: "B.Tech in Civil Engineering",
            institution: "HIET, Ghaziabad",
            year: "2016",
            details: "Major: Civil Engineering | Minor: C Language Programming | Related coursework: AutoCAD, Stead Pro, Primavera",
        },
    ];

    const experiences = [
        {
            role: "Technical Lead",
            company: "Applore Technologies",
            startDate: new Date("2024-06-10"), // Start date
            endDate: new Date(), // Current date (still employed)
            details: [
                "Developed Tyre Pulse Flutter App for tyre testing and performance analysis.",
                "Built JK Mobility Flutter App for fleet management, improving performance by 30% using clean architecture.",
            ],
        },
        {
            role: "Technical Lead",
            company: "Podit Services",
            startDate: new Date("2023-09-01"),
            endDate: new Date("2024-06-10"),
            details: [
                "Implemented WebRTC for real-time communication in Video Collaboration React App.",
                "Managed deployment to S3 bucket and setup pipeline.",
            ],
        },
        {
            role: "Junior Software Developer",
            company: "Wow Digital Pvt. Ltd.",
            startDate: new Date("2021-08-24"),
            endDate: new Date("2023-08-31"),
            details: [
                "Developed My Temple & My Temple Admin apps for temple management.",
                "Built Eatery Experts & Eatery Manager apps for B2B e-commerce.",
            ],
        },
    ];

    useEffect(() => {
        const totalExperience = calculateTotalExperience(experiences);
        setYearsOfExperience(totalExperience);
    }, []);

    return (
        <section id="education-experience" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Education & Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Section (Left Side) */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Education</h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                                    <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.institution}</p>
                                    <p className="mt-2 text-gray-500 dark:text-gray-400">{edu.year}</p>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section (Right Side) */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Experience</h3>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h4>
                                    <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.company}</p>
                                    <p className="mt-2 text-gray-500 dark:text-gray-400">{exp.startDate.toLocaleDateString()} - {exp.endDate.toLocaleDateString()}</p>
                                    <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}