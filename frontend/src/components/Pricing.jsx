import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Globe, Layout, ArrowRight } from 'lucide-react';

const Pricing = () => {
  // State untuk melacak tipe domain yang dipilih di masing-masing paket
  const [lpDomain, setLpDomain] = useState('com');
  const [dashDomain, setDashDomain] = useState('com');

  const waLink = "https://wa.me/6287888082449?text=";

  // Data Paket 1: Landing Page Only
  const lpPricing = {
    'myid': { total: 'Rp 650.000', renew: 'Rp 100.000/tahun', label: '.my.id' },
    'com': { total: 'Rp 980.000', renew: 'Rp 250.000/tahun', label: '.com' },
    'id': { total: 'Rp 1.050.000', renew: 'Rp 300.000/tahun', label: '.id' }
  };

  // Data Paket 2: Landing Page + Dashboard
  const dashPricing = {
    'myid': { total: 'Rp 2.140.000', renew: 'Rp 540.000/tahun', label: '.my.id' },
    'com': { total: 'Rp2.270.000', renew: 'Rp 670.000/tahun', label: '.com' },
    'id': { total: 'Rp2.770.000', renew: 'Rp 770.000/tahun', label: '.id' }
  };

  const handleOrder = (packageName, domainType) => {
    const text = `Halo SobatWeb, saya tertarik untuk memesan ${packageName} dengan ekstensi domain ${domainType}.`;
    window.open(`${waLink}${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">Skema Harga</h2>
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-cyan-400 text-sm font-medium">
            <Info size={16} className="shrink-0" /> Hak Milik Penuh.
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          
          {/* PAKET 1: LANDING PAGE ONLY */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#0f0f0f] border border-white/10 flex flex-col justify-between h-full hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/5 rounded-2xl text-white">
                  <Layout size={24} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase">Landing Page</h3>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Solusi Branding Standar</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Cocok untuk company profile, portofolio, atau produk tunggal yang membutuhkan konversi tinggi dan impresi profesional.
              </p>

              {/* Selector Tipe Domain */}
              <div className="mb-6">
                <label className="text-gray-500 text-[10px] uppercase font-black tracking-widest block mb-3">Pilih Ekstensi Domain:</label>
                <div className="grid grid-cols-3 gap-2 bg-black p-1.5 rounded-xl border border-white/5">
                  {Object.keys(lpPricing).map((key) => (
                    <button
                      key={key}
                      onClick={() => setLpDomain(key)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all uppercase tracking-wider ${
                        lpDomain === key 
                          ? 'bg-white text-black shadow-lg' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {lpPricing[key].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tampilan Harga Dinamis */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Total Biaya :</p>
                <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                  {lpPricing[lpDomain].total}
                </h4>
                <div className="flex justify-between items-center pt-3 border-t border-white/10 text-xs">
                  <span className="text-gray-400">Perpanjangan Tahun Berikutnya:</span>
                  <span className="text-white font-bold">{lpPricing[lpDomain].renew}</span>
                </div>
              </div>

              {/* Fitur Utama */}
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-gray-300 text-sm font-medium">
                  <Check size={18} className="text-emerald-500 shrink-0" /> Free Hosting Selamanya
                </li>
                <li className="flex gap-3 text-gray-300 text-sm font-medium">
                  <Check size={18} className="text-emerald-500 shrink-0" /> Free Domain Terpilih (1 Tahun)
                </li>
                <li className="flex gap-3 text-gray-300 text-sm">
                  <Check size={18} className="text-cyan-500 shrink-0" /> Desain Responsif & Mobile-Friendly
                </li>
                <li className="flex gap-3 text-gray-300 text-sm">
                  <Check size={18} className="text-cyan-500 shrink-0" /> Integrasi Tombol WhatsApp Chat
                </li>
                <li className="flex gap-3 text-gray-300 text-sm italic text-gray-400">
                  <Check size={18} className="text-cyan-500 shrink-0" /> Free Interactive FAQ Section
                </li>
              </ul>
            </div>

            <button 
              onClick={() => handleOrder('Landing Page Only', lpPricing[lpDomain].label)}
              className="w-full flex items-center justify-center gap-2 border-2 border-white/10 text-white py-4 rounded-2xl font-black text-sm hover:bg-white hover:text-black transition-all uppercase tracking-widest mt-4"
            >
              Pesan Paket Ini <ArrowRight size={16} />
            </button>
          </div>

          {/* PAKET 2: LANDING PAGE + DASHBOARD */}
          <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-cyan-950/30 to-black border-2 border-cyan-500 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] flex flex-col justify-between h-full">
            <div className="absolute -top-5 left-10 bg-cyan-500 text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Paling Direkomendasikan</div>
            
            <div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase">Landing Page + Dashboard</h3>
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Sistem Manajemen & Konten</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Dilengkapi halaman Admin Dashboard dinamis untuk mengelola konten web, rekap data client, database, secara mandiri tanpa coding.
              </p>

              {/* Selector Tipe Domain */}
              <div className="mb-6">
                <label className="text-cyan-400/70 text-[10px] uppercase font-black tracking-widest block mb-3">Pilih Ekstensi Domain:</label>
                <div className="grid grid-cols-3 gap-2 bg-black p-1.5 rounded-xl border border-cyan-500/20">
                  {Object.keys(dashPricing).map((key) => (
                    <button
                      key={key}
                      onClick={() => setDashDomain(key)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all uppercase tracking-wider ${
                        dashDomain === key 
                          ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' 
                          : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5'
                      }`}
                    >
                      {dashPricing[key].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tampilan Harga Dinamis */}
              <div className="bg-cyan-950/40 p-6 rounded-2xl border border-cyan-500/20 mb-8">
                <p className="text-cyan-400/80 text-[10px] uppercase font-bold tracking-widest mb-1">Total Biaya :</p>
                <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                  {dashPricing[dashDomain].total}
                </h4>
                <div className="flex justify-between items-center pt-3 border-t border-white/10 text-xs">
                  <span className="text-gray-400">Perpanjangan Tahun Berikutnya:</span>
                  <span className="text-white font-bold">{dashPricing[dashDomain].renew}</span>
                </div>
              </div>

              {/* Fitur Utama */}
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-gray-300 text-sm font-semibold text-cyan-300">
                  <Check size={18} className="text-cyan-400 shrink-0" /> Free Hosting Terintegrasi (1 Tahun)
                </li>
                <li className="flex gap-3 text-gray-300 text-sm font-semibold text-cyan-300">
                  <Check size={18} className="text-cyan-400 shrink-0" /> Free Domain Terpilih (1 Tahun)
                </li>
                <li className="flex gap-3 text-gray-300 text-sm">
                  <Check size={18} className="text-cyan-500 shrink-0" /> Sistem Admin Dashboard Berbasis Web
                </li>
                <li className="flex gap-3 text-gray-300 text-sm">
                  <Check size={18} className="text-cyan-500 shrink-0" /> Backup Data Perbulan
                </li>
                <li className="flex gap-3 text-gray-300 text-sm">
                  <Check size={18} className="text-cyan-500 shrink-0" /> Prioritas Support Penuh SobatWeb
                </li>
              </ul>
            </div>

            <button 
              onClick={() => handleOrder('Landing Page + Dashboard', dashPricing[dashDomain].label)}
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 text-black py-4 rounded-2xl font-black text-sm hover:bg-cyan-400 transition-all uppercase tracking-widest mt-4 shadow-lg shadow-cyan-500/10"
            >
              Pesan Paket Ini <ArrowRight size={16} />
            </button>
          </div>

        </div>
        
        {/* Footer info */}
        <div className="mt-16 text-center text-gray-700 text-[10px] font-bold uppercase tracking-[0.2em]">
          * seluruh sistem & infrastruktur dimonitor penuh oleh tim SobatWeb
        </div>
      </div>
    </section>
  );
};

export default Pricing;