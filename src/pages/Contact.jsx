import React, { useRef, useState } from 'react';
import { AlertTriangle, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import ProductImageExpand from '../components/ProductImageExpand';
import SlideSendButton from '../components/SlideSendButton';
import './Contact.css';

const contactLinks = [
    {
        label: 'Email',
        value: 'ashu.61003@gmail.com',
        href: 'mailto:ashu.61003@gmail.com',
        icon: Mail,
    },
    {
        label: 'LinkedIn',
        value: 'Connect professionally',
        href: 'https://www.linkedin.com/in/ashutosh-srivastava-892433226/',
        icon: Linkedin,
    },
    {
        label: 'GitHub',
        value: 'See builds and experiments',
        href: 'https://github.com/AshutoshSri123',
        icon: Github,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [validationError, setValidationError] = useState({ field: '', message: '' });
    const formRef = useRef(null);

    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            return { field: 'name', message: 'Add your name.' };
        }

        if (!formData.email.trim()) {
            return { field: 'email', message: 'Add your email.' };
        }

        if (!emailPattern.test(formData.email.trim())) {
            return { field: 'email', message: 'Enter a valid email.' };
        }

        if (!formData.message.trim()) {
            return { field: 'message', message: 'Write a short message.' };
        }

        return { field: '', message: '' };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const error = validateForm();
        if (error.message) {
            setValidationError(error);
            return;
        }

        setValidationError({ field: '', message: '' });
        setStatus('sending');

        try {
            const response = await fetch('https://formsubmit.co/ajax/ashu.61003@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: 'Portfolio website inquiry',
                }),
            });

            if (!response.ok) {
                throw new Error('Unable to send message');
            }

            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3600);
        } catch (error) {
            console.error('Form error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3200);
        }
    };

    const handleSlideComplete = () => {
        const error = validateForm();
        if (error.message) {
            setValidationError(error);
            return false;
        }

        setValidationError({ field: '', message: '' });
        formRef.current.requestSubmit();
        return true;
    };

    return (
        <main className="contact-page">
            <section className="contact-shell">
                <div className="contact-intro">
                    <ProductImageExpand />

                    <div className="contact-link-list">
                        {contactLinks.map(({ label, value, href, icon: Icon }) => (
                            <a key={label} href={href} className="contact-link-card" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                                <span className="contact-link-icon">
                                    <Icon size={19} />
                                </span>
                                <span>
                                    <small>{label}</small>
                                    <strong>{value}</strong>
                                </span>
                                <ArrowUpRight size={18} className="contact-link-arrow" />
                            </a>
                        ))}
                    </div>
                </div>

                <form ref={formRef} className="contact-form-card" onSubmit={handleSubmit} noValidate>
                    <div className="form-heading">
                        <h2>Get in touch with me.</h2>
                    </div>

                    <label className="field-group">
                        <span>Your name</span>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(event) => {
                                setFormData({ ...formData, name: event.target.value });
                                setValidationError({ field: '', message: '' });
                            }}
                            placeholder="Ashutosh"
                        />
                        {validationError.field === 'name' && (
                            <span className="field-alert" role="alert">
                                <AlertTriangle size={14} />
                                {validationError.message}
                            </span>
                        )}
                    </label>

                    <label className="field-group">
                        <span>Email address</span>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(event) => {
                                setFormData({ ...formData, email: event.target.value });
                                setValidationError({ field: '', message: '' });
                            }}
                            placeholder="you@company.com"
                        />
                        {validationError.field === 'email' && (
                            <span className="field-alert" role="alert">
                                <AlertTriangle size={14} />
                                {validationError.message}
                            </span>
                        )}
                    </label>

                    <label className="field-group">
                        <span>Message</span>
                        <textarea
                            value={formData.message}
                            onChange={(event) => {
                                setFormData({ ...formData, message: event.target.value });
                                setValidationError({ field: '', message: '' });
                            }}
                            placeholder="Share the role, project, or problem space..."
                            rows="7"
                        />
                        {validationError.field === 'message' && (
                            <span className="field-alert field-alert-textarea" role="alert">
                                <AlertTriangle size={14} />
                                {validationError.message}
                            </span>
                        )}
                    </label>

                    <SlideSendButton
                        status={status}
                        onComplete={handleSlideComplete}
                        disabled={status === 'sending'}
                    />

                    <p className={`form-status ${status === 'error' ? 'is-error' : ''}`}>
                        {status === 'sent' && 'Message sent. I will get back to you soon.'}
                        {status === 'error' && 'Something went wrong. Please email me directly.'}
                    </p>
                </form>
            </section>
        </main>
    );
};

export default Contact;
