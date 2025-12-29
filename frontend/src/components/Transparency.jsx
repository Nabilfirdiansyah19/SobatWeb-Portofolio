import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  LayoutDashboard, 
  FileText, 
  Database, 
  ShieldAlert, 
  Download, 
  ClipboardCheck 
} from 'lucide-react';

const Transparency = () => {
  const deliveryItems = [
    {
      icon: <Globe className="text-cyan-400" size={32} />,
      title: "Link Utama ",
      desc: "Domain resmi (misal: .com) yang siap digunakan untuk branding profesional dan link di bio media sosial Anda."
    },
    {
      icon: <LayoutDashboard className="text-cyan-400" size={32} />,
      title: "Akses Admin Dashboard",
     desc: "Halaman khusus untuk Anda mengelola toko. Tambah produk baru, ubah harga, atau hapus menu semudah mengisi formulir di HP."
    },
    {
      icon: <FileText className="text-cyan-400" size={32} />,
      title: "Panduan Penggunaan",
      desc: "PDF User Manual lengkap cara mengelola konten website Anda secara mandiri."
    }
  ];

  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* BAGIAN 1: APA YANG DITERIMA KLIEN */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
              TRANSPARANSI <span className="text-cyan-500">LAYANAN</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Kami memastikan setiap klien mendapatkan akses penuh terhadap hasil kerja kami untuk menunjang operasional bisnis harian Anda.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {deliveryItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-4xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BAGIAN 2: TANGGUNG JAWAB DATA */}
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 p-8 md:p-12 rounded-[2.5rem] bg-linear-to-br from-cyan-950/20 to-black border border-white/10"
        >
        <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-1/3">
            <div className="inline-block p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-6">
                <ClipboardCheck size={32} />
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">Pusat Data & Rekapitulasi</h3>
            </div>
            <div className="md:w-2/3">
            <p className="text-gray-400 leading-relaxed mb-6">
                Gunakan Admin Dashboard sebagai buku catatan digital bisnis Anda. Agar laporan bulanan yang kami kirimkan akurat, Anda dapat melakukan:
            </p>
            <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Pencatatan Mandiri:</strong> Setiap ada pesanan masuk (baik dari WhatsApp maupun pelanggan datang langsung), Anda bisa menginputnya ke Dashboard agar data tersimpan rapi.</span>
                </li>
                <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Batasan Layanan:</strong> Kami bertanggung jawab memastikan sistem Dashboard bisa diakses 24/7. Namun, validitas atau kelengkapan data penjualan harian sepenuhnya merupakan tanggung jawab operasional Anda.</span>
                </li>
            </ul>
            </div>
        </div>
        </motion.div>

        {/* BAGIAN 3: KEBIJAKAN BERHENTI */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-red-950/10 border border-red-500/20 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="inline-block p-4 rounded-2xl bg-red-500/10 text-red-500 mb-6">
                <ShieldAlert size={32} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Jika Berhenti Langganan?</h3>
              <p className="text-gray-600 mt-2 text-xs uppercase font-black tracking-widest">Data Portability Policy</p>
            </div>
            
            <div className="md:w-2/3 grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Download size={16} className="text-red-500" /> Penyerahan Data
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Kami memberikan ekspor data terakhir bisnis Anda (Daftar Pelanggan, Produk, & Riwayat Pesanan) dalam format Excel/CSV.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Database size={16} className="text-red-500" /> Penonaktifan Sistem
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Layanan server akan dinonaktifkan. Anda menerima "DATANYA", namun bukan kode sumber atau sistem database untuk dijalankan di tempat lain.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-12 text-center text-[10px] text-gray-700 font-bold uppercase tracking-[0.3em]">
          Kepercayaan Anda adalah prioritas utama SobatWeb
        </p>
      </div>
    </section>
  );
};

export default Transparency;