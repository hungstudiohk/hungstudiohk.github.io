import React from 'react';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className='pt-32 pb-12'>
            <div className='max-w-7xl mx-auto px-6 sm:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-20 mb-24'>
                    <div className='md:col-span-2'>
                        <a href='#hero'>
                            {/* <Logo className="h-10 mb-8 cursor-pointer" /> */}
                            <img src='/logo.png' className='h-20 mb-8 cursor-pointer' />
                        </a>
                        <p className='text-neutral-600 max-w-sm mb-10 leading-relaxed text-sm'>
                            Artisan digital engineering and design for the discerning brand. Shaping
                            the future of software through precision and intent.
                        </p>
                        <div className='flex gap-6'>
                            {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href='#'
                                    className='text-neutral-700 hover:text-rose-500 transition-all'
                                >
                                    <Icon className='w-5 h-5' />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className='text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-8'>
                            Navigation
                        </h4>
                        <ul className='space-y-4 text-sm text-neutral-600'>
                            <li>
                                <a
                                    href='#portfolio'
                                    className='hover:text-rose-500 transition-colors'
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href='#hero' className='hover:text-rose-500 transition-colors'>
                                    Philosophy
                                </a>
                            </li>
                            <li>
                                <a href='#ailab' className='hover:text-rose-500 transition-colors'>
                                    AI Lab
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#contact'
                                    className='hover:text-rose-500 transition-colors'
                                >
                                    Inquiry
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-8'>
                            Connect
                        </h4>
                        <ul className='space-y-4 text-sm text-neutral-600'>
                            <li>hello@hung-studio.com</li>
                            <li>Unit A2, 19/F, Max Share Centre, 363-373 King's Road, NT, HKG</li>
                            <li className='text-rose-600 font-bold'>
                                <a href='#contact'>Schedule Consultation</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-700'>
                    <div>© 2026 Hung Studio — Crafted with Precision</div>
                    <div className='flex gap-12'>
                        <a href='#' className='hover:text-neutral-400 transition-colors'>
                            Privacy
                        </a>
                        <a href='#' className='hover:text-neutral-400 transition-colors'>
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
