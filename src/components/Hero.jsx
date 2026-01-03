import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = ({ title, subtitle, showScroll = true }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX / window.innerWidth - 0.5,
                y: event.clientY / window.innerHeight - 0.5
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="hero">
            <div className="hero-bg"></div>

            {/* Parallax Floating Elements */}
            <motion.div
                className="hero-floater floater-1"
                animate={{
                    x: mousePosition.x * -50,
                    y: mousePosition.y * -50
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
            />
            <motion.div
                className="hero-floater floater-2"
                animate={{
                    x: mousePosition.x * 80,
                    y: mousePosition.y * 80
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
            />

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    x: mousePosition.x * 30,
                    y: mousePosition.y * 30
                }}
            >
                <h1 className="hero-title text-gradient">
                    {title}
                </h1>
                {subtitle && (
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>

            {showScroll && (
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <ArrowDown size={32} color="var(--c-text-muted)" />
                </motion.div>
            )}
        </div>
    );
};

export default Hero;
