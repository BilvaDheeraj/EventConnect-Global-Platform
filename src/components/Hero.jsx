import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Zap, Shield, Globe, TrendingUp } from 'lucide-react';
import './Hero.css';

const BRANDS = [
    'Red Bull', 'Delta Airlines', 'Whole Foods', 'Volvo', 'Universal',
    'Google', 'NASA', 'Amazon', 'Netflix', 'Spotify', 'Airbnb', 'Stripe'
];

const STATS = [
    { value: '1M+', label: 'Event Creators', icon: Globe },
    { value: '10K+', label: 'Elite Organizations', icon: Shield },
    { value: '4.8★', label: 'Avg. Satisfaction', icon: Star },
    { value: '60hrs', label: 'Saved Per Event', icon: Zap },
];

const FLOATING_CARDS = [
    {
        className: 'float-card-1',
        content: (
            <div className="float-card-inner">
                <div className="float-card-row">
                    <div className="avatar-stack">
                        {['OB', 'AN', 'CR', 'JW'].map((i) => (
                            <span key={i} className="avatar">{i[0]}</span>
                        ))}
                    </div>
                    <span className="float-badge green">LIVE</span>
                </div>
                <div className="float-card-title">TechConf 2025</div>
                <div className="float-card-sub">1,247 registered · 89 pending</div>
                <div className="float-progress">
                    <div className="float-bar" style={{ width: '78%' }}></div>
                </div>
                <div className="float-card-meta">78% capacity filled</div>
            </div>
        )
    },
    {
        className: 'float-card-2',
        content: (
            <div className="float-card-inner">
                <div className="float-card-row">
                    <span className="float-icon">📊</span>
                    <span className="float-badge blue">ANALYTICS</span>
                </div>
                <div className="float-card-title">Revenue Today</div>
                <div className="float-amount">$24,890</div>
                <div className="float-trend">
                    <TrendingUp size={14} />
                    <span>+34.2% vs last event</span>
                </div>
            </div>
        )
    },
    {
        className: 'float-card-3',
        content: (
            <div className="float-card-inner compact">
                <span className="float-icon">✅</span>
                <div>
                    <div className="float-card-title">New RSVP!</div>
                    <div className="float-card-sub">Priya Sharma just confirmed</div>
                </div>
            </div>
        )
    }
];

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentWord, setCurrentWord] = useState(0);
    const words = ['Effortlessly', 'Globally', 'Brilliantly', 'Instantly'];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentWord(w => (w + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            {/* Background Effects */}
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    {/* Left Content */}
                    <div className={`hero-left ${isVisible ? 'visible' : ''}`}>
                        {/* Badge */}
                        <div className="badge hero-badge">
                            <span className="badge-dot"></span>
                            Trusted by over 1 million event creators worldwide
                        </div>

                        {/* Headline */}
                        <h1 className="hero-title">
                            Manage Events{' '}
                            <span className="word-swap">
                                <span key={currentWord} className="word-swap-item text-gradient">
                                    {words[currentWord]}
                                </span>
                            </span>
                            <br />
                            <span className="hero-title-sub">From Invite to Insights.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="hero-desc">
                            EventFlow lets you design, manage, and track events with unmatched power.
                            Create truly custom experiences — from intimate gatherings to global conferences —
                            powered by enterprise-grade tools and beautiful design.
                        </p>

                        {/* CTA Row */}
                        <div className="hero-ctas">
                            <Link to="/get-started" className="btn btn-primary btn-lg">
                                Get Started Free
                                <ArrowRight size={18} />
                            </Link>
                            <Link to="/demo" className="btn btn-outline btn-lg">
                                <span className="play-icon"><Play size={14} fill="currentColor" /></span>
                                Watch Demo
                            </Link>
                        </div>

                        {/* Trust Row */}
                        <div className="hero-trust">
                            <div className="hero-avatars">
                                {['A', 'B', 'C', 'D', 'E'].map((l) => (
                                    <div key={l} className="hero-avatar">{l}</div>
                                ))}
                            </div>
                            <div className="hero-trust-text">
                                <div className="stars">⭐⭐⭐⭐⭐</div>
                                <span>Loved by <strong>10,000+</strong> organizations</span>
                            </div>
                        </div>

                        {/* Key Propositions */}
                        <div className="hero-props">
                            {[
                                { icon: '⚡', text: 'Launch in under 60 seconds' },
                                { icon: '🔐', text: 'SOC2 certified & secure' },
                                { icon: '🌍', text: 'Available in 40+ countries' },
                            ].map(p => (
                                <div key={p.text} className="hero-prop">
                                    <span>{p.icon}</span>
                                    <span>{p.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Visual Dashboard */}
                    <div className={`hero-right ${isVisible ? 'visible' : ''}`}>
                        <div className="hero-visual">
                            {/* Main Window */}
                            <div className="hero-window">
                                <div className="window-bar">
                                    <span className="window-dot red"></span>
                                    <span className="window-dot yellow"></span>
                                    <span className="window-dot green"></span>
                                    <span className="window-title">eventflow.io/my-events</span>
                                </div>
                                <div className="window-content">
                                    <div className="win-header">
                                        <div>
                                            <div className="win-title">Global Tech Summit 2025</div>
                                            <div className="win-sub">San Francisco · March 15, 2025</div>
                                        </div>
                                        <span className="win-status">LIVE</span>
                                    </div>

                                    <div className="win-stats">
                                        {[
                                            { label: 'Registered', val: '2,847', color: '#7C3AED' },
                                            { label: 'Checked In', val: '1,203', color: '#10B981' },
                                            { label: 'Revenue', val: '$94.2K', color: '#F59E0B' },
                                            { label: 'Rating', val: '4.9★', color: '#0EA5E9' },
                                        ].map(s => (
                                            <div key={s.label} className="win-stat">
                                                <div className="win-stat-val" style={{ color: s.color }}>{s.val}</div>
                                                <div className="win-stat-label">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Guest List Preview */}
                                    <div className="win-section-label">Recent Registrations</div>
                                    {[
                                        { name: 'Priya Sharma', role: 'CTO · Google', time: '2m ago', status: 'VIP' },
                                        { name: 'Arun Das', role: 'Founder · Fintech', time: '5m ago', status: 'Speaker' },
                                        { name: 'Sarah Chen', role: 'PM · Meta', time: '8m ago', status: null },
                                        { name: 'James Wilson', role: 'Designer · Apple', time: '12m ago', status: null },
                                    ].map((g, i) => (
                                        <div key={g.name} className="win-guest-row">
                                            <div className="win-guest-avatar" style={{
                                                background: ['#7C3AED', '#F59E0B', '#10B981', '#0EA5E9'][i]
                                            }}>
                                                {g.name[0]}
                                            </div>
                                            <div className="win-guest-info">
                                                <strong>{g.name}</strong>
                                                <span>{g.role}</span>
                                            </div>
                                            <div className="win-guest-right">
                                                {g.status && <span className="win-guest-badge">{g.status}</span>}
                                                <span className="win-guest-time">{g.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Cards */}
                            {FLOATING_CARDS.map(card => (
                                <div key={card.className} className={`float-card ${card.className}`}>
                                    {card.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Brand Logos Marquee */}
                <div className="hero-brands">
                    <div className="brands-label">Trusted by world-class brands</div>
                    <div className="marquee-wrapper">
                        <div className="marquee-track">
                            {[...BRANDS, ...BRANDS].map((brand, i) => (
                                <div key={i} className="brand-logo">{brand}</div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Strip */}
                <div className="hero-stats">
                    {STATS.map(({ value, label, icon: Icon }) => (
                        <div key={label} className="hero-stat-item">
                            <div className="hero-stat-icon"><Icon size={20} /></div>
                            <div>
                                <div className="stat-value">{value}</div>
                                <div className="stat-label">{label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
