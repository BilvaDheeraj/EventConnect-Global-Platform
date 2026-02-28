import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Plus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages.css';

const HELP_CATEGORIES = [
    { icon: '🚀', title: 'Getting Started', count: 24, desc: 'Setup, accounts, and first event' },
    { icon: '📝', title: 'Registration & Forms', count: 18, desc: 'Custom fields, forms, logic' },
    { icon: '📨', title: 'Invitations & Email', count: 15, desc: 'Email templates, deliverability' },
    { icon: '💳', title: 'Payments & Tickets', count: 22, desc: 'Stripe, PayPal, refunds' },
    { icon: '📊', title: 'Analytics & Reports', count: 12, desc: 'Insights, exports, dashboards' },
    { icon: '🔗', title: 'Integrations', count: 31, desc: 'Connect your tools' },
    { icon: '🔒', title: 'Security & Privacy', count: 9, desc: 'GDPR, data, permissions' },
    { icon: '🎫', title: 'Check-In & QR Code', count: 11, desc: 'Day-of event management' },
];

const FAQS = [
    { q: 'How do I create my first event?', a: 'Click "Create Event" in your dashboard or from the homepage. Our 5-step wizard will guide you through basics, details, registration settings, tickets, and publishing. Most events go live in under 10 minutes.' },
    { q: 'Can I use EventFlow for free?', a: 'Yes! Our Free plan allows up to 100 RSVPs per event with full access to the website builder and basic reporting. No credit card required to get started.' },
    { q: 'How do I send email invitations to my guest list?', a: 'Go to your event dashboard, click "Invitations," and choose "Email Campaign." You can upload a CSV or connect your existing contact list. Our email builder lets you customize the template, and you can preview before sending.' },
    { q: 'Does EventFlow support paid ticketing?', a: 'Absolutely. You can sell tickets with our built-in payment processing via Stripe and PayPal. Pricing is 1.9% + $0.90 per paid ticket — no monthly fee required for ticketing.' },
    { q: 'What integrations does EventFlow support?', a: 'EventFlow integrates with 100+ tools including Salesforce, HubSpot, Mailchimp, Zoom, Google Workspace, Slack, Zapier, and more. Check our integrations directory for the full list.' },
    { q: 'Can multiple team members manage an event?', a: 'Yes. On Business plans and above, you can invite unlimited team members and assign roles (Admin, Manager, Check-In Staff). Each role has specific permissions to protect your data.' },
    { q: 'Is EventFlow GDPR compliant?', a: 'Yes. EventFlow is fully GDPR compliant with built-in consent collection, data processing agreements, right-to-deletion tools, and a Privacy Shield certified infrastructure.' },
    { q: 'How does QR code check-in work?', a: 'Every registered guest gets a unique QR code in their confirmation email. On the day of the event, your staff uses the EventFlow Check-In app (iOS & Android) to scan codes instantly. Works offline too.' },
];

export default function Help() {
    const [search, setSearch] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const filteredFaqs = FAQS.filter(f =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
    );

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
                    <h1 className="page-hero-title">Help <span className="text-gradient">Center</span></h1>
                    <p className="page-hero-desc">Find answers quickly — or reach out and our team will respond in minutes.</p>

                    <div className="help-search-wrapper" style={{ marginTop: 32, marginBottom: 0 }}>
                        <div className="help-search-box">
                            <Search size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                            <input
                                placeholder="Search articles, guides, and FAQs..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button className="btn btn-primary btn-sm">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-sm">
                <div className="container">
                    {/* Categories */}
                    {!search && (
                        <>
                            <div className="section-header" style={{ marginBottom: 36 }}>
                                <h2>Browse by <span className="text-gradient">Topic</span></h2>
                            </div>
                            <div className="grid-4" style={{ marginBottom: 64 }}>
                                {HELP_CATEGORIES.map(cat => (
                                    <div key={cat.title} className="card help-category-card">
                                        <div className="help-cat-icon">{cat.icon}</div>
                                        <div className="help-cat-title">{cat.title}</div>
                                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '4px 0 8px' }}>{cat.desc}</p>
                                        <div className="help-cat-count">{cat.count} articles</div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* FAQ */}
                    <div style={{ maxWidth: 760, margin: '0 auto' }}>
                        <div className="section-header" style={{ textAlign: 'left', marginBottom: 28 }}>
                            <h2>{search ? `Results for "${search}"` : 'Frequently Asked Questions'}</h2>
                        </div>

                        {filteredFaqs.length === 0 ? (
                            <div className="card" style={{ textAlign: 'center', padding: 48 }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</div>
                                <p style={{ color: 'var(--text-secondary)' }}>No results found for "{search}"</p>
                                <Link to="/demo" className="btn btn-primary" style={{ marginTop: 16 }}>Contact Support</Link>
                            </div>
                        ) : (
                            filteredFaqs.map((faq, i) => (
                                <div key={i} className="faq-item">
                                    <button
                                        className="faq-question"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        {faq.q}
                                        <Plus size={18} className={`faq-icon ${openFaq === i ? 'open' : ''}`} />
                                    </button>
                                    {openFaq === i && (
                                        <div className="faq-answer">{faq.a}</div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Support CTA */}
                    <div style={{ maxWidth: 760, margin: '48px auto 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        {[
                            { icon: '💬', title: 'Live Chat Support', desc: 'Chat with our team — average response time: 2 minutes', cta: 'Start Chat', path: '#' },
                            { icon: '📧', title: 'Email Support', desc: 'Send us a detailed question — we respond within 2 hours', cta: 'Send Email', path: 'mailto:support@eventflow.io' },
                        ].map(s => (
                            <div key={s.title} className="card" style={{ textAlign: 'center', padding: 28 }}>
                                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{s.icon}</div>
                                <div style={{ fontWeight: 700, marginBottom: 6 }}>{s.title}</div>
                                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 16 }}>{s.desc}</p>
                                <a href={s.path} className="btn btn-outline btn-sm">{s.cta}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
