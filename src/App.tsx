import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSection from './components/ProblemSection';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import HowItWorks from './components/HowItWorks';
import SelfServiceSection from './components/SelfServiceSection';
import RealStories from './components/RealStories';
import TeamSection from './components/TeamSection';
import RetentionSection from './components/RetentionSection';
import KennisbankSection from './components/KennisbankSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import FoundersModal from './components/FoundersModal';
import KennisbankPage from './pages/KennisbankPage';
import KennisbankDetailPage from './pages/KennisbankDetailPage';
import WaitlistConfirmationPage from './pages/WaitlistConfirmationPage';
import MentalFitPage from './pages/MentalFitPage';
import MentalHealthPage from './pages/MentalHealthPage';
import ReleafeAppPage from './pages/ReleafeAppPage';
import ReleaseDashboardPage from './pages/ReleaseDashboardPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';
import CookieConsent from './components/CookieConsent';
import { updatePageMeta, seoConfigs } from './lib/seo';

type ModalMode = 'waitlist' | 'demo' | null;

function HomePage() {
  useEffect(() => {
    updatePageMeta(seoConfigs.home);
  }, []);

  const [modalMode, setModalMode] = useState<ModalMode>(null);
  const [showFounders, setShowFounders] = useState(false);

  const openWaitlist = () => setModalMode('waitlist');
  const openDemo = () => setModalMode('demo');
  const closeModal = () => setModalMode(null);

  return (
    <div className="font-sans antialiased">
      <Navbar onWaitlist={openWaitlist} />
      <Hero onWaitlist={openWaitlist} />
      <SocialProof />
      <ProblemSection onWaitlist={openWaitlist} />
      <Features />
      <DashboardPreview />
      <HowItWorks onWaitlist={openWaitlist} />
      <SelfServiceSection />
      <RetentionSection onWaitlist={openWaitlist} onLearnMore={openDemo} />
      <RealStories />
      <TeamSection onShowFounders={() => setShowFounders(true)} />
      <KennisbankSection />
      <CTASection onWaitlist={openWaitlist} onDemo={openDemo} />
      <Footer onFounders={() => setShowFounders(true)} />

      <WaitlistModal
        open={modalMode !== null}
        onClose={closeModal}
        mode={modalMode ?? 'waitlist'}
      />
      <FoundersModal open={showFounders} onClose={() => setShowFounders(false)} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wachtlijst" element={<WaitlistConfirmationPage />} />
        <Route path="/kennisbank" element={<KennisbankPage />} />
        <Route path="/kennisbank/:id" element={<KennisbankDetailPage />} />
        <Route path="/mentaal-fit" element={<MentalFitPage />} />
        <Route path="/mentale-klachten" element={<MentalHealthPage />} />
        <Route path="/releafe-app" element={<ReleafeAppPage />} />
        <Route path="/releafe-dashboard" element={<ReleaseDashboardPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/waitlist-confirmation" element={<WaitlistConfirmationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CookieConsent />
    </Router>
  );
}
