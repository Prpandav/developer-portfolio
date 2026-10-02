import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  target,
  rel,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  iconClassName = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'group inline-flex items-center justify-center font-medium transition-all duration-150 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-xs active:brightness-95',
    secondary:
      'bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--border-strong)] border border-[var(--border-subtle)] active:bg-[var(--border-subtle)]',
    outline:
      'bg-transparent text-[var(--text-primary)] border border-[var(--border-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)]',
    ghost:
      'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const iconName = Icon?.displayName || Icon?.name || '';
  const iconMovement =
    iconClassName ||
    (iconName.includes('ArrowUpRight')
      ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
      : iconName.includes('ArrowDown')
      ? 'group-hover:translate-y-0.5'
      : iconPosition === 'right'
      ? 'group-hover:translate-x-0.5'
      : '');

  const iconElement = Icon && (
    <span
      className={`inline-flex items-center justify-center transition-transform duration-150 ${iconMovement}`}
      aria-hidden="true"
    >
      <Icon size={size === 'sm' ? 14 : 16} />
    </span>
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && iconElement}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal =
      href.startsWith('http') || href.startsWith('mailto') || href.endsWith('.pdf');
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
