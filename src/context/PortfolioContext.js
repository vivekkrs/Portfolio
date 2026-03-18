'use client';
import java from '../img/java.png';
import Python from '../img/python.webp';
import mongodb from '../img/mongodb.jpg';
import node from '../img/node.png';
import reactjs from '../img/reactjs.png';
import spring from '../img/spring.png';
import css from '../img/css.jpg';
import html from '../img/html.png';
import springboot from '../img/springBoot.jpg';
import { createContext } from 'react';
import movie from '../img/movie.png'
import airQuality from '../img/airQuality.png'
import excel from '../img/excel.png'
import chatGPT from '../img/chatGPT.png'
import automata from '../img/automata.png'
import cloudComputing from '../img/cloud_Computing.jpg'
import software_engineering from '../img/software_Engineering.png'
import trainingDSA from '../img/trainingDSA.png'
import powerBi from '../img/powerBi.png'

// Step 1
export const portfolioContext = createContext();

// Step 2
export default function PortfolioContextProvider({ children }) {
    const ProjectItems = [
        { id: 1, logo: mongodb, name: "MongoDB" },
        { id: 2, logo: java, name: "Java" },
        { id: 3, logo: Python, name: "Python" },
        { id: 4, logo: node, name: "NodeJs" },
        { id: 5, logo: spring, name: "Spring" },
        { id: 6, logo: reactjs, name: "ReactJs" }
    ];

    const ExperienceItems = [
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

    const AboutmeData =
        `Aspiring Software Engineer | Data Analyst | Data Science Enthusiast

I'm Vivek Kumar, a B.Tech CSE student at Lovely Professional University with a strong passion for data analysis and data science. I specialize in working with data to extract meaningful insights using tools and techniques in data analysis, visualization, and statistical modeling.

Beyond development, I have a keen interest in data analysis and visualization, demonstrated through my Amazon Prime Video Dashboard project using Tableau. I’ve solved over 200 coding problems on platforms like LeetCode and GeeksforGeeks, constantly refining my problem-solving and algorithmic thinking.

I actively pursue online certifications and practical learning to stay ahead in tech. My goal is to build scalable, secure, and user-centric solutions that create real-world impact and improve lives through innovation and technology.`;

        const AboutData = {
            education: [
              { title: "Bachelor of Technology - Computer Science and Engineering", institution: "Lovely Professional University", duration: "2023 – Present" },
              { title: "Intermediate (12th)", institution: "GOPAL JI PRASAD HIGH SCHOOL", duration: "2020 – 2023" },
              { title: "Matriculation (10th)", institution: "GOPAL JI PRASAD HIGH SCHOOL", duration: "2018 – 2020" },
              { title: "Data Structures and Algorithms Training", institution: "CipherSchools", duration: "Jun 2025 – Jul 2025" },
              ],
          
            skill_experience: [
              {
                category: "Programming Languages",
                skills: [
                  { name: "Java", imgUrl: "https://th.bing.com/th/id/OIP.qI8zjBr4HClaAvkTP2ZzpwHaE8?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Python Programming", imgUrl: "https://www.pngmart.com/files/23/Python-Logo-PNG-Picture.png" },
                  { name: "C++", imgUrl: "https://th.bing.com/th/id/OIP.Fzdk6hc9sVxoZlkn3_N-mQHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "JavaScript", imgUrl: "https://th.bing.com/th/id/OIP.8lG71Gr7LODSWlZITL-NfwHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                ]
              },
              {
                category: "Databases & Tools",
                skills: [
                  { name: "Power BI", imgUrl: "https://th.bing.com/th/id/OIP.L2XFx35QtcEYDePQ44DgwQHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Tableau", imgUrl: "https://tse3.mm.bing.net/th/id/OIP.w-qTcyA4TSToAE1FZlj5nwHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
                  { name: "Excel", imgUrl: "https://th.bing.com/th/id/OIP.chmccn7yfkv2Z25qrZHxzwHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "MongoDB", imgUrl: "https://th.bing.com/th/id/OIP.j3YhzxdAI2oEN4DQUq26wwHaDt?w=333&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "MySQL", imgUrl: "https://th.bing.com/th/id/OIP.N-EzPm0vVtDmkP4afj9kAgHaEo?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                ]
              },
              {
                category: "Development Tools",
                skills: [
                  { name: "Git", imgUrl: "https://th.bing.com/th/id/OIP.SrJea1F5IEm-u0W_QfFi6wHaEK?w=1536&h=864&rs=1&pid=ImgDetMain" },
                  { name: "GitHub", imgUrl: "https://th.bing.com/th/id/OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "HTML", imgUrl: "https://th.bing.com/th/id/OIP.S-sXozyvtrUrtTzemQXpFwHaEK?w=339&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "CSS", imgUrl: "https://th.bing.com/th/id/OIP.F3-e7zCL-kHsXcb8odZpqAHaFP?w=204&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "TailWind CSS", imgUrl: "https://th.bing.com/th/id/OIP.MNndCdi_PnXQdTCOoMLM9QHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "React Js", imgUrl: "https://th.bing.com/th/id/OIP.-i781M2JNO6ZYT5VetHsSAHaDt?w=321&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Express", imgUrl: "https://th.bing.com/th/id/OIP.lt9WI3J34Khu2UxzAe_QnQHaER?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Node js", imgUrl: "https://th.bing.com/th/id/OIP.m5RYM_Wkj4LsZewpigV5tgHaDf?w=349&h=164&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "JWT", imgUrl: "https://th.bing.com/th/id/OIP.W8YX-Hxj-2vHX1FBwcj-dAHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "REST APIs", imgUrl: "https://th.bing.com/th/id/OIP.6QTSZNxNredTYB0NdUZBHgHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
                ]
              },
              {
                category: "Soft Skills",
                skills: [
                  { name: "Problem-Solving" },
                  { name: "HardWorking" },
                  {name:"Team Player"}
                ]
              }
            ],
          
            professional_experience: [
              {
                title: "Machine Learning Project",
                company: "Movie Recommender System",
                duration: "Oct 2025 – Dec 2025",
                techUsed: [
                  "Python","Machine Learning","NLP (Natural Language Processing)","NumPy","Pandas","Streamlit","CountVectorizer" ,"Cosine Similarity (sklearn)",
                ],
                imgUrl: movie,
                gitHubLink: "https://github.com/vivekkrs/Movie_Recommender_System_ML",
                deployedLink: '#'
              },
              {
                title: "",
                company: "Air Quality Data Analysis and Visualizations",
                duration: "Apr 2025 – May 2025",
                techUsed: [
                  "Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "scipy","EDA (Exploratory Data Analysis)", 
                ],
                imgUrl: airQuality,
                gitHubLink: "https://github.com/vivekkrs/Air-quality-Data-Analysis-and-Visualization-using-Python",
                deployedLink: '#'
              },
              {
                title: "Data Analyst",
                company: "Road Accident Data",
                duration: "Mar 2025 – Apr 2025",
                techUsed: [
                  "Excel", "Data Visualization", "Charts", "Dashboard Design"
                ],
                imgUrl: excel,
                gitHubLink: "#",
                deployedLink: "#"
              },
              {
                title: "Data Analyst",
                company: "Sweet Spot: Diabetes Analytics",
                duration: "Sep 2024 – oct 2024",
                techUsed: [
                  "Power BI", "Data Visualization", "Charts", "Dashboard Design"
                ],
                imgUrl:powerBi,
                gitHubLink: "https://github.com/vivekkrs/Diabetes-Analytics-Dashboard-",
                deployedLink: "#"
              },
            ],
            
            certificates: [
              { title: "Cloud Computing", institution: "IIT Kharagpur", duration: "Jul 2025 – Oct 2025", img: cloudComputing },
              { title: "Software Engineering: Implementation and Testing", institution: "Coursera", duration: "Feb 2024 – May 2024", img: software_engineering },
              { title: "Data Structures and Algorithms", institution: "CipherSchools", duration: "Jun 2025 – Aug 2025", img: trainingDSA },
              { title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM", institution: "Infosys", duration: "Jul 2025 – Aug 2025", img: chatGPT },
              { title: "Computational Theory: Language Principle & Finite Automata Theory", institution: "Infosys", duration: "Jul 2025 – Aug 2025", img: automata },
            ],
            
          
            achievements: `Solved 200+ coding problems on LeetCode & GeeksforGeeks (2026)`,
          
            mission_statement: `My mission is to leverage my skills and creativity to deliver innovative software engineering solutions 
            that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and 
            growth, always seeking new challenges and opportunities to expand my horizons.`
          };
          

    const value = {
        ExperienceItems,
        ProjectItems,
        AboutmeData,
        AboutData
    };

    // Step 3
    return (
        <portfolioContext.Provider value={value}>
            {children}
        </portfolioContext.Provider>
    );
}
