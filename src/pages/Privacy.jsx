import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages.css';

export default function Privacy() {
    return (
        <>
            <Navbar />
            <section className="page-hero" style={{ paddingBottom: 40 }}>
                <div className="page-hero-bg">
                    <div className="page-hero-orb-1"></div>
                    <div className="page-hero-grid"></div>
                </div>
                <div className="page-hero-content container">
                    <h1 className="page-hero-title">Privacy <span className="text-gradient">Policy</span></h1>
                    <p className="page-hero-desc">Last updated: February 28, 2025. We take your privacy seriously — here's exactly how we handle your data.</p>
                </div>
            </section>

            <section className="section-sm">
                <div className="container">
                    <div className="legal-content">
                        <h2>1. Introduction</h2>
                        <p>EventFlow, Inc. ("EventFlow," "we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website at eventflow.io and our associated services, sales, marketing, or events.</p>

                        <h2>2. Information We Collect</h2>
                        <p>We collect information you provide directly to us when creating an account, booking events, or contacting support. This includes:</p>
                        <ul>
                            <li>Contact information such as name, email address, phone number, and mailing address</li>
                            <li>Account credentials such as username and password</li>
                            <li>Billing information including credit card numbers (processed securely via Stripe)</li>
                            <li>Event-related data you create, including guest lists, ticket information, and event details</li>
                            <li>Communications you send to us or through our platform</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to provide, improve, and promote our services. We may use your information to:</p>
                        <ul>
                            <li>Create and maintain your account and provide the EventFlow service</li>
                            <li>Process transactions and send transaction-related notifications</li>
                            <li>Respond to comments and questions and provide customer service</li>
                            <li>Send promotional communications, where you have opted in</li>
                            <li>Monitor and analyze usage trends and usage to improve EventFlow</li>
                        </ul>

                        <h2>4. Data Sharing and Disclosure</h2>
                        <p>EventFlow does not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes without your explicit consent. We may share your information with:</p>
                        <ul>
                            <li>Service providers and vendors who assist in operations (e.g., Stripe for payments, AWS for hosting)</li>
                            <li>Business partners with your consent</li>
                            <li>Law enforcement or government agencies when required by law</li>
                            <li>Other parties in connection with a merger, acquisition, or sale of all or a portion of our assets</li>
                        </ul>

                        <h2>5. Data Retention</h2>
                        <p>We retain your personal information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete your personal data within 30 days, unless we are required to retain it longer by law.</p>

                        <h2>6. GDPR Rights (EU / EEA Residents)</h2>
                        <p>If you are a resident of the European Union or European Economic Area, you have the following rights under GDPR:</p>
                        <ul>
                            <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you</li>
                            <li><strong>Right to Rectification:</strong> Request correction of any inaccurate or incomplete data</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                            <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing</li>
                        </ul>

                        <h2>7. Security</h2>
                        <p>EventFlow has implemented appropriate technical and organizational security measures to protect your personal information from accidental loss, unauthorized access, disclosure, alteration, and destruction. We are SOC 2 Type II certified and use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit.</p>

                        <h2>8. Cookies & Tracking</h2>
                        <p>We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. Disabling cookies may limit some features of EventFlow.</p>

                        <h2>9. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                        <ul>
                            <li>Email: <a href="mailto:privacy@eventflow.io" style={{ color: 'var(--primary-light)' }}>privacy@eventflow.io</a></li>
                            <li>Address: EventFlow, Inc., 100 Market Street, Suite 300, San Francisco, CA 94105</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
