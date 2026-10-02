import React from 'react';
import { motion } from 'motion/react';
import { upcomingProjects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';

export default function MoreWork() {
  if (!upcomingProjects || upcomingProjects.length === 0) return null;

  return (
    <section id="more-work" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <SectionHeading
          eyebrow="Pipeline"
          title="More Projects & In-Progress Work"
          description="A list of upcoming systems and applications currently being architected or in development. Detailed case studies will be published as they reach production milestones."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden shadow-xs divide-y divide-[var(--border-subtle)]"
      >
        {upcomingProjects.map((project) => (
          <div
            key={project.id}
            className="group p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--bg-secondary)]/60 transition-all duration-150"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h4 className="font-semibold text-base text-[var(--text-primary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all duration-150">
                  {project.title}
                </h4>
                <Badge variant="subtle" size="sm">
                  {project.category}
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {project.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)] border border-[var(--border-subtle)] px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] group-hover:border-[var(--border-strong)] transition-colors">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                </span>
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
