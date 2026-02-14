import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import SEOHelper from './components/SEOHelper';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceArea from './components/ServiceArea';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <SEOHelper />
      <div className="font-sans text-gray-900 bg-white min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <ServiceArea />
          <HowItWorks />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </LanguageProvider>
  );
};

export default App;
