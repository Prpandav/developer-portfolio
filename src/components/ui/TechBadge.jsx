import React from 'react';
import {
  Server,
  Database,
  Code2,
  Cpu,
  Layers,
  Radio,
  Network,
  Terminal,
  Lock,
  BarChart3,
  Sliders,
  Cloud,
  FileCode,
  Globe,
} from 'lucide-react';
import { GithubIcon } from './Icons';

/**
 * Clean SVG Brand Icons with authentic accents
 */
function ReactIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NodeIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="#539e43">
      <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm0 3.2l9.8 5.6v11.4L16 28.3 6.2 22.7V11.3L16 5.7z" />
    </svg>
  );
}

function ViteIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
      <path
        d="M29.6 4.8L16.8 28.9c-.3.6-1.2.6-1.5 0L2.4 4.8c-.4-.7.1-1.6.9-1.5l13.6 2.5c.2 0 .5 0 .7 0l11.1-2.5c.9-.1 1.4.7.9 1.5z"
        fill="#bd34fe"
      />
      <path
        d="M20.9 3.5L11 19.8l4.4.8c.4.1.7.5.5 1l-2 5.5 8.7-16.5-4.4-.8c-.4-.1-.7-.5-.5-1l1.8-4.8c.2-.4.7-.6.9-.5z"
        fill="#ffc920"
      />
    </svg>
  );
}

function JSIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#f7df1e" />
      <path d="M6 18h2.5c1.4 0 2.5-.8 2.5-2.2v-5.3H9v5.2c0 .5-.3.8-.8.8H6V18zm8.5 0c2 0 3.5-1.1 3.5-2.8 0-1.8-1.2-2.3-2.5-2.8l-.6-.2c-.7-.3-1.1-.5-1.1-1 0-.5.4-.8 1.1-.8.7 0 1.3.3 1.8.8l1.4-1.3c-.8-.9-1.9-1.3-3.2-1.3-2 0-3.3 1.2-3.3 2.7 0 1.6 1.1 2.3 2.4 2.8l.6.2c.8.3 1.2.6 1.2 1.1 0 .6-.5.9-1.3.9-.9 0-1.7-.4-2.2-1.1L13 16.5c.8 1 1.9 1.5 3.5 1.5z" fill="#000" />
    </svg>
  );
}

function TailwindIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#38bdf8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

function MongoIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#00ed64">
      <path d="M12.007 0C11.66 0 11.23.23 11.02.58c-.9 1.53-4.52 7.74-4.52 12.08 0 4.16 3.03 7.82 5.5 10.34.2.2.49.2.69 0 2.47-2.52 5.5-6.18 5.5-10.34 0-4.34-3.62-10.55-4.52-12.08-.21-.35-.64-.58-.99-.58h-.17zm-.08 1.82c.4 1.05 3.32 8.87 3.32 10.84 0 2.93-1.65 6.04-3.24 7.95V1.82z" />
    </svg>
  );
}

function VercelIcon({ size = 13, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 1L24 22H0L12 1z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#25d366">
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.779.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.783-1.675-2.084-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.632-.93-2.234-.244-.587-.492-.507-.677-.516h-.578c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.51 1.08 2.91 1.23 3.11c.15.201 2.124 3.244 5.146 4.549.718.311 1.28.496 1.718.636.723.23 1.38.197 1.9-.12.58-.352 1.78-1.258 2.03-1.78.25-.522.25-.97.175-1.07-.075-.101-.276-.151-.577-.301zM12 0C5.373 0 0 5.373 0 12c0 2.115.548 4.103 1.507 5.836L.073 23.371l5.704-1.496A11.936 11.936 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.895 0-3.666-.527-5.184-1.442l-.372-.224-3.852 1.01 1.028-3.755-.246-.39A9.768 9.768 0 0 1 2.182 12c0-5.413 4.405-9.818 9.818-9.818 5.414 0 9.818 4.405 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818z" />
    </svg>
  );
}

function YouTubeIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#ff0000">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function SocketIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 2.182A9.818 9.818 0 1 1 2.182 12 9.829 9.829 0 0 1 12 2.182zm1.09 3.273L6.545 14.182h5.455v5.455l6.545-8.727H13.09z" />
    </svg>
  );
}

function GitIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#f05032">
      <path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.126 0L8.808 2.585l3.224 3.224a1.785 1.785 0 0 1 2.257 2.269l3.102 3.102a1.782 1.782 0 1 1-1.077 1.058l-2.884-2.884v6.082a1.782 1.782 0 1 1-1.5 0V9.332a1.782 1.782 0 0 1-.954-2.339L7.74 3.756.453 11.043a1.5 1.5 0 0 0 0 2.126l10.479 10.479a1.5 1.5 0 0 0 2.126 0l10.488-10.488a1.5 1.5 0 0 0 0-2.23z" />
    </svg>
  );
}

function PostmanIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#ff6c37">
      <circle cx="12" cy="12" r="10" />
      <path d="M7 12l10-5-4 10-2-4-4-1z" fill="#fff" />
    </svg>
  );
}

/**
 * Intelligent icon resolver based on tech name
 */
export function getTechIcon(techName, size = 13) {
  const norm = (techName || '').toLowerCase().trim();

  // Core Frontend
  if (norm.includes('react')) return <ReactIcon size={size} />;
  if (norm.includes('vite')) return <ViteIcon size={size} />;
  if (norm.includes('tailwind')) return <TailwindIcon size={size} />;
  if (norm.includes('javascript') || norm === 'js') return <JSIcon size={size} />;
  if (norm.includes('html')) return <FileCode size={size} className="text-orange-500 shrink-0" />;
  if (norm.includes('css')) return <Layers size={size} className="text-sky-400 shrink-0" />;

  // Backend & APIs
  if (norm.includes('node')) return <NodeIcon size={size} />;
  if (norm.includes('express')) return <Server size={size} className="text-slate-300 shrink-0" />;
  if (norm.includes('rest') || norm.includes('api')) return <Cpu size={size} className="text-amber-400 shrink-0" />;
  if (norm.includes('axios')) return <Globe size={size} className="text-blue-400 shrink-0" />;

  // Databases
  if (norm.includes('mongo')) return <MongoIcon size={size} />;
  if (norm.includes('sql') || norm.includes('postgres') || norm.includes('database')) {
    return <Database size={size} className="text-emerald-400 shrink-0" />;
  }

  // Real-time, Streaming & Networking
  if (norm.includes('socket')) return <SocketIcon size={size} className="text-white shrink-0" />;
  if (norm.includes('mediasoup') || norm.includes('webrtc') || norm.includes('rtp') || norm.includes('dtls')) {
    return <Radio size={size} className="text-red-400 shrink-0" />;
  }
  if (norm.includes('network') || norm.includes('protocol')) {
    return <Network size={size} className="text-cyan-400 shrink-0" />;
  }

  // Integrations & Social
  if (norm.includes('whatsapp') || norm.includes('phone')) return <WhatsAppIcon size={size} />;
  if (norm.includes('youtube')) return <YouTubeIcon size={size} />;

  // Security & Auth
  if (norm.includes('jwt') || norm.includes('auth') || norm.includes('session') || norm.includes('interceptor')) {
    return <Lock size={size} className="text-amber-400 shrink-0" />;
  }

  // DevOps & Cloud
  if (norm.includes('vercel')) return <VercelIcon size={size} className="text-white shrink-0" />;
  if (norm.includes('render')) return <Cloud size={size} className="text-emerald-400 shrink-0" />;
  if (norm === 'git') return <GitIcon size={size} />;
  if (norm.includes('github')) return <GithubIcon size={size} className="text-white shrink-0" />;
  if (norm.includes('postman')) return <PostmanIcon size={size} />;
  if (norm.includes('linux') || norm.includes('vps') || norm.includes('terminal')) {
    return <Terminal size={size} className="text-amber-300 shrink-0" />;
  }

  // Business & Admin Operations
  if (norm.includes('crud') || norm.includes('product')) return <Sliders size={size} className="text-indigo-400 shrink-0" />;
  if (norm.includes('inquiry') || norm.includes('analytics') || norm.includes('metric')) {
    return <BarChart3 size={size} className="text-teal-400 shrink-0" />;
  }

  // Default fallback
  return <Code2 size={size} className="text-[var(--accent)] shrink-0" />;
}

/**
 * TechBadge Component:
 * Displays both the authentic brand/tool icon AND the monospaced name
 */
export default function TechBadge({ name, size = 'sm', className = '' }) {
  if (!name) return null;

  const iconSize = size === 'lg' ? 15 : size === 'md' ? 14 : 12;

  const sizeClasses =
    size === 'lg'
      ? 'px-3 py-1.5 text-xs gap-2'
      : size === 'md'
      ? 'px-2.5 py-1 text-xs gap-1.5'
      : 'px-2.5 py-1 text-[11px] gap-1.5';

  return (
    <span
      className={`inline-flex items-center max-w-full font-mono rounded-md bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-150 cursor-default select-none ${sizeClasses} ${className}`}
    >
      <span className="shrink-0 flex items-center justify-center">
        {getTechIcon(name, iconSize)}
      </span>
      <span className="break-words whitespace-normal leading-tight text-left">
        {name}
      </span>
    </span>
  );
}
