import React, { useState, useEffect, useRef } from 'react';
import { Mail, Send, Twitter, Linkedin, Github, Check } from 'lucide-react';
import gsap from 'gsap';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    // Refs for animations
    const containerRef = useRef(null);
    const profileRef = useRef(null);
    const bubblesRef = useRef([]);
    const formRef = useRef(null);
    const sendBtnRef = useRef(null);

    // Entrance and Parallax
    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Entrance Animation
            const tl = gsap.timeline();

            tl.from(profileRef.current, {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
                .from(bubblesRef.current, {
                    y: 20,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                }, "-=0.5")
                .from(formRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.6");

            // 2. Mouse Parallax Effect
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5);
                const yPos = (clientY / window.innerHeight - 0.5);

                // Profile shifts slightly
                gsap.to(profileRef.current, {
                    x: xPos * 20,
                    y: yPos * 20,
                    rotationY: xPos * 10,
                    rotationX: -yPos * 10,
                    duration: 1,
                    ease: "power2.out"
                });

                // Bubbles float differently for depth
                bubblesRef.current.forEach((bubble, i) => {
                    gsap.to(bubble, {
                        x: xPos * (30 + i * 5),
                        y: yPos * (30 + i * 5),
                        duration: 1.2,
                        ease: "power2.out",
                        overwrite: "auto"
                    });
                });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Magnetic Button Effect helper
    const handleMagneticMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMagneticLeave = (e) => {
        gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Button "Pop" animation
        gsap.to(sendBtnRef.current, {
            scale: 0.8,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });

        try {
            const res = await fetch("https://formsubmit.co/ajax/ashubecoder@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                }, 3000);
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Form error:", error);
            alert("Error sending message.");
        }
    };

    return (
        <div className="contact-page" ref={containerRef}>
            <div className="contact-grid">

                {/* Profile Section */}
                <div className="profile-section" ref={profileRef}>
                    <div className="profile-card">
                        <div className="profile-header">
                            <div className="profile-avatar">AS</div>
                            <div className="profile-info">
                                <h3 className="profile-name">Ashutosh Srivastava</h3>
                                <p className="profile-handle">@ashutosh_me</p>
                            </div>
                        </div>
                        <div className="profile-bio">
                            <p className="profile-bio-text">Building digital experiences at the intersection of logic, design, and AI.  Let's Create.</p>
                        </div>
                        <div className="social-row">
                            {[Mail, Twitter, Linkedin, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="social-icon"
                                    onMouseMove={handleMagneticMove}
                                    onMouseLeave={handleMagneticLeave}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chat Section */}
                <div className="chat-section">
                    <div className="chat-date">TODAY 10:23 AM</div>

                    <div className="message message-received" ref={el => bubblesRef.current[0] = el}>
                        <div className="message-bubble">
                            Want to work together? Or just want to chat? 👋
                        </div>
                    </div>

                    <div className="message message-received" ref={el => bubblesRef.current[1] = el}>
                        <div className="message-bubble">
                            Send me a text here (no, for real) 👇
                        </div>
                    </div>

                    <div className="message message-sent" ref={el => bubblesRef.current[2] = el}>
                        <div className="message-bubble">
                            Sounds good! Let's do this. 🔥
                        </div>
                    </div>

                    {/* Chat Form */}
                    <div className="chat-input-area" ref={formRef}>

                        {/* Success Overlay inside the card */}
                        <div className={`success-overlay ${submitted ? 'active' : ''}`}>
                            <div className="success-icon">
                                <Check size={32} />
                            </div>
                        </div>

                        <form className="chat-form" onSubmit={handleSubmit}>
                            <div className="chat-inputs-row">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="chat-input"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="chat-input"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="chat-send-wrapper">
                                <textarea
                                    placeholder="Type your message..."
                                    className="chat-input chat-textarea"
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    required
                                />
                                <button ref={sendBtnRef} type="submit" className="chat-send-btn">
                                    <Send size={22} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
