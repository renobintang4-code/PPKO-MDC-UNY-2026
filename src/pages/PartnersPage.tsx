import React, { useState } from 'react';
import { PageId, PartnerCategory } from '../types';
import { PARTNERS_ECOSYSTEM } from '../data/siteData';
import { Badge } from '../components/Badge';
import { 
  Building2, 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Search,
  FileCheck,
  Users,
  Compass,
  MapPin,
  ExternalLink,
  Quote,
  Sparkles,
  Layers
} from 'lucide-react';

interface PartnersPageProps {
  onNavigate: (page: PageId, subFilter?: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'semua', label: 'Semua Mitra (16)' },
    { id: 'pemerintah', label: 'Pemerintah & Instansi Teknis' },
    { id: 'akademisi', label: 'Perguruan Tinggi & Pembina' },
    { id: 'komunitas', label: 'Organisasi Komunitas Desa' },
    { id: 'standarisasi', label: 'Legalitas & Mutu Resmi' },
    { id: 'media', label: 'Media & Agregator' },
  ];

  const filteredPartners = PARTNERS_ECOSYSTEM.filter((p) => {
    const matchesCategory = selectedCategory === 'semua' || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.griya.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.legalDocument && p.legalDocument.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.jointOutputs && p.jointOutputs.some(o => o.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Kolaborasi Multi-Pihak</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">Sinergi Hexa-Helix 16 Lembaga Mitra</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Mitra Kami
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Keberhasilan dan keberlanjutan program Griya Ceria terwujud berkat kolaborasi erat dengan lembaga kementerian nasional, perguruan tinggi, pemerintah kalurahan, dinas-dinas teknis Kabupaten Gunungkidul, komunitas warga, dan agregator pasar.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Quick Sinergi Highlight Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#9A4026]">16 Lembaga</span>
            <span className="text-xs font-bold text-[#4A2A1E] block">Total Mitra Kolaborator</span>
            <p className="text-[11px] text-[#7C533F]">Kerjasama resmi lintas akademisi, pemerintah, dan warga</p>
          </div>

          <div className="p-5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#C0583A]">Hexa-Helix</span>
            <span className="text-xs font-bold text-[#4A2A1E] block">Model Integrasi</span>
            <p className="text-[11px] text-[#7C533F]">Sinergi akademisi, dinas, komunitas, bisnis, media, dan legalitas</p>
          </div>

          <div className="p-5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#6B8F4E]">104 Luaran</span>
            <span className="text-xs font-bold text-[#4A2A1E] block">Dihasilkan Bersama</span>
            <p className="text-[11px] text-[#7C533F]">Kurikulum, pupuk, izin NIB, resep PMT, dan SK kelembagaan</p>
          </div>

          <div className="p-5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#4F86A8]">100% Realisasi</span>
            <span className="text-xs font-bold text-[#4A2A1E] block">Status Kemitraan</span>
            <p className="text-[11px] text-[#7C533F]">Seluruh mitra aktif mendukung terlaksananya program</p>
          </div>
        </section>

        {/* Lembaga Pengarah Utama (UNY & Belmawa) */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
              Penyelenggara & Pembina Utama
            </span>
            <span className="text-xs text-[#7C533F] font-medium">Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#C0583A] uppercase tracking-wider block">Pendanaan & Pembinaan Nasional</span>
                <h3 className="font-bold text-base text-[#4A2A1E]">Direktorat Belmawa, Kemdiktisaintek RI</h3>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  Penyelenggara nasional Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) yang mendanai dan membina pelaksanaan program Griya Ceria.
                </p>
              </div>
              <div className="pt-2 border-t border-[#F4DCCB]/60 text-[11px] text-[#7C533F]">
                Legalitas: SK Penetapan Sub-Proposal PPK Ormawa 2026
              </div>
            </div>

            <div className="p-5 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#C0583A] uppercase tracking-wider block">Perguruan Tinggi Pengusul</span>
                <h3 className="font-bold text-base text-[#4A2A1E]">Universitas Negeri Yogyakarta</h3>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  Fasilitasi melalui Abdidaya Centre, Tim Reviewer PT, workshop dosen pembimbing, monitoring internal, visitasi pimpinan, dan konversi SKS mata kuliah pengabdian.
                </p>
              </div>
              <div className="pt-2 border-t border-[#F4DCCB]/60 text-[11px] text-[#7C533F]">
                Legalitas: Surat Tugas Rektor & SK Dekan FMIPA UNY
              </div>
            </div>

            <div className="p-5 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#C0583A] uppercase tracking-wider block">Ormawa & Dosen Pendamping</span>
                <h3 className="font-bold text-base text-[#4A2A1E]">UKMF MDC FMIPA UNY</h3>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  Dipimpin oleh Dosen Pendamping <strong>Kuntum Febriyantiningrum, S.Si., M.Sc.</strong> bersama 14 mahasiswa pelaksana dan Divisi Pengabdian Masyarakat MDC.
                </p>
              </div>
              <div className="pt-2 border-t border-[#F4DCCB]/60 text-[11px] text-[#7C533F]">
                Legalitas: SK Kepengurusan Ormawa UKMF MDC FMIPA UNY
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7C533F] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama lembaga, peran, atau luaran bersama..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#FFFDF9] border border-[#F4DCCB] rounded-xl text-[#4A2A1E] placeholder-[#7C533F]/70 focus:outline-hidden focus:border-[#C0583A] focus:ring-1 focus:ring-[#C0583A]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7C533F] hover:text-[#9A4026]"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Hub Luaran Button */}
            <button
              onClick={() => onNavigate('tempat-luaran')}
              className="px-4 py-2.5 bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl text-xs font-semibold transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Lihat Tempat-Tempat Semua Luaran (8 Hub) →</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as PartnerCategory)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#C0583A] text-white shadow-xs'
                    : 'text-[#5A3A2E] hover:bg-[#F4DCCB]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Partners Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#4A2A1E]">
              Daftar Mitra Kolaborasi ({filteredPartners.length})
            </h2>
            <span className="text-xs text-[#7C533F]">
              Menampilkan {filteredPartners.length} dari 16 mitra
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((p) => (
              <div
                key={p.id}
                className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="space-y-3">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase"
                      style={{ color: p.color, backgroundColor: `${p.color}15` }}
                    >
                      {p.griya}
                    </span>
                    <Badge type={p.type} />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-[#7C533F] uppercase tracking-wider block mb-0.5">
                      {p.categoryLabel}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-[#4A2A1E] leading-snug">
                      {p.name}
                    </h3>
                  </div>

                  <div className="p-2.5 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB]/60">
                    <span className="text-[10px] font-bold text-[#9A4026] uppercase block">Peran Kemitraan:</span>
                    <p className="text-xs font-semibold text-[#4A2A1E] mt-0.5 leading-snug">
                      {p.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#5A3A2E] leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Legal Basis */}
                  {p.legalDocument && (
                    <div className="text-[11px] text-[#7C533F] flex items-start gap-1.5 pt-1">
                      <FileCheck className="w-3.5 h-3.5 text-[#6B8F4E] shrink-0 mt-0.5" />
                      <span><strong>Dokumen Kerjasama:</strong> {p.legalDocument}</span>
                    </div>
                  )}

                  {/* Joint Outputs */}
                  {p.jointOutputs && p.jointOutputs.length > 0 && (
                    <div className="space-y-1 pt-1 border-t border-[#F4DCCB]/50">
                      <span className="text-[10px] font-bold text-[#7C533F] uppercase block">
                        Luaran yang Dihasilkan Bersama:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {p.jointOutputs.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-[#F4DCCB]/50 text-[#9A4026] px-2 py-0.5 rounded-md font-medium"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Testimonial Quote */}
                  {p.testimony && (
                    <div className="p-3 bg-[#FFFDF9] rounded-xl border-l-3 border-[#C0583A] border-y border-r border-[#F4DCCB] space-y-1">
                      <Quote className="w-3.5 h-3.5 text-[#C0583A]" />
                      <p className="text-[11px] italic text-[#4A2A1E] leading-relaxed">
                        "{p.testimony.quote}"
                      </p>
                      <span className="text-[10px] font-bold text-[#7C533F] block">
                        — {p.testimony.person}, {p.testimony.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer Info */}
                <div className="pt-3 border-t border-[#F4DCCB]/60 flex items-center justify-between text-[11px] text-[#7C533F]">
                  <span>Unit: {p.picOrContact || 'Sekretariat Mitra'}</span>
                  <span className="font-semibold text-[#9A4026]">Aktif</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Matriks Kerjasama Hexa-Helix */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
              Arsitektur Sinergi
            </span>
            <h3 className="text-xl font-bold text-[#4A2A1E]">
              Matriks Sinergi Hexa-Helix Griya Ceria
            </h3>
            <p className="text-xs sm:text-sm text-[#7C533F]">
              Kerangka pembagian peran multi-pihak dalam mewujudkan Desa Cerdas Kalurahan Giripurwo yang mandiri dan berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="font-bold text-[#C0583A] uppercase text-[11px] block">1. Academics (Akademisi)</span>
              <p className="font-semibold text-[#4A2A1E]">UNY, LPPM, FMIPA, & Ormawa UKMF MDC</p>
              <p className="text-[#5A3A2E] text-[11px] leading-relaxed">
                Menyusun kurikulum berbasis andragogi ber-QRCBN, mengawal mutu riset pupuk, transfer teknologi marketplace & AI, serta memonitor perkembangan capaian warga.
              </p>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="font-bold text-[#4A2A1E] uppercase text-[11px] block">2. Government (Pemerintah)</span>
              <p className="font-semibold text-[#4A2A1E]">Belmawa, Pemkal Giripurwo, BPP, Puskesmas, Disdik</p>
              <p className="text-[#5A3A2E] text-[11px] leading-relaxed">
                Menerbitkan regulasi SK Lurah, payung hukum kelembagaan, narasumber ahli pertanian dan kesehatan, serta pengesahan legalitas kurikulum pendidikan nonformal.
              </p>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="font-bold text-[#6B8F4E] uppercase text-[11px] block">3. Community (Masyarakat)</span>
              <p className="font-semibold text-[#4A2A1E]">Gapoktan, PKK, Karang Taruna, Forum Anak, 10 Padukuhan</p>
              <p className="text-[#5A3A2E] text-[11px] leading-relaxed">
                Menjadi subjek aktif penerima manfaat, penyedia bahan limbah dan dapur PMT, pelopor literasi digital sebaya, serta pengelola operasional sentra pasca-program.
              </p>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="font-bold text-[#8A5A3C] uppercase text-[11px] block">4. Business (Pelaku Usaha)</span>
              <p className="font-semibold text-[#4A2A1E]">Kelompok Usaha Desa Prima & Desa Preneur Giripurwo</p>
              <p className="text-[#5A3A2E] text-[11px] leading-relaxed">
                Mengembangkan produk olahan pangan lokal, meningkatkan mutu kemasan terstandar, dan mengoperasikan 4 etalase toko marketplace untuk penetrasi pasar luas.
              </p>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="font-bold text-[#9A4026] uppercase text-[11px] block">5. Media (Diseminasi Informasi)</span>
              <p className="font-semibold text-[#4A2A1E]">Humas UNY, Portal Kalurahan, Media Surat Kabar DIY</p>
              <p className="text-[#5A3A2E] text-[11px] leading-relaxed">
                Menyebarluaskan praktik baik pemberdayaan Griya Ceria kepada masyarakat umum, menarik perhatian pemangku kebijakan, serta menginspirasi gerakan literasi desa lain.
              </p>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="font-bold text-[#4F86A8] uppercase text-[11px] block">6. Aggregator & Standarisasi</span>
              <p className="font-semibold text-[#4A2A1E]">Shopee, DPMPTSP (NIB), BPJPH (Halal), DJKI (HKI)</p>
              <p className="text-[#5A3A2E] text-[11px] leading-relaxed">
                Menyediakan infrastruktur marketplace digital dan menjamin standarisasi hukum produk melalui nomor izin usaha, sertifikasi halal, dan perlindungan hak cipta.
              </p>
            </div>
          </div>
        </section>

        {/* Blok Lanjut ke Tempat Luaran */}
        <section className="p-6 sm:p-8 bg-gradient-to-r from-[#9A4026] to-[#C0583A] text-white rounded-2xl border border-[#F4DCCB] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F4DCCB] bg-white/10 px-3 py-1 rounded-full inline-block">
              Sentra & Tempat Sebaran Luaran
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Ingin Mengetahui Tempat Fisik dan Digital dari Seluruh Luaran?
            </h3>
            <p className="text-xs sm:text-sm text-[#FBF1E6]/90 leading-relaxed">
              Kunjungi halaman Sentra Luaran untuk melihat peta lokasi penyimpanan buku kurikulum di Balai Kalurahan, rumah kompos Jinawi di Padukuhan Sumur, galeri UMKM di Padukuhan Temon, hingga repositori digital.
            </p>
          </div>
          <button
            onClick={() => onNavigate('tempat-luaran')}
            className="px-6 py-3 bg-[#FFFDF9] hover:bg-[#FBF1E6] text-[#9A4026] text-xs font-bold rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            <span>Kunjungi Tempat Luaran →</span>
          </button>
        </section>

      </div>
    </div>
  );
};
