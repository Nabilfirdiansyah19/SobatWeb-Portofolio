import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Showcase", href: "#gallery" },
    { name: "Harga", href: "#pricing" },
  ];

  // Fungsi untuk handle klik link di mobile
  const handleNavLinkClick = (e, href) => {
    setIsOpen(false); // Tutup menu mobile
    // Scroll halus ke target (opsional, karena browser modern sudah mendukung lewat CSS)
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-2xl text-white tracking-tighter cursor-pointer">
          <Globe className="text-cyan-400" /> SOBATWEB
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-cyan-400 transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="https://wa.me/6287888082449" className="bg-white text-black text-[10px] font-black py-2.5 px-6 rounded-full hover:bg-cyan-400 transition-all uppercase tracking-widest">
            KONSULTASI GRATIS
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2 outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }} // Buat full screen di HP agar elegan
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl fixed inset-0 top-20 z-[99] overflow-hidden"
          >
            <div className="flex flex-col items-center justify-start pt-12 p-6 gap-8">
              {navLinks.map((link) => (
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="text-3xl font-black text-gray-300 hover:text-cyan-400 transition tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full mt-4"
              >
                <a 
                  href="https://wa.me/6287888082449" 
                  className="block w-full bg-cyan-500 text-black text-center font-black py-5 rounded-2xl text-sm uppercase tracking-[0.2em]"
                >
                  Konsultasi Sekarang
                </a>
                <p className="text-center text-gray-600 text-[10px] mt-6 uppercase tracking-widest font-bold">
                  SobatWeb - Digital Agency
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;