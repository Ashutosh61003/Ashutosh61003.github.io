import React, { useEffect, useRef } from 'react';
import { User, Calendar, MapPin, Briefcase } from 'lucide-react';
import './Identity.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Identity = () => {
    const containerRef = useRef(null);
    const profileRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".profile-card-anim", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            })
                .from(".bio-item-anim", {
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.4")
                .from(".skill-tag", {
                    scale: 0,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.4,
                    ease: "back.out(2)"
                }, "-=0.2")
                .from(".timeline-item", {
                    x: 50,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.4");

            gsap.to(profileRef.current, {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            const tiltElements = document.querySelectorAll('.tilt-card');
            tiltElements.forEach(el => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(el, {
                        rotationY: x / 20,
                        rotationX: -y / 20,
                        scale: 1.02,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                el.addEventListener('mouseleave', () => {
                    gsap.to(el, {
                        rotationY: 0,
                        rotationX: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "elastic.out(1, 0.5)"
                    });
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="page-container identity-page" ref={containerRef}>
            <div className="container profile-grid">
                <div className="profile-left" ref={profileRef}>
                    <div className="bio-card glass-panel tilt-card profile-card-anim">
                        <h3 className="glow-text">Ashutosh Srivastava</h3>
                        <p className="role">Creative Developer & UI Engineer</p>

                        <div className="bio-text bio-item-anim">
                            <p>
                                I'm a developer who obsesses over the details. I believe that software should not just work, but feel alive.
                                My work sits at the intersection of rigorous logic and fluid, organic design.
                            </p>
                            <p>
                                When I'm not coding, I'm likely exploring new espresso beans, running, or reading about the future of AI.
                            </p>
                        </div>

                        <div className="bio-meta bio-item-anim">
                            <div className="meta-item"><MapPin size={16} /> India</div>
                            <div className="meta-item"><Briefcase size={16} /> Available for contract</div>
                        </div>
                    </div>

                    <div className="skills-section bio-item-anim">
                        <h4>Core Stack</h4>
                        <div className="skills-cloud">
                            {['React', 'Next.js', 'Node.js', 'TypeScript', 'GSAP', 'WebGL', 'Framer Motion', 'PostgreSQL', 'Design Systems'].map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="profile-right" ref={timelineRef}>
                    <div className="timeline-container">
                        <h4 className="bio-item-anim">Journey</h4>
                        <div className="timeline-item tilt-card">
                            <div className="timeline-dot glow-pulse"></div>
                            <div className="timeline-content">
                                <span className="year">2024 - Present</span>
                                <h5>Senior Frontend Engineer</h5>
                                <p>Building next-gen interfaces at Startup X.</p>
                            </div>
                        </div>
                        <div className="timeline-item tilt-card">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="year">2021 - 2024</span>
                                <h5>Full Stack Developer</h5>
                                <p>Shipped 15+ products at Agency Y.</p>
                            </div>
                        </div>
                        <div className="timeline-item tilt-card">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="year">2018 - 2021</span>
                                <h5>Computer Science Degree</h5>
                                <p>Specialized in HCI and Distributed Systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Identity;
