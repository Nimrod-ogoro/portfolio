import ProjectPage from './ProjectPage';

export default function ConstructionSite() {
    return (
        <ProjectPage
            title="Plain Construction Site"
            description="A simple construction website showcasing services, portfolio, and contact details. Designed for fast loading, responsive design, and a clean user experience."
            media={[
                { type: 'image', src: '/projects/construction1.png', alt: 'Homepage' },
                { type: 'image', src: '/projects/construction2.png', alt: 'Service Page' },
                { type: 'video', src: '/projects/construction-demo.mp4', alt: 'Demo Video' },
            ]}
            skills={["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]}
            links={[
                { name: "Live", url: "https://plain-construction-site.com" },
                { name: "GitHub", url: "https://github.com/Nimrod-ogoro/plain-construction-site" },
            ]}
        />
    );
}
