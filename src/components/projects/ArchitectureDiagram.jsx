import React from 'react';
import { ArrowDown, ArrowRight, Monitor, Server, Database, Radio, ShieldCheck } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 md:p-8 overflow-hidden shadow-xs">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <h3 className="text-base font-bold text-[var(--text-primary)]">
            System Topology & Data Flow
          </h3>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            Separation of WebSocket Signaling vs Mediasoup SFU RTP Transport
          </p>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
          Dual-Channel WebRTC Architecture
        </span>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Tier 1: React Client */}
        <div className="p-4 sm:p-5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-secondary)]/50">
          <div className="flex items-center gap-2 mb-3">
            <Monitor size={16} className="text-[var(--accent)]" />
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Client Tier — React 19 Frontend (SPA)
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                YouTube Player Controller
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                IFrame API integration with authoritative host play/pause/seek synchronization.
              </p>
            </div>
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Local Media & Screen Track
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                HTML5 captureStream() / getDisplayMedia() published as Mediasoup producer.
              </p>
            </div>
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Real-Time Chat & Voice UI
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                Room presence, emoji reactions, peer list, and voice transport controls.
              </p>
            </div>
          </div>
        </div>

        {/* Connector: Socket.IO & WebRTC */}
        <div className="flex flex-col items-center justify-center py-1 text-center">
          <div className="w-px h-6 bg-[var(--border-strong)]" />
          <div className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--accent)] font-medium">
            Socket.IO Signaling & Event Handlers
          </div>
          <div className="w-px h-6 bg-[var(--border-strong)]" />
        </div>

        {/* Tier 2: Express & Socket.IO Signaling Server */}
        <div className="p-4 sm:p-5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-secondary)]/50">
          <div className="flex items-center gap-2 mb-3">
            <Server size={16} className="text-[var(--accent)]" />
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Signaling Tier — Express 5 + Socket.IO Server
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Host Authority Validation
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                Server-side role verification before broadcasting play, pause, seek commands.
              </p>
            </div>
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Room & Peer Management
              </span>
              <p className="text-[var(--text-secondary)] text-[11px]">
                Room code generation, late-join state sync, and participant presence tracking.
              </p>
            </div>
            <div className="p-3 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* MongoDB Column */}
          <div className="flex flex-col items-center">
            <div className="w-px h-5 bg-[var(--border-strong)]" />
            <span className="text-[11px] font-mono text-[var(--text-muted)] mb-1">
              Persistence (Mongoose)
            </span>
            <div className="w-full p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)]">
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
            <div className="w-px h-5 bg-[var(--border-strong)]" />
            <span className="text-[11px] font-mono text-[var(--text-muted)] mb-1">
              RTP Media Pipeline
            </span>
            <div className="w-full p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)]">
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
