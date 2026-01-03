import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        // Check if device is desktop-ish
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const dot = dotRef.current;
        const outline = outlineRef.current;

        // Lag variables
        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Instant update for dot
            if (dot) {
                dot.style.left = `${mouseX}px`;
                dot.style.top = `${mouseY}px`;
            }

            // Interactive Check
            const target = e.target;
            const isInteractive = target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('card');

            if (isInteractive) {
                document.body.classList.add('hovering');
            } else {
                document.body.classList.remove('hovering');
            }
        };

        const animateOutline = () => {
            // Linear lerp for smooth trailing
            outlineX += (mouseX - outlineX) * 0.25;
            outlineY += (mouseY - outlineY) * 0.25;

            if (outline) {
                outline.style.left = `${outlineX}px`;
                outline.style.top = `${outlineY}px`;
            }
            requestAnimationFrame(animateOutline);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animationId = requestAnimationFrame(animateOutline);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
            document.body.classList.remove('hovering'); // Cleanup
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={outlineRef} className="cursor-outline"></div>
        </>
    );
};

export default CustomCursor;
