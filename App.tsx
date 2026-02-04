
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import AILab from './components/AILab';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-rose-500/30 selection:text-rose-200">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Services />
        {/* <Portfolio /> */}
        {/* Added AILab section to the main landing page flow */}
        <AILab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
