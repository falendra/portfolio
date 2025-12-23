import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about-detailed" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>About Me</h2>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
                        I am a <strong>Senior Full-Stack Engineer</strong> with over 6 years of experience building scalable, high-performance systems.
                        My expertise lies in architecting complex backends with <strong>Python/Django</strong> and crafting intuitive cross-platform, user-centric mobile applications with <strong>React Native</strong>.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
                        As a Founding Engineer at KOSH, I wore multiple hats—from system architect to team lead—helping the platform scale to <strong>200,000+ users</strong>.
                        I have a proven track record of mentoring teams (15+ engineers) and driving technical decisions that directly impact business growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Education</h3>
                    <div style={{
                        padding: '1.5rem',
                        borderLeft: '2px solid var(--text-primary)',
                        background: 'var(--bg-primary)'
                    }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Bachelor of Engineering (CSE)</h4>
                        <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Shri Shankaracharya Technical Campus</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>2015 – 2019 • 70.35%</p>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Key Metrics</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '4px' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>6+</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Years Experience</div>
                        </div>
                        <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '4px' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>15+</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Engineers Led</div>
                        </div>
                        <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '4px' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>200k+</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Users Scaled</div>
                        </div>
                        <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '4px' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>30/30</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>IndiaQuotient Award</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
