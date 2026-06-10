import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Shield, HardDrive } from 'lucide-react';

const services = [
  { 
    icon: <Wallet size={40} />, 
    title: "Sistem DP 50%", 
    desc: "Mulai project Anda dengan aman cukup dengan DP 50%. Sisa pelunasan baru dibayarkan setelah website selesai kami bangun secara keseluruhan dan Anda telah me-review hasilnya." 
  },
  { 
    icon: <HardDrive size={40} />, 
    title: "Pelunasan Sebelum Deploy", 
    desc: "Website wajib dilunasi terlebih dahulu sebelum masuk ke tahap deployment. Kami baru akan memproses rilis, konfigurasi server, dan mengonlinekan website setelah pelunasan diterima." 
  },
  { 
    icon: <Shield size={40} />, 
    title: "Hanya Biaya Tahunan", 
    desc: "Setelah website live, tidak ada biaya koding atau biaya langganan bulanan tersembunyi. Anda hanya perlu membayar biaya tahunan untuk perpanjangan domain & hosting saja agar web tetap online." 
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
            Kenapa Memilih Kami
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            ALUR & LAYANAN
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {services.map((item, i) => (
            <motion.div
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.2, duration: 0.6 }} 
              viewport={{ once: true }}
              className="p-12 rounded-[3rem] bg-[#080808] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-cyan-500 mb-8 flex justify-center md:justify-start">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;