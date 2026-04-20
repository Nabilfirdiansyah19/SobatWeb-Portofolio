import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Zap, Rocket, Instagram, ExternalLink } from 'lucide-react';

const Program = () => {
  const benefits = [
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Biaya Komitmen Rendah",
      desc: "Cukup Rp 100.000 di awal untuk memulai pengerjaan website profesional Anda."
    },
    {
      icon: <CheckCircle2 className="text-cyan-400" size={24} />,
      title: "Bayar Seikhlasnya",
      desc: "Sisa pembayaran bebas Anda tentukan sendiri setelah 30 hari berdasarkan kepuasan Anda."
    },
    {
      icon: <Instagram className="text-pink-500" size={24} />,
      title: "Promosi Eksklusif",
      desc: "Kami bantu promosikan bisnis Anda di IG Story @sobatweb.id seminggu sekali selama 30 hari."
    }
  ];

  return (
    <section id="accelerator" className="py-24 bg-black px-6 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Sparkles size={12} /> Limited Slot Available
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
                SOBATWEB <br />
                <span className="text-cyan-500">ACCELERATOR.</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                Kami melihat potensi besar pada bisnis Anda. Program ini dirancang khusus untuk membantu bisnis terpilih naik kelas dengan Landing Page profesional tanpa hambatan biaya di awal.
              </p>

              <div className="space-y-6 mb-10">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1">{benefit.icon}</div>
                    <div>
                      <h4 className="text-white font-bold">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/6287888082449?text=Halo%20SobatWeb,%20saya%20tertarik%20dengan%20program%20Accelerator" 
                  className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-black text-sm hover:bg-cyan-400 transition-all flex items-center gap-2 uppercase tracking-widest"
                >
                  <Rocket size={18} /> Ambil Slot Sekarang
                </a>
                <a 
                  href="https://jecreative.vercel.app/" 
                  target="_blank" 
                  className="border border-white/10 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-white/5 transition-all flex items-center gap-2 uppercase tracking-widest"
                >
                  Lihat Contoh <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Pricing Card Side */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-[3rem]"
            >
              <div className="bg-[#0a0a0a] rounded-[2.9rem] p-10 md:p-14">
                <div className="text-center">
                  <p className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] mb-4">Special Offer</p>
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <span className="text-gray-600 line-through text-2xl">Rp 500k</span>
                    <span className="bg-red-500/10 text-red-500 text-[10px] px-2 py-1 rounded font-bold italic">-80% OFF</span>
                  </div>
                  <h3 className="text-6xl font-black text-white tracking-tighter mb-2">Rp 100k</h3>
                  <p className="text-cyan-400 font-bold italic mb-10 text-sm">Deployment via Vercel/Netlify (Free Hosting)</p>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Durasi Pengerjaan</span>
                    <span className="text-white font-bold">3-7 Hari Kerja</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Domain</span>
                    <span className="text-white font-bold">.vercel.app / .netlify.app</span>
                  </div>
                  
                  <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] text-gray-500 leading-relaxed text-center uppercase tracking-widest">
                    * Program ini khusus untuk Landing Page guna memaksimalkan kredibilitas bisnis Anda secara instan.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Program;