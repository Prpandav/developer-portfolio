import React from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProjectHero({ project }) {
  if (!project) return null;

  return (
    <div className="pt-12 pb-10 border-b border-[var(--border-subtle)]">
      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/#work"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge variant="accent" size="sm">
          {project.category}
        </Badge>
        {project.status && (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {project.status}
          </span>
        )}
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
        {project.title}
      </h1>

      <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed mb-8">
        {project.tagline || project.shortDescription}
      </p>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-3">
        {project.links?.live && (
          <Button
            href={project.links.live}
            variant="primary"
            size="md"
            icon={ArrowUpRight}
            iconPosition="right"
          >
            Open Live Application
          </Button>
        )}

        {project.links?.github && (
          <Button
            href={project.links.github}
            variant="secondary"
            size="md"
            icon={GithubIcon}
          >
            Source Code (GitHub)
          </Button>
        )}
      </div>
    </div>
  );
}
