import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './ProductImageExpand.css';

const productImages = [
    {
        src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2600&q=92',
        alt: 'Product team planning roadmap in a bright workspace',
        label: 'Discovery',
    },
    {
        src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2600&q=92',
        alt: 'Product analytics dashboard and planning session',
        label: 'Execution',
    },
    {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2600&q=92',
        alt: 'Analytics charts on a laptop for product decisions',
        label: 'Analytics',
    },
    {
        src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2600&q=92',
        alt: 'Startup team discussing product strategy around a table',
        label: 'Strategy',
    },
];

const ProductImageExpand = () => {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveImage((current) => (current + 1) % productImages.length);
        }, 2000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <motion.div
            className="product-image-expand"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Product work image gallery"
        >
            {productImages.map((image, index) => (
                <motion.button
                    type="button"
                    key={image.src}
                    className={`product-image-panel ${activeImage === index ? 'is-active' : ''}`}
                    initial={false}
                    animate={{
                        height: activeImage === index ? '22rem' : '5.15rem',
                    }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setActiveImage(index)}
                    onFocus={() => setActiveImage(index)}
                    onClick={() => setActiveImage(index)}
                    aria-label={image.label}
                >
                    <img src={image.src} alt={image.alt} />
                    <AnimatePresence>
                        {activeImage === index && (
                            <motion.span
                                className="product-image-label"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{
                                    opacity: { duration: activeImage === index ? 0.2 : 0 },
                                    y: { duration: activeImage === index ? 0.2 : 0 },
                                }}
                            >
                                {image.label}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            ))}
        </motion.div>
    );
};

export default ProductImageExpand;
