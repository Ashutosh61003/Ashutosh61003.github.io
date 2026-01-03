import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Card from '../components/Card';
import './Thoughts.css';

const Thoughts = () => {
    const posts = [
        { id: 1, title: 'The Ethics of AI Memory', date: 'Oct 24, 2025', desc: 'Should our assistants remember everything? Exploring the implications of perfect recall.', tag: 'AI' },
        { id: 2, title: 'Fluid Interfaces with React', date: 'Sep 12, 2025', desc: 'How to build 60fps animations using standard React hooks and clever CSS.', tag: 'Engineering' },
        { id: 3, title: 'In Search of Silence', date: 'Aug 05, 2025', desc: 'Why digital minimalism is the ultimate productivity hack in a noisy world.', tag: 'Philosophy' },
    ];

    return (
        <div className="page-container thoughts-page">
            <div className="container thoughts-grid" style={{ paddingTop: '120px' }}>
                {posts.map((post, i) => (
                    <ScrollReveal key={post.id} delay={i * 0.1}>
                        <Card
                            title={post.title}
                            subtitle={post.date}
                            className="thought-card"
                        >
                            <p className="post-desc">{post.desc}</p>
                            <span className="post-tag">{post.tag}</span>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};

export default Thoughts;
