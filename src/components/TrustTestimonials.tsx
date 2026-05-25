/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Clock, Star, MessageSquareCode, ShieldCheck, Heart } from "lucide-react";
import { TESTIMONIAL_DATA } from "../data";

export default function TrustTestimonials() {
  const indicators = [
    {
      title: "Setup em Minutos",
      desc: "Instale, cole seu token e conecte via QR code instantaneamente.",
      icon: Clock,
      color: "text-emerald-500 bg-emerald-50 border-emerald-100"
    },
    {
      title: "Suporte 100% em Português",
      desc: "Atendimento vip por WhatsApp e e-mail por nossa equipe brasileira.",
      icon: MessageSquareCode,
      color: "text-brand-indigo bg-indigo-50 border-indigo-100"
    },
    {
      title: "Atualizações Contínuas",
      desc: "Garantia de estabilidade junto às novas APIs e versões do WhatsApp.",
      icon: ShieldCheck,
      color: "text-rose-500 bg-rose-50 border-rose-100"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100 antialiased font-sans" id="depoimentos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Indicators Banner Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-16">
          {indicators.map((indicator, idx) => {
            const IconComponent = indicator.icon;
            return (
              <div 
                key={idx} 
                className="p-5.5 rounded-2xl border border-slate-200/60 bg-[#f8fafc] flex gap-4 items-start hover:shadow-sm hover:border-slate-300 transition-all"
              >
                <div className={`p-3 rounded-xl border ${indicator.color}`}>
                  <IconComponent className="h-5 w-5 stroke-[2]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-slate-800 leading-tight">
                    {indicator.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed font-medium">
                    {indicator.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Separator line with small icon */}
        <div className="relative flex items-center justify-center py-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-100" />
          </div>
          <div className="relative bg-white px-4 text-slate-300">
            <Heart className="h-5 w-5 text-rose-500 fill-current" />
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-10">
          <span className="font-mono text-xs font-extrabold tracking-widest uppercase text-brand-indigo bg-indigo-50 px-3 py-1 rounded-full">
            Prova Social
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Quem usa a nossa tecnologia, recomenda
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Pequenas empresas, agências, barbearias, clínicas médicas e estúdios economizam horas e evitam no-shows com o WP Booking Cloud diariamente.
          </p>
        </div>

        {/* Testimonials Grid Card list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {TESTIMONIAL_DATA.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-[#fafbfd] border border-slate-200/50 hover:border-slate-300/80 p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all relative"
            >
              {/* Star rating stars */}
              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, sIdx) => (
                    <Star key={sIdx} className="h-4.5 w-4.5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial body Content */}
                <p className="text-[12px] md:text-xs text-slate-600 leading-relaxed italic font-medium">
                  "{t.content}"
                </p>
              </div>

              {/* Client Profile details */}
              <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-200/60 font-sans">
                <img 
                  src={t.avatarUrl} 
                  alt={`Foto de ${t.name}`}
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 rounded-full object-cover border border-slate-100 text-xs text-slate-400 shrink-0" 
                />
                <div>
                  <span className="block text-xs font-extrabold text-slate-800 leading-none">{t.name}</span>
                  <span className="block text-[10px] text-slate-500 font-medium mt-1 leading-none">
                    {t.role} — <span className="text-brand-indigo font-bold">{t.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full text-xs font-semibold text-slate-700">
            <Award className="h-4 w-4 text-brand-green" />
            <span>Garantia de 30 dias incondicional. Sem letras miúdas.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
