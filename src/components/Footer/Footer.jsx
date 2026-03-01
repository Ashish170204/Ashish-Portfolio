import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // 1. items initalized explicitly
  const items = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Ashish170204",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ashish-nautiyal-2453b7315",
    },
  ];

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
  {/* name */}
        <h2 className=" text-xl font-semibold text-purple-500">
          Ashish Nautiyal
        </h2>

  {/* social media icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform hover:scale-150"
            >
              {item.icon}
            </a>
          ))}
        </div>

  {/* copyright message*/}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Ashish Nautiyal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
