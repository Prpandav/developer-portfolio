import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function ProjectNavigation({ currentSlug }) {
  const featured = projects.filter((p) => p.featured && p.caseStudy);
  const currentIndex = featured.findIndex(
    (p) => p.slug === currentSlug || p.id === currentSlug
  );

  const nextProject =
    currentIndex !== -1 && featured.length > 1
      ? featured[(currentIndex + 1) % featured.length]
      : null;

  const nextIndexNum =
    currentIndex !== -1
      ? ((currentIndex + 1) % featured.length) + 1
      : 1;

  return (
    <div className="py-12 border-t border-[var(--border-subtle)] space-y-8">
      {/* Next Case Study Preview Card */}
      {nextProject && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            <span>Next Technical Case Study</span>
            <span className="text-[var(--accent)] font-semibold">
              0{nextIndexNum} / 0{featured.length}
            </span>
          </div>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="group block p-6 sm:p-7 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-200 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="accent" size="sm">
                    {nextProject.category}
                  </Badge>
                  {nextProject.status && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      {nextProject.status}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2">
                  {nextProject.tagline || nextProject.shortDescription}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 font-mono text-xs font-semibold text-[var(--accent)] sm:self-center">
                <span>Explore Case Study</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200">
                  <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Bottom utilities */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <Link
          to="/#work"
          className="group inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft size={14} className="transition-transform duration-150 group-hover:-translate-x-1" />
          <span>Return to All Selected Work</span>
        </Link>

        <Button
          to="/#contact"
          variant="primary"
          size="sm"
        >
          Discuss this Project
        </Button>
      </div>
    </div>
  );
}
