import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BarChart3, Briefcase, ExternalLink, FolderOpen, Mail, UsersRound, X } from 'lucide-react';
import Folder from '../components/Folder';
import ProfileCard from '../components/ProfileCard';
import './Home.css';

const highlights = [
    { value: '10+', label: 'Products worked on and shipped' },
    { value: '2', label: 'Product internships' },
    { value: '20+', label: 'User interviews' },
    { value: '5K+', label: 'Launch campaign views' }
];

const stackItems = [
    {
        eyebrow: 'Flurn',
        href: '/work#flurn-work',
        title: 'Built EdTech product systems for teachers and operations.',
        copy: 'PRDs, user flows, wireframes, AI Quiz Validator, TeacherHub, TeachAI Assistant, Content Studio CMS, and automation workflows.',
        tags: ['5+ products', '3 releases', '40% less manual effort']
    },
    {
        eyebrow: 'Hugsy',
        href: '/work#hugsy-work',
        title: 'Worked on early consumer product, onboarding, and growth loops.',
        copy: 'Mobile and web product flows, competitive analysis across 10+ apps, activation experiments, referrals, and launch storytelling.',
        tags: ['1000+ visits', '10+ apps analyzed', '5K-10K views']
    },
    {
        eyebrow: 'Portfolio projects',
        href: '/projects',
        title: 'AI, iOS, analytics, travel, cricket, agriculture, and healthcare.',
        copy: 'Projects include AIChatGemma, CherryChat, CricAbode, SCOPE, RailOne Super Route, Provider Data Validation, and Fire Response Vehicle.',
        tags: ['AI workflows', 'SwiftUI', 'Product strategy']
    }
];

const flowingItems = [
    { label: 'Work', href: '/work' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Resume', href: '/files/AshutoshSrivastavaResume.pdf', external: true }
];

const certifications = [
    {
        provider: 'Microsoft',
        title: 'Azure AI Fundamentals (AI-900)',
        href: 'https://drive.google.com/file/d/1eA8WELEx2cjc8LvO4J_k8qMQ5x56pefG/view?usp=sharing',
        icon: 'microsoft',
        logo: '/images/logo-microsoft.webp',
        summary: 'AI workloads, machine learning fundamentals, computer vision, NLP, conversational AI, generative AI, and responsible AI principles.',
        tags: ['Azure AI', 'ML', 'Responsible AI']
    },
    {
        provider: 'Microsoft',
        title: 'Azure Data Fundamentals (DP-900)',
        href: 'https://drive.google.com/file/d/110Wjfx_5EMgAyyFdSBMNhr_LZMRsWrTA/view?usp=sharing',
        icon: 'microsoft',
        logo: '/images/logo-microsoft.webp',
        summary: 'Structured, semi-structured, and unstructured data, relational and non-relational databases, Azure SQL, Cosmos DB, and data roles.',
        tags: ['Azure SQL', 'Cosmos DB', 'Data roles']
    },
    {
        provider: 'MongoDB',
        title: 'MongoDB Database Administrator',
        href: 'https://drive.google.com/file/d/152ZWjt6xcqtTzN7NkeGM8r5deAZbMVoJ/view?usp=sharing',
        icon: 'mongodb',
        logo: '/images/logo-mongodb.jpeg',
        summary: 'MongoDB architecture, document data model, schema design, indexing, authentication, role-based access, CRUD, transactions, and ACID properties.',
        tags: ['MongoDB', 'Indexes', 'ACID']
    },
    {
        provider: 'NVIDIA',
        title: 'Fundamentals of Deep Learning',
        href: 'https://drive.google.com/file/d/1sHMW5wXSFjFGPGym8vMDCewToXj0Luw4/view?usp=sharing',
        icon: 'nvidia',
        logo: '/images/logo-nvidia.jpeg',
        summary: 'Neural networks, CNNs, RNNs, LSTMs, GANs, transfer learning, fine-tuning, and data augmentation for stronger model generalization.',
        tags: ['CNNs', 'RNNs', 'Transfer learning']
    },
    {
        provider: 'NVIDIA',
        title: 'Building LLM Applications With Prompt Engineering',
        href: 'https://drive.google.com/file/d/1bW6ePqXgu7MO3aWkJvzNEGjR9vifHpSo/view?usp=sharing',
        icon: 'nvidia',
        logo: '/images/logo-nvidia.jpeg',
        summary: 'LLM fundamentals, prompt engineering, iterative prompt refinement, templating, chat-based models, few-shot prompting, and Chain of Thought.',
        tags: ['LLMs', 'Prompting', 'Chatbots']
    },
    {
        provider: 'Udemy',
        title: 'iOS & Swift - Complete iOS App Development Bootcamp',
        href: 'https://drive.google.com/file/d/1aN0LxCsfM-q886bnrEjZWVzXKwZSfEi0/view?usp=sharing',
        icon: 'udemy',
        logo: '/images/logo-udemy.png',
        summary: 'Swift, UIKit, SwiftUI, persistence, JSON parsing, APIs, networking, multi-screen apps, navigation, and state management.',
        tags: ['Swift', 'SwiftUI', 'APIs']
    },
    {
        provider: 'Oracle',
        title: 'OCI 2025 Generative AI Professional',
        href: 'https://drive.google.com/file/d/1G1TzFBH5YhKUqibp2CpRHw3LjOk27eQX/view?usp=sharing',
        icon: 'oracle',
        logo: '/images/logo-oracle.jpeg',
        summary: 'LLM architectures, zero-shot, few-shot, Chain of Thought, LoRA, soft prompting, RAG, LangChain, and Oracle Database 23ai.',
        tags: ['GenAI', 'RAG', 'LangChain']
    },
    {
        provider: 'EY',
        title: 'EY Case Competition',
        href: 'https://drive.google.com/file/d/1-GoWwEvAaZeBetF79MDIcMrfpYEY34QM/view?usp=sharing',
        icon: 'ey',
        logo: '/images/logo-ey.png',
        summary: 'Case competition experience focused on structured problem solving, business analysis, recommendation building, and presenting a practical solution narrative.',
        tags: ['Case solving', 'Strategy', 'Presentation']
    },
    {
        provider: 'LinkedIn',
        title: 'Explore a Career in Product Management',
        href: 'https://drive.google.com/file/d/1o1qEqtqy2CkU7uxmeJ0dZVIocDlMOgr4/view?usp=sharing',
        icon: 'linkedin',
        logo: '/images/logo-linkedin.jpeg',
        summary: 'Learning path covering product innovation, product management fundamentals, and product road mapping.',
        tags: ['Product Management', 'Road Mapping']
    }
];

const Home = () => {
    const [activeHighlight, setActiveHighlight] = useState(null);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <main className="home-page" aria-label="Home page">
            <section className="home-hero" aria-labelledby="home-title">
                <div className="home-hero-copy">
                    <h1 id="home-title">I turn messy product ideas into shipped systems.</h1>
                    <p>
                        I am Ashutosh Srivastava, a CSE graduate focused on product management roles,
                        user discovery, product strategy, analytics, and growth experiments.
                    </p>
                    <div className="home-cta-row">
                        <a href="/projects">
                            Projects
                            <ArrowUpRight size={18} />
                        </a>
                        <a href="/work">
                            Work
                            <Briefcase size={18} />
                        </a>
                        <a href="/contact">
                            Contact
                            <Mail size={18} />
                        </a>
                        <a href="/files/AshutoshSrivastavaResume.pdf" target="_blank" rel="noreferrer">
                            Resume
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

                <aside className="home-profile-card-shell" aria-label="Ashutosh interactive profile card">
                    <ProfileCard
                        className="home-clean-profile-card"
                        avatarUrl="/images/portrait_card_extended_top_only.png"
                        miniAvatarUrl="/images/portrait_card_extended_top_only.png"
                        name="Ashutosh Srivastava"
                        title="Product manager + AI builder"
                        handle="ashutosh"
                        status="APM-ready"
                        contactText="Contact"
                        innerGradient="linear-gradient(145deg, rgba(4, 31, 103, 0.94) 0%, rgba(74, 177, 255, 0.32) 54%, rgba(255, 255, 255, 0.18) 100%)"
                        behindGlowColor="rgba(74, 177, 255, 0.66)"
                        behindGlowSize="54%"
                        enableTilt
                        behindGlowEnabled={false}
                        showUserInfo={false}
                    />
                </aside>
            </section>

            <section className="home-stats" aria-label="Portfolio highlights">
                {highlights.map((item, index) => (
                    <button
                        className={`home-stat-card ${activeHighlight === index ? 'is-flipped' : ''}`}
                        key={item.label}
                        type="button"
                        aria-label={`${item.value}: ${item.label}`}
                        onClick={() => setActiveHighlight(activeHighlight === index ? null : index)}
                    >
                        <span className="home-stat-face home-stat-front">
                            <strong>{item.value}</strong>
                        </span>
                        <span className="home-stat-face home-stat-back">{item.label}</span>
                    </button>
                ))}
            </section>

            <section className="home-workbench" aria-label="Portfolio">
                <div className="home-folder-panel">
                    <div className="home-folder-stage">
                        <Folder
                            size={1.9}
                            color="#168eea"
                            className="home-reactbits-folder"
                            items={[
                                <div className="folder-file-card" key="flurn">
                                    <img src="/images/flurn.jpeg" alt="" />
                                </div>,
                                <div className="folder-file-card" key="hugsy">
                                    <img src="/images/hugsy.jpg" alt="" />
                                </div>,
                                <div className="folder-file-card" key="ashutosh">
                                    <img src="/images/ashutosh-avatar.png" alt="" />
                                </div>
                            ]}
                        />
                    </div>
                    <div>
                        <span className="home-section-label">
                            <FolderOpen size={16} />
                            Portfolio
                        </span>
                        <h2>Work, projects, and product thinking in one place.</h2>
                        <p>
                            This portfolio is organized around what I have actually done: shipped product work,
                            scoped startup-style concepts, built technical projects, and learned from users.
                        </p>
                    </div>
                </div>

                <div className="home-signal-grid">
                    <article>
                        <UsersRound size={22} />
                        <h3>User-first</h3>
                        <p>Research, interviews, journey maps, onboarding, and user pain points before features.</p>
                    </article>
                    <article>
                        <BarChart3 size={22} />
                        <h3>Metrics-aware</h3>
                        <p>Activation, retention, funnels, DAU/MAU thinking, dashboards, and experiment design.</p>
                    </article>
                </div>
            </section>

            <section className="home-operating-system" aria-labelledby="operating-title">
                <div className="operating-heading">
                    <h2 id="operating-title">Experience</h2>
                </div>

                <div className="operating-list">
                    {stackItems.map((item, index) => (
                        <Link className="operating-card" to={item.href} key={item.eyebrow}>
                            <div className="operating-card-topline">
                                <span>{String(index + 1).padStart(2, '0')}</span>
                                <small>{item.eyebrow}</small>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.copy}</p>
                            <div className="operating-tags">
                                {item.tags.map((tag) => (
                                    <small key={tag}>{tag}</small>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="home-certifications" aria-labelledby="certifications-title">
                <div className="certifications-heading">
                    <h2 id="certifications-title">Certifications</h2>
                </div>

                <div className="certification-grid">
                    {certifications.map((cert) => (
                        <button
                            className="certification-card"
                            type="button"
                            key={cert.title}
                            aria-label={`View details for ${cert.title}`}
                            onClick={() => setSelectedCertificate(cert)}
                        >
                            <span className={`cert-logo cert-logo-${cert.icon}`} aria-hidden="true">
                                <img src={cert.logo} alt="" />
                            </span>
                            <span className="cert-provider">{cert.provider}</span>
                            <h3>{cert.title}</h3>
                            <p>{cert.summary}</p>
                            <div className="cert-tags">
                                {cert.tags.map((tag) => (
                                    <small key={tag}>{tag}</small>
                                ))}
                            </div>
                        </button>
                    ))}
                </div>

                {selectedCertificate && (
                    <div
                        className="certificate-modal-overlay"
                        role="presentation"
                        onClick={() => setSelectedCertificate(null)}
                    >
                        <section
                            className="certificate-modal"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="certificate-modal-title"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                className="certificate-modal-close"
                                type="button"
                                aria-label="Close certificate details"
                                onClick={() => setSelectedCertificate(null)}
                            >
                                <X size={20} />
                            </button>
                            <span className={`cert-logo cert-logo-${selectedCertificate.icon}`} aria-hidden="true">
                                <img src={selectedCertificate.logo} alt="" />
                            </span>
                            <span className="cert-provider">{selectedCertificate.provider}</span>
                            <h3 id="certificate-modal-title">{selectedCertificate.title}</h3>
                            <p>{selectedCertificate.summary}</p>
                            <div className="cert-tags">
                                {selectedCertificate.tags.map((tag) => (
                                    <small key={tag}>{tag}</small>
                                ))}
                            </div>
                            <a className="certificate-view-link" href={selectedCertificate.href} target="_blank" rel="noreferrer">
                                View certificate
                                <ExternalLink size={17} />
                            </a>
                        </section>
                    </div>
                )}
            </section>

            <nav className="home-flowing-menu" aria-label="Featured navigation">
                {flowingItems.map((item) => (
                    <a href={item.href} key={item.label} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>
                        <span>{item.label}</span>
                        <span className="flow-marquee" aria-hidden="true">
                            {Array.from({ length: 6 }, (_, index) => (
                                <b key={index}>{item.label}</b>
                            ))}
                        </span>
                    </a>
                ))}
            </nav>
        </main>
    );
};

export default Home;
