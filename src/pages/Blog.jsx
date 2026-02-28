import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages.css';

const POSTS = [
    { category: 'Event Tips', icon: '💡', title: '10 Proven Strategies to Boost Event RSVP Rates by 60%', author: 'Priya Kapoor', date: 'Feb 24, 2025', readTime: '7 min', excerpt: 'Most event organizers focus on promotion but ignore the registration experience. Here\'s how to fix that...' },
    { category: 'Product', icon: '🚀', title: 'Introducing EventFlow 2.0: The Biggest Update in Our History', author: 'Arjun Mehta', date: 'Feb 20, 2025', readTime: '4 min', excerpt: 'New AI-powered guest insights, redesigned check-in app, and Salesforce sync — all in one update.' },
    { category: 'Case Study', icon: '🏆', title: 'How Google India Managed 12,000 Attendees with Zero Chaos', author: 'Sarah Lin', date: 'Feb 15, 2025', readTime: '8 min', excerpt: 'A deep dive into exactly how Google\'s events team leveraged EventFlow for their biggest summit.' },
    { category: 'Guide', icon: '📖', title: 'The Complete Guide to Virtual & Hybrid Event Management in 2025', author: 'Kavya Rao', date: 'Feb 10, 2025', readTime: '12 min', excerpt: 'From engagement tools to tech stack, everything you need to run incredible virtual events.' },
    { category: 'Industry', icon: '📊', title: 'State of Events 2025: 7 Trends That Will Define This Year', author: 'David Okonkwo', date: 'Feb 5, 2025', readTime: '9 min', excerpt: 'AI, micro-events, hybrid experiences, and the return of large-format conferences — what\'s driving growth.' },
    { category: 'Tutorial', icon: '🎓', title: 'How to Create a Stunning Event Registration Page in 10 Minutes', author: 'Raj Sharma', date: 'Jan 30, 2025', readTime: '5 min', excerpt: 'Step-by-step guide to building a conversion-optimized event page using EventFlow\'s builder.' },
];

const CATEGORIES = ['All', 'Event Tips', 'Product', 'Case Study', 'Guide', 'Industry', 'Tutorial'];
const BG_GRADIENTS = [
    'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)',
    'linear-gradient(135deg, #10B981 0%, #065F46 100%)',
    'linear-gradient(135deg, #F59E0B 0%, #92400E 100%)',
    'linear-gradient(135deg, #0EA5E9 0%, #0C4A6E 100%)',
    'linear-gradient(135deg, #F43F5E 0%, #881337 100%)',
    'linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)',
];

export default function Blog() {
    const [cat, setCat] = useState('All');
    const filtered = cat === 'All' ? POSTS : POSTS.filter(p => p.category === cat);

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
                    <h1 className="page-hero-title">EventFlow <span className="text-gradient">Blog</span></h1>
                    <p className="page-hero-desc">Insights, stories, and tips for event professionals — from our team to yours.</p>
                </div>
            </section>

            <section className="section-sm">
                <div className="container">
                    {/* Category Filter */}
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
                        {CATEGORIES.map(c => (
                            <button key={c} className={`btn btn-sm ${cat === c ? 'btn-primary' : 'btn-outline'}`} onClick={() => setCat(c)}>{c}</button>
                        ))}
                    </div>

                    {/* Featured Post */}
                    {cat === 'All' && (
                        <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 40, padding: 0, overflow: 'hidden' }}>
                            <div style={{ background: BG_GRADIENTS[0], minHeight: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem' }}>
                                {POSTS[0].icon}
                            </div>
                            <div style={{ padding: '32px 32px 32px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div className="blog-card-tag">⭐ Featured · {POSTS[0].category}</div>
                                <h2 className="blog-card-title" style={{ fontSize: '1.3rem', marginBottom: 12 }}>{POSTS[0].title}</h2>
                                <p className="blog-card-excerpt">{POSTS[0].excerpt}</p>
                                <div className="blog-card-meta" style={{ marginBottom: 16 }}>
                                    <span>{POSTS[0].author}</span>
                                    <span>·</span>
                                    <span>{POSTS[0].date}</span>
                                    <span>·</span>
                                    <span>{POSTS[0].readTime} read</span>
                                </div>
                                <Link to="#" className="btn btn-primary" style={{ width: 'fit-content' }}>Read Article</Link>
                            </div>
                        </div>
                    )}

                    {/* Grid */}
                    <div className="grid-3">
                        {filtered.slice(cat === 'All' ? 1 : 0).map((post, i) => (
                            <div key={post.title} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                                <div style={{ height: 160, background: BG_GRADIENTS[(i + 1) % BG_GRADIENTS.length], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
                                    {post.icon}
                                </div>
                                <div style={{ padding: '20px 24px 24px' }}>
                                    <div className="blog-card-tag">{post.category}</div>
                                    <div className="blog-card-title">{post.title}</div>
                                    <p className="blog-card-excerpt">{post.excerpt}</p>
                                    <div className="blog-card-meta">
                                        <span>{post.author}</span>
                                        <span>·</span>
                                        <span>{post.readTime} read</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="card" style={{ textAlign: 'center', padding: 48, marginTop: 48, background: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.2)' }}>
                        <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.4rem', marginBottom: 10 }}>Get Event Insights Weekly</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Join 15,000+ event professionals who read our weekly digest.</p>
                        <div style={{ display: 'flex', gap: 10, maxWidth: 400, margin: '0 auto' }}>
                            <input className="input" placeholder="you@company.com" style={{ flex: 1 }} />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
