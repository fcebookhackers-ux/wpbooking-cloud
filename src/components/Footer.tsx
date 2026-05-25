/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, Mail, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onTrackEvent: (eventName: string, metadata?: any) => void;
}

export default function Footer({ onTrackEvent }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (linkName: string, url: string) => {
    onTrackEvent("footer_link_clicked", { label: linkName, url });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans mt-auto" id="rodape">
      
      {/* Upper footer columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Bios */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8.5 w-8.5 rounded-lg bg-brand-green flex items-center justify-center font-bold text-sm text-white">
                WP
              </div>
              <span className="font-display font-black text-lg text-white tracking-tight">WP Booking Cloud</span>
            </div>
            
            <p className="text-xs text-slate-450 leading-relaxed font-medium">
              A melhor solução WordPress nacional para automação de agendas, confirmações via WhatsApp e faturamento instantâneo com Pix. Desenvolvido para pequenos negócios prosperarem sem taxas absurdas de intermediação externa.
            </p>

            <div className="flex items-center gap-3.5 text-xs">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Uma Tecnologia</span>
              <a 
                href="https://zapfllow.com.br"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleLinkClick("zapfllow_home", "https://zapfllow.com.br")}
                className="text-slate-200 hover:text-white font-extrabold hover:underline"
              >
                Zapfllow Tecnologia
              </a>
            </div>
          </div>

          {/* Links e Apoio */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-900 pb-2">
              Institucional & Suporte
            </h4>
            
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <a 
                  href="mailto:suporte@zapfllow.com.br"
                  onClick={() => handleLinkClick("email_contato", "mailto:suporte@zapfllow.com.br")}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>suporte@zapfllow.com.br</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://zapfllow.com.br"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleLinkClick("site_institucional", "https://zapfllow.com.br")}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Globe className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>https://zapfllow.com.br</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="h-4 w-4 text-brand-indigo shrink-0" />
                <span>Horário: Seg a Sex — 08h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-900 pb-2">
              Links Legais
            </h4>
            
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a 
                  href="#politica-privacidade"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("cookies_privacidade", "#privacidade");
                    alert("Aviso Legal local: Nosso plugin é 100% em conformidade com a LGPD. Os dados lidos de agenda residem exclusivamente em seu WordPress.");
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="#termos-uso"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("termos_uso", "#termos");
                    alert("Aviso de Termos local: Licenças do plugin faturadas anualmente concedem direito a suporte e atualizações pelo período contratado.");
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Termos de Uso de Licenças
                </a>
              </li>
              <li className="text-[10px] text-slate-500 pt-3 italic">
                Cnpj: 45.928.304/0001-90
                <br />
                Zapfllow Softwares LTDA.
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Extreme bottom ribbon */}
      <div className="bg-slate-950 border-t border-slate-900 py-6 text-center text-[11px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500">
            © {currentYear} WP Booking Cloud & <strong className="text-slate-405 font-bold">Zapfllow Tecnologia</strong>. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 flex items-center gap-1">
            Feito com <Heart className="h-3 w-3 text-rose-500 fill-current" /> no Brasil.
          </p>
        </div>
      </div>

    </footer>
  );
}
