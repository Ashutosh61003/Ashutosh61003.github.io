import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, width = "100%", ...props }) => {
    return (
        <div style={{ width, overflow: 'hidden' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
                {...props}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
