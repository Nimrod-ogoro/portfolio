import React, { useEffect, useState } from 'react';

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

export default function Home (){
    const [cursorPos, setCursorPos] = useState({x:0, y:0});
    
    const [activeSection, setActiveSection] = useState("About");
    const sections = ["about", "experience", "projects"];
    useEffect(() =>{
        const updateCursor = (e) =>{
            setCursorPos({x:e.clientX, y:e.clientY});
        };
    
    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
}, [])
useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Section becomes active when at least 50% visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);


const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
  
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          { threshold: 0.6 } // Detect when 60% of section is visible
        );
    
        sections.forEach((section) => {
          const sectionElement = document.getElementById(section);
          if (sectionElement) {
            observer.observe(sectionElement);
          }
        });
    
        return () => {
          observer.disconnect();
        };
      }, [])};
    return(
        <div className="w-full min-h-screen bg-sky-950 overflow-hidden flex flex-col ">
        {/* glowing cursor effect */}
        <div
        className=" absolute w-55 h-55  opacity-30 blur-3xl bg-sky-300 rounded-full pointer-events-none transition-transform duration-100"
        style={{
            top:cursorPos.y,
            left:cursorPos.x,
            transform:"translate(-50%, -50%)",
        }}
        ></div>
        
           {/*Left section fixed */}
           <div className="fixed left left-40 top-20 h-screen w-[50%] flex flex-col  px-6 py-10  text-white">
           <div className=" container w-full flex flex-col gap-4">
           <h1 className="text-4xl font-bold self-start tracking-tight text-left width-full leading-none ">Nimrod Omanga .O</h1>
           <h1 className="text-1xl font-medium  self-start tracking-tighter text-left w-full leading-none">Full Stack Web Developer/AI&ML Engineer</h1>
           <p className="text-sm   self-start tracking-tighter text-left leading-normal w-full">I am a proficient Full-Stack Web Developer
                specializing in<br/> building dynamic and scalable web applications. </p>
           </div>
         
           <nav className="flex flex-col space-y-4 mt-15">
      {sections.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className={`flex items-center space-x-3 group transition-all duration-300 ${
            activeSection === item ? "text-white font-semibold" : "text-gray-400"
          }`}
        >
          <span
            className={`h-0.5 transition-all duration-300 ease-in-out ${
              activeSection === item ? "w-20 bg-white" : "w-8 bg-gray-500 group-hover:w-20 group-hover:bg-white"
            }`}
          ></span>
          <span className="capitalize">{item}</span>
        </a>
      ))}
    </nav>

    <div className="flex space-x-6 mt-30 text-3xl">
      <a href="https://github.com/Nimrod-ogoro" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-400 hover:text-white transition-transform transform hover:scale-110" />
      </a>
      <a href="https://www.linkedin.com/in/nimrod-ogoro-b538a2311/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-400 hover:text-white transition-transform transform hover:scale-110" />
      </a>
      <a href="https://www.upwork.com/freelancers/~019645d57bac9274b4?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~019645d57bac9274b4%2Fprofile" target="_blank" rel="noopener noreferrer">
        <FaSquareUpwork className="text-gray-400 hover:text-white transition-transform transform hover:scale-110" />
      </a>
      <a href="https://wa.me/+254796643331" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-gray-400 hover:text-white transition-transform transform hover:scale-110" />
      </a>
    </div>
   
           </div>
           <div className="ml-[55%] h-screen overflow-y-scroll p-10 pt-20 space-y-20">
        {/* About Section */}
        <section id="about" className="min-h-screen flex flex-col ">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-300">I am a passionate and skilled full-stack web developer with expertise in both frontend and backend technologies. I specialize in crafting dynamic and responsive user interfaces using HTML, CSS, Bootstrap, Tailwind, JavaScript, and jQuery. On the backend, I work with Python, Node.js, Express, and APIs, leveraging databases like SQL, PostgreSQL, and MongoDB to build scalable and efficient applications.

Beyond traditional web development, I have experience in blockchain technology, developing DeFi applications, crypto tokens, and NFT marketplaces like OpenSea. My expertise extends to AI/ML, where I build advanced Generative AI solutions, including RAG (Retrieval-Augmented Generation) pipelines, intelligent chatbots, and AI-driven applications that push the boundaries of innovation.

With a strong problem-solving mindset and a passion for emerging technologies, I strive to create cutting-edge digital solutions that enhance user experiences and drive technological advancement.<br/>Academically, I hold a Diploma in IT from Jomo Kenyatta University of Agriculture and Technology (JKUAT) and am currently pursuing a Bachelor's degree in Computer Science at the University of the People, California. Through these programs, I have gained strong problem-solving skills, software development expertise, and a deep understanding of data structures, algorithms, and AI/ML technologies.

With a passion for innovation and a drive for continuous learning, I am dedicated to creating scalable, intelligent, and future-ready digital solutions.

</p>
        </section>
        {/* Experience Section */}
    <section id="experience" className="min-h-screen">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="mt-4 space-y-4">
        <div className="p-6 rounded-lg shadow-lg border border-gay-900 text-white
                         hover:bg-sky-700 hover:text-white transition-all duration-300">
            <div>
                <h1 className="text-2xl">Excelerate-Prompt Engineer 2025-present (2months)</h1>
                <p>As a Prompt Engineer at Accelerate, I specialized in designing, optimizing, and fine-tuning prompts to enhance AI model performance. My role involved developing AI-driven applications, refining language model outputs for accuracy and relevance, and integrating AI solutions into real-world use cases. </p>
                
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
        {["Prompt Engineering", "Model fine-tuning", "optimizing AI-generated response"].map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-400 transition"
          >
            {skill}
          </span>
        ))}
      </div>
      </div>
      </div>
      <div className="p-6 rounded-lg shadow-lg border border-gay-900 text-white
                         hover:bg-sky-700 hover:text-white transition-all duration-300 mt-6">
            <div>
                <h1 className="text-2xl"> Full Stack Developer Freelancer 2023-present(2years)</h1>
                <p>As a Prompt Engineer at Accelerate, I specialized in designing, optimizing, and fine-tuning prompts to enhance AI model performance. My role involved developing AI-driven applications, refining language model outputs for accuracy and relevance, and integrating AI solutions into real-world use cases. </p>
                
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
        {["Prompt Engineering", "Model fine-tuning", "optimizing AI-generated response"].map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-400 transition"
          >
            {skill}
          </span>
        ))}
      </div>
        </div>
        
     
      </section>
     
     {/* Projects Section */}
     <section id="projects" className="min-h-screen p-20 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="mt-4 space-y-6">
            {/* Project 1 */}
            <div className="p-5 border border-gray-700 rounded-lg hover:bg-blue-500 transition duration-300">
              <h2 className="text-xl font-semibold">E-commerce Platform</h2>
              <p className="text-gray-300">Built a full-featured e-commerce site with React, Redux, and Stripe payments.</p>
            </div>

            {/* Project 2 */}
            <div className="p-5 border border-gray-700 rounded-lg hover:bg-blue-500 transition duration-300">
              <h2 className="text-xl font-semibold">AI Chatbot</h2>
              <p className="text-gray-300">Developed a chatbot with GPT-4 fine-tuning to provide personalized responses.</p>
            </div>
          </div>
        </section>

           </div>
           </div>
)}


