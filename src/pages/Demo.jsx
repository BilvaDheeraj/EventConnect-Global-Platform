import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Mail, Phone, Building2, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages.css';

const COMPANY_SIZES = ['1–10', '11–50', '51–250', '250–1000', '1000+'];
const USE_CASES = ['Corporate Events', 'Nonprofit', 'Conferences', 'Weddings', 'Tech Meetups', 'Education'];

export default function Demo() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', size: '', useCase: '', date: '', message: '' });
    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

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
                    <div className="badge" style={{ margin: '0 auto 20px' }}><Calendar size={12} /> Book a Demo</div>
                    <h1 className="page-hero-title">See EventFlow <span className="text-gradient">in Action</span></h1>
                    <p className="page-hero-desc">Book a personalized 30-minute demo with our team. We'll show you exactly how EventFlow can transform your events and answer every question you have.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
                        {['30-min personal walkthrough', 'Live Q&A with experts', 'Custom plan recommendation'].map(b => (
                            <div key={b} style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                <Check size={15} style={{ color: 'var(--emerald)' }} /> {b}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-sm">
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 52, alignItems: 'start' }}>
                        {/* Info Panel */}
                        <div>
                            <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.5rem', marginBottom: 16 }}>What to Expect</h2>
                            {[
                                { icon: '🎬', title: 'Platform Walkthrough', desc: "See EventFlow's full feature suite live — customized to your event type." },
                                { icon: '🤝', title: 'Expert Consultation', desc: 'Our team will understand your needs and show exactly the tools you need.' },
                                { icon: '💰', title: 'Pricing & Plan Fit', desc: "We'll find the plan that works for your budget — no pressure pitch." },
                                { icon: '⚡', title: 'Live Q&A', desc: 'Ask anything about integrations, compliance, or enterprise features.' },
                            ].map(s => (
                                <div key={s.title} style={{ display: 'flex', gap: 14, marginBottom: 24, padding: 20, borderRadius: 'var(--radius-md)', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                                    <span style={{ fontSize: '1.6rem' }}>{s.icon}</span>
                                    <div>
                                        <div style={{ fontWeight: 700, marginBottom: 4, fontSize: '0.95rem' }}>{s.title}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</div>
                                    </div>
                                </div>
                            ))}

                            <div style={{ padding: 20, borderRadius: 'var(--radius-lg)', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', marginTop: 24 }}>
                                <div style={{ fontWeight: 700, marginBottom: 8 }}>💬 Have an immediate question?</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 12 }}>Email our sales team directly:</div>
                                <a href="mailto:sales@eventflow.io" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>sales@eventflow.io</a>
                            </div>
                        </div>

                        {/* Form */}
                        {submitted ? (
                            <div className="card" style={{ textAlign: 'center', padding: 52 }}>
                                <div style={{ fontSize: '4rem', marginBottom: 16 }}>🎉</div>
                                <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, marginBottom: 10 }}>Demo Booked!</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
                                    We've received your request and a team member will reach out within 2 hours to confirm your slot.
                                </p>
                                <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                                    <Link to="/" className="btn btn-outline">Back to Home</Link>
                                    <Link to="/dashboard" className="btn btn-primary">Go to Dashboard <ArrowRight size={15} /></Link>
                                </div>
                            </div>
                        ) : (
                            <form className="card" style={{ padding: 36 }} onSubmit={handleSubmit}>
                                <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.3rem', marginBottom: 24 }}>Book Your Demo</h3>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">First & Last Name *</label>
                                        <input className="input" placeholder="Priya Sharma" value={form.name} onChange={e => set('name', e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Work Email *</label>
                                        <input className="input" type="email" placeholder="priya@company.com" value={form.email} onChange={e => set('email', e.target.value)} required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Phone Number</label>
                                        <input className="input" type="tel" placeholder="+91 99999 00000" value={form.phone} onChange={e => set('phone', e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Company Name</label>
                                        <input className="input" placeholder="Acme Corporation" value={form.company} onChange={e => set('company', e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Company Size</label>
                                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                        {COMPANY_SIZES.map(s => (
                                            <button key={s} type="button" className={`btn btn-sm ${form.size === s ? 'btn-primary' : 'btn-outline'}`} onClick={() => set('size', s)}>{s}</button>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Primary Use Case</label>
                                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                        {USE_CASES.map(u => (
                                            <button key={u} type="button" className={`btn btn-sm ${form.useCase === u ? 'btn-primary' : 'btn-outline'}`} onClick={() => set('useCase', u)}>{u}</button>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Preferred Demo Date</label>
                                    <input className="input" type="date" value={form.date} onChange={e => set('date', e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Anything specific you'd like to see?</label>
                                    <textarea className="form-textarea" placeholder="e.g. multi-event management, QR check-in, Salesforce integration..." style={{ minHeight: 90 }} value={form.message} onChange={e => set('message', e.target.value)} />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 15 }}>
                                    Book My Free Demo <ArrowRight size={16} />
                                </button>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 10 }}>
                                    We typically respond within 2 hours. No spam, ever.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
