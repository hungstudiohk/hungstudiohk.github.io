
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative flex flex-col items-center justify-center">
        {/* Simplified Calligraphy Character Placeholder */}
        <span className="text-4xl font-light italic leading-none text-white select-none" style={{ fontFamily: "'Playfair Display', serif" }}>弘</span>
        {/* Red Brush Stroke Underline */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-rose-600 rounded-full blur-[0.5px] opacity-90 rotate-[-2deg]" />
      </div>
      <div className="flex flex-col border-l border-white/10 pl-4">
        <span className="text-lg font-bold tracking-[0.2em] leading-tight uppercase font-serif" style={{ WebkitTextStroke: '0.5px white', color: 'transparent' }}>
          Hung
        </span>
        <div className="w-full h-px bg-rose-600 my-0.5" />
        <span className="text-[10px] font-bold tracking-[0.4em] leading-tight uppercase text-white opacity-90">
          Studio
        </span>
      </div>
    </div>
  );
};

export default Logo;
