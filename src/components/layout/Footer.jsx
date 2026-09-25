import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'GitHub', href: personalInfo.contact.github },
    { name: 'LinkedIn', href: personalInfo.contact.linkedin },
    { name: 'LeetCode', href: personalInfo.contact.leetcode },
    { name: 'Email', href: `mailto:${personalInfo.contact.email}` },
    { name: 'Resume', href: personalInfo.contact.resumeUrl },
  ];

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] mt-24 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-[var(--text-primary)]">
                {personalInfo.name}
              </span>
              <span className="text-xs text-[var(--text-muted)]">·</span>
              <span className="text-xs text-[var(--text-secondary)]">
                {personalInfo.role}
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              {personalInfo.education.institution}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={11} className="opacity-60" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono text-[11px]">Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
}
