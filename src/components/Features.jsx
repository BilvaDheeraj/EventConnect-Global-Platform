import { useState } from 'react';
import {
    Calendar, Mail, Ticket, BarChart3, QrCode, Settings,
    Users, Globe, Shield, Zap, Check, ChevronRight, ArrowRight,
    Palette, Clock, Link, Database, Bell, Layout, Lock, Star
} from 'lucide-react';
import './Features.css';

const FEATURE_TABS = ['Invitations', 'Registration', 'Sell Tickets', 'Management'];

const FEATURES_DATA = {
    'Invitations': {
        title: 'Stunning Invitations That Get Responses',
        desc: 'Design breathtaking, branded event invitations in minutes. Send via email, embed on your site, or share a custom link.',
        image: null,
        tags: ['Email Design', 'QR Codes', 'Custom URLs', 'Branding'],
        highlights: [
            { icon: Palette, title: 'Drag & Drop Builder', desc: 'Professional templates tailored to your brand. Zero design skills needed.' },
            { icon: Mail, title: 'Smart Email Invites', desc: 'Personalized bulk invitations with merge tags and dynamic content.' },
            { icon: QrCode, title: 'QR Code Generation', desc: 'Instant QR codes for physical invitations, venues, and marketing materials.' },
            { icon: Link, title: 'Custom Event URLs', desc: 'Memorable links like eventflow.io/your-brand-summit-2025' },
        ],
        items: ['Drag-and-drop invitation builder', 'Branded email templates', 'QR code for every event', 'Custom event URLs', 'Social media card previews', 'Multi-language support'],
    },
    'Registration': {
        title: 'Smart Registration Forms That Convert',
        desc: 'Collect exactly the information you need with intelligent, adaptive forms. Custom fields, conditional logic, and zero friction.',
        tags: ['Custom Fields', 'Conditional Logic', 'Multi-Step', 'Accessibility'],
        highlights: [
            { icon: Layout, title: 'Multi-Step Forms', desc: 'Break long forms into digestible steps. Reduce drop-off by up to 40%.' },
            { icon: Database, title: 'Conditional Logic', desc: 'Show or hide fields based on responses. Collect precisely what you need.' },
            { icon: Users, title: 'Group Registration', desc: 'Let attendees register multiple people with a single submission.' },
            { icon: Globe, title: 'GDPR Compliant', desc: 'Built-in consent checkboxes and data handling following global privacy laws.' },
        ],
        items: ['Custom question types', 'Conditional form logic', 'Group registration support', 'File uploads & attachments', 'Digital signature capture', 'Accessibility (WCAG 2.1 AA)'],
    },
    'Sell Tickets': {
        title: 'Turn Your Event Into Revenue',
        desc: "Sell tickets, collect payments, and manage capacity — all from one dashboard. Works for free and paid events alike.",
        tags: ['Stripe', 'PayPal', 'Refunds', 'Promo Codes'],
        highlights: [
            { icon: Ticket, title: 'Multiple Ticket Tiers', desc: 'Early bird, VIP, and general admission. Set prices, limits, and sale dates.' },
            { icon: Shield, title: 'Fraud Protection', desc: 'Built-in fraud detection and PCI DSS compliant payment processing.' },
            { icon: Bell, title: 'Promo Codes', desc: 'Create unlimited discount codes — fixed, percentage, or category-specific.' },
            { icon: BarChart3, title: 'Revenue Analytics', desc: 'Real-time sales dashboards with complete financial reporting and exports.' },
        ],
        items: ['Stripe & PayPal integration', 'Automatic refund handling', 'Promo & discount codes', 'Waitlist management', 'Tax collection & invoicing', 'Payout scheduling'],
    },
    'Management': {
        title: 'Automate Everything. Control Everything.',
        desc: 'From guest check-in to post-event reporting, EventFlow handles the heavy lifting so you can focus on what matters.',
        tags: ['Check-In', 'Analytics', 'Automation', 'Exports'],
        highlights: [
            { icon: QrCode, title: 'QR Check-In App', desc: 'Lightning-fast check-in on any device. Print badges directly from the app.' },
            { icon: Clock, title: 'Automated Reminders', desc: 'Schedule confirmation, reminder, and follow-up emails automatically.' },
            { icon: Settings, title: 'Team Collaboration', desc: 'Multiple team members, roles, and permissions. Streamline your workflow.' },
            { icon: BarChart3, title: 'Advanced Analytics', desc: '360° insights — attendee demographics, engagement, revenue, and ROI.' },
        ],
        items: ['Real-time guest dashboard', 'QR-based event check-in', 'Badge & certificate printing', 'Automated communications', 'CRM integrations (Salesforce, HubSpot)', 'CSV/Excel data exports'],
    },
};

const VALUE_CARDS = [
    {
        icon: Zap,
        iconClass: 'icon-box-gold',
        title: 'Go Live in Hours',
        stat: 'Saves 60+ hrs',
        desc: 'From zero to publish-ready with templates built for every event type. No technical setup required.',
        color: '#F59E0B',
    },
    {
        icon: Shield,
        iconClass: 'icon-box-emerald',
        title: 'Zero Stress Management',
        stat: '99.9% uptime',
        desc: "We've covered every planning detail — so you focus on the experience, not the logistics.",
        color: '#10B981',
    },
    {
        icon: BarChart3,
        iconClass: '',
        title: 'Increase Revenue',
        stat: '+34% avg revenue',
        desc: 'Smart ticketing, upsells, and payment tools that maximize attendee spend per event.',
        color: '#7C3AED',
    },
    {
        icon: Globe,
        iconClass: 'icon-box-sky',
        title: 'Scale Globally',
        stat: '40+ countries',
        desc: 'Multi-currency, multi-language, and timezone-aware tools built for worldwide audiences.',
        color: '#0EA5E9',
    },
];

const INTEGRATIONS = [
    { name: 'Salesforce', emoji: '☁️' },
    { name: 'HubSpot', emoji: '🟠' },
    { name: 'Zapier', emoji: '⚡' },
    { name: 'Slack', emoji: '💬' },
    { name: 'Mailchimp', emoji: '🐵' },
    { name: 'Zoom', emoji: '📹' },
    { name: 'Google Workspace', emoji: '🔵' },
    { name: 'Stripe', emoji: '💳' },
    { name: 'PayPal', emoji: '🅿️' },
    { name: 'Eventbrite', emoji: '🎫' },
    { name: 'Intercom', emoji: '💬' },
    { name: 'Airtable', emoji: '📊' },
];

export default function Features() {
    const [activeTab, setActiveTab] = useState('Invitations');
    const feature = FEATURES_DATA[activeTab];

    return (
        <>
            {/* Value Propositions */}
            <section className="section" id="features">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">
                            <Zap size={12} />
                            Why EventFlow
                        </div>
                        <h2>Everything You Need to Run <span className="text-gradient">Exceptional Events</span></h2>
                        <p>We've spent years building the tools that event professionals actually need — and cutting the ones they don't.</p>
                    </div>

                    <div className="grid-4">
                        {VALUE_CARDS.map(({ icon: Icon, iconClass, title, stat, desc, color }) => (
                            <div key={title} className="card value-card">
                                <div className={`icon-box ${iconClass}`} style={{ '--card-color': color }}>
                                    <Icon size={22} />
                                </div>
                                <div className="value-stat" style={{ color }}>{stat}</div>
                                <h3 className="value-title">{title}</h3>
                                <p className="value-desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Features Tabs */}
            <section className="section features-tabs-section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">
                            <Settings size={12} />
                            Platform Features
                        </div>
                        <h2>Customize, <span className="text-gradient">Control</span>, Automate</h2>
                        <p>Three steps to event excellence — spotlight your brand, execute seamlessly, and simplify everything with smart automation.</p>
                    </div>

                    {/* Tabs */}
                    <div className="tabs-wrapper">
                        <div className="tab-list features-tab-list">
                            {FEATURE_TABS.map(tab => (
                                <button
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Feature Content */}
                    <div className="feature-panel" key={activeTab}>
                        <div className="feature-panel-left">
                            <div className="feature-tags">
                                {feature.tags.map(t => <span key={t} className="tag">{t}</span>)}
                            </div>
                            <h3 className="feature-panel-title">{feature.title}</h3>
                            <p className="feature-panel-desc">{feature.desc}</p>

                            <div className="feature-items">
                                {feature.items.map(item => (
                                    <div key={item} className="feature-check">
                                        <Check size={16} className="check-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#" className="btn btn-primary" style={{ marginTop: '28px', width: 'fit-content' }}>
                                Explore {activeTab} <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="feature-panel-right">
                            <div className="feature-highlights">
                                {feature.highlights.map(({ icon: Icon, title, desc }) => (
                                    <div key={title} className="highlight-card">
                                        <div className="icon-box">
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <div className="highlight-title">{title}</div>
                                            <div className="highlight-desc">{desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="section-sm integrations-section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge"><Settings size={12} /> Integrations</div>
                        <h2>Connect Your <span className="text-gradient">Entire Stack</span></h2>
                        <p>EventFlow plugs into 100+ tools you already use — from CRMs and payment processors to marketing platforms and more.</p>
                    </div>
                    <div className="integrations-grid">
                        {INTEGRATIONS.map(({ name, emoji }) => (
                            <div key={name} className="card integration-card">
                                <span className="integration-emoji">{emoji}</span>
                                <span className="integration-name">{name}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '32px' }}>
                        <a href="#" className="btn btn-outline">
                            View All 100+ Integrations <ChevronRight size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
