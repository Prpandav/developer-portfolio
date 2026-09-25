import React from 'react';
import { upcomingProjects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';

export default function MoreWork() {
  if (!upcomingProjects || upcomingProjects.length === 0) return null;

  return (
    <section id="more-work" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="Pipeline"
        title="More Projects & In-Progress Work"
        description="A list of upcoming systems and applications currently being architected or in development. Detailed case studies will be published as they reach production milestones."
      />

      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden shadow-xs divide-y divide-[var(--border-subtle)]">
        {upcomingProjects.map((project) => (
          <div
            key={project.id}
            className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--bg-secondary)]/50 transition-colors"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h4 className="font-semibold text-base text-[var(--text-primary)]">
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
              <span className="font-mono text-xs text-[var(--text-muted)] border border-[var(--border-subtle)] px-2.5 py-1 rounded bg-[var(--bg-secondary)]">
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
