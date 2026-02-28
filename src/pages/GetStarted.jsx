import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages.css';

export default function GetStarted() {
    const navigate = useNavigate();
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
                    <div className="badge" style={{ margin: '0 auto 20px' }}><Zap size={12} /> Free Forever Plan Available</div>
                    <h1 className="page-hero-title">Start for Free,<br /><span className="text-gradient">Scale When Ready</span></h1>
                    <p className="page-hero-desc">Create your EventFlow account in 30 seconds. No credit card required. Your first event could be live by the time you finish your coffee.</p>
                    <div className="page-hero-actions">
                        <button className="btn btn-primary btn-lg" onClick={() => navigate('/login')}>Create Free Account <ArrowRight size={16} /></button>
                        <Link to="/demo" className="btn btn-outline btn-lg">Talk to Sales</Link>
                    </div>
                    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
                        {['No credit card', 'Unlimited free events', '100 RSVPs on Free plan', 'Cancel anytime'].map(b => (
                            <div key={b} style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                                <Check size={13} style={{ color: 'var(--emerald)' }} /> {b}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-sm">
                <div className="container" style={{ maxWidth: 860 }}>
                    <div className="section-header">
                        <h2>How to get <span className="text-gradient">started</span></h2>
                    </div>
                    <div className="grid-3">
                        {[
                            { step: '1', icon: '📝', title: 'Create Your Account', desc: 'Sign up with your email or Google account. Takes 30 seconds.' },
                            { step: '2', icon: '🎨', title: 'Build Your First Event', desc: 'Use our wizard to set up your event page, registration form, and tickets.' },
                            { step: '3', icon: '🚀', title: 'Go Live & Share', desc: 'Publish your event and share the link. Watch registrations come in.' },
                        ].map(s => (
                            <div key={s.step} className="card" style={{ textAlign: 'center' }}>
                                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: 'white', fontSize: '1.2rem', margin: '0 auto 14px' }}>{s.step}</div>
                                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{s.icon}</div>
                                <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <button className="btn btn-primary btn-lg" onClick={() => navigate('/login')}>
                            Create My Free Account <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
