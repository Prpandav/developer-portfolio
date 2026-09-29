import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Layers, Lock } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProjectHero({ project }) {
  const [imgError, setImgError] = useState(false);
  if (!project) return null;

  const previewHost = project.links?.live
    ? project.links.live.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${project.slug}.vercel.app`;

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

      {/* Featured Screenshot Frame */}
      {project.image && (
        <div className="mt-10 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] overflow-hidden shadow-card">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-tertiary)]/50 text-[11px] font-mono text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
            </div>
            <span className="text-[11px] font-medium">{previewHost}</span>
            <span className="text-emerald-500 font-semibold">● Production</span>
          </div>
          {!imgError ? (
            <div className="relative aspect-video max-h-[520px] bg-neutral-900 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} live interface preview`}
                className="w-full h-full object-cover object-top"
                loading="eager"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            <div className="relative aspect-video max-h-[400px] bg-neutral-950 flex flex-col items-center justify-center p-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 mb-3">
                <Layers size={14} className="text-[var(--accent)]" />
                <span>Screenshot configured at {project.image}</span>
              </div>
              <p className="text-xs text-neutral-400 font-mono max-w-sm">
                Live app accessible at {previewHost}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
