import { motion } from 'framer-motion';

const projects = [
    {
        title: "react-native-upi-pay",
        description: "Open source library enabling seamless UPI payment integration for React Native apps. Published on NPM.",
        tech: ["React Native", "Java", "Android SDK", "NPM"],
        link: "https://www.npmjs.com/package/react-native-upi-pay",
        type: "Open Source"
    },
    {
        title: "KOSH Super App",
        description: "Architected a multi-tenant chat SaaS product. Includes job applications, workflow automation, and social features.",
        tech: ["Python", "Django", "React Native", "MQTT", "AWS"],
        link: "https://play.google.com/store/apps/details?id=com.kosh.app", // Assuming KOSH link
        type: "Product"
    },
    {
        title: "Automated Recovery Calls",
        description: "System for automated voice reminders improving loan recovery by 18%.",
        tech: ["Python", "Celery", "IVR Integration", "PostgreSQL"],
        link: "#",
        type: "System Design"
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
