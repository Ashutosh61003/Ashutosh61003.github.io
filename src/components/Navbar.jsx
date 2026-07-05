import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        setIsMobileMenuOpen(false);
        if (navRef.current?.contains(document.activeElement)) {
            document.activeElement.blur();
        }
        setScrolled(window.scrollY > 80);
    }, [location.pathname]);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handlePointerDown = (event) => {
            if (!navRef.current?.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Work', path: '/work' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            ref={navRef}
            className={`navbar ${scrolled ? 'scrolled' : 'expanded'} ${isExpanded ? 'is-expanded' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
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

                <button
                    type="button"
                    className="mobile-menu-toggle"
                    aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-nav-menu"
                    onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.4} />}
                </button>

                <div className="nav-dots" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="mobile-nav-panel" id="mobile-nav-menu">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
