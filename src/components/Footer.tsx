import React from 'react';
import { PageId } from '../types';
import { ArrowUp, Instagram, Youtube, Video, MessageCircle, ExternalLink, MapPin } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A2A1E] text-[#FBF1E6] pt-16 pb-12 border-t-4 border-[#C0583A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row of Official Institutional Logos / Placeholders */}
        <div className="pb-12 border-b border-[#FBF1E6]/15">
          <div className="text-center text-xs tracking-widest text-[#D9825F] uppercase font-semibold mb-6">
            Kolaborasi & Dukungan Kelembagaan Resmi
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Kemdiktisaintek Berdampak', tag: 'Kementerian' },
              { name: 'Direktorat Belmawa', tag: 'Pendanaan PPKO' },
              { name: 'PPK Ormawa 2026', tag: 'Program Nasional' },
              { name: 'Universitas Negeri Yogyakarta', tag: 'Perguruan Tinggi' },
              { name: 'UKMF MIPA Debate Club', tag: 'Ormawa Pelaksana' },
              { name: 'Kalurahan Giripurwo', tag: 'Lokasi & Mitra Desa' },
            ].map((inst, idx) => (
              <div
                key={idx}
                className="bg-[#5A3A2E]/80 border border-[#FBF1E6]/10 rounded-xl p-3 text-center flex flex-col justify-center items-center group hover:border-[#D9825F]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C0583A]/30 flex items-center justify-center text-xs font-bold text-[#FBF1E6] mb-1.5 group-hover:bg-[#C0583A] transition-colors">
                  {inst.name.charAt(0)}
                </div>
                <span className="text-[11px] font-semibold text-[#FFFDF9] leading-tight block">
                  {inst.name}
                </span>
                <span className="text-[9px] text-[#D9825F] mt-0.5">
                  {inst.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Footer: Grid with About, Quick Links, Griya, and Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12 border-b border-[#FBF1E6]/15">
          
          {/* Identity Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C0583A] flex items-center justify-center text-white font-script text-2xl font-bold">
                GC
              </div>
              <div>
                <span className="font-script text-2xl text-[#FFFDF9] font-bold block leading-none">
                  Griya Ceria
                </span>
                <span className="text-[11px] text-[#D9825F] tracking-wider uppercase font-semibold">
                  Giripurwo Berdaya, Cerdas, Mandiri, Berkarya
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FBF1E6]/80 leading-relaxed max-w-sm">
              Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) UKMF MIPA Debate Club (MDC) FMIPA Universitas Negeri Yogyakarta Tahun 2026 di Kalurahan Giripurwo, Purwosari, Gunungkidul.
            </p>

            <div className="text-xs text-[#FBF1E6]/90 flex items-start gap-2 pt-2">
              <MapPin className="w-4 h-4 text-[#D9825F] shrink-0 mt-0.5" />
              <span>
                Kalurahan Giripurwo, Kapanewon Purwosari, Kabupaten Gunungkidul, D.I. Yogyakarta (±40 km dari kampus UNY).
              </span>
            </div>

            <div className="pt-2 text-[11px] text-[#D9825F] font-medium">
              Didukung oleh Direktorat Belmawa, Kemdiktisaintek
            </div>
          </div>

          {/* Quick Links Column 1: Main Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D9825F] font-bold">
              Navigasi Utama
            </h4>
            <ul className="space-y-1.5 text-xs text-[#FBF1E6]/85">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Halaman Muka
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tentang')} className="hover:text-white transition-colors">
                  Tentang Program
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('profil-giripurwo')} className="hover:text-white transition-colors">
                  Profil Giripurwo & Hasil Survei
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('metode-kurikulum')} className="hover:text-white transition-colors">
                  Metode & Kurikulum
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('capaian-dampak')} className="hover:text-white transition-colors">
                  Capaian & Dampak
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mitra-kami')} className="hover:text-white transition-colors">
                  Mitra Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: 4 Griya & Luaran */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D9825F] font-bold">
              Pojok Literasi & Hasil
            </h4>
            <ul className="space-y-1.5 text-xs text-[#FBF1E6]/85">
              <li>
                <button onClick={() => onNavigate('griya-jinawi')} className="hover:text-[#6B8F4E] transition-colors flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#6B8F4E]"></span>
                  Griya Jinawi (Pupuk & Sekam)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('griya-laku')} className="hover:text-[#D9825F] transition-colors flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#8A5A3C]"></span>
                  Griya Laku (UMKM & Digital)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('griya-reksa')} className="hover:text-[#C9617A] transition-colors flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C9617A]"></span>
                  Griya Reksa (Gizi & Parenting)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('griya-rekadaya')} className="hover:text-[#4F86A8] transition-colors flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4F86A8]"></span>
                  Griya Rekadaya (Pemuda & Literasi)
                </button>
              </li>
              <li className="pt-2">
                <button onClick={() => onNavigate('luaran')} className="hover:text-white transition-colors">
                  Katalog 104 Luaran Program
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tempat-luaran')} className="text-[#D9825F] hover:text-white font-medium transition-colors flex items-center gap-1">
                  <span>📍 Tempat-Tempat Luaran (8 Hub)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('keberlanjutan')} className="hover:text-white transition-colors">
                  Keberlanjutan Lembaga Desa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dokumentasi')} className="hover:text-white transition-colors">
                  Dokumentasi & Video
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Social Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D9825F] font-bold">
              Media Sosial
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#FBF1E6]/85 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D9825F]" />
                <span>@ppkomdc.griyaceria</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#FBF1E6]/85 hover:text-white transition-colors"
              >
                <Video className="w-4 h-4 text-[#D9825F]" />
                <span>@ppko_mdcuny2026</span>
              </a>
              <a
                href={SITE_METADATA.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#FBF1E6]/85 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4 text-[#D9825F]" />
                <span>@ppkomdc.griyaceria</span>
              </a>
              <div className="text-[11px] text-[#FBF1E6]/70 pt-2 border-t border-[#FBF1E6]/10">
                <span className="block font-medium text-[#D9825F]">WhatsApp:</span>
                <span>{SITE_METADATA.social.whatsapp}</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('tim-kontak')}
              className="mt-3 w-full py-2 px-3 text-xs font-semibold bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Hubungi Tim Kami</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBF1E6]/70">
          <div>
            © 2026 Griya Ceria · PPK Ormawa UKMF MDC FMIPA Universitas Negeri Yogyakarta. Hak Cipta Dilindungi.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#D9825F] hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-[#5A3A2E] border border-[#FBF1E6]/10"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
