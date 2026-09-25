import React from 'react';
import { Server, Database, Layout, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';

export default function Engineering() {
  const iconMap = {
    backend: Server,
    databases: Database,
    frontend: Layout,
    development: Terminal,
  };

  const skillCategories = [
    { key: 'backend', data: personalInfo.skills.backend },
    { key: 'databases', data: personalInfo.skills.databases },
    { key: 'frontend', data: personalInfo.skills.frontend },
    { key: 'development', data: personalInfo.skills.development },
  ];

  return (
    <section id="engineering" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="Core Competencies"
        title="Engineering"
        description="Structured by domain responsibility. Focused on building reliable backend foundations, efficient data layers, and responsive web clients."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map(({ key, data }) => {
          const Icon = iconMap[key] || Server;

          return (
            <div
              key={key}
              className="p-6 sm:p-7 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-colors shadow-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)]">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {data.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    {data.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {data.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
