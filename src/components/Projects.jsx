import { motion } from 'framer-motion';

const projects = [
    {
        title: "react-native-upi-pay 🚀",
        description: "Architected and actively maintain a critical open-source library bridging React Native with India's UPI ecosystem. Solves fragmentation across GooglePay, PhonePe, and Paytm APIs. Used by 50+ diverse apps.",
        tech: ["React Native", "Java / Kotlin", "Android SDK", "NPM Publishing", "Open Source"],
        link: "https://www.npmjs.com/package/react-native-upi-pay",
        type: "Open Source Architecture"
    },
    {
        title: "Real-Time Messaging Engine",
        description: "Designed the core communication backbone for KOSH, handling 200k+ concurrent users. Implemented a distributed MQTT architecture with RabbitMQ for reliable message delivery and presence tracking at scale.",
        tech: ["Python", "Django", "MQTT", "RabbitMQ", "Redis", "WebSockets"],
        link: "https://play.google.com/store/apps/details?id=com.kosh",
        type: "High-Scale Distributed System"
    },
    {
        title: "Unified Multi-Tenant SSO",
        description: "Built a centralized Identity Provider (IdP) to unify authentication across multiple diverse enterprise tenants. Reduced login-related support tickets by 40% and streamlined onboarding for 100+ organizations.",
        tech: ["OAuth 2.0", "JWT", "Python", "Security Architecture", "React"],
        link: "#",
        type: "Security & Identity"
    },
    {
        title: "Automated IVR Recovery Workflow",
        description: "Engineered an event-driven debt recovery system. Integrates credit decisioning with telephony providers to trigger automated voice calls. Processed high-volume async tasks via Celery, boosting recovery rates by 18%.",
        tech: ["Python", "Celery", "PostgreSQL", "Telephony APIs", "System Design"],
        link: "#",
        type: "Event-Driven Architecture"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-spacing">
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Selected Work</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'block',
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-card)',
                                border: '1px solid var(--accent-subtle)',
                                textDecoration: 'none'
                            }}
                        >
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {project.type}
                            </span>
                            <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                {project.title}
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.75rem',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
