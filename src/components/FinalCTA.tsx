/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Play, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onOpenTrialModal: (ctaSource: string) => void;
  onTrackEvent: (eventName: string, metadata?: any) => void;
}

export default function FinalCTA({ onOpenTrialModal, onTrackEvent }: FinalCTAProps) {
  
  const handleTrialClick = () => {
    onTrackEvent("cta_final_trial", { location: "final_call_to_action" });
    onOpenTrialModal("final_cta_testar");
  };

  const handlePlansClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onTrackEvent("cta_final_planos", { location: "final_call_to_action" });
    const section = document.getElementById("planos-precos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white antialiased font-sans" id="fim-cta">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner with gradient border display */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 lg:p-16 text-center shadow-2xl border border-slate-800">
          
          {/* Accent lighting dots */}
          <div className="absolute top-0 right-0 h-96 w-96 bg-brand-green/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-brand-indigo/10 rounded-full blur-3xl -z-10" />

          {/* Icon Badge */}
          <div className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 text-brand-green font-mono text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Zapfllow Automação</span>
          </div>

          {/* Title and descriptions */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Pronto para profissionalizar seus agendamentos?
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Pare de perder clientes respondendo mensagens atrasadas e conciliando Pix手动. Instale o WP Booking Cloud e escale suas vendas no WordPress.
            </p>
          </div>

          {/* Action elements buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4.5 max-w-md mx-auto">
            <button
              onClick={handleTrialClick}
              id="cta_final_trial"
              className="w-full sm:w-auto px-8 py-4 bg-brand-green text-white font-bold text-sm md:text-base rounded-xl hover:bg-brand-green-hover transition-all shadow-lg shadow-brand-green/15 hover:shadow-xl hover:shadow-brand-green/30 flex items-center justify-center gap-2 cursor-pointer focus:ring-4 focus:ring-brand-green/45"
            >
              <Sparkles className="h-4.5 w-4.5" />
              <span>Testar por 30 dias</span>
            </button>

            <a
              href="#planos-precos"
              onClick={handlePlansClick}
              id="cta_final_planos"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-705 text-white font-bold text-sm md:text-base rounded-xl hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600 shadow-sm flex items-center justify-center gap-2"
            >
              <span>Escolher meu plano</span>
              <Play className="h-3 w-3 fill-current text-slate-400" />
            </a>
          </div>

          {/* Risk mitigation slogan footer */}
          <p className="mt-6 text-xs text-slate-450 font-bold uppercase tracking-wider text-slate-400">
            ✓ Comece com trial e evolua no seu ritmo.
          </p>

        </div>

      </div>
    </section>
  );
}
