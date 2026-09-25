import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../ui/Icons';
import { personalInfo } from '../../data/personal';
import Button from '../ui/Button';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xs">
        {/* Subtle background glow/radial */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--accent)] mb-3 block">
            Initiate Contact
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            Have a role or project in mind?
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            I'm currently open to software development opportunities, full-stack engineer roles, and backend-oriented positions. Whether you have an open opportunity or want to discuss technical architecture, feel free to reach out.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button
              href={`mailto:${personalInfo.contact.email}`}
              variant="primary"
              size="md"
              icon={Mail}
            >
              Send an Email
            </Button>

            {personalInfo.contact.linkedin && (
              <Button
                href={personalInfo.contact.linkedin}
                variant="secondary"
                size="md"
                icon={LinkedinIcon}
              >
                LinkedIn
              </Button>
            )}

            {personalInfo.contact.github && (
              <Button
                href={personalInfo.contact.github}
                variant="outline"
                size="md"
                icon={GithubIcon}
              >
                GitHub
              </Button>
            )}

            {personalInfo.contact.leetcode && (
              <Button
                href={personalInfo.contact.leetcode}
                variant="outline"
                size="md"
                icon={LeetCodeIcon}
              >
                LeetCode
              </Button>
            )}
          </div>

          <p className="mt-6 text-xs font-mono text-[var(--text-muted)]">
            Direct email: <span className="text-[var(--text-secondary)] select-all">{personalInfo.contact.email}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
