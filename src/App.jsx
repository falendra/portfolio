import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Impact from './components/Impact';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Impact />
                <Skills />
                <Experience />
                <Projects />
                <Testimonials />
                <Contact />
            </main>
        </>
    );
}

export default App;
