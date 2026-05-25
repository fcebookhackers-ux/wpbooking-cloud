/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Info, Shield, Sparkles, TrendingUp } from "lucide-react";
import { PLAN_DATA } from "../data";

interface PricingProps {
  onOpenTrialModal: (ctaSource: string) => void;
  onTrackEvent: (eventName: string, metadata?: any) => void;
}

export default function Pricing({ onOpenTrialModal, onTrackEvent }: PricingProps) {
  
  const handlePlanCheckoutClick = (planId: string, checkoutUrl: string) => {
    onTrackEvent("checkout_plan_clicked", {
      planId,
      checkoutUrl,
      timestamp: new Date().toISOString()
    });
  };

  const handleTrialClick = () => {
    onTrackEvent("cta_pricing_trial_clicked", { location: "pricing_intro" });
    onOpenTrialModal("pricing_connector_cta");
  };

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-950 antialiased relative overflow-hidden" id="planos-precos">
      {/* Visual background gradient items */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-96 w-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 h-96 w-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-extrabold tracking-widest uppercase text-brand-green bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full inline-block">
            Planos e Preços
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Escolha o plano perfeito para acelerar seu negócio
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Todos os planos incluem suporte premium em português, atualizações contínuas de segurança e garantia completa de 30 dias contra qualquer problema.
          </p>
        </div>

        {/* Pricing columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 items-stretch">
          
          {PLAN_DATA.map((plan) => {
            const isMostPopular = plan.id === "plano_2";
            const isBestValue = plan.id === "plano_3";
            
            return (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-6.5 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                  isMostPopular 
                    ? "bg-slate-850 border-brand-green shadow-xl shadow-brand-green/5 ring-1 ring-brand-green/30 lg:scale-[1.04] lg:z-10" 
                    : isBestValue
                      ? "bg-slate-850 border-indigo-500/50 shadow-lg shadow-indigo-500/5 hover:border-indigo-400"
                      : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Badge decoration */}
                {plan.badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-extrabold tracking-wider uppercase rounded-full shadow-md leading-none ${
                    isMostPopular 
                      ? "bg-brand-green text-white shadow-emerald-500/10"
                      : isBestValue
                        ? "bg-brand-indigo text-white shadow-indigo-500/15"
                        : "bg-slate-800 text-slate-300"
                  }`}>
                    {plan.badge}
                  </span>
                )}

                {/* Plan Metadata Header */}
                <div className="space-y-4">
                  <div className="pb-4.5 border-b border-slate-800">
                    <h3 className="text-xl font-black text-white tracking-tight">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 h-10 overflow-hidden font-medium leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price display section */}
                  <div className="py-2 inline-flex items-baseline gap-1">
                    <span className="text-slate-400 text-sm font-semibold">R$</span>
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{plan.priceValue}</span>
                    <span className="text-slate-400 text-xs font-semibold ml-0.5">/ {plan.billingPeriod}</span>
                  </div>

                  {/* Trial Notice inside cards to boost conversion */}
                  {plan.id === "plano_2" && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex gap-2.5 items-start text-xs text-emerald-300">
                      <Sparkles className="h-4 w-4 shrink-0 text-brand-green mt-0.5" />
                      <div>
                        <p className="font-bold leading-none">Trial de 30 dias ativo!</p>
                        <p className="text-[10px] text-slate-400 mt-1">Nenhuma taxa de infraestrutura cobrada hoje. Experimente de graça.</p>
                      </div>
                    </div>
                  )}

                  {plan.id === "plano_3" && (
                    <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-3 flex gap-2.5 items-start text-xs text-indigo-300">
                      <TrendingUp className="h-4 w-4 shrink-0 text-indigo-400 mt-0.5" />
                      <div>
                        <p className="font-bold leading-none">Economia Real de 20%</p>
                        <p className="text-[10px] text-slate-400 mt-1">Combinação ideal do plugin com hospedagem estável inclusa.</p>
                      </div>
                    </div>
                  )}

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 pt-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                        <Check className="h-4.5 w-4.5 text-brand-green shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                  <a
                    href={plan.checkoutUrl}
                    target="_blank"
                    rel="noreferrer"
                    id={`cta_${plan.id}`}
                    onClick={() => handlePlanCheckoutClick(plan.id, plan.checkoutUrl)}
                    className={`w-full font-bold text-center block py-3.5 px-4 rounded-xl transition-all shadow-md cursor-pointer text-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      isMostPopular
                        ? "bg-brand-green text-white hover:bg-brand-green-hover shadow-brand-green/10 hover:shadow-lg focus:ring-brand-green"
                        : "bg-white text-slate-900 hover:bg-slate-100 focus:ring-white"
                    }`}
                  >
                    {plan.ctaText}
                  </a>

                  {plan.trialNote && (
                    <p className="text-center text-[11px] text-slate-450 font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-1">
                      <span>✓ {plan.trialNote}</span>
                    </p>
                  )}

                  {plan.extraInfo && (
                    <p className="text-center text-[10px] text-slate-500 italic block leading-tight">
                      {plan.extraInfo}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

        </div>

        {/* Dynamic calculations/details explanation anchor */}
        <div className="mt-16 bg-slate-850 border border-slate-800 rounded-2xl p-5 sm:p-6 text-xs text-slate-400 space-y-3">
          <p className="font-bold text-slate-300 flex items-center gap-1 text-[11px]">
            <Info className="h-4 w-4 text-brand-indigo" />
            INFORMAÇÕES ADICIONAIS SOBRE O TRIAL E UPGRADES:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p>
              1. No **Plano 2 (Mensal)**, a cobrança do plugin é feita uma única vez no ato da assinatura. Os R$ 49,90 referentes à infraestrutura gerenciada só começam a ser cobrados **30 dias após**, permitindo teste completo sem custo de infra.
            </p>
            <p>
              2. O cálculo do **Plano 3 (Anual)** garante desconto integral: R$ 197,90 (plugin) + R$ 598,90 (infraestrutura anualizada) de R$ 796,80 por apenas **R$ 637,36** (economia líquida comprovada de R$ 159,44/ano).
            </p>
          </div>
          <p className="text-center pt-2 text-slate-500">
            Deseja testar a nossa infra antes de assinar?{" "}
            <button 
              onClick={handleTrialClick}
              className="text-brand-green underline font-bold cursor-pointer"
            >
              Crie uma conta trial grátis por 30 dias agora mesmo
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
