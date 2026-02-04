
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: '2021', projects: 12 },
  { name: '2022', projects: 28 },
  { name: '2023', projects: 42 },
  { name: '2024', projects: 65 },
];

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 font-serif leading-tight">
              A standard of <span className="italic">precision</span> since day one.
            </h2>
            <p className="text-neutral-500 text-lg mb-10 leading-relaxed">
              Our growth is driven by a singular commitment to quality over quantity. We partner with select clients to ensure every pixel and line of code is impeccable.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-5xl font-light font-serif mb-2">98%</div>
                <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Retention Rate</div>
              </div>
              <div>
                <div className="text-5xl font-light font-serif mb-2">150+</div>
                <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Deliverables</div>
              </div>
            </div>
          </div>
          
          <div className="h-72 glass-card p-10 rounded-none border-l-4 border-rose-600 relative overflow-hidden">
             <div className="absolute top-6 right-8">
                <div className="text-[9px] font-bold text-rose-500 uppercase tracking-[0.4em]">Volume Index</div>
             </div>
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#404040', fontSize: 10, fontWeight: 700}} />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.02)'}}
                    contentStyle={{backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '0px', padding: '12px'}}
                  />
                  <Bar dataKey="projects" radius={0}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 3 ? '#e11d48' : '#262626'} />
                    ))}
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
