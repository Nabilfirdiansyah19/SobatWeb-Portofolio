import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  FolderSync, 
  CalendarClock, 
  MailCheck, 
  Trash2, 
  ArrowRight, 
  CheckCircle,
  Zap,
  TableProperties
} from 'lucide-react';

const Automation = () => {
  const features = [
    {
      icon: <FolderSync className="text-cyan-400" size={32} />,
      title: "Auto-Drive",
      desc: "Begitu klien isi form, sistem otomatis buatkan folder Google Drive khusus atas nama klien. Rapi & Tanpa Manual."
    },
    {
      icon: <CalendarClock className="text-purple-400" size={32} />,
      title: "Auto-Calendar",
      desc: "Jadwal booking langsung nge-plot di Google Calendar lengkap dengan detail jam dan data klien."
    },
    {
      icon: <TableProperties className="text-emerald-400" size={32} />,
      title: "Auto-Sheets Database",
      desc: "Semua data masuk otomatis ke Google Sheets. Tersusun rapi, mudah difilter, dan siap jadi database bisnis Kakak."
    },
    {
      icon: <Trash2 className="text-red-400" size={32} />,
      title: "Smart Cleanup",
      desc: "Folder project otomatis terhapus dalam 14 hari. Drive tetap lega tanpa perlu beresin file lama."
    }
  ];

  const waLink = "https://wa.me/6287888082449?text=Halo%20SobatWeb,%20saya%20tertarik%20dengan%20Sistem%20Otomasi%20Remote%20Engine";

  return (
    <section id="automation" className="py-24 bg-black px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Cpu size={14} /> Efficiency Booster
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
                Remote <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Engine.</span>
              </h2>
              <p className="text-gray-400 mt-6 text-lg font-light leading-relaxed">
                Ubah cara kerja manual yang melelahkan jadi sistem otomatis. Cukup satu Google Form, biarkan "Asisten Digital" kami yang mengurus Drive dan Jadwal Kakak.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">Powered by</p>
              <div className="flex gap-4 items-center">
                <div className="text-white font-black text-xl tracking-tighter">Google Workspace</div>
                <div className="h-4 w-[1px] bg-white/20" />
                <div className="text-cyan-400 font-black text-xl tracking-tighter">SobatWeb</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing / Call to Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden p-8 md:p-12 rounded-[3rem] bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-white/10"
        >
          {/* Animated Glow in Box */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-500/30 transition-all duration-700" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4 justify-center lg:justify-start">
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Special Bundle</h3>
                <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Sekali Bayar</span>
              </div>
              <p className="text-gray-300 text-lg mb-0">Hanya <span className="text-white font-black">Rp 320.000</span> untuk sistem otomasi saja.</p>
              <div className="flex items-center gap-3 mt-2 text-yellow-500 font-bold italic text-sm justify-center lg:justify-start">
                <Zap size={16} fill="currentColor" /> Upgrade ke Landing Page + Otomasi: Rp 400.000
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a 
                href={waLink}
                className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-xl shadow-white/5"
              >
                Ambil Sistem Ini <ArrowRight size={18} />
              </a>
              <div className="flex flex-col items-center justify-center px-6">
                <div className="flex gap-1 mb-1">
                  {[...Array(0)].map((_, i) => <CheckCircle key={i} size={12} className="text-cyan-400 fill-cyan-400/20" />)}
                </div>
              
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile-Friendly Process Step */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Input Form', 'Create Folder', 'Plot Calendar', 'Sheets Saved'].map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  className="h-full bg-cyan-500/50"
                />
              </div>
              <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automation;