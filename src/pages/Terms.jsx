import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages.css';

export default function Terms() {
    return (
        <>
            <Navbar />
            <section className="page-hero" style={{ paddingBottom: 40 }}>
                <div className="page-hero-bg">
                    <div className="page-hero-orb-1"></div>
                    <div className="page-hero-grid"></div>
                </div>
                <div className="page-hero-content container">
                    <h1 className="page-hero-title">Terms of <span className="text-gradient">Service</span></h1>
                    <p className="page-hero-desc">Last updated: February 28, 2025. By using EventFlow, you agree to these terms. Please read them carefully.</p>
                </div>
            </section>

            <section className="section-sm">
                <div className="container">
                    <div className="legal-content">
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing or using the EventFlow platform and associated services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

                        <h2>2. Description of Service</h2>
                        <p>EventFlow provides an online event management platform that allows users to create event pages, manage registrations, send invitations, sell tickets, and analyze event data. We may update, change, or discontinue features at any time with reasonable notice.</p>

                        <h2>3. Account Registration</h2>
                        <p>To use most features of EventFlow, you must create an account. You are responsible for:</p>
                        <ul>
                            <li>Maintaining the confidentiality of your account credentials</li>
                            <li>All activities that occur under your account</li>
                            <li>Providing accurate, current, and complete registration information</li>
                            <li>Notifying us immediately of any unauthorized use of your account</li>
                        </ul>

                        <h2>4. Payments and Fees</h2>
                        <p>EventFlow offers both free and paid subscription plans. Paid subscriptions are billed monthly or annually as selected. For ticketed events, a service fee of 1.9% + $0.90 per ticket applies to paid tickets. All fees are non-refundable unless stated otherwise. We use Stripe to process all payments securely.</p>

                        <h2>5. Your Content</h2>
                        <p>You retain all ownership rights to content you create through EventFlow (event pages, forms, emails). By using EventFlow, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display your content solely for the purpose of providing and improving our services.</p>

                        <h2>6. Prohibited Uses</h2>
                        <p>You may not use EventFlow to:</p>
                        <ul>
                            <li>Conduct fraudulent, deceptive, or illegal activities</li>
                            <li>Sell items or services that violate local laws or our Acceptable Use Policy</li>
                            <li>Send spam or unsolicited communications</li>
                            <li>Collect user data without proper consent under GDPR or applicable laws</li>
                            <li>Impersonate another person, company, or organization</li>
                            <li>Distribute malware, viruses, or other harmful code</li>
                        </ul>

                        <h2>7. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, EventFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business interruption, arising from your use or inability to use our services.</p>

                        <h2>8. Termination</h2>
                        <p>We reserve the right to suspend or terminate your account and access to EventFlow at our sole discretion, with or without notice, if you violate these Terms. Upon termination, your right to use EventFlow immediately ceases.</p>

                        <h2>9. Governing Law</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes shall be resolved through binding arbitration in San Francisco, CA.</p>

                        <h2>10. Contact</h2>
                        <p>For any questions about these Terms, please contact us:</p>
                        <ul>
                            <li>Email: <a href="mailto:legal@eventflow.io" style={{ color: 'var(--primary-light)' }}>legal@eventflow.io</a></li>
                            <li>EventFlow, Inc., 100 Market Street, Suite 300, San Francisco, CA 94105</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
