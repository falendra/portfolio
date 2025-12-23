import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBriefcase } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero section-spacing" id="about">
            <div className="container">
                <div className="hero-content" style={{ margin: '0 auto', textAlign: 'left', maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '100px',
                            background: 'rgba(255,255,255,0.05)',
                            color: '#fff',
                            fontSize: '0.8rem',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            30 Under 30 Awardee • IndiaQuotient
                        </span>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 500,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            color: '#fff'
                        }}>
                            Falendra Kumar Bandhe.
                        </h1>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            fontWeight: 400,
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem'
                        }}>
                            Founding Engineer at KOSH.
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '3rem' }}
                    >
                        Senior Full-Stack Engineer with 6+ years of experience building scalable backend systems and user-centric frontend applications. Specialized in scaling architectures for 200k+ users.
                    </motion.p>

                    <motion.div
                        className="cta-group"
                        style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="mailto:falendra.bandhe@gmail.com" className="btn btn-primary">Get in Touch</a>
                        <a href="https://www.linkedin.com/in/falendra-bandhe/" target="_blank" className="btn btn-secondary">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <a href="https://github.com/falendra/" target="_blank" className="btn btn-secondary" title="Personal GitHub">
                                <FaGithub /> Personal
                            </a>
                            <a href="https://github.com/falendra-kosh/" target="_blank" className="btn btn-secondary" title="Work GitHub">
                                <FaGithub /> Work
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
