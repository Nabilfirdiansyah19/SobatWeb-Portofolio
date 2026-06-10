import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Bagaimana sistem pembayarannya di SobatWeb?",
    answer: "Kami menggunakan sistem DP 50% di awal untuk memulai proses pengerjaan website. Setelah website selesai dibangun dan Anda sudah mereview hasilnya, Anda melakukan pelunasan sisa 50%. Website baru akan dideploy ke hosting dan domain resmi setelah pelunasan diterima."
  },
  {
    question: "Apakah ini sistem langganan bulanan?",
    answer: "Tidak. Semua paket di SobatWeb menggunakan sistem Beli Putus (Sekali Bayar). Anda mendapatkan hak kepemilikan penuh atas website tersebut tanpa ada biaya koding atau biaya manajemen bulanan."
  },
  {
    question: "Berapa biaya perpanjangan di tahun berikutnya?",
    answer: "Di tahun pertama, hosting dan domain sudah gratis. Mulai tahun ke-2 dan seterusnya, Anda hanya cukup membayar biaya perpanjangan domain & hosting sesuai paket yang Anda pilih (mulai dari Rp 100rb - Rp 770rb per tahun)."
  },
  {
    question: "Berapa lama proses pembuatan websitenya?",
    answer: "Proses pengerjaan standar memakan waktu 3 hingga 7 hari kerja setelah aset seperti teks, logo, atau gambar yang dibutuhkan sudah kami terima."
  },
  {
    question: "Apakah saya bisa melakukan update konten sendiri nanti?",
    answer: "Bisa. Jika Anda memilih paket yang dilengkapi Dashboard Admin, Anda akan mendapatkan halaman panel khusus untuk mengubah teks, gambar, atau melihat rekap database secara mandiri tanpa perlu paham coding."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-black px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Pertanyaan Umum</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">FREQUENTLY ASKED Qs</h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-colors duration-300"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left text-white font-bold text-base md:text-lg uppercase tracking-tight hover:bg-white/[0.02] transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  <span className={`p-2 rounded-xl bg-white/5 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/[0.02]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;