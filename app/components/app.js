import React from 'react';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import DescriptionSection from './description-section/description-section';
import UspsSection from './usps-section/usps-section';
import TrustSection from './trust-section/trust-section';
import CTASection from './cta-section/cta-section';
import Modal from './modal/modal';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DescriptionSection />
      <UspsSection />
      <TrustSection />
      <CTASection />
      <Modal />
    </div>
  );
};

export default App;
