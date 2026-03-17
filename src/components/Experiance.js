import java from '../img/java.png';
import Python from '../img/python.webp';
import mongodb from '../img/mongodb.jpg';
import node from '../img/node.png';
import reactjs from '../img/reactjs.png';
import css from '../img/css.jpg';
import spring from '../img/spring.png';
import html from '../img/html.png';
import springboot from '../img/springBoot.jpg';

function Experience() {

    const cardItems = [
        { id: 1, logo: html, name: "HTML" },
        { id: 2, logo: css, name: "CSS" },
        { id: 3, logo: mongodb, name: "MongoDB" },
        { id: 4, logo: java, name: "Java" },
        { id: 5, logo: Python, name: "Python" },
        { id: 6, logo: reactjs, name: "ReactJs" },
        { id: 7, logo: spring, name: "Spring" },
        { id: 8, logo: springboot, name: "SpringBoot" },
        { id: 9, logo: node, name: "NodeJs" }
    ];

    return (
        <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-3">Experience</h1>
                <span className="underline">Features Project</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-2">
                    {cardItems.map(({ id, logo, name }) => (
                        <div
                            key={id}
                            className="h-[220px] w-[220px] shadow-lg bg-slate-50 flex flex-col items-center pt-4 rounded-full cursor-pointer hover:scale-105 duration-300 mx-auto"
                        >
                            <img
                                className="ml-3 w-[130px] h-[130px] rounded-full"
                                src={logo}
                                alt={name}
                            />

                            <div className="p-2">
                                <h1 className="text-2xl font-semibold">{name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="mt-8 mb-5" />
        </div>
    );
}

export default Experience;
