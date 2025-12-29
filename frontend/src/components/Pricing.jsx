import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, ShieldCheck } from 'lucide-react';

const Pricing = () => {
  const features = [
    "Layanan Operasional & Maintenance",
    "Jatah Update Konten (2x per Bulan)",
    "Admin Dashboard terintegrasi Database",
    "Laporan Rekap Database (Bulanan) Excel",
    "Prioritas Support WhatsApp 1x24 Jam"
  ];

  const waLink = "https://wa.me/6287888082449?text=Halo%20SobatWeb,%20saya%20tertarik%20langganan%20Paket%20";

  return (
    <section id="pricing" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">SKEMA HARGA</h2>
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-cyan-400 text-sm">
            <Info size={16} /> Bayar Setup di bulan pertama, selanjutnya cukup iuran bulanan.
          </div>
          <p className="text-gray-500 mt-4 text-sm font-medium">Bebas batalkan kapanpun tanpa denda.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Paket A */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-[2.5rem] bg-gradient-to-b from-cyan-950/30 to-black border-2 border-cyan-500 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]"
          >
            <div className="absolute -top-5 left-10 bg-cyan-500 text-black px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Paling Populer</div>
            <h3 className="text-3xl font-black text-white mb-2 tracking-tighter">PAKET PROFESIONAL</h3>
            <p className="text-cyan-400 font-bold mb-8 italic">Domain .com</p>
            
            <div className="space-y-1 mb-8">
              <p className="text-gray-500 text-sm">Biaya Setup & Aktivasi:</p>
              <h4 className="text-2xl font-bold text-white tracking-tight">Rp 900.000</h4>
              <div className="h-[1px] bg-white/10 my-4" />
              <p className="text-gray-500 text-sm">Bulan ke-2 dst:</p>
              <h4 className="text-5xl font-black text-white tracking-tighter">Rp 350.000<span className="text-lg font-normal text-gray-500">/bln</span></h4>
            </div>

            <ul className="space-y-4 mb-10">
              {features.map((f, i) => (
                <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <Check size={18} className="text-cyan-500 shrink-0" /> {f}
                </li>
              ))}
              <li className="flex gap-3 text-cyan-400 text-sm font-bold">
                <Check size={18} className="shrink-0" /> Free Interactive FAQ
              </li>
            </ul>

            <a href={`${waLink}A`} className="block w-full text-center bg-cyan-500 text-black py-4 rounded-2xl font-black text-sm hover:bg-cyan-400 transition-all uppercase tracking-widest">Pilih Paket A</a>
          </motion.div>

          {/* Paket B */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-[#0f0f0f] border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            <h3 className="text-3xl font-black text-white mb-2 tracking-tighter text-gray-300">PAKET HEMAT</h3>
            <p className="text-gray-500 font-bold mb-8 italic">Domain .my.id</p>
            
            <div className="space-y-1 mb-8">
              <p className="text-gray-500 text-sm">Biaya Setup & Aktivasi:</p>
              <h4 className="text-2xl font-bold text-gray-300 tracking-tight">Rp 500.000</h4>
              <div className="h-[1px] bg-white/10 my-4" />
              <p className="text-gray-500 text-sm">Bulan ke-2 dst:</p>
              <h4 className="text-5xl font-black text-white tracking-tighter">Rp 295.000<span className="text-lg font-normal text-gray-500">/bln</span></h4>
            </div>

            <ul className="space-y-4 mb-10">
              {features.map((f, i) => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                  <Check size={18} className="text-gray-600 shrink-0" /> {f}
                </li>
              ))}
              <li className="flex gap-3 text-gray-400 text-sm font-bold">
                <Check size={18} className="shrink-0" /> Free Interactive FAQ
              </li>
            </ul>

            <a href={`${waLink}B`} className="block w-full text-center border-2 border-white/10 text-white py-4 rounded-2xl font-black text-sm hover:bg-white hover:text-black transition-all uppercase tracking-widest">Pilih Paket B</a>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center text-gray-600 text-sm italic">
          * Seluruh website dihosting di server berkecepatan tinggi & dipantau 24/7.
        </div>
      </div>
    </section>
  );
};

export default Pricing;