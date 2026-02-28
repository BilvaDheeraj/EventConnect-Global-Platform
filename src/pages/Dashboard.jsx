import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Calendar, Users, BarChart3, Settings, Bell, Plus,
    Ticket, Mail, LogOut, Zap, TrendingUp, Eye, Edit, MoreVertical, Search,
    ChevronRight, Star, Globe, Shield
} from 'lucide-react';
import '../pages.css';

const SIDEBAR_ITEMS = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: Calendar, label: 'My Events', path: '/dashboard/events', badge: '12' },
    { icon: Users, label: 'Guest Lists', path: '/dashboard/guests' },
    { icon: Ticket, label: 'Ticketing', path: '/dashboard/tickets' },
    { icon: Mail, label: 'Invitations', path: '/dashboard/invitations' },
    { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

const MOCK_EVENTS = [
    { name: 'Global Tech Summit 2025', date: 'Mar 15', registered: 2847, checkedIn: 1203, revenue: '$94.2K', status: 'live', color: '#7C3AED' },
    { name: 'AI Innovation Workshop', date: 'Mar 22', registered: 486, checkedIn: 0, revenue: '$12.4K', status: 'upcoming', color: '#10B981' },
    { name: 'Design Thinking Bootcamp', date: 'Apr 5', registered: 120, checkedIn: 0, revenue: '$3.6K', status: 'upcoming', color: '#F59E0B' },
    { name: 'Women in Tech Gala', date: 'Feb 10', registered: 1200, checkedIn: 1180, revenue: '$36K', status: 'ended', color: '#0EA5E9' },
    { name: 'Startup Pitch Night', date: 'Feb 28', registered: 340, checkedIn: 312, revenue: '$0', status: 'ended', color: '#F43F5E' },
];

const STATS = [
    { icon: Calendar, label: 'Total Events', val: '24', change: '+3 this month', color: '#7C3AED', bg: 'rgba(124,58,237,0.15)' },
    { icon: Users, label: 'Total Registrations', val: '14,892', change: '+12% vs last month', color: '#10B981', bg: 'rgba(16,185,129,0.15)' },
    { icon: TrendingUp, label: 'Total Revenue', val: '$146.2K', change: '+34% vs last month', color: '#F59E0B', bg: 'rgba(245,158,11,0.15)' },
    { icon: Star, label: 'Avg. Rating', val: '4.9★', change: 'Across all events', color: '#0EA5E9', bg: 'rgba(14,165,233,0.15)' },
];

export default function Dashboard() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const filtered = MOCK_EVENTS.filter(e =>
        e.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="dashboard-layout">
            {/* Sidebar */}
            <aside className="sidebar">
                <Link to="/" className="sidebar-logo">
                    <div className="logo-icon" style={{ width: 32, height: 32 }}>
                        <Zap size={16} strokeWidth={2.5} />
                    </div>
                    <span className="logo-text">EventFlow</span>
                </Link>

                <div className="sidebar-section-label">Main</div>
                {SIDEBAR_ITEMS.map(({ icon: Icon, label, path, badge, active }) => (
                    <Link key={label} to={path} className={`sidebar-link ${active ? 'active' : ''}`}>
                        <Icon size={18} />
                        {label}
                        {badge && <span className="link-badge">{badge}</span>}
                    </Link>
                ))}

                <div className="sidebar-section-label" style={{ marginTop: 'auto' }}>Account</div>
                <div className="sidebar-link">
                    <Bell size={18} />
                    Notifications
                    <span className="link-badge">3</span>
                </div>
                <Link to="/login" className="sidebar-link" style={{ color: 'var(--rose)' }}>
                    <LogOut size={18} />
                    Sign Out
                </Link>
            </aside>

            {/* Main Content */}
            <main className="dashboard-content">
                {/* Top Bar */}
                <div className="dashboard-topbar">
                    <div>
                        <div className="dash-greeting">Good afternoon, Bilva 👋</div>
                        <div className="dash-sub">Saturday, Feb 28 · 3 events this week</div>
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <button className="btn btn-outline btn-sm">
                            <Bell size={15} />
                            Notifications
                        </button>
                        <Link to="/create-event" className="btn btn-primary btn-sm">
                            <Plus size={15} />
                            Create Event
                        </Link>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="dash-stats-row">
                    {STATS.map(s => (
                        <div key={s.label} className="dash-stat-card">
                            <div className="dash-stat-icon" style={{ background: s.bg, color: s.color }}>
                                <s.icon size={20} />
                            </div>
                            <div className="dash-stat-val">{s.val}</div>
                            <div className="dash-stat-label">{s.label}</div>
                            <div className="dash-stat-change">{s.change}</div>
                        </div>
                    ))}
                </div>

                {/* Events Table */}
                <div className="dash-events-section">
                    <div className="dash-section-header">
                        <div className="dash-section-title">Your Events</div>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                            <div style={{ position: 'relative' }}>
                                <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    className="input"
                                    placeholder="Search events..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    style={{ padding: '8px 16px 8px 36px', fontSize: '0.85rem', width: 240 }}
                                />
                            </div>
                            <Link to="/create-event" className="btn btn-primary btn-sm">
                                <Plus size={14} /> New Event
                            </Link>
                        </div>
                    </div>

                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        {/* Table Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr auto', gap: 12, padding: '14px 20px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border)' }}>
                            {['Event', 'Date', 'Registered', 'Revenue', 'Status', ''].map(h => (
                                <div key={h} style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>{h}</div>
                            ))}
                        </div>

                        {filtered.map(evt => (
                            <div key={evt.name} className="event-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr auto', gap: 12, padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div className="event-color-dot" style={{ background: evt.color }}></div>
                                    <div>
                                        <div className="event-row-name">{evt.name}</div>
                                    </div>
                                </div>
                                <div className="event-row-meta" style={{ display: 'flex', alignItems: 'center' }}>{evt.date}</div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <div className="event-row-stat-val">{evt.registered.toLocaleString()}</div>
                                        {evt.status === 'live' && <div style={{ fontSize: '0.65rem', color: 'var(--emerald)' }}>{evt.checkedIn} checked in</div>}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{evt.revenue}</div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className={`status-${evt.status}`} style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'capitalize' }}>
                                        {evt.status === 'live' ? '🟢 Live' : evt.status === 'upcoming' ? '🔵 Upcoming' : '⚫ Ended'}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <button className="btn btn-ghost btn-sm" title="View"><Eye size={14} /></button>
                                    <button className="btn btn-ghost btn-sm" title="Edit"><Edit size={14} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid-3" style={{ gap: 16 }}>
                    {[
                        { icon: Mail, title: 'Send Invitations', desc: 'Email your guest list', path: '/dashboard/invitations', color: '#7C3AED' },
                        { icon: BarChart3, title: 'View Analytics', desc: 'Insights & reports', path: '/dashboard/analytics', color: '#10B981' },
                        { icon: Ticket, title: 'Manage Tickets', desc: 'Sales & capacity', path: '/dashboard/tickets', color: '#F59E0B' },
                    ].map(q => (
                        <Link key={q.title} to={q.path} className="card" style={{ display: 'flex', gap: 14, cursor: 'pointer', textDecoration: 'none', padding: 20 }}>
                            <div className="icon-box" style={{ background: `${q.color}22`, color: q.color }}>
                                <q.icon size={20} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: 4 }}>{q.title}</div>
                                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{q.desc}</div>
                            </div>
                            <ChevronRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)', alignSelf: 'center' }} />
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
