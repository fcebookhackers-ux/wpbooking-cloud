/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Check, Globe, Mail, Phone, User, Play, Sparkles, Loader2 } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaSource: string;
  onTrackEvent: (eventName: string, metadata: any) => void;
}

export default function LeadModal({ isOpen, onClose, ctaSource, onTrackEvent }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: ""
  });
  
  const [step, setStep] = useState<"form" | "provisioning" | "success">("form");
  const [provisionProgress, setProvisionProgress] = useState(0);
  const [generatedToken, setGeneratedToken] = useState("");

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track Lead Captured Event
    onTrackEvent("lead_captured", {
      ...formData,
      source: ctaSource,
      timestamp: new Date().toISOString()
    });

    // Start automated provisioning simulation
    setStep("provisioning");
    setProvisionProgress(10);

    const interval = setInterval(() => {
      setProvisionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setGeneratedToken(`wbc_live_${Math.random().toString(36).substr(2, 9)}_${Math.random().toString(36).substr(2, 9)}`);
          setStep("success");
          return 100;
        }
        return prev + 15;
      });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 antialiased">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" 
        onClick={onClose}
        id="modal-backdrop"
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all border border-slate-100"
        id="lead-capture-modal"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
          aria-label="Fechar modal"
        >
          <X className="h-5 w-5" />
        </button>

        {step === "form" && (
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 text-brand-green font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="h-4 w-4" />
              <span>Experimentar Sem Risco</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Inicie seu teste grátis de 30 dias
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Preencha os dados abaixo para autoprovisionar o plugin no WP e liberar sua conexão WhatsApp imediata.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-widest mb-1">
                  Seu Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: Carlos Andrade"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-widest mb-1">
                  WhatsApp com DDD
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Ex: (11) 99999-9999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-widest mb-1">
                  Seu Melhor E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Ex: carlos@empresa.com.br"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-widest mb-1 flex justify-between">
                  <span>Domínio do site WordPress</span>
                  <span className="text-slate-400 lowercase font-normal">opcional</span>
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="url"
                    name="website"
                    placeholder="Ex: https://meusite.com.br"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-lead-form"
                  className="w-full bg-brand-green text-white font-medium py-3 rounded-xl hover:bg-brand-green-hover transition-all shadow-md shadow-brand-green/20 hover:shadow-lg hover:shadow-brand-green/30 flex items-center justify-center gap-2 cursor-pointer focus:ring-2 focus:ring-brand-green/50 focus:ring-offset-2"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Autoprovisionar Token Grátis
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400 mt-2">
                Ao prosseguir, você concorda com nossos termos. Não enviamos spam. Seu trial de 30 dias não exige cartão de crédito inicial para instalação própria.
              </p>
            </form>
          </div>
        )}

        {step === "provisioning" && (
          <div className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]">
            <Loader2 className="h-12 w-12 text-brand-green animate-spin mb-4" />
            <h3 className="text-xl font-bold text-slate-800">Criando sua Infraestrutura...</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm">
              Criando instâncias, gerando credenciais seguras e configurando servidores webhooks em tempo real.
            </p>
            
            {/* Custom progress bar */}
            <div className="w-full bg-slate-100 rounded-full h-2 mt-6 max-w-xs overflow-hidden">
              <div 
                className="bg-brand-green h-full rounded-full transition-all duration-300"
                style={{ width: `${provisionProgress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-slate-400 mt-2">{provisionProgress}% concluído</span>
          </div>
        )}

        {step === "success" && (
          <div className="p-6 md:p-8 text-center">
            <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <Check className="h-6 w-6 stroke-[3]" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900">Infraestrutura Ativa!</h3>
            <p className="text-sm text-slate-500 mt-2">
              Olá, <strong className="text-slate-700">{formData.name}</strong>! Seu ambiente de homologação WP Booking Cloud foi provisionado com sucesso para teste de 30 dias.
            </p>

            {/* Token display box */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-left">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Seu Token de Ativação</span>
              <div className="mt-1 flex items-center justify-between gap-2">
                <code className="text-xs font-mono font-medium text-slate-700 select-all overflow-x-auto break-all bg-white px-2 py-1 rounded border border-slate-200 w-full block">
                  {generatedToken}
                </code>
              </div>
              <span className="block text-[10px] text-emerald-600 font-semibold mt-2">
                ✓ Pronto para colar nas configurações do WP Booking Cloud
              </span>
            </div>

            {/* Follow-up steps */}
            <div className="mt-6 text-left border-t border-slate-100 pt-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Próximos Passos rápidos:</h4>
              <div className="flex gap-3 text-xs text-slate-600">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-[10px] font-bold text-slate-700">1</div>
                <p>Enviamos as credenciais e o link para download do arquivo `.zip` para o e-mail: <strong>{formData.email}</strong></p>
              </div>
              <div className="flex gap-3 text-xs text-slate-600">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-[10px] font-bold text-slate-700">2</div>
                <p>Instale no seu WordPress e insira o Token gerado acima.</p>
              </div>
              <div className="flex gap-3 text-xs text-slate-600">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-[10px] font-bold text-slate-700">3</div>
                <p>Escaneie o QR Code e comece a automatizar seus agendamentos.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
              <a 
                href="https://pay.kiwify.com.br/VqZzmCs"
                target="_blank"
                rel="noreferrer"
                id="cta_modal_concluir_adesao"
                onClick={() => onTrackEvent("modal_upgrade_checkout_clicked", { plan: "plano_2" })}
                className="flex-1 bg-brand-green text-white text-xs font-medium py-3 rounded-lg hover:bg-brand-green-hover transition-all text-center block"
              >
                Garantir Infra Gerenciada (Plano 2)
              </a>
              <button
                onClick={onClose}
                className="flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-medium py-3 rounded-lg transition-all"
              >
                Fechar e Continuar Lendo
              </button>
            </div>
            
            <p className="text-[10px] text-slate-400 mt-3 text-center">
              Dúvidas adicionais? Fale com a equipe pelo e-mail: suporte@zapfllow.com.br
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
