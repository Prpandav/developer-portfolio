import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import SelectedWork from '../components/sections/SelectedWork';
import Engineering from '../components/sections/Engineering';
import About from '../components/sections/About';
import MoreWork from '../components/sections/MoreWork';
import ContactCTA from '../components/sections/ContactCTA';
import { personalInfo } from '../data/personal';

export default function Home() {
  useEffect(() => {
    document.title = `${personalInfo.name} — ${personalInfo.role}`;
  }, []);

  return (
    <main>
      <Hero />
      <SelectedWork />
      <Engineering />
      <About />
      <MoreWork />
      <ContactCTA />
    </main>
  );
}
