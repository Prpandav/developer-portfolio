import React from 'react';
import { CheckCircle2, AlertCircle, Cpu, Shield, Network, Zap, HelpCircle } from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';
import Badge from '../ui/Badge';

export default function CaseStudy({ project }) {
  if (!project || !project.caseStudy) return null;
  const { caseStudy } = project;

  return (
    <div className="py-12 space-y-16 max-w-4xl">
      {/* 1. Problem & Solution Overview */}
      <section className="space-y-8">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
            Context & Motivation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            The Problem & Engineering Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs">
            <div className="flex items-center gap-2 text-rose-500 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <AlertCircle size={16} />
              <span>The Problem</span>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 size={16} />
              <span>The Solution</span>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Verified Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="space-y-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Key Implemented Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)]"
              >
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. System Architecture & Flow */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
            System Design
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
            High-Level Architecture
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {caseStudy.architectureOverview}
          </p>
        </div>

        <ArchitectureDiagram />
      </section>

      {/* 4. Technical Implementation Deep Dive */}
      {caseStudy.technicalImplementation && (
        <section className="space-y-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
              Deep Dive
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Technical Implementation
            </h2>
          </div>

          <div className="space-y-4">
            {caseStudy.technicalImplementation.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 font-mono">
                  0{index + 1}. {item.heading}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Engineering Challenges & Solutions */}
      {caseStudy.challenges && caseStudy.challenges.length > 0 && (
        <section className="space-y-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
              Problem Solving
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Challenges & Resolutions
            </h2>
          </div>

          <div className="space-y-5">
            {caseStudy.challenges.map((c, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">
                  {c.title}
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded bg-[var(--bg-secondary)] border-l-2 border-amber-500">
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)] block mb-1">
                      Challenge:
                    </span>
                    <p className="text-[var(--text-secondary)]">{c.problem}</p>
                  </div>

                  <div className="p-3 rounded bg-[var(--bg-secondary)] border-l-2 border-emerald-500">
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)] block mb-1">
                      Resolution:
                    </span>
                    <p className="text-[var(--text-secondary)]">{c.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Technical Decisions & Tradeoffs */}
      {caseStudy.decisions && caseStudy.decisions.length > 0 && (
        <section className="space-y-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
              Tradeoff Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Key Technical Decisions
            </h2>
          </div>

          <div className="space-y-4">
            {caseStudy.decisions.map((d, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)]"
              >
                <h4 className="font-bold text-sm sm:text-base text-[var(--text-primary)] mb-2">
                  {d.decision}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {d.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Lessons Learned */}
      {caseStudy.lessons && caseStudy.lessons.length > 0 && (
        <section className="space-y-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
              Retrospective
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Engineering Takeaways
            </h2>
          </div>

          <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60">
            <ul className="space-y-3">
              {caseStudy.lessons.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-mono text-xs font-bold text-[var(--accent)] mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
