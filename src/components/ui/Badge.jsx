import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center font-mono font-medium rounded tracking-wide transition-colors';

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2',
  };

  const variantStyles = {
    default:
      'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]',
    accent:
      'bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-border)]',
    subtle:
      'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]',
    outline:
      'bg-transparent text-[var(--text-secondary)] border border-[var(--border-strong)]',
    success:
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : 14} aria-hidden="true" />}
      {children}
    </span>
  );
}
