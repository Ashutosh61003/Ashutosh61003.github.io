import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock } from 'lucide-react';
import './GlassBlogCard.css';

const fallbackAuthor = {
    name: 'Ashutosh Srivastava',
    avatar: '/images/ashutosh-avatar.png'
};

const GlassBlogCard = ({
    title,
    excerpt,
    image,
    author = fallbackAuthor,
    date,
    readTime,
    tags = [],
    className = '',
    onOpen
}) => {
    const initials = author.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2);

    return (
        <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className={`glass-blog-card ${className}`}
        >
            <button type="button" className="glass-blog-card-shell" onClick={onOpen} aria-label={`Read ${title}`}>
                <div className="glass-blog-card-media">
                    <motion.img src={image} alt={title} loading="lazy" decoding="async" />
                    <div className="glass-blog-card-gradient" />

                    <div className="glass-blog-card-tags" aria-label={`${title} tags`}>
                        {tags.slice(0, 2).map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>

                    <div className="glass-blog-card-overlay">
                        <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <BookOpen size={16} />
                            Open project
                        </motion.span>
                    </div>
                </div>

                <div className="glass-blog-card-copy">
                    <div>
                        <h3>{title}</h3>
                        <p>{excerpt}</p>
                    </div>

                    <div className="glass-blog-card-footer">
                        <div className="glass-blog-card-author">
                            {author.avatar ? (
                                <img src={author.avatar} alt="" loading="lazy" decoding="async" />
                            ) : (
                                <span>{initials}</span>
                            )}
                            <div>
                                <strong>{author.name}</strong>
                                <small>{date}</small>
                            </div>
                        </div>

                        <div className="glass-blog-card-time">
                            <Clock size={13} />
                            <span>{readTime}</span>
                        </div>
                    </div>
                </div>
            </button>
        </motion.article>
    );
};

export default GlassBlogCard;
