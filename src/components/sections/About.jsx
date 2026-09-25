import React from 'react';
import { GraduationCap, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="Background"
        title="About"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Bio text */}
        <div className="md:col-span-7 space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
          <p>
            I am a final-year Information Technology undergraduate with a primary focus on backend engineering and full-stack development. I enjoy building systems where architecture, data flow, and networking matter — such as real-time multi-user applications, streaming pipelines, and RESTful APIs.
          </p>
          <p>
            My recent work includes <strong>Mov2night</strong>, a real-time watch-party platform coordinating synchronized playback across peers using Mediasoup WebRTC SFU and Socket.IO.
          </p>
          <p>
            I am continuously strengthening my knowledge in systems design, distributed data handling, and clean code practices, targeting software engineering roles where I can contribute to production-grade applications.
          </p>

          <div className="pt-4">
            <Button
              href={personalInfo.contact.resumeUrl}
              variant="primary"
              size="md"
              icon={FileText}
            >
              View Full Resume
            </Button>
          </div>
        </div>

        {/* Education & Academic Card */}
        <div className="md:col-span-5 p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
            <GraduationCap size={16} />
            <span>Formal Education</span>
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {personalInfo.education.degree}
              </h3>
              <p className="text-sm font-medium text-[var(--text-secondary)] mt-0.5">
                {personalInfo.education.institution}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] space-y-1">
              <div>
                <span className="text-[var(--text-secondary)]">Status:</span> {personalInfo.education.status}
              </div>
              <div>
                <span className="text-[var(--text-secondary)]">Discipline:</span> Information Technology & Computer Systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
