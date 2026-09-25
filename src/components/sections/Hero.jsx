import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import Button from '../ui/Button';

export default function Hero() {
  const techStack = [
    'React',
    'Node.js',
    'Express',
    'REST APIs',
    'SQL',
    'MongoDB',
    'WebSockets',
    'WebRTC'
  ];

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        {/* Eyebrow / Status */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-secondary)] mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--text-secondary)]">
            {personalInfo.statusBadge}
          </span>
        </div>

        {/* Primary Role & Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.12] mb-6">
          Backend-focused <br />
          <span className="text-[var(--text-secondary)] font-medium">Full-Stack Developer</span>
        </h1>

        {/* Positioning Statement */}
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl font-normal">
          {personalInfo.positioningStatement}
        </p>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          <Button
            href="#work"
            variant="primary"
            size="md"
            icon={ArrowDown}
            iconPosition="right"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('work');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </Button>

          <Button
            href={personalInfo.contact.resumeUrl}
            variant="secondary"
            size="md"
            icon={FileText}
          >
            Resume
          </Button>
        </div>

        {/* Tech Stack Strip */}
        <div className="pt-6 border-t border-[var(--border-subtle)]">
          <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
            Core Technical Focus
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
