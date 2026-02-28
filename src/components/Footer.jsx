import { Link } from 'react-router-dom';
import { Zap, Instagram, Twitter, Youtube, Linkedin, Facebook, Globe, Shield, Award } from 'lucide-react';
import './Footer.css';

const FOOTER_LINKS = {
    'Platform': [
        { label: 'Event Registration', path: '/features/registration' },
        { label: 'Online Invitations', path: '/features/invitations' },
        { label: 'Sell Tickets', path: '/features/tickets' },
        { label: 'QR Check-In', path: '/features/qr-check-in' },
        { label: 'Analytics', path: '/features/analytics' },
        { label: 'Templates', path: '/templates' },
    ],
    'Solutions': [
        { label: 'Enterprise Events', path: '/solutions/enterprise' },
        { label: 'Nonprofits & NGOs', path: '/solutions/nonprofits' },
        { label: 'Tech Communities', path: '/solutions/tech-meetups' },
        { label: 'Weddings & Social', path: '/solutions/weddings' },
        { label: 'Conferences', path: '/solutions/conferences' },
        { label: 'Education', path: '/solutions/education' },
    ],
    'Resources': [
        { label: 'Blog & Insights', path: '/blog' },
        { label: 'Event Templates', path: '/templates' },
        { label: 'Help Center', path: '/help' },
        { label: 'API Reference', path: '/help' },
        { label: 'Case Studies', path: '/blog' },
        { label: 'Status Page', path: '/help' },
    ],
    'Company': [
        { label: 'About Us', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: 'Affiliate Program', path: '/about' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Security', path: '/help' },
    ],
};

const SOCIAL_LINKS = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter/X', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
];

const AWARDS = [
    { badge: '🏆', label: 'Capterra Best Value 2024', score: '4.8★' },
    { badge: '⭐', label: 'G2 Leader 2024', score: '4.7★' },
    { badge: '🛡️', label: 'SOC2 Type II Certified', score: null },
    { badge: '✅', label: 'GDPR Compliant', score: null },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="divider"></div>

            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <div className="logo-icon"><Zap size={18} strokeWidth={2.5} /></div>
                                <span className="footer-logo-text">EventFlow</span>
                            </div>
                            <p className="footer-tagline">
                                The world's most powerful event management platform. Trusted by 1M+ creators globally.
                            </p>

                            <div className="footer-social">
                                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                                    <a key={label} href={href} className="social-btn" aria-label={label}>
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>

                            <div className="footer-newsletter">
                                <div className="newsletter-label">Get event tips & updates</div>
                                <div className="newsletter-form">
                                    <input type="email" className="input" placeholder="you@company.com" style={{ padding: '10px 16px', fontSize: '0.85rem' }} />
                                    <button className="btn btn-primary btn-sm">Subscribe</button>
                                </div>
                            </div>
                        </div>

                        {/* Links Columns */}
                        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
                            <div key={heading} className="footer-col">
                                <div className="footer-col-heading">{heading}</div>
                                <ul className="footer-link-list">
                                    {links.map(link => (
                                        <li key={link.label}>
                                            <Link to={link.path} className="footer-link">{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Awards Row */}
            <div className="footer-awards">
                <div className="container">
                    <div className="awards-row">
                        {AWARDS.map(a => (
                            <div key={a.label} className="award-item">
                                <span className="award-badge">{a.badge}</span>
                                <div className="award-info">
                                    <span className="award-label">{a.label}</span>
                                    {a.score && <span className="award-score">{a.score}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="divider"></div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-row">
                        <div className="footer-copyright">
                            © {new Date().getFullYear()} EventFlow, Inc. All rights reserved. Launching globally—from everywhere, for everyone.
                        </div>
                        <div className="footer-badges">
                            <div className="footer-badge-item"><Globe size={14} /> Available in 40+ Countries</div>
                            <div className="footer-badge-item"><Shield size={14} /> SOC2 Certified</div>
                            <div className="footer-badge-item"><Award size={14} /> G2 Leader 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
