import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <SectionHeading
          eyebrow="Background"
          title="About"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="md:col-span-7 space-y-4 text-base text-[var(--text-secondary)] leading-relaxed"
        >
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
        </motion.div>

        {/* Education & Academic Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
          className="md:col-span-5 p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-card)] transition-all duration-200 shadow-xs"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
              <GraduationCap size={16} />
              <span>Formal Education</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Active Senior
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {personalInfo.education.degree}
              </h3>
              <p className="text-sm font-medium text-[var(--text-secondary)] mt-0.5">
                {personalInfo.education.institution}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-secondary)]">Status:</span>
                <span className="text-[var(--text-primary)] font-medium">{personalInfo.education.status}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-secondary)]">Discipline:</span>
                <span className="text-[var(--text-primary)] font-medium">Information Technology</span>
              </div>
            </div>

            {/* Core Systems Coursework Tags */}
            <div className="pt-3 border-t border-[var(--border-subtle)]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                Core Coursework
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                {[
                  'Data Structures & Algorithms',
                  'Database Systems (DBMS)',
                  'Computer Networks',
                  'Operating Systems',
                  'Object-Oriented Programming'
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] hover:-translate-y-0.5 transition-all duration-150 cursor-default select-none shadow-2xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
