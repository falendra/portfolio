import { motion } from 'framer-motion';

const experiences = [
    {
        company: "KOSH",
        role: "Founding Engineer",
        period: "Aug 2019 — Nov 2025",
        description: "Led the engineering team as the first hire, scaling the product from 0 to 200k+ users. Owned architecture, backend (Python/Django), and cross-platform mobile apps (React Native).",
        achievements: [
            "Architected multi-tenant distributed backend, reducing infra costs by 25%.",
            "Engineered real-time chat infrastructure handling 200k+ concurrent users with MQTT/RabbitMQ.",
            "Built tenant SSO platform reducing login issues by 40%.",
            "Led team of 15+ engineers, managing HLD/LLD and sprint planning."
        ]
    }
];

const Experience = () => {
    return (
        <section id="work" className="section-spacing">
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>Experience</h2>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                borderLeft: '1px solid var(--accent-subtle)',
                                paddingLeft: '2rem',
                                marginBottom: '4rem'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                                <span style={{ fontFamily: 'monospace', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.period}</span>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.company}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>{exp.role}</h4>
                            </div>

                            <p style={{ marginBottom: '1.5rem' }}>{exp.description}</p>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {exp.achievements.map((item, i) => (
                                    <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', gap: '0.75rem' }}>
                                        <span style={{ color: 'var(--text-primary)' }}>›</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
