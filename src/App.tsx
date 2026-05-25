/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Calendar, CheckCircle2, Menu, Sparkles, X, Heart } from "lucide-react";
import { TrackingEvent } from "./types";

// Import custom sub-components
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import TrustTestimonials from "./components/TrustTestimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import TrackingNotification from "./components/TrackingNotification";

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [trialCtaSource, setTrialCtaSource] = useState("");
  const [trackingEvents, setTrackingEvents] = useState<TrackingEvent[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for dark header transition effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTrackEvent = (eventName: string, metadata?: Record<string, any>) => {
    const newEvent: TrackingEvent = {
      eventName,
      timestamp: new Date().toISOString(),
      metadata: metadata || {}
    };
    
    // Log in devtools for technical auditing
    console.log(`[Zapfllow Analítico / Pixel] evento: ${eventName}`, metadata);
    
    // Save to local active state logs
    setTrackingEvents(prev => [...prev, newEvent]);
  };

  const openTrialModal = (source: string) => {
    setTrialCtaSource(source);
    setIsTrialModalOpen(true);
    handleTrackEvent("open_trial_modal", { source });
  };

  const handleClearEvents = () => {
    setTrackingEvents([]);
  };

  const closeTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  const handleHeaderTrialClick = () => {
    handleTrackEvent("cta_header_trial", { location: "navigation_header" });
    setMobileMenuOpen(false);
    openTrialModal("header_cta_nav");
  };

  const handleNavClick = (sectionId: string, label: string) => {
    handleTrackEvent("nav_link_clicked", { label, target: sectionId });
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-brand-green/10 selection:text-brand-green-hover">
      
      {/* Sticky Navigation Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-45 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md shadow-xs border-b border-slate-200/50 py-3.5" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo Anchor */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("root", "home_brand");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 outline-none font-sans"
          >
            <div className="h-9 w-9 rounded-xl bg-brand-green flex items-center justify-center font-bold text-base text-white shadow-md shadow-brand-green/15 shrink-0">
              WP
            </div>
            <div>
              <span className="block font-display font-black text-slate-900 tracking-tight text-base sm:text-lg leading-none">
                WP Booking Cloud
              </span>
              <span className="text-[9px] text-slate-400 font-bold tracking-wider leading-none mt-0.5 block">
                ZAPFLLOW TECNOLOGIA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-600 uppercase tracking-widest leading-none">
            <button 
              onClick={() => handleNavClick("problema-solucao", "Dores")}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Solução
            </button>
            <button 
              onClick={() => handleNavClick("recursos", "Recursos")}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Recursos
            </button>
            <button 
              onClick={() => handleNavClick("como-funciona", "Como funciona")}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => handleNavClick("planos-precos", "Planos")}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Planos
            </button>
            <button 
              onClick={() => handleNavClick("depoimentos", "Depoimentos")}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Clientes
            </button>
            <button 
              onClick={() => handleNavClick("faq-suporte", "FAQ")}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Header Controls Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleHeaderTrialClick}
              id="cta_header_trial"
              className="px-5 py-2.5 bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-brand-green-hover transition-all shadow-sm cursor-pointer"
            >
              Criar Token Grátis
            </button>
          </div>

          {/* Mobile Hamburguer trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-1.5 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>

        {/* Mobile Fullscreen Panel menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[calc(100%+1px)] left-0 right-0 bg-white border-b border-slate-200 p-5 shadow-xl space-y-4 font-sans text-xs">
            <div className="grid grid-cols-2 gap-4 text-center font-bold text-slate-700 uppercase tracking-wider">
              <button 
                onClick={() => handleNavClick("problema-solucao", "Dores")}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
              >
                Solução
              </button>
              <button 
                onClick={() => handleNavClick("recursos", "Recursos")}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
              >
                Recursos
              </button>
              <button 
                onClick={() => handleNavClick("como-funciona", "Como funciona")}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => handleNavClick("planos-precos", "Planos")}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
              >
                Planos
              </button>
              <button 
                onClick={() => handleNavClick("depoimentos", "Depoimentos")}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
              >
                Clientes
              </button>
              <button 
                onClick={() => handleNavClick("faq-suporte", "FAQ")}
                className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                Suporte / FAQ
              </button>
            </div>
            
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={handleHeaderTrialClick}
                className="w-full text-center py-3.5 bg-brand-green text-white font-black uppercase tracking-wider rounded-xl hover:bg-brand-green-hover transition-all shadow-md focus:ring-2 focus:ring-brand-green/30"
              >
                Começar Teste de 30 dias
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Primary Layout Sections Wrapper */}
      <main className="flex-1">
        
        {/* 1) Hero Component */}
        <Hero 
          onOpenTrialModal={openTrialModal} 
          onTrackEvent={handleTrackEvent} 
        />

        {/* 2) Problema x Solução */}
        <ProblemSolution />

        {/* 3) Recursos do plugin */}
        <Features />

        {/* 4) Como funciona */}
        <HowItWorks />

        {/* 5) Planos e preços (Tabular Tier grid) */}
        <Pricing 
          onOpenTrialModal={openTrialModal} 
          onTrackEvent={handleTrackEvent} 
        />

        {/* 6) Indicadores e Prova Social (Testimonials) */}
        <TrustTestimonials />

        {/* 7) FAQ (dynamic Accordion with 8 required questions) */}
        <FAQ />

        {/* 8) CTA Final layout */}
        <FinalCTA 
          onOpenTrialModal={openTrialModal} 
          onTrackEvent={handleTrackEvent} 
        />

      </main>

      {/* 9) Footer Component */}
      <Footer onTrackEvent={handleTrackEvent} />

      {/* Floating Lead Generation Modal Dialog */}
      <LeadModal 
        isOpen={isTrialModalOpen} 
        onClose={closeTrialModal} 
        ctaSource={trialCtaSource}
        onTrackEvent={handleTrackEvent}
      />

      {/* Debug real-time Pixel Tracking overlay notifier console */}
      <TrackingNotification 
        events={trackingEvents} 
        onClear={handleClearEvents} 
      />

    </div>
  );
}

