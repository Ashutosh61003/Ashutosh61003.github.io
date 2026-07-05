import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Briefcase, FolderKanban, Home, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);
    const lastScrollYRef = useRef(0);
    const lastTouchYRef = useRef(0);

    const isMobileViewport = () => window.matchMedia?.('(max-width: 760px)').matches;

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.classList.contains('project-modal-open')) return;
            const currentY = window.scrollY;
            const delta = currentY - lastScrollYRef.current;

            if (currentY <= 8) {
                setScrolled(false);
                setIsExpanded(false);
            } else if (delta > 2) {
                setScrolled(true);
                setIsExpanded(false);
            } else if (delta < -2) {
                setScrolled(false);
                setIsExpanded(true);
            }

            lastScrollYRef.current = currentY;
        };
        const handleWheel = (event) => {
            if (document.body.classList.contains('project-modal-open')) return;
            if (event.deltaY > 12) {
                setScrolled(true);
                setIsExpanded(false);
            }
            if (event.deltaY < -12) {
                setScrolled(false);
                setIsExpanded(isMobileViewport());
            }
        };

        const handleTouchStart = (event) => {
            lastTouchYRef.current = event.touches[0]?.clientY || 0;
        };
        const handleTouchMove = (event) => {
            if (document.body.classList.contains('project-modal-open')) return;
            const currentY = event.touches[0]?.clientY || 0;
            const delta = lastTouchYRef.current - currentY;
            if (delta > 12) {
                setScrolled(true);
                setIsExpanded(false);
            }
            if (delta < -12) {
                setScrolled(false);
                setIsExpanded(true);
            }
            lastTouchYRef.current = currentY;
        };

        lastScrollYRef.current = window.scrollY;
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');
        setIsExpanded(false);
        if (navRef.current?.contains(document.activeElement)) {
            document.activeElement.blur();
        }
        setScrolled(window.scrollY > 80);
    }, [location.pathname]);

    useEffect(() => {
        if (!isExpanded || !scrolled) return;

        const handlePointerDown = (event) => {
            if (!navRef.current?.contains(event.target)) {
                setIsExpanded(false);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsExpanded(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isExpanded, scrolled]);

    const links = [
        { name: 'Home', path: '/', Icon: Home },
        { name: 'Projects', path: '/projects', Icon: FolderKanban },
        { name: 'Work', path: '/work', Icon: Briefcase },
        { name: 'Contact', path: '/contact', Icon: Mail },
    ];

    return (
        <nav
            ref={navRef}
            className={`navbar ${scrolled ? 'scrolled' : 'expanded'} ${isExpanded ? 'is-expanded' : ''}`}
            aria-label="Primary navigation"
        >
            <div
                className="nav-shell"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                onClickCapture={(event) => {
                    if (scrolled && !isExpanded && isMobileViewport()) {
                        event.preventDefault();
                        event.stopPropagation();
                        setIsExpanded(true);
                    }
                }}
                onFocus={() => setIsExpanded(true)}
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                        setIsExpanded(false);
                    }
                }}
            >
                <NavLink to="/" className="nav-brand-area" aria-label="Go home">
                    <span className="avatar-bubble">
                        <img src="/images/ashutosh-avatar.png" alt="Ashutosh Srivastava" className="avatar-photo" loading="eager" fetchPriority="high" />
                    </span>
                    <span className="brand-logo">ASHUTOSH</span>
                </NavLink>

                <div className="nav-links">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="mobile-icon-links" aria-label="Primary navigation links">
                    {links.map(({ name, path, Icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) => `mobile-icon-item ${isActive ? 'active' : ''}`}
                            aria-label={name}
                            title={name}
                        >
                            <Icon size={18} strokeWidth={2.35} aria-hidden="true" />
                            <span className="mobile-icon-label">{name}</span>
                        </NavLink>
                    ))}
                </div>

                <div className="nav-dots" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
