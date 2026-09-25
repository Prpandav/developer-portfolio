import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';

export default function ProjectNavigation({ currentSlug }) {
  return (
    <div className="py-12 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link
        to="/#work"
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
      >
        <ArrowLeft size={16} />
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
  );
}
