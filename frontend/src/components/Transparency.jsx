import React from 'react';
import { ShieldCheck, Database, Key } from 'lucide-react';

const Transparency = () => {
  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-black text-white tracking-tighter mb-16 uppercase">TRANSPARANSI & <span className="text-cyan-500">KEPEMILIKAN</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5">
            <Key className="text-cyan-500 mb-6" size={32} />
            <h3 className="text-white font-black text-lg uppercase tracking-tight mb-4">Aset Milik Anda</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Setelah pembayaran lunas, seluruh hak akses website sepenuhnya menjadi milik Anda.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5">
            <ShieldCheck className="text-cyan-500 mb-6" size={32} />
            <h3 className="text-white font-black text-lg uppercase tracking-tight mb-4">Managed Server</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Kami memastikan server Anda tetap menyala dan aman selama masa aktif domain masih berlaku tanpa biaya tambahan di tahun pertama.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5">
            <Database className="text-cyan-500 mb-6" size={32} />
            <h3 className="text-white font-black text-lg uppercase tracking-tight mb-4">Keamanan Data</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Seluruh database pelanggan Anda dienkripsi secara aman dan hanya dapat diakses oleh pemegang kunci admin dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;