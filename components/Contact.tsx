import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id='contact' className='py-32 border-t border-white/5'>
            <div className='max-w-7xl mx-auto px-6 sm:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-start'>
                    <div>
                        <span className='text-[10px] font-bold tracking-[0.5em] text-rose-500 uppercase block mb-6'>
                            Inquiry
                        </span>
                        <h2 className='text-5xl md:text-6xl lg:text-7xl font-light font-serif mb-10 leading-tight'>
                            Begin your <span className='italic'>journey</span>.
                        </h2>
                        <p className='text-neutral-500 text-lg mb-16 leading-relaxed max-w-md'>
                            We take on a limited number of projects each year to maintain our
                            standard of excellence. Share your vision with us.
                        </p>

                        <div className='space-y-10'>
                            <div className='flex items-center gap-6'>
                                <Mail className='w-5 h-5 text-rose-500' />
                                <div>
                                    <div className='text-[9px] font-bold text-neutral-600 uppercase tracking-[0.3em] mb-1'>
                                        Direct Communication
                                    </div>
                                    <div className='text-xl font-light font-serif'>
                                        hello@hung-studio.com
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-6'>
                                <MapPin className='w-5 h-5 text-rose-500' />
                                <div>
                                    <div className='text-[9px] font-bold text-neutral-600 uppercase tracking-[0.3em] mb-1'>
                                        Studio Location
                                    </div>
                                    <div className='text-xl font-light font-serif'>Hong Kong</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        className='space-y-8 bg-neutral-900/20 p-12 border border-white/5 rounded-none'
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className='space-y-2 group'>
                            <label className='text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1 group-focus-within:text-rose-500 transition-colors'>
                                Client Name
                            </label>
                            <input
                                type='text'
                                className='w-full bg-transparent border-b border-white/10 py-4 focus:border-rose-600 outline-none transition-all placeholder:text-neutral-700 font-light'
                                placeholder='Jane Smith'
                            />
                        </div>
                        <div className='space-y-2 group'>
                            <label className='text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1 group-focus-within:text-rose-500 transition-colors'>
                                Professional Email
                            </label>
                            <input
                                type='email'
                                className='w-full bg-transparent border-b border-white/10 py-4 focus:border-rose-600 outline-none transition-all placeholder:text-neutral-700 font-light'
                                placeholder='jane@brand.com'
                            />
                        </div>
                        <div className='space-y-2 group'>
                            <label className='text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1 group-focus-within:text-rose-500 transition-colors'>
                                Project Brief
                            </label>
                            <textarea
                                className='w-full bg-transparent border-b border-white/10 py-4 h-32 focus:border-rose-600 outline-none transition-all resize-none placeholder:text-neutral-700 font-light'
                                placeholder='Describe your objectives...'
                            />
                        </div>
                        <button className='w-full py-6 bg-white text-black text-xs font-bold tracking-[0.3em] uppercase hover:bg-rose-600 hover:text-white transition-all active:scale-[0.98]'>
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
