import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Zap } from 'lucide-react';
import './CTA.css';

const UPCOMING_EVENTS = [
    { name: 'Global Summit', date: 'Mar 15', attendees: '5,000+', type: 'Conference' },
    { name: 'Innovation Week', date: 'Apr 2', attendees: '2,500+', type: 'Workshop' },
    { name: 'Tech Meetup NYC', date: 'Apr 18', attendees: '800+', type: 'Meetup' },
];

export default function CTA() {
    return (
        <section className="section cta-section">
            <div className="container">
                <div className="cta-card">
                    {/* Decoration */}
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>

                    <div className="cta-inner">
                        <div className="cta-left">
                            <div className="badge" style={{ marginBottom: '20px' }}>
                                <Zap size={12} />
                                Launch Offer · Limited Time
                            </div>
                            <h2 className="cta-title">
                                Ready to Create Events<br />
                                <span className="text-gradient-gold">the World Remembers?</span>
                            </h2>
                            <p className="cta-desc">
                                Join over <strong>1 million</strong> event creators who use EventFlow to build unforgettable experiences.
                                Start free — no credit card required. Go live in minutes.
                            </p>
                            <div className="cta-actions">
                                <a href="#" className="btn btn-accent btn-lg">
                                    <Calendar size={18} />
                                    Create Your First Event Free
                                    <ArrowRight size={18} />
                                </a>
                                <a href="#" className="btn btn-outline btn-lg">
                                    Book a Personal Demo
                                </a>
                            </div>
                            <div className="cta-reassurance">
                                <span>✅ No credit card</span>
                                <span>✅ Free forever plan</span>
                                <span>✅ Cancel anytime</span>
                                <span>✅ 24/7 support</span>
                            </div>
                        </div>

                        <div className="cta-right">
                            <div className="cta-live-events">
                                <div className="cta-live-header">
                                    <span className="badge-dot" style={{ background: '#10B981' }}></span>
                                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                                        LIVE ON EVENTFLOW NOW
                                    </span>
                                </div>
                                {UPCOMING_EVENTS.map(evt => (
                                    <div key={evt.name} className="cta-event-row">
                                        <div className="cta-event-icon">📅</div>
                                        <div className="cta-event-info">
                                            <div className="cta-event-name">{evt.name}</div>
                                            <div className="cta-event-meta">{evt.date} · {evt.attendees} registered</div>
                                        </div>
                                        <span className="tag">{evt.type}</span>
                                    </div>
                                ))}
                                <div className="cta-counter">
                                    <span className="cta-counter-val">2,847</span>
                                    <span className="cta-counter-label">events created in the last 24 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
