import { Palette, Lock, Settings, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

const STEPS = [
    {
        num: '01',
        icon: Palette,
        title: 'Customize',
        subtitle: 'Spotlight Your Brand',
        desc: 'Tailor every pixel to your brand — custom colors, logos, fonts, and imagery. Your event page, your identity.',
        tags: ['Brand Colors', 'Custom Logo', 'Theme Builder', 'Multi-part Events'],
        accent: '#7C3AED',
        visual: (
            <div className="step-visual-1">
                <div className="sv-window">
                    <div className="sv-header">
                        <div className="sv-dot red"></div>
                        <div className="sv-dot yellow"></div>
                        <div className="sv-dot green"></div>
                    </div>
                    <div className="sv-preview">
                        <div className="sv-event-banner">
                            <div className="sv-event-gradient"></div>
                            <div className="sv-event-text">
                                <span className="sv-event-tag">🎯 COMPANY SUMMIT</span>
                                <div className="sv-event-title">Innovation Week 2025</div>
                                <div className="sv-event-date">March 15–20 · San Francisco</div>
                            </div>
                        </div>
                        <div className="sv-palette">
                            {['#7C3AED', '#10B981', '#F59E0B', '#F43F5E', '#0EA5E9'].map(c => (
                                <div key={c} className="sv-color-dot" style={{ background: c }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        num: '02',
        icon: Lock,
        title: 'Control',
        subtitle: 'Execute Flawlessly',
        desc: 'Custom questions, form embedding, waitlists, capacity limits, and security controls — every detail in your hands.',
        tags: ['Guest Security', 'Form Embedding', 'Waitlist', 'Capacity Control'],
        accent: '#10B981',
        visual: (
            <div className="step-visual-2">
                <div className="sv-form-preview">
                    <div className="sv-form-title">Registration Form</div>
                    {[
                        { label: 'Full Name', val: 'Priya Sharma', type: 'text' },
                        { label: 'Company Role', val: 'CTO', type: 'select' },
                        { label: 'Dietary Preference', val: 'Vegan', type: 'select' },
                        { label: 'Session Interest', val: 'AI & ML Track', type: 'multi' },
                    ].map((f) => (
                        <div key={f.label} className="sv-form-field">
                            <div className="sv-field-label">{f.label}</div>
                            <div className={`sv-field-input ${f.type}`}>{f.val}</div>
                        </div>
                    ))}
                    <div className="sv-form-btn">Register Now →</div>
                </div>
            </div>
        ),
    },
    {
        num: '03',
        icon: Settings,
        title: 'Automate',
        subtitle: 'Simplify Guest Management',
        desc: 'Real-time tracking, automated communication sequences, smart imports/exports — all running on autopilot.',
        tags: ['Real-Time Tracking', 'Auto-Emails', 'CSV Imports', 'Data Export'],
        accent: '#F59E0B',
        visual: (
            <div className="step-visual-3">
                <div className="sv-automation">
                    {[
                        { icon: '📨', label: 'Invite Sent', time: 'Day 0', active: true },
                        { icon: '✅', label: 'RSVP Confirmed', time: 'Day 2', active: true },
                        { icon: '⏰', label: '24hr Reminder', time: 'Day 13', active: false },
                        { icon: '🎤', label: 'Event Day', time: 'Day 14', active: false },
                        { icon: '💌', label: 'Thank You Email', time: 'Day 15', active: false },
                    ].map((step, i) => (
                        <div key={step.label} className={`sv-step ${step.active ? 'sv-step-done' : ''}`}>
                            <div className="sv-step-icon">{step.icon}</div>
                            <div className="sv-step-info">
                                <div className="sv-step-label">{step.label}</div>
                                <div className="sv-step-time">{step.time}</div>
                            </div>
                            <div className={`sv-step-dot ${step.active ? 'done' : ''}`}></div>
                            {i < 4 && <div className={`sv-step-line ${step.active ? 'done' : ''}`}></div>}
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section className="section how-section" id="how-it-works">
            <div className="container">
                <div className="section-header">
                    <div className="badge">
                        <ArrowRight size={12} />
                        How It Works
                    </div>
                    <h2>Launch in <span className="text-gradient">Three Steps</span></h2>
                    <p>No learning curve. No IT department needed. Go from concept to live event in under an hour.</p>
                </div>

                <div className="how-steps">
                    {STEPS.map((step, i) => (
                        <div key={step.num} className={`how-step ${i % 2 === 1 ? 'reverse' : ''}`}>
                            {/* Content */}
                            <div className="how-step-content">
                                <div className="how-step-num" style={{ '--accent': step.accent }}>{step.num}</div>
                                <div className="how-step-icon-wrap" style={{ '--accent': step.accent }}>
                                    <step.icon size={22} />
                                </div>
                                <div className="how-step-subtitle">{step.subtitle}</div>
                                <h3 className="how-step-title">{step.title}</h3>
                                <p className="how-step-desc">{step.desc}</p>
                                <div className="how-tags">
                                    {step.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="how-step-visual">
                                <div className="how-visual-bg" style={{ '--accent': step.accent }}></div>
                                {step.visual}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
