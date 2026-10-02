import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
                className="group text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={11} className="opacity-60 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{time ? `${time} IST` : 'IST'} ·  Surat, Gujarat, India </span>
          </div>

          <div className="flex items-center gap-4">
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-150 active:scale-95 text-xs font-mono shadow-2xs cursor-pointer select-none"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp size={12} className="transition-transform duration-150 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
