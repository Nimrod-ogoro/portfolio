import ProjectPage from './ProjectPage';

export default function AIProjects() {
    return (
        <ProjectPage
            title="AI PDF Bot & Resume Builder"
            description="Two AI-powered projects: 1) AI PDF Bot allows users to upload PDFs and interact with them via natural language queries using RAG pipelines. 2) AI Resume Builder SaaS helps users create resumes, cover letters, provides scoring, and AI suggestions with multiple templates."
            media={[
                { type: 'image', src: '/projects/ai1.png', alt: 'PDF Bot UI' },
                { type: 'image', src: '/projects/ai2.png', alt: 'Resume Builder UI' },
                { type: 'video', src: '/projects/ai-demo.mp4', alt: 'Demo Video' },
            ]}
            skills={["React.js", "Django", "FastAPI", "OpenAI", "PostgreSQL", "LangChain", "RAG", "Tailwind CSS"]}
            links={[
                { name: "Live", url: "https://ai-projects.com" },
                { name: "GitHub", url: "https://github.com/Nimrod-ogoro/ai-projects" },
            ]}
        />
    );
}
