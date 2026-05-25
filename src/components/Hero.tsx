/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Calendar, CheckCircle2, MessageSquare, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenTrialModal: (ctaSource: string) => void;
  onTrackEvent: (eventName: string, metadata?: any) => void;
}

export default function Hero({ onOpenTrialModal, onTrackEvent }: HeroProps) {
  const handleTrialClick = () => {
    onTrackEvent("cta_hero_trial", { location: "hero_above_fold" });
    onOpenTrialModal("hero_cta_testar");
  };

  const handleScrollToPlans = (e: React.MouseEvent) => {
    e.preventDefault();
    onTrackEvent("cta_hero_planos", { location: "hero_above_fold" });
    const section = document.getElementById("planos-precos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const chips = [
    { text: "Trial 30 dias", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
    { text: "Integração WhatsApp", color: "bg-green-500/10 text-green-600 border-green-500/20" },
    { text: "Pix integrado", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" },
    { text: "Suporte em português", color: "bg-sky-500/10 text-sky-600 border-sky-500/20" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-150 antialiased">
      {/* Visual background lights */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]">
        <div className="absolute inset-0 bg-radial-gradient from-emerald-100/30 to-transparent blur-3xl" />
        <div className="absolute -top-40 left-1/3 h-[300px] w-[300px] rounded-full bg-indigo-100/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline/Brand */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              <span>WP Booking Cloud</span>
              <span className="text-slate-350">|</span>
              <span className="text-slate-500 font-normal">Zapfllow Tecnologia</span>
            </div>

            {/* Headline & Subheadline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-tight text-slate-900 tracking-tight">
                Automatize seus agendamentos no WordPress com{" "}
                <span className="text-brand-green relative inline-block">
                  WhatsApp
                </span>{" "}
                e{" "}
                <span className="text-brand-indigo relative inline-block">
                  Pix
                </span>
              </h1>
              <p className="mx-auto max-w-2xl lg:mx-0 text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                Ative em minutos, teste por 30 dias e evolua para o plano ideal. Sem complicação para você, prático, integrado e seguro para o seu cliente final.
              </p>
            </div>

            {/* Quick Chips Highlight */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              {chips.map((chip, idx) => (
                <span 
                  key={idx} 
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold leading-none ${chip.color}`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  {chip.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={handleTrialClick}
                id="cta_hero_trial"
                className="group px-8 py-4 bg-brand-green text-white font-bold text-sm md:text-base rounded-xl hover:bg-brand-green-hover transition-all shadow-lg shadow-brand-green/20 hover:shadow-xl hover:shadow-brand-green/35 flex items-center justify-center gap-2 cursor-pointer focus:ring-4 focus:ring-brand-green/30"
              >
                <Sparkles className="h-4 w-4" />
                <span>Começar teste grátis</span>
                <Play className="h-3 w-3 fill-current opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#planos-precos"
                onClick={handleScrollToPlans}
                id="cta_hero_planos"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-705 font-bold text-sm md:text-base rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                Ver planos e preços
              </a>
            </div>

            {/* Risk reduction caption */}
            <p className="text-xs text-slate-400 font-medium">
              * Sem taxas de setup iniciais. 30 dias de trial incluído na infraestrutura gerenciada.
            </p>
          </div>

          {/* Graphical Representation (Phone Scheduler Simulation) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            {/* Visual background frame */}
            <div className="absolute -inset-4 bg-indigo-50/50 rounded-2xl -rotate-1 blur-2xl lg:block hidden" />
            
            {/* Main Interactive Scheduler Mockup Card */}
            <div className="relative w-full max-w-[340px] bg-slate-900 rounded-[32px] p-2 aspect-[9/18] shadow-2xl border-4 border-slate-950 flex flex-col overflow-hidden">
              {/* Phone ear speaker notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-slate-950 rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-800 rounded-full mb-1" />
              </div>

              {/* Dynamic Header */}
              <div className="bg-slate-800 pt-5 pb-3 px-3.5 flex items-center justify-between text-white rounded-t-[24px]">
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="relative h-6.5 w-6.5 rounded-full bg-brand-green flex items-center justify-center font-bold text-[10px] text-white">
                    WP
                  </div>
                  <div>
                    <span className="block text-xs font-bold leading-none">WP Booking Cloud</span>
                    <span className="text-[9px] text-emerald-400">● Assistente Online</span>
                  </div>
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2" />
              </div>

              {/* Chat Simulation Area */}
              <div className="flex-1 bg-[#ebe5de] p-3 text-[11px] space-y-3.5 overflow-y-auto font-sans">
                
                {/* Simulated timestamp */}
                <div className="text-center">
                  <span className="bg-white/55 text-slate-500 px-2 py-0.5 rounded text-[9px] font-medium uppercase tracking-wide">
                    Hoje, 09:32
                  </span>
                </div>

                {/* Received Bubble 1 */}
                <div className="flex items-end gap-1.5">
                  <div className="h-5 w-5 rounded-full bg-slate-400 shrink-0 flex items-center justify-center text-[8px] text-white">
                    U
                  </div>
                  <div className="bg-white text-slate-800 py-1.5 px-2.5 rounded-2xl rounded-bl-none shadow-xs max-w-[85%]">
                    Oi, gostaria de agendar um horário de corte de cabelo e barba para hoje às 14h, por favor.
                  </div>
                </div>

                {/* Sent Bubble (Automatic Assistant) */}
                <div className="flex items-end gap-1.5 justify-end">
                  <div className="bg-emerald-100 text-slate-800 py-2 px-2.5 rounded-2xl rounded-br-none shadow-xs max-w-[85%] space-y-1">
                    <p className="font-semibold text-emerald-800 flex items-center gap-1 text-[10px]">
                      <MessageSquare className="h-3 w-3 text-emerald-600 fill-current" />
                      WP Booking Cloud:
                    </p>
                    <p>Horário reservado com sucesso! Para confirmar seu agendamento de hoje às 14:00, realize o pagamento do Pix abaixo:</p>
                    <div className="my-1.5 p-1.5 bg-white rounded border border-emerald-100 flex flex-col items-center">
                      {/* Generates a fake QR code representation */}
                      <div className="h-20 w-20 bg-slate-100 border border-slate-200 rounded flex flex-col items-center justify-center p-1">
                        <div className="grid grid-cols-4 gap-0.5 w-full h-full">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`rounded-xs ${ (i*3 + 1) % 2 === 0 ? 'bg-slate-800' : 'bg-transparent'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-[8px] font-mono text-slate-500 mt-1 select-all break-all text-center">
                        Pix Copia e Cola: 00020126360014br.gov.bcb.pix...
                      </span>
                    </div>
                    <p className="text-[9px] text-slate-500">Atenção: Seu código expira em 10 minutos.</p>
                  </div>
                  <div className="h-5 w-5 rounded-full bg-slate-805 shrink-0 flex items-center justify-center text-[8px] text-white font-bold bg-slate-850">
                    W
                  </div>
                </div>

                {/* Automatic payment success notification card */}
                <div className="bg-white/95 rounded-xl p-2.5 border-l-4 border-emerald-500 shadow-md space-y-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="font-bold text-slate-800 text-[10px]">Agendamento Confirmado!</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    O Pix de R$ 65,00 foi compensado. Sua vaga para terça às 14:00 está garantida e integrada na agenda da equipe.
                  </p>
                </div>
              </div>

              {/* Keyboard dummy bar */}
              <div className="bg-slate-900 p-2.5 flex items-center gap-2 border-t border-slate-800">
                <input 
                  type="text" 
                  disabled 
                  placeholder="Mensagem agendada automaticamente" 
                  className="bg-slate-800 text-slate-500 placeholder-slate-600 rounded-full px-3 py-1 text-[10px] w-full focus:outline-none"
                />
                <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px]">
                  ✓
                </div>
              </div>
            </div>
            
            {/* Mini Calendar graphic floating accent */}
            <div className="absolute -bottom-4 -left-10 bg-white shadow-xl rounded-xl p-3 border border-slate-100 hidden md:flex items-center gap-3.5">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-800 leading-none">12 agendamentos</span>
                <span className="text-[10px] text-emerald-500 mt-0.5 inline-block font-semibold">Hoje de manhã</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
