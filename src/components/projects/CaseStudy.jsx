import React from 'react';
import { CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';

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

      {/* 2. System Architecture & Flow */}
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

        {project.slug === 'mov2night' && <ArchitectureDiagram />}

        {project.architectureFlow && project.architectureFlow.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {project.architectureFlow.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider block mb-2">
                    Phase 0{idx + 1} · {step.phase}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Key Engineering Challenges & Technical Decisions */}
      {caseStudy.challenges && caseStudy.challenges.length > 0 && (
        <section className="space-y-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
              Engineering Deep Dive
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Key Technical Challenges & Decisions
            </h2>
          </div>

          <div className="space-y-5">
            {caseStudy.challenges.map((c, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-[var(--accent)] font-bold">
                    0{index + 1}.
                  </span>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {c.title}
                  </h3>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="p-3.5 rounded bg-[var(--bg-secondary)] border-l-2 border-amber-500">
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)] block mb-1">
                      Technical Challenge & Tradeoff:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{c.problem}</p>
                  </div>

                  <div className="p-3.5 rounded bg-[var(--bg-secondary)] border-l-2 border-emerald-500">
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)] block mb-1">
                      Engineering Solution:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
