import { useState } from 'react';
import { Check, X, ArrowRight, Zap, Star, Building2 } from 'lucide-react';
import './Pricing.css';

const BUSINESS_PLANS = [
    {
        name: 'Free',
        price: { monthly: 0, yearly: 0 },
        desc: 'Perfect for small events and getting started',
        icon: '🌱',
        features: [
            { text: 'Up to 100 RSVPs / event', included: true },
            { text: 'Website builder', included: true },
            { text: 'Basic reporting', included: true },
            { text: 'EventFlow branding', included: true },
            { text: 'Email invitations', included: false },
            { text: 'Custom URL', included: false },
            { text: 'Payment processing', included: false },
            { text: 'Priority support', included: false },
        ],
        cta: 'Get Started Free',
        variant: 'outline',
    },
    {
        name: 'Business',
        price: { monthly: 39, yearly: 29 },
        desc: 'For growing teams and recurring events',
        icon: '🚀',
        popular: true,
        features: [
            { text: 'Unlimited RSVPs', included: true },
            { text: 'Email invitations', included: true },
            { text: 'Remove EventFlow branding', included: true },
            { text: 'Custom event URL', included: true },
            { text: 'Advanced analytics', included: true },
            { text: 'Priority support', included: true },
            { text: 'API access', included: false },
            { text: 'Dedicated account manager', included: false },
        ],
        cta: 'Start Business Trial',
        variant: 'primary',
        savings: 'Save $120/yr',
    },
    {
        name: 'Professional',
        price: { monthly: 79, yearly: 59 },
        desc: 'Full power for serious event professionals',
        icon: '💎',
        features: [
            { text: 'Everything in Business', included: true },
            { text: 'Branded email domain', included: true },
            { text: 'Private guest list', included: true },
            { text: 'Multi-part registration', included: true },
            { text: 'CRM integrations', included: true },
            { text: 'API access', included: true },
            { text: 'SSO / SAML', included: false },
            { text: 'Dedicated account manager', included: false },
        ],
        cta: 'Start Pro Trial',
        variant: 'outline',
    },
    {
        name: 'Enterprise',
        price: { monthly: null, yearly: null },
        desc: 'Custom solutions for large organizations',
        icon: '🏢',
        features: [
            { text: 'Everything in Professional', included: true },
            { text: 'Unlimited team members', included: true },
            { text: 'Custom integrations', included: true },
            { text: 'SSO / SAML support', included: true },
            { text: 'Dedicated account manager', included: true },
            { text: 'Custom SLA & uptime guarantee', included: true },
            { text: 'On-premise deployment option', included: true },
            { text: 'White-label solution', included: true },
        ],
        cta: 'Talk to Sales',
        variant: 'accent',
    },
];

export default function Pricing() {
    const [billing, setBilling] = useState('monthly');

    return (
        <section className="section pricing-section" id="pricing">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <div className="badge">
                        <Star size={12} />
                        Pricing
                    </div>
                    <h2>Simple, Transparent <span className="text-gradient">Pricing</span></h2>
                    <p>Start free. Scale as you grow. No hidden fees, no surprise bills — just predictable pricing that grows with your events.</p>
                </div>

                {/* Billing Toggle */}
                <div className="billing-toggle">
                    <button
                        className={`billing-btn ${billing === 'monthly' ? 'active' : ''}`}
                        onClick={() => setBilling('monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={`billing-btn ${billing === 'yearly' ? 'active' : ''}`}
                        onClick={() => setBilling('yearly')}
                    >
                        Annual
                        <span className="save-badge">Save 25%</span>
                    </button>
                </div>

                {/* Pricing Cards */}
                <div className="pricing-grid">
                    {BUSINESS_PLANS.map(plan => (
                        <div key={plan.name} className={`card pricing-card ${plan.popular ? 'pricing-popular' : ''}`}>
                            <div className="pricing-header">
                                <span className="pricing-icon">{plan.icon}</span>
                                <div>
                                    <div className="pricing-name">{plan.name}</div>
                                    <div className="pricing-desc">{plan.desc}</div>
                                </div>
                            </div>

                            <div className="pricing-price-row">
                                {plan.price.monthly === null ? (
                                    <div className="pricing-price custom">Custom</div>
                                ) : (
                                    <>
                                        <div className="pricing-price">
                                            {plan.price.monthly === 0 ? 'Free' : `$${billing === 'yearly' ? plan.price.yearly : plan.price.monthly}`}
                                        </div>
                                        {plan.price.monthly > 0 && (
                                            <div className="pricing-per">/mo{billing === 'yearly' ? ', billed annually' : ''}</div>
                                        )}
                                    </>
                                )}
                                {plan.savings && billing === 'yearly' && (
                                    <span className="plan-savings">{plan.savings}</span>
                                )}
                            </div>

                            <a href="#" className={`btn btn-${plan.variant} btn-pricing`}>
                                {plan.cta} <ArrowRight size={15} />
                            </a>

                            <div className="divider" style={{ margin: '20px 0' }}></div>

                            <div className="pricing-features">
                                {plan.features.map(feat => (
                                    <div key={feat.text} className={`feature-check ${feat.included ? '' : 'unavailable'}`}>
                                        {feat.included
                                            ? <Check size={15} className="check-icon" />
                                            : <X size={15} className="check-icon" style={{ color: 'var(--text-muted)' }} />
                                        }
                                        <span>{feat.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ticketing Note */}
                <div className="ticketing-note">
                    <div className="ticketing-note-inner">
                        <div className="icon-box icon-box-gold">
                            <Zap size={18} />
                        </div>
                        <div>
                            <div className="ticketing-note-title">Paid Ticketing</div>
                            <div className="ticketing-note-desc">
                                Only <strong>1.9% + $0.90</strong> per ticket for paid events. No monthly fee required. Free events are always 100% free.
                            </div>
                        </div>
                        <a href="#" className="btn btn-outline btn-sm">Learn More</a>
                    </div>
                </div>

                {/* Enterprise Row */}
                <div className="enterprise-cta">
                    <Building2 size={20} />
                    <span>Running large-scale events? <strong>Let's build a custom plan for your organization.</strong></span>
                    <a href="#" className="btn btn-outline btn-sm">Contact Sales <ArrowRight size={14} /></a>
                </div>
            </div>
        </section>
    );
}
