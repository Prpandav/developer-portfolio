import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import Button from '../ui/Button';
import TechBadge from '../ui/TechBadge';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Subtle Architectural Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        {/* Eyebrow / Status */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-2xs">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--text-secondary)]">
              {personalInfo.statusBadge}
            </span>
          </div>
        </motion.div>

        {/* Primary Role & Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.12] mb-6"
        >
          Backend-focused <br />
          <span className="text-[var(--text-secondary)] font-medium">Full-Stack Developer</span>
        </motion.h1>

        {/* Positioning Statement */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl font-normal"
        >
          {personalInfo.positioningStatement}
        </motion.p>

        {/* Hero Actions */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 mb-12">
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
        </motion.div>

        {/* Tech Stack Strip */}
        <motion.div variants={itemVariants} className="pt-6 border-t border-[var(--border-subtle)]">
          <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
            Core Technical Focus
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {techStack.map((tech) => (
              <TechBadge key={tech} name={tech} size="md" />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
