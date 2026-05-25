/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { Activity, Shield, Terminal, X } from "lucide-react";
import { TrackingEvent } from "../types";

interface TrackingNotificationProps {
  events: TrackingEvent[];
  onClear: () => void;
}

export default function TrackingNotification({ events, onClear }: TrackingNotificationProps) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (events.length > 0) {
      setVisible(true);
      // Auto-expand for new events to grab attention subtly
      setExpanded(true);
      const timer = setTimeout(() => {
        setExpanded(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [events]);

  if (!visible || events.length === 0) return null;

  const latestEvent = events[events.length - 1];

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm w-full bg-slate-900 border border-slate-800 text-white rounded-xl shadow-2xl overflow-hidden font-mono text-xs transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wider uppercase text-[10px] text-slate-300">Zapfllow Pixel Integration</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="px-1.5 py-0.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 text-[10px] uppercase font-bold transition-all"
            aria-label={expanded ? "Recolher console" : "Expandir console"}
          >
            {expanded ? "minimizar" : "ver logs"}
          </button>
          <button 
            onClick={() => {
              setVisible(false);
              onClear();
            }} 
            className="text-slate-400 hover:text-white rounded p-0.5 hover:bg-slate-800 transition-all"
            aria-label="Dispensar console"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Main console content */}
      <div className={`p-3 transition-all duration-300 overflow-y-auto max-h-56 ${expanded ? "block" : "hidden sm:block"}`}>
        <div className="flex items-start gap-2.5 text-slate-300">
          <Terminal className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="flex-1 space-y-1">
            <p className="text-[11px] font-semibold text-emerald-400">
              ✓ Evento Tracking Enviado!
            </p>
            <div className="space-y-1 text-[10px] text-slate-400">
              <p>
                <span className="text-slate-500">Nome:</span> <span className="text-white font-semibold">{latestEvent.eventName}</span>
              </p>
              <p>
                <span className="text-slate-500">Hora:</span> {new Date(latestEvent.timestamp).toLocaleTimeString()}
              </p>
              {latestEvent.metadata && (
                <div className="bg-slate-950 p-1.5 rounded mt-1 overflow-x-auto text-[9px] text-emerald-300 max-h-24">
                  <pre>{JSON.stringify(latestEvent.metadata, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
        </div>

        {events.length > 1 && (
          <div className="mt-2.5 pt-2 border-t border-slate-800 text-[9px] text-slate-500 flex justify-between items-center">
            <span>+{events.length - 1} outros eventos de conversão no histórico</span>
            <button 
              onClick={onClear} 
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              Limpar histórico
            </button>
          </div>
        )}
      </div>

      <div className="px-3.5 py-1.5 bg-slate-950/50 flex items-center justify-between text-[9px] text-slate-500">
        <span className="flex items-center gap-1">
          <Shield className="h-2.5 w-2.5 text-emerald-500" />
          RGPD / LGPD Compliant
        </span>
        <span className="text-brand-green font-bold">● Pronto para Produção</span>
      </div>
    </div>
  );
}
