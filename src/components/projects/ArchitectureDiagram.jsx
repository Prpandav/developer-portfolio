import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Monitor, Server, Database, Radio, ShieldCheck } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 md:p-8 overflow-hidden shadow-xs">
      {/* Header with live activity beacon */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <h3 className="text-base font-bold text-[var(--text-primary)]">
            System Topology & Data Flow
          </h3>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            Separation of WebSocket Signaling vs Mediasoup SFU RTP Transport
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Live Stream Topology</span>
          </div>
          <span className="hidden sm:inline text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
            Dual-Channel WebRTC
          </span>
        </div>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {/* Tier 1: React Client */}
        <div className="p-4 sm:p-5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-secondary)]/50 hover:border-[var(--accent)] transition-colors shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <Monitor size={16} className="text-[var(--accent)]" />
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Client Tier — React 19 Frontend (SPA)
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors shadow-2xs">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                YouTube Player Controller
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                IFrame API integration with authoritative host play/pause/seek synchronization.
              </p>
            </div>
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors shadow-2xs">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Local Media & Screen Track
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                HTML5 captureStream() / getDisplayMedia() published as Mediasoup producer.
              </p>
            </div>
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors shadow-2xs">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Real-Time Chat & Voice UI
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                Room presence, emoji reactions, peer list, and voice transport controls.
              </p>
            </div>
          </div>
        </div>

        {/* Animated Connector: Socket.IO & WebRTC */}
        <div className="flex flex-col items-center justify-center py-1 text-center relative">
          {/* Top packet stream track */}
          <div className="relative w-0.5 h-7 bg-[var(--border-strong)] overflow-hidden rounded-full">
            <motion.div
              className="absolute w-full h-3 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
              animate={{ y: [-12, 28], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="my-1 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--accent)] font-medium shadow-2xs flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
            </span>
            <span>Socket.IO Signaling & Event Handlers</span>
          </div>

          {/* Bottom packet stream track */}
          <div className="relative w-0.5 h-7 bg-[var(--border-strong)] overflow-hidden rounded-full">
            <motion.div
              className="absolute w-full h-3 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
              animate={{ y: [-12, 28], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.6, delay: 0.8, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

        {/* Tier 2: Express & Socket.IO Signaling Server */}
        <div className="p-4 sm:p-5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-secondary)]/50 hover:border-[var(--accent)] transition-colors shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <Server size={16} className="text-[var(--accent)]" />
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Signaling Tier — Express 5 + Socket.IO Server
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors shadow-2xs">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Host Authority Validation
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                Server-side role verification before broadcasting play, pause, seek commands.
              </p>
            </div>
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors shadow-2xs">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Room & Peer Management
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                Room code generation, late-join state sync, and participant presence tracking.
              </p>
            </div>
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors shadow-2xs">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                WebRTC Transport Signaling
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                DTLS/ICE parameters negotiation, router capabilities, createProducer / createConsumer.
              </p>
            </div>
          </div>
        </div>

        {/* Split Connectors to Data Tier & Media SFU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* MongoDB Column */}
          <div className="flex flex-col items-center">
            {/* Animated Emerald Packet Track */}
            <div className="relative w-0.5 h-6 bg-[var(--border-strong)] overflow-hidden rounded-full mb-1">
              <motion.div
                className="absolute w-full h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                animate={{ y: [-10, 24], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)] mb-1.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Persistence (Mongoose)
            </span>
            <div className="w-full p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-emerald-500/40 hover:shadow-[var(--shadow-card)] transition-all duration-200">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[var(--text-primary)]">
                <Database size={15} className="text-emerald-500" />
                <span>MongoDB Persistence</span>
              </div>
              <ul className="text-[11px] text-[var(--text-secondary)] space-y-1 font-mono">
                <li>• Registered Users & JWT auth</li>
                <li>• Room sessions & host metadata</li>
                <li>• Room chat message history</li>
              </ul>
            </div>
          </div>

          {/* Mediasoup SFU Column */}
          <div className="flex flex-col items-center">
            {/* Animated Cyan/Red Media Packet Track */}
            <div className="relative w-0.5 h-6 bg-[var(--border-strong)] overflow-hidden rounded-full mb-1">
              <motion.div
                className="absolute w-full h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.7)]"
                animate={{ y: [-10, 24], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)] mb-1.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 inline-block" />
              RTP Media Pipeline
            </span>
            <div className="w-full p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-cyan-500/40 hover:shadow-[var(--shadow-card)] transition-all duration-200">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[var(--text-primary)]">
                <Radio size={15} className="text-red-500" />
                <span>Mediasoup SFU Router</span>
              </div>
              <ul className="text-[11px] text-[var(--text-secondary)] space-y-1 font-mono">
                <li>• WebRTC Audio & Video Transport</li>
                <li>• Selective packet forwarding (no re-encoding)</li>
                <li>• DTLS-SRTP encrypted peer delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
