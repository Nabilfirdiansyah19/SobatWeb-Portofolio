import React from 'react';
import { motion } from 'framer-motion';
import hotelResImg from '../images/hotelRes.png';
import coffeeShopImg from '../images/coffeeShop.png';
import berkahImg from '../images/berkahCatering.png';
import ranImg from '../images/ranKaroseri.jpeg';
import undanganImg from '../images/undanganPernikahan.jpeg';
import suitpalace from '../images/suitpalace.png';

const projects = [
  { id: 1, title: "HotelRes", category: "Booking System", img: hotelResImg },
  { id: 2, title: "Coffee Shop", category: "Food & Beverage", img: coffeeShopImg },
  { id: 3, title: "Berkah Catering", category: "Food & Beverage", img: berkahImg },
  { id: 4, title: "Ran Karoseri", category: "Service", img: ranImg },
  { id: 5, title: "Undangan Pernikahan", category: "Undangan Digital", img: undanganImg },
  { id: 6, title: "Suit Palace", category: "Service & Rental", img: suitpalace }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="text-left">
            <h2 className="text-4xl font-black text-white tracking-tighter">PROJECT SHOWCASE</h2>
            <p className="text-gray-500 mt-2 font-light text-lg italic">Preview landing page kami.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-900 border border-white/10"
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <p className="text-cyan-400 text-[10px] font-black uppercase tracking-widest">{project.category}</p>
                <h4 className="text-white font-bold text-xl">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;