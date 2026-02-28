import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Globe, Shield, Zap, Heart, Users } from 'lucide-react';
import '../pages.css';

const VALUES = [
    { icon: Heart, title: 'Customer Obsession', desc: 'Every feature and design decision is built around what is best for our users.' },
    { icon: Zap, title: 'Move Fast, Build Right', desc: 'We ship quickly without cutting corners. Speed and quality are both non-negotiable.' },
    { icon: Globe, title: 'Global by Default', desc: 'EventFlow is built for the world — multi-language, multi-currency, every culture.' },
    { icon: Shield, title: 'Trust and Transparency', desc: 'SOC2 certified, GDPR compliant, and honest about how we handle your data.' },
];

const TEAM = [
    { name: 'Arjun Mehta', role: 'CEO & Co-founder', emoji: '👨‍💼', color: '#7C3AED', desc: 'Former VP at EventBrite, 12 years in event tech' },
    { name: 'Priya Kapoor', role: 'CTO & Co-founder', emoji: '👩‍💻', color: '#10B981', desc: 'Ex-Google engineer, passionate about developer experience' },
    { name: 'Raj Sharma', role: 'Head of Design', emoji: '🎨', color: '#F59E0B', desc: 'Crafted experiences for Figma, Canva, and Adobe' },
    { name: 'Sarah Lin', role: 'VP of Marketing', emoji: '📊', color: '#0EA5E9', desc: 'Scaled 3 B2B SaaS companies from 0 to 1M users' },
    { name: 'David Okonkwo', role: 'Head of Sales', emoji: '🤝', color: '#F43F5E', desc: 'Built enterprise sales at Stripe, Twilio' },
    { name: 'Kavya Rao', role: 'Head of Customer Success', emoji: '💚', color: '#8B5CF6', desc: '98% customer retention record across 5 years' },
];

export default function About() {
    return (
        <>
            <Navbar />
            <section className="page-hero">
                <div className="page-hero-bg">
                    <div className="page-hero-orb-1"></div>
                    <div className="page-hero-orb-2"></div>
                    <div className="page-hero-grid"></div>
                </div>
                <div className="page-hero-content container">
                    <div className="badge" style={{ margin: '0 auto 20px' }}><Globe size={12} /> Our Story</div>
                    <h1 className="page-hero-title">We Believe Every Event <span className="text-gradient">Deserves to be Extraordinary</span></h1>
                    <p className="page-hero-desc">EventFlow was born out of frustration with clunky, expensive, over-complicated event tools. We set out to build the platform we always wished existed.</p>
                </div>
            </section>

            {/* Mission */}
            <section className="section-sm">
                <div className="container" style={{ maxWidth: 880 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
                        <div>
                            <div className="badge" style={{ marginBottom: 16 }}>Our Mission</div>
                            <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '2rem', lineHeight: 1.2, marginBottom: 16 }}>
                                Democratize World-Class Event Management
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
                                Founded in 2022, EventFlow started with a simple idea: event management software should not require an IT department, a 6-figure budget, or weeks of onboarding.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Today we power over 1 million event creators across 40+ countries — from solo wedding planners to Fortune 500 enterprises. Our goal is the same as day one: help you create events the world remembers.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            {[
                                { val: '1M+', label: 'Event Creators', color: '#7C3AED' },
                                { val: '40+', label: 'Countries', color: '#10B981' },
                                { val: '$2.1B+', label: 'Revenue Processed', color: '#F59E0B' },
                                { val: '4.8 Stars', label: 'Avg. Rating', color: '#0EA5E9' },
                            ].map(s => (
                                <div key={s.label} className="card" style={{ textAlign: 'center', padding: 20 }}>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'Outfit', color: s.color }}>{s.val}</div>
                                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-sm" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge"><Heart size={12} /> Our Values</div>
                        <h2>What We <span className="text-gradient">Stand For</span></h2>
                    </div>
                    <div className="grid-4">
                        {VALUES.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="card">
                                <div className="icon-box" style={{ marginBottom: 16 }}><Icon size={20} /></div>
                                <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{title}</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge"><Users size={12} /> The Team</div>
                        <h2>Built by <span className="text-gradient">Event People</span></h2>
                        <p>Our team has personally managed thousands of events across 6 continents.</p>
                    </div>
                    <div className="grid-3">
                        {TEAM.map(t => (
                            <div key={t.name} className="card team-card" style={{ textAlign: 'center' }}>
                                <div className="team-avatar" style={{ background: t.color, fontSize: '2rem' }}>{t.emoji}</div>
                                <div className="team-name">{t.name}</div>
                                <div className="team-role">{t.role}</div>
                                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring CTA */}
            <section className="section-sm">
                <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
                    <div className="card" style={{ padding: 48 }}>
                        <div style={{ fontSize: '3rem', marginBottom: 16 }}>💼</div>
                        <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.8rem', marginBottom: 12 }}>Join Our Team</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
                            We are a remote-first team of passionate builders. If you love events and great software, we would love to hear from you.
                        </p>
                        <Link to="/careers" className="btn btn-primary btn-lg">View Open Roles</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
