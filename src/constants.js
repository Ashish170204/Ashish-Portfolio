// Skills Section Logo's
import htmlLogo from "./assets/skills_logo/html.png";
import cssLogo from "./assets/skills_logo/css.png";
import reactjsLogo from "./assets/skills_logo/reactjs.png";
import tailwindcssLogo from "./assets/skills_logo/tailwindcss.png";

import nodejsLogo from "./assets/skills_logo/nodejs.png";
import expressjsLogo from "./assets/skills_logo/express.png";
import mysqlLogo from "./assets/skills_logo/mysql.png";
import mongodbLogo from "./assets/skills_logo/mongodb.png";
import socketioLogo from "./assets/skills_logo/socketio.png";

import cLogo from "./assets/skills_logo/c.png";
import cppLogo from "./assets/skills_logo/cpp.png";
import javascriptLogo from "./assets/skills_logo/javascript.png";

import gitLogo from "./assets/skills_logo/git.png";
import githubLogo from "./assets/skills_logo/github.png";
import vscodeLogo from "./assets/skills_logo/vscode.png";
import postmanLogo from "./assets/skills_logo/postman.png";
import vercelLogo from "./assets/skills_logo/vercel.png";
import renderLogo from "./assets/skills_logo/render.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "SocketIO", logo: socketioLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLogo },
    ],
  },
];

//.............................................................................................................................................

// Project Section Logo's
import Proj_1Logo from "./assets/work_logo/proj_1.png";
import Proj_2Logo from "./assets/work_logo/proj_2.png";
import Proj_3Logo from "./assets/work_logo/proj_3.png";

export const projects = [
  {
    id: 0,
    title: "Real-Time Chat Application",
    description:
      "A secure real-time messaging application built with Socket.io for instant communication. It features JWT-based authentication with protected routes and role-based access control. MongoDB schemas were designed using Mongoose to efficiently manage users, chatrooms, and messages, ensuring smooth and scalable performance.",
    image: Proj_1Logo,
    tags: [
      "HTML",
      "JavaScript",
      "React JS",
      "TailwindCss",
      "Express JS",
      "Mongo DB",
      "Socket IO",
    ],
    github: "https://github.com/Ashish170204/CHAT-APP-MERN",
    webapp: "https://chat-app-mern-bpyj.onrender.com/",
  },
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website featuring a modern UI/UX and a mobile-first design approach. The platform showcases my projects, skills, education, along with social links and an easy way to connect with me via Gmail, ensuring a seamless experience across all devices.",
    image: Proj_2Logo,
    tags: ["HTML", "JavaScript", "React JS", "TailwindCss"],
    github: "https://github.com/Ashish170204/Ashish-Portfolio",
    webapp: "https://ashish-portfolio-5zq3.vercel.app/",
  },
  {
    id: 2,
    title: "Real-Time Location Tracker",
    description:
      "A real-time location-sharing web application that enables live tracking with instant updates using Socket.io. The backend was developed with Node.js and Express.js to handle seamless data communication. Integrated Leaflet.js with OpenStreetMap to provide interactive maps and accurate live location visualization for a smooth user experience.",
    image: Proj_3Logo,
    tags: ["Node JS", "Express JS", "Socket IO", "Leaflet JS", "OpenStreetMap"],
    github: "https://github.com/Ashish170204/Real-Time-Tracker",
    webapp: "https://real-time-tracker-2.onrender.com/",
  },
];

//.............................................................................................................................................

// Education Section Logo's
import clgLogo from "./assets/education_logo/clg_logo.png";
import schoolLogo from "./assets/education_logo/school_logo.png";

export const education = [
  {
    id: 0,
    img: clgLogo,
    school: "Panjab University, Chandigarh",
    date: "Aug 2024- Present",
    grade: "75%",
    desc: "I have completed my Master’s degree (MCA) in Computer Applications from Panjab University. During my studies, I built a strong foundation in programming, software development, and core computer science principles. I studied subjects such as Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively worked on real-world projects, which significantly enhanced my practical skills and technical knowledge.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: clgLogo,
    school: "Panjab University, Chandigarh",
    date: "Aug 2021 - July 2024",
    grade: "68.8%",
    desc: "I completed my Bachelor’s degree in Computer Science (B.Sc.) from Post Graduate Government College, affiliated with Panjab University. During my studies, I built a strong foundation in core programming and computer science fundamentals, working with languages and technologies such as C, C++, HTML, CSS, JavaScript, Python, and Database Management Systems (DBMS). My coursework and academic projects helped me develop practical knowledge and a solid understanding of essential computing concepts.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "GMSSS Sector 10-A, Chandigarh",
    date: "Apr 2020 - March 2021",
    grade: "89%",
    desc: "I completed my Class 12 education from Government Model Senior Secondary School, Chandigarh, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: schoolLogo,
    school: "GMSSS Sector 10-A, Chandigarh",
    date: "Apr 2018 - March 2019",
    grade: "80.8%",
    desc: "I completed my Class 10 education from Government Model Senior Secondary School, Sector 10, Chandigarh, under the CBSE board.",
    degree: "CBSE (Class X)",
  },
];
