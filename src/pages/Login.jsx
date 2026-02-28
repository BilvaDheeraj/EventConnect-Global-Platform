import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Zap, ArrowRight, Github, Chrome } from 'lucide-react';
import '../pages.css';
import './Login.css';

export default function Login() {
    const [mode, setMode] = useState('login'); // 'login' | 'signup'
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="login-page">
            {/* Background */}
            <div className="login-bg">
                <div className="login-orb-1"></div>
                <div className="login-orb-2"></div>
                <div className="login-grid"></div>
            </div>

            {/* Logo */}
            <Link to="/" className="login-logo">
                <div className="logo-icon"><Zap size={18} strokeWidth={2.5} /></div>
                <span className="logo-text">EventFlow</span>
            </Link>

            {/* Card */}
            <div className="login-card">
                <div className="login-card-inner">
                    {/* Header */}
                    <div className="login-header">
                        <h1 className="login-title">
                            {mode === 'login' ? 'Welcome back 👋' : 'Join EventFlow 🚀'}
                        </h1>
                        <p className="login-sub">
                            {mode === 'login'
                                ? 'Sign in to your account to manage your events'
                                : 'Start for free — no credit card required'}
                        </p>
                    </div>

                    {/* Mode Toggle */}
                    <div className="tab-list login-tabs">
                        <button
                            className={`tab-btn ${mode === 'login' ? 'active' : ''}`}
                            onClick={() => setMode('login')}
                        >Login</button>
                        <button
                            className={`tab-btn ${mode === 'signup' ? 'active' : ''}`}
                            onClick={() => setMode('signup')}
                        >Sign Up</button>
                    </div>

                    {/* Social Login */}
                    <div className="social-login">
                        <button className="social-login-btn">
                            <Chrome size={18} />
                            Continue with Google
                        </button>
                        <button className="social-login-btn">
                            <Github size={18} />
                            Continue with GitHub
                        </button>
                    </div>

                    <div className="orSeparator"><span>or continue with email</span></div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="login-form">
                        {mode === 'signup' && (
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Priya Sharma"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                className="input"
                                type="email"
                                placeholder="you@company.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <label className="form-label">Password</label>
                                {mode === 'login' && (
                                    <Link to="/forgot-password" className="login-forgot">Forgot password?</Link>
                                )}
                            </div>
                            <div className="password-wrap">
                                <input
                                    className="input"
                                    type={showPass ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    style={{ paddingRight: '48px' }}
                                />
                                <button
                                    type="button"
                                    className="show-pass-btn"
                                    onClick={() => setShowPass(s => !s)}
                                >
                                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {mode === 'signup' && (
                            <div className="terms-check">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">
                                    I agree to the <Link to="/terms">Terms of Service</Link> and{' '}
                                    <Link to="/privacy">Privacy Policy</Link>
                                </label>
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>
                            {mode === 'login' ? 'Sign In' : 'Create Free Account'}
                            <ArrowRight size={16} />
                        </button>
                    </form>

                    <p className="login-switch">
                        {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                        <button className="login-switch-btn" onClick={() => setMode(m => m === 'login' ? 'signup' : 'login')}>
                            {mode === 'login' ? 'Sign up free' : 'Sign in'}
                        </button>
                    </p>
                </div>

                {/* Side Panel */}
                <div className="login-side">
                    <div className="login-side-inner">
                        <div className="login-side-badge">
                            <span className="badge-dot"></span>
                            Live on EventFlow
                        </div>
                        <div className="login-side-quote">
                            "EventFlow cut our planning time by 70% and our satisfaction scores hit an all-time high."
                        </div>
                        <div className="login-side-author">
                            <div className="login-side-avatar" style={{ background: '#7C3AED' }}>DT</div>
                            <div>
                                <div className="login-side-name">Darius Thompson</div>
                                <div className="login-side-role">Commercial Director · WhatsOnStage</div>
                            </div>
                        </div>
                        <div className="login-side-stats">
                            {[
                                { val: '1M+', label: 'Event Creators' },
                                { val: '4.8★', label: 'Rating' },
                                { val: '99.9%', label: 'Uptime' },
                            ].map(s => (
                                <div key={s.label} className="login-side-stat">
                                    <div className="login-side-stat-val">{s.val}</div>
                                    <div className="login-side-stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
