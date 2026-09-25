import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Radio, Users, Film, MessageSquare, Volume2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <article className="group relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-all duration-200 overflow-hidden shadow-xs">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
            <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-2 p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <Radio size={14} className="text-[var(--accent)] shrink-0" />
                <span className="truncate">Mediasoup SFU Real-time WebRTC</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <Film size={14} className="text-[var(--accent)] shrink-0" />
                <span className="truncate">Host-Authoritative Playback Sync</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <Users size={14} className="text-[var(--accent)] shrink-0" />
                <span className="truncate">Late-Join State Reconciliation</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <MessageSquare size={14} className="text-[var(--accent)] shrink-0" />
                <span className="truncate">Live Chat & Voice Communication</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 7).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
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
          </div>
        </div>

        {/* Right / Bottom: Project Visual Frame (Screenshot or Technical Canvas) */}
        <div className="lg:col-span-5 bg-[var(--bg-secondary)] border-t lg:border-t-0 lg:border-l border-[var(--border-subtle)] p-6 flex flex-col justify-center">
          <div className="w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-card)] overflow-hidden shadow-xs">
            {/* Window / App Title bar */}
            <div className="flex items-center justify-between px-3.5 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-tertiary)]/50 text-[11px] font-mono text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
              </div>
              <span className="text-[10px] truncate max-w-[140px]">{project.title.toLowerCase()}.app</span>
              <span className="text-emerald-500 font-semibold">● Live</span>
            </div>

            {/* Display: Real Screenshot OR Fallback Canvas */}
            {project.image ? (
              <div className="relative aspect-video bg-neutral-900 overflow-hidden group/img">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                  loading="lazy"
                />
              </div>
            ) : (
              /* Simulated technical player preview when screenshot image is not yet provided */
              <div className="relative aspect-video bg-neutral-950 flex flex-col items-center justify-center p-4 text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                
                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 border border-neutral-700 text-xs font-mono text-neutral-300">
                    <Radio size={12} className="text-red-500 animate-pulse" />
                    <span>Host Streaming: YouTube / Local File</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-mono">
                    Mediasoup SFU RTP Transport · 0.4s Drift
                  </p>
                </div>

                {/* Bottom synchronized controls overlay */}
                <div className="absolute bottom-2 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">PLAYING</span>
                    <span>14:28 / 42:10</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Volume2 size={13} />
                    <span>Guests: 4 Synchronized</span>
                  </div>
                </div>
              </div>
            )}

            {/* Technical Architecture Info Pill Strip */}
            <div className="p-3 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[var(--text-muted)]">Signaling</span>
                <span className="text-[var(--text-primary)] font-medium">Socket.IO Rooms</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[var(--text-muted)]">Media Transport</span>
                <span className="text-[var(--text-primary)] font-medium">Mediasoup SFU (DTLS-SRTP)</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[var(--text-muted)]">Playback Authority</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Host-Only Controlled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
