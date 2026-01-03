import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, X, Code, Layers, Cpu, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const gridRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: 'Universe Next.js Platform',
            type: 'Social Platform',
            desc: 'A massive social hub with 3D mind maps and gamification.',
            fullDesc: 'Universe is a next-generation social learning platform inspired by Duolingo. It features a fully interactive 3D mind map for knowledge navigation, real-time collaboration tools, and a gamified progress system.',
            tech: ['Next.js 15', 'TypeScript', 'Three.js', 'Tailwind', 'Prisma'],
            links: { github: '#', live: '#' },
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80'
        },
        {
            id: 2,
            title: 'Magnetile Game',
            type: 'Web Game',
            desc: 'Real-time multiplayer strategy game using PeerJS.',
            fullDesc: 'A fast-paced competitive tile strategy game where players compete to dominate the board. Built with a custom game engine and PeerJS for serverless, low-latency multiplayer connects directly between browsers.',
            tech: ['React', 'PeerJS', 'Socket.io', 'Canvas API'],
            links: { github: '#', live: '#' },
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80'
        },
        {
            id: 3,
            title: 'Portfolio v2',
            type: 'Personal Site',
            desc: 'The premium digital garden you are looking at right now.',
            fullDesc: 'My personal portfolio designed to be an immersive digital experience. Features advanced GSAP animations, glassmorphism UI, and a unique 3D Bento Grid layout.',
            tech: ['React', 'GSAP', 'Vite', 'CSS Modules'],
            links: { github: '#', live: '#' },
            image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1600&q=80'
        },
        {
            id: 4,
            title: 'TaskFlow AI',
            type: 'Productivity Tool',
            desc: 'AI-powered task management for remote teams.',
            fullDesc: 'TaskFlow uses LLMs to automatically break down complex project goals into actionable sub-tasks. It integrates with Slack and Linear to keep teams aligned without the admin overhead.',
            tech: ['Python', 'FastAPI', 'OpenAI API', 'React'],
            links: { github: '#', live: '#' },
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'
        }
    ];

    // Entrance & Tilt Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%"
                }
            });

            // 3D Tilt Logic
            const items = document.querySelectorAll('.project-card');
            items.forEach(item => {
                item.addEventListener('mousemove', (e) => {
                    const rect = item.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(item, {
                        rotationY: x / 20,
                        rotationX: -y / 20,
                        transformPerspective: 1000,
                        scale: 1.02,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                item.addEventListener('mouseleave', () => {
                    gsap.to(item, {
                        rotationY: 0,
                        rotationX: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "elastic.out(1, 0.5)"
                    });
                });
            });

        }, gridRef);

        return () => ctx.revert();
    }, []);

    // Modal Animation
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';

            const ctx = gsap.context(() => {
                gsap.fromTo(".modal-overlay",
                    { opacity: 0 },
                    { opacity: 1, duration: 0.4, ease: "power2.out" }
                );
                gsap.fromTo(".modal-content",
                    { y: 50, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.2)", delay: 0.1 }
                );
                gsap.fromTo(".modal-anim",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.3 }
                );
            }, modalRef);
            return () => ctx.revert();

        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedProject]);

    return (
        <div className="page-container projects-page">
            <div className="container projects-grid" ref={gridRef} style={{ paddingTop: '120px' }}>
                {projects.map((p) => (
                    <div key={p.id} className="project-card tilt-card" onClick={() => setSelectedProject(p)}>
                        <div className="card-thumb">
                            <img src={p.image} alt={p.title} />
                            <div className="card-overlay">
                                <span className="view-btn">View Details</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <span className="project-type">{p.type}</span>
                                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                                    <a href={p.links.github} className="icon-link"><Github size={16} /></a>
                                    <a href={p.links.live} className="icon-link"><ExternalLink size={16} /></a>
                                </div>
                            </div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <div className="tech-row">
                                {p.tech.slice(0, 3).map(t => (
                                    <span key={t} className="tech-tag-sm">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)} ref={modalRef}>
                    <button className="btn-close">
                        <X size={24} />
                    </button>

                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-image-col">
                            <img src={selectedProject.image} alt={selectedProject.title} />
                        </div>

                        <div className="modal-details-col">
                            <div className="modal-header modal-anim">
                                <span className="badge-highlight">{selectedProject.type}</span>
                                <h2>{selectedProject.title}</h2>
                            </div>

                            <p className="modal-desc modal-anim">
                                {selectedProject.fullDesc}
                            </p>

                            <div className="tech-stack-section modal-anim">
                                <h4>Tech Stack</h4>
                                <div className="tech-grid">
                                    {selectedProject.tech.map(t => (
                                        <div key={t} className="tech-item">
                                            <Code size={14} className="tech-icon" />
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-actions modal-anim">
                                <a href={selectedProject.links.github} className="btn-action glow-btn-purple">
                                    <Github size={18} /> View Code
                                </a>
                                <a href={selectedProject.links.live} className="btn-action glow-btn-blue">
                                    <Globe size={18} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
