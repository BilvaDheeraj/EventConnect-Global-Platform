import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Zap, X, Menu, Moon, Sun, Settings, User, LogOut, Bell, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const NAV_ITEMS = {
    'EventFlow For': [
        { label: 'Enterprise & Business', path: '/solutions/enterprise', icon: '🏢', desc: 'Scale events across your organization' },
        { label: 'Nonprofits & NGOs', path: '/solutions/nonprofits', icon: '❤️', desc: 'Special pricing for nonprofits' },
        { label: 'Tech Communities', path: '/solutions/tech-meetups', icon: '💻', desc: 'Free for developer communities' },
        { label: 'Weddings & Social', path: '/solutions/weddings', icon: '💍', desc: 'Beautiful personal events' },
        { label: 'Education', path: '/solutions/education', icon: '🎓', desc: 'Schools, colleges & courses' },
        { label: 'Conferences', path: '/solutions/conferences', icon: '🎤', desc: 'Large-scale multi-track events' },
    ],
    'Features': [
        { label: 'Invitations & RSVP', path: '/features/invitations', icon: '📨', desc: 'Beautiful branded invites' },
        { label: 'Event Registration', path: '/features/registration', icon: '📋', desc: 'Custom forms & smart fields' },
        { label: 'Sell Tickets', path: '/features/tickets', icon: '🎫', desc: 'Payments & refunds' },
        { label: 'Event Analytics', path: '/features/analytics', icon: '📊', desc: 'Real-time insights & reports' },
        { label: 'QR Check-In', path: '/features/qr-check-in', icon: '📱', desc: 'Fast day-of entry' },
        { label: 'Integrations', path: '/features/integrations', icon: '🔗', desc: 'Connect your stack' },
    ],
    'Resources': [
        { label: 'Blog & Insights', path: '/blog', icon: '✍️', desc: 'Tips for event professionals' },
        { label: 'Event Templates', path: '/templates', icon: '🎨', desc: 'Ready-made beautiful templates' },
        { label: 'Help Center', path: '/help', icon: '❓', desc: 'Docs, guides, FAQs' },
        { label: 'API Reference', path: '/help', icon: '⚡', desc: 'For developers' },
        { label: 'Case Studies', path: '/blog', icon: '🏆', desc: 'Success stories' },
    ],
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);
    const [themeOpen, setThemeOpen] = useState(false);
    const profileRef = useRef(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setProfileOpen(false);
                setThemeOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <div className="logo-icon"><Zap size={18} strokeWidth={2.5} /></div>
                    <span className="logo-text">EventFlow</span>
                    <span className="logo-badge">GLOBAL</span>
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {Object.entries(NAV_ITEMS).map(([label, items]) => (
                        <div
                            key={label}
                            className="nav-item"
                            onMouseEnter={() => setActiveDropdown(label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="nav-link">
                                {label}
                                <ChevronDown size={14} className={`chevron ${activeDropdown === label ? 'open' : ''}`} />
                            </button>

                            {activeDropdown === label && (
                                <div className="mega-dropdown">
                                    <div className="mega-grid">
                                        {items.map(item => (
                                            <Link
                                                key={item.label}
                                                to={item.path}
                                                className="mega-item"
                                                onClick={() => setActiveDropdown(null)}
                                            >
                                                <span className="mega-icon">{item.icon}</span>
                                                <div>
                                                    <div className="mega-label">{item.label}</div>
                                                    <div className="mega-desc">{item.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <Link to="/pricing" className="nav-link">Pricing</Link>
                </div>

                {/* Right Side: CTA Buttons + Profile */}
                <div className="nav-actions">
                    <Link to="/login" className="btn btn-ghost btn-sm">Login</Link>
                    <Link to="/get-started" className="btn btn-outline btn-sm">Try for Free</Link>
                    <Link to="/demo" className="btn btn-primary btn-sm">Book a Demo</Link>

                    {/* Profile Icon */}
                    <div className="profile-wrapper" ref={profileRef}>
                        <button
                            className={`profile-btn ${profileOpen ? 'active' : ''}`}
                            onClick={() => { setProfileOpen(o => !o); setThemeOpen(false); }}
                            aria-label="Profile menu"
                        >
                            <div className="profile-avatar">
                                <span>B</span>
                            </div>
                        </button>

                        {profileOpen && (
                            <div className="profile-dropdown">
                                {/* User Info */}
                                <div className="profile-user-info">
                                    <div className="profile-avatar-lg">B</div>
                                    <div>
                                        <div className="profile-user-name">Bilva Dheeraj</div>
                                        <div className="profile-user-email">bilva@eventflow.io</div>
                                    </div>
                                </div>

                                <div className="profile-divider" />

                                {/* Theme Section */}
                                <div className="profile-section-label">Appearance</div>

                                <button
                                    className="profile-menu-item"
                                    onClick={() => setThemeOpen(o => !o)}
                                >
                                    {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                                    <span>Theme</span>
                                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <span className="profile-theme-badge">
                                            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
                                        </span>
                                        <ChevronDown size={13} className={`chevron ${themeOpen ? 'open' : ''}`} />
                                    </div>
                                </button>

                                {themeOpen && (
                                    <div className="theme-options">
                                        <button
                                            className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                                            onClick={() => { toggleTheme('dark'); setThemeOpen(false); }}
                                        >
                                            <div className="theme-preview dark-preview">
                                                <div className="preview-bar" />
                                                <div className="preview-dots">
                                                    <span /><span /><span />
                                                </div>
                                            </div>
                                            <div className="theme-option-info">
                                                <div className="theme-option-name">🌙 Dark Mode</div>
                                                <div className="theme-option-desc">Easy on the eyes</div>
                                            </div>
                                            {theme === 'dark' && <div className="theme-check">✓</div>}
                                        </button>

                                        <button
                                            className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                                            onClick={() => { toggleTheme('light'); setThemeOpen(false); }}
                                        >
                                            <div className="theme-preview light-preview">
                                                <div className="preview-bar" />
                                                <div className="preview-dots">
                                                    <span /><span /><span />
                                                </div>
                                            </div>
                                            <div className="theme-option-info">
                                                <div className="theme-option-name">☀️ Light Mode</div>
                                                <div className="theme-option-desc">Bright and clean</div>
                                            </div>
                                            {theme === 'light' && <div className="theme-check">✓</div>}
                                        </button>
                                    </div>
                                )}

                                <div className="profile-divider" />

                                {/* Settings & Other Links */}
                                <div className="profile-section-label">Account</div>

                                <Link to="/dashboard" className="profile-menu-item" onClick={() => setProfileOpen(false)}>
                                    <User size={16} />
                                    <span>My Dashboard</span>
                                </Link>

                                <Link to="/help" className="profile-menu-item" onClick={() => setProfileOpen(false)}>
                                    <HelpCircle size={16} />
                                    <span>Help & Support</span>
                                </Link>

                                <button className="profile-menu-item">
                                    <Settings size={16} />
                                    <span>Settings</span>
                                </button>

                                <div className="profile-divider" />

                                <button className="profile-menu-item danger">
                                    <LogOut size={16} />
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setMobileOpen(o => !o)}>
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mobile-menu">
                    {Object.entries(NAV_ITEMS).map(([label, items]) => (
                        <div key={label} className="mobile-section">
                            <div className="mobile-section-label">{label}</div>
                            {items.map(item => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="mobile-link"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <span>{item.icon}</span> {item.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                    <Link to="/pricing" className="mobile-link" onClick={() => setMobileOpen(false)}>💰 Pricing</Link>

                    {/* Mobile theme toggle */}
                    <div className="mobile-section">
                        <div className="mobile-section-label">Appearance</div>
                        <div style={{ display: 'flex', gap: 8, padding: '4px 0' }}>
                            <button
                                className={`btn btn-sm ${theme === 'dark' ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => toggleTheme('dark')}
                                style={{ flex: 1, justifyContent: 'center' }}
                            >
                                🌙 Dark
                            </button>
                            <button
                                className={`btn btn-sm ${theme === 'light' ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => toggleTheme('light')}
                                style={{ flex: 1, justifyContent: 'center' }}
                            >
                                ☀️ Light
                            </button>
                        </div>
                    </div>

                    <div className="mobile-cta">
                        <Link to="/login" className="btn btn-outline" onClick={() => setMobileOpen(false)}>Login</Link>
                        <Link to="/get-started" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Get Started Free</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
