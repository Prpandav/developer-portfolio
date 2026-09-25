import React from 'react';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../projects/ProjectCard';

export default function SelectedWork() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Work"
        description="A selection of applications I've built, from real-time systems to practical software products."
      />

      <div className="space-y-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
