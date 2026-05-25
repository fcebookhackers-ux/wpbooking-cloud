/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as icons from "lucide-react";
import { FEATURE_DATA } from "../data";

// Type-safe mapping for dynamic icons based on name strings in raw data
const ICON_MAPPING: Record<string, React.ComponentType<any>> = {
  Calendar: icons.Calendar,
  MessageSquare: icons.MessageSquare,
  Cpu: icons.Cpu,
  Key: icons.Key,
  CheckCircle: icons.CheckCircle,
  QrCode: icons.Smartphone, // Safe fallback
  BarChart: icons.BarChart3,
  Server: icons.Server,
  TrendingUp: icons.TrendingUp,
  FileText: icons.FileText
};

export default function Features() {
  return (
    <section className="py-20 bg-[#f8fafc] border-b border-slate-100 antialiased" id="recursos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-extrabold tracking-widest uppercase text-brand-green bg-emerald-50 px-3 py-1 rounded-full">
            Nossos Recursos
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Tudo o que sua empresa precisa para vender agendamentos no piloto automático
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            WP Booking Cloud não é apenas um plugin simples de calendário. É um ecossistema completo integrado ao WhatsApp que cuida do agendamento às cobranças por Pix de ponta a ponta.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">
          {FEATURE_DATA.map((feature) => {
            const IconComponent = ICON_MAPPING[feature.iconName] || icons.HelpCircle;
            return (
              <div 
                key={feature.id} 
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/65 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className="h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-brand-green/10 group-hover:border-brand-green/20 group-hover:text-brand-green transition-all shadow-xs">
                    <IconComponent className="h-5.5 w-5.5 text-inherit" />
                  </div>
                  
                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-slate-800 tracking-tight group-hover:text-slate-950 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-450 font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Optional Status Tag */}
                {feature.id === "managed_infra" && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold">
                    <span className="text-slate-400">STATUS</span>
                    <span className="text-brand-indigo bg-indigo-50 px-2 py-0.5 rounded-full">OPCIONAL GERENCIADO</span>
                  </div>
                )}
                
                {feature.id === "whatsapp_qr" && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold">
                    <span className="text-slate-400">CONEXÃO</span>
                    <span className="text-brand-green bg-emerald-50 px-2 py-0.5 rounded-full">QR CODE DIRETO</span>
                  </div>
                )}

                {feature.id === "trial_upgrade" && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold">
                    <span className="text-slate-400">LICENÇA</span>
                    <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">30 DIAS TRIAL</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
