import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Camera, User, Calendar, Brain, Smartphone, Monitor } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const gridRef = useRef(null);

    const updates = [
        { id: 1, type: 'thought', label: 'Ethics', text: 'Reflecting on AI memory.', time: '2h', color: 'var(--c-orange)' },
        { id: 2, type: 'project', label: 'Commit', text: 'Pushed v2.0 to prod.', time: '5h', color: 'var(--c-purple)' },
        { id: 3, type: 'photo', label: 'Photo', text: 'Golden hour run.', time: '1d', color: 'var(--c-crimson)' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".bento-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%"
                }
            });

            const items = document.querySelectorAll('.bento-item');
            items.forEach(item => {
                item.addEventListener('mousemove', (e) => {
                    const rect = item.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(item, {
                        rotationY: x / 10,
                        rotationX: -y / 10,
                        transformPerspective: 1000,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                item.addEventListener('mouseleave', () => {
                    gsap.to(item, {
                        rotationY: 0,
                        rotationX: 0,
                        duration: 0.5,
                        ease: "elastic.out(1, 0.5)"
                    });
                });
            });

        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="page-container dashboard-page">
            <div className="container" ref={gridRef} style={{ paddingTop: '120px' }}>
                <div className="bento-grid">

                    <div className="bento-item item-featured-project">
                        <div className="bento-content">
                            <div className="bento-header">
                                <span className="chip chip-purple">Featured Build</span>
                                <Monitor size={20} className="icon-faded" />
                            </div>
                            <h3 className="bento-title">Universe Next.js Platform</h3>
                            <p className="bento-desc">A massive social platform with 3D mind maps and Duolingo-style gamification.</p>

                            <div className="mockup-laptop">
                                <div className="screen-content">
                                    <div className="ui-nav"></div>
                                    <div className="ui-hero"></div>
                                    <div className="ui-grid">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                            <Link to="/projects" className="bento-link-overlay"></Link>
                        </div>
                    </div>

                    <div className="bento-item item-profile">
                        <div className="bento-content">
                            <div className="profile-badge">
                                <div className="avatar">AS</div>
                                <div>
                                    <div className="name">Ashutosh</div>
                                    <div className="role">Creative Dev</div>
                                </div>
                            </div>
                            <div className="bio-text">
                                <p>Building at the edge of possibility. <br /> Based in India 🇮🇳</p>
                            </div>
                            <div className="profile-stats-row">
                                <div className="stat"><span>12</span> Ships</div>
                                <div className="stat"><span>50</span> Notes</div>
                            </div>
                            <Link to="/identity" className="btn-glass-sm">See Profile <ArrowRight size={14} /></Link>
                            <Link to="/identity" className="bento-link-overlay"></Link>
                        </div>
                    </div>

                    {updates.map((u, i) => (
                        <div key={u.id} className={`bento-item item-update item-update-${i}`}>
                            <div className="bento-content">
                                <div className="update-header" style={{ color: u.color }}>
                                    {u.key}
                                    {u.type === 'thought' && <Brain size={16} />}
                                    {u.type === 'project' && <Code size={16} />}
                                    {u.type === 'photo' && <Camera size={16} />}
                                    <span className="update-label">{u.label}</span>
                                </div>
                                <p className="update-text">{u.text}</p>
                                <span className="update-time">{u.time} ago</span>
                            </div>
                        </div>
                    ))}

                    <div className="bento-item item-thought">
                        <div className="bento-content">
                            <span className="chip chip-orange">Latest Thought</span>
                            <h3 className="thought-title">"The future of interfaces is intelligence."</h3>
                            <div className="thought-footer">
                                <span>Read Essay</span>
                                <ArrowRight size={16} />
                            </div>
                            <div className="glow-orb orange"></div>
                            <Link to="/thoughts" className="bento-link-overlay"></Link>
                        </div>
                    </div>

                    <div className="bento-item item-calendar">
                        <div className="bento-content centered">
                            <div className="status-indicator">
                                <span className="pulse"></span>
                                Available
                            </div>
                            <div className="calendar-icon">
                                <span className="cal-check">✓</span>
                            </div>
                            <div className="cal-label">Schedule Call</div>
                            <Link to="/contact" className="bento-link-overlay"></Link>
                        </div>
                    </div>

                    <div className="bento-item item-mobile-app">
                        <div className="bento-content">
                            <span className="chip chip-blue">Mobile Exp</span>
                            <h4 className="app-title">Portfolio App</h4>

                            <div className="mockup-phone">
                                <div className="phone-notch"></div>
                                <div className="phone-screen">
                                    <div className="app-header"></div>
                                    <div className="app-card"></div>
                                    <div className="app-card short"></div>
                                </div>
                            </div>
                            <Link to="/projects" className="bento-link-overlay"></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
