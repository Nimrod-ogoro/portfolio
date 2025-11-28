import ProjectPage from './ProjectPage';

export default function WhatsAppAIAssistant() {
    return (
        <ProjectPage
            title="WhatsApp AI Assistant"
            description="A smart WhatsApp assistant integrated with LLMs to automate responses, workflows, scheduling, and business support. Handles user queries, sends notifications, and performs intelligent actions."
            media={[
                { type: 'image', src: '/projects/whatsapp1.png', alt: 'WhatsApp Bot UI' },
                { type: 'image', src: '/projects/whatsapp2.png', alt: 'Conversation Example' },
                { type: 'video', src: '/projects/whatsapp-demo.mp4', alt: 'WhatsApp Bot Demo' },
            ]}
            skills={["React.js", "Node.js", "Twilio", "OpenAI", "Automation"]}
            links={[
                { name: "Live", url: "https://your-whatsapp-bot-live.com" },
                { name: "GitHub", url: "https://github.com/Nimrod-ogoro/whatsapp-ai-assistant" },
            ]}
        />
    );
}
