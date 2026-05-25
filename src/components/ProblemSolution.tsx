/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlertCircle, ArrowRight, CheckCircle2, ShieldClose, Trash2, Users, XCircle } from "lucide-react";

export default function ProblemSolution() {
  const pains = [
    {
      title: "Perda de Clientes no WhatsApp",
      desc: "Mensagens acumulando, clientes esperando horas por resposta fora do horário comercial, resultando em desistência imediata.",
      icon: XCircle,
      color: "text-red-500 bg-red-50"
    },
    {
      title: "Agenda Desorganizada",
      desc: "Marcações duplicadas ou anotações confusas em papel ou planilhas Excel que causam conflito de horários e furos graves de atendimento.",
      icon: Trash2,
      color: "text-red-500 bg-red-50"
    },
    {
      title: "Confirmação Manual de Pix",
      desc: "Ter que abrir a conta do banco toda hora para validar se o cliente realmente enviou o comprovante de pagamento Pix antes de confirmar.",
      icon: AlertCircle,
      color: "text-red-500 bg-red-50"
    },
    {
      title: "No-Show (Faltas sem aviso)",
      desc: "Clientes reservam horários e não aparecem. Sem lembretes automatizados de confirmação, sua empresa perde faturamento relevante do dia.",
      icon: ShieldClose,
      color: "text-red-500 bg-red-50"
    }
  ];

  const benefits = [
    {
      title: "Fluxo Automático e Ininterrupto",
      desc: "Sua agenda funciona e faz agendamentos automáticos 24 horas por dia, 7 dias por semana, sem precisar que você esteja online ou digite nada.",
      icon: CheckCircle2,
      color: "text-emerald-500 bg-emerald-50"
    },
    {
      title: "Gestão Centralizada no WordPress",
      desc: "Visualize todas as reservas, profissionais e clientes em um único calendário nativo do seu WordPress com filtros inteligentes por status.",
      icon: CheckCircle2,
      color: "text-emerald-500 bg-emerald-50"
    },
    {
      title: "Conciliação de Pix Instantânea",
      desc: "Geração automática do Pix. O plugin monitora em tempo real e altera o status para 'Pago' imediatamente após a compensação do dinheiro.",
      icon: CheckCircle2,
      color: "text-emerald-500 bg-emerald-50"
    },
    {
      title: "Envio de Lembretes Antecipados",
      desc: "Mensagens automáticas de reforço via WhatsApp reduzem as faltas e no-shows em até 90%, garantindo previsibilidade de faturamento à sua empresa.",
      icon: CheckCircle2,
      color: "text-emerald-500 bg-emerald-50"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100 antialiased" id="problema-solucao">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-extrabold tracking-widest uppercase text-brand-indigo bg-indigo-50 px-3 py-1 rounded-full">
            Dores Versus Solução
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Gerenciar agendamentos manualmente consome seu tempo e custa caro
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Se você ainda negocia horários pelo WhatsApp e confere depósitos de Pix um a um no aplicativo do banco, sua empresa está no ritmo antigo. Descubra o método WP Booking Cloud.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
          
          {/* Pain Points (The Problem) */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200/60 pb-4">
              <div className="h-10 w-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-800 leading-none">A Rotina Sem WP Booking Cloud</h3>
                <span className="text-xs text-red-500 font-semibold mt-1 inline-block">Manual, instável e ineficiente</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pains.map((pain, index) => {
                const Icon = pain.icon;
                return (
                  <div key={index} className="space-y-2 bg-white rounded-xl p-4 border border-slate-100 hover:shadow-xs transition-shadow">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-red-500 shrink-0" />
                      <h4 className="font-bold text-slate-800 text-sm leading-tight">{pain.title}</h4>
                    </div>
                    <p className="text-[11px] md:text-xs text-slate-400 font-medium leading-relaxed">
                      {pain.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solutions (The Cure, Powered by WP Booking Cloud) */}
          <div className="p-6 md:p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-6 relative overflow-hidden">
            {/* Visual accent background circle */}
            <div className="absolute -top-12 -right-12 h-36 w-36 bg-emerald-500/10 rounded-full blur-2xl" />

            <div className="flex items-center gap-3 border-b border-emerald-500/10 pb-4">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-800 leading-none">Com WP Booking Cloud</h3>
                <span className="text-xs text-emerald-600 font-semibold mt-1 inline-block">100% automático e rentável</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="space-y-2 bg-white/80 backdrop-blur-xs rounded-xl p-4 border border-emerald-500/10 hover:border-emerald-500/30 hover:shadow-xs transition-all">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-emerald-500 shrink-0" />
                      <h4 className="font-bold text-slate-800 text-sm leading-tight">{benefit.title}</h4>
                    </div>
                    <p className="text-[11px] md:text-xs text-slate-500 font-medium leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Transition Summary CTA Link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 font-medium inline-flex items-center gap-2 flex-wrap justify-center">
            Pronto para sair do ciclo manual? 
            <a 
              href="#como-funciona" 
              className="text-brand-green font-bold hover:underline inline-flex items-center gap-1.5"
            >
              Veja como colocar no seu site em 5 minutos <ArrowRight className="h-4 w-4" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
