import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black opacity-50" />
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            Digital Identity Agency
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]"
        >
          WEBSITE AS <br /> <span className="text-cyan-500">A SERVICE.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed"
        >
          Solusi "Terima Beres" untuk UMKM. Kami buatkan, kami kelola, Anda fokus jualan. Tanpa biaya koding jutaan di depan.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <a href="#pricing" className="group flex items-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-cyan-400 transition-all">
            Lihat Paket <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;