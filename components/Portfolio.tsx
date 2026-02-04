
import React from 'react';

const projects = [
  {
    title: 'Lumina Health',
    category: 'Bio-Digital',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Vault Systems',
    category: 'Sovereign Finance',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Nexus Collective',
    category: 'Social Infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  },
  {
    title: 'Orbit Logistics',
    category: 'Spatial Computing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.5em] text-rose-500 uppercase block mb-4">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-light font-serif">Selected <span className="italic">Works</span></h2>
          </div>
          <button className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 hover:text-white transition-colors border-b border-white/10 pb-2">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 mb-8 rounded-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div>
                <div className="text-[9px] font-bold text-rose-500 uppercase tracking-[0.4em] mb-3">{project.category}</div>
                <h3 className="text-3xl font-light font-serif group-hover:text-rose-500 transition-colors duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
