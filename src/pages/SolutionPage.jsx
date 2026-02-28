import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, ArrowRight, Building2, Users, GraduationCap } from 'lucide-react';
import '../pages.css';

const SOLUTIONS = {
    enterprise: {
        title: 'EventFlow for Enterprise',
        subtitle: 'Power your biggest events at any scale',
        emoji: '🏢',
        color: '#7C3AED',
        hero: 'Built for organizations running 50+ events a year. Get dedicated support, advanced security, custom SSO, and the power to manage it all from one platform.',
        highlights: [
            'Dedicated Customer Success Manager',
            'Custom SLA & uptime guarantees (99.99%)',
            'SSO / SAML integration (Okta, Azure AD)',
            'Advanced user roles and permissions',
            'Multi-team event portfolio management',
            'Custom integrations and API access',
            'Data residency (US, EU, APAC)',
            'SOC2, GDPR, HIPAA compliance',
        ],
        customers: ['Google', 'Microsoft', 'Amazon', 'Salesforce', 'TCS', 'Infosys'],
        caseStudy: {
            quote: 'EventFlow cut our event planning time by 70%. Managing 200+ events a year across 4 continents used to require an army — now our 8-person team handles it all.',
            name: 'James Okonkwo', role: 'Head of Events, Microsoft APAC',
        },
    },
    nonprofits: {
        title: 'EventFlow for Nonprofits',
        subtitle: 'Do more good with less overhead',
        emoji: '❤️',
        color: '#F43F5E',
        hero: 'We believe events have the power to change the world. That\'s why nonprofits get exclusive pricing, donation collection, and tools purpose-built for fundraising and community events.',
        highlights: [
            '50% discount on all paid plans',
            'Built-in donation collection',
            'Donor CRM integration (Salesforce NPSP)',
            'Volunteer registration & management',
            'Grant reporting and event attribution',
            'Tax-receipt automation for donors',
            'Zero transaction fees on donations',
            'Priority email & phone support',
        ],
        customers: ['Red Cross', 'UNICEF', 'WWF', 'Teach For India', 'CRY India', 'Room to Read'],
        caseStudy: {
            quote: 'EventFlow\'s nonprofit plan saved us $18,000 in platform fees last year. That\'s 600 school meals for the kids we serve.',
            name: 'Ananya Singh', role: 'Events Director, Room to Read India',
        },
    },
    'tech-meetups': {
        title: 'EventFlow for Tech Communities',
        subtitle: 'The platform built for builders and makers',
        emoji: '💻',
        color: '#10B981',
        hero: 'From weekly office hours to 10,000-person developer conferences, EventFlow is the home for the tech community. Free for community-run events with no hidden fees.',
        highlights: [
            'Free plan for community events up to 200 people',
            'GitHub & Eventbrite migration tools',
            'Speaker & agenda management',
            'Hackathon registration & team builder',
            'Code of conduct enforcement tools',
            'Community directory & archives',
            'Zoom & Google Meet auto-link generation',
            'Discord & Slack integration',
        ],
        customers: ['GDG Bangalore', 'PyCon India', 'ReactIndia', 'JSConf Asia', 'DjangoCon', 'VueConf'],
        caseStudy: {
            quote: 'We moved PyCon India to EventFlow and instantly got better registration UX, automated emails, and analytics we never had before. Attendance went up 40%.',
            name: 'Ankit Mehta', role: 'Organizer, PyCon India',
        },
    },
};

export default function SolutionPage() {
    const { slug } = useParams();
    const data = SOLUTIONS[slug] || SOLUTIONS['enterprise'];

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
                        {slug === 'enterprise' ? (
                            <Link to="/demo" className="btn btn-primary btn-lg">Talk to Sales <ArrowRight size={16} /></Link>
                        ) : (
                            <Link to="/get-started" className="btn btn-primary btn-lg">Get Started Free <ArrowRight size={16} /></Link>
                        )}
                        <Link to="/pricing" className="btn btn-outline btn-lg">See Pricing</Link>
                    </div>
                </div>
            </section>

            <section className="section-sm">
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 64 }}>
                        <div>
                            <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '2rem', marginBottom: 20 }}>
                                {data.subtitle}
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {data.highlights.map(h => (
                                    <div key={h} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                        <Check size={16} style={{ color: data.color, marginTop: 3, flexShrink: 0 }} />
                                        <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Case Study */}
                        <div className="card" style={{ background: `rgba(${data.color === '#7C3AED' ? '124,58,237' : data.color === '#F43F5E' ? '244,63,94' : '16,185,129'},0.08)`, borderColor: `${data.color}33` }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>💬</div>
                            <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: 20 }}>
                                "{data.caseStudy.quote}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <div style={{ width: 44, height: 44, borderRadius: '50%', background: data.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>
                                    {data.caseStudy.name.charAt(0)}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{data.caseStudy.name}</div>
                                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{data.caseStudy.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customers */}
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 20 }}>
                            Trusted by organizations worldwide
                        </div>
                        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
                            {data.customers.map(c => (
                                <div key={c} className="card" style={{ padding: '12px 24px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{c}</div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="card" style={{ textAlign: 'center', padding: 48 }}>
                        <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.8rem', marginBottom: 12 }}>
                            Ready to Get Started?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
                            {slug === 'enterprise'
                                ? 'Schedule a call with our enterprise team. We\'ll design a custom plan for your organization.'
                                : 'Start for free today — upgrade as you grow. No contracts. Cancel anytime.'}
                        </p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            {slug === 'enterprise' ? (
                                <Link to="/demo" className="btn btn-primary btn-lg">Schedule Enterprise Demo</Link>
                            ) : (
                                <Link to="/get-started" className="btn btn-primary btn-lg">Get Started Free</Link>
                            )}
                            <Link to="/pricing" className="btn btn-outline btn-lg">View Pricing</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
