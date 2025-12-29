import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const Footer = () => {
  // Fungsi helper untuk generate link WhatsApp
  const waLink = (number, message) => {
    return `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  };

  const admin1 = "6287888082449";
  const admin2 = "6281319878831";

  return (
    <footer className="py-24 bg-black border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo & Deskripsi */}
        <div className="max-w-xs">
          <h2 className="text-3xl font-black text-white tracking-tighter mb-4 italic">SOBATWEB</h2>
          <p className="text-gray-500 text-sm font-light leading-loose">
            Membantu UMKM Indonesia naik kelas melalui Digital Identity yang profesional, terjangkau, dan tanpa ribet.
          </p>
        </div>
        
        {/* Kontak Person */}
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-6">Hubungi Kami</h4>
            <div className="space-y-6">
              {/* Admin 1 */}
              <a 
                href={waLink(admin1, "Halo Admin 1 SobatWeb, saya ingin bertanya tentang layanan website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition group"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Admin 1 (Titus)</div>
                  <div className="text-sm font-bold">+62 878-8808-2449</div>
                </div>
              </a>

              {/* Admin 2 */}
              <a 
                href={waLink(admin2, "Halo Admin 2 SobatWeb, saya ingin konsultasi mengenai paket website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition group"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Admin 2</div>
                  <div className="text-sm font-bold">+62 813-1987-8831</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 text-center text-[10px] text-gray-700 font-bold uppercase tracking-widest">
        &copy; 2025 SobatWeb - Digital Identity Agency. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;