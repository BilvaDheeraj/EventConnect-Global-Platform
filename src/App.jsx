import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

// Home sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import Demo from './pages/Demo';
import About from './pages/About';
import Blog from './pages/Blog';
import Help from './pages/Help';
import Templates from './pages/Templates';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FeaturePage from './pages/FeaturePage';
import SolutionPage from './pages/SolutionPage';
import GetStarted from './pages/GetStarted';

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <div className="divider" style={{ margin: 0 }}></div>
        <Features />
        <div className="divider" style={{ margin: 0 }}></div>
        <HowItWorks />
        <div className="divider" style={{ margin: 0 }}></div>
        <Testimonials />
        <div className="divider" style={{ margin: 0 }}></div>
        <Pricing />
        <div className="divider" style={{ margin: 0 }}></div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/pricing" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<Help />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/features/:slug" element={<FeaturePage />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
