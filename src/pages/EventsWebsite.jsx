import ProjectPage from './ProjectPage';

export default function EventsWebsite() {
    return (
        <ProjectPage
            title="Events Website"
            description="A platform for managing and booking events. Features include event listings, user registration, ticket booking, payment integration, and admin dashboard for event management."
            media={[
                { type: 'image', src: '/projects/events1.png', alt: 'Homepage' },
                { type: 'image', src: '/projects/events2.png', alt: 'Event Listing' },
                { type: 'video', src: '/projects/events-demo.mp4', alt: 'Demo Video' },
            ]}
            skills={["React.js", "Node.js", "Express", "PostgreSQL", "Stripe", "Tailwind CSS"]}
            links={[
                { name: "Live", url: "https://events-website.com" },
                { name: "GitHub", url: "https://github.com/Nimrod-ogoro/events-website" },
            ]}
        />
    );
}
