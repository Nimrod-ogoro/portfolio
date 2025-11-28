import ProjectPage from './ProjectPage';

export default function LamakiConstruction() {
    return (
        <ProjectPage
            title="Lamaki Construction Company"
            description="A construction company platform with a merchandise section, user dashboard, and integrated payment gateway. Users can view projects, order construction products, track orders, and manage their accounts."
            media={[
                { type: 'image', src: '/projects/lamaki1.png', alt: 'Homepage' },
                { type: 'image', src: '/projects/lamaki2.png', alt: 'Merch Section' },
                { type: 'video', src: '/projects/lamaki-demo.mp4', alt: 'Demo Video' },
            ]}
            skills={["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"]}
            links={[
                { name: "Live", url: "https://lamaki-construction.com" },
                { name: "GitHub", url: "https://github.com/Nimrod-ogoro/lamaki-construction" },
            ]}
        />
    );
}
