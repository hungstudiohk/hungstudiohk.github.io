
import React from 'react';
import { Smartphone, Monitor, Shield, Layers, PenTool, Database } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile Engineering',
    desc: 'High-performance iOS & Android experiences designed for seamless interaction.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Visual Architecture',
    desc: 'Bespoke UI/UX frameworks that balance brand identity with intuitive usability.'
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Strategic Design',
    desc: 'Holistic product strategy focused on market positioning and long-term scalability.'
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'Web Experiences',
    desc: 'Next-generation web platforms that push the boundaries of modern browser tech.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Digital Security',
    desc: 'Advanced architectural safeguards to ensure data integrity and user trust.'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Core Systems',
    desc: 'Robust backend infrastructure engineered for zero-latency at enterprise scale.'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.5em] text-rose-500 uppercase block mb-4">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-light font-serif">Comprehensive <span className="italic">Solutions</span>.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="group">
              <div className="text-neutral-500 mb-6 group-hover:text-rose-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase text-neutral-200">{service.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                {service.desc}
              </p>
              <div className="mt-6 w-8 h-0.5 bg-white/5 group-hover:bg-rose-600 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
