import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Calendar, MapPin, Globe, Users, Tag, Image, Clock, Zap } from 'lucide-react';
import '../pages.css';
import './CreateEvent.css';

const STEPS = ['Basics', 'Details', 'Registration', 'Tickets', 'Publish'];
const EVENT_TYPES = [
    { icon: '🎤', label: 'Conference', desc: 'Multi-session event with speakers' },
    { icon: '🛠️', label: 'Workshop', desc: 'Hands-on learning session' },
    { icon: '🎉', label: 'Social / Party', desc: 'Casual celebration or meetup' },
    { icon: '🏃', label: 'Fundraiser', desc: 'Charity or nonprofit event' },
    { icon: '🎓', label: 'Class / Course', desc: 'Educational session' },
    { icon: '💍', label: 'Wedding', desc: 'Personal celebration' },
    { icon: '🏢', label: 'Corporate', desc: 'Business or team event' },
    { icon: '🎸', label: 'Concert / Show', desc: 'Performance or entertainment' },
];

export default function CreateEvent() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
        name: '', type: '', date: '', time: '', endDate: '', endTime: '',
        location: '', virtual: false, description: '', capacity: '',
        freeTickets: true, ticketPrice: '',
    });
    const navigate = useNavigate();

    const setField = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const handlePublish = () => navigate('/dashboard');

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '80px 0 60px' }}>
            {/* Top Nav */}
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(5,7,20,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)', zIndex: 100 }}>
                <Link to="/dashboard" className="btn btn-ghost btn-sm"><ArrowLeft size={16} /> Dashboard</Link>
                <div style={{ flex: 1 }}></div>
                <Link to="/" className="nav-logo" style={{ fontSize: '1rem' }}>
                    <div className="logo-icon" style={{ width: 30, height: 30 }}><Zap size={14} /></div>
                    <span className="logo-text">EventFlow</span>
                </Link>
            </div>

            <div className="container" style={{ maxWidth: 800 }}>
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                    <h1 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '2rem', marginBottom: 8 }}>Create Your Event</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Set up your event in minutes — we'll guide you every step of the way.</p>
                </div>

                {/* Stepper */}
                <div className="wizard-stepper">
                    {STEPS.map((s, i) => (
                        <>
                            <div key={s} className={`wizard-step ${i === step ? 'active' : i < step ? 'done' : ''}`}>
                                <div className="wizard-step-circle">
                                    {i < step ? <Check size={14} /> : i + 1}
                                </div>
                                <div className="wizard-step-label">{s}</div>
                            </div>
                            {i < STEPS.length - 1 && (
                                <div key={`line-${i}`} className="wizard-step-line" style={{ background: i < step ? 'var(--primary)' : 'var(--border)' }}></div>
                            )}
                        </>
                    ))}
                </div>

                <div className="card" style={{ padding: 36 }}>
                    {/* STEP 0: Basics */}
                    {step === 0 && (
                        <div className="form-section">
                            <h3>Event Basics</h3>
                            <p>Let's start with the fundamentals of your event.</p>

                            <div className="form-group">
                                <label className="form-label">Event Name *</label>
                                <input className="input" placeholder="e.g. Annual Tech Summit 2025" value={form.name} onChange={e => setField('name', e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Event Type *</label>
                                <div className="event-type-grid">
                                    {EVENT_TYPES.map(t => (
                                        <div
                                            key={t.label}
                                            className={`event-type-card ${form.type === t.label ? 'selected' : ''}`}
                                            onClick={() => setField('type', t.label)}
                                        >
                                            <span className="event-type-icon">{t.icon}</span>
                                            <div className="event-type-label">{t.label}</div>
                                            <div className="event-type-desc">{t.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 1: Details */}
                    {step === 1 && (
                        <div className="form-section">
                            <h3>Date, Time & Location</h3>
                            <p>When and where is your event happening?</p>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label"><Calendar size={13} /> Start Date *</label>
                                    <input className="input" type="date" value={form.date} onChange={e => setField('date', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label"><Clock size={13} /> Start Time *</label>
                                    <input className="input" type="time" value={form.time} onChange={e => setField('time', e.target.value)} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label"><Calendar size={13} /> End Date</label>
                                    <input className="input" type="date" value={form.endDate} onChange={e => setField('endDate', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label"><Clock size={13} /> End Time</label>
                                    <input className="input" type="time" value={form.endTime} onChange={e => setField('endTime', e.target.value)} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                                    <label className="form-label" style={{ margin: 0 }}>Location Type</label>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        {['In Person', 'Virtual', 'Hybrid'].map(t => (
                                            <button
                                                key={t}
                                                className={`btn btn-sm ${form.location === t ? 'btn-primary' : 'btn-outline'}`}
                                                onClick={() => setField('location', t)}
                                            >{t}</button>
                                        ))}
                                    </div>
                                </div>
                                {form.location !== 'Virtual' && (
                                    <input className="input" placeholder="Venue name, address, city..." />
                                )}
                                {(form.location === 'Virtual' || form.location === 'Hybrid') && (
                                    <input className="input" style={{ marginTop: 10 }} placeholder="Meeting link (Zoom, Google Meet...)" />
                                )}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Event Description *</label>
                                <textarea className="form-textarea" placeholder="Tell attendees what your event is about, what to expect, and why they should attend..." value={form.description} onChange={e => setField('description', e.target.value)} />
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Registration */}
                    {step === 2 && (
                        <div className="form-section">
                            <h3>Registration Settings</h3>
                            <p>Configure how guests will register for your event.</p>

                            <div className="form-group">
                                <label className="form-label">Capacity Limit</label>
                                <input className="input" type="number" placeholder="Leave blank for unlimited" value={form.capacity} onChange={e => setField('capacity', e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Registration Questions</label>
                                <div className="card" style={{ padding: 20, background: 'rgba(255,255,255,0.02)' }}>
                                    {['Full Name', 'Email Address', 'Phone Number', 'Company/Organization'].map(q => (
                                        <div key={q} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                                            <input type="checkbox" defaultChecked={q !== 'Phone Number' && q !== 'Company/Organization'} style={{ accentColor: 'var(--primary)' }} />
                                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{q}</span>
                                            <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'var(--text-muted)' }}>Required</span>
                                        </div>
                                    ))}
                                    <button className="btn btn-ghost btn-sm" style={{ marginTop: 12, color: 'var(--primary-light)' }}>+ Add Custom Question</button>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Confirmation Email</label>
                                <select className="form-select">
                                    <option>Send automatic confirmation email</option>
                                    <option>Manual approval only</option>
                                    <option>No confirmation email</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Tickets */}
                    {step === 3 && (
                        <div className="form-section">
                            <h3>Tickets & Pricing</h3>
                            <p>Set up ticket types and pricing for your event.</p>

                            <div className="form-group">
                                <label className="form-label">Event Pricing</label>
                                <div style={{ display: 'flex', gap: 12 }}>
                                    {[
                                        { val: true, label: '🎁 Free Event', desc: 'No cost to attend' },
                                        { val: false, label: '💳 Paid Event', desc: 'Charge for tickets' },
                                    ].map(opt => (
                                        <div
                                            key={opt.label}
                                            className={`card ${form.freeTickets === opt.val ? 'pricing-popular' : ''}`}
                                            style={{ flex: 1, cursor: 'pointer', padding: 20 }}
                                            onClick={() => setField('freeTickets', opt.val)}
                                        >
                                            <div style={{ fontWeight: 700, marginBottom: 4 }}>{opt.label}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{opt.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {!form.freeTickets && (
                                <>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Ticket Name</label>
                                            <input className="input" placeholder="General Admission" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Price (USD)</label>
                                            <input className="input" type="number" placeholder="29.99" value={form.ticketPrice} onChange={e => setField('ticketPrice', e.target.value)} />
                                        </div>
                                    </div>
                                    <button className="btn btn-ghost btn-sm" style={{ color: 'var(--primary-light)' }}>+ Add Another Ticket Tier</button>

                                    <div className="form-group" style={{ marginTop: 16 }}>
                                        <label className="form-label">Early Bird Discount</label>
                                        <input className="input" placeholder="e.g. 20% off before March 1" />
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* STEP 4: Publish */}
                    {step === 4 && (
                        <div className="form-section" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '4rem', marginBottom: 16 }}>🚀</div>
                            <h3 style={{ marginBottom: 8 }}>Ready to Launch!</h3>
                            <p style={{ marginBottom: 32 }}>Your event "{form.name || 'Untitled Event'}" is all set. Review your settings below before publishing.</p>

                            <div className="card" style={{ textAlign: 'left', marginBottom: 24 }}>
                                {[
                                    { label: 'Event Name', val: form.name || 'Not set' },
                                    { label: 'Type', val: form.type || 'Not set' },
                                    { label: 'Date', val: form.date || 'Not set' },
                                    { label: 'Pricing', val: form.freeTickets ? 'Free' : `$${form.ticketPrice || '0.00'}` },
                                ].map(r => (
                                    <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: '0.9rem' }}>
                                        <span style={{ color: 'var(--text-muted)' }}>{r.label}</span>
                                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{r.val}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                                <button className="btn btn-outline" onClick={() => setStep(0)}>Edit Details</button>
                                <button className="btn btn-primary btn-lg" onClick={handlePublish}>
                                    🚀 Publish Event <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="form-actions">
                        {step > 0 && (
                            <button className="btn btn-outline" onClick={() => setStep(s => s - 1)}>
                                <ArrowLeft size={15} /> Back
                            </button>
                        )}
                        {step < STEPS.length - 1 && (
                            <button className="btn btn-primary" onClick={() => setStep(s => s + 1)}>
                                Continue <ArrowRight size={15} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
