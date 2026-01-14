import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Berapa lama website saya jadi?",
    a: "Website demo biasanya siap dalam 1-2 hari. Setelah deal, website akan online sepenuhnya dalam 3-7 hari kerja."
  },
  {
    q: "Apakah saya bisa membatalkan langganan?",
    a: "Bisa. Anda bebas membatalkan kapanpun. Kami akan memberikan ekspor data terakhir bisnis Anda dalam format Excel (Data Portability)."
  },
  {
    q: "Bagaimana jika saya ingin ganti harga atau foto produk?",
    a: "Anda punya jatah update konten gratis yang akan dilakukan oleh tim kami. Cukup chat admin, kami yang kerjakan. Atau Anda bisa pakai Admin Dashboard untuk melakukan update manual."
  },
  {
  q: "Bagaimana jika saya berhenti berlangganan? Apakah data saya hilang?",
  a: "Tidak. Kami sangat menjunjung tinggi integritas data. Jika Anda berhenti, kami akan memberikan ekspor seluruh data penting (daftar pelanggan, pesanan, produk) dalam format Excel agar Anda bisa menggunakannya di masa depan."
}
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12 tracking-tighter">PERTANYAAN UMUM</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-6 flex justify-between items-center bg-[#0a0a0a] text-left transition-colors hover:bg-[#111]"
              >
                <span className="text-gray-200 font-bold">{faq.q}</span>
                {active === i ? <Minus className="text-cyan-400" /> : <Plus className="text-gray-500" />}
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-black px-6 pb-6 text-gray-400 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;