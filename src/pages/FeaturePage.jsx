import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, ArrowRight } from 'lucide-react';
import '../pages.css';

const FEATURES_DATA = {
    invitations: {
        title: 'Beautiful Invitations & RSVP',
        subtitle: 'Craft stunning, branded invitations that get responses',
        emoji: '📨',
        color: '#7C3AED',
        hero: 'Design breathtaking branded event invitations in minutes. Send via email, embed on your site, or share a custom link — and watch RSVPs roll in.',
        features: [
            { title: 'Drag-and-Drop Builder', desc: 'Build invitation pages with our visual editor — no code, no design experience needed.' },
            { title: 'Branded Email Invites', desc: 'Send personalized bulk email invitations with merge tags, custom sender names, and pixel-perfect layouts.' },
            { title: 'Smart RSVP Tracking', desc: 'Track RSVPs in real-time, send reminders to non-responders, and see who opened, clicked, and registered.' },
            { title: 'Custom Event URLs', desc: 'Create memorable links like eventflow.io/your-brand-summit that reinforce your brand identity.' },
            { title: 'Social Media Cards', desc: 'Auto-generate Open Graph images so your event looks stunning when shared on social media.' },
            { title: 'Multi-Language Support', desc: 'Serve global audiences with invitations in 25+ languages including RTL support.' },
        ],
        stats: [{ val: '87%', label: 'Higher open rate vs generic emails' }, { val: '62%', label: 'Avg. RSVP conversion rate' }, { val: '25+', label: 'Languages supported' }],
    },
    registration: {
        title: 'Smart Event Registration',
        subtitle: 'Powerful, flexible registration forms that convert',
        emoji: '📋',
        color: '#10B981',
        hero: 'Create registration forms that are as beautiful as they are powerful. Collect exactly the data you need with custom fields, conditional logic, and smart automation.',
        features: [
            { title: 'Custom Form Builder', desc: 'Add text, dropdown, checkbox, file upload fields and more. Arrange them with drag-and-drop.' },
            { title: 'Conditional Logic', desc: 'Show or hide questions based on previous answers — create intelligent flows for different attendee types.' },
            { title: 'Wait Lists & Capacity', desc: 'Set capacity limits, automatically move guests from wait list, and send notifications when spots open.' },
            { title: 'Group Registration', desc: 'Allow one person to register multiple guests in a single form submission — perfect for teams.' },
            { title: 'Data Export & CRM Sync', desc: 'Export to CSV or sync directly to Salesforce, HubSpot, or Mailchimp after every registration.' },
            { title: 'Auto-Confirmation Emails', desc: 'Instantly send customized confirmation emails with calendar invites attached.' },
        ],
        stats: [{ val: '3.5×', label: 'Higher completion rate' }, { val: '100%', label: 'Mobile optimized' }, { val: '2min', label: 'Avg. time to build form' }],
    },
    tickets: {
        title: 'Sell Tickets & Manage Payments',
        subtitle: 'The most powerful ticketing platform for any event size',
        emoji: '🎫',
        color: '#F59E0B',
        hero: 'From free events to complex multi-tier paid events — EventFlow handles every aspect of ticketing. Accept payments globally, manage refunds, and track revenue in real time.',
        features: [
            { title: 'Multiple Ticket Tiers', desc: 'Create Early Bird, VIP, General Admission, and any number of custom ticket types with separate pricing and availability.' },
            { title: 'Global Payments', desc: 'Accept credit cards, PayPal, and bank transfers in 135+ currencies. Payouts to your account in 2 business days.' },
            { title: 'Discount Codes', desc: 'Create percentage or fixed-amount promo codes. Set unlimited uses, expiry dates, and track usage.' },
            { title: 'Bundle & Add-Ons', desc: 'Sell merchandise, parking, VIP upgrades, or food packages alongside tickets.' },
            { title: 'Refund Management', desc: 'Issue full or partial refunds with one click. Set your own refund policy and automate the process.' },
            { title: 'Revenue Dashboard', desc: 'Track sales, revenue, and projections in real time with beautiful charts and export options.' },
        ],
        stats: [{ val: '$2.1B+', label: 'Revenue processed' }, { val: '135+', label: 'Currencies accepted' }, { val: '1.9%', label: 'Industry-low fee' }],
    },
    analytics: {
        title: 'Event Analytics & Insights',
        subtitle: 'Data-driven decisions for every event',
        emoji: '📊',
        color: '#0EA5E9',
        hero: 'Turn your event data into powerful insights. Understand your audience, optimize conversion, and prove event ROI with real-time analytics built for event professionals.',
        features: [
            { title: 'Real-Time Dashboard', desc: 'Monitor registrations, check-ins, ticket sales, and revenue as they happen — with live updates every minute.' },
            { title: 'Attendee Insights', desc: 'Understand who\'s attending — industry, company size, location, and how they found your event.' },
            { title: 'Conversion Funnel', desc: 'See exactly where potential attendees drop off in your registration flow and optimize accordingly.' },
            { title: 'Email Analytics', desc: 'Track open rates, click-through rates, and RSVP attribution for every email campaign.' },
            { title: 'Custom Reports', desc: 'Build reports with the exact metrics you need and schedule automatic delivery to your inbox.' },
            { title: 'Post-Event Surveys', desc: 'Automatically send NPS surveys and collect feedback. Measure satisfaction and improve future events.' },
        ],
        stats: [{ val: '50+', label: 'Metrics tracked' }, { val: 'Real-time', label: 'Data updates' }, { val: '10+', label: 'Export formats' }],
    },
    'qr-check-in': {
        title: 'QR Code Check-In',
        subtitle: 'Zero queues. Zero chaos. Just happy attendees.',
        emoji: '📱',
        color: '#8B5CF6',
        hero: 'Speed up your event entry by 10x with instant QR code scanning. Works on any smartphone, even offline. Your guests are in — before they can say "where\'s the line?"',
        features: [
            { title: 'Auto-Generated QR Codes', desc: 'Every registrant receives a unique, encrypted QR code in their confirmation email automatically.' },
            { title: 'iOS & Android App', desc: 'Download our free EventFlow Check-In app and scan QR codes with any smartphone camera.' },
            { title: 'Offline Mode', desc: 'Works without internet. Guest data syncs automatically when connectivity is restored.' },
            { title: 'Multi-Device Sync', desc: 'Run check-in on multiple devices simultaneously — all data stays in sync in real time.' },
            { title: 'Bulk Check-In', desc: 'Check in entire groups or VIP tables with a single scan for group ticket holders.' },
            { title: 'Check-In Analytics', desc: '​See arrival patterns, peak times, and daily scan volumes to optimize staffing for future events.' },
        ],
        stats: [{ val: '0.3s', label: 'Avg. scan time' }, { val: '99.9%', label: 'Check-in accuracy' }, { val: 'Offline', label: 'Works without internet' }],
    },
};

export default function FeaturePage() {
    const { slug } = useParams();
    const data = FEATURES_DATA[slug] || FEATURES_DATA['invitations'];

    return (
        <>
            <Navbar />
            <section className="page-hero">
                <div className="page-hero-bg">
                    <div className="page-hero-orb-1" style={{ background: `radial-gradient(circle, ${data.color}55, transparent 70%)` }}></div>
                    <div className="page-hero-orb-2"></div>
                    <div className="page-hero-grid"></div>
                </div>
                <div className="page-hero-content container">
                    <div style={{ fontSize: '4rem', marginBottom: 16 }}>{data.emoji}</div>
                    <h1 className="page-hero-title">{data.title}</h1>
                    <p className="page-hero-desc">{data.hero}</p>
                    <div className="page-hero-actions">
                        <Link to="/get-started" className="btn btn-primary btn-lg">Get Started Free <ArrowRight size={16} /></Link>
                        <Link to="/demo" className="btn btn-outline btn-lg">Book a Demo</Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-sm">
                <div className="container">
                    <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
                        {data.stats.map(s => (
                            <div key={s.label} className="card" style={{ textAlign: 'center', padding: '24px 40px', minWidth: 160 }}>
                                <div style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'Outfit', color: data.color }}>{s.val}</div>
                                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="section-header">
                        <h2>Everything You Need to <span className="text-gradient">{data.subtitle}</span></h2>
                    </div>
                    <div className="grid-3">
                        {data.features.map(f => (
                            <div key={f.title} className="card">
                                <div style={{ width: 36, height: 36, background: `${data.color}22`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                                    <Check size={18} style={{ color: data.color }} />
                                </div>
                                <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{f.title}</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="card" style={{ textAlign: 'center', padding: 48, marginTop: 48, background: `linear-gradient(135deg, ${data.color}18, transparent)`, borderColor: `${data.color}44` }}>
                        <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.8rem', marginBottom: 12 }}>Start Using {data.title} Today</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Join 1M+ event creators. Free plan available — no credit card needed.</p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/get-started" className="btn btn-primary btn-lg">Get Started Free</Link>
                            <Link to="/demo" className="btn btn-outline btn-lg">See a Live Demo</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
