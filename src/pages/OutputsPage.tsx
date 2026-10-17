import React, { useState } from 'react';
import { PageId, OutputCategory } from '../types';
import { Badge } from '../components/Badge';
import { SITE_METADATA, ALL_PRODUCT_OUTPUTS } from '../data/siteData';
import { 
  BookOpen, 
  Image, 
  Newspaper, 
  ShoppingBag, 
  Play, 
  FileCheck, 
  ExternalLink,
  MapPin,
  ArrowRight,
  Search,
  CheckCircle2,
  Filter
} from 'lucide-react';

interface OutputsPageProps {
  initialCategory?: OutputCategory;
  onNavigate: (page: PageId, subFilter?: string) => void;
}

export const OutputsPage: React.FC<OutputsPageProps> = ({ initialCategory = 'semua', onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<OutputCategory>(initialCategory);
  const [selectedGriya, setSelectedGriya] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  React.useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const categories = [
    { id: 'semua', label: 'Semua Luaran Produk' },
    { id: 'produk', label: 'Produk Fisik & Olahan' },
    { id: 'buku', label: 'Buku, Kurikulum & Modul' },
    { id: 'legalitas', label: 'Legalitas & Sertifikasi' },
    { id: 'poster', label: 'Poster & Infografis' },
    { id: 'video', label: 'Video & Audio Visual' },
    { id: 'artikel', label: 'Publikasi Berita' },
  ];

  const griyaOptions = [
    { id: 'semua', label: 'Semua Pojok' },
    { id: 'Griya Jinawi', label: 'Griya Jinawi (Pupuk & Tani)' },
    { id: 'Griya Laku', label: 'Griya Laku (UMKM & Toko)' },
    { id: 'Griya Reksa', label: 'Griya Reksa (Gizi & PMT)' },
    { id: 'Griya Rekadaya', label: 'Griya Rekadaya (Digital & Pemuda)' },
    { id: 'Seluruh Griya', label: 'Kelembagaan & Terpadu' },
  ];

  const filteredOutputs = ALL_PRODUCT_OUTPUTS.filter((item) => {
    const matchesCategory = selectedCategory === 'semua' || item.category === selectedCategory;
    const matchesGriya = selectedGriya === 'semua' || item.griya === selectedGriya;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.griya.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesGriya && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'buku': return BookOpen;
      case 'produk': return ShoppingBag;
      case 'legalitas': return FileCheck;
      case 'poster': return Image;
      case 'video': return Play;
      case 'artikel': return Newspaper;
      default: return ShoppingBag;
    }
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Daftar Luaran Produk Resmi</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">Lampiran Sublaporan Akhir PPK Ormawa 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Luaran Program Griya Ceria
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Menghasilkan 104 total luaran (7 luaran wajib Belmawa dan 97 luaran tambahan) yang memuat seluruh luaran produk pupuk organik, olahan pangan UMKM, buku kurikulum terstandar, buku resep PMT balita, legalitas izin usaha NIB & halal, video edukasi, hingga dokumenter audio-visual sebagaimana tercantum dalam lampiran sublaporan akhir.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner Navigasi ke Tempat / Sentra Luaran */}
        <section className="p-5 sm:p-6 bg-gradient-to-r from-[#FBF1E6] via-[#FFFDF9] to-[#F4DCCB]/60 rounded-2xl border border-[#F4DCCB] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C0583A] text-white flex items-center justify-center shrink-0 shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#C0583A] uppercase tracking-wider block">
                Sentra & Tempat Penyimpanan Luaran
              </span>
              <h3 className="font-bold text-base sm:text-lg text-[#4A2A1E]">
                Pusat & Sentra Sebaran Seluruh Luaran Produk di Giripurwo
              </h3>
              <p className="text-xs text-[#5A3A2E] mt-0.5">
                Lihat lokasi penempatan luaran di Balai Kalurahan, Sentra Pupuk Padukuhan Sumur, Demoplot Gubar, Sentra UMKM Temon, Dapur PMT Kacangan, dan Ruang Karang Taruna.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('tempat-luaran')}
            className="w-full md:w-auto px-5 py-2.5 bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 shrink-0"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Lihat Sentra & Tempat Luaran (8 Hub) →</span>
          </button>
        </section>

        {/* Filter Controls Bar */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7C533F] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama produk, jenis, atau lokasi penyimpanan..."
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

            {/* Griya Filter Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#7C533F] whitespace-nowrap">Filter Griya:</span>
              <select
                value={selectedGriya}
                onChange={(e) => setSelectedGriya(e.target.value)}
                className="px-3 py-2 text-xs font-semibold bg-[#FFFDF9] border border-[#F4DCCB] rounded-xl text-[#4A2A1E] focus:outline-hidden focus:border-[#C0583A]"
              >
                {griyaOptions.map((g) => (
                  <option key={g.id} value={g.id}>{g.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as OutputCategory)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-[#C0583A] text-white shadow-xs'
                    : 'text-[#5A3A2E] hover:bg-[#F4DCCB]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-[#7C533F]">
          <span>
            Menampilkan <strong>{filteredOutputs.length}</strong> luaran produk sesuai lampiran sublaporan akhir
          </span>
          {selectedGriya !== 'semua' && (
            <span className="font-semibold text-[#9A4026]">
              Filter: {selectedGriya}
            </span>
          )}
        </div>

        {/* Output Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOutputs.map((item) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <div
                key={item.id}
                className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span 
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase"
                        style={{ color: item.color, backgroundColor: `${item.color}15` }}
                      >
                        {item.griya}
                      </span>
                      <Badge type={item.badge} />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-[#7C533F] uppercase tracking-wider block mb-0.5">
                      {item.type}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-[#4A2A1E] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5A3A2E] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Lokasi / Sentra Penyimpanan */}
                  <div className="flex items-start gap-1.5 p-2.5 bg-[#FBF1E6] rounded-xl text-[11px] text-[#4A2A1E] font-medium border border-[#F4DCCB]/60">
                    <MapPin className="w-3.5 h-3.5 text-[#C0583A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#9A4026] block">Tempat / Sentra:</span>
                      <span className="text-[#4A2A1E]">{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F4DCCB]/60 flex items-center justify-between gap-2">
                  {item.isEmbed ? (
                    <a
                      href={SITE_METADATA.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 px-3 bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Tonton Video di YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="w-full py-1.5 px-3 bg-[#FBF1E6] text-[#7C533F] border border-[#F4DCCB] rounded-xl text-[11px] font-medium text-center">
                      {item.actionLabel || 'Tercatat di Sublaporan Akhir'}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Blok Lanjut Baca */}
        <section className="p-6 bg-[#F4DCCB]/40 rounded-2xl border border-[#F4DCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#9A4026] uppercase block">Lanjut Jelajah:</span>
            <span className="text-sm font-semibold text-[#4A2A1E]">Ketahui sentra tempat penyimpanan atau profil mitra pendukung</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('tempat-luaran')}
              className="px-4 py-2 text-xs font-semibold bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl transition-colors shadow-xs flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Sentra & Tempat Luaran (8 Hub) →</span>
            </button>
            <button
              onClick={() => onNavigate('mitra-kami')}
              className="px-4 py-2 text-xs font-semibold bg-[#FFFDF9] hover:bg-[#FBF1E6] text-[#9A4026] rounded-xl border border-[#F4DCCB] transition-colors shadow-xs"
            >
              Mitra Kami (16 Lembaga) →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
