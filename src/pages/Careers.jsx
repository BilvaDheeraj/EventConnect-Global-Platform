import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import '../pages.css';

const JOBS = [
    { title: 'Senior Frontend Engineer', dept: 'Engineering', location: 'Remote (Global)', type: 'Full-time', desc: 'Build the next generation of EventFlow features using React, TypeScript, and modern web APIs.' },
    { title: 'Product Designer', dept: 'Design', location: 'Remote (India / US)', type: 'Full-time', desc: 'Craft beautiful, functional experiences from discovery through delivery across our full product suite.' },
    { title: 'DevOps / Platform Engineer', dept: 'Infrastructure', location: 'Remote', type: 'Full-time', desc: 'Own our cloud infrastructure (AWS), CI/CD pipelines, and reliability engineering.' },
    { title: 'Growth Marketing Manager', dept: 'Marketing', location: 'Bangalore, India', type: 'Full-time', desc: 'Drive user acquisition, content, and growth experiments. SEO, paid, and community channels.' },
    { title: 'Enterprise Sales Executive', dept: 'Sales', location: 'New York, US', type: 'Full-time', desc: 'Own enterprise deals end-to-end. Target Fortune 500 companies and large nonprofits.' },
    { title: 'Customer Success Manager', dept: 'CS', location: 'Remote', type: 'Full-time', desc: 'Help our customers get maximum value from EventFlow. Own onboarding, expansion, and retention.' },
    { title: 'Backend Engineer (Node.js)', dept: 'Engineering', location: 'Remote', type: 'Full-time', desc: 'Build and scale our API platform, event data pipeline, and payments infrastructure.' },
    { title: 'Data Analyst', dept: 'Analytics', location: 'Remote', type: 'Full-time', desc: 'Turn data into decisions. Own product analytics, user insights, and growth reporting dashboards.' },
];

const BENEFITS = [
    { icon: '🌍', title: 'Remote First', desc: 'Work from anywhere in the world. We have team members in 14 countries.' },
    { icon: '💰', title: 'Competitive Pay', desc: 'Top-of-market salaries with equity. We share our upside with the team.' },
    { icon: '🏥', title: 'Full Benefits', desc: 'Health, dental, vision, and life insurance for you and your family.' },
    { icon: '📚', title: 'Learning Budget', desc: '$2,000/year for courses, conferences, books, and anything that makes you better.' },
    { icon: '🏖️', title: 'Unlimited PTO', desc: 'We trust you to manage your time. Take the time you need to recharge.' },
    { icon: '🖥️', title: 'Home Office Setup', desc: '$1,500 budget to create the perfect workspace at home.' },
];

export default function Careers() {
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
                    <div className="badge" style={{ margin: '0 auto 20px' }}><Briefcase size={12} /> We're Hiring</div>
                    <h1 className="page-hero-title">Build the Future of <span className="text-gradient">Events With Us</span></h1>
                    <p className="page-hero-desc">We're a remote-first team of builders, designers, and event lovers. If you're passionate about creating world-class software, come join us.</p>
                    <div className="page-hero-actions">
                        <a href="#jobs" className="btn btn-primary btn-lg">See Open Roles <ArrowRight size={16} /></a>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-sm">
                <div className="container">
                    <div className="section-header">
                        <h2>Why <span className="text-gradient">EventFlow?</span></h2>
                        <p>We work hard to make EventFlow an extraordinary place to grow your career.</p>
                    </div>
                    <div className="grid-3">
                        {BENEFITS.map(b => (
                            <div key={b.title} className="card">
                                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{b.icon}</div>
                                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 6, fontFamily: 'Outfit' }}>{b.title}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{b.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs */}
            <section className="section" id="jobs">
                <div className="container">
                    <div className="section-header">
                        <div className="badge"><Briefcase size={12} /> {JOBS.length} Open Roles</div>
                        <h2>Open <span className="text-gradient">Positions</span></h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {JOBS.map(job => (
                            <div key={job.title} className="card job-card">
                                <div className="job-info">
                                    <div className="job-title">{job.title}</div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '6px 0 10px' }}>{job.desc}</p>
                                    <div className="job-meta">
                                        <span className="job-tag">{job.dept}</span>
                                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                                            <MapPin size={12} /> {job.location}
                                        </span>
                                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                                            <Clock size={12} /> {job.type}
                                        </span>
                                    </div>
                                </div>
                                <Link to="#" className="btn btn-outline btn-sm">Apply Now <ArrowRight size={14} /></Link>
                            </div>
                        ))}
                    </div>

                    <div className="card" style={{ textAlign: 'center', padding: 40, marginTop: 32 }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🙌</div>
                        <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, marginBottom: 8 }}>Don't See Your Role?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>We're always looking for exceptional talent. Send us your resume and we'll reach out when something becomes available.</p>
                        <a href="mailto:careers@eventflow.io" className="btn btn-outline">Send Open Application</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
