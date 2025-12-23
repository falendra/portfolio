import { motion } from 'framer-motion';

const impacts = [
    { label: "Infra Cost Reduction", value: "25%", detail: "Optimized distributed systems architecture" },
    { label: "Login Issues", value: "-40%", detail: "Built Unified Tenant SSO Platform" },
    { label: "User Engagement", value: "+50%", detail: "Multimedia & Message Pinning Features" },
    { label: "Crash-Free Rate", value: "98%", detail: "Integrated Sentry & Error Monitoring" },
    { label: "Recovery Rates", value: "+18%", detail: "Automated Voice/IVR Reminder System" },
    { label: "Manual Effort", value: "-50%", detail: "Automated Operations & Workflows" }
];

const Impact = () => {
    return (
        <section className="section-spacing">
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                    Impact by the Numbers
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {impacts.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'linear-gradient(145deg, var(--bg-card) 0%, rgba(20,20,20,1) 100%)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-card)',
                                border: '1px solid var(--accent-subtle)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '100px',
                                height: '100px',
                                background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                                pointerEvents: 'none'
                            }} />

                            <h3 style={{
                                fontSize: '3rem',
                                fontWeight: 700,
                                color: 'var(--text-primary)',
                                marginBottom: '0.5rem',
                                lineHeight: 1
                            }}>
                                {item.value}
                            </h3>
                            <div style={{
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                marginBottom: '0.5rem'
                            }}>
                                {item.label}
                            </div>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.5
                            }}>
                                {item.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
