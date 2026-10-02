import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personal';
import ProjectHero from '../components/projects/ProjectHero';
import CaseStudy from '../components/projects/CaseStudy';
import TechStack from '../components/projects/TechStack';
import ProjectNavigation from '../components/projects/ProjectNavigation';
import Button from '../components/ui/Button';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(
    (p) => p.slug === slug || p.id === slug || (slug === 'syncstream' && p.slug === 'mov2night')
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${personalInfo.name} — ${project.title} | Technical Case Study`;
    } else {
      document.title = `${personalInfo.name} — Project Not Found`;
    }
  }, [project, slug]);

  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
        <div className="p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] max-w-md mx-auto">
          <h1 className="text-xl font-bold text-[var(--text-primary)] mb-2">
            Project Not Found
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            The requested project case study could not be found or has not been published yet.
          </p>
          <Button to="/#work" variant="primary" size="sm" icon={ArrowLeft}>
            Return to Work
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Scroll-Driven Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[var(--accent)] via-blue-500 to-indigo-500 origin-left z-[100] pointer-events-none"
        aria-hidden="true"
      />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <ProjectHero project={project} />
        <CaseStudy project={project} />
        <TechStack project={project} />
        <ProjectNavigation currentSlug={project.slug} />
      </main>
    </>
  );
}
