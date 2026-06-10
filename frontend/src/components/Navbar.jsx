import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Harga", href: "#pricing" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-black text-2xl text-white tracking-tighter cursor-pointer">
          <Globe className="text-cyan-500" size={28} /> SOBATWEB
        </div>

        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#pricing" className="bg-cyan-500 text-black text-[10px] font-black py-3 px-8 rounded-full hover:bg-white transition-all uppercase tracking-[0.2em]">
            Mulai Project
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-b border-white/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-black text-white tracking-tighter">{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;