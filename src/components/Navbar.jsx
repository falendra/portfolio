import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            className={`navbar ${hidden ? 'hidden' : ''}`}
            style={{
                background: scrollY.get() > 50 ? 'rgba(5,5,5,0.8)' : 'transparent',
                backdropFilter: scrollY.get() > 50 ? 'blur(10px)' : 'none'
            }}
        >
            <div className="container nav-container">
                <div className="logo">Falendra.</div>
                <ul className="nav-links">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Tech</a></li>
                    <li><a href="#work" className="nav-link">Experience</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
