import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Layers, Lock } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import TechBadge from '../ui/TechBadge';

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  if (!project) return null;

  const displayHighlights =
    project.highlights ||
    (project.keyFeatures && project.keyFeatures.slice(0, 4).map((f) => f.title)) ||
    [];

  const previewHost = project.links?.live
    ? project.links.live.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${project.slug}.vercel.app`;

  return (
    <article className="group relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-200 overflow-hidden shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left / Top: Project Details */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Header / Category / Status */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="accent" size="sm">
                {project.category}
              </Badge>
              {project.status && (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  {project.status}
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
              <Link to={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
            
            <p className="text-sm font-medium text-[var(--text-muted)] mb-4">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Key Technical Highlights */}
            {displayHighlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-[var(--text-secondary)]">
                {displayHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span className="truncate">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Pills with Icons */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 7).map((tech) => (
                <TechBadge key={tech} name={tech} size="sm" />
              ))}
              {project.technologies.length > 7 && (
                <span className="px-2 py-0.5 text-[11px] font-mono rounded text-[var(--text-muted)]">
                  +{project.technologies.length - 7} more
                </span>
              )}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[var(--border-subtle)]">
            <Button
              to={`/projects/${project.slug}`}
              variant="primary"
              size="sm"
              icon={BookOpen}
            >
              Case Study
            </Button>

            {project.links?.live && (
              <Button
                href={project.links.live}
                variant="secondary"
                size="sm"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Live Demo
              </Button>
            )}

            {project.links?.github && (
              <Button
                href={project.links.github}
                variant="outline"
                size="sm"
                icon={GithubIcon}
              >
                GitHub
              </Button>
            )}

            {project.links?.admin && (
              <Button
                href={project.links.admin}
                variant="outline"
                size="sm"
                icon={Lock}
                iconPosition="right"
              >
                Admin
              </Button>
            )}
          </div>
        </div>

        {/* Right / Bottom: Project Visual Frame */}
        <div className="lg:col-span-5 bg-[var(--bg-secondary)] border-t lg:border-t-0 lg:border-l border-[var(--border-subtle)] p-6 flex flex-col justify-center">
          <div className="w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-card)] overflow-hidden shadow-xs">
            {/* Window / App Title bar */}
            <div className="flex items-center justify-between px-3.5 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-tertiary)]/50 text-[11px] font-mono text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
              </div>
              <span className="text-[10px] truncate max-w-[170px]">{previewHost}</span>
              <div className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span>Production</span>
              </div>
            </div>

            {/* Display: Real Screenshot OR Fallback Canvas */}
            {project.image && !imgError ? (
              <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              </div>
            ) : (
              /* Fallback interface canvas */
              <div className="relative aspect-video bg-neutral-950 flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-neutral-900/60 to-black/80" />
                
                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700 text-xs font-mono text-neutral-300">
                    <Layers size={13} className="text-[var(--accent)]" />
                    <span>{project.title}</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-mono max-w-xs line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <div className="absolute bottom-2.5 left-3.5 right-3.5 z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    ACTIVE DEPLOYMENT
                  </span>
                  <span className="truncate max-w-[140px]">{project.category}</span>
                </div>
              </div>
            )}

            {/* Technical Architecture Info Pill Strip */}
            {project.architecturePills && project.architecturePills.length > 0 && (
              <div className="p-3 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] space-y-1.5">
                {project.architecturePills.map((pill, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[var(--text-muted)]">{pill.label}</span>
                    <span className="text-[var(--text-primary)] font-medium">{pill.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
