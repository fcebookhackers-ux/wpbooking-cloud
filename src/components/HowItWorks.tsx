/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Download, Sparkles, Key, Play, Smartphone, Check, ArrowRight } from "lucide-react";

interface StepItem {
  number: number;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: React.ComponentType<any>;
  badgeText: string;
  mockupContent: React.ReactNode;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps: StepItem[] = [
    {
      number: 1,
      title: "Instale o plugin WordPress",
      shortDesc: "Baixe o arquivo .ZIP e instale em segundos.",
      detailedDesc: "Faça o upload simples do WP Booking Cloud do seu diretório de plugins do WordPress. A instalação não requer conhecimentos técnicos de programação e adiciona uma área nova e intuitiva de agendamentos nativa ao seu painel.",
      icon: Download,
      badgeText: "Em 1 Minuto",
      mockupContent: (
        <div className="bg-slate-900 rounded-2xl p-4.5 font-mono text-[11px] text-slate-300 space-y-3.5 border border-slate-800">
          <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="text-[9px] text-slate-500 ml-2">Painel WordPress - Plugins</span>
          </div>
          <div className="p-4 bg-slate-950 rounded-xl border border-dashed border-slate-800 text-center space-y-2">
            <Download className="h-8 w-8 text-indigo-400 mx-auto animate-bounce" />
            <p className="font-semibold text-white">wp-booking-cloud.zip</p>
            <p className="text-[10px] text-slate-500">Arraste e solte o arquivo ou selecione abaixo</p>
            <div className="inline-block px-3 py-1 bg-indigo-600 text-white rounded font-sans font-bold text-[10px] cursor-pointer hover:bg-indigo-500">
              Instalar Agora
            </div>
          </div>
          <p className="text-[10px] text-emerald-500 text-center">✓ Instalado e pronto para ativação</p>
        </div>
      )
    },
    {
      number: 2,
      title: "Ative o trial de 30 dias",
      shortDesc: "Experimente todos os recursos sem compromisso.",
      detailedDesc: "Com o seu trial elegível de 30 dias de infraestrutura gratuita, você consegue simular de ponta a ponta o agendamento em seu domínio WordPress, integrando com o seu próprio celular pessoal para testes práticos.",
      icon: Sparkles,
      badgeText: "Grátis",
      mockupContent: (
        <div className="bg-slate-900 rounded-2xl p-4.5 font-mono text-[11px] text-slate-300 space-y-3.5 border border-slate-800">
          <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="text-[9px] text-slate-500 ml-2">Ativação da Licença</span>
          </div>
          <div className="space-y-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="flex justify-between items-center bg-indigo-500/10 p-2 rounded border border-indigo-500/20 text-indigo-300 text-[10px]">
              <span>Plano Selecionado: Trial 30 Dias</span>
              <span className="font-bold text-emerald-400">R$ 0,00</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-400 font-sans">
              <p className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Suporte VIP em Português</p>
              <p className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Conexão WhatsApp Ilimitada</p>
            </div>
          </div>
          <div className="px-3.5 py-1 text-center font-bold text-emerald-400 font-sans uppercase text-[10px] tracking-wider rounded border border-emerald-500/20 bg-emerald-500/5">
            ✓ Ativo com Sucesso
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Gere seu token de segurança",
      shortDesc: "Provisionamento seguro e automático nos servidores.",
      detailedDesc: "Com o nosso ecossistema cloud, um token único e criptografado de comunicação é provisionado em conformidade total de privacidade. O token garante que as mensagens cheguem em frações de segundos aos seus clientes.",
      icon: Key,
      badgeText: "Automático",
      mockupContent: (
        <div className="bg-slate-900 rounded-2xl p-4.5 font-mono text-[11px] text-slate-300 space-y-3.5 border border-slate-800">
          <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="text-[9px] text-slate-500 ml-2">Geração de Par de Chaves</span>
          </div>
          <div className="space-y-2.5">
            <span className="text-[10px] text-slate-500">Ambiente de Operação Seguro:</span>
            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 space-y-1">
              <span className="block text-[8px] text-slate-500">WP_BOOKING_TOKEN=</span>
              <span className="text-emerald-400 text-[10px] select-all font-bold block overflow-ellipsis overflow-hidden">
                wbc_live_920fhs_748fjdka92ksm
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sincronizado com os servidores Zapfllow Cloud</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "Conecte o WhatsApp por QR Code",
      shortDesc: "Escaneie o QR Code no painel do WordPress.",
      detailedDesc: "Basta abrir o WhatsApp no seu smartphone, ir no menu de 'Aparelhos Conectados' e apontar para o QR Code exibido em destaque no seu painel administrativo WordPress. Conecta em menos de 10 segundos.",
      icon: Smartphone,
      badgeText: "Sem API Paga",
      mockupContent: (
        <div className="bg-slate-900 rounded-2xl p-4.5 font-mono text-[11px] text-slate-300 space-y-3 border border-slate-800">
          <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="text-[9px] text-slate-500 ml-2">Painel WP - Conexão WhatsApp</span>
          </div>
          <div className="flex items-center gap-4.5 bg-slate-950 p-3 rounded-lg border border-slate-800/80">
            {/* Visual dummy barcode representation */}
            <div className="h-14 w-14 bg-white rounded p-1 flex-shrink-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-0.5 w-full h-full">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className={`rounded-xs ${i % 3 === 0 ? 'bg-black' : 'bg-transparent'}`} />
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-white text-[10px]">Escanear QR Code</p>
              <p className="text-[9px] text-slate-400">Acesse Aparelhos Conectados de seu app WhatsApp.</p>
              <span className="text-[9px] text-emerald-400 font-semibold mt-0.5 block">⚡ Aguardando Leitura</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "Comece a faturar!",
      shortDesc: "Sua agenda funciona 24/7 de forma automática.",
      detailedDesc: "Os clientes passam a ver as vagas disponíveis no seu site. Ao escolherem e pagarem por Pix, os agendamentos são salvos automaticamente no WordPress, com envio instantâneo de todas as notificações.",
      icon: Check,
      badgeText: "Pronto!",
      mockupContent: (
        <div className="bg-slate-900 rounded-2xl p-4.5 font-mono text-[11px] text-slate-300 space-y-3.5 border border-slate-800">
          <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="text-[9px] text-slate-500 ml-2">Monitoramento de Vendas</span>
          </div>
          <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded border border-emerald-500/20 text-center space-y-1">
            <span className="text-[8px] uppercase tracking-widest font-bold">Total Recebido Hoje</span>
            <p className="text-xl font-bold font-sans">R$ 1.280,00</p>
            <span className="text-[9px] text-slate-400 tracking-wide font-sans">✓ 14 Agendamentos realizados</span>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-450 bg-slate-950 p-2.5 rounded border border-slate-800">
            <span>Ultima Venda: Barbearia Clássica</span>
            <span className="text-emerald-400 font-bold">Compensado Pix</span>
          </div>
        </div>
      )
    }
  ];

  const activeStepItem = steps.find(s => s.number === activeStep) || steps[0];
  const ActiveIcon = activeStepItem.icon;

  return (
    <section className="py-20 bg-white border-b border-slate-100 antialiased" id="como-funciona">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-extrabold tracking-widest uppercase text-brand-indigo bg-indigo-50 px-3 py-1 rounded-full">
            Passo a Passo
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Veja como ativar em até 5 minutos
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Sem processos de setup demorados ou configurações impossíveis de infraestrutura. Veja como é simples ligar o plugin WP Booking Cloud à sua ferramenta de trabalho diário.
          </p>
        </div>

        {/* Step Selector Grid & Interactive Display combo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 items-start">
          
          {/* List of Steps (Interactive column) */}
          <div className="lg:col-span-7 space-y-3">
            {steps.map((step) => {
              const StepIcon = step.icon;
              const isActive = step.number === activeStep;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green/20 ${
                    isActive 
                      ? "bg-slate-900 text-white border-slate-800 shadow-lg" 
                      : "bg-slate-50 text-slate-800 hover:bg-slate-100 border-slate-100"
                  }`}
                >
                  {/* Step Code Circle */}
                  <div className={`h-8.5 w-8.5 shrink-0 rounded-full flex items-center justify-center font-mono text-xs font-black ${
                    isActive ? "bg-brand-green text-white" : "bg-slate-200 text-slate-700"
                  }`}>
                    {step.number}
                  </div>
                  
                  {/* Text Description inside button */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <h3 className={`font-extrabold text-sm md:text-base leading-tight ${isActive ? "text-white" : "text-slate-900"}`}>
                        {step.title}
                      </h3>
                      <span className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        isActive ? "bg-slate-800 text-emerald-400" : "bg-slate-200/60 text-slate-600"
                      }`}>
                        {step.badgeText}
                      </span>
                    </div>
                    <p className={`text-[11px] md:text-xs leading-relaxed ${isActive ? "text-slate-405 text-slate-350" : "text-slate-450 text-slate-500"}`}>
                      {step.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Visual Preview (Show details with layout) */}
          <div className="lg:col-span-5 bg-[#fafbfd] border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-brand-green">
                <div className="h-8.5 w-8.5 rounded-xl bg-slate-100 border border-slate-200 text-brand-indigo flex items-center justify-center">
                  <ActiveIcon className="h-4.5 w-4.5 shrink-0" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Passo {activeStepItem.number} de 5</span>
              </div>
              
              <h3 className="text-lg font-extrabold text-slate-905 leading-tight">
                {activeStepItem.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {activeStepItem.detailedDesc}
              </p>
            </div>

            {/* Simulated Live View */}
            <div className="pt-2">
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2.5">Simulação Visual:</span>
              {activeStepItem.mockupContent}
            </div>

            {/* Progress indicators with control */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 text-xs">
              <span className="text-slate-400 font-medium">Interativo: teste os passos</span>
              <button 
                onClick={() => {
                  setActiveStep(prev => prev === 5 ? 1 : prev + 1);
                }} 
                className="text-brand-indigo font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Instrução Seguinte</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
