import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <motion.nav
            className={`navbar ${hidden ? 'hidden' : ''}`}
            style={{
                background: scrollY.get() > 50 || isOpen ?
                    (theme === 'dark' ? 'rgba(5,5,5,0.9)' : 'rgba(255,255,255,0.9)')
                    : 'transparent',
                backdropFilter: scrollY.get() > 50 || isOpen ? 'blur(10px)' : 'none',
                boxShadow: scrollY.get() > 50 ? '0 1px 0 var(--accent-subtle)' : 'none'
            }}
        >
            <div className="container nav-container">
                <div className="logo" style={{ color: 'var(--text-primary)' }}>Falendra</div>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <ul className="nav-links desktop-menu">
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#skills" className="nav-link">Tech</a></li>
                        <li><a href="#work" className="nav-link">Experience</a></li>
                        <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>

                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            transition: 'all 0.3s ease'
                        }}
                        className="desktop-menu"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>

                    {/* Mobile Toggle */}
                    <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-primary)' }}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: '100vh' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ background: 'var(--bg-primary)' }}
                        >
                            <ul className="mobile-nav-links">
                                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                                <li><a href="#skills" onClick={() => setIsOpen(false)}>Tech</a></li>
                                <li><a href="#work" onClick={() => setIsOpen(false)}>Experience</a></li>
                                <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
                                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                                <li style={{ marginTop: '1rem' }}>
                                    <button
                                        onClick={toggleTheme}
                                        style={{
                                            background: 'var(--bg-secondary)',
                                            border: '1px solid var(--accent-subtle)',
                                            color: 'var(--text-primary)',
                                            padding: '0.75rem 1.5rem',
                                            borderRadius: '50px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '1rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {theme === 'dark' ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>}
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
