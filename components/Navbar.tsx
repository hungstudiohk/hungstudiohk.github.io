import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
    scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Lab', href: '#ailab' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-neutral-950/90 backdrop-blur-md border-b border-white/5 py-3'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className='max-w-7xl mx-auto px-6 sm:px-8'>
                <div className='flex justify-between items-center'>
                    <a href='#hero' className='flex items-center'>
                        {/* <Logo className='h-10' /> */}
                        <img src='/logo.png' className='h-10 cursor-pointer' />
                    </a>

                    <div className='hidden md:flex items-center gap-10'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors'
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href='#contact'
                            className='px-6 py-2 border border-white/20 hover:border-rose-600 hover:text-rose-500 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase transition-all'
                        >
                            Inquire
                        </a>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={() => setIsOpen(!isOpen)} className='text-neutral-400'>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden absolute top-full left-0 right-0 bg-neutral-900 border-b border-white/5 py-8 px-6 animate-in fade-in slide-in-from-top-4'>
                    <div className='flex flex-col gap-6'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='text-sm font-bold tracking-widest uppercase text-neutral-400'
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href='#contact'
                            className='w-full py-4 bg-rose-600 text-sm font-bold tracking-widest uppercase text-center'
                            onClick={() => setIsOpen(false)}
                        >
                            Start Project
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
