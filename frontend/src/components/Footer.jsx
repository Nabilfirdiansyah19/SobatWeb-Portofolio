import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 bg-black border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <h2 className="text-3xl font-black text-white tracking-tighter mb-4 italic">SOBATWEB</h2>
          <p className="text-gray-500 text-sm font-light leading-loose">
            Membantu UMKM Indonesia naik kelas melalui Digital Identity yang profesional, terjangkau, dan tanpa ribet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-6">Hubungi Kami</h4>
            <div className="space-y-6">
              <a href="https://wa.me/6287888082449" className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition">
                  <MessageSquare size={18} />
                </div>
                <div className="text-sm font-bold">0878-8808-2449 (Admin 1)</div>
              </a>
              <a href="tel:081319878831" className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition">
                  <MessageSquare size={18} />
                </div>
                <div className="text-sm font-bold">0813-1987-8831 (Admin 2)</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 text-center text-[10px] text-gray-700 font-bold uppercase tracking-widest">
        &copy; 2025 SobatWeb - Digital Identity Agency. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;