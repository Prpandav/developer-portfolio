import React from 'react';
import { motion } from 'motion/react';
import TechBadge from '../ui/TechBadge';

export default function TechStack({ project }) {
  if (!project || !project.techCategories) return null;

  const categories = [
    { title: 'Frontend & UI', items: project.techCategories.frontend },
    { title: 'Backend & APIs', items: project.techCategories.backend },
    { title: 'Admin & Operations', items: project.techCategories.adminOperations },
    { title: 'Database & Storage', items: project.techCategories.database },
    { title: 'Architecture & System', items: project.techCategories.architecture },
    { title: 'Networking & Protocols', items: project.techCategories.networking },
    { title: 'Integrations & APIs', items: project.techCategories.integrations },
    { title: 'Deployment & Tooling', items: project.techCategories.deployment || project.techCategories.tooling },
  ].filter((cat) => Array.isArray(cat.items) && cat.items.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-12 border-t border-[var(--border-subtle)]"
    >
      <div className="mb-6">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-1 block">
          Specifications
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
          Technology Stack & Dependencies
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-5 sm:p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-card)] transition-all duration-200 shadow-xs flex flex-col justify-start"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                {cat.title}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {cat.items.map((item) => (
                <TechBadge key={item} name={item} size="md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
