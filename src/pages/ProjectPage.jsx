import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiPostgresql, SiExpress, SiMongodb, SiOpenai, SiStripe, SiTwilio, SiHtml5, SiCss3, SiJavascript, SiFastapi } from "react-icons/si";

const techIcons = {
  "React.js": <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-400" />,
  "Python": <FaPython className="text-yellow-300" />,
  "Django": <SiDjango className="text-green-700" />,
  "PostgreSQL": <SiPostgresql className="text-blue-600" />,
  "Express": <SiExpress className="text-gray-300" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "OpenAI": <SiOpenai className="text-white" />,
  "Stripe": <SiStripe className="text-blue-500" />,
  "Twilio": <SiTwilio className="text-red-500" />,
  "HTML": <SiHtml5 className="text-orange-500" />,
  "CSS": <SiCss3 className="text-blue-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "FastAPI": <SiFastapi className="text-green-400" />,
  "Automation": <FaExternalLinkAlt className="text-white" />, // placeholder
};

export default function ProjectPage({ title, description, media = [], skills = [], links = [] }) {
  return (
    <div className="w-full min-h-screen bg-sky-950 text-white p-6 md:p-12 flex flex-col gap-10">
      
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>

      {/* Project Description */}
      <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
        {description}
      </p>

      {/* Media Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {media.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg border border-gray-900 hover:scale-105 transform transition-all duration-300 flex justify-center items-center bg-gray-900"
            style={{ maxHeight: "500px" }} // max height, preserves quality
          >
            {item.type === "image" && (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-contain"
              />
            )}
            {item.type === "video" && (
              <video controls className="w-full h-full object-contain">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Technologies / Skills */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Technologies & Skills Used</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-lg shadow-md transition-all duration-300"
            >
              <span className="text-xl">{techIcons[skill] || skill}</span>
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      {links.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Links</h2>
          <div className="flex flex-wrap gap-4">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg shadow-md transition-all duration-300"
              >
                {link.name === "GitHub" ? <FaGithub /> : <FaExternalLinkAlt />}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
