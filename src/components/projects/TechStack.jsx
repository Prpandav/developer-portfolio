import React from 'react';
import SectionHeading from '../ui/SectionHeading';

export default function TechStack({ project }) {
  if (!project || !project.techCategories) return null;

  const categories = [
    { title: 'Backend & Signaling', items: project.techCategories.backend },
    { title: 'Database & Models', items: project.techCategories.database },
    { title: 'Frontend & Client', items: project.techCategories.frontend },
    { title: 'Networking & Protocols', items: project.techCategories.networking },
  ];

  return (
    <div className="py-10 border-t border-[var(--border-subtle)]">
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
        Technology Stack & Dependencies
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)]"
          >
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
              {cat.title}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 text-xs font-mono rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
