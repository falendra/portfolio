import { motion } from 'framer-motion';

const experiences = [
    {
        company: "KOSH",
        role: "Founding Engineer",
        period: "Aug 2019 — Nov 2025",
        description: "Leading the engineering team as the first hire, owning the complete product lifecycle from 0 to 200k+ users. Responsible for architectural decisions, system scalability, and technical leadership across the stack.",
        details: [
            {
                category: "Engineering Leadership",
                items: [
                    "Led and mentored a team of 15+ engineers, driving sprint planning, HLD/LLD reviews, and technical roadmap.",
                    "Defined CI/CD pipelines (Docker + Jenkins) and AWS infrastructure (EC2, RDS, S3) for reliable automated deployments.",
                    "Established engineering standards, code review processes, and observability practices using Sentry and CloudWatch."
                ]
            },
            {
                category: "Backend Architecture (Python/Django)",
                items: [
                    "Architected a multi-tenant distributed system, reducing infrastructure costs by 25% while serving 200k+ users.",
                    "Engineered a real-time messaging engine using MQTT & RabbitMQ, handling masive concurrency with high reliability.",
                    "Built a unified Tenant SSO platform, slashing login-related support issues by 40% and streamlining onboarding.",
                    "Developed automated IVR/SMS recovery workflows via Celery, directly improving loan recovery rates by 18%."
                ]
            },
            {
                category: "Frontend & Mobile (React Native / React)",
                items: [
                    "Built and shipped the KOSH Super App (100k+ downloads, 4.5★ rating) with complex features like video KYC and offline-sync chat.",
                    "Enhanced engagement by 50% through advanced chat features: multimedia sharing, live location, and message pinning.",
                    "Achieved a 98% crash-free rate by integrating robust error monitoring and optimizing native modules."
                ]
            }
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
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-9px',
                                top: '0',
                                width: '16px',
                                height: '16px',
                                background: 'var(--text-primary)',
                                borderRadius: '50%',
                                border: '4px solid var(--bg-primary)'
                            }} />

                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{
                                    fontFamily: 'monospace',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: '4px'
                                }}>
                                    {exp.period}
                                </span>
                                <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>{exp.company}</h3>
                                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-tertiary)', fontWeight: 400 }}>{exp.role}</h4>
                                <p style={{ marginTop: '1rem', marginBottom: '2rem', maxWidth: '800px', fontSize: '1.05rem' }}>
                                    {exp.description}
                                </p>
                            </div>

                            <div style={{ display: 'grid', gap: '2rem' }}>
                                {exp.details.map((section, i) => (
                                    <div key={i}>
                                        <h5 style={{
                                            color: 'var(--text-primary)',
                                            fontSize: '1rem',
                                            marginBottom: '1rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            opacity: 0.9
                                        }}>
                                            {section.category}
                                        </h5>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            {section.items.map((item, j) => (
                                                <li key={j} style={{ color: 'var(--text-secondary)', fontSize: '1rem', display: 'flex', gap: '0.75rem', lineHeight: '1.6' }}>
                                                    <span style={{ color: 'var(--accent-subtle)', marginTop: '4px' }}>▹</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
