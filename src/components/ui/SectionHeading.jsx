import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto items-center',
  };

  return (
    <div className={`flex flex-col mb-10 md:mb-12 ${alignStyles[align] || alignStyles.left} ${className}`}>
      {eyebrow && (
        <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--accent)] mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
