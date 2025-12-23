import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section-spacing">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '600px' }}
                >
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Next Steps</h2>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        I'm currently exploring new opportunities to build scalable systems and lead engineering teams.
                        If you're interested in my work, let's connect.
                    </p>
                    <a href="mailto:falendra.bandhe@gmail.com" className="btn btn-primary">
                        Email Me
                    </a>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <a href="https://www.linkedin.com/in/falendra-bandhe/" target="_blank" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/falendra/" target="_blank" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                            <FaGithub />
                        </a>
                    </div>

                    <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--accent-subtle)', color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
                        © {new Date().getFullYear()} Falendra Kumar Bandhe. Built with React & Vite.
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
