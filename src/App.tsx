import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { useLanguage } from './i18n/LanguageContext';

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-charcoal">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-brand-charcoal focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        {t.skipToContent}
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <EmergencyBanner />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
