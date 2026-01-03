import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ title, subtitle, children, footer, className = '', ...props }) => {
    const ref = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate rotation limits (e.g., -10deg to 10deg)
        const rotateYVal = ((mouseX / width) - 0.5) * 10;
        const rotateXVal = ((mouseY / height) - 0.5) * -10;

        setRotateX(rotateXVal);
        setRotateY(rotateYVal);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX,
                rotateY
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            {...props}
        >
            <div className="card-content" style={{ transform: "translateZ(20px)" }}>
                {subtitle && <div className="card-subtitle">{subtitle}</div>}
                {title && <h3 className="card-title">{title}</h3>}
                <div className="card-body">
                    {children}
                </div>
            </div>
            {footer && <div className="card-footer" style={{ transform: "translateZ(20px)" }}>{footer}</div>}

            {/* Light Sheen/Glare Effect */}
            <div
                className="card-glare"
                style={{
                    background: `radial-gradient(circle at ${50 + (rotateY * 4)}% ${50 + (rotateX * -4)}%, rgba(255,255,255,0.1), transparent 60%)`
                }}
            />
        </motion.div>
    );
};

export default Card;
