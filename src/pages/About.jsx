import React, { useEffect } from 'react';
import AboutSection from '../components/sections/About';
import Engineering from '../components/sections/Engineering';
import ContactCTA from '../components/sections/ContactCTA';
import { personalInfo } from '../data/personal';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${personalInfo.name} — About & Engineering`;
  }, []);

  return (
    <main className="pt-6">
      <AboutSection />
      <Engineering />
      <ContactCTA />
    </main>
  );
}
