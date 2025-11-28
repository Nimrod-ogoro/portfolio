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
        <div className="w-full min-h-screen bg-sky-950 flex flex-col md:flex-row">

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
            <div className="w-full md:w-1/2 md:fixed flex flex-col px-6 py-10 text-white top-0 left-10 overflow-hidden">
                <div className="container w-full flex flex-col gap-4 mt-6">

                    {/* Profile Image */}
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-sky-400">
                        <img
                            src="/your-image.jpg"
                            alt="Nimrod Omanga"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Profile Info */}
                    <h1 className="text-3xl md:text-xl font-bold tracking-tight leading-none">
                        Nimrod Omanga .O
                    </h1>
                    <h2 className="text-lg md:text-medium font-medium tracking-tighter leading-none">
                        Full Stack Web Developer / AI & ML Engineer
                    </h2>
                    <p className="text-sm md:text-base leading-normal text-gray-300">
                        I am a proficient Full-Stack Web Developer specializing in building
                        dynamic, scalable, and intelligent web applications. With deep skills
                        in frontend, backend, blockchain, and AI engineering, I create
                        cutting-edge digital solutions.
                    </p>

                    {/* Navigation Menu */}
                    <nav className="flex flex-col space-y-4 mt-10 hidden md:flex">
                        {sections.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={`flex items-center space-x-3 group transition-all duration-300 ${
                                    activeSection === item
                                        ? "text-white font-semibold"
                                        : "text-gray-400"
                                }`}
                            >
                                <span
                                    className={`h-0.5 transition-all duration-300 ${
                                        activeSection === item
                                            ? "w-20 bg-white"
                                            : "w-8 bg-gray-500 group-hover:w-20 group-hover:bg-white"
                                    }`}
                                ></span>
                                <span className="capitalize">{item}</span>
                            </a>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-16 text-2xl md:text-3xl">
                        <a href="https://github.com/Nimrod-ogoro" target="_blank">
                            <FaGithub className="text-gray-400 hover:text-white hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.linkedin.com/in/nimrod-ogoro-b538a2311/" target="_blank">
                            <FaLinkedin className="text-gray-400 hover:text-white hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.upwork.com/freelancers/~019645d57bac9274b4" target="_blank">
                            <FaSquareUpwork className="text-gray-400 hover:text-white hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://wa.me/+254796643331" target="_blank">
                            <FaWhatsapp className="text-gray-400 hover:text-white hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 md:ml-auto p-6 md:p-10 space-y-20 min-h-screen overflow-y-auto flex flex-col">

                {sections.map((section) => (
                    <section id={section} key={section} className="min-h-screen flex flex-col">

                        {/* Section Title */}
                        <h2 className="text-2xl md:text-3xl font-bold capitalize">{section}</h2>

                        {/* ABOUT SECTION */}
                        {section === "about" && (
                            <div>
                                <p className="mt-4 text-gray-300">
                                    I am a passionate full-stack developer specializing in modern
                                    frontend technologies such as HTML, CSS, Bootstrap, Tailwind,
                                    JavaScript, React, and jQuery. I also build powerful backend
                                    systems using Python, Node.js, Express, and PostgreSQL / SQL /
                                    MongoDB.
                                    <br /><br />
                                    Beyond traditional development, I work on AI/ML applications
                                    including Generative AI, RAG pipelines, intelligent chatbots,
                                    and automation tools. I also have experience building
                                    blockchain applications including crypto tokens, DeFi platforms,
                                    and NFT marketplaces.
                                    <br /><br />
                                    I hold a Diploma in IT from JKUAT and I’m currently pursuing a
                                    Bachelor's degree in Computer Science at the University of the
                                    People, California.
                                </p>
                            </div>
                        )}

                        {/* EXPERIENCE SECTION */}
                        {section === "experience" && (
                            <div className="mt-4 space-y-6">

                                {/* Prompt Engineer */}
                                <div className="p-6 rounded-lg shadow-lg border border-gray-900 text-white hover:bg-sky-700 transition-all">
                                    <h1 className="text-2xl font-semibold">Prompt Engineer — Accelerate (2025 – Present)</h1>
                                    <p className="mt-2 text-gray-200">
                                        Designed, optimized, and fine-tuned prompts to enhance AI
                                        model performance. Built AI-driven applications and improved
                                        language model accuracy for real-world use cases.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {["Prompt Engineering", "Model Fine-Tuning", "AI Optimization"].map((skill, i) => (
                                            <span key={i} className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Freelancer */}
                                <div className="p-6 rounded-lg shadow-lg border border-gray-900 text-white hover:bg-sky-700 transition-all">
                                    <h1 className="text-2xl font-semibold">Full-Stack Developer — Freelancer (2023 – Present)</h1>
                                    <p className="mt-2 text-gray-200">
                                        Built complete web applications, AI chatbots, automation
                                        tools, dashboards, and high-performance backend systems.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {["React", "Node.js", "Python", "AI/ML", "APIs"].map((skill, i) => (
                                            <span key={i} className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        )}

                        {/* PROJECTS SECTION */}
                        {section === "projects" && (
                            <div className="mt-4 space-y-6">

                                {/* E-commerce Store */}
                                <div className="p-6 rounded-lg shadow-lg border border-gray-900 text-white hover:bg-sky-700 transition-all">
                                    <h1 className="text-2xl font-semibold">E-commerce Platform</h1>
                                    <p className="mt-2 text-gray-200">
                                        A full online store with authentication, cart, wishlist,
                                        checkout, order tracking, admin panel, analytics, and
                                        payment integration.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {["React.js", "Node.js", "Express", "PostgreSQL", "REST API"].map((skill, i) => (
                                            <span key={i} className="bg-blue-300 px-3 py-1 rounded-lg shadow-md">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* AI PDF Chatbot */}
                                <div className="p-6 rounded-lg shadow-lg border border-gray-900 text-white hover:bg-sky-700 transition-all">
                                    <h1 className="text-2xl font-semibold">AI PDF Chatbot</h1>
                                    <p className="mt-2 text-gray-200">
                                        ChatPDF-like system allowing PDF upload, extraction,
                                        embeddings, vector search, and LLM question answering.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {["LangChain", "Vector DB", "FastAPI", "OpenAI", "PostgreSQL"].map((skill, i) => (
                                            <span key={i} className="bg-blue-300 px-3 py-1 rounded-lg shadow-md">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Real Estate Website */}
                                <div className="p-6 rounded-lg shadow-lg border border-gray-900 text-white hover:bg-sky-700 transition-all">
                                    <h1 className="text-2xl font-semibold">Real Estate Website</h1>
                                    <p className="mt-2 text-gray-200">
                                        Property listing platform with house uploads, booking,
                                        payments, admin analytics & an AI assistant.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {["React.js", "Node.js", "Python", "PostgreSQL", "AI Bot"].map((skill, i) => (
                                            <span key={i} className="bg-blue-300 px-3 py-1 rounded-lg shadow-md">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Resume Builder SaaS */}
                                <div className="p-6 rounded-lg shadow-lg border border-gray-900 text-white hover:bg-sky-700 transition-all">
                                    <h1 className="text-2xl font-semibold">AI Resume Builder SaaS</h1>
                                    <p className="mt-2 text-gray-200">
                                        A full SaaS platform with resume builder, cover letter
                                        generator, resume scoring, templates, dashboards, and
                                        subscriptions.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {["Django", "React.js", "PostgreSQL", "FastAPI", "OpenAI"].map((skill, i) => (
                                            <span key={i} className="bg-blue-300 px-3 py-1 rounded-lg shadow-md">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* WhatsApp AI Assistant */}
                                <div className="p-6 rounded-lg shadow-lg border border-gray-900 text-white hover:bg-sky-700 transition-all">
                                    <h1 className="text-2xl font-semibold">WhatsApp AI Assistant</h1>
                                    <p className="mt-2 text-gray-200">
                                        A smart WhatsApp bot integrated with LLMs to automate
                                        responses, workflows, scheduling, and business support.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {["Node.js", "Twilio API", "OpenAI", "Automation"].map((skill, i) => (
                                            <span key={i} className="bg-blue-300 px-3 py-1 rounded-lg shadow-md">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        )}

                    </section>
                ))}

                {/* Sticky Navbar for Small Screens */}
                <div className={`fixed top-0 left-0 w-full bg-sky-950 bg-opacity-50 py-3 px-6 shadow-lg md:hidden transition-opacity duration-300 ${sections.includes(activeSection) ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className="flex justify-center text-white">
                        <span className="text-lg font-semibold capitalize">{activeSection}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
