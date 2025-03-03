import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

export default function Home() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState("");
    const sections = ["about", "experience", "projects"];

    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );
        document.querySelectorAll("section").forEach((section) => observer.observe(section));
        return () => document.querySelectorAll("section").forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <div className="w-full min-h-screen bg-sky-950 flex flex-col md:flex-row ">
            {/* Glowing Cursor Effect */}
            <div
                className="fixed w-20 h-20 opacity-30 blur-3xl bg-sky-300 rounded-full pointer-events-none transition-transform duration-100"
                style={{
                    top: cursorPos.y,
                    left: cursorPos.x,
                    transform: "translate(-50%, -50%)",
                }}
            ></div>

            {/* Left Section */}
            <div className="w-full md:w-1/2 md:fixed flex flex-col px-6 py-10 text-white  top-0 left-10 overflow-hidden">
                <div className="container w-full flex flex-col gap-4 mt-6">
                    <h1 className="text-3xl md:text-xl font-bold self-start tracking-tight w-full leading-none">Nimrod Omanga .O</h1>
                    <h2 className="text-lg md:text-medium self-start font-medium tracking-tighter w-full leading-none">Full Stack Web Developer / AI & ML Engineer</h2>
                    <p className="text-sm md:text-base self-start w-full leading-normal">I am a proficient Full-Stack Web Developer specializing <br/>in building dynamic and scalable web applications.</p>
                    
                    {/* Navigation Menu */}
                    <nav className="flex flex-col space-y-4 mt-15 hidden md:flex">
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
                    
                    {/* Social Icons */}
                    <div className=" md:flex space-x-4 mt-16 md:text-3xl flex-row flex text-2xl ">
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
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 md:ml-auto p-6 md:p-10 space-y-16 md:space-y-20 min-h-screen overflow-y-auto flex flex-col">
                {sections.map((section) => (
                    <section id={section} key={section} className="min-h-screen flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold capitalize">{section}</h2>
                        {section === "about" && (
                            <div>
                                <p className="mt-4 text-gray-300">I am a passionate and skilled full-stack web developer with expertise in both frontend and backend technologies. I specialize in crafting dynamic and responsive user interfaces using HTML, CSS, Bootstrap, Tailwind, JavaScript, and jQuery. On the backend, I work with Python, Node.js, Express, and APIs, leveraging databases like SQL, PostgreSQL, and MongoDB to build scalable and efficient applications.

Beyond traditional web development, I have experience in blockchain technology, developing DeFi applications, crypto tokens, and NFT marketplaces like OpenSea. My expertise extends to AI/ML, where I build advanced Generative AI solutions, including RAG (Retrieval-Augmented Generation) pipelines, intelligent chatbots, and AI-driven applications that push the boundaries of innovation.

With a strong problem-solving mindset and a passion for emerging technologies, I strive to create cutting-edge digital solutions that enhance user experiences and drive technological advancement.<br/>Academically, I hold a Diploma in IT from Jomo Kenyatta University of Agriculture and Technology (JKUAT) and am currently pursuing a Bachelor's degree in Computer Science at the University of the People, California. Through these programs, I have gained strong problem-solving skills, software development expertise, and a deep understanding of data structures, algorithms, and AI/ML technologies.

With a passion for innovation and a drive for continuous learning, I am dedicated to creating scalable, intelligent, and future-ready digital solutions. </p>
                            </div>
                        

                        )}
                        {section=== "experience"&&(
                            <div className="mt-4 space-y-4">
                            <div className="p-6 rounded-lg shadow-lg border border-gay-900 text-white
                                             hover:bg-sky-700 hover:text-white transition-all duration-300 mt-5">
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
                          </div>
       
        )}
                     
         {section==="projects"&&(
          <div className="mt-4 space-y-4">
          <div className="p-6 rounded-lg shadow-lg border border-gay-900 text-white
                           hover:bg-sky-700 hover:text-white transition-all duration-300 mt-5">
              <div>
                  <h1 className="text-2xl"> Ecommerce store</h1>
                  <p>My eCommerce store includes essential features like user authentication, product management, and a secure checkout process with multiple payment options. Customers can browse products, add items to their cart or wishlist, and track orders seamlessly. An admin dashboard enables product, user, and order management, along with analytics for business insights. Additional features like reviews, search filters, and notifications enhance user experience, ensuring a smooth and engaging shopping journey. </p>
                  <div className="flex flex-wrap gap-3 mt-4">
        {["Javascript", "postgreSQL", "RestAPI"].map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-300 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
              </div>
              </div>
              <div className="p-6 rounded-lg shadow-lg border border-gay-900 text-white
                           hover:bg-sky-700 hover:text-white transition-all duration-300 mt-5">
              <div>
                  <h1 className="text-2xl">AI PDF CHATBOT</h1>
                  <p>My AI pdf Chatbot allows users to upload PDFs and interact with them using natural language queries. It extracts text, understands document structure, and provides instant answers based on the content. The chatbot supports multi-page search, highlights relevant sections, and offers summarization for quick insights. With a user-friendly interface and seamless integration, it enhances document accessibility and efficiency </p>
                  <div className="flex flex-wrap gap-3 mt-4">
        {["LangChain", "Vector DB", "Open AI"].map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-300 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
              </div>
              </div>
             
              </div>
         )}               

                       
            
          
     
        
           
                    
      
</section>
  ))}
            {/* Sticky Navbar for Small Screens */}
            <div className={`fixed top-0 left-0 w-full bg-sky-950 bg-opacity-50 py-3 px-6 shadow-lg md:hidden transition-opacity duration-300 ${sections.includes(activeSection) ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex justify-center text-white">
                    <span className="text-lg font-semibold capitalize">{activeSection}</span>
                </div>
            </div>
        </div>
        </div>
    );
}
