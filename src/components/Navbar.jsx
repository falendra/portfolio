import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

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
                background: scrollY.get() > 50 || isOpen ? 'rgba(5,5,5,0.9)' : 'transparent',
                backdropFilter: scrollY.get() > 50 || isOpen ? 'blur(10px)' : 'none'
            }}
        >
            <div className="container nav-container">
                <div className="logo">Falendra</div>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-menu">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Tech</a></li>
                    <li><a href="#work" className="nav-link">Experience</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
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
                        >
                            <ul className="mobile-nav-links">
                                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                                <li><a href="#skills" onClick={() => setIsOpen(false)}>Tech</a></li>
                                <li><a href="#work" onClick={() => setIsOpen(false)}>Experience</a></li>
                                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
