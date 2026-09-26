import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/personal';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll border/background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or ESC
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', path: '/projects' },
    { name: 'About', href: '#about', path: '/about' },
    { name: 'Resume', href: personalInfo.contact.resumeUrl, isExternal: true },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    if (link.isExternal) return;

    if (link.href.startsWith('#')) {
      if (location.pathname !== '/') {
        e.preventDefault();
        navigate(`/${link.href}`);
      } else {
        const targetElement = document.querySelector(link.href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-[var(--border-subtle)] shadow-xs'
          : 'bg-[var(--bg-primary)] border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Name / Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 font-medium text-sm tracking-tight text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 rounded"
        >
          <span className="w-8 h-8 rounded bg-[var(--bg-secondary)] border border-[var(--border-strong)] flex items-center justify-center font-mono font-semibold text-xs text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
            {personalInfo.initials}
          </span>
          <span className="font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors">
            {personalInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-md inline-flex items-center gap-1"
                >
                  {link.name}
                  <ArrowUpRight size={13} className="opacity-60" />
                </a>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="px-3.5 py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors rounded-md"
              >
                {link.name}
              </a>
            );
          })}

          <div className="h-4 w-px bg-[var(--border-subtle)] mx-2" aria-hidden="true" />

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            {theme === 'dark' ? (
              <Sun size={17} className="transition-transform hover:rotate-45" />
            ) : (
              <Moon size={17} className="transition-transform hover:-rotate-12" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          role="region"
          aria-label="Mobile Navigation Drawer"
          className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-md"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} className="opacity-60" />
                </a>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link);
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-md"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
