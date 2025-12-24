import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: "Aayush Goel",
        role: "Co-Founder @ Kosh | Forbes 30U30 Asia | YC W20 | IIT Delhi",
        relationship: "Managed Falendra directly",
        text: `Falendra was one of the very first people we hired at Kosh back in 2019, when we were just getting started. I personally interviewed over 50 candidates before speaking with him, and I went into that conversation with no particular expectations—only to walk away genuinely impressed.
        \nAs a founder, I can confidently say that Falendra is the kind of first hire every startup dreams of. He is exceptionally strong technically, but what truly sets him apart is the kind of person and colleague he is. He consistently bridged the gap between tech and business, becoming a trusted go-to person across the organization. His ownership, humility, and reliability made a lasting impact on our culture and execution.
        \nI’m deeply grateful for everything he contributed to Kosh and wish more people brought the same integrity, ownership, and talent to their work as he does. I'm sure he will do amazing at whatever he chooses to work on next.`,
    },
    {
        name: "Vishal Mahawar",
        role: "SWE @ Indeed | IIT Jammu '22",
        relationship: "Reported to Falendra directly",
        text: "Falendra is an exceptional mentor and a highly skilled professional. He has a great ability to simplify complex problems and guide the team toward clear, practical solutions.\nI had the opportunity to work with him closely and truly admire his leadership, technical expertise, and collaborative approach.",
    },
    {
        name: "Ashish Gambhir",
        role: "SMTS at Salesforce | Ex Coinbase | Ex Kosh | IIT Jodhpur",
        relationship: "Worked with Falendra directly",
        text: "Falendra got great programming and analytical skills and have driven many projects end to end and was solely responsible for handling building front end of Kosh App on which we were working together. His eagerness to continuously learn makes him a stand out performer.",
    },
    {
        name: "Utkarsh Rai",
        role: "SWE2 @ Microsoft | Ex Kosh | IIT Delhi",
        relationship: "Reported to Falendra directly",
        text: "I had the pleasure of working with Falendra during my time at KOSH, where he was a Senior Frontend Engineer. From the very beginning, Falendra was incredibly supportive and approachable, he guided me throughout my internship and helped me strengthen my understanding of frontend development.\nHis depth of knowledge across modern frontend technologies and his ability to design clean, scalable solutions truly stand out. Falendra’s mentorship and collaborative attitude made a lasting impact on my learning experience, and I highly recommend him as both a skilled engineer and a great teammate.",
    },
    {
        name: "Sahil Bansal",
        role: "Co-Founder @ Kosh | Forbes 30U30 Asia | YC W20 | IIT Delhi",
        relationship: "Managed Falendra directly",
        text: "Really enjoyed working with Falendra.\n He is dedicated towards his work and really talented!",
    },
    {
        name: "Upendra Sengar",
        role: "Tech at Quboid(fka Metasky) | Ex Kosh | IIT Jodhpur",
        relationship: "Worked with Falendra directly",
        text: "All in all a great engineer, a supporting team mate and a person whose company you would always like to keep. Kudos to all our projects together and endless debugging sessions",
    },
];

const TestimonialCard = ({ t, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_LENGTH = 180;
    const isLongText = t.text.length > MAX_LENGTH;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
                padding: '2rem',
                background: 'var(--bg-card)',
                borderRadius: '8px',
                border: '1px solid var(--accent-subtle)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <FaQuoteLeft style={{
                    fontSize: '2rem',
                    color: 'var(--accent-subtle)',
                    opacity: 0.5
                }} />
                {t.relationship && (
                    <span style={{
                        fontSize: '0.75rem',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'var(--text-secondary)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        border: '1px solid var(--accent-subtle)',
                        whiteSpace: 'pre-wrap',
                        marginLeft: '1rem'
                    }}>
                        {t.relationship}
                    </span>
                )}
            </div>

            <div style={{ flex: 1, marginBottom: '2rem' }}>
                <p style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.8',
                    fontStyle: 'italic',
                    whiteSpace: 'pre-wrap'
                }}>
                    "{isExpanded || !isLongText ? t.text : `${t.text.substring(0, MAX_LENGTH)}...`}"
                </p>

                {isLongText && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            marginTop: '0.5rem',
                            fontWeight: 600,
                            padding: 0,
                            textDecoration: 'underline'
                        }}
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                )}
            </div>

            <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600 }}>{t.name}</h4>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>{t.role}</span>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-spacing">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>Testimonials</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={i} t={t} index={i} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
