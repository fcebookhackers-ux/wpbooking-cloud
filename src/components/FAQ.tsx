/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="py-20 bg-[#f8fafc] border-b border-slate-150 antialiased font-sans" id="faq-suporte">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-14">
          <span className="font-mono text-xs font-extrabold tracking-widest uppercase text-brand-green bg-emerald-50 px-3 py-1 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Tem alguma dúvida sobre hospedagem, infraestrutura do WhatsApp ou de pagamentos Pix? Encontre respostas rápidas abaixo.
          </p>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4" id="faq-accordion-group">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/70 overflow-hidden shadow-2xs hover:border-slate-300 transition-all duration-250"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-5.5 py-4.5 sm:px-6 sm:py-5 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="flex items-center gap-3 text-sm md:text-base leading-snug">
                    <HelpCircle className="h-4.5 w-4.5 text-slate-450 shrink-0 text-brand-indigo" />
                    {faq.question}
                  </span>
                  
                  {isOpen ? (
                    <ChevronUp className="h-4.5 w-4.5 text-slate-550 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4.5 w-4.5 text-slate-450 shrink-0" />
                  )}
                </button>

                {/* Animated expand/collapse box */}
                <div
                  id={`faq-answer-${idx}`}
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-80 opacity-100 border-t border-slate-100/50 bg-[#fafbfd]/40" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                  role="region"
                >
                  <div className="px-5.5 py-4.5 sm:px-6 sm:py-5 text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Support Mention */}
        <div className="mt-12 text-center p-5.5 bg-indigo-50/45 border border-indigo-100/40 rounded-2xl">
          <p className="text-xs text-slate-500 font-medium leading-snug">
            Ainda tem alguma pergunta específica sem resposta? Nossa equipe técnica está disponível para falar.
            <br />
            Mande uma mensagem para o e-mail: <strong className="text-brand-indigo">suporte@zapfllow.com.br</strong> ou fale no nosso WhatsApp!
          </p>
        </div>

      </div>
    </section>
  );
}
