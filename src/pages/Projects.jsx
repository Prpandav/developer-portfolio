import React, { useEffect } from 'react';
import SelectedWork from '../components/sections/SelectedWork';
import MoreWork from '../components/sections/MoreWork';
import ContactCTA from '../components/sections/ContactCTA';
import { personalInfo } from '../data/personal';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${personalInfo.name} — Selected Projects`;
  }, []);

  return (
    <main className="pt-6">
      <SelectedWork />
      <MoreWork />
      <ContactCTA />
    </main>
  );
}
