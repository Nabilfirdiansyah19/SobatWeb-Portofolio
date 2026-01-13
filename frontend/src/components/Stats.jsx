import React from 'react';

const Stats = () => {
  return (
    <div className="bg-black py-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Pengerjaan", val: "3-7 Hari" },
          { label: "Biaya Harian", val: "Rp 11rb-an" },
          { label: "Support", val: "24/7 Jam" },
          { label: "Sistem", val: "Terima Beres" },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-cyan-500 font-black text-2xl md:text-3xl tracking-tighter">{item.val}</p>
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;