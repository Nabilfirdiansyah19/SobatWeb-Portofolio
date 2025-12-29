import React from 'react';
import { motion } from 'framer-motion';
import { Eye, BadgePercent, Settings } from 'lucide-react';

const services = [
  { 
    icon: <Eye size={40} />, 
    title: "Visual First", 
    desc: "Kami buatkan demo website terlebih dahulu sebelum Anda membayar sepeser pun." 
  },
  { 
    icon: <BadgePercent size={40} />, 
    title: "Affordability", 
    desc: "Ubah biaya pengembangan jutaan rupiah menjadi langganan bulanan setara kopi harian." 
  },
  { 
    icon: <Settings size={40} />, 
    title: "Full Management", 
    desc: "Kami tangani hosting, keamanan, dan update konten. Anda tinggal duduk manis." 
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-10 rounded-4xl bg-[#0f0f0f] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group"
          >
            <div className="text-cyan-500 mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;