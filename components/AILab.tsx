
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Rocket, Code, CheckCircle2 } from 'lucide-react';
import { generateAppRoadmap } from '../services/geminiService';
import { RoadmapResponse } from '../types';

const AILab: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<RoadmapResponse | null>(null);

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    try {
      const result = await generateAppRoadmap(idea);
      setRoadmap(result);
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Section redesigned to align with the minimalist neutral and rose theme of Hung Studio.
    <section id="ailab" className="py-32 relative overflow-hidden bg-neutral-950">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Feature Lab</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light font-serif mb-8 leading-tight">
              Project <span className="italic">Roadmapping</span>.
            </h2>
            <p className="text-neutral-500 text-lg mb-10 leading-relaxed max-w-lg">
              Unlock a professional blueprint for your vision. Our bespoke AI engine generates instant technical architectures using the same standards as Hung Studio's senior engineers.
            </p>

            <div className="relative group">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Ex: I want to build a real-time health tracking app for athletes..."
                className="w-full bg-neutral-900/30 border border-white/5 rounded-none p-8 h-48 focus:border-rose-600 outline-none transition-all placeholder:text-neutral-700 text-white resize-none font-light"
              />
              <button
                onClick={handleGenerate}
                disabled={loading || !idea}
                className="absolute bottom-6 right-6 p-4 bg-white text-black hover:bg-rose-600 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <div className="min-h-[600px]">
            {roadmap ? (
              <div className="bg-neutral-900/20 border border-white/5 p-10 animate-in fade-in slide-in-from-right-10 duration-700">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-px bg-rose-600" />
                  <h3 className="text-2xl font-light font-serif">Technical Blueprint</h3>
                </div>
                
                <div className="space-y-12">
                  <section>
                    <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] mb-4">Strategic Overview</h4>
                    <p className="text-neutral-400 leading-relaxed font-light">{roadmap.overview}</p>
                  </section>

                  <section>
                    <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] mb-4">Recommended Architecture</h4>
                    <div className="flex flex-wrap gap-3">
                      {roadmap.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/10 text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] mb-4">Development Milestones</h4>
                    <div className="space-y-6">
                      {roadmap.milestones.map((m, i) => (
                        <div key={i} className="flex gap-6 group">
                          <div className="mt-1 transition-colors group-hover:text-rose-500">
                            <CheckCircle2 className="w-5 h-5 text-neutral-700 group-hover:text-rose-500 transition-colors" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-neutral-200 uppercase tracking-wider mb-1">{m.phase}</div>
                            <div className="text-sm text-neutral-500 leading-relaxed">{m.details}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-rose-500/5 border-l-2 border-rose-600 p-8">
                    <div className="flex items-center gap-3 text-rose-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                      <Sparkles className="w-4 h-4" />
                      AI Lab Recommendation
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed italic font-serif">
                      "{roadmap.aiRecommendation}"
                    </p>
                  </section>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-16 border border-dashed border-white/5 opacity-40">
                <div className="w-24 h-24 rounded-none bg-neutral-900 flex items-center justify-center mb-8 border border-white/5">
                  <Code className="w-10 h-10 text-neutral-700" />
                </div>
                <h3 className="text-[11px] font-bold text-neutral-500 uppercase tracking-[0.4em] mb-4">System Initializing</h3>
                <p className="text-neutral-600 text-sm max-w-xs leading-relaxed">
                  Provide your concept to generate a precision-engineered development strategy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILab;
