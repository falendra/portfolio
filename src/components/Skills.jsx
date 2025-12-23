import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Backend & Architecture",
        skills: ["Python", "Django", "Microservices", "Celery (Async)", "Redis", "REST APIs", "System Design"]
    },
    {
        title: "Real-time & Messaging",
        skills: ["RabbitMQ", "MQTT", "Event-Driven Arch", "WebSockets", "Socket.io", "EMQX"]
    },
    {
        title: "Database & Cloud",
        skills: ["PostgreSQL (Optimization)", "AWS (EC2, RDS, S3)", "Docker", "Jenkins (CI/CD)", "Grafana"]
    },
    {
        title: "Frontend & Mobile",
        skills: ["React Native", "React.js", "JavaScript/ES6+", "Redux", "Material UI", "Android (Java)"]
    },
    {
        title: "Integrations & APIs",
        skills: ["Cashfree", "WhatsApp Messaging", "Setu UPI", "Google Maps/Location", "Suryoday/Equifax (Finance)", "Amplitude"]
    },
    {
        title: "Tools & Analytics",
        skills: ["Git", "Figma", "Sentry", "Postman", "Firebase", "SonarQube"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section-spacing">
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>Technical Arsenal</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-card)',
                                border: '1px solid var(--accent-subtle)'
                            }}
                        >
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {category.skills.map((skill, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-secondary)',
                                        padding: '0.25rem 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                                        display: 'block',
                                        width: '100%'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
