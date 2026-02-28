import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages.css';

const TEMPLATES = [
    { cat: 'Conference', name: 'Tech Summit Pro', emoji: '🎤', color: '#7C3AED', uses: '2.4K', rating: '4.9' },
    { cat: 'Wedding', name: 'Elegant Garden', emoji: '💍', color: '#F43F5E', uses: '5.1K', rating: '5.0' },
    { cat: 'Workshop', name: 'Startup Workshop', emoji: '🛠️', color: '#10B981', uses: '1.8K', rating: '4.8' },
    { cat: 'Fundraiser', name: 'Charity Gala', emoji: '🤝', color: '#F59E0B', uses: '3.2K', rating: '4.9' },
    { cat: 'Meetup', name: 'Tech Meetup', emoji: '👥', color: '#0EA5E9', uses: '8.7K', rating: '4.7' },
    { cat: 'Corporate', name: 'Annual Summit', emoji: '🏢', color: '#8B5CF6', uses: '1.1K', rating: '4.8' },
    { cat: 'Seminar', name: 'Online Webinar', emoji: '🎓', color: '#EC4899', uses: '4.3K', rating: '4.9' },
    { cat: 'Concert', name: 'Music Festival', emoji: '🎸', color: '#F97316', uses: '2.8K', rating: '4.7' },
    { cat: 'Party', name: 'Birthday Bash', emoji: '🎉', color: '#22D3EE', uses: '9.2K', rating: '4.8' },
];

const BG_GRADIENTS = ['linear-gradient(135deg,#7C3AED,#4C1D95)', 'linear-gradient(135deg,#F43F5E,#881337)', 'linear-gradient(135deg,#10B981,#065F46)', 'linear-gradient(135deg,#F59E0B,#92400E)', 'linear-gradient(135deg,#0EA5E9,#0C4A6E)', 'linear-gradient(135deg,#8B5CF6,#4C1D95)', 'linear-gradient(135deg,#EC4899,#831843)', 'linear-gradient(135deg,#F97316,#7C2D12)', 'linear-gradient(135deg,#22D3EE,#0E7490)'];

const CATS = ['All', 'Conference', 'Wedding', 'Workshop', 'Meetup', 'Corporate', 'Fundraiser', 'Concert', 'Party'];

export default function Templates() {
    const [cat, setCat] = useState('All');
    const filtered = cat === 'All' ? TEMPLATES : TEMPLATES.filter(t => t.cat === cat);

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
                    <h1 className="page-hero-title">Event <span className="text-gradient">Templates</span></h1>
                    <p className="page-hero-desc">Pick a beautiful, conversion-tested template and customize it in minutes — no design skills needed.</p>
                    <div className="page-hero-actions">
                        <Link to="/create-event" className="btn btn-primary btn-lg">Start from Scratch</Link>
                    </div>
                </div>
            </section>

            <section className="section-sm">
                <div className="container">
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
                        {CATS.map(c => (
                            <button key={c} className={`btn btn-sm ${cat === c ? 'btn-primary' : 'btn-outline'}`} onClick={() => setCat(c)}>{c}</button>
                        ))}
                    </div>

                    <div className="grid-3">
                        {filtered.map((t, i) => (
                            <div key={t.name} className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
                                <div style={{ height: 180, background: BG_GRADIENTS[TEMPLATES.indexOf(t)], display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                    <span style={{ fontSize: '4rem' }}>{t.emoji}</span>
                                    <div className="template-overlay">
                                        <Link to="/create-event" className="btn btn-primary btn-sm">Use Template</Link>
                                    </div>
                                </div>
                                <div style={{ padding: '16px 20px 20px' }}>
                                    <div className="template-category">{t.cat}</div>
                                    <div className="template-name">{t.name}</div>
                                    <div className="template-meta">⭐ {t.rating} · {t.uses} events created</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
