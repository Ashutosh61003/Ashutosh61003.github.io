import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Briefcase, FolderKanban, Home, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.classList.contains('project-modal-open')) return;
            setScrolled(window.scrollY > 80);
        };
        const handleWheel = (event) => {
            if (document.body.classList.contains('project-modal-open')) return;
            if (event.deltaY > 12) {
                setScrolled(true);
            }
            if (event.deltaY < -12 && window.scrollY <= 8) {
                setScrolled(false);
            }
        };

        let touchStartY = 0;
        const handleTouchStart = (event) => {
            touchStartY = event.touches[0]?.clientY || 0;
        };
        const handleTouchMove = (event) => {
            if (document.body.classList.contains('project-modal-open')) return;
            const currentY = event.touches[0]?.clientY || 0;
            const delta = touchStartY - currentY;
            if (delta > 12) {
                setScrolled(true);
            }
            if (delta < -12 && window.scrollY <= 8) {
                setScrolled(false);
            }
        };

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
                onFocus={() => setIsExpanded(true)}
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                        setIsExpanded(false);
                    }
                }}
            >
                <NavLink to="/" className="nav-brand-area" aria-label="Go home">
                    <span className="avatar-bubble">
                        <img src="/images/ashutosh-avatar.png" alt="Ashutosh Srivastava" className="avatar-photo" />
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
