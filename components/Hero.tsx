
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-neutral-900/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-rose-600" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500">Artisan Digital Studio</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-10 leading-[1] font-serif">
            Digital <span className="italic font-normal">Excellence</span><br />
            Hand-Crafted.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl leading-relaxed">
            Hung Studio is a boutique collective of designers and engineers. We transform complex visions into elegant, high-performance digital products for elite brands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#portfolio" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-rose-600 hover:text-white transition-all group flex items-center justify-center">
              View Collection
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition-all text-center">
              Our Philosophy
            </a>
          </div>
        </div>
      </div>

      {/* Vertical Side Text */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 vertical-text">
        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-neutral-700 select-none whitespace-nowrap rotate-90 origin-right">
          ESTABLISHED IN HONG KONG — MMXXIV
        </span>
      </div>
    </section>
  );
};

export default Hero;
