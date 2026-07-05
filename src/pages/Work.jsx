import React from 'react';
import { ArrowUpRight, BarChart3, CheckCircle2, ClipboardList, LineChart, Mail, UsersRound } from 'lucide-react';
import './Work.css';

const roles = [
    {
        company: 'Flurn',
        logo: '/images/flurn.jpeg',
        period: '2026',
        role: 'Product Management Intern',
        location: 'Bangalore',
        category: 'EdTech · AI workflows · Teacher operations',
        headline: 'Built product systems for teachers, content teams, and program operations.',
        description:
            'At Flurn, I worked across product discovery, PRDs, wireframes, automation workflows, and release coordination for core EdTech products.',
        metrics: ['5+ products', '3 major releases', '40% less manual effort', '35% faster workflows'],
        tags: ['PRDs', 'Wireframes', 'AI Quiz Validator', 'TeacherHub', 'TeachAI'],
        work: [
            'Led product development for Content Studio CMS, AI Quiz Validator, TeachAI Assistant, TeacherHub Dashboard, and ProgramFlow Manager.',
            'Automated content workflows, teacher onboarding, and scheduling, supporting 50+ teachers and 1000+ learners.',
            'Conducted 20+ teacher and student interviews for 0-1 AI features including question generation and teacher analytics.',
            'Defined success metrics across engagement, retention, NPS, and operational efficiency.'
        ]
    },
    {
        company: 'Hugsy',
        logo: '/images/hugsy.jpg',
        period: '2026',
        role: 'Product Management Intern',
        location: 'Remote',
        category: 'Consumer social · Mobile app · Growth',
        headline: 'Shaped early product, onboarding, and growth loops for a couples app.',
        description:
            'At Hugsy, I worked on mobile and web product flows, competitive research, activation experiments, and launch content for an early-stage consumer product.',
        metrics: ['10+ apps researched', '1000+ initial visits', '5K-10K+ campaign views', '0-1 product work'],
        tags: ['Onboarding', 'PRDs', 'User flows', 'Referral loops', 'Launch content'],
        work: [
            'Defined features, wrote PRDs, created wireframes, and coordinated with design and engineering to ship updates.',
            'Researched 10+ couples and social apps to identify onboarding, engagement, and positioning gaps.',
            'Designed activation and engagement experiments across onboarding flows, prompts, and referrals.',
            'Owned launch storytelling across X, Reddit, and Instagram to support early validation.'
        ]
    }
];

const strengths = [
    { icon: ClipboardList, label: 'Product definition', copy: 'PRDs, user flows, wireframes, release scope, and trade-offs.' },
    { icon: UsersRound, label: 'User discovery', copy: 'Interviews, competitive research, pain points, and product narratives.' },
    { icon: LineChart, label: 'Growth thinking', copy: 'Activation, retention, funnels, experiments, and launch loops.' },
    { icon: BarChart3, label: 'Analytics mindset', copy: 'Success metrics, dashboards, SQL/Python thinking, and operational signals.' }
];

const Work = () => {
    const scrollToRole = (event, company) => {
        event.preventDefault();
        document.getElementById(`${company.toLowerCase()}-work`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <main className="work-page">
            <section className="work-hero" aria-labelledby="work-title">
                <div className="work-hero-copy">
                    <span className="work-eyebrow">
                        Career update
                    </span>
                    <h1 id="work-title">Product management experience across EdTech and consumer products.</h1>
                    <p>
                        I have completed two product management internships, working across discovery, PRDs,
                        user flows, AI-enabled workflows, launch experiments, and product improvements. I am now
                        seeking Associate Product Manager opportunities.
                    </p>
                    <div className="hero-logo-stack" aria-label="Jump to work experience">
                        {roles.map((item) => (
                            <a
                                key={item.company}
                                href={`#${item.company.toLowerCase()}-work`}
                                onClick={(event) => scrollToRole(event, item.company)}
                                aria-label={`Jump to ${item.company} experience`}
                            >
                                <img src={item.logo} alt={`${item.company} logo`} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="work-hero-panel" aria-label="Experience snapshot">
                    <div>
                        <span>Current focus</span>
                        <strong>Associate Product Manager opportunities</strong>
                        <p>Focused on roles where I can contribute to product discovery, execution, analytics, and growth.</p>
                        <div className="work-focus-actions">
                            <a href="/files/AshutoshSrivastavaResume.pdf" target="_blank" rel="noreferrer">
                                Resume
                                <ArrowUpRight size={18} />
                            </a>
                            <a href="/contact">
                                Contact me
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work-case-list" aria-label="Work case studies">
                {roles.map((item) => (
                    <article className="work-case" id={`${item.company.toLowerCase()}-work`} key={item.company}>
                        <div className="case-company">
                            <img src={item.logo} alt={`${item.company} logo`} />
                            <div>
                                <span>{item.location} · {item.period}</span>
                                <h2>{item.company}</h2>
                                <p>{item.role}</p>
                            </div>
                        </div>

                        <div className="case-main">
                            <span className="case-category">{item.category}</span>
                            <h3>{item.headline}</h3>
                            <p className="case-description">{item.description}</p>

                            <div className="case-metrics" aria-label={`${item.company} impact metrics`}>
                                {item.metrics.map((metric) => (
                                    <span key={metric}>{metric}</span>
                                ))}
                            </div>

                            <ul className="case-work-list">
                                {item.work.map((point) => (
                                    <li key={point}>
                                        <CheckCircle2 size={18} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="case-tags" aria-label={`${item.company} skills`}>
                                {item.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            <section className="work-strengths" aria-label="Product strengths">
                <div className="strengths-heading">
                    <span>How I work</span>
                    <h2>Structured product execution.</h2>
                    <p>My working style is built around clear problem framing, user context, measurable outcomes, and fast cross-functional delivery.</p>
                </div>
                <div className="strength-grid">
                    {strengths.map(({ icon: Icon, label, copy }) => (
                        <article key={label}>
                            <Icon size={22} />
                            <h3>{label}</h3>
                            <p>{copy}</p>
                        </article>
                    ))}
                </div>
            </section>

            <a className="work-contact-strip" href="/contact">
                <span>Open to APM, product intern, and early product roles</span>
                <ArrowUpRight size={22} />
            </a>
        </main>
    );
};

export default Work;
