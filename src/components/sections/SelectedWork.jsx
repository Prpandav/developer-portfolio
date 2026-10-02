import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../projects/ProjectCard';

export default function SelectedWork() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="A selection of applications I've built, from real-time systems to practical software products."
        />
      </motion.div>

      <div className="space-y-8">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
