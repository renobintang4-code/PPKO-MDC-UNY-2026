import React, { useState, useRef, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, subFilter?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (page: PageId, subFilter?: string) => {
    onNavigate(page, subFilter);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAboutActive = ['tentang', 'profil-giripurwo', 'metode-kurikulum'].includes(currentPage);
  const isGriyaActive = ['program-griya', 'griya-jinawi', 'griya-laku', 'griya-reksa', 'griya-rekadaya'].includes(currentPage);
  const isLuaranActive = ['luaran', 'tempat-luaran'].includes(currentPage);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#F4DCCB] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Wordmark (Zone 1) */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left focus:outline-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C0583A] to-[#9A4026] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-script text-2xl font-bold leading-none">GC</span>
            </div>
            <div>
              <span className="font-script text-2xl text-[#9A4026] font-bold tracking-wide block leading-none">
                Griya Ceria
              </span>
              <span className="text-[10px] tracking-wider text-[#7C533F] uppercase font-semibold block mt-0.5">
                Giripurwo · PPK Ormawa UNY
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium text-[#5A3A2E]">
            
            {/* 1. Halaman Muka */}
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                currentPage === 'home'
                  ? 'text-[#9A4026] bg-[#F4DCCB]/60 font-semibold'
                  : 'hover:text-[#9A4026] hover:bg-[#F4DCCB]/30'
              }`}
            >
              Halaman Muka
            </button>

            {/* 2. Tentang (Dropdown) */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'tentang' ? null : 'tentang')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  isAboutActive
                    ? 'text-[#9A4026] bg-[#F4DCCB]/60 font-semibold'
                    : 'hover:text-[#9A4026] hover:bg-[#F4DCCB]/30'
                }`}
              >
                <span>Tentang</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'tentang' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'tentang' && (
                <div className="absolute left-0 mt-2 w-64 bg-[#FFFDF9] rounded-xl shadow-xl border border-[#F4DCCB] py-2 z-50 animate-in fade-in slide-in-from-top-1">
                  <button
                    onClick={() => handleNav('tentang')}
                    className={`w-full text-left px-4 py-2.5 text-xs hover:bg-[#F4DCCB]/40 transition-colors block ${currentPage === 'tentang' ? 'text-[#9A4026] font-semibold bg-[#F4DCCB]/30' : 'text-[#5A3A2E]'}`}
                  >
                    <span className="font-semibold block text-[13px]">Tentang Program</span>
                    <span className="text-[11px] text-[#7C533F]">Latar belakang, tujuan & peran para pihak</span>
                  </button>
                  <button
                    onClick={() => handleNav('profil-giripurwo')}
                    className={`w-full text-left px-4 py-2.5 text-xs hover:bg-[#F4DCCB]/40 transition-colors block border-t border-[#F4DCCB]/50 ${currentPage === 'profil-giripurwo' ? 'text-[#9A4026] font-semibold bg-[#F4DCCB]/30' : 'text-[#5A3A2E]'}`}
                  >
                    <span className="font-semibold block text-[13px]">Profil Giripurwo & Hasil Survei</span>
                    <span className="text-[11px] text-[#7C533F]">Demografi, data prasejahtera & potensi</span>
                  </button>
                  <button
                    onClick={() => handleNav('metode-kurikulum')}
                    className={`w-full text-left px-4 py-2.5 text-xs hover:bg-[#F4DCCB]/40 transition-colors block border-t border-[#F4DCCB]/50 ${currentPage === 'metode-kurikulum' ? 'text-[#9A4026] font-semibold bg-[#F4DCCB]/30' : 'text-[#5A3A2E]'}`}
                  >
                    <span className="font-semibold block text-[13px]">Metode & Kurikulum</span>
                    <span className="text-[11px] text-[#7C533F]">Kurikulum QRCBN & tahapan andragogi</span>
                  </button>
                </div>
              )}
            </div>

            {/* 3. Program Griya (Dropdown) */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'griya' ? null : 'griya')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  isGriyaActive
                    ? 'text-[#9A4026] bg-[#F4DCCB]/60 font-semibold'
                    : 'hover:text-[#9A4026] hover:bg-[#F4DCCB]/30'
                }`}
              >
                <span>Program Griya</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'griya' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'griya' && (
                <div className="absolute left-0 mt-2 w-72 bg-[#FFFDF9] rounded-xl shadow-xl border border-[#F4DCCB] py-2 z-50">
                  <button
                    onClick={() => handleNav('program-griya')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-[#9A4026] hover:bg-[#F4DCCB]/40 transition-colors border-b border-[#F4DCCB]"
                  >
                    Ikhtisar 4 Pojok Literasi & Keterpaduan
                  </button>
                  <button
                    onClick={() => handleNav('griya-jinawi')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#EEF3EA] transition-colors block text-[#4A6534]"
                  >
                    <span className="font-semibold block text-[13px]">Griya Jinawi (Sage)</span>
                    <span className="text-[11px] text-[#6B8F4E]">Pupuk organik Gemah Ripah & limbah</span>
                  </button>
                  <button
                    onClick={() => handleNav('griya-laku')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F5ECE6] transition-colors block text-[#633F28]"
                  >
                    <span className="font-semibold block text-[13px]">Griya Laku (Karamel)</span>
                    <span className="text-[11px] text-[#8A5A3C]">Pemasaran digital & marketplace UMKM</span>
                  </button>
                  <button
                    onClick={() => handleNav('griya-reksa')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#FAEDF0] transition-colors block text-[#963C53]"
                  >
                    <span className="font-semibold block text-[13px]">Griya Reksa (Dusty Rose)</span>
                    <span className="text-[11px] text-[#C9617A]">Gizi stunting, resep PMT & keuangan</span>
                  </button>
                  <button
                    onClick={() => handleNav('griya-rekadaya')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#EAF2F7] transition-colors block text-[#325C75]"
                  >
                    <span className="font-semibold block text-[13px]">Griya Rekadaya (Dusty Blue)</span>
                    <span className="text-[11px] text-[#4F86A8]">Literasi digital muda & Satgas Forum Anak</span>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Capaian & Dampak */}
            <button
              onClick={() => handleNav('capaian-dampak')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                currentPage === 'capaian-dampak'
                  ? 'text-[#9A4026] bg-[#F4DCCB]/60 font-semibold'
                  : 'hover:text-[#9A4026] hover:bg-[#F4DCCB]/30'
              }`}
            >
              Capaian & Dampak
            </button>

            {/* 5. Mitra Kami */}
            <button
              onClick={() => handleNav('mitra-kami')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                currentPage === 'mitra-kami'
                  ? 'text-[#9A4026] bg-[#F4DCCB]/60 font-semibold'
                  : 'hover:text-[#9A4026] hover:bg-[#F4DCCB]/30'
              }`}
            >
              Mitra Kami
            </button>

            {/* 6. Luaran (Dropdown) */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'luaran' ? null : 'luaran')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  isLuaranActive
                    ? 'text-[#9A4026] bg-[#F4DCCB]/60 font-semibold'
                    : 'hover:text-[#9A4026] hover:bg-[#F4DCCB]/30'
                }`}
              >
                <span>Luaran</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'luaran' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'luaran' && (
                <div className="absolute right-0 mt-2 w-64 bg-[#FFFDF9] rounded-xl shadow-xl border border-[#F4DCCB] py-2 z-50">
                  <button
                    onClick={() => handleNav('luaran', 'semua')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-[#9A4026] hover:bg-[#F4DCCB]/30 border-b border-[#F4DCCB]"
                  >
                    Katalog 104 Luaran Program
                  </button>
                  <button
                    onClick={() => handleNav('tempat-luaran')}
                    className="w-full text-left px-4 py-2.5 text-xs font-semibold text-[#C0583A] hover:bg-[#F4DCCB]/40 bg-[#FBF1E6]/70 border-b border-[#F4DCCB] flex items-center justify-between"
                  >
                    <span>📍 Tempat & Sentra Sebaran Luaran</span>
                    <span className="text-[10px] bg-[#C0583A] text-white px-1.5 py-0.5 rounded-sm">8 Hub</span>
                  </button>
                  <button onClick={() => handleNav('luaran', 'buku')} className="w-full text-left px-4 py-2 text-xs hover:bg-[#F4DCCB]/30 text-[#5A3A2E]">
                    Buku & Kurikulum QRCBN
                  </button>
                  <button onClick={() => handleNav('luaran', 'poster')} className="w-full text-left px-4 py-2 text-xs hover:bg-[#F4DCCB]/30 text-[#5A3A2E]">
                    Poster & Edukasi Visual
                  </button>
                  <button onClick={() => handleNav('luaran', 'artikel')} className="w-full text-left px-4 py-2 text-xs hover:bg-[#F4DCCB]/30 text-[#5A3A2E]">
                    Artikel Berita & Publikasi
                  </button>
                  <button onClick={() => handleNav('luaran', 'produk')} className="w-full text-left px-4 py-2 text-xs hover:bg-[#F4DCCB]/30 text-[#5A3A2E]">
                    Produk UMKM & Pupuk
                  </button>
                  <button onClick={() => handleNav('luaran', 'video')} className="w-full text-left px-4 py-2 text-xs hover:bg-[#F4DCCB]/30 text-[#5A3A2E]">
                    Video Dokumenter & Edukasi
                  </button>
                  <button onClick={() => handleNav('luaran', 'legalitas')} className="w-full text-left px-4 py-2 text-xs hover:bg-[#F4DCCB]/30 text-[#5A3A2E]">
                    Legalitas & Sertifikasi (NIB/Halal/SK)
                  </button>
                </div>
              )}
            </div>

            {/* 7. Keberlanjutan */}
            <button
              onClick={() => handleNav('keberlanjutan')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                currentPage === 'keberlanjutan'
                  ? 'text-[#9A4026] bg-[#F4DCCB]/60 font-semibold'
                  : 'hover:text-[#9A4026] hover:bg-[#F4DCCB]/30'
              }`}
            >
              Keberlanjutan
            </button>

            {/* 8. Dokumentasi */}
            <button
              onClick={() => handleNav('dokumentasi')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                currentPage === 'dokumentasi'
                  ? 'text-[#9A4026] bg-[#F4DCCB]/60 font-semibold'
                  : 'hover:text-[#9A4026] hover:bg-[#F4DCCB]/30'
              }`}
            >
              Dokumentasi
            </button>

            {/* 9. Tim & Kontak */}
            <button
              onClick={() => handleNav('tim-kontak')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                currentPage === 'tim-kontak'
                  ? 'text-[#9A4026] bg-[#F4DCCB]/60 font-semibold'
                  : 'hover:text-[#9A4026] hover:bg-[#F4DCCB]/30'
              }`}
            >
              Tim & Kontak
            </button>
          </nav>

          {/* Zone 3: Primary Action / Belmawa Badge */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNav('tentang')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#C0583A] hover:bg-[#9A4026] rounded-full transition-all shadow-xs hover:shadow-md whitespace-nowrap"
            >
              Kenali Program
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#5A3A2E] hover:text-[#9A4026] hover:bg-[#F4DCCB]/50 transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#F4DCCB] px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top">
          <div className="space-y-1 text-sm font-medium text-[#5A3A2E]">
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F4DCCB]/40"
            >
              Halaman Muka
            </button>

            <div className="pt-2 pb-1 text-xs font-bold text-[#9A4026] uppercase tracking-wider px-3">
              Tentang Program
            </div>
            <button onClick={() => handleNav('tentang')} className="w-full text-left pl-6 pr-3 py-2 rounded-lg hover:bg-[#F4DCCB]/40 text-xs">
              Tentang Program & Tujuan
            </button>
            <button onClick={() => handleNav('profil-giripurwo')} className="w-full text-left pl-6 pr-3 py-2 rounded-lg hover:bg-[#F4DCCB]/40 text-xs">
              Profil Giripurwo & Hasil Survei
            </button>
            <button onClick={() => handleNav('metode-kurikulum')} className="w-full text-left pl-6 pr-3 py-2 rounded-lg hover:bg-[#F4DCCB]/40 text-xs">
              Metode & Kurikulum QRCBN
            </button>

            <div className="pt-2 pb-1 text-xs font-bold text-[#9A4026] uppercase tracking-wider px-3">
              Empat Pojok Literasi
            </div>
            <button onClick={() => handleNav('program-griya')} className="w-full text-left pl-6 pr-3 py-2 rounded-lg hover:bg-[#F4DCCB]/40 text-xs font-semibold">
              Semua Griya (Keterpaduan)
            </button>
            <button onClick={() => handleNav('griya-jinawi')} className="w-full text-left pl-6 pr-3 py-2 rounded-lg hover:bg-[#EEF3EA] text-xs text-[#4A6534]">
              Griya Jinawi (Pertanian & Pupuk)
            </button>
            <button onClick={() => handleNav('griya-laku')} className="w-full text-left pl-6 pr-3 py-2 rounded-lg hover:bg-[#F5ECE6] text-xs text-[#633F28]">
              Griya Laku (UMKM & Marketplace)
            </button>
            <button onClick={() => handleNav('griya-reksa')} className="w-full text-left pl-6 pr-3 py-2 rounded-lg hover:bg-[#FAEDF0] text-xs text-[#963C53]">
              Griya Reksa (Gizi & Keuangan)
            </button>
            <button onClick={() => handleNav('griya-rekadaya')} className="w-full text-left pl-6 pr-3 py-2 rounded-lg hover:bg-[#EAF2F7] text-xs text-[#325C75]">
              Griya Rekadaya (Literasi Digital)
            </button>

            <div className="pt-2 pb-1 text-xs font-bold text-[#9A4026] uppercase tracking-wider px-3">
              Publikasi & Hasil
            </div>
            <button onClick={() => handleNav('capaian-dampak')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F4DCCB]/40">
              Capaian & Dampak
            </button>
            <button onClick={() => handleNav('mitra-kami')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F4DCCB]/40">
              Mitra Kami
            </button>
            <button onClick={() => handleNav('luaran')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F4DCCB]/40">
              Katalog 104 Luaran Program
            </button>
            <button onClick={() => handleNav('tempat-luaran')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F4DCCB]/40 text-[#C0583A] font-semibold flex items-center justify-between">
              <span>📍 Tempat-Tempat Semua Luaran</span>
              <span className="text-[10px] bg-[#C0583A] text-white px-2 py-0.5 rounded-sm">8 Hub</span>
            </button>
            <button onClick={() => handleNav('keberlanjutan')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F4DCCB]/40">
              Keberlanjutan
            </button>
            <button onClick={() => handleNav('dokumentasi')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F4DCCB]/40">
              Dokumentasi Kegiatan
            </button>
            <button onClick={() => handleNav('tim-kontak')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F4DCCB]/40">
              Tim Pelaksana & Kontak
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
