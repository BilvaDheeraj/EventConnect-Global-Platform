import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
    {
        name: 'Darius Thompson',
        role: 'Commercial Director',
        company: 'WhatsOnStage',
        avatar: 'DT',
        color: '#7C3AED',
        stars: 5,
        quote: "EventFlow is sleek, intuitive, and a complete game-changer for high-profile events. We cut our planning time by 70% and our guest satisfaction scores hit an all-time high. It's not just software — it's a competitive advantage.",
        event: '2,400-seat gala event',
        metric: '70% time saved',
    },
    {
        name: 'Priya Mehta',
        role: 'Head of Events',
        company: 'Google India',
        avatar: 'PM',
        color: '#10B981',
        stars: 5,
        quote: "We've used every major platform out there. EventFlow is in a different league. The analytics alone are worth it — we finally understand our audience. And the check-in system? Chef's kiss. Zero queues, 100% smooth.",
        event: 'Google I/O India 2024',
        metric: '12,000+ attendees managed',
    },
    {
        name: 'James Okonkwo',
        role: 'Festival Director',
        company: 'Afrobeats UK',
        avatar: 'JO',
        color: '#F59E0B',
        stars: 5,
        quote: "I was skeptical at first. Now I literally can't imagine planning a festival without EventFlow. The tiered ticketing, the automated waitlist, the post-event reports — everything just works. Our revenue jumped 40% year-over-year.",
        event: 'Afrobeats Music Festival 2024',
        metric: '+40% revenue growth',
    },
    {
        name: 'Sarah Chen',
        role: 'Program Manager',
        company: 'MIT Media Lab',
        avatar: 'SC',
        color: '#0EA5E9',
        stars: 5,
        quote: "For academia, data integrity and accessibility are everything. EventFlow gets it right on both fronts. The WCAG-compliant forms, GDPR tools, and audit-quality exports make compliance a non-issue. Highly recommend.",
        event: 'MIT Innovation Summit',
        metric: '99.9% data accuracy',
    },
    {
        name: 'Vikram Nair',
        role: 'CEO',
        company: 'TechMeetup India',
        avatar: 'VN',
        color: '#F43F5E',
        stars: 5,
        quote: "We run 200+ meetups a year across 15 cities. EventFlow handles all of them without breaking a sweat. The multi-event dashboard and team collaboration features are outstanding. Finally, a platform that scales with us.",
        event: '200+ community events',
        metric: '15 cities managed',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Nonprofit Executive',
        company: 'Climate Action Network',
        avatar: 'ER',
        color: '#8B5CF6',
        stars: 5,
        quote: "As a nonprofit, budget is everything. EventFlow's nonprofit pricing and the donation integration let us run our annual gala at a fraction of the cost. We raised $180K this year — our best ever. This platform is a lifeline.",
        event: 'Annual Gala & Fundraiser',
        metric: '$180K raised',
    },
];

const REVIEW_SCORES = [
    { platform: 'Capterra', score: '4.8', badge: '🏆', label: 'GetApp' },
    { platform: 'G2', score: '4.7', badge: '⭐', label: 'G2 Crowd' },
    { platform: 'Trustpilot', score: '4.9', badge: '✅', label: 'Trustpilot' },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const prev = () => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    const next = () => setActive(a => (a + 1) % TESTIMONIALS.length);

    const featured = TESTIMONIALS[active];

    return (
        <section className="section testimonials-section" id="testimonials">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <div className="badge">
                        <Star size={12} />
                        Testimonials
                    </div>
                    <h2>Trusted by <span className="text-gradient">Industry Leaders</span></h2>
                    <p>From startups to Fortune 500s, event professionals around the world choose EventFlow.</p>
                </div>

                {/* Review Scores */}
                <div className="review-scores">
                    {REVIEW_SCORES.map(r => (
                        <div key={r.platform} className="review-score-card">
                            <div className="review-score-badge">{r.badge}</div>
                            <div>
                                <div className="review-score-val">{r.score}/5</div>
                                <div className="review-score-label">{r.label}</div>
                            </div>
                            <div className="stars">
                                {'★'.repeat(5)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Testimonial */}
                <div className="testimonial-featured">
                    <div className="testimonial-quote-icon">
                        <Quote size={28} fill="currentColor" />
                    </div>
                    <blockquote className="testimonial-text" key={active}>
                        "{featured.quote}"
                    </blockquote>
                    <div className="testimonial-author">
                        <div className="testimonial-avatar" style={{ background: featured.color }}>
                            {featured.avatar}
                        </div>
                        <div>
                            <div className="testimonial-name">{featured.name}</div>
                            <div className="testimonial-role">{featured.role} · {featured.company}</div>
                        </div>
                        <div className="testimonial-metric">
                            <div className="testimonial-metric-val">{featured.metric}</div>
                            <div className="testimonial-metric-label">{featured.event}</div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="testimonial-nav">
                        <button className="tnav-btn" onClick={prev}><ChevronLeft size={18} /></button>
                        <div className="tnav-dots">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    className={`tnav-dot ${i === active ? 'active' : ''}`}
                                    onClick={() => setActive(i)}
                                />
                            ))}
                        </div>
                        <button className="tnav-btn" onClick={next}><ChevronRight size={18} /></button>
                    </div>
                </div>

                {/* Testimonial Grid - Preview */}
                <div className="testimonial-grid">
                    {TESTIMONIALS.filter((_, i) => i !== active).slice(0, 3).map(t => (
                        <div key={t.name} className="card testimonial-mini" onClick={() => setActive(TESTIMONIALS.indexOf(t))}>
                            <div className="tmin-header">
                                <div className="tmin-avatar" style={{ background: t.color }}>{t.avatar}</div>
                                <div>
                                    <div className="tmin-name">{t.name}</div>
                                    <div className="tmin-role">{t.company}</div>
                                </div>
                                <div className="stars" style={{ fontSize: '0.75rem', marginLeft: 'auto' }}>
                                    {'★'.repeat(t.stars)}
                                </div>
                            </div>
                            <p className="tmin-quote">"{t.quote.slice(0, 110)}..."</p>
                            <div className="tmin-metric">{t.metric}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
