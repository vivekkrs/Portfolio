import { useContext } from "react";
import { motion } from "framer-motion";
import { portfolioContext } from "../context/PortfolioContext";

function About() {
    const { AboutData } = useContext(portfolioContext);

    const formatWithNewLine = (text) => {
        if (typeof text === "string") {
            return text.split(',').map((item, index) => (
                <div key={index}>{item.trim()}</div>
            ));
        }
        if (Array.isArray(text)) {
            return text.map((item, index) => {
                if (typeof item === 'string') return <div key={index}>{item}</div>;
                if (typeof item === 'object') return <div key={index}>{item.name}</div>;
                return null;
            });
        }
        return null;
    };

    const ImageCard = ({ imgUrl, name }) => (
        <motion.li
            className="flex flex-col items-center rounded-md border-2 border-gray-300 text-center p-2 shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.4 }}
        >
            <img
                src={imgUrl}
                alt={name}
                className="w-full h-40 md:h-48 object-cover rounded-md mb-1"
            />
            <span className="text-sm md:text-base">{name}</span>
        </motion.li>
    );

    if (!AboutData) return <p>Loading...</p>;

    return (
        <motion.section
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-3xl font-bold mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About
            </motion.h1>

            <p className="mb-4">
                Hello, I'm Vivek, a passionate Data Analyst and Data Science enthusiast. I enjoy transforming data into meaningful insights and building impactful software solutions that solve real-world problems.
            </p>

            {/* Education */}
            <motion.h2 className="text-green-500 font-semibold text-xl">
                Education & Training
            </motion.h2>

            {AboutData.education?.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">
                        {item.institution} ({item.duration})
                    </p>
                </motion.div>
            ))}

            {/* Skills */}
            <motion.h2 className="text-green-500 font-semibold text-2xl mt-6">
                Skill & Experience
            </motion.h2>

            {AboutData.skill_experience?.map((item, idx) => (
                <div key={idx} className="mb-6">
                    <p className="font-semibold">{item.category}</p>

                    {item.category !== "Soft Skills" ? (
                        <motion.ul
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3 border-2 border-gray-200 rounded-sm text-sm"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            {item.skills.map((skill, i) => (
                                <ImageCard
                                    key={i}
                                    imgUrl={skill.imgUrl}
                                    name={skill.name}
                                />
                            ))}
                        </motion.ul>
                    ) : (
                        <ul className="list-disc list-inside ml-4">
                            {item.skills.map((skill, i) => (
                                <li key={i}>{skill.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}

            {/* Certificates */}
            <motion.h2 className="text-green-500 font-semibold text-xl mt-6">
                Certificates
            </motion.h2>

            <motion.ul
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4 border-2 border-gray-200 rounded-sm p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                {AboutData.certificates?.map((cert, index) => (
                    <motion.li
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-3"
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                    >
                        <img
                            src={cert.img}
                            alt={cert.title}
                            className="w-full h-44 object-cover rounded-md mb-3"
                        />

                        <h3 className="text-md font-semibold">
                            {cert.title}
                        </h3>

                        <p className="text-sm text-gray-600">
                            {cert.institution}
                        </p>

                        <p className="text-sm text-gray-500">
                            {cert.duration}
                        </p>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Experience */}
            <motion.h2 className="text-green-500 font-semibold text-xl mt-6">
                Professional Experience
            </motion.h2>

            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 p-2 border-2 border-gray-200 rounded-sm">
                {AboutData.professional_experience?.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="border rounded-md hover:shadow-xl hover:scale-105 transition duration-300 p-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between mb-2">
                            <p className="font-semibold">
                                {index + 1}. {exp.title},{" "}
                                <span className="italic">{exp.company}</span>
                            </p>
                            <span className="text-sm text-gray-600">
                                ({exp.duration})
                            </span>
                        </div>

                        <img
                            className="shadow-md rounded-md mb-3 w-full object-cover"
                            src={exp.imgUrl}
                            alt={exp.title}
                        />

                        <div className="mb-3">
                            <p className="font-medium mb-1">Tech Used:</p>
                            <ul className="flex flex-wrap gap-2">
                                {exp.techUsed.map((point, idx) => (
                                    <li
                                        className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm"
                                        key={idx}
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex justify-between">
                            <a
                                href={exp.deployedLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Deployed Link
                            </a>

                            <a
                                href={exp.gitHubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                GitHub Link
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Achievements */}
            <motion.h2 className="text-green-500 font-semibold text-xl mt-6">
                Achievements & Awards
            </motion.h2>
            {formatWithNewLine(AboutData.achievements)}

            {/* Mission */}
            <motion.h2 className="text-green-500 font-semibold text-xl mt-6">
                Mission Statement
            </motion.h2>
            {formatWithNewLine(AboutData.mission_statement)}

            <hr className="mt-5" />
        </motion.section>
    );
}

export default About;
