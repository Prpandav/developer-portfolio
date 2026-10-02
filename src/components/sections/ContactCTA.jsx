import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../ui/Icons';
import { personalInfo } from '../../data/personal';
import Button from '../ui/Button';

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = personalInfo.contact.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xs hover:border-[var(--border-strong)] transition-colors"
      >
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

          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-[var(--text-muted)]">Direct email:</span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] active:scale-[0.97] transition-all duration-150 cursor-pointer shadow-2xs select-none"
              title="Click to copy email address"
              aria-label="Copy email address"
            >
              <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                {personalInfo.contact.email}
              </span>
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                {copied ? (
                  <Check size={13} className="text-emerald-500 animate-in zoom-in-75 duration-150" />
                ) : (
                  <Copy size={13} className="transition-transform duration-150 group-hover:scale-110" />
                )}
              </span>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.85, x: -3 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.15 }}
                    className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
