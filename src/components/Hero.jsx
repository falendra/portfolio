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
                            background: 'var(--bg-card)',
                            color: 'var(--text-primary)',
                            fontSize: '0.8rem',
                            marginBottom: '1.5rem',
                            border: '1px solid var(--accent-subtle)'
                        }}>
                            30 Under 30 Awardee • IndiaQuotient
                        </span>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 500,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            color: 'var(--text-primary)'
                        }}>
                            Falendra Kumar Bandhe
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
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="/Falendra%20Bandhe%20resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" title="Download Resume">
                            Download Resume
                        </a>
                        <a href="mailto:falendra.bandhe@gmail.com" className="btn btn-secondary">
                            Get in Touch
                        </a>
                        <a href="https://www.linkedin.com/in/falendra-bandhe/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                            <FaLinkedin size={18} /> LinkedIn
                        </a>
                        <a href="https://github.com/falendra/" target="_blank" rel="noreferrer" className="btn btn-secondary" title="Personal Projects">
                            <FaGithub size={18} /> GitHub
                        </a>
                        <a href="https://github.com/falendra-kosh/" target="_blank" rel="noreferrer" className="btn btn-secondary" title="Work at KOSH">
                            <FaBriefcase size={16} /> Work
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
